package server

import (
	ocontext "context"
	"io"
	"mime"
	"net"
	"net/http"
	"strings"

	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	"github.com/grpc-ecosystem/go-grpc-middleware/recovery"
	"github.com/grpc-ecosystem/go-grpc-middleware/tags"
	"github.com/grpc-ecosystem/go-grpc-middleware/tracing/opentracing"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	negronilogrus "github.com/meatballhat/negroni-logrus"
	"github.com/opentracing/opentracing-go"
	"github.com/philips/go-bindata-assetfs"
	"github.com/sirupsen/logrus"
	"github.com/soheilhy/cmux"
	"github.com/urfave/negroni"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

	"github.com/hatena/ipdrawer/pkg/base"
	"github.com/hatena/ipdrawer/pkg/ipam"
	"github.com/hatena/ipdrawer/pkg/server/serverpb"
	"github.com/hatena/ipdrawer/pkg/ui"
	"github.com/hatena/ipdrawer/pkg/ui/data/swagger"
	"github.com/hatena/ipdrawer/pkg/utils/protoutil"
)

var logrusEntry = logrus.NewEntry(logrus.New())

type APIServer struct {
	lis     net.Listener
	manager *ipam.IPManager
	grpcS   *grpc.Server
	httpS   *http.Server
}

func NewServer(cfg *base.Config) *APIServer {
	mngr := ipam.NewIPManager(cfg)
	lis, err := net.Listen("tcp", ":"+cfg.Port)

	if err != nil {
		panic(err)
	}
	return &APIServer{
		lis:     lis,
		manager: mngr,
	}
}

func (api *APIServer) newGateway(ctx context.Context) (http.Handler, error) {
	jsonpb := &protoutil.JSONPb{
		EnumsAsInts:  true,
		EmitDefaults: true,
		Indent:       "  ",
	}
	protopb := new(protoutil.ProtoPb)
	mux := runtime.NewServeMux(
		runtime.WithMarshalerOption(runtime.MIMEWildcard, jsonpb),
		runtime.WithMarshalerOption("application/json", jsonpb),
		runtime.WithMarshalerOption("application/x-protobuf", protopb),
		runtime.WithProtoErrorHandler(runtime.DefaultHTTPProtoErrorHandler),
	)
	addr := api.lis.Addr().String()
	opts := []grpc.DialOption{grpc.WithInsecure()}

	if err := serverpb.RegisterNetworkServiceV0HandlerFromEndpoint(
		ctx, mux, addr, opts); err != nil {
		return nil, err
	}
	if err := serverpb.RegisterIPServiceV0HandlerFromEndpoint(
		ctx, mux, addr, opts); err != nil {
		return nil, err
	}
	if err := serverpb.RegisterPoolServiceV0HandlerFromEndpoint(
		ctx, mux, addr, opts); err != nil {
		return nil, err
	}

	n := negroni.New()
	n.Use(negroni.NewRecovery())
	n.Use(negronilogrus.NewMiddleware())
	n.UseHandler(mux)

	return mux, nil
}

func serveSwagger(mux *http.ServeMux) {
	mime.AddExtensionType(".svg", "image/svg+xml")

	// Expose files in third_party/swagger-ui/ on <host>/swagger-ui
	fileServer := http.FileServer(&assetfs.AssetFS{
		Asset:    swagger.Asset,
		AssetDir: swagger.AssetDir,
		Prefix:   "third_party/swagger-ui",
	})
	prefix := "/swagger-ui/"
	mux.Handle(prefix, http.StripPrefix(prefix, fileServer))

	mux.HandleFunc("/swagger.json", func(w http.ResponseWriter, req *http.Request) {
		io.Copy(w, strings.NewReader(serverpb.Swagger))
	})
}

func (api *APIServer) serverUI(mux *http.ServeMux) {
	fileServer := http.FileServer(&assetfs.AssetFS{
		Asset:    ui.Asset,
		AssetDir: ui.AssetDir,
		Prefix:   "pkg/ui/dist",
	})

	mux.Handle("/bundle.js", fileServer)
	mux.Handle("/index.html", fileServer)
	mux.Handle("/styles.css", fileServer)
	mux.Handle("/vendor.bundle.js", fileServer)

	mux.Handle("/ui/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = "/"
		fileServer.ServeHTTP(w, r)
	}))
}

func (api *APIServer) Start() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	cm := cmux.New(api.lis)
	grpcL := cm.Match(cmux.HTTP2HeaderField("content-type", "application/grpc"))
	httpL := cm.Match(cmux.HTTP1Fast())

	api.grpcS = grpc.NewServer(
		grpc.StreamInterceptor(grpc_middleware.ChainStreamServer(
			grpc_ctxtags.StreamServerInterceptor(),
			grpc_opentracing.StreamServerInterceptor(),
			grpc_recovery.StreamServerInterceptor(
				grpc_recovery.WithRecoveryHandler(recoveryFunc)),
			grpc_logrus.StreamServerInterceptor(logrusEntry),
		)),
		grpc.UnaryInterceptor(grpc_middleware.ChainUnaryServer(
			grpc_ctxtags.UnaryServerInterceptor(),
			grpc_opentracing.UnaryServerInterceptor(
				grpc_opentracing.WithTracer(opentracing.GlobalTracer()),
			),
			grpc_recovery.UnaryServerInterceptor(
				grpc_recovery.WithRecoveryHandler(recoveryFunc)),
			grpc_logrus.UnaryServerInterceptor(logrusEntry),
		)),
	)

	// Register gRPC server to api
	serverpb.RegisterNetworkServiceV0Server(api.grpcS, api)
	serverpb.RegisterIPServiceV0Server(api.grpcS, api)
	serverpb.RegisterPoolServiceV0Server(api.grpcS, api)

	gw, err := api.newGateway(ctx)
	if err != nil {
		return err
	}

	mux := http.NewServeMux()
	mux.Handle("/", gw)
	serveSwagger(mux)
	api.serverUI(mux)
	api.httpS = &http.Server{
		Handler: mux,
	}

	go func() {
		if err := api.grpcS.Serve(grpcL); err != nil {
			panic(err)
		}
	}()
	go func() {
		if err := api.httpS.Serve(httpL); err != nil {
			panic(err)
		}
	}()

	return cm.Serve()
}

func (api *APIServer) Shutdown(
	ctx ocontext.Context,
	stopped chan struct{},
) {
	api.grpcS.GracefulStop()
	api.httpS.Shutdown(ctx)
	stopped <- struct{}{}
}

func parseIPAndMask(ip, mask string) (net.IP, error) {
	return nil, nil
}

func init() {
	grpc_logrus.ReplaceGrpcLogger(logrusEntry)
}

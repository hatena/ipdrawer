package server

import (
	ocontext "context"
	"io"
	"log"
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
	"github.com/meatballhat/negroni-logrus"
	"github.com/sirupsen/logrus"
	"github.com/soheilhy/cmux"
	"github.com/urfave/negroni"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

	"github.com/philips/go-bindata-assetfs"
	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
	"github.com/taku-k/ipdrawer/pkg/ui/data/swagger"
)

type APIServer struct {
	addr    string
	manager *ipam.IPManager
	grpcS   *grpc.Server
	httpS   *http.Server
}

func NewAPIServer(port string) *APIServer {
	mngr := ipam.NewIPManager()
	return &APIServer{
		addr:    ":" + port,
		manager: mngr,
	}
}

func (api *APIServer) newGateway(ctx context.Context) (http.Handler, error) {
	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}
	if err := serverpb.RegisterPrefixServiceHandlerFromEndpoint(
		ctx, mux, api.addr, opts); err != nil {
		return nil, err
	}
	if err := serverpb.RegisterIPServiceHandlerFromEndpoint(
		ctx, mux, api.addr, opts); err != nil {
		return nil, err
	}

	n := negroni.New()
	n.Use(negroni.NewRecovery())
	n.Use(negronilogrus.NewMiddleware())
	n.UseHandler(mux)

	return n, nil
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

func (api *APIServer) Start() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	l, err := net.Listen("tcp", api.addr)
	if err != nil {
		log.Fatal(err)
	}

	cm := cmux.New(l)
	grpcL := cm.Match(cmux.HTTP2HeaderField("content-type", "application/grpc"))
	httpL := cm.Match(cmux.HTTP1Fast())

	logrusEntry := logrus.NewEntry(logrus.New())
	grpc_logrus.ReplaceGrpcLogger(logrusEntry)

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
			grpc_opentracing.UnaryServerInterceptor(),
			grpc_recovery.UnaryServerInterceptor(
				grpc_recovery.WithRecoveryHandler(recoveryFunc)),
			grpc_logrus.UnaryServerInterceptor(logrusEntry),
		)),
	)
	serverpb.RegisterPrefixServiceServer(api.grpcS, api)
	serverpb.RegisterIPServiceServer(api.grpcS, api)
	gw, err := api.newGateway(ctx)
	if err != nil {
		return err
	}

	mux := http.NewServeMux()
	mux.Handle("/", gw)
	serveSwagger(mux)
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

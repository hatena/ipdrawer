package server

import (
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/go-grpc-middleware"
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

	"github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
)

type APIServer struct {
	addr    string
	manager *ipam.IPManager
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
	err := serverpb.RegisterPrefixServiceHandlerFromEndpoint(ctx, mux, api.addr, opts)
	if err != nil {
		return nil, err
	}

	n := negroni.New()
	n.Use(negroni.NewRecovery())
	n.Use(negronilogrus.NewMiddleware())
	n.UseHandler(mux)

	return n, nil
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

	grpcS := grpc.NewServer(
		grpc.StreamInterceptor(grpc_middleware.ChainStreamServer(
			grpc_ctxtags.StreamServerInterceptor(),
			grpc_opentracing.StreamServerInterceptor(),
			grpc_recovery.StreamServerInterceptor(),
			grpc_logrus.StreamServerInterceptor(logrusEntry),
		)),
		grpc.UnaryInterceptor(grpc_middleware.ChainUnaryServer(
			grpc_ctxtags.UnaryServerInterceptor(),
			grpc_opentracing.UnaryServerInterceptor(),
			grpc_recovery.UnaryServerInterceptor(),
			grpc_logrus.UnaryServerInterceptor(logrusEntry),
		)),
	)
	serverpb.RegisterPrefixServiceServer(grpcS, api)
	gw, err := api.newGateway(ctx)
	if err != nil {
		return err
	}
	httpS := &http.Server{
		Handler: gw,
	}

	go func() {
		if err := grpcS.Serve(grpcL); err != nil {
			panic(err)
		}
	}()
	go func() {
		if err := httpS.Serve(httpL); err != nil {
			panic(err)
		}
	}()

	return cm.Serve()
}

func (api *APIServer) DrawIP(
	ctx context.Context,
	req *serverpb.DrawIPRequest,
) (*serverpb.DrawIPResponse, error) {
	return &serverpb.DrawIPResponse{
		Msg: "test",
	}, nil
}

func (api *APIServer) GetPrefixIncludingIP(
	ctx context.Context,
	req *serverpb.GetPrefixIncludingIPRequest,
) (*serverpb.GetPrefixIncludingIPResponse, error) {
	return &serverpb.GetPrefixIncludingIPResponse{}, nil
}

func (api *APIServer) ActivateIP(
	ctx context.Context,
	req *serverpb.ActivateIPRequest,
) (*serverpb.ActivateIPResponse, error) {
	return &serverpb.ActivateIPResponse{}, nil
}

func parseIPAndMask(ip, mask string) (net.IP, error) {
	return nil, nil
}

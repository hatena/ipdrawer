package server

import (
	ocontext "context"
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	"github.com/grpc-ecosystem/go-grpc-middleware/recovery"
	"github.com/grpc-ecosystem/go-grpc-middleware/tags"
	"github.com/grpc-ecosystem/go-grpc-middleware/tracing/opentracing"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/meatballhat/negroni-logrus"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"github.com/soheilhy/cmux"
	"github.com/urfave/negroni"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
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
	serverpb.RegisterPrefixServiceServer(api.grpcS, api)
	gw, err := api.newGateway(ctx)
	if err != nil {
		return err
	}
	api.httpS = &http.Server{
		Handler: gw,
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

func (api *APIServer) DrawIP(
	ctx context.Context,
	req *serverpb.DrawIPRequest,
) (*serverpb.DrawIPResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}
	pre, err := api.manager.GetPrefix(ip)
	if err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	pools, err := pre.GetPools()
	if err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	if len(pools) == 0 {
		return &serverpb.DrawIPResponse{}, errors.New("not found prefix")
	}
	tags := make(map[string]string)
	for _, t := range req.Tags {
		tags[t.Key] = t.Value
	}
	var pool *ipam.IPPool
	for _, p := range pools {
		if p.MatchTags(tags) {
			pool = p
			break
		}
	}
	if pool == nil {
		return &serverpb.DrawIPResponse{}, errors.New("not matched tags")
	}
	ret, err := api.manager.DrawIP(pool, true)
	if err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	return &serverpb.DrawIPResponse{
		Ip: ret.String(),
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

func parseIPAndMask(ip, mask string) (net.IP, error) {
	return nil, nil
}

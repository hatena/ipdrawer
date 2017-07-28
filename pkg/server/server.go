package server

import (
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/soheilhy/cmux"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

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
		addr:    net.JoinHostPort("0.0.0.0", port),
		manager: mngr,
	}
}

func newGateway(ctx context.Context) (http.Handler, error) {
	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}
	err := serverpb.RegisterPrefixServiceHandlerFromEndpoint(ctx, mux, ":23456", opts)
	if err != nil {
		return nil, err
	}
	return mux, nil
}

func (api *APIServer) Start() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	l, err := net.Listen("tcp", ":23456")
	if err != nil {
		log.Fatal(err)
	}

	cm := cmux.New(l)
	grpcL := cm.Match(cmux.HTTP2HeaderField("content-type", "application/grpc"))
	httpL := cm.Match(cmux.HTTP1Fast())

	grpcS := grpc.NewServer()
	serverpb.RegisterPrefixServiceServer(grpcS, api)

	gw, err := newGateway(ctx)
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

	//r.HandleFunc("/api/prefix/{ip}/{mask}/drawip", func(w http.ResponseWriter, r *http.Request) {
	//	vars := mux.Vars(r)
	//
	//})
	//r.HandleFunc("/api/ip/{ip}/prefix", func(w http.ResponseWriter, r *http.Request) {})
	//r.HandleFunc("/api/ip/{ip}/activate", func(w http.ResponseWriter, r *http.Request) {})

	return cm.Serve()
}

func (api *APIServer) DrawIP(ctx context.Context, req *serverpb.DrawIPRequest) (*serverpb.DrawIPResponse, error) {
	return &serverpb.DrawIPResponse{
		Msg: "test",
	}, nil
}

func parseIPAndMask(ip, mask string) (net.IP, error) {
	return nil, nil
}

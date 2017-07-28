package server

import (
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/runtime"
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

func (api *APIServer) Start() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}
	err := serverpb.RegisterPrefixServiceHandlerFromEndpoint(ctx, mux, ":8081", opts)
	if err != nil {
		return err
	}

	//r.HandleFunc("/api/prefix/{ip}/{mask}/drawip", func(w http.ResponseWriter, r *http.Request) {
	//	vars := mux.Vars(r)
	//
	//})
	//r.HandleFunc("/api/ip/{ip}/prefix", func(w http.ResponseWriter, r *http.Request) {})
	//r.HandleFunc("/api/ip/{ip}/activate", func(w http.ResponseWriter, r *http.Request) {})

	return http.ListenAndServe(api.addr, mux)
}

func parseIPAndMask(ip, mask string) (net.IP, error) {
	return nil, nil
}

package server

import (
	"net"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/server/apiclient"
	"google.golang.org/grpc"
)

func (te *test) startServer() {
	la := "localhost:0"
	lis, err := net.Listen("tcp", la)
	if err != nil {
		te.t.Fatalf("Failed to listen: %v", err)
	}
	te.api.lis = lis
	addr := la
	_, port, err := net.SplitHostPort(lis.Addr().String())
	if err != nil {
		te.t.Fatalf("Failed to parse listener address: %v", err)
	}
	addr = "localhost:" + port
	go te.api.Start()
	te.srvAddr = addr
}

func (te *test) clientConn() *grpc.ClientConn {
	if te.cc != nil {
		return te.cc
	}

	var err error
	te.cc, err = grpc.Dial(te.srvAddr, []grpc.DialOption{
		grpc.WithInsecure(),
	}...)
	if err != nil {
		te.t.Fatalf("Dial(%q) = %v", te.srvAddr, err)
	}
	return te.cc
}

func TestDrawIPEstimatingNetwork_E2E(t *testing.T) {
	te := newTest(t)
	te.startServer()
	defer te.tearDown()

	base := "http://" + te.srvAddr
	cl := apiclient.NewNetworkServiceV0ApiWithBasePath(base)
	resp, apiresp, err := cl.DrawIPEstimatingNetwork("", "")
	if err != nil {
		t.Errorf("cl.DrawIPEstimatingNetwork failed with %v; want success", err)
	}
	t.Log(resp)
}

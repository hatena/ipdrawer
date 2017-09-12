package server

import (
	"net"
	"net/http"
	"testing"

	"google.golang.org/grpc"

	"github.com/taku-k/ipdrawer/pkg/server/apiclient"
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
	te.base = "http://" + addr
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

func TestDrawIPEstimatingNetwork_E2E_ViaGW(t *testing.T) {
	te := newTest(t)
	te.startServer()
	defer te.tearDown()

	// Use testdata
	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	testCases := []struct {
		// Input
		remote   string
		tagKey   string
		tagValue string

		// Expected
		status int
		ip     string

		desc string
	}{
		{
			remote:   "192.168.0.1",
			tagKey:   "Role",
			tagValue: "test",

			status: http.StatusOK,
			ip:     "192.168.0.2",

			desc: "Ideal case",
		},
		{
			remote:   "192.168.0.1",
			tagKey:   "Role",
			tagValue: "nothing",

			status: http.StatusNotFound,

			desc: "Pool tag Role=nothing does not exists",
		},
		{
			remote:   "192.168.1.1",
			tagKey:   "Role",
			tagValue: "test",

			status: http.StatusNotFound,

			desc: "Network does not exists",
		},
	}

	for i, tc := range testCases {
		cl := apiclient.NewNetworkServiceV0ApiWithBasePath(te.base)
		cl.Configuration.AddDefaultHeader("X-Forwarded-For", tc.remote)

		resp, apiresp, err := cl.DrawIPEstimatingNetwork(tc.tagKey, tc.tagValue, false)

		if err != nil {
			t.Errorf("#%d(desc=%s): cl.DrawIPEstimatingNetwork failed with %v; want success",
				i, tc.desc, err)
		}

		if apiresp.StatusCode != tc.status {
			t.Errorf("#%d(desc=%s): cl.DrawIPEstimatingNetwork returns %v; want %d %v",
				i, tc.desc, apiresp.Status, tc.status, http.StatusText(tc.status))
		}

		if resp.Ip != tc.ip {
			t.Errorf("#%d(desc=%s): cl.DrawIPEstimatingNetwork returns unexpected IP(%v); want IP(%v)",
				i, tc.desc, resp.Ip, tc.ip)
		}
	}
}

func TestGetEstimatedNetwork_E2E_ViaGW(t *testing.T) {
	te := newTest(t)
	te.startServer()
	defer te.tearDown()

	// Use testdata
	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	testCases := []struct {
		// Input
		remote string

		// Expected
		status  int
		network string

		desc string
	}{
		{
			remote: "192.168.0.1",

			status:  http.StatusOK,
			network: "192.168.0.0/24",

			desc: "Ideal case",
		},
		{
			remote: "192.168.1.1",

			status: http.StatusNotFound,

			desc: "Network including 192.168.1.1 does not exists",
		},
	}

	for i, tc := range testCases {
		cl := apiclient.NewNetworkServiceV0ApiWithBasePath(te.base)
		cl.Configuration.AddDefaultHeader("X-Forwarded-For", tc.remote)

		resp, apiresp, err := cl.GetEstimatedNetwork()

		if err != nil {
			t.Errorf("#%d(desc=%s): cl.GetEstimatedNetwork() failed with %v; want success",
				i, tc.desc, err)
		}

		if apiresp.StatusCode != tc.status {
			t.Errorf("#%d(desc=%s): cl.GetEstimatedNetwork() returns %v; want %d %v",
				i, tc.desc, apiresp.Status, tc.status, http.StatusText(tc.status))
		}

		if resp.Network != tc.network {
			t.Errorf("#%d(desc=%s): cl.GetEstimatedNetwork() returns unexpected network(%v); want network(%v)",
				i, tc.desc, resp.Network, tc.network)
		}
	}
}

func TestActivateIP_E2E_ViaGW(t *testing.T) {
	te := newTest(t)
	te.startServer()
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	cl := apiclient.NewIPServiceV0ApiWithBasePath(te.base)

	_, apiresp, err := cl.ActivateIP("192.168.0.111", apiclient.ServerpbActivateIpRequest{
		Tags: []apiclient.ModelTag{
			{
				Key:   "Role",
				Value: "test",
			},
		},
	})

	if err != nil {
		t.Fatalf("cl.ActivateIP failed with %v; want success", err)
	}
	if apiresp.StatusCode != http.StatusOK {
		t.Errorf("cl.ActivateIP returns %v; want %v", apiresp.Status, http.StatusOK)
	}
}

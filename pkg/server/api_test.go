package server

import (
	"fmt"
	"net"
	"testing"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/peer"

	"github.com/hatena/ipdrawer/pkg/ipam"
	"github.com/hatena/ipdrawer/pkg/model"
	"github.com/hatena/ipdrawer/pkg/server/serverpb"
	"github.com/hatena/ipdrawer/pkg/storage"
	"github.com/hatena/ipdrawer/pkg/utils/netutil"
)

var (
	testPrefix = &net.IPNet{
		IP:   net.ParseIP("192.168.0.0"),
		Mask: net.CIDRMask(24, 32),
	}

	testNetwork = &model.Network{
		Prefix:    testPrefix.String(),
		Broadcast: netutil.BroadcastIP(testPrefix).String(),
		Netmask:   netutil.IPMaskToIP(net.CIDRMask(24, 32)).String(),
		Gateways: []string{
			"192.168.0.1",
		},
		Status: model.Network_AVAILABLE,
		Tags: []*model.Tag{
			{
				Key:   "Name",
				Value: "test",
			},
		},
	}

	testPool = &model.Pool{
		Start:  "192.168.0.2",
		End:    "192.168.0.254",
		Status: model.Pool_AVAILABLE,
		Tags: []*model.Tag{
			{
				Key:   "Role",
				Value: "test",
			},
		},
	}
)

type test struct {
	t *testing.T

	ctx    context.Context
	cancel context.CancelFunc

	api        *APIServer
	manager    *ipam.IPManager
	redis      *storage.Redis
	redisDefer func()

	srvAddr string
	base    string

	cc *grpc.ClientConn
}

func newTest(t *testing.T) *test {
	te := &test{
		t: t,
	}
	te.ctx, te.cancel = context.WithCancel(context.Background())
	te.redis, te.redisDefer = storage.NewTestRedis()
	te.manager = ipam.NewTestIPManager(te.redis)

	te.api = &APIServer{
		manager: te.manager,
	}

	return te
}

func (t *test) tearDown() {
	if t.redisDefer != nil {
		t.redisDefer()
	}
	if t.cc != nil {
		t.cc.Close()
		t.cc = nil
	}
	if t.api.httpS != nil {
		t.api.httpS.Shutdown(t.ctx)
	}
	if t.api.grpcS != nil {
		t.api.grpcS.Stop()
	}
}

func TestDrawIPSequentialOrder(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	testCases := []struct {
		expected string
	}{
		{
			expected: "192.168.0.2",
		},
		{
			expected: "192.168.0.3",
		},
		{
			expected: "192.168.0.4",
		},
	}

	for i, tc := range testCases {
		resp, err := te.api.DrawIP(te.ctx, &serverpb.DrawIPRequest{
			Ip:   testPrefix.IP.String(),
			Mask: int32(24),
			PoolTag: &model.Tag{
				Key:   "Role",
				Value: "test",
			},
		})

		if err != nil {
			t.Errorf("#%d: got error: %#+v", i, err)
		}

		if resp.Ip != tc.expected {
			t.Errorf("#%d: expected %s, but got %s", i, tc.expected, resp.Ip)
		}
	}
}

func TestDrawIPEstimatingNetwork(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	pe := &peer.Peer{
		Addr: &net.TCPAddr{
			IP:   net.ParseIP("192.168.0.155"),
			Port: 33333,
		},
	}
	resp, err := te.api.DrawIPEstimatingNetwork(
		peer.NewContext(te.ctx, pe),
		&serverpb.DrawIPEstimatingNetworkRequest{
			PoolTag: &model.Tag{
				Key:   "Role",
				Value: "test",
			},
		},
	)
	if err != nil {
		t.Fatalf("#%d: got error: %#+v", 1, err)
	}
	if resp.Ip != "192.168.0.2" {
		t.Errorf("#%d: expected %s, but got %s", 1, "192.168.0.2", resp.Ip)
	}
}

func TestActivateIP(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	_, err := te.api.ActivateIP(te.ctx, &serverpb.ActivateIPRequest{
		Ip: "192.168.0.122",
		Tags: []*model.Tag{
			{
				Key:   "Role",
				Value: "test",
			},
		},
	})

	if err != nil {
		t.Fatalf("Got error: %#+v", err)
	}
}

// TestActivateIPWhenAlreadyActivated checks server returns error
// when activated ip will be again activated.
func TestActivateIPWhenAlreadyActivated(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	req := &serverpb.ActivateIPRequest{
		Ip: "192.168.0.122",
		Tags: []*model.Tag{
			{
				Key:   "Role",
				Value: "test",
			},
		},
	}
	_, err := te.api.ActivateIP(te.ctx, req)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	_, err = te.api.ActivateIP(te.ctx, req)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}
}

func TestDrawIPAndActivateImmediately(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	resp, err := te.api.DrawIP(te.ctx, &serverpb.DrawIPRequest{
		Ip:   testPrefix.IP.String(),
		Mask: int32(24),
		PoolTag: &model.Tag{
			Key:   "Role",
			Value: "test",
		},
		TemporaryReserved: false,
	})

	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	if resp.Message != DrawIPActivationSuccessMsg {
		t.Errorf("Got message %s; want %s", resp.Message, DrawIPActivationSuccessMsg)
	}
}

func TestListNetworks(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)

	resp, err := te.api.ListNetwork(te.ctx, &serverpb.ListNetworkRequest{})

	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	if len(resp.Networks) != 1 {
		t.Errorf("Got wrong number of networks %d; want 1", len(resp.Networks))
	}

	if !resp.Networks[0].Equal(testNetwork) {
		t.Errorf("Got wrong network %v; want %v", resp.Networks[0], testNetwork)
	}
}

func TestGetIPInPool(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	err := te.manager.CreatePool(te.ctx, testNetwork, testPool)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	ips := []*model.IPAddr{
		{
			Ip:     "192.168.0.5",
			Status: model.IPAddr_ACTIVE,
		},
		{
			Ip:     "10.0.0.5",
			Status: model.IPAddr_ACTIVE,
		},
	}
	for _, ip := range ips {
		te.manager.CreateIP(te.ctx, []*model.Pool{testPool}, ip)
	}

	resp, err := te.api.GetIPInPool(te.ctx, &serverpb.GetIPInPoolRequest{
		RangeStart: testPool.Start,
		RangeEnd:   testPool.End,
	})

	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	if len(resp.Ips) != 1 {
		t.Errorf("Got wrong number of ips %d; want 1", len(resp.Ips))
	}
	if !resp.Ips[0].Equal(ips[0]) {
		t.Errorf("Got wrong ips %v; want %v", resp.Ips[0], ips[0])
	}
}

func TestGetNetwork(t *testing.T) {
	te := newTest(t)
	defer te.tearDown()

	te.manager.CreateNetwork(te.ctx, testNetwork)
	te.manager.CreatePool(te.ctx, testNetwork, testPool)

	testCases := []struct {
		req      *serverpb.GetNetworkRequest
		expected string
		errmsg   string
		desc     string
	}{
		{
			req: &serverpb.GetNetworkRequest{
				Ip:   "192.168.0.0",
				Mask: 24,
			},
			expected: "192.168.0.0/24",
			errmsg:   "",
			desc:     "GetNetworkByIP",
		},
		{
			req: &serverpb.GetNetworkRequest{
				Name: "test",
			},
			expected: "192.168.0.0/24",
			errmsg:   "",
			desc:     "GetNetworkByName",
		},
		{
			req: &serverpb.GetNetworkRequest{
				Ip:   "192.168.0.255",
				Mask: 24,
			},
			errmsg: "not found Network",
			desc:   "not exist ip",
		},
		{
			req: &serverpb.GetNetworkRequest{
				Name: "notfound",
			},
			errmsg: "Not found network",
			desc:   "not exist name",
		},
	}

	for _, tc := range testCases {
		resp, err := te.api.GetNetwork(te.ctx, tc.req)

		if err == nil && tc.errmsg != "" {
			t.Fatalf("desc: %s, Got nil; want error %q", tc.desc, err, tc.errmsg)
		} else if err != nil && fmt.Sprintf("%s", err) != tc.errmsg {
			t.Fatalf("desc: %s, Got error %q; want error %q", tc.desc, err, tc.errmsg)
		}

		if err != nil {
			continue
		}

		if resp.Network != tc.expected {
			t.Errorf("desc: %s, Got wrong ip %v; want %v", tc.desc, resp.Network, tc.expected)
		}
	}
}

func TestCreateNetwork(t *testing.T) {
	testCases := []struct {
		req *serverpb.CreateNetworkRequest
		exp string
	}{
		{
			req: &serverpb.CreateNetworkRequest{
				Ip:   "192.168.0.0",
				Mask: 24,
			},
			exp: "192.168.0.0/24",
		},
		{
			req: &serverpb.CreateNetworkRequest{
				Ip:   "192.168.0.0",
				Mask: 0,
			},
			exp: "0.0.0.0/0",
		},
	}

	for i, tc := range testCases {
		te := newTest(t)

		_, err := te.api.CreateNetwork(te.ctx, tc.req)

		if err != nil {
			t.Errorf("#%d: got error %q; want success", i, err)
		}

		resp, err := te.api.ListNetwork(te.ctx, &serverpb.ListNetworkRequest{})
		if err != nil {
			t.Errorf("#%d: got error %q; want success", i, err)
		}
		pre := resp.Networks[0].Prefix
		if pre != tc.exp {
			t.Errorf("#%d: got wrong prefix %s; want prefix %s",
				i, pre, tc.exp)
		}

		te.tearDown()
	}
}

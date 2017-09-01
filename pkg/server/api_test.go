package server

import (
	"net"
	"testing"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/peer"

	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
	"github.com/taku-k/ipdrawer/pkg/storage"
	"github.com/taku-k/ipdrawer/pkg/utils/netutil"
)

var (
	testPrefix = &net.IPNet{
		IP:   net.ParseIP("192.168.0.0"),
		Mask: net.CIDRMask(24, 32),
	}

	testNetwork = &ipam.Network{
		Prefix:    testPrefix,
		Broadcast: netutil.BroadcastIP(testPrefix),
		Netmask:   netutil.IPMaskToIP(net.CIDRMask(24, 32)),
		Gateways: []net.IP{
			net.ParseIP("192.168.0.1"),
		},
		Status: ipam.NETWORK_AVAILABLE,
	}

	testPool = &ipam.IPPool{
		Start:  net.ParseIP("192.168.0.2"),
		End:    net.ParseIP("192.168.0.254"),
		Status: ipam.POOL_AVAILABLE,
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
	if t.api.grpcS != nil {
		t.api.grpcS.Stop()
	}
	if t.api.httpS != nil {
		t.api.httpS.Close()
	}
	if t.cc != nil {
		t.cc.Close()
		t.cc = nil
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

package ipam

import (
	"net"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
	"github.com/taku-k/ipdrawer/pkg/utils/netutil"
)

func TestSetNetwork(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	testPrefix := &net.IPNet{
		IP:   net.ParseIP("192.168.0.0"),
		Mask: net.CIDRMask(24, 32),
	}
	n := &model.Network{
		Prefix:    testPrefix.String(),
		Broadcast: netutil.BroadcastIP(testPrefix).String(),
		Netmask:   netutil.IPMaskToIP(net.CIDRMask(24, 32)).String(),
		Gateways: []string{
			"192.168.0.1",
		},
		Status: model.Network_AVAILABLE,
	}

	err := setNetwork(r, n)
	if err != nil {
		t.Fatalf("Get error: %v", err)
	}
}

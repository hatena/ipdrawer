package ipam

import (
	"net"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
	"github.com/taku-k/ipdrawer/pkg/utils/netutil"
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
	}
)

func TestSetNetwork(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	err := setNetwork(r, testNetwork)
	if err != nil {
		t.Fatalf("Get error: %v", err)
	}
}

func TestGetNetwork(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	_ = setNetwork(r, testNetwork)

	resp, err := getNetwork(r, testPrefix)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}
	if !resp.Equal(testNetwork) {
		t.Errorf("Got wrong Network %v; want %v", resp, testNetwork)
	}
}

func TestGetNetworks(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	networks := []*model.Network{
		{
			Prefix: "192.168.0.0/24",
		},
		{
			Prefix: "192.168.0.0/22",
		},
	}

	for _, n := range networks {
		if err := setNetwork(r, n); err != nil {
			t.Fatalf("Got error %v; want success", err)
		}
	}

	resp, err := getNetworks(r)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	if len(resp) != len(networks) {
		t.Errorf("Got wrong number of networks %d; want %d", len(resp), len(networks))
	}
}

func TestSetNetworkWithInvalidModel(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	testCases := []struct {
		model *model.Network

		desc string
	}{
		{
			model: &model.Network{
				Prefix: "192.168.0.0",
			},
			desc: "Prefix is invalid, should has a prefix",
		},
		{
			model: &model.Network{
				Prefix:    "192.168.0.0/24",
				Broadcast: "invalid-broadcast",
			},
			desc: "Has invalid broadcast",
		},
		{
			model: &model.Network{
				Broadcast: "invalid-broadcast",
			},
			desc: "Must has Prefix",
		},
	}

	for i, tc := range testCases {
		err := setNetwork(r, tc.model)
		if err == nil {
			t.Errorf("#%d(%s): got no error; want error", i, tc.desc)
		}
	}
}

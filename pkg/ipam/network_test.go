package ipam

import (
	"net"
	"reflect"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/utils/testutil"
)

func TestNetworkUnmarshal(t *testing.T) {
	testCases := []struct {
		data   []interface{}
		out    *Network
		errmsg string
	}{
		{
			data: []interface{}{"0", "255.255.0.0", "192.168.255.255"},
			out: &Network{
				Status:    NETWORK_AVAILABLE,
				Netmask:   net.ParseIP("255.255.0.0"),
				Broadcast: net.ParseIP("192.168.255.255"),
			},
		},
	}

	for i, tt := range testCases {
		n := &Network{}
		err := n.unmarshal(tt.data)

		if tt.errmsg == "" {
			if err != nil {
				t.Errorf("%d: found error: %#+v", i, err)
			}
			if !reflect.DeepEqual(n, tt.out) {
				t.Errorf("%d: expected %#+v, but found %#+v", i, tt.out, n)
			}
		} else {
			if err == nil {
				t.Errorf("%d: expected error message %sf", i, tt.errmsg)
			}
			if !testutil.IsError(err, tt.errmsg) {
				t.Errorf("%d: expected %q, but found %#+v", i, tt.errmsg, err)
			}
		}
	}
}

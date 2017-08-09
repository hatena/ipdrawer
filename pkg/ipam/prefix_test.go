package ipam

import (
	"net"
	"reflect"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/utils/testutil"
)

func TestPrefixUnmarshal(t *testing.T) {
	testCases := []struct {
		data   []interface{}
		out    *Prefix
		errmsg string
	}{
		{
			data: []interface{}{"0", "255.255.0.0", "192.168.255.255"},
			out: &Prefix{
				Status:    PREFIX_AVAILABLE,
				Netmask:   net.ParseIP("255.255.0.0"),
				Broadcast: net.ParseIP("192.168.255.255"),
			},
		},
	}

	for i, tt := range testCases {
		p := &Prefix{}
		err := p.unmarshal(tt.data)

		if tt.errmsg == "" {
			if err != nil {
				t.Errorf("%d: found error: %#+v", i, err)
			}
			if !reflect.DeepEqual(p, tt.out) {
				t.Errorf("%d: expected %#+v, but found %#+v", i, tt.out, p)
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

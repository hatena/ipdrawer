package netutil

import (
	"net"
	"testing"
)

func TestBroadcastIP(t *testing.T) {
	testCases := []struct {
		in       *net.IPNet
		expected net.IP
	}{
		{
			in: &net.IPNet{
				IP:   net.ParseIP("192.168.0.0"),
				Mask: net.CIDRMask(22, 32),
			},
			expected: net.ParseIP("192.168.3.255"),
		},
	}

	for i, c := range testCases {
		actual := BroadcastIP(c.in)
		if !actual.Equal(c.expected) {
			t.Errorf("#%d: expected %v, but found %v", i, c.expected, actual)
		}
	}
}

func TestPing(t *testing.T) {
	if err := Ping("8.8.8.8"); err != nil {
		t.Errorf("Ping(8.8.8.8) returns %#+v; want success", err)
	}
}

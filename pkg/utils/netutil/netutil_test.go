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

func TestNextIP(t *testing.T) {
	testCases := []struct {
		ip       net.IP
		expected net.IP
	}{
		{
			ip:       net.ParseIP("10.0.0.1"),
			expected: net.ParseIP("10.0.0.2"),
		},
	}

	for i, c := range testCases {
		actual := NextIP(c.ip)
		if !actual.Equal(c.expected) {
			t.Errorf("%d: expected %v, but got %v", i, c.expected, actual)
		}
	}
}

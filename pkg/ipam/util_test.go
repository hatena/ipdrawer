package ipam

import (
	"net"
	"testing"
)

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
		actual := nextIP(c.ip)
		if !actual.Equal(c.expected) {
			t.Errorf("%d: expected %v, but got %v", i, c.expected, actual)
		}
	}
}

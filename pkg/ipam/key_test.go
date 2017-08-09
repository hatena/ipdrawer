package ipam

import (
	"net"
	"testing"
)

func TestKey(t *testing.T) {
	ip := net.ParseIP("192.168.0.2")
	_, ipnet, _ := net.ParseCIDR("192.168.0.0/24")

	testCases := []struct {
		e string
		a string
	}{
		{
			a: makeIPDetailsKey(ip),
			e: "ip:192.168.0.2:details",
		},
		{
			a: makeIPTempReserved(ip),
			e: "ip:192.168.0.2:temporary_deserved",
		},
		{
			a: makePrefixListKey(),
			e: "prefix:list",
		},
		{
			a: makePrefixDetailsKey(ipnet),
			e: "prefix:192.168.0.0/24:details",
		},
		{
			a: makePrefixDefaultGWKey(ipnet),
			e: "prefix:192.168.0.0/24:details:default_gateways",
		},
		{
			a: makePrefixTagKey(ipnet),
			e: "prefix:192.168.0.0/24:details:tags",
		},
		{
			a: makePrefixPoolKey(ipnet),
			e: "prefix:192.168.0.0/24:details:pools",
		},
		{
			a: makePoolDetailsKey(ip, ip),
			e: "pool:192.168.0.2,192.168.0.2:details",
		},
		{
			a: makePoolTagsKey(ip, ip),
			e: "pool:192.168.0.2,192.168.0.2:details:tags",
		},
	}

	for i, tc := range testCases {
		if tc.e != tc.a {
			t.Errorf("%d: expected %s, but found %s", i, tc.e, tc.a)
		}
	}
}

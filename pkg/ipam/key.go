package ipam

import (
	"fmt"
	"net"
)

const (
	ipDetails       = "ip:%s:details"
	ipTempReserved = "ip:%s:temporary_deserved"
	prefixList     = "Prefix:list"
	prefixDetails  = "Prefix:%s:details"
	poolDetails    = "pool:%s,%s:details"
	poolUsedIPZSet = "pool:%s,%s:used_ip_zset"
)

func makeIPDetailsKey(ip net.IP) string {
	return fmt.Sprintf(ipDetails, ip.String())
}

func makeIPTempReserved(ip net.IP) string {
	return fmt.Sprintf(ipTempReserved, ip.String())
}

func makePrefixListKey() string {
	return prefixList
}

func makePrefixDetailsKey(ip *net.IPNet) string {
	return fmt.Sprintf(prefixDetails, ip.String())
}

func makePrefixDefaultGWKey(ip *net.IPNet) string {
	return makePrefixDetailsKey(ip) + ":default_gateways"
}

func makePrefixTagKey(ip *net.IPNet) string {
	return makePrefixDetailsKey(ip) + ":tags"
}

func makePrefixPoolKey(ip *net.IPNet) string {
	return makePrefixDetailsKey(ip) + ":pools"
}

func makePoolDetails(s, e net.IP) string {
	return fmt.Sprintf(poolDetails, s.String(), e.String())
}

func makePoolTags(s, e net.IP) string {
	return makePoolDetails(s, e) + ":tags"
}

func makePoolUsedIPZset(s, e net.IP) string {
	return fmt.Sprintf(poolUsedIPZSet, s.String(), e.String())
}

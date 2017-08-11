package ipam

import (
	"fmt"
	"net"
)

const (
	lockPrefix = "lock:"
	globalLock = "global"

	ipDetails      = "ip:%s:details"
	ipTempReserved = "ip:%s:temporary_reserved"
	networkList    = "network:list"
	networkDetails = "network:%s:details"
	poolDetails    = "pool:%s,%s:details"
	poolUsedIPZSet = "pool:%s,%s:used_ip_zset"
)

func makeGlobalLock() string {
	return lockPrefix + globalLock
}

func makeIPDetailsKey(ip net.IP) string {
	return fmt.Sprintf(ipDetails, ip.String())
}

func makeIPTempReserved(ip net.IP) string {
	return fmt.Sprintf(ipTempReserved, ip.String())
}

func makeNetworkListKey() string {
	return networkList
}

func makeNetworkDetailsKey(ip *net.IPNet) string {
	return fmt.Sprintf(networkDetails, ip.String())
}

func makeNetworkDefaultGWKey(ip *net.IPNet) string {
	return makeNetworkDetailsKey(ip) + ":default_gateways"
}

func makeNetworkTagKey(ip *net.IPNet) string {
	return makeNetworkDetailsKey(ip) + ":tags"
}

func makeNetworkPoolKey(ip *net.IPNet) string {
	return makeNetworkDetailsKey(ip) + ":pools"
}

func makePoolDetailsKey(s, e net.IP) string {
	return fmt.Sprintf(poolDetails, s.String(), e.String())
}

func makePoolTagsKey(s, e net.IP) string {
	return makePoolDetailsKey(s, e) + ":tags"
}

func makePoolUsedIPZset(s, e net.IP) string {
	return fmt.Sprintf(poolUsedIPZSet, s.String(), e.String())
}

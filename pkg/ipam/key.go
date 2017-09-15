package ipam

import (
	"fmt"
	"net"
	"strings"

	"github.com/pkg/errors"
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

func makeIPListPattern() string {
	return strings.Replace(ipDetails, "%s", "*", 1)
}

func parseIPDetailsKey(key string) (net.IP, error) {
	d := strings.Split(key, ":")
	if len(d) != 3 {
		return nil, errors.New("Not matched format")
	}
	ip := d[1]
	addr := net.ParseIP(ip)
	if addr == nil {
		return nil, errors.New("Failed parse IP")
	}
	return addr, nil
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

func makeNetworkPoolKey(ip *net.IPNet) string {
	return makeNetworkDetailsKey(ip) + ":pools"
}

func makePoolDetailsKey(s, e net.IP) string {
	return fmt.Sprintf(poolDetails, s.String(), e.String())
}

func makePoolListPattern() string {
	return strings.Replace(poolDetails, "%s,%s", "*", 1)
}

func parsePoolDetailsKey(key string) (net.IP, net.IP, error) {
	d := strings.Split(key, ":")
	if len(d) != 3 {
		return nil, nil, errors.New("Not matched format")
	}
	se := strings.Split(d[1], ",")
	if len(se) != 2 {
		return nil, nil, errors.New("Not matched format")
	}
	s := net.ParseIP(se[0])
	if s == nil {
		return nil, nil, errors.New("Failed parse IP")
	}
	e := net.ParseIP(se[1])
	if e == nil {
		return nil, nil, errors.New("Failed parse IP")
	}
	return s, e, nil
}

func makePoolUsedIPZset(s, e net.IP) string {
	return fmt.Sprintf(poolUsedIPZSet, s.String(), e.String())
}

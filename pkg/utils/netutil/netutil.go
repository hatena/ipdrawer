package netutil

import "net"

func IPMaskToIP(m net.IPMask) net.IP {
	return net.IPv4(m[0], m[1], m[2], m[3])
}

func BroadcastIP(n *net.IPNet) net.IP {
	ipv4 := n.IP.To4()
	ret := make([]byte, len(ipv4))
	for i, v := range n.Mask {
		ret[i] = ipv4[i] | (v ^ 255)
	}
	return ret
}

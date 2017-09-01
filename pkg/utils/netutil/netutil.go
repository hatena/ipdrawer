package netutil

import (
	"fmt"
	"net"
	"os"
	"runtime"
	"sync"
	"time"

	"github.com/pkg/errors"
	"golang.org/x/net/icmp"
	"golang.org/x/net/ipv4"
)

var (
	pingLock = &sync.Mutex{}
)

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

func Ping(addr string) error {
	switch runtime.GOOS {
	case "darwin":
	case "linux":
	default:
		return errors.New(fmt.Sprintf("not supported on: %v", runtime.GOOS))
	}

	pingLock.Lock()
	defer pingLock.Unlock()

	c, err := icmp.ListenPacket("udp4", "0.0.0.0")
	if err != nil {
		return err
	}
	defer c.Close()

	wm := icmp.Message{
		Type: ipv4.ICMPTypeEcho,
		Code: 0,
		Body: &icmp.Echo{
			ID: os.Getpid() & 0xffff, Seq: 1,
			Data: []byte("HELLO-R-U-THERE"),
		},
	}
	wb, err := wm.Marshal(nil)
	if err != nil {
		return err
	}
	if _, err := c.WriteTo(wb, &net.UDPAddr{IP: net.ParseIP(addr)}); err != nil {
		return err
	}

	rb := make([]byte, 1500)
	c.SetReadDeadline(time.Now().Add(2 * time.Second))
	n, _, err := c.ReadFrom(rb)
	if err != nil {
		return err
	}
	rm, err := icmp.ParseMessage(1, rb[:n])
	if err != nil {
		return err
	}
	switch rm.Type {
	case ipv4.ICMPTypeEchoReply:
	default:
		return errors.New(fmt.Sprintf("got %+v; want echo reply", rm))
	}
	return nil
}

package ipam

import (
	"net"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

type IPPool struct {
	start  net.IP
	end    net.IP
	status poolStatus
	tags   map[string]string
}

type poolStatus int

const (
	POOL_AVAILABLE poolStatus = iota
	POOL_RESERVED
)

func getPoolIncludingIP(r *storage.Redis, ip net.IP) (*IPPool, error) {
	return nil, nil
}

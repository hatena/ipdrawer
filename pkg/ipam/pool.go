package ipam

import (
	"net"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

type IPPool struct {
	Start  net.IP
	End    net.IP
	Status poolStatus
	Tags   map[string]string
}

type poolStatus int

const (
	POOL_AVAILABLE poolStatus = iota
	POOL_RESERVED
)

func (p *IPPool) MatchTags(tags map[string]string) bool {
	for k, v := range tags {
		if vv, ok := p.Tags[k]; !ok || vv != v {
			return false
		}
	}
	return true
}

func getPoolIncludingIP(r *storage.Redis, ip net.IP) (*IPPool, error) {
	return nil, nil
}

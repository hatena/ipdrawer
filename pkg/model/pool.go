package model

import (
	"fmt"
	"net"

	"github.com/hatena/ipdrawer/pkg/utils/netutil"
)

func (p *Pool) Key() string {
	return fmt.Sprintf("%s,%s", p.Start, p.End)
}

func (p *Pool) Contains(ip net.IP) bool {
	s := netutil.IP2Uint(net.ParseIP(p.Start))
	e := netutil.IP2Uint(net.ParseIP(p.End))
	i := netutil.IP2Uint(ip)
	return s <= i && i <= e
}

func (p *Pool) MatchTags(tags []*Tag) bool {
	var flag bool
	for _, target := range tags {
		flag = false
		for _, t := range p.Tags {
			if target.Key == t.Key && target.Value == t.Value {
				flag = true
			}
		}
		if !flag {
			return false
		}
	}
	return true
}

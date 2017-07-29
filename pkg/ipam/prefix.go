package ipam

import (
	"fmt"
	"net"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

type Prefix struct {
	prefix    *net.IPNet
	gateways  []net.IP
	broadcast net.IP
	netmask   net.IP
	status    PrefixStatus
	tags      map[string]string
	pools     []*IPPool
}

var prefixFieldsKey = []string{"status", "netmask", "broadcast"}

type PrefixStatus int

const (
	PREFIX_AVAILABLE PrefixStatus = iota
	PREFIX_RESERVED
)

func (p *Prefix) GetPools() ([]*IPPool, error) {
	return nil, nil
}

func getPrefixes(r *storage.Redis) ([]*Prefix, error) {
	lkey := makePrefixListKey()
	ps, err := r.Client.SMembers(lkey).Result()
	if err != nil {
		return nil, err
	}

	ret := make([]*Prefix, len(ps))

	for i, p := range ps {
		_, ipnet, err := net.ParseCIDR(p)
		if err != nil {
			return nil, err
		}

		pre, err := getPrefix(r, ipnet)
		if err != nil {
			return nil, err
		}

		ret[i] = pre
	}
	return nil, nil
}

func getPrefix(r *storage.Redis, ipnet *net.IPNet) (*Prefix, error) {
	dkey := makePrefixDetailsKey(ipnet)
	tagKey := makePrefixTagKey(ipnet)
	gwKey := makePrefixDefaultGWKey(ipnet)

	check, err := r.Client.Exists(dkey).Result()
	if err != nil || check == 0 {
		return nil, errors.New("not found prefix")
	}

	data, err := r.Client.HMGet(dkey, prefixFieldsKey...).Result()
	if err != nil {
		return nil, err
	}
	tags, err := r.Client.HGetAll(tagKey).Result()
	if err != nil {
		return nil, err
	}
	gws, err := r.Client.SMembers(gwKey).Result()
	if err != nil {
		return nil, err
	}

	pre := &Prefix{
		prefix: ipnet,
		tags:   tags,
	}
	if err := pre.unmarshal(data); err != nil {
		return nil, err
	}
	gateways := make([]net.IP, len(gws))
	for i, g := range gws {
		if gateways[i] = net.ParseIP(g); gateways[i] == nil {
			return nil, errors.New(fmt.Sprintf("Failed parse IP: %s", g))
		}
	}
	pre.gateways = gateways

	return pre, nil
}

func (p *Prefix) unmarshal(data []interface{}) error {
	var ok bool
	var status int
	var netmask, broadcast net.IP

	if status, ok = data[0].(int); !ok {
		return errors.New("Failed unwrap")
	}
	if ss, ok := data[1].(string); ok {
		if netmask = net.ParseIP(ss); netmask == nil {
			return errors.New(fmt.Sprintf("Failed parse IP: %s", ss))
		}
	} else {
		return errors.New("Failed unwrap")
	}
	if ss, ok := data[2].(string); ok {
		if broadcast = net.ParseIP(ss); broadcast == nil {
			return errors.New(fmt.Sprintf("Failed parse IP: %s", ss))
		}
	} else {
		return errors.New("Failed unwrap")
	}

	p.status = PrefixStatus(status)
	p.netmask = netmask
	p.broadcast = broadcast

	return nil
}

func parseMask32(s string) (net.IP, error) {
	ip, ipnet, err := net.ParseCIDR(s)
	if err != nil {
		ip := net.ParseIP(s)
		if ip == nil {
			return nil, errors.New("Failed parse IP")
		}
		return ip, nil
	}
	ones, bits := ipnet.Mask.Size()
	if ones == 32 && bits == 32 {
		return ip, nil
	}
	return nil, errors.New("Only accepts /32 mask")
}

package ipam

import (
	"fmt"
	"net"
	"strconv"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

type Prefix struct {
	Prefix    *net.IPNet
	Gateways  []net.IP
	Broadcast net.IP
	Netmask   net.IP
	Status    PrefixStatus
	Tags      map[string]string
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

func setPrefix(r *storage.Redis, p *Prefix) error {
	// Set details
	dkey := makePrefixDetailsKey(p.Prefix)
	details := map[string]interface{}{
		"status":    int(p.Status),
		"netmask":   p.Netmask.String(),
		"broadcast": p.Broadcast.String(),
	}
	if _, err := r.Client.HMSet(dkey, details).Result(); err != nil {
		return err
	}

	// Set tags
	if len(p.Tags) != 0 {
		tagKey := makePrefixTagKey(p.Prefix)
		tags := make(map[string]interface{})
		for k, v := range p.Tags {
			tags[k] = v
		}
		if _, err := r.Client.HMSet(tagKey, tags).Result(); err != nil {
			return err
		}
	}

	// Set default Gateways
	if len(p.Gateways) != 0 {
		gwKey := makePrefixDefaultGWKey(p.Prefix)
		gws := make([]string, len(p.Gateways))
		for i, gw := range p.Gateways {
			gws[i] = gw.String()
		}
		if _, err := r.Client.SAdd(gwKey, gws).Result(); err != nil {
			return err
		}
	}

	return nil
}

func getPrefix(r *storage.Redis, ipnet *net.IPNet) (*Prefix, error) {
	dkey := makePrefixDetailsKey(ipnet)
	tagKey := makePrefixTagKey(ipnet)
	gwKey := makePrefixDefaultGWKey(ipnet)

	check, err := r.Client.Exists(dkey).Result()
	if err != nil || check == 0 {
		return nil, errors.New("not found Prefix")
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
		Prefix: ipnet,
		Tags:   tags,
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
	pre.Gateways = gateways

	return pre, nil
}

func (p *Prefix) unmarshal(data []interface{}) error {
	var status int
	var netmask, broadcast net.IP

	if ss, ok := data[0].(string); ok {
		var err error
		status, err = strconv.Atoi(ss)
		if err != nil {
			return errors.New(fmt.Sprintf("Failed unwrap of status: %v", data[0]))
		}
	} else {
		return errors.New(fmt.Sprintf("Failed unwrap of status: %v", data[0]))
	}
	if ss, ok := data[1].(string); ok {
		if netmask = net.ParseIP(ss); netmask == nil {
			return errors.New(fmt.Sprintf("Failed parse IP: %s", ss))
		}
	} else {
		return errors.New(fmt.Sprintf("Failed unwrap of netmask: %v", data[1]))
	}
	if ss, ok := data[2].(string); ok {
		if broadcast = net.ParseIP(ss); broadcast == nil {
			return errors.New(fmt.Sprintf("Failed parse IP: %s", ss))
		}
	} else {
		return errors.New(fmt.Sprintf("Failed unwrap of broadcast: %v", data[2]))
	}

	p.Status = PrefixStatus(status)
	p.Netmask = netmask
	p.Broadcast = broadcast

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

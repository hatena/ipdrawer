package ipam

import (
	"fmt"
	"net"
	"strconv"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

type Network struct {
	Prefix    *net.IPNet
	Gateways  []net.IP
	Broadcast net.IP
	Netmask   net.IP
	Status    NetworkStatus
	Tags      []*model.Tag
	pools     []*IPPool
}

var networkFieldsKey = []string{"status", "netmask", "broadcast"}

type NetworkStatus int

const (
	NETWORK_AVAILABLE NetworkStatus = iota
	NETWORK_RESERVED
)

func (n *Network) String() string {
	return n.Prefix.String()
}

func (n *Network) HasTag(tag *model.Tag) bool {
	for _, t := range n.Tags {
		if t.Key == tag.Key && t.Value == tag.Value {
			return true
		}
	}
	return false
}

func getNetworks(r *storage.Redis) ([]*Network, error) {
	lkey := makeNetworkListKey()
	ps, err := r.Client.SMembers(lkey).Result()
	if err != nil {
		return nil, err
	}

	ret := make([]*Network, len(ps))

	for i, p := range ps {
		_, ipnet, err := net.ParseCIDR(p)
		if err != nil {
			return nil, err
		}

		pre, err := getNetwork(r, ipnet)
		if err != nil {
			return nil, err
		}

		ret[i] = pre
	}

	return ret, nil
}

func setNetwork(r *storage.Redis, n *Network) error {
	pipe := r.Client.TxPipeline()

	// Set details
	dkey := makeNetworkDetailsKey(n.Prefix)
	details := map[string]interface{}{
		"status":    int(n.Status),
		"netmask":   n.Netmask.String(),
		"broadcast": n.Broadcast.String(),
	}
	pipe.HMSet(dkey, details)

	// Set tags
	if len(n.Tags) != 0 {
		tagKey := makeNetworkTagKey(n.Prefix)
		tags := make([]interface{}, len(n.Tags))
		for i, t := range n.Tags {
			tags[i] = t.Key + "=" + t.Value
		}
		pipe.SAdd(tagKey, tags...)
	}

	// Set default Gateways
	if len(n.Gateways) != 0 {
		gwKey := makeNetworkDefaultGWKey(n.Prefix)
		gws := make([]interface{}, len(n.Gateways))
		for i, gw := range n.Gateways {
			gws[i] = gw.String()
		}
		pipe.SAdd(gwKey, gws...)
	}

	pipe.SAdd(makeNetworkListKey(), n.Prefix.String())

	_, err := pipe.Exec()

	return err
}

func getNetwork(r *storage.Redis, ipnet *net.IPNet) (*Network, error) {
	dkey := makeNetworkDetailsKey(ipnet)
	tagKey := makeNetworkTagKey(ipnet)
	gwKey := makeNetworkDefaultGWKey(ipnet)

	check, err := r.Client.Exists(dkey).Result()
	if err != nil || check == 0 {
		return nil, errors.New("not found Network")
	}

	data, err := r.Client.HMGet(dkey, networkFieldsKey...).Result()
	if err != nil {
		return nil, err
	}
	tagd, err := r.Client.SMembers(tagKey).Result()
	if err != nil {
		return nil, err
	}
	gws, err := r.Client.SMembers(gwKey).Result()
	if err != nil {
		return nil, err
	}

	n := &Network{
		Prefix: ipnet,
	}
	if err := n.unmarshal(data); err != nil {
		return nil, err
	}
	tags := make([]*model.Tag, len(tagd))
	for i, t := range tagd {
		var err error
		if tags[i], err = unmarshalTag(t); err != nil {
			return nil, err
		}
	}
	n.Tags = tags
	gateways := make([]net.IP, len(gws))
	for i, g := range gws {
		if gateways[i] = net.ParseIP(g); gateways[i] == nil {
			return nil, errors.New(fmt.Sprintf("Failed parse IP: %s", g))
		}
	}
	n.Gateways = gateways

	return n, nil
}

func (n *Network) unmarshal(data []interface{}) error {
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

	n.Status = NetworkStatus(status)
	n.Netmask = netmask
	n.Broadcast = broadcast

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

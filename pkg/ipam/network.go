package ipam

import (
	"net"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

func getNetworks(r *storage.Redis) ([]*model.Network, error) {
	lkey := makeNetworkListKey()
	ps, err := r.Client.SMembers(lkey).Result()
	if err != nil {
		return nil, err
	}

	ret := make([]*model.Network, len(ps))

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

func setNetwork(r *storage.Redis, n *model.Network) error {
	if err := n.Validate(); err != nil {
		return err
	}

	pipe := r.Client.TxPipeline()

	data, err := n.Marshal()
	if err != nil {
		return err
	}
	_, pre, err := net.ParseCIDR(n.Prefix)
	if err != nil {
		return err
	}
	// Set details
	dkey := makeNetworkDetailsKey(pre)
	pipe.Set(dkey, string(data), 0)
	pipe.SAdd(makeNetworkListKey(), pre.String())

	_, err = pipe.Exec()

	return err
}

func deleteNetwork(r *storage.Redis, n *model.Network) error {
	if err := n.Validate(); err != nil {
		return err
	}
	_, pre, _ := net.ParseCIDR(n.Prefix)
	pipe := r.Client.TxPipeline()
	pipe.Del(makeNetworkDetailsKey(pre))
	pipe.SRem(makeNetworkListKey(), pre.String())
	_, err := pipe.Exec()
	return err
}

func getNetwork(r *storage.Redis, ipnet *net.IPNet) (*model.Network, error) {
	dkey := makeNetworkDetailsKey(ipnet)

	check, err := r.Client.Exists(dkey).Result()
	if err != nil || check == 0 {
		return nil, errors.Wrap(err, "not found Network")
	}

	data, err := r.Client.Get(dkey).Result()
	if err != nil {
		return nil, err
	}
	n := &model.Network{}
	if err := n.Unmarshal([]byte(data)); err != nil {
		return nil, err
	}

	return n, nil
}

func addPoolToNetwork(r *storage.Redis, network *model.Network, pool *model.Pool) error {
	if err := pool.Validate(); err != nil {
		return err
	}
	_, pre, err := net.ParseCIDR(network.Prefix)
	if err != nil {
		return err
	}
	poolKey := makeNetworkPoolKey(pre)
	_, err = r.Client.SAdd(poolKey, pool.Key()).Result()
	return err
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

func existsNetwork(r *storage.Redis, network *model.Network) bool {
	if err := network.Validate(); err != nil {
		return false
	}
	_, pre, _ := net.ParseCIDR(network.Prefix)
	check, _ := r.Client.Exists(makeNetworkDetailsKey(pre)).Result()
	return check != 0
}

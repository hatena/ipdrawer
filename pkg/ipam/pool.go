package ipam

import (
	"net"
	"strings"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

func setPool(r *storage.Redis, prefix *model.Network, pool *model.Pool) error {
	if err := pool.Validate(); err != nil {
		return err
	}

	pipe := r.Client.TxPipeline()
	s := net.ParseIP(pool.Start)
	e := net.ParseIP(pool.End)

	// Set
	dkey := makePoolDetailsKey(s, e)
	data, err := pool.Marshal()
	if err != nil {
		return err
	}
	pipe.Set(dkey, string(data), 0)

	// Add pools
	_, pre, err := net.ParseCIDR(prefix.Prefix)
	if err != nil {
		return err
	}
	poolKey := makeNetworkPoolKey(pre)
	pipe.SAdd(poolKey, pool.Key())

	_, err = pipe.Exec()

	return err
}

func getPool(r *storage.Redis, start net.IP, end net.IP) (*model.Pool, error) {
	// Get details
	dkey := makePoolDetailsKey(start, end)

	check, err := r.Client.Exists(dkey).Result()
	if err != nil || check == 0 {
		return nil, errors.New("not found pool")
	}

	data, err := r.Client.Get(dkey).Result()
	if err != nil {
		return nil, err
	}
	pool := &model.Pool{}
	if err := pool.Unmarshal([]byte(data)); err != nil {
		return nil, err
	}

	return pool, nil
}

func getPoolsInNetwork(r *storage.Redis, prefix *model.Network) ([]*model.Pool, error) {
	_, pre, err := net.ParseCIDR(prefix.Prefix)
	if err != nil {
		return nil, err
	}
	poolKey := makeNetworkPoolKey(pre)
	keys, err := r.Client.SMembers(poolKey).Result()
	if err != nil {
		return nil, err
	}
	pools := make([]*model.Pool, len(keys))
	for i, key := range keys {
		start := net.ParseIP(key[:strings.Index(key, ",")])
		end := net.ParseIP(key[strings.Index(key, ",")+1:])
		pool, err := getPool(r, start, end)
		if err != nil {
			return nil, err
		}
		pools[i] = pool
	}
	return pools, nil
}

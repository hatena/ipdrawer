package ipam

import (
	"fmt"
	"net"
	"strings"

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

func (p *IPPool) Key() string {
	return fmt.Sprintf("%v,%v", p.Start, p.End)
}

func getPoolIncludingIP(r *storage.Redis, ip net.IP) (*IPPool, error) {
	return nil, nil
}

func setPool(r *storage.Redis, prefix *Prefix, pool *IPPool) error {
	// Set details
	dkey := makePoolDetailsKey(pool.Start, pool.End)
	details := map[string]interface{}{
		"status": int(pool.Status),
	}
	if _, err := r.Client.HMSet(dkey, details).Result(); err != nil {
		return err
	}

	// Set tags
	if len(pool.Tags) != 0 {
		tagKey := makePoolTagsKey(pool.Start, pool.End)
		tags := make(map[string]interface{})
		for k, v := range pool.Tags {
			tags[k] = v
		}
		if _, err := r.Client.HMSet(tagKey, tags).Result(); err != nil {
			return err
		}
	}

	// Add pools
	poolKey := makePrefixPoolKey(prefix.Prefix)
	if _, err := r.Client.SAdd(poolKey, pool.Key()).Result(); err != nil {
		return err
	}

	return nil
}

func getPool(r *storage.Redis, start net.IP, end net.IP) (*IPPool, error) {
	return nil, nil
}

func getPools(r *storage.Redis, prefix *Prefix) ([]*IPPool, error) {
	poolKey := makePrefixPoolKey(prefix.Prefix)
	keys, err := r.Client.SMembers(poolKey).Result()
	if err != nil {
		return nil, err
	}
	pools := make([]*IPPool, len(keys))
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

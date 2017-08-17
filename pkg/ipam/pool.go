package ipam

import (
	"fmt"
	"net"
	"strconv"
	"strings"

	"github.com/pkg/errors"
	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

type IPPool struct {
	Start  net.IP
	End    net.IP
	Status poolStatus
	Tags   []*model.Tag
}

type poolStatus int

const (
	POOL_AVAILABLE poolStatus = iota
	POOL_RESERVED
)

func (p *IPPool) MatchTags(tags []*model.Tag) bool {
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

func (p *IPPool) Key() string {
	return fmt.Sprintf("%v,%v", p.Start, p.End)
}

func (p *IPPool) String() string {
	return fmt.Sprintf("%v,%v", p.Start, p.End)
}

func getPoolIncludingIP(r *storage.Redis, ip net.IP) (*IPPool, error) {
	return nil, nil
}

func (p *IPPool) Contains(ip net.IP) bool {
	return ip2int(p.Start) <= ip2int(ip) && ip2int(ip) <= ip2int(p.End)
}

func (p *IPPool) unmarshal(data []interface{}) error {
	var status int

	if ss, ok := data[0].(string); ok {
		var err error
		status, err = strconv.Atoi(ss)
		if err != nil {
			return errors.New(fmt.Sprintf("Failed unwrap of status: %v", data[0]))
		}
	} else {
		return errors.New(fmt.Sprintf("Failed unwrap of status: %v", data[0]))
	}

	p.Status = poolStatus(status)

	return nil
}

func setPool(r *storage.Redis, prefix *Network, pool *IPPool) error {
	pipe := r.Client.TxPipeline()

	// Set details
	dkey := makePoolDetailsKey(pool.Start, pool.End)
	details := map[string]interface{}{
		"status": int(pool.Status),
	}
	pipe.HMSet(dkey, details)

	// Set tags
	if len(pool.Tags) != 0 {
		tagKey := makePoolTagsKey(pool.Start, pool.End)
		tags := make([]string, len(pool.Tags))
		for i, t := range pool.Tags {
			tags[i] = t.Key + "=" + t.Value
		}
		pipe.SAdd(tagKey, tags)
	}

	// Add pools
	poolKey := makeNetworkPoolKey(prefix.Prefix)
	pipe.SAdd(poolKey, pool.Key())

	_, err := pipe.Exec()

	return err
}

func getPool(r *storage.Redis, start net.IP, end net.IP) (*IPPool, error) {
	// Get details
	dkey := makePoolDetailsKey(start, end)
	tagKey := makePoolTagsKey(start, end)

	check, err := r.Client.Exists(dkey).Result()
	if err != nil || check == 0 {
		return nil, errors.New("not found pool")
	}

	data, err := r.Client.HMGet(dkey, "status").Result()
	if err != nil {
		return nil, err
	}
	tagd, err := r.Client.SMembers(tagKey).Result()
	if err != nil {
		return nil, err
	}

	pool := &IPPool{
		Start: start,
		End:   end,
	}
	if err := pool.unmarshal(data); err != nil {
		return nil, err
	}
	tags := make([]*model.Tag, len(tagd))
	for i, t := range tagd {
		var err error
		if tags[i], err = unmarshalTag(t); err != nil {
			return nil, err
		}
	}
	pool.Tags = tags

	return pool, nil
}

func getPools(r *storage.Redis, prefix *Network) ([]*IPPool, error) {
	poolKey := makeNetworkPoolKey(prefix.Prefix)
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

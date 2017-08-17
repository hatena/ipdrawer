package ipam

import (
	"fmt"
	"net"
	"time"

	"github.com/go-redis/redis"
	"github.com/opentracing/opentracing-go"
	"github.com/pkg/errors"
	"golang.org/x/net/context"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

type IPManager struct {
	redis  *storage.Redis
	locker storage.Locker
}

type IPAddr struct {
	IP     net.IP
	Status IPStatus
	Tags   []*model.Tag
}

type IPStatus int

const (
	IP_ACTIVE IPStatus = iota
	IP_TEMPORARY_RESERVED
	IP_RESERVED
)

// NewIPManager creates IPManager instance
func NewIPManager() *IPManager {
	redis := storage.NewRedis()
	locker := storage.NewLocker(redis)
	return &IPManager{
		redis:  redis,
		locker: locker,
	}
}

// DrawIP returns an available IP.
func (m *IPManager) DrawIP(ctx context.Context, pool *IPPool, reserve bool) (net.IP, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.DrawIP")
	span.SetTag("pool", pool.Key())
	defer span.Finish()

	token, err := m.locker.Lock(ctx, makeGlobalLock())
	if err != nil {
		return nil, err
	}
	defer m.locker.Unlock(ctx, makeGlobalLock(), token)

	zkey := makePoolUsedIPZset(pool.Start, pool.End)
	avail := pool.Start

	keys, err := m.redis.Client.ZRange(zkey, 0, -1).Result()
	if err != nil {
		return nil, err
	}

	i := 0
	for !prevIP(avail).Equal(pool.End) {
		flag := false
		if i < len(keys) {
			usedIP := net.ParseIP(keys[i])
			if usedIP != nil {
				if avail.Equal(usedIP) {
					flag = true
					i += 1
				}
			}
		}
		if !flag {
			check, err := m.redis.Client.Exists(makeIPTempReserved(avail)).Result()
			if err != nil || check != 0 {
				flag = true

			} else {
				if _, err = m.redis.Client.Set(makeIPTempReserved(avail), 1, 24*time.Hour).Result(); err != nil {
					flag = true
				}
			}
		}
		if !flag {
			return avail, nil
		} else {
			avail = nextIP(avail)
		}
	}
	return nil, errors.New("Nothing IP to serve")
}

// Activate activates IP.
func (m *IPManager) Activate(ctx context.Context, p *IPPool, ip *IPAddr) error {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.Activate")
	span.SetTag("pool", p.Key())
	span.SetTag("ip", ip.IP.String())
	defer span.Finish()

	token, err := m.locker.Lock(ctx, makeGlobalLock())
	if err != nil {
		return err
	}
	defer m.locker.Unlock(ctx, makeGlobalLock(), token)

	pipe := m.redis.Client.TxPipeline()
	// Remove temporary reserved key in any way
	pipe.Del(makeIPTempReserved(ip.IP))
	// Change IP status to ACTIVE
	pipe.HSet(makeIPDetailsKey(ip.IP), "status", int(IP_ACTIVE))
	// Add IP to used IP zset
	score := float64(ip2int(ip.IP))
	z := redis.Z{score, ip.IP.String()}
	pipe.ZAdd(makePoolUsedIPZset(p.Start, p.End), z)
	// Set tags
	if len(ip.Tags) != 0 {
		tagKey := makeIPTagKey(ip.IP)
		tags := make([]interface{}, len(ip.Tags))
		for i, t := range ip.Tags {
			tags[i] = t.Key + "=" + t.Value
		}
		pipe.SAdd(tagKey, tags...)
	}
	if _, err := pipe.Exec(); err != nil {
		return err
	}
	return nil
}

// Reserve makes the status of given IP reserved.
func (m *IPManager) Reserve(p *IPPool, ip net.IP) error {
	return nil
}

// Release makes the status of given IP available.
func (m *IPManager) Release(p *IPPool, ip net.IP) error {
	return nil
}

// GetNetworkIncludingIP returns a network including given IP.
func (m *IPManager) GetNetworkIncludingIP(ctx context.Context, ip net.IP) (*Network, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.GetNetworkIncludingIP")
	span.SetTag("ip", ip.String())
	defer span.Finish()

	ps, err := m.redis.Client.SMembers(makeNetworkListKey()).Result()
	if err != nil {
		return nil, err
	}
	for _, p := range ps {
		_, ipnet, err := net.ParseCIDR(p)
		if err != nil {
			continue
		}
		if ipnet.Contains(ip) {
			return getNetwork(m.redis, ipnet)
		}
	}
	return nil, errors.New(fmt.Sprintf("Not found IP: %s", ip.String()))
}

// GetPools gets pools.
func (m *IPManager) GetPools(ctx context.Context, n *Network) ([]*IPPool, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.GetPools")
	span.SetTag("network", n.String())
	defer span.Finish()

	return getPools(m.redis, n)
}

// GetNetworkByIP returns network by IP.
func (m *IPManager) GetNetworkByIP(ctx context.Context, ipnet *net.IPNet) (*Network, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.GetNetworkByIP")
	span.SetTag("ip", ipnet.String())
	defer span.Finish()

	return getNetwork(m.redis, ipnet)
}

// GetNetworkByName returns network by name.
func (m *IPManager) GetNetworkByName(ctx context.Context, name string) (*Network, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.GetNetworkByName")
	span.SetTag("name", name)
	defer span.Finish()

	networks, err := getNetworks(m.redis)
	if err != nil {
		return nil, err
	}

	target := &model.Tag{
		Key:   "Name",
		Value: name,
	}
	for _, n := range networks {
		if n.HasTag(target) {
			return n, nil
		}
	}

	return nil, errors.New("Not found network")
}

// CreateNetwork creates network.
func (m *IPManager) CreateNetwork(ctx context.Context, n *Network) error {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.CreateNetwork")
	span.SetTag("network", n.String())
	defer span.Finish()

	return setNetwork(m.redis, n)
}

// CreatePool creates pool
func (m *IPManager) CreatePool(ctx context.Context, n *Network, pool *IPPool) error {
	span, ctx := opentracing.StartSpanFromContext(ctx, "IPManager.CreatePool")
	span.SetTag("network", n.String())
	span.SetTag("pool", pool.Key())
	defer span.Finish()

	return setPool(m.redis, n, pool)
}

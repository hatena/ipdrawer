package ipam

import (
	"encoding/binary"
	"fmt"
	"net"
	"time"

	"github.com/go-redis/redis"
	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

type IPManager struct {
	redis  *storage.Redis
	locker storage.Locker
}

type ipAddr struct {
	ip     net.IP
	status ipStatus
}

type ipStatus int

const (
	IP_ACTIVE ipStatus = iota
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
func (m *IPManager) DrawIP(pool *IPPool, reserve bool) (net.IP, error) {
	token, err := m.locker.Lock()
	if err != nil {
		return nil, err
	}
	defer m.locker.Unlock(token)

	zkey := makePoolUsedIPZset(pool.start, pool.end)
	var cur uint64
	avail := pool.start

	var keys []string
	keys, cur, err = m.redis.Client.ZScan(zkey, cur, "", 0).Result()
	if err != nil {
		return nil, err
	}
	for _, k := range keys {
		ip := net.ParseIP(k)
		if ip == nil {
			continue
		}
		if avail.Equal(ip) {
			avail = nextIP(ip)
			continue
		} else {
			check, err := m.redis.Client.Exists(makeIPTempReserved(ip)).Result()
			if err != nil || check != 0 {
				avail = nextIP(ip)
				continue
			}
			if _, err = m.redis.Client.Set(makeIPTempReserved(ip), 1, 24*time.Hour).Result(); err != nil {
				avail = nextIP(ip)
				continue
			}
			return avail, nil
		}
	}

	if prevIP(avail).Equal(pool.end) {
		return nil, errors.New("Nothing IP to serve")
	} else {
		return avail, nil
	}
}

// Activate activates IP.
func (m *IPManager) Activate(p *IPPool, ip net.IP) error {
	token, err := m.locker.Lock()
	if err != nil {
		return err
	}
	defer m.locker.Unlock(token)

	pipe := m.redis.Client.TxPipeline()
	// Remove temporary reserved key in any way
	pipe.Del(makeIPTempReserved(ip))
	// Change IP status to ACTIVE
	pipe.HSet(makeIPDetailsKey(ip), "status", int(IP_ACTIVE))
	// Add IP to used IP zset
	score := float64(binary.BigEndian.Uint32(ip))
	z := redis.Z{score, ip.String()}
	pipe.ZAdd(makePoolUsedIPZset(p.start, p.end), z)
	if _, err := pipe.Exec(); err != nil {
		return err
	}
	return nil
}

func (m *IPManager) Reserve(p *Prefix, ip net.IP) error {
	return nil
}

func (m *IPManager) Release(p *Prefix, ip net.IP) error {
	return nil
}

func (m *IPManager) GetPrefixIncludingIP(ip net.IP) (*Prefix, error) {
	ps, err := m.redis.Client.SMembers(makePrefixListKey()).Result()
	if err != nil {
		return nil, err
	}
	for _, p := range ps {
		_, ipnet, err := net.ParseCIDR(p)
		if err != nil {
			continue
		}
		if ipnet.Contains(ip) {
			return getPrefix(m.redis, ipnet)
		}
	}
	return nil, errors.New(fmt.Sprintf("Not found IP: %s", ip.String()))
}

func (m *IPManager) GetPools(ip net.IP) ([]*IPPool, error) {
	return nil, nil
}

func (m *IPManager) GetPrefix(ipnet *net.IPNet) (*Prefix, error) {
	return getPrefix(m.redis, ipnet)
}

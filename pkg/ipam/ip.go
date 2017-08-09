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

	zkey := makePoolUsedIPZset(pool.Start, pool.End)
	var cur uint64
	avail := pool.Start

	var keys []string
	keys, cur, err = m.redis.Client.ZScan(zkey, cur, "", 0).Result()
	if err != nil {
		return nil, err
	}
	//for _, k := range keys {
	//	ip := net.ParseIP(k)
	//	if ip == nil {
	//		continue
	//	}
	//	if avail.Equal(ip) {
	//		avail = nextIP(ip)
	//		continue
	//	} else {
	//		check, err := m.redis.Client.Exists(makeIPTempReserved(ip)).Result()
	//		if err != nil || check != 0 {
	//			avail = nextIP(ip)
	//			continue
	//		}
	//		if _, err = m.redis.Client.Set(makeIPTempReserved(ip), 1, 24*time.Hour).Result(); err != nil {
	//			avail = nextIP(ip)
	//			continue
	//		}
	//		return avail, nil
	//	}
	//}

	i := 0
	for !prevIP(avail).Equal(pool.End) {
		flag := false

		if i < len(keys) {
			usedIP := net.ParseIP(keys[i])
			fmt.Println(avail, i, usedIP)
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
	pipe.ZAdd(makePoolUsedIPZset(p.Start, p.End), z)
	if _, err := pipe.Exec(); err != nil {
		return err
	}
	return nil
}

// Reserve makes the status of given IP reserved.
func (m *IPManager) Reserve(p *Prefix, ip net.IP) error {
	return nil
}

// Release makes the status of given IP available.
func (m *IPManager) Release(p *Prefix, ip net.IP) error {
	return nil
}

// GetPrefixIncludingIP returns a prefix including given IP.
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

// GetPools gets pools.
func (m *IPManager) GetPools(prefix *Prefix) ([]*IPPool, error) {
	return getPools(m.redis, prefix)
}

// GetPrefix gets prefix.
func (m *IPManager) GetPrefix(ipnet *net.IPNet) (*Prefix, error) {
	return getPrefix(m.redis, ipnet)
}

// CreatePrefix creates prefix.
func (m *IPManager) CreatePrefix(p *Prefix) error {
	token, err := m.locker.Lock()
	if err != nil {
		return err
	}
	defer m.locker.Unlock(token)

	return setPrefix(m.redis, p)
}

// CreatePool creates pool
func (m *IPManager) CreatePool(prefix *Prefix, pool *IPPool) error {
	token, err := m.locker.Lock()
	if err != nil {
		return err
	}
	defer m.locker.Unlock(token)

	return setPool(m.redis, prefix, pool)
}

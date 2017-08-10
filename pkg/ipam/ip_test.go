package ipam

import (
	"net"
	"testing"
	"time"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

func newTestIPManager(r *storage.Redis) *IPManager {
	return &IPManager{
		redis:  r,
		locker: &storage.LocalLocker{},
	}
}

func (m *IPManager) reserveTemporary(ip net.IP) {
	_, _ = m.redis.Client.Set(makeIPTempReserved(ip), 1, 24*time.Hour).Result()
}

func TestIPActivation(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := newTestIPManager(r)

	pool := &IPPool{
		Start: net.ParseIP("10.0.0.1"),
		End:   net.ParseIP("10.0.0.254"),
	}

	if err := m.Activate(pool, net.ParseIP("10.0.0.1")); err != nil {
		t.Fatalf("Got error: %v", err)
	}
	if err := m.Activate(pool, net.ParseIP("10.0.0.4")); err != nil {
		t.Fatalf("Got error: %v", err)
	}

	zkey := makePoolUsedIPZset(pool.Start, pool.End)
	cnt, err := r.Client.ZCard(zkey).Result()
	if err != nil {
		t.Errorf("Got error: %v", err)
	}
	if cnt != 2 {
		t.Errorf("Expected %d, but got %d", 2, cnt)
	}
}

func TestDrawIPSeq(t *testing.T) {
	testCases := []struct {
		pool     *IPPool
		ips      []*ipAddr
		expected net.IP
	}{
		{
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.254"),
			},
			ips: []*ipAddr{
				{
					ip:     net.ParseIP("10.0.0.1"),
					status: IP_ACTIVE,
				}, {
					ip:     net.ParseIP("10.0.0.3"),
					status: IP_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.2"),
		}, {
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.254"),
			},
			ips: []*ipAddr{
				{
					ip:     net.ParseIP("10.0.0.1"),
					status: IP_ACTIVE,
				}, {
					ip:     net.ParseIP("10.0.0.2"),
					status: IP_TEMPORARY_RESERVED,
				}, {
					ip:     net.ParseIP("10.0.0.3"),
					status: IP_ACTIVE,
				}, {
					ip:     net.ParseIP("10.0.0.4"),
					status: IP_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
	}

	for i, c := range testCases {
		r, deferFunc := storage.NewTestRedis()
		m := newTestIPManager(r)

		for _, ip := range c.ips {
			switch ip.status {
			case IP_ACTIVE:
				m.Activate(c.pool, ip.ip)
			case IP_TEMPORARY_RESERVED:
				m.reserveTemporary(ip.ip)
			case IP_RESERVED:
				m.Reserve(c.pool, ip.ip)
			}
		}

		actual, err := m.DrawIP(c.pool, true)
		if err != nil {
			t.Errorf("Got error: %v", err)
		}
		if !c.expected.Equal(actual) {
			t.Errorf("#%d: expected %v, but got %v", i, c.expected, actual)
		}

		deferFunc()
	}
}

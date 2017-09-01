package ipam

import (
	"net"
	"testing"
	"time"

	"golang.org/x/net/context"

	"github.com/taku-k/ipdrawer/pkg/storage"
	"github.com/taku-k/ipdrawer/pkg/utils/testutil"
)

func (m *IPManager) reserveTemporary(ip net.IP) {
	_, _ = m.redis.Client.Set(makeIPTempReserved(ip), 1, 24*time.Hour).Result()
}

func TestIPActivation(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pool := &IPPool{
		Start: net.ParseIP("10.0.0.1"),
		End:   net.ParseIP("10.0.0.254"),
	}

	if err := m.Activate(ctx, pool, &IPAddr{IP: net.ParseIP("10.0.0.1")}); err != nil {
		t.Fatalf("Got error: %v", err)
	}
	if err := m.Activate(ctx, pool, &IPAddr{IP: net.ParseIP("10.0.0.4")}); err != nil {
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
	ctx := context.Background()

	testCases := []struct {
		pool     *IPPool
		ips      []*IPAddr
		expected net.IP
		errmsg   string
	}{
		{
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.254"),
			},
			ips: []*IPAddr{
				{
					IP:     net.ParseIP("10.0.0.1"),
					Status: IP_ACTIVE,
				}, {
					IP:     net.ParseIP("10.0.0.3"),
					Status: IP_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.2"),
		},
		{
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.254"),
			},
			ips: []*IPAddr{
				{
					IP:     net.ParseIP("10.0.0.1"),
					Status: IP_ACTIVE,
				}, {
					IP:     net.ParseIP("10.0.0.2"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.3"),
					Status: IP_ACTIVE,
				}, {
					IP:     net.ParseIP("10.0.0.4"),
					Status: IP_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
		{
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.254"),
			},
			ips: []*IPAddr{
				{
					IP:     net.ParseIP("10.0.0.1"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.2"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.3"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.4"),
					Status: IP_TEMPORARY_RESERVED,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
		{
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.254"),
			},
			ips: []*IPAddr{
				{
					IP:     net.ParseIP("10.0.0.1"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.2"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.3"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.4"),
					Status: IP_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
		{
			pool: &IPPool{
				Start: net.ParseIP("10.0.0.1"),
				End:   net.ParseIP("10.0.0.2"),
			},
			ips: []*IPAddr{
				{
					IP:     net.ParseIP("10.0.0.1"),
					Status: IP_TEMPORARY_RESERVED,
				}, {
					IP:     net.ParseIP("10.0.0.2"),
					Status: IP_TEMPORARY_RESERVED,
				},
			},
			errmsg: "Nothing IP to serve",
		},
	}

	for i, c := range testCases {
		r, deferFunc := storage.NewTestRedis()
		m := NewTestIPManager(r)

		for _, ip := range c.ips {
			switch ip.Status {
			case IP_ACTIVE:
				m.Activate(ctx, c.pool, ip)
			case IP_TEMPORARY_RESERVED:
				m.reserveTemporary(ip.IP)
			case IP_RESERVED:
				m.Reserve(c.pool, ip.IP)
			}
		}

		actual, err := m.DrawIP(ctx, c.pool, true, false)

		if c.errmsg == "" {
			if err != nil {
				t.Errorf("#%d: Got error: %#+v", i, err)
			}
			if !c.expected.Equal(actual) {
				t.Errorf("#%d: expected %#+v, but got %#+v", i, c.expected.String(), actual.String())
			}
		} else {
			if err == nil {
				t.Errorf("#%d: expected error message %sf", i, c.errmsg)
			}
			if !testutil.IsError(err, c.errmsg) {
				t.Errorf("#%d: expected %q, but got %#+v", i, c.errmsg, err)
			}
		}

		deferFunc()
	}
}

func TestDeactivateAfterActivating(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pool := &IPPool{
		Start: net.ParseIP("10.0.0.1"),
		End:   net.ParseIP("10.0.0.254"),
	}

	ip := &IPAddr{
		IP: net.ParseIP("10.0.0.1"),
	}

	m.Activate(ctx, pool, ip)

	if err := m.Deactivate(ctx, pool, ip); err != nil {
		t.Errorf("Failed deactivating: %#+v", err)
	}
}

func TestActivateIPInSeveralPools(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pools := []*IPPool{
		{
			Start: net.ParseIP("10.0.0.1"),
			End:   net.ParseIP("10.0.0.254"),
		},
		{
			Start: net.ParseIP("10.0.0.30"),
			End:   net.ParseIP("10.0.0.50"),
		},
	}

	ip := &IPAddr{
		IP: net.ParseIP("10.0.0.40"),
	}

	err := m.Activate(ctx, pools[0], ip)
	if err != nil {
		t.Errorf("Activate(%v, %v) returns %#+v; want success", pools[0], ip, err)
	}

	err = m.Activate(ctx, pools[1], ip)
	if err != nil {
		t.Errorf("Activate(%v, %v) returns %#+v; want succes", pools[1], ip, err)
	}
}

func TestDeactivateIPInSeveralPools(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pools := []*IPPool{
		{
			Start: net.ParseIP("10.0.0.1"),
			End:   net.ParseIP("10.0.0.254"),
		},
		{
			Start: net.ParseIP("10.0.0.30"),
			End:   net.ParseIP("10.0.0.50"),
		},
	}

	ip := &IPAddr{
		IP: net.ParseIP("10.0.0.40"),
	}

	m.Activate(ctx, pools[0], ip)
	m.Activate(ctx, pools[1], ip)

	if err := m.Deactivate(ctx, pools[0], ip); err != nil {
		t.Errorf("Deactivate(%v, %v) returns %#+v; want success", pools[0], ip, err)
	}

	if err := m.Deactivate(ctx, pools[1], ip); err != nil {
		t.Errorf("Deactivate(%v, %v) returns %#+v; want succes", pools[1], ip, err)
	}
}

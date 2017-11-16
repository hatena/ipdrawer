package ipam

import (
	"net"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"golang.org/x/net/context"

	"github.com/taku-k/ipdrawer/pkg/model"
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

	pool := &model.Pool{
		Start: "10.0.0.1",
		End:   "10.0.0.254",
	}

	if err := m.CreateIP(ctx, []*model.Pool{pool}, &model.IPAddr{Ip: "10.0.0.1"}); err != nil {
		t.Fatalf("Got error: %v", err)
	}
	if err := m.CreateIP(ctx, []*model.Pool{pool}, &model.IPAddr{Ip: "10.0.0.4"}); err != nil {
		t.Fatalf("Got error: %v", err)
	}

	s := net.ParseIP(pool.Start)
	e := net.ParseIP(pool.End)
	zkey := makePoolUsedIPZset(s, e)
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
		pool     *model.Pool
		ips      []*model.IPAddr
		expected net.IP
		errmsg   string
	}{
		{
			pool: &model.Pool{
				Start: "10.0.0.1",
				End:   "10.0.0.254",
			},
			ips: []*model.IPAddr{
				{
					Ip:     "10.0.0.1",
					Status: model.IPAddr_ACTIVE,
				}, {
					Ip:     "10.0.0.3",
					Status: model.IPAddr_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.2"),
		},
		{
			pool: &model.Pool{
				Start: "10.0.0.1",
				End:   "10.0.0.254",
			},
			ips: []*model.IPAddr{
				{
					Ip:     "10.0.0.1",
					Status: model.IPAddr_ACTIVE,
				}, {
					Ip:     "10.0.0.2",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.3",
					Status: model.IPAddr_ACTIVE,
				}, {
					Ip:     "10.0.0.4",
					Status: model.IPAddr_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
		{
			pool: &model.Pool{
				Start: "10.0.0.1",
				End:   "10.0.0.254",
			},
			ips: []*model.IPAddr{
				{
					Ip:     "10.0.0.1",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.2",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.3",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.4",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
		{
			pool: &model.Pool{
				Start: "10.0.0.1",
				End:   "10.0.0.254",
			},
			ips: []*model.IPAddr{
				{
					Ip:     "10.0.0.1",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.2",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.3",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.4",
					Status: model.IPAddr_ACTIVE,
				},
			},
			expected: net.ParseIP("10.0.0.5"),
		},
		{
			pool: &model.Pool{
				Start: "10.0.0.1",
				End:   "10.0.0.2",
			},
			ips: []*model.IPAddr{
				{
					Ip:     "10.0.0.1",
					Status: model.IPAddr_TEMPORARY_RESERVED,
				}, {
					Ip:     "10.0.0.2",
					Status: model.IPAddr_TEMPORARY_RESERVED,
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
			case model.IPAddr_ACTIVE:
				m.CreateIP(ctx, []*model.Pool{c.pool}, ip)
			case model.IPAddr_TEMPORARY_RESERVED:
				m.reserveTemporary(net.ParseIP(ip.Ip))
			case model.IPAddr_RESERVED:
				m.Reserve(c.pool, net.ParseIP(ip.Ip))
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

	pool := &model.Pool{
		Start: "10.0.0.1",
		End:   "10.0.0.254",
	}

	ip := &model.IPAddr{
		Ip: "10.0.0.1",
	}

	m.CreateIP(ctx, []*model.Pool{pool}, ip)

	if err := m.Deactivate(ctx, []*model.Pool{pool}, ip); err != nil {
		t.Errorf("Failed deactivating: %#+v", err)
	}

	keys, _ := r.Client.Keys(makeIPTempReserved(net.ParseIP(ip.Ip))).Result()
	if len(keys) != 0 {
		t.Errorf("Deactivation should remove temporary reserved key")
	}
}

func TestActivateIPInSeveralPools(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pools := []*model.Pool{
		{
			Start: "10.0.0.1",
			End:   "10.0.0.254",
		},
		{
			Start: "10.0.0.30",
			End:   "10.0.0.50",
		},
	}

	ip := &model.IPAddr{
		Ip: "10.0.0.40",
	}

	err := m.CreateIP(ctx, pools, ip)
	if err != nil {
		t.Errorf("Activate(%v, %v) returns %#+v; want success", pools, ip, err)
	}
}

func TestDeactivateIPInSeveralPools(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pools := []*model.Pool{
		{
			Start: "10.0.0.1",
			End:   "10.0.0.254",
		},
		{
			Start: "10.0.0.30",
			End:   "10.0.0.50",
		},
	}

	ip := &model.IPAddr{
		Ip: "10.0.0.40",
	}

	m.CreateIP(ctx, pools, ip)

	if err := m.Deactivate(ctx, pools, ip); err != nil {
		t.Errorf("Deactivate(%v, %v) returns %#+v; want success", pools, ip, err)
	}
}

func TestCorrectDrawIPFromInclusivePools(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pools := []*model.Pool{
		{
			Start: "10.0.0.1",
			End:   "10.0.0.254",
		},
		{
			Start: "10.0.0.1",
			End:   "10.0.0.10",
		},
	}

	ip := &model.IPAddr{
		Ip: "10.0.0.1",
	}

	m.CreateIP(ctx, pools, ip)

	actual, err := m.DrawIP(ctx, pools[1], true, false)
	if err != nil {
		t.Errorf("DrawIP returns err(%v); want success", err)
	}
	if !actual.Equal(net.ParseIP("10.0.0.2")) {
		t.Errorf("DrawIP returns incorrect IP(%v); want 10.0.0.2", actual.String())
	}
}

func TestCreatePoolWhenExistingActivatedIP(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	m := NewTestIPManager(r)
	ctx := context.Background()

	ips := []*model.IPAddr{
		{
			Ip:     "192.168.0.1",
			Status: model.IPAddr_ACTIVE,
		},
		{
			Ip:     "192.168.0.11",
			Status: model.IPAddr_ACTIVE,
		},
	}
	for _, ip := range ips {
		if err := m.CreateIP(ctx, nil, ip); err != nil {
			t.Fatalf("CreateIP retusn error %v; want success", err)
		}
	}

	network := &model.Network{
		Prefix: "192.168.0.0/24",
	}
	pool := &model.Pool{
		Start: "192.168.0.1",
		End:   "192.168.0.10",
	}
	if err := m.CreatePool(ctx, network, pool); err != nil {
		t.Fatalf("CreatePool returns error %v; want success", err)
	}

	num, err := r.Client.ZCard(makePoolUsedIPZset(net.ParseIP(pool.Start), net.ParseIP(pool.End))).Result()
	if err != nil {
		t.Errorf("ZCard returns error %v; want success", err)
	}
	assert.Equal(t, int64(1), num, "number of used zset should be one")
}

func TestDeletePool(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	m := NewTestIPManager(r)
	ctx := context.Background()

	network := &model.Network{
		Prefix: "192.168.0.0/24",
	}
	pool := &model.Pool{
		Start: "192.168.0.1",
		End:   "192.168.0.10",
	}

	if err := m.CreateNetwork(ctx, network); err != nil {
		t.Fatalf("CreateNetwork returns error `%v`; want success", err)
	}

	if err := m.CreatePool(ctx, network, pool); err != nil {
		t.Fatalf("CreatePool returns error `%v`; want success", err)
	}

	if err := m.DeletePool(ctx, net.ParseIP(pool.Start), net.ParseIP(pool.End)); err != nil {
		t.Fatalf("DeletePool returns error `%v`; want success", err)
	}

	pools, err := m.GetPools(ctx)
	if err != nil {
		t.Fatalf("GetPools returns error `%v`; want success", err)
	}
	assert.Equal(t, 0, len(pools), "there should be no pools")

	nothing, err := m.GetPoolsInNetwork(ctx, network)
	if err != nil {
		t.Fatalf("GetPoolsInNetwork returns error `%v`; want success", err)
	}
	assert.Empty(t, nothing, "there should be no pool in the network")
}

package ipam

import (
	"net"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/storage"
)

func newTestIPManager(r *storage.Redis) *IPManager {
	return &IPManager{
		redis:  r,
		locker: &storage.LocalLocker{},
	}
}

func TestIPActivation(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := newTestIPManager(r)

	pool := &IPPool{
		start: net.ParseIP("10.0.0.1"),
		end:   net.ParseIP("10.0.0.254"),
	}

	if err := m.Activate(pool, net.ParseIP("10.0.0.1")); err != nil {
		t.Fatalf("Got error: %v", err)
	}
	if err := m.Activate(pool, net.ParseIP("10.0.0.4")); err != nil {
		t.Fatalf("Got error: %v", err)
	}

	zkey := makePoolUsedIPZset(pool.start, pool.end)
	cnt, err := r.Client.ZCard(zkey).Result()
	if err != nil {
		t.Errorf("Got error: %v", err)
	}
	if cnt != 2 {
		t.Errorf("Expected %d, but got %d", 2, cnt)
	}
}

func TestDrawIP(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := newTestIPManager(r)

	pool := &IPPool{
		start: net.ParseIP("10.0.0.1"),
		end:   net.ParseIP("10.0.0.254"),
	}

	m.Activate(pool, net.ParseIP("10.0.0.1"))
	m.Activate(pool, net.ParseIP("10.0.0.3"))

	ip, err := m.DrawIP(pool, true)
	if err != nil {
		t.Fatalf("Got error: %v", err)
	}
	expected := net.ParseIP("10.0.0.2")
	if !ip.Equal(expected) {
		t.Errorf("Expected %v, but got %v", expected, ip)
	}

	m.Activate(pool, net.ParseIP("10.0.0.4"))
	ip, err = m.DrawIP(pool, true)
	if err != nil {
		t.Errorf("Got error: %v", err)
	}
	expected = net.ParseIP("10.0.0.5")
	if !ip.Equal(expected) {
		t.Errorf("Expected %v, but got %v", expected, ip)
	}
}

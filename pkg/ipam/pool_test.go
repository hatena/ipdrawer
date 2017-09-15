package ipam

import (
	"testing"

	"golang.org/x/net/context"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

func Test_getPools(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	m := NewTestIPManager(r)

	ctx := context.Background()

	pool := &model.Pool{
		Start:  "10.0.0.1",
		End:    "10.0.0.254",
		Status: model.Pool_AVAILABLE,
	}

	n := &model.Network{
		Prefix: "10.0.0.0/24",
		Status: model.Network_AVAILABLE,
	}

	_ = m.CreateNetwork(ctx, n)
	_ = m.CreatePool(ctx, n, pool)

	pools, err := getPoolsInNetwork(r, n)
	if err != nil {
		t.Fatalf("Got error: %v", err)
	}
	if len(pools) == 0 {
		t.Fatalf("Must be not zero")
	}
	if pools[0].Start != pool.Start || pools[0].End != pool.End {
		t.Fatalf("Got unexpected pool: %v", pools[0])
	}
}

func TestSetPool(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	network := &model.Network{
		Prefix: "10.0.0.0/24",
	}

	pool := &model.Pool{
		Start: "10.0.0.1",
		End:   "10.0.0.254",
	}

	if err := setPool(r, network, pool); err != nil {
		t.Fatalf("Got error %v; want success", err)
	}
}

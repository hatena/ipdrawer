package ipam

import (
	"net"
	"testing"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

var (
	testIP = net.ParseIP("192.168.0.1")

	testIPAddr = &model.IPAddr{
		Ip:     testIP.String(),
		Status: model.IPAddr_ACTIVE,
		Tags: []*model.Tag{
			{
				Key:   "Role",
				Value: "test",
			},
		},
	}
)

func TestSetIPAddr(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	err := setIPAddr(r, testIPAddr)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	dkey := makeIPDetailsKey(testIP)
	check, _ := r.Client.Exists(dkey).Result()
	if check == 0 {
		t.Errorf("IPAddr stored key doesn't exists: %s", dkey)
	}
}

func TestGetIPAddr(t *testing.T) {
	r, deferFunc := storage.NewTestRedis()
	defer deferFunc()

	err := setIPAddr(r, testIPAddr)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}

	resp, err := getIPAddr(r, testIP)
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}
	if !resp.Equal(testIPAddr) {
		t.Errorf("Got wrong IPAddr %v; want %v", resp, testIPAddr)
	}
}

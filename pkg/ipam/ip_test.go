package ipam

import (
	"net"
	"reflect"
	"testing"

	"github.com/hatena/ipdrawer/pkg/model"
	"github.com/hatena/ipdrawer/pkg/storage"
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

func TestGetIPAddrs(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	addrs := []*model.IPAddr{
		{
			Ip:     "10.0.0.1",
			Status: model.IPAddr_ACTIVE,
		},
		{
			Ip:     "10.0.0.2",
			Status: model.IPAddr_ACTIVE,
		},
	}

	for _, ip := range addrs {
		err := setIPAddr(r, ip)
		if err != nil {
			t.Fatalf("Got error %v; want success", err)
		}
	}

	resp, err := getIPAddrs(r, []net.IP{
		net.ParseIP("10.0.0.1"),
		net.ParseIP("10.0.0.2"),
	})
	if err != nil {
		t.Fatalf("Got error %v; want success", err)
	}
	if !reflect.DeepEqual(addrs, resp) {
		t.Errorf("Got wrong IPAddrs %v; want %v", resp, addrs)
	}
}

func TestSetIPAddrWithInvalidModel(t *testing.T) {
	r, def := storage.NewTestRedis()
	defer def()

	testCases := []struct {
		model *model.IPAddr

		desc string
	}{
		{
			model: &model.IPAddr{
				Ip: "invalid-ip",
			},
			desc: "Invalid IP address",
		},
	}

	for i, tc := range testCases {
		err := setIPAddr(r, tc.model)
		if err == nil {
			t.Errorf("#%d(%s): Want error but get nil", i, tc.desc)
		}
	}
}

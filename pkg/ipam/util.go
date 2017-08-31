package ipam

import (
	"encoding/binary"
	"fmt"
	"net"
	"strings"

	"github.com/pkg/errors"
	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

func ip2int(ip net.IP) uint32 {
	if len(ip) == 16 {
		return binary.BigEndian.Uint32(ip[12:16])
	}
	return binary.BigEndian.Uint32(ip)
}

func int2ip(nn uint32) net.IP {
	ip := make(net.IP, 4)
	binary.BigEndian.PutUint32(ip, nn)
	return ip
}

func nextIP(ip net.IP) net.IP {
	return int2ip(ip2int(ip) + 1)
}

func prevIP(ip net.IP) net.IP {
	return int2ip(ip2int(ip) - 1)
}

func unmarshalTag(s string) (*model.Tag, error) {
	kv := strings.Split(s, "=")
	if len(kv) != 2 {
		return nil, errors.New(
			fmt.Sprintf("Failed to unmarshal tag: %s", s))
	}
	return &model.Tag{
		Key:   kv[0],
		Value: kv[1],
	}, nil
}

func NewTestIPManager(r *storage.Redis) *IPManager {
	return &IPManager{
		redis:  r,
		locker: &storage.LocalLocker{},
	}
}

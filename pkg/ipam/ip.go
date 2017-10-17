package ipam

import (
	"net"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

func setTSToIPAddr(r *storage.Redis, addr *model.IPAddr) error {
	if err := addr.Validate(); err != nil {
		return err
	}

	ip := net.ParseIP(addr.Ip)
	if ip == nil {
		return errors.New("Parse IP failed")
	}

	if existsIP(r, addr) {
		stored, _ := getIPAddr(r, ip)
		addr.CreatedAt = stored.CreatedAt
	}

	return nil
}

func setIPAddr(r *storage.Redis, addr *model.IPAddr) error {
	if err := addr.Validate(); err != nil {
		return err
	}

	data, err := addr.Marshal()
	if err != nil {
		return errors.Wrap(err, "Marshaling IPAddr is failed")
	}

	dkey := makeIPDetailsKey(net.ParseIP(addr.Ip))
	if _, err := r.Client.Set(dkey, string(data), 0).Result(); err != nil {
		return errors.Wrap(err, "Save to Redis failed")
	}

	return nil
}

func getIPAddr(r *storage.Redis, ip net.IP) (*model.IPAddr, error) {
	dkey := makeIPDetailsKey(ip)
	data, err := r.Client.Get(dkey).Result()
	if err != nil {
		return nil, err
	}

	ipaddr := &model.IPAddr{}
	if err := ipaddr.Unmarshal([]byte(data)); err != nil {
		return nil, err
	}

	return ipaddr, nil
}

func getIPAddrs(r *storage.Redis, ips []net.IP) ([]*model.IPAddr, error) {
	addrs := make([]*model.IPAddr, len(ips))

	if len(ips) == 0 {
		return addrs, nil
	}

	dkeys := make([]string, len(ips))
	for i, ip := range ips {
		dkeys[i] = makeIPDetailsKey(ip)
	}
	data, err := r.Client.MGet(dkeys...).Result()
	if err != nil {
		return nil, err
	}

	for i, d := range data {
		if s, ok := d.(string); ok {
			addrs[i] = &model.IPAddr{}
			if err := addrs[i].Unmarshal([]byte(s)); err != nil {
				return nil, err
			}
		}
	}
	return addrs, nil
}

func existsIP(r *storage.Redis, addr *model.IPAddr) bool {
	ip := net.ParseIP(addr.Ip)
	check, _ := r.Client.Exists(makeIPDetailsKey(ip)).Result()
	return check != 0
}

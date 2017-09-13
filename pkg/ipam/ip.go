package ipam

import (
	"net"

	"github.com/pkg/errors"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/storage"
)

func setIPAddr(r *storage.Redis, addr *model.IPAddr) error {
	if err := addr.Validate(); err != nil {
		return err
	}

	ip := net.ParseIP(addr.Ip)
	if ip == nil {
		return errors.New("Parse IP failed")
	}
	data, err := addr.Marshal()
	if err != nil {
		return errors.Wrap(err, "Marshaling IPAddr is failed")
	}

	dkey := makeIPDetailsKey(ip)
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

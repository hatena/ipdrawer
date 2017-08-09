package server

import (
	"net"

	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"golang.org/x/net/context"

	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
)

func (api *APIServer) DrawIP(
	ctx context.Context,
	req *serverpb.DrawIPRequest,
) (*serverpb.DrawIPResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}
	pre, err := api.manager.GetPrefix(ip)
	if err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	pools, err := api.manager.GetPools(pre)
	if err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	if len(pools) == 0 {
		return &serverpb.DrawIPResponse{}, errors.New("not found prefix")
	}
	tags := make(map[string]string)
	for _, t := range req.Tags {
		tags[t.Key] = t.Value
	}
	var pool *ipam.IPPool
	for _, p := range pools {
		if p.Status == ipam.POOL_AVAILABLE && p.MatchTags(tags) {
			pool = p
			break
		}
	}
	if pool == nil {
		return &serverpb.DrawIPResponse{}, errors.New("not matched tags")
	}
	ret, err := api.manager.DrawIP(pool, true)
	if err != nil {
		return &serverpb.DrawIPResponse{}, err
	}
	return &serverpb.DrawIPResponse{
		Ip: ret.String(),
	}, nil
}

func (api *APIServer) GetPrefixIncludingIP(
	ctx context.Context,
	req *serverpb.GetPrefixIncludingIPRequest,
) (*serverpb.GetPrefixIncludingIPResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.GetPrefixIncludingIPResponse{}, err
	}
	return &serverpb.GetPrefixIncludingIPResponse{}, nil
}

func (api *APIServer) ActivateIP(
	ctx context.Context,
	req *serverpb.ActivateIPRequest,
) (*serverpb.ActivateIPResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.ActivateIPResponse{}, err
	}

	ip := net.ParseIP(req.Ip)

	prefix, err := api.manager.GetPrefixIncludingIP(ip)
	if err != nil {
		return &serverpb.ActivateIPResponse{}, err
	}

	pools, err := api.manager.GetPools(prefix)
	if err != nil {
		return &serverpb.ActivateIPResponse{}, err
	}

	for _, pool := range pools {
		if pool.Contains(ip) {
			if err := api.manager.Activate(pool, ip); err != nil {
				return &serverpb.ActivateIPResponse{}, err
			} else {
				return &serverpb.ActivateIPResponse{}, nil
			}
		}
	}

	return &serverpb.ActivateIPResponse{}, errors.New("Not found pool")
}

func (api *APIServer) GetPrefix(
	ctx context.Context,
	req *serverpb.GetPrefixRequest,
) (*serverpb.GetPrefixResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.GetPrefixResponse{}, err
	}

	p, err := api.manager.GetPrefix(&net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	})
	if err != nil {
		return &serverpb.GetPrefixResponse{}, err
	}

	gws := make([]string, len(p.Gateways))
	for i, gw := range p.Gateways {
		gws[i] = gw.String()
	}

	tags := make([]*serverpb.Tag, len(p.Tags))
	i := 0
	for k, v := range p.Tags {
		tags[i] = &serverpb.Tag{
			Key:   k,
			Value: v,
		}
		i += 1
	}

	return &serverpb.GetPrefixResponse{
		Ipnet:           p.Prefix.String(),
		Broadcast:       p.Broadcast.String(),
		Netmask:         p.Netmask.String(),
		DefaultGateways: gws,
		Tags:            tags,
	}, nil
}

func (api *APIServer) CreatePrefix(
	ctx context.Context,
	req *serverpb.CreatePrefixRequest,
) (*serverpb.CreatePrefixResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.CreatePrefixResponse{}, err
	}

	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}

	gws := make([]net.IP, len(req.DefaultGateways))
	for i, gw := range req.DefaultGateways {
		gws[i] = net.ParseIP(gw)
	}

	tags := make(map[string]string)
	for _, tag := range req.Tags {
		tags[tag.Key] = tag.Value
	}

	p := &ipam.Prefix{
		Prefix:    ip,
		Broadcast: net.ParseIP(req.Broadcast),
		Netmask:   net.ParseIP(req.Netmask),
		Gateways:  gws,
		Tags:      tags,
		Status:    ipam.PREFIX_AVAILABLE,
	}

	if err := api.manager.CreatePrefix(p); err != nil {
		return &serverpb.CreatePrefixResponse{}, err
	}

	return &serverpb.CreatePrefixResponse{}, nil
}

func (api *APIServer) CreatePool(
	ctx context.Context,
	req *serverpb.CreatePoolRequest,
) (*serverpb.CreatePoolResponse, error) {
	if err := req.Validate(); err != nil {
		return &serverpb.CreatePoolResponse{}, err
	}

	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}

	logrus.Print(req)

	tags := make(map[string]string)
	if len(req.Pool.Tags) != 0 {
		for _, tag := range req.Pool.Tags {
			tags[tag.Key] = tag.Value
		}
	}

	pool := &ipam.IPPool{
		Start:  net.ParseIP(req.Pool.Start),
		End:    net.ParseIP(req.Pool.End),
		Status: ipam.POOL_AVAILABLE,
		Tags:   tags,
	}

	prefix, err := api.manager.GetPrefix(ip)
	if err != nil {
		return &serverpb.CreatePoolResponse{}, err
	}

	if err := api.manager.CreatePool(prefix, pool); err != nil {
		return &serverpb.CreatePoolResponse{}, err
	}

	return &serverpb.CreatePoolResponse{}, nil
}

package server

import (
	"net"

	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"golang.org/x/net/context"

	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
	"github.com/taku-k/ipdrawer/pkg/utils/netutil"
)

func (api *APIServer) DrawIP(
	ctx context.Context,
	req *serverpb.DrawIPRequest,
) (*serverpb.DrawIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
	}
	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}
	n, err := api.manager.GetNetwork(ctx, ip)
	if err != nil {
		return nil, err
	}
	pools, err := api.manager.GetPools(ctx, n)
	if err != nil {
		return nil, err
	}
	if len(pools) == 0 {
		return nil, errors.New("not found prefix")
	}
	tags := make(map[string]string)
	if req.PoolTag != nil {
		tags[req.PoolTag.Key] = req.PoolTag.Value
	}
	var pool *ipam.IPPool
	for _, p := range pools {
		if p.Status == ipam.POOL_AVAILABLE && p.MatchTags(tags) {
			pool = p
			break
		}
	}
	if pool == nil {
		return nil, errors.New("not matched tags")
	}
	ret, err := api.manager.DrawIP(ctx, pool, true)
	if err != nil {
		return nil, err
	}
	return &serverpb.DrawIPResponse{
		Ip: ret.String(),
	}, nil
}

func (api *APIServer) GetNetworkIncludingIP(
	ctx context.Context,
	req *serverpb.GetNetworkIncludingIPRequest,
) (*serverpb.GetNetworkIncludingIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
	}
	return &serverpb.GetNetworkIncludingIPResponse{}, nil
}

func (api *APIServer) ActivateIP(
	ctx context.Context,
	req *serverpb.ActivateIPRequest,
) (*serverpb.ActivateIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
	}

	ip := net.ParseIP(req.Ip)

	n, err := api.manager.GetNetworkIncludingIP(ctx, ip)
	if err != nil {
		return nil, err
	}

	pools, err := api.manager.GetPools(ctx, n)
	if err != nil {
		return nil, err
	}

	for _, pool := range pools {
		if pool.Contains(ip) {
			if err := api.manager.Activate(ctx, pool, ip); err != nil {
				return nil, err
			} else {
				return &serverpb.ActivateIPResponse{}, nil
			}
		}
	}

	return nil, errors.New("Not found pool")
}

func (api *APIServer) GetNetwork(
	ctx context.Context,
	req *serverpb.GetNetworkRequest,
) (*serverpb.GetNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
	}

	n, err := api.manager.GetNetwork(ctx, &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	})
	if err != nil {
		return nil, err
	}

	gws := make([]string, len(n.Gateways))
	for i, gw := range n.Gateways {
		gws[i] = gw.String()
	}

	tags := make([]*serverpb.Tag, len(n.Tags))
	i := 0
	for k, v := range n.Tags {
		tags[i] = &serverpb.Tag{
			Key:   k,
			Value: v,
		}
		i += 1
	}

	return &serverpb.GetNetworkResponse{
		Network:         n.Prefix.String(),
		Broadcast:       n.Broadcast.String(),
		Netmask:         n.Netmask.String(),
		DefaultGateways: gws,
		Tags:            tags,
	}, nil
}

func (api *APIServer) CreateNetwork(
	ctx context.Context,
	req *serverpb.CreateNetworkRequest,
) (*serverpb.CreateNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
	}

	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}

	netmask := netutil.IPMaskToIP(net.CIDRMask(int(req.Mask), 32))
	broadcast := netutil.BroadcastIP(ip)

	gws := make([]net.IP, len(req.DefaultGateways))
	for i, gw := range req.DefaultGateways {
		gws[i] = net.ParseIP(gw)
	}

	tags := make(map[string]string)
	for _, tag := range req.Tags {
		tags[tag.Key] = tag.Value
	}

	n := &ipam.Network{
		Prefix:    ip,
		Broadcast: broadcast,
		Netmask:   netmask,
		Gateways:  gws,
		Tags:      tags,
		Status:    ipam.NETWORK_AVAILABLE,
	}

	if err := api.manager.CreateNetwork(ctx, n); err != nil {
		return nil, err
	}

	return &serverpb.CreateNetworkResponse{}, nil
}

func (api *APIServer) CreatePool(
	ctx context.Context,
	req *serverpb.CreatePoolRequest,
) (*serverpb.CreatePoolResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
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

	n, err := api.manager.GetNetwork(ctx, ip)
	if err != nil {
		return nil, err
	}

	if err := api.manager.CreatePool(ctx, n, pool); err != nil {
		return nil, err
	}

	return &serverpb.CreatePoolResponse{}, nil
}

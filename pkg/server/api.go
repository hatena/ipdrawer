package server

import (
	"net"

	"golang.org/x/net/context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/taku-k/ipdrawer/pkg/ipam"
	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
	"github.com/taku-k/ipdrawer/pkg/utils/netutil"
)

func (api *APIServer) DrawIP(
	ctx context.Context,
	req *serverpb.DrawIPRequest,
) (*serverpb.DrawIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "%s", err)
	}

	var n *ipam.Network
	var err error
	if req.Name == "" {
		ip := &net.IPNet{
			IP:   net.ParseIP(req.Ip),
			Mask: net.CIDRMask(int(req.Mask), 32),
		}

		n, err = api.manager.GetNetworkByIP(ctx, ip)
	} else {
		n, err = api.manager.GetNetworkByName(ctx, req.Name)
	}
	if err != nil {
		return nil, err
	}

	pools, err := api.manager.GetPools(ctx, n)
	if err != nil {
		return nil, err
	}
	if len(pools) == 0 {
		return nil, status.Error(
			codes.NotFound, "Not found any pools")
	}

	tags := make(map[string]string)
	if req.PoolTag != nil {
		tags[req.PoolTag.Key] = req.PoolTag.Value
	}

	target := make([]*ipam.IPPool, 0)
	for _, p := range pools {
		if p.Status == ipam.POOL_AVAILABLE && p.MatchTags(tags) {
			target = append(target, p)
		}
	}
	if len(target) == 0 {
		return nil, status.Errorf(
			codes.NotFound, "Not found matched tags: %v", tags)
	}

	for _, p := range target {
		ret, err := api.manager.DrawIP(ctx, p, true)
		if err == nil {
			return &serverpb.DrawIPResponse{
				Ip: ret.String(),
			}, nil
		}
	}

	return nil, status.Error(codes.NotFound, "Not found IP to serve")
}

func (api *APIServer) GetNetworkIncludingIP(
	ctx context.Context,
	req *serverpb.GetNetworkIncludingIPRequest,
) (*serverpb.GetNetworkIncludingIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "%s", err)
	}
	return nil, status.Error(codes.Unimplemented, "Not implemented yet")
}

func (api *APIServer) ActivateIP(
	ctx context.Context,
	req *serverpb.ActivateIPRequest,
) (*serverpb.ActivateIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "%s", err)
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

	return nil, status.Errorf(
		codes.NotFound, "Not found pool: %s", ip.String())
}

func (api *APIServer) GetNetwork(
	ctx context.Context,
	req *serverpb.GetNetworkRequest,
) (*serverpb.GetNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "%s", err)
	}

	var n *ipam.Network
	var err error
	if req.Name == "" {
		n, err = api.manager.GetNetworkByIP(ctx, &net.IPNet{
			IP:   net.ParseIP(req.Ip),
			Mask: net.CIDRMask(int(req.Mask), 32),
		})
	} else {
		n, err = api.manager.GetNetworkByName(ctx, req.Name)
	}
	if err != nil {
		return nil, err
	}

	gws := make([]string, len(n.Gateways))
	for i, gw := range n.Gateways {
		gws[i] = gw.String()
	}

	tags := make([]*model.Tag, len(n.Tags))
	i := 0
	for k, v := range n.Tags {
		tags[i] = &model.Tag{
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
		return nil, status.Errorf(codes.InvalidArgument, "%s", err)
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
		return nil, status.Errorf(codes.InvalidArgument, "%s", err)
	}

	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}

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

	n, err := api.manager.GetNetworkByIP(ctx, ip)
	if err != nil {
		return nil, err
	}

	if err := api.manager.CreatePool(ctx, n, pool); err != nil {
		return nil, err
	}

	return &serverpb.CreatePoolResponse{}, nil
}

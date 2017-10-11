package server

import (
	"net"
	"strings"

	"github.com/pkg/errors"
	"golang.org/x/net/context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/peer"
	"google.golang.org/grpc/status"

	"sort"

	"github.com/taku-k/ipdrawer/pkg/model"
	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
	"github.com/taku-k/ipdrawer/pkg/utils/netutil"
)

var (
	DrawIPSuccessMsg           = "succss"
	DrawIPActivationSuccessMsg = "success activation"
)

// ListNetwork is an endpoints returning all networks
func (api *APIServer) ListNetwork(
	ctx context.Context,
	req *serverpb.ListNetworkRequest,
) (*serverpb.ListNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	networks, err := api.manager.GetNetworks(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "Manager can't get network list")
	}
	return &serverpb.ListNetworkResponse{
		Networks: networks,
	}, nil
}

func (api *APIServer) DrawIP(
	ctx context.Context,
	req *serverpb.DrawIPRequest,
) (*serverpb.DrawIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	var n *model.Network
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

	pools, err := api.manager.GetPoolsInNetwork(ctx, n)
	if err != nil {
		return nil, err
	}
	if len(pools) == 0 {
		return nil, status.Error(
			codes.NotFound, "Not found any pools")
	}

	target := make([]*model.Pool, 0)
	for _, p := range pools {
		if p.Status == model.Pool_AVAILABLE && p.MatchTags([]*model.Tag{req.PoolTag}) {
			target = append(target, p)
		}
	}
	if len(target) == 0 {
		return nil, status.Errorf(
			codes.NotFound, "Not found matched tags: %v", req.PoolTag.String())
	}

	for _, p := range target {
		ret, err := api.manager.DrawIP(ctx, p, true, false)
		if err == nil {
			res := &serverpb.DrawIPResponse{
				Ip:      ret.String(),
				Message: DrawIPSuccessMsg,
			}
			if !req.TemporaryReserved {
				_, err := api.ActivateIP(ctx, &serverpb.ActivateIPRequest{
					Ip: ret.String(),
				})
				if err != nil {
					continue
				}
				res.Message = DrawIPActivationSuccessMsg
			}
			return res, nil
		}
	}

	return nil, status.Error(codes.NotFound, "Not found IP to serve")
}

func (api *APIServer) DrawIPEstimatingNetwork(
	ctx context.Context,
	req *serverpb.DrawIPEstimatingNetworkRequest,
) (*serverpb.DrawIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	var ip net.IP
	// In case that request is passed through grpc-gateway
	if md, ok := metadata.FromContext(ctx); ok {
		if ips, ok := md["x-forwarded-for"]; ok {
			ip = net.ParseIP(strings.Split(ips[0], ",")[0])
		}
	}
	if ip == nil {
		if pr, ok := peer.FromContext(ctx); ok {
			if tcpAddr, ok := pr.Addr.(*net.TCPAddr); ok {
				ip = tcpAddr.IP
			}
		}
	}
	if ip == nil {
		return nil, status.Error(codes.Internal, "Not support remote addr")
	}

	n, err := api.manager.GetNetworkIncludingIP(ctx, ip.To4())
	if err != nil {
		return nil, status.Error(codes.NotFound, err.Error())
	}

	_, pre, _ := net.ParseCIDR(n.Prefix)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	ones, _ := pre.Mask.Size()
	return api.DrawIP(ctx, &serverpb.DrawIPRequest{
		Ip:                pre.IP.String(),
		Mask:              int32(ones),
		PoolTag:           req.PoolTag,
		TemporaryReserved: req.TemporaryReserved,
	})
}

func (api *APIServer) GetNetworkIncludingIP(
	ctx context.Context,
	req *serverpb.GetNetworkIncludingIPRequest,
) (*serverpb.GetNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Errorf(codes.InvalidArgument, err.Error())
	}

	n, err := api.manager.GetNetworkIncludingIP(ctx, net.ParseIP(req.Ip))
	if err != nil {
		return nil, status.Error(codes.NotFound, err.Error())
	}

	gws := make([]string, len(n.Gateways))
	for i, gw := range n.Gateways {
		gws[i] = gw
	}

	return &serverpb.GetNetworkResponse{
		Network:         n.Prefix,
		Broadcast:       n.Broadcast,
		Netmask:         n.Netmask,
		DefaultGateways: gws,
		Tags:            n.Tags,
	}, nil
}

func (api *APIServer) GetEstimatedNetwork(
	ctx context.Context,
	req *serverpb.GetEstimatedNetworkRequest,
) (*serverpb.GetNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Errorf(codes.InvalidArgument, err.Error())
	}

	// In case that request is passed through grpc-gateway
	if md, ok := metadata.FromContext(ctx); ok {
		if ips, ok := md["x-forwarded-for"]; ok {
			return api.GetNetworkIncludingIP(ctx, &serverpb.GetNetworkIncludingIPRequest{
				Ip: strings.Split(ips[0], ",")[0],
			})
		}
	}

	var ip net.IP
	if pr, ok := peer.FromContext(ctx); ok {
		if tcpAddr, ok := pr.Addr.(*net.TCPAddr); ok {
			ip = tcpAddr.IP
		}
	}
	if ip == nil {
		return nil, status.Error(codes.Internal, "Not support remote addr")
	}

	return api.GetNetworkIncludingIP(ctx, &serverpb.GetNetworkIncludingIPRequest{
		Ip: ip.String(),
	})
}

func (api *APIServer) CreateIP(
	ctx context.Context,
	addr *model.IPAddr,
) (*serverpb.CreateIPResponse, error) {
	if err := addr.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ip := net.ParseIP(addr.Ip)

	n, err := api.manager.GetNetworkIncludingIP(ctx, ip)
	if err != nil {
		return nil, err
	}

	pools, err := api.manager.GetPoolsInNetwork(ctx, n)
	if err != nil {
		return nil, err
	}

	if err := api.manager.CreateIP(ctx, pools, addr); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &serverpb.CreateIPResponse{}, nil
}

func (api *APIServer) ActivateIP(
	ctx context.Context,
	req *serverpb.ActivateIPRequest,
) (*serverpb.CreateIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	addr := &model.IPAddr{
		Ip:     req.Ip,
		Status: model.IPAddr_ACTIVE,
		Tags:   req.Tags,
	}

	return api.CreateIP(ctx, addr)
}

func (api *APIServer) DeactivateIP(
	ctx context.Context,
	req *serverpb.DeactivateIPRequest,
) (*serverpb.DeactivateIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ip := net.ParseIP(req.Ip)
	addr := &model.IPAddr{
		Ip: req.Ip,
	}

	n, err := api.manager.GetNetworkIncludingIP(ctx, ip)
	if err != nil {
		return nil, err
	}

	pools, err := api.manager.GetPoolsInNetwork(ctx, n)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	if len(pools) == 0 {
		return nil, status.Errorf(
			codes.NotFound, "Not found pool: IP: %s", ip.String())
	}

	if err := api.manager.Deactivate(ctx, pools, addr); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &serverpb.DeactivateIPResponse{}, nil
}

func (api *APIServer) UpdateIP(
	ctx context.Context,
	addr *model.IPAddr,
) (*serverpb.UpdateIPResponse, error) {
	if err := addr.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	if err := api.manager.UpdateIP(ctx, addr); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &serverpb.UpdateIPResponse{}, nil
}

func (api *APIServer) GetNetwork(
	ctx context.Context,
	req *serverpb.GetNetworkRequest,
) (*serverpb.GetNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	var n *model.Network
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
		gws[i] = gw
	}

	return &serverpb.GetNetworkResponse{
		Network:         n.Prefix,
		Broadcast:       n.Broadcast,
		Netmask:         n.Netmask,
		DefaultGateways: gws,
		Tags:            n.Tags,
	}, nil
}

func (api *APIServer) CreateNetwork(
	ctx context.Context,
	req *serverpb.CreateNetworkRequest,
) (*serverpb.CreateNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}

	netmask := netutil.IPMaskToIP(net.CIDRMask(int(req.Mask), 32))
	broadcast := netutil.BroadcastIP(ip)

	n := &model.Network{
		Prefix:    ip.String(),
		Broadcast: broadcast.String(),
		Netmask:   netmask.String(),
		Gateways:  req.DefaultGateways,
		Tags:      req.Tags,
		Status:    req.Status,
	}

	if err := api.manager.CreateNetwork(ctx, n); err != nil {
		return nil, err
	}

	return &serverpb.CreateNetworkResponse{}, nil
}

// GetPoolsInNetwork returns all pools in a given network.
func (api *APIServer) GetPoolsInNetwork(
	ctx context.Context,
	req *serverpb.GetPoolsInNetworkRequest,
) (*serverpb.GetPoolsInNetworkResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	n, err := api.manager.GetNetworkByIP(ctx, &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	})
	if err != nil {
		return nil, err
	}
	pools, err := api.manager.GetPoolsInNetwork(ctx, n)
	if err != nil {
		return nil, err
	}

	return &serverpb.GetPoolsInNetworkResponse{
		Pools: pools,
	}, nil
}

func (api *APIServer) CreatePool(
	ctx context.Context,
	req *serverpb.CreatePoolRequest,
) (*serverpb.CreatePoolResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ip := &net.IPNet{
		IP:   net.ParseIP(req.Ip),
		Mask: net.CIDRMask(int(req.Mask), 32),
	}

	pool := &model.Pool{
		Start:  req.Pool.Start,
		End:    req.Pool.End,
		Status: req.Pool.Status,
		Tags:   req.Pool.Tags,
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

func (api *APIServer) ListIP(
	ctx context.Context,
	req *serverpb.ListIPRequest,
) (*serverpb.ListIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	addrs, err := api.manager.ListIP(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "Manager can't get ip list")
	}

	// Sort by IP
	sort.Slice(addrs, func(i, j int) bool {
		return addrs[i].Ip < addrs[j].Ip
	})

	return &serverpb.ListIPResponse{
		Ips: addrs,
	}, nil
}

func (api *APIServer) ListTemporaryReservedIP(
	ctx context.Context,
	req *serverpb.ListTemporaryReservedIPRequest,
) (*serverpb.ListTemporaryReservedIPResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	addrs, err := api.manager.GetTemporaryReservedIPs(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "Manager can't get ip list")
	}
	return &serverpb.ListTemporaryReservedIPResponse{
		Ips: addrs,
	}, nil
}

func (api *APIServer) ListPool(
	ctx context.Context,
	req *serverpb.ListPoolRequest,
) (*serverpb.ListPoolResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	pools, err := api.manager.GetPools(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "Manager can't get pool list")
	}
	return &serverpb.ListPoolResponse{
		Pools: pools,
	}, nil
}

// GetIPInPool is an endpoint to get IPs in a given pool.
func (api *APIServer) GetIPInPool(
	ctx context.Context,
	req *serverpb.GetIPInPoolRequest,
) (*serverpb.GetIPInPoolResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	pool, err := api.manager.GetPool(ctx, net.ParseIP(req.RangeStart), net.ParseIP(req.RangeEnd))
	if err != nil {
		return nil, status.Error(codes.NotFound, err.Error())
	}

	addrs, err := api.manager.ListIP(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "Manager can't get ip list")
	}

	ret := make([]*model.IPAddr, 0)
	for _, ip := range addrs {
		if pool.Contains(net.ParseIP(ip.Ip)) {
			ret = append(ret, ip)
		}
	}

	return &serverpb.GetIPInPoolResponse{
		Pool: pool,
		Ips:  ret,
	}, nil
}

// UpdatePool updates a given pool.
func (api *APIServer) UpdatePool(
	ctx context.Context,
	pool *model.Pool,
) (*serverpb.UpdatePoolResponse, error) {
	if err := pool.Validate(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	if err := api.manager.UpdatePool(ctx, pool); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &serverpb.UpdatePoolResponse{}, nil
}

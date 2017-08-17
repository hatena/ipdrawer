package cli

import (
	"context"
	"fmt"
	"io/ioutil"
	"net"

	"github.com/go-yaml/yaml"
	"github.com/spf13/cobra"
	"google.golang.org/grpc"

	"github.com/taku-k/ipdrawer/pkg/server/serverpb"
)

var networkImportCmd = &cobra.Command{
	Use:   "network",
	Short: "Import networks",
	RunE:  runNetworkImport,
}

func runNetworkImport(cmd *cobra.Command, args []string) error {
	if len(args) == 0 {
		usageAndError(cmd)
	}

	addr := net.JoinHostPort(cfg.Host, cfg.Port)
	conn, err := grpc.DialContext(context.Background(), addr, grpc.WithInsecure())
	if err != nil {
		return err
	}
	cli := serverpb.NewNetworkServiceV0Client(conn)

	for _, fn := range args {
		reqs := make([]*serverpb.CreateNetworkRequest, 0)
		data, err := ioutil.ReadFile(fn)
		if err != nil {
			return err
		}
		if err = yaml.Unmarshal([]byte(data), &reqs); err != nil {
			return err
		}

		for _, req := range reqs {
			_, err := cli.CreateNetwork(context.Background(), req)
			if err != nil {
				return err
			}
			fmt.Printf("Created: %s/%d\n", req.Ip, req.Mask)
		}
	}
	return nil
}

var poolImportCmd = &cobra.Command{
	Use:   "pool",
	Short: "Import pool",
	RunE:  runPoolImport,
}

func runPoolImport(cmd *cobra.Command, args []string) error {
	if len(args) == 0 {
		usageAndError(cmd)
	}

	addr := net.JoinHostPort(cfg.Host, cfg.Port)
	conn, err := grpc.DialContext(context.Background(), addr, grpc.WithInsecure())
	if err != nil {
		return err
	}
	cli := serverpb.NewNetworkServiceV0Client(conn)

	for _, fn := range args {
		reqs := make([]*serverpb.CreatePoolRequest, 0)
		data, err := ioutil.ReadFile(fn)
		if err != nil {
			return err
		}
		if err = yaml.Unmarshal([]byte(data), &reqs); err != nil {
			return err
		}
		for _, req := range reqs {
			_, err := cli.CreatePool(context.Background(), req)
			if err != nil {
				return err
			}
			fmt.Printf("Created: %v\n", req.Pool)
		}
	}
	return nil
}

var ipAddrImportCmd = &cobra.Command{
	Use:   "ipaddr",
	Short: "Import ipaddr",
	RunE:  runIPAddrImport,
}

func runIPAddrImport(cmd *cobra.Command, args []string) error {
	if len(args) == 0 {
		usageAndError(cmd)
	}

	addr := net.JoinHostPort(cfg.Host, cfg.Port)
	conn, err := grpc.DialContext(context.Background(), addr, grpc.WithInsecure())
	if err != nil {
		return err
	}
	cli := serverpb.NewIPServiceV0Client(conn)

	failedIps := make([]*serverpb.ActivateIPRequest, 0)

	for _, fn := range args {
		reqs := make([]*serverpb.ActivateIPRequest, 0)
		data, err := ioutil.ReadFile(fn)
		if err != nil {
			return err
		}
		if err = yaml.Unmarshal([]byte(data), &reqs); err != nil {
			return err
		}
		for _, req := range reqs {
			_, err := cli.ActivateIP(context.Background(), req)
			if err != nil {
				failedIps = append(failedIps, req)
			} else {
				fmt.Printf("Activated: %v\n", req.Ip)
			}
		}
	}

	fmt.Printf("Failed ips: %v\n", failedIps)

	return nil
}

var importCmds = []*cobra.Command{
	networkImportCmd,
	poolImportCmd,
	ipAddrImportCmd,
}

var importCmd = &cobra.Command{
	Use:   "import",
	Short: "Import resources by yaml files",
	RunE: func(cmd *cobra.Command, args []string) error {
		return cmd.Usage()
	},
}

func init() {
	importCmd.AddCommand(importCmds...)
}

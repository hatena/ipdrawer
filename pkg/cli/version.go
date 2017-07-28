package cli

import (
	"fmt"
	"os"
	"text/tabwriter"

	"github.com/taku-k/ipdrawer/pkg/build"

	"github.com/spf13/cobra"
)

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Output version information",
	RunE:  runVersion,
}

func runVersion(cmd *cobra.Command, args []string) error {
	info := build.GetInfo()
	tw := tabwriter.NewWriter(os.Stdout, 2, 1, 2, ' ', 0)
	fmt.Fprintf(tw, "Build Tag:\t%s\n", info.Tag)
	fmt.Fprintf(tw, "Go Version:\t%s\n", info.GoVersion)
	fmt.Fprintf(tw, "Build SHA-1:\t%s\n", info.Revision)
	return tw.Flush()
}

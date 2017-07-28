package cli

import (
	"fmt"
	"os"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:          "ipdrawer",
	Short:        "Draw IP",
	SilenceUsage: true,
}

// Run executes rootCmd.Execute().
func Run() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintf(os.Stderr, "Failed running %q\n", os.Args[1])
		os.Exit(1)
	}
}

func usageAndError(cmd *cobra.Command) error {
	if err := cmd.Usage(); err != nil {
		return err
	}
	return errors.New("invalid arguments")
}

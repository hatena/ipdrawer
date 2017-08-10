package cli

import (
	"github.com/spf13/cobra"
)

var importCmd = &cobra.Command{
	Use:   "import",
	Short: "Import",
	RunE:  runImport,
}

func runImport(cmd *cobra.Command, args []string) error {
	return nil
}

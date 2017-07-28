package cli

import (
	"github.com/taku-k/ipdrawer/pkg/server"

	"github.com/spf13/cobra"
)

var startCmd = &cobra.Command{
	Use:   "start",
	Short: "Runs server",
	RunE:  startServer,
}

func startServer(cmd *cobra.Command, args []string) error {
	s := server.NewAPIServer("8080")
	return s.Start()
}

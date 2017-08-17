package cli

import "github.com/taku-k/ipdrawer/pkg/base"

var cfg = base.MakeConfig()

func init() {
	{
		f := startCmd.Flags()

		f.StringVar(&cfg.Port, "port", cfg.Port, "ipdrawer server port.")
		f.BoolVar(&cfg.EnableTracer, "--enable-tracer", cfg.EnableTracer, "Flag of enabling tracer.")
	}

	{
		f := importCmd.Flags()

		f.StringVar(&cfg.Host, "host", cfg.Host, "ipdrawer server host.")
		f.StringVar(&cfg.Port, "port", cfg.Port, "ipdrawer server port.")
	}

	rootCmd.AddCommand(
		startCmd,
		importCmd,
		versionCmd,
	)
}

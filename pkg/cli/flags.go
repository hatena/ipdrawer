package cli

import (
	"github.com/spf13/pflag"

	"github.com/taku-k/ipdrawer/pkg/base"
	"github.com/taku-k/ipdrawer/pkg/cli/cliflags"
	"github.com/taku-k/ipdrawer/pkg/utils/envutil"
)

var cfg = base.MakeConfig()

func setFlagFromEnv(f *pflag.FlagSet, flagInfo cliflags.FlagInfo) {
	if flagInfo.EnvVar != "" {
		if val := envutil.EnvOrDefaultString(flagInfo.EnvVar, ""); val != "" {
			if err := f.Set(flagInfo.EnvVar, val); err != nil {
				panic(err)
			}
		}
	}
}

func stringFlag(f *pflag.FlagSet, valPtr *string, flagInfo cliflags.FlagInfo, defaultVal string) {
	f.StringVarP(valPtr, flagInfo.Name, flagInfo.Shorthand, defaultVal, flagInfo.Desc)

	setFlagFromEnv(f, flagInfo)
}

func boolFlag(f *pflag.FlagSet, valPtr *bool, flagInfo cliflags.FlagInfo, defaultVal bool) {
	f.BoolVarP(valPtr, flagInfo.Name, flagInfo.Shorthand, defaultVal, flagInfo.Desc)

	setFlagFromEnv(f, flagInfo)
}

func init() {
	{
		f := startCmd.Flags()

		// Server
		stringFlag(f, &cfg.Port, cliflags.ServerPort, cfg.Port)
		boolFlag(f, &cfg.EnableTracer, cliflags.EnableTracerFlag, cfg.EnableTracer)

		// Bot
		stringFlag(f, &cfg.BotPort, cliflags.BotPort, cfg.BotPort)
		stringFlag(f, &cfg.BotToken, cliflags.BotToken, cfg.BotToken)
		stringFlag(f, &cfg.BotID, cliflags.BotID, cfg.BotID)
	}

	{
		f := importCmd.PersistentFlags()

		stringFlag(f, &cfg.Host, cliflags.ClientHost, cfg.Host)
		stringFlag(f, &cfg.Port, cliflags.ClientPort, cfg.Port)
	}

	rootCmd.AddCommand(
		startCmd,
		importCmd,
		versionCmd,
	)
}

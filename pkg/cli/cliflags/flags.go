package cliflags

// FlagInfo contains the static information for a CLI flag.
type FlagInfo struct {
	// Name of the flag
	Name string

	// Shorthand (optional)
	Shorthand string

	// EnvVar is the name of environment variable (optional)
	EnvVar string

	// Description of the flag
	Desc string
}

var (
	ServerPort = FlagInfo{
		Name:      "port",
		Shorthand: "p",
		Desc:      "ipdrawer server port.",
	}

	RedisHost = FlagInfo{
		Name:   "redis-host",
		EnvVar: "IPDRAWER_REDIS_HOST",
		Desc:   "redis host.",
	}

	RedisPort = FlagInfo{
		Name:   "redis-port",
		EnvVar: "IPDRAWER_REDIS_PORT",
		Desc:   "redis port.",
	}

	EnableTracerFlag = FlagInfo{
		Name:   "enable-tracer",
		EnvVar: "IPDRAWER_ENABLE_TRACER",
		Desc:   "flag of enabling tracer.",
	}

	BotPort = FlagInfo{
		Name:   "bot-port",
		EnvVar: "IPDRAWER_BOT_PORT",
		Desc:   "ipdrawer slack bot port.",
	}

	BotToken = FlagInfo{
		Name:   "bot-token",
		EnvVar: "IPDRAWER_BOT_TOKEN",
		Desc:   "Slack token for ipdrawer bot.",
	}

	BotID = FlagInfo{
		Name:   "bot-id",
		EnvVar: "IPDRAWER_BOT_ID",
		Desc:   "bot user ID.",
	}

	ClientHost = FlagInfo{
		Name:   "host",
		EnvVar: "IPDRAWER_HOST",
		Desc:   "ipdrawer server host to connect to.",
	}

	ClientPort = FlagInfo{
		Name:      "port",
		Shorthand: "p",
		EnvVar:    "IPDRAWER_PORT",
		Desc:      "ipdrawer server port to connect to.",
	}
)

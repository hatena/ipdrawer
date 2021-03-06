package base

const (
	defaultHost = "localhost"
	// From IANA Service Name and Transport Protocol Port Number Registry
	// This port is unregistered for now.
	// https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?&page=126
	defaultPort = "25577"

	defaultRedisHost = "localhost"
	defaultRedisPort = "6379"

	defaultBotPort = "25578"
)

type Config struct {
	Host         string
	Port         string
	RedisHost    string
	RedisPort    string
	EnableTracer bool

	// Slack Bot
	BotPort  string
	BotToken string
	BotID    string
}

func MakeConfig() *Config {
	return &Config{
		Host:         defaultHost,
		Port:         defaultPort,
		RedisHost:    defaultRedisHost,
		RedisPort:    defaultRedisPort,
		EnableTracer: false,
		BotPort:      defaultBotPort,
	}
}

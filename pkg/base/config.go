package base

const (
	defaultHost = "localhost"
	// From IANA Service Name and Transport Protocol Port Number Registry
	// This port is unregistered for now.
	// https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?&page=126
	defaultPort = "25577"
)

type Config struct {
	Host         string
	Port         string
	EnableTracer bool

	// Slack Bot
	SlackToken string
	BotName    string
}

func MakeConfig() *Config {
	return &Config{
		Host:         defaultHost,
		Port:         defaultPort,
		EnableTracer: true,
	}
}

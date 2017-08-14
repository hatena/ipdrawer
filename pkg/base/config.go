package base

const (
	// From IANA Service Name and Transport Protocol Port Number Registry
	// This port is unregistered for now.
	// https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?&page=126
	defaultPort = "25577"
)

type Config struct {
	Port         string
	EnableTracer bool
}

func MakeConfig() *Config {
	return &Config{
		Port:         defaultPort,
		EnableTracer: true,
	}
}

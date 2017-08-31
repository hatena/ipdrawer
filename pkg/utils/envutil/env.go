package envutil

import "os"

// EnvOrDefaultString returns the value set by the specified
// environment variable, if any, otherwise the specified default value.
func EnvOrDefaultString(name string, value string) string {
	if v, found := os.LookupEnv(name); found {
		return v
	}
	return value
}

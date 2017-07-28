package build

import "runtime"

type Info struct {
	Revision  string
	GoVersion string
	Tag       string
}

var (
	tag = "unknown"
	rev string
)

func GetInfo() *Info {
	return &Info{
		Revision:  rev,
		GoVersion: runtime.Version(),
		Tag:       tag,
	}
}

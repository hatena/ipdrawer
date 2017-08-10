package main

import (
	"github.com/taku-k/ipdrawer/pkg/cli"
	"github.com/taku-k/ipdrawer/pkg/utils/tracer"
)

func main() {
	closer := tracer.SetupTracer()
	defer closer.Close()

	cli.Run()
}

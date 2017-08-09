package server

import (
	"runtime"

	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

const (
	MAXSTACKSIZE = 4096
)

func recoveryFunc(p interface{}) error {
	// log stack
	stack := make([]byte, MAXSTACKSIZE)
	stack = stack[:runtime.Stack(stack, false)]
	logrus.Errorf("panic grpc: err=%v, stack:\n%s", p, string(stack))
	return grpc.Errorf(codes.Internal, "panic error: %v", p)
}

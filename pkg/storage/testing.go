package storage

import (
	"github.com/alicebob/miniredis"
	"github.com/go-redis/redis"
	"golang.org/x/net/context"
)

func NewTestRedis() (*Redis, func()) {
	s, err := miniredis.Run()
	if err != nil {
		panic(err)
	}
	client := redis.NewClient(&redis.Options{
		Addr: s.Addr(),
		DB:   1,
	})
	return &Redis{
			Client: client,
		}, func() {
			s.Close()
		}
}

type LocalLocker struct{}

func (l *LocalLocker) Lock(ctx context.Context, _ string) (string, error) {
	return "", nil
}

func (l *LocalLocker) Unlock(ctx context.Context, _, _ string) error {
	return nil
}

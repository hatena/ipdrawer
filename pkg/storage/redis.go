package storage

import (
	"net"

	"github.com/go-redis/redis"
	"github.com/pkg/errors"

	"github.com/hatena/ipdrawer/pkg/base"
)

type Redis struct {
	Client *redis.Client
}

func NewRedis(cfg *base.Config) (*Redis, error) {
	addr := cfg.RedisHost + ":" + cfg.RedisPort
	client := redis.NewClient(&redis.Options{
		Addr:       addr,
		DB:         0,
		MaxRetries: 4,
	})
	_, err := client.Ping().Result()
	if err != nil {
		switch err := err.(type) {
		case *net.OpError:
			return nil, errors.New(err.Addr.String())
		default:
			return nil, err
		}
	}
	return &Redis{
		Client: client,
	}, nil
}

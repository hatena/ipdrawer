package storage

import "github.com/go-redis/redis"

func NewTestRedis() (*Redis, func(*Redis)) {
	addr := "localhost:6379"
	client := redis.NewClient(&redis.Options{
		Addr: addr,
		DB:   1,
	})
	return &Redis{
			Client: client,
		}, func(r *Redis) {
			r.Client.FlushDB()
		}
}

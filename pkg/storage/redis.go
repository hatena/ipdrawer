package storage

import "github.com/go-redis/redis"

type redisAPI interface {
	TxPipeline() redis.Pipeliner
	Exists(keys ...string) *redis.IntCmd
	SMembers(key string) *redis.StringSliceCmd
	HMGet(key string, fields ...string) *redis.SliceCmd
	HGetAll(key string) *redis.StringStringMapCmd
}

type Redis struct {
	Client redisAPI
}

func NewRedis() *Redis {
	addr := "localhost:6379"
	client := redis.NewClient(&redis.Options{
		Addr: addr,
		DB:   0,
	})
	return &Redis{Client: client}
}

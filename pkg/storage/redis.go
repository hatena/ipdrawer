package storage

import (
	"github.com/go-redis/redis"
)

//type redisAPI interface {
//	TxPipeline() redis.Pipeliner
//	Exists(keys ...string) *redis.IntCmd
//	SMembers(key string) *redis.StringSliceCmd
//	HMGet(key string, fields ...string) *redis.SliceCmd
//	HGetAll(key string) *redis.StringStringMapCmd
//	SetNX(key string, value interface{}, expiration time.Duration) *redis.BoolCmd
//	Eval(script string, keys []string, args ...interface{}) *redis.Cmd
//	ZScan(key string, cursor uint64, match string, count int64) *redis.ScanCmd
//	Set(key string, value interface{}, expiration time.Duration) *redis.StatusCmd
//	FlushDB() *redis.StatusCmd
//}

type Redis struct {
	Client *redis.Client
}

func NewRedis() *Redis {
	addr := "localhost:6379"
	client := redis.NewClient(&redis.Options{
		Addr: addr,
		DB:   0,
	})
	return &Redis{
		Client: client,
	}
}

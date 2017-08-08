package storage

import (
	"time"

	"github.com/cenkalti/backoff"
	"github.com/go-redis/redis"
	"github.com/google/uuid"
	"github.com/pkg/errors"
)

const (
	lockResourceName   = "redis-lock"
	lockExpirationTime = 10 * time.Second
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

func (r *Redis) Lock() (string, error) {
	token := uuid.New().String()
	err := backoff.Retry(func() error {
		res, err := r.Client.SetNX(lockResourceName, token, lockExpirationTime).Result()
		if err != nil {
			return err
		}
		if res {
			return nil
		} else {
			return errors.New("can't lock")
		}
	}, backoff.NewExponentialBackOff())
	if err != nil {
		return "", err
	}
	return token, nil
}

func (r *Redis) Unlock(token string) error {
	_, err := r.Client.Eval(`
if redis.call("get",KEYS[1]) == ARGV[1]
then
  return redis.call("del",KEYS[1])
else
  return 0
end`, []string{token}, lockResourceName).Result()
	if err != nil {
		return err
	}
	return nil
}

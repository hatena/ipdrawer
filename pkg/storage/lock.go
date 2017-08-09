package storage

import (
	"github.com/cenkalti/backoff"
	"github.com/google/uuid"
	"github.com/pkg/errors"
)

type Locker interface {
	Lock() (string, error)
	Unlock(token string) error
}

type RedisLocker struct {
	redis *Redis
}

func NewLocker(r *Redis) *RedisLocker {
	return &RedisLocker{
		redis: r,
	}
}

func (l *RedisLocker) Lock() (string, error) {
	token := uuid.New().String()
	err := backoff.Retry(func() error {
		res, err := l.redis.Client.SetNX(lockResourceName, token, lockExpirationTime).Result()
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

func (l *RedisLocker) Unlock(token string) error {
	_, err := l.redis.Client.Eval(`
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

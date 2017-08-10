package storage

import (
	"github.com/cenkalti/backoff"
	"github.com/google/uuid"
	"github.com/opentracing/opentracing-go"
	"github.com/pkg/errors"
	"golang.org/x/net/context"
)

type Locker interface {
	Lock(ctx context.Context) (string, error)
	Unlock(ctx context.Context, token string) error
}

type RedisLocker struct {
	redis *Redis
}

func NewLocker(r *Redis) *RedisLocker {
	return &RedisLocker{
		redis: r,
	}
}

func (l *RedisLocker) Lock(ctx context.Context) (string, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "RedisLocker.Lock")
	defer span.Finish()

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

func (l *RedisLocker) Unlock(ctx context.Context, token string) error {
	span, ctx := opentracing.StartSpanFromContext(ctx, "RedisLocker.Unlock")
	defer span.Finish()

	_, err := l.redis.Client.Eval(`
if redis.call("get",KEYS[1]) == ARGV[1]
then
  return redis.call("del",KEYS[1])
else
  return 0
end`, []string{lockResourceName}, token).Result()
	if err != nil {
		return err
	}
	return nil
}

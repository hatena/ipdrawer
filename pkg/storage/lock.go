package storage

import (
	"time"

	"github.com/cenkalti/backoff"
	"github.com/google/uuid"
	"github.com/opentracing/opentracing-go"
	"github.com/pkg/errors"
	"golang.org/x/net/context"
)

const (
	lockExpirationTime = 10 * time.Second
)

type Locker interface {
	Lock(ctx context.Context, resource string) (string, error)
	Unlock(ctx context.Context, resource, token string) error
}

type RedisLocker struct {
	redis *Redis
}

func NewLocker(r *Redis) *RedisLocker {
	return &RedisLocker{
		redis: r,
	}
}

func (l *RedisLocker) Lock(ctx context.Context, resource string) (string, error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "RedisLocker.Lock")
	defer span.Finish()

	token := uuid.New().String()
	err := backoff.Retry(func() error {
		res, err := l.redis.Client.SetNX(resource, token, lockExpirationTime).Result()
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

func (l *RedisLocker) Unlock(ctx context.Context, resouce, token string) error {
	span, ctx := opentracing.StartSpanFromContext(ctx, "RedisLocker.Unlock")
	defer span.Finish()

	_, err := l.redis.Client.Eval(`
if redis.call("get",KEYS[1]) == ARGV[1]
then
  return redis.call("del",KEYS[1])
else
  return 0
end`, []string{resouce}, token).Result()
	if err != nil {
		return err
	}
	return nil
}

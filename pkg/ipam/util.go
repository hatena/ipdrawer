package ipam

import (
	"fmt"
	"strings"

	"github.com/hatena/ipdrawer/pkg/model"
	"github.com/hatena/ipdrawer/pkg/storage"
	"github.com/pkg/errors"
)

func unmarshalTag(s string) (*model.Tag, error) {
	kv := strings.Split(s, "=")
	if len(kv) != 2 {
		return nil, errors.New(
			fmt.Sprintf("Failed to unmarshal tag: %s", s))
	}
	return &model.Tag{
		Key:   kv[0],
		Value: kv[1],
	}, nil
}

func NewTestIPManager(r *storage.Redis) *IPManager {
	return &IPManager{
		redis:  r,
		locker: &storage.LocalLocker{},
	}
}

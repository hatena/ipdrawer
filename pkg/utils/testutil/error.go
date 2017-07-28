package testutil

import "regexp"

func IsError(err error, re string) bool {
	if err == nil && re == "" {
		return true
	}
	if err == nil || re == "" {
		return false
	}
	m, merr := regexp.MatchString(re, err.Error())
	if merr != nil {
		return false
	}
	return m
}

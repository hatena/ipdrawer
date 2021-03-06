// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: server/serverpb/server.proto

/*
Package serverpb is a generated protocol buffer package.

It is generated from these files:
	server/serverpb/server.proto

It has these top-level messages:
	ListNetworkRequest
	ListNetworkResponse
	DrawIPRequest
	DrawIPResponse
	DrawIPEstimatingNetworkRequest
	GetNetworkIncludingIPRequest
	CreateIPResponse
	ActivateIPRequest
	DeactivateIPRequest
	DeactivateIPResponse
	UpdateIPResponse
	GetNetworkRequest
	GetEstimatedNetworkRequest
	GetNetworkResponse
	CreateNetworkRequest
	CreateNetworkResponse
	GetPoolsInNetworkRequest
	GetPoolsInNetworkResponse
	CreatePoolRequest
	CreatePoolResponse
	DeleteNetworkRequest
	DeleteNetworkResponse
	UpdateNetworkResponse
	ListIPRequest
	ListIPResponse
	ListTemporaryReservedIPRequest
	ListTemporaryReservedIPResponse
	ListPoolRequest
	ListPoolResponse
	GetIPInPoolRequest
	GetIPInPoolResponse
	UpdatePoolResponse
	DeletePoolRequest
	DeletePoolResponse
*/
package serverpb

import regexp "regexp"
import fmt "fmt"
import github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
import proto "github.com/golang/protobuf/proto"
import math "math"
import _ "google.golang.org/genproto/googleapis/api/annotations"
import _ "github.com/mwitkow/go-proto-validators"
import _ "github.com/hatena/ipdrawer/pkg/model"
import _ "github.com/gogo/protobuf/gogoproto"

import time "time"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf
var _ = time.Kitchen

func (this *ListNetworkRequest) Validate() error {
	return nil
}
func (this *ListNetworkResponse) Validate() error {
	for _, item := range this.Networks {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Networks", err)
			}
		}
	}
	return nil
}

var _regex_DrawIPRequest_Ip = regexp.MustCompile("|^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *DrawIPRequest) Validate() error {
	if !_regex_DrawIPRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "|^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	if this.PoolTag != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.PoolTag); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("PoolTag", err)
		}
	}
	return nil
}
func (this *DrawIPResponse) Validate() error {
	return nil
}
func (this *DrawIPEstimatingNetworkRequest) Validate() error {
	if this.PoolTag != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.PoolTag); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("PoolTag", err)
		}
	}
	return nil
}

var _regex_GetNetworkIncludingIPRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *GetNetworkIncludingIPRequest) Validate() error {
	if !_regex_GetNetworkIncludingIPRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	return nil
}
func (this *CreateIPResponse) Validate() error {
	return nil
}

var _regex_ActivateIPRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *ActivateIPRequest) Validate() error {
	if !_regex_ActivateIPRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	for _, item := range this.Tags {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Tags", err)
			}
		}
	}
	return nil
}

var _regex_DeactivateIPRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *DeactivateIPRequest) Validate() error {
	if !_regex_DeactivateIPRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	return nil
}
func (this *DeactivateIPResponse) Validate() error {
	return nil
}
func (this *UpdateIPResponse) Validate() error {
	return nil
}

var _regex_GetNetworkRequest_Ip = regexp.MustCompile("|^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *GetNetworkRequest) Validate() error {
	if !_regex_GetNetworkRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "|^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	return nil
}
func (this *GetEstimatedNetworkRequest) Validate() error {
	return nil
}

var _regex_GetNetworkResponse_Network = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/([0-9]|1[0-9]|2[0-9]|3[0-2])$")

func (this *GetNetworkResponse) Validate() error {
	if !_regex_GetNetworkResponse_Network.MatchString(this.Network) {
		return github_com_mwitkow_go_proto_validators.FieldError("Network", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/([0-9]|1[0-9]|2[0-9]|3[0-2])$"`, this.Network))
	}
	for _, item := range this.Tags {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Tags", err)
			}
		}
	}
	return nil
}

var _regex_CreateNetworkRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *CreateNetworkRequest) Validate() error {
	if !_regex_CreateNetworkRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	for _, item := range this.Tags {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Tags", err)
			}
		}
	}
	return nil
}
func (this *CreateNetworkResponse) Validate() error {
	return nil
}

var _regex_GetPoolsInNetworkRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *GetPoolsInNetworkRequest) Validate() error {
	if !_regex_GetPoolsInNetworkRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	return nil
}
func (this *GetPoolsInNetworkResponse) Validate() error {
	for _, item := range this.Pools {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Pools", err)
			}
		}
	}
	return nil
}

var _regex_CreatePoolRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *CreatePoolRequest) Validate() error {
	if !_regex_CreatePoolRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	if this.Pool != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Pool); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Pool", err)
		}
	}
	return nil
}
func (this *CreatePoolResponse) Validate() error {
	return nil
}

var _regex_DeleteNetworkRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *DeleteNetworkRequest) Validate() error {
	if !_regex_DeleteNetworkRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	return nil
}
func (this *DeleteNetworkResponse) Validate() error {
	return nil
}
func (this *UpdateNetworkResponse) Validate() error {
	return nil
}
func (this *ListIPRequest) Validate() error {
	return nil
}
func (this *ListIPResponse) Validate() error {
	for _, item := range this.Ips {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Ips", err)
			}
		}
	}
	return nil
}
func (this *ListTemporaryReservedIPRequest) Validate() error {
	return nil
}
func (this *ListTemporaryReservedIPResponse) Validate() error {
	for _, item := range this.Ips {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Ips", err)
			}
		}
	}
	return nil
}
func (this *ListPoolRequest) Validate() error {
	return nil
}
func (this *ListPoolResponse) Validate() error {
	for _, item := range this.Pools {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Pools", err)
			}
		}
	}
	return nil
}

var _regex_GetIPInPoolRequest_RangeStart = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
var _regex_GetIPInPoolRequest_RangeEnd = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *GetIPInPoolRequest) Validate() error {
	if !_regex_GetIPInPoolRequest_RangeStart.MatchString(this.RangeStart) {
		return github_com_mwitkow_go_proto_validators.FieldError("RangeStart", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.RangeStart))
	}
	if !_regex_GetIPInPoolRequest_RangeEnd.MatchString(this.RangeEnd) {
		return github_com_mwitkow_go_proto_validators.FieldError("RangeEnd", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.RangeEnd))
	}
	return nil
}
func (this *GetIPInPoolResponse) Validate() error {
	if this.Pool != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Pool); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Pool", err)
		}
	}
	for _, item := range this.Ips {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Ips", err)
			}
		}
	}
	return nil
}
func (this *UpdatePoolResponse) Validate() error {
	return nil
}

var _regex_DeletePoolRequest_RangeStart = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
var _regex_DeletePoolRequest_RangeEnd = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *DeletePoolRequest) Validate() error {
	if !_regex_DeletePoolRequest_RangeStart.MatchString(this.RangeStart) {
		return github_com_mwitkow_go_proto_validators.FieldError("RangeStart", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.RangeStart))
	}
	if !_regex_DeletePoolRequest_RangeEnd.MatchString(this.RangeEnd) {
		return github_com_mwitkow_go_proto_validators.FieldError("RangeEnd", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.RangeEnd))
	}
	return nil
}
func (this *DeletePoolResponse) Validate() error {
	return nil
}

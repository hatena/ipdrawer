// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: server/serverpb/server.proto

/*
Package serverpb is a generated protocol buffer package.

It is generated from these files:
	server/serverpb/server.proto

It has these top-level messages:
	DrawIPRequest
	DrawIPResponse
	GetPrefixIncludingIPRequest
	GetPrefixIncludingIPResponse
	ActivateIPRequest
	ActivateIPResponse
	CreatePrefixRequest
	CreatePrefixResponse
	CreatePoolsRequest
	CreatePoolsResponse
	Tag
	Pool
*/
package serverpb

import regexp "regexp"
import fmt "fmt"
import github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
import proto "github.com/golang/protobuf/proto"
import math "math"
import _ "google.golang.org/genproto/googleapis/api/annotations"
import _ "github.com/mwitkow/go-proto-validators"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

var _regex_DrawIPRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *DrawIPRequest) Validate() error {
	if !_regex_DrawIPRequest_Ip.MatchString(this.Ip) {
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
func (this *DrawIPResponse) Validate() error {
	return nil
}

var _regex_GetPrefixIncludingIPRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *GetPrefixIncludingIPRequest) Validate() error {
	if !_regex_GetPrefixIncludingIPRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	return nil
}
func (this *GetPrefixIncludingIPResponse) Validate() error {
	return nil
}

var _regex_ActivateIPRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *ActivateIPRequest) Validate() error {
	if !_regex_ActivateIPRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	return nil
}
func (this *ActivateIPResponse) Validate() error {
	return nil
}

var _regex_CreatePrefixRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *CreatePrefixRequest) Validate() error {
	if !_regex_CreatePrefixRequest_Ip.MatchString(this.Ip) {
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
func (this *CreatePrefixResponse) Validate() error {
	return nil
}

var _regex_CreatePoolsRequest_Ip = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")

func (this *CreatePoolsRequest) Validate() error {
	if !_regex_CreatePoolsRequest_Ip.MatchString(this.Ip) {
		return github_com_mwitkow_go_proto_validators.FieldError("Ip", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"`, this.Ip))
	}
	if !(this.Mask > -1) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be greater than '-1'`, this.Mask))
	}
	if !(this.Mask < 33) {
		return github_com_mwitkow_go_proto_validators.FieldError("Mask", fmt.Errorf(`value '%v' must be less than '33'`, this.Mask))
	}
	for _, item := range this.Pools {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Pools", err)
			}
		}
	}
	return nil
}
func (this *CreatePoolsResponse) Validate() error {
	return nil
}
func (this *Tag) Validate() error {
	if this.Key == "" {
		return github_com_mwitkow_go_proto_validators.FieldError("Key", fmt.Errorf(`value '%v' must not be an empty string`, this.Key))
	}
	if this.Value == "" {
		return github_com_mwitkow_go_proto_validators.FieldError("Value", fmt.Errorf(`value '%v' must not be an empty string`, this.Value))
	}
	return nil
}

var _regex_Pool_Start = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/([0-9]|1[0-9]|2[0-9]|3[0-2])$")
var _regex_Pool_End = regexp.MustCompile("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/([0-9]|1[0-9]|2[0-9]|3[0-2])$")

func (this *Pool) Validate() error {
	if !_regex_Pool_Start.MatchString(this.Start) {
		return github_com_mwitkow_go_proto_validators.FieldError("Start", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/([0-9]|1[0-9]|2[0-9]|3[0-2])$"`, this.Start))
	}
	if !_regex_Pool_End.MatchString(this.End) {
		return github_com_mwitkow_go_proto_validators.FieldError("End", fmt.Errorf(`value '%v' must be a string conforming to regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/([0-9]|1[0-9]|2[0-9]|3[0-2])$"`, this.End))
	}
	return nil
}

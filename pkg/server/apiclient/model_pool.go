/*
 * server/serverpb/server.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 *
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package apiclient

type ModelPool struct {
	Start string `json:"start,omitempty"`

	End string `json:"end,omitempty"`

	Status ModelPoolStatus `json:"status,omitempty"`

	Tags []ModelTag `json:"tags,omitempty"`
}

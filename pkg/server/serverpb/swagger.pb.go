package serverpb

const (
	swagger = `{
  "swagger": "2.0",
  "info": {
    "title": "server/serverpb/server.proto",
    "version": "version not set"
  },
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/api/v0/drawip": {
      "get": {
        "operationId": "DrawIPEstimatingNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDrawIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "pool_tag.key",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "pool_tag.value",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "temporary_reserved",
            "in": "query",
            "required": false,
            "type": "boolean",
            "format": "boolean"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/ip/list": {
      "get": {
        "operationId": "ListIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbListIPResponse"
            }
          }
        },
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/ip/temporary_reserved/list": {
      "get": {
        "operationId": "ListTemporaryReservedIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbListTemporaryReservedIPResponse"
            }
          }
        },
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/ip/{ip}/activate": {
      "post": {
        "operationId": "ActivateIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbCreateIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/serverpbActivateIPRequest"
            }
          }
        ],
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/ip/{ip}/create": {
      "post": {
        "operationId": "CreateIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbCreateIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/modelIPAddr"
            }
          }
        ],
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/ip/{ip}/deactivate": {
      "post": {
        "operationId": "DeactivateIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDeactivateIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/ip/{ip}/network": {
      "get": {
        "operationId": "GetNetworkIncludingIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbGetNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/ip/{ip}/update": {
      "post": {
        "operationId": "UpdateIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbUpdateIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/modelIPAddr"
            }
          }
        ],
        "tags": [
          "IPServiceV0"
        ]
      }
    },
    "/api/v0/network": {
      "get": {
        "operationId": "GetEstimatedNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbGetNetworkResponse"
            }
          }
        },
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/list": {
      "get": {
        "operationId": "ListNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbListNetworkResponse"
            }
          }
        },
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/update": {
      "post": {
        "operationId": "UpdateNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbUpdateNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/modelNetwork"
            }
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{ip}/{mask}": {
      "get": {
        "operationId": "GetNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbGetNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{ip}/{mask}/create": {
      "post": {
        "operationId": "CreateNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbCreateNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/serverpbCreateNetworkRequest"
            }
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{ip}/{mask}/delete": {
      "post": {
        "operationId": "DeleteNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDeleteNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{ip}/{mask}/drawip": {
      "get": {
        "operationId": "DrawIP",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDrawIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pool_tag.key",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "pool_tag.value",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "temporary_reserved",
            "in": "query",
            "required": false,
            "type": "boolean",
            "format": "boolean"
          },
          {
            "name": "range_start",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "range_end",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{ip}/{mask}/pool/create": {
      "post": {
        "operationId": "CreatePool",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbCreatePoolResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/serverpbCreatePoolRequest"
            }
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{ip}/{mask}/pools": {
      "get": {
        "operationId": "GetPoolsInNetwork",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbGetPoolsInNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "ip",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{name}": {
      "get": {
        "operationId": "GetNetwork2",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbGetNetworkResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "name",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "ip",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/network/{name}/drawip": {
      "get": {
        "operationId": "DrawIP2",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDrawIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "name",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "ip",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pool_tag.key",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "pool_tag.value",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "temporary_reserved",
            "in": "query",
            "required": false,
            "type": "boolean",
            "format": "boolean"
          },
          {
            "name": "range_start",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "range_end",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/pool/list": {
      "get": {
        "operationId": "ListPool",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbListPoolResponse"
            }
          }
        },
        "tags": [
          "PoolServiceV0"
        ]
      }
    },
    "/api/v0/pool/{range_start}/{range_end}/delete": {
      "post": {
        "operationId": "DeletePool",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDeletePoolResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "range_start",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "range_end",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "tags": [
          "PoolServiceV0"
        ]
      }
    },
    "/api/v0/pool/{range_start}/{range_end}/drawip": {
      "get": {
        "operationId": "DrawIP3",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbDrawIPResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "range_start",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "range_end",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "ip",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "mask",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pool_tag.key",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "pool_tag.value",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "temporary_reserved",
            "in": "query",
            "required": false,
            "type": "boolean",
            "format": "boolean"
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    },
    "/api/v0/pool/{range_start}/{range_end}/ip": {
      "get": {
        "operationId": "GetIPInPool",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbGetIPInPoolResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "range_start",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "range_end",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "tags": [
          "PoolServiceV0"
        ]
      }
    },
    "/api/v0/pool/{start}/{end}/update": {
      "post": {
        "operationId": "UpdatePool",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/serverpbUpdatePoolResponse"
            }
          }
        },
        "parameters": [
          {
            "name": "start",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "end",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/modelPool"
            }
          }
        ],
        "tags": [
          "PoolServiceV0"
        ]
      }
    }
  },
  "definitions": {
    "modelIPAddr": {
      "type": "object",
      "properties": {
        "ip": {
          "type": "string"
        },
        "status": {
          "$ref": "#/definitions/modelIPAddrStatus"
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        },
        "last_modified_at": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "modelIPAddrStatus": {
      "type": "string",
      "enum": [
        "UNKNOWN",
        "ACTIVE",
        "TEMPORARY_RESERVED",
        "RESERVED"
      ],
      "default": "UNKNOWN"
    },
    "modelNetwork": {
      "type": "object",
      "properties": {
        "prefix": {
          "type": "string"
        },
        "gateways": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "broadcast": {
          "type": "string"
        },
        "netmask": {
          "type": "string"
        },
        "status": {
          "$ref": "#/definitions/modelNetworkStatus"
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        },
        "last_modified_at": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "modelNetworkStatus": {
      "type": "string",
      "enum": [
        "UNKNOWN",
        "AVAILABLE",
        "RESERVED"
      ],
      "default": "UNKNOWN"
    },
    "modelPool": {
      "type": "object",
      "properties": {
        "start": {
          "type": "string"
        },
        "end": {
          "type": "string"
        },
        "status": {
          "$ref": "#/definitions/modelPoolStatus"
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        },
        "last_modified_at": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "modelPoolStatus": {
      "type": "string",
      "enum": [
        "UNKNOWN",
        "AVAILABLE",
        "RESERVED"
      ],
      "default": "UNKNOWN"
    },
    "modelTag": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      }
    },
    "serverpbActivateIPRequest": {
      "type": "object",
      "properties": {
        "ip": {
          "type": "string"
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        }
      }
    },
    "serverpbCreateIPResponse": {
      "type": "object"
    },
    "serverpbCreateNetworkRequest": {
      "type": "object",
      "properties": {
        "ip": {
          "type": "string"
        },
        "mask": {
          "type": "integer",
          "format": "int32"
        },
        "default_gateways": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        },
        "status": {
          "$ref": "#/definitions/modelNetworkStatus"
        }
      }
    },
    "serverpbCreateNetworkResponse": {
      "type": "object"
    },
    "serverpbCreatePoolRequest": {
      "type": "object",
      "properties": {
        "ip": {
          "type": "string"
        },
        "mask": {
          "type": "integer",
          "format": "int32"
        },
        "pool": {
          "$ref": "#/definitions/modelPool"
        }
      }
    },
    "serverpbCreatePoolResponse": {
      "type": "object"
    },
    "serverpbDeactivateIPResponse": {
      "type": "object"
    },
    "serverpbDeleteNetworkResponse": {
      "type": "object"
    },
    "serverpbDeletePoolResponse": {
      "type": "object"
    },
    "serverpbDrawIPResponse": {
      "type": "object",
      "properties": {
        "ip": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    },
    "serverpbGetIPInPoolResponse": {
      "type": "object",
      "properties": {
        "pool": {
          "$ref": "#/definitions/modelPool"
        },
        "ips": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelIPAddr"
          }
        }
      }
    },
    "serverpbGetNetworkResponse": {
      "type": "object",
      "properties": {
        "network": {
          "type": "string"
        },
        "default_gateways": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "broadcast": {
          "type": "string"
        },
        "netmask": {
          "type": "string"
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        }
      }
    },
    "serverpbGetPoolsInNetworkResponse": {
      "type": "object",
      "properties": {
        "pools": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelPool"
          }
        }
      }
    },
    "serverpbListIPResponse": {
      "type": "object",
      "properties": {
        "ips": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelIPAddr"
          }
        }
      }
    },
    "serverpbListNetworkResponse": {
      "type": "object",
      "properties": {
        "networks": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelNetwork"
          }
        }
      }
    },
    "serverpbListPoolResponse": {
      "type": "object",
      "properties": {
        "pools": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelPool"
          }
        }
      }
    },
    "serverpbListTemporaryReservedIPResponse": {
      "type": "object",
      "properties": {
        "ips": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelIPAddr"
          }
        }
      }
    },
    "serverpbUpdateIPResponse": {
      "type": "object"
    },
    "serverpbUpdateNetworkResponse": {
      "type": "object"
    },
    "serverpbUpdatePoolResponse": {
      "type": "object"
    }
  }
}
`
)

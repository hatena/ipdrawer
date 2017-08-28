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
    "/api/v0/ip/{ip}/activate": {
      "post": {
        "operationId": "ActivateIP",
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/serverpbActivateIPResponse"
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
    "/api/v0/ip/{ip}/deactivate": {
      "post": {
        "operationId": "DeactivateIP",
        "responses": {
          "200": {
            "description": "",
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
            "description": "",
            "schema": {
              "$ref": "#/definitions/serverpbGetNetworkIncludingIPResponse"
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
    "/api/v0/network/{ip}/{mask}": {
      "get": {
        "operationId": "GetNetwork",
        "responses": {
          "200": {
            "description": "",
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
            "description": "",
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
    "/api/v0/network/{ip}/{mask}/drawip": {
      "get": {
        "operationId": "DrawIP",
        "responses": {
          "200": {
            "description": "",
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
            "description": "",
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
    "/api/v0/network/{name}": {
      "get": {
        "operationId": "GetNetwork",
        "responses": {
          "200": {
            "description": "",
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
        "operationId": "DrawIP",
        "responses": {
          "200": {
            "description": "",
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
          }
        ],
        "tags": [
          "NetworkServiceV0"
        ]
      }
    }
  },
  "definitions": {
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
          "type": "integer",
          "format": "int32"
        },
        "tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/modelTag"
          }
        }
      }
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
    "serverpbActivateIPResponse": {
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
    "serverpbDrawIPResponse": {
      "type": "object",
      "properties": {
        "ip": {
          "type": "string"
        }
      }
    },
    "serverpbGetNetworkIncludingIPResponse": {
      "type": "object"
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
    }
  }
}
`
)

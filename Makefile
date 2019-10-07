NAME     := ipdrawer
VERSION  := $(shell git describe --tags --exact-match 2> /dev/null || git rev-parse --short HEAD || echo "unknown")
REVISION := $(shell git rev-parse HEAD)
PROTO := protoc
PKG := github.com/hatena/ipdrawer
SWAGGER_CODEGEN := swagger-codegen

SRCS    := $(shell find . -type f -name '*.go')
PROTOSRCS := $(shell find . -type f -name '*.proto' | grep -v -e vendor | grep -v -e node_modules)
LINUX_LDFLAGS := -s -w -extldflags "-static"
DARWIN_LDFLAGS := -s -w
LINKFLAGS := \
	-X "github.com/hatena/ipdrawer/pkg/build.tag=$(VERSION)" \
	-X "github.com/hatena/ipdrawer/pkg/build.rev=$(REVISION)"
override LINUX_LDFLAGS += $(LINKFLAGS)
override DARWIN_LDFLAGS += $(LINKFLAGS)

API_CLIENT_DIR := pkg/server/apiclient
API_SPEC := pkg/server/serverpb/server.swagger.json

SWAGGER_UI_DATA_PATH := pkg/ui/
SWAGGER_UI_SRC := third_party/swagger-ui

export GO111MODULE=on

.DEFAULT_GOAL := $(NAME)

$(NAME): $(SRCS)
	go build -ldflags '$(DARWIN_LDFLAGS)' $(PKG)/cmd/...

.PHONY: cross-build
cross-build:
	GOOS=darwin GOARCH=amd64 go build -ldflags '$(DARWIN_LDFLAGS)' -o dist/$(NAME)_darwin_amd64 $(PKG)/cmd/...
	GOOS=linux GOARCH=amd64 go build -a -tags netgo -installsuffix netgo -ldflags '$(LINUX_LDFLAGS)' -o dist/$(NAME)_linux_amd64 $(PKG)/cmd/...

.PHONY: linux
linux:
	GOOS=linux GOARCH=amd64 go build -a -tags netgo -installsuffix netgo -ldflags '$(LINUX_LDFLAGS)' -o dist/$(NAME)_linux_amd64 $(PKG)/cmd/...

.PHONY: vet
vet:
	go vet -all -printfuncs=Wrap,Wrapf,Errorf ./...

.PHONY: test
test:
	go test -cover -v $$(go list ./... | grep -v -e node_modules)

.PHONY: test-race
test-race:
	go test -v -race $$(go list ./... | grep -v -e node_modules)

.PHONY: test-all
test-all: vet test-race

.PHONY: fmt
fmt:
	gofmt -s -w $$(find . -type f -name '*.go' | grep -v -e vendor -e node_modules)

.PHONY: imports
imports:
	goimports -w $$(find . -type f -name '*.go' | grep -v -e vendor -e node_modules)

.PHONY: proto
proto: $(PROTOSRCS)
	for src in $(PROTOSRCS); do \
	  $(PROTO) \
	   -Ipkg \
	   -I$$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
	   -I$$GOPATH/src \
	   -Ivendor \
	   $$src \
	   --grpc-gateway_out=logtostderr=true:pkg \
	   --govalidators_out=pkg \
	   --swagger_out=logtostderr=true:pkg \
	   --gofast_out=plugins=grpc:pkg; \
	done;
	go generate ./pkg/server/serverpb
	make gen-client
	make fmt imports

.PHONY: deps
deps:
	go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
	go get -u github.com/golang/protobuf/protoc-gen-go
	go get -u github.com/mwitkow/go-proto-validators/protoc-gen-govalidators
	go get -u github.com/gogo/protobuf/protoc-gen-gofast
	go get -u github.com/rakyll/statik

.PHONY: ui
ui:
	statik -dest $(SWAGGER_UI_DATA_PATH) -p swagger -src $(SWAGGER_UI_SRC)
	make fmt imports

.PHONY: gen-client
gen-client: $(API_SPEC)
	$(SWAGGER_CODEGEN) generate -i $(API_SPEC) \
	  -l go -o pkg/server/apiclient --additional-properties packageName=apiclient
	@rm -rf $(API_CLIENT_DIR)/git_push.sh \
	       $(API_CLIENT_DIR)/.travis.yml

.PHONY: clean
clean:
	rm -rf $(NAME) dist

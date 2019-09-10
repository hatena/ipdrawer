NAME     := ipdrawer
VERSION  := $(shell git describe --tags --exact-match 2> /dev/null || git rev-parse --short HEAD || echo "unknown")
REVISION := $(shell git rev-parse HEAD)
PROTO := protoc
PKG := github.com/hatena/ipdrawer

SRCS    := $(shell find . -type f -name '*.go')
PROTOSRCS := $(shell find . -type f -name '*.proto' | grep -v -e node_modules)
LINUX_LDFLAGS := -s -w -extldflags "-static"
DARWIN_LDFLAGS := -s -w
LINKFLAGS := \
	-X "github.com/hatena/ipdrawer/pkg/build.tag=$(VERSION)" \
	-X "github.com/hatena/ipdrawer/pkg/build.rev=$(REVISION)"
override LINUX_LDFLAGS += $(LINKFLAGS)
override DARWIN_LDFLAGS += $(LINKFLAGS)

API_CLIENT_DIR := pkg/server/apiclient
API_SPEC := pkg/server/serverpb/server.swagger.json

SWAGGER_UI_DATA_PATH := pkg/ui/data/swagger/datafile.go
SWAGGER_UI_SRC := third_party/swagger-ui/...

ADMIN_UI_DATA_PATH := pkg/ui/embedded.go

PBJS := pkg/ui/node_modules/.bin/pbjs
PBTS := pkg/ui/node_modules/.bin/pbts

GOBIN ?= $(shell go env GOPATH)/bin
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
fmt: $(GOBIN)/gofmt
	gofmt -s -w $$(find . -type f -name '*.go' | grep -v -e node_modules)

$(GOBIN)/gofmt:
	GO111MODULE=off go get github.com/golang/go/src/cmd/gofmt

.PHONY: imports
imports: $(GOBIN)/goimports
	goimports -w $$(find . -type f -name '*.go' | grep -v -e node_modules)

$(GOBIN)/goimports:
	GO111MODULE=off go get golang.org/x/tools/cmd/goimports

.PHONY: proto
proto: $(PROTOSRCS) deps $(PBJS) $(PBTS)
	for src in $(PROTOSRCS); do \
	  $(PROTO) \
	   -Ipkg \
	   -I$$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
	   -I$$GOPATH/src \
	   $$src \
	   --grpc-gateway_out=logtostderr=true:pkg \
	   --govalidators_out=pkg \
	   --swagger_out=logtostderr=true:pkg \
	   --gofast_out=plugins=grpc:pkg; \
	done;
	$(PBJS) -t static-module -w commonjs --path ./ipdrawer/vendor/github.com/gogo/protobuf --path ./ipdrawer/vendor/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --path ./ipdrawer/vendor/github.com/witkow/go-proto-validators $(PROTOSRCS) > pkg/ui/src/proto/protos.js
	$(PBTS) pkg/ui/src/proto/protos.js > pkg/ui/src/proto/protos.d.ts
	go generate ./pkg/server/serverpb
	make gen-client
	make fmt imports

.PHONY: deps
deps:
	GO111MODULE=off go get -u \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger \
		github.com/golang/protobuf/protoc-gen-go \
		github.com/mwitkow/go-proto-validators/protoc-gen-govalidators \
		github.com/gogo/protobuf/protoc-gen-gofast \
		github.com/jteeuwen/go-bindata/...

$(PBJS):
	cd pkg/ui && npm install

$(PBTS):
	cd pkg/ui && npm install

.PHONY: ui
ui:
	go-bindata -nocompress -o $(SWAGGER_UI_DATA_PATH) -pkg swagger $(SWAGGER_UI_SRC)
	make fmt imports

.PHONY: gen-client
gen-client: $(API_SPEC)
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
		-i file:///local/$(API_SPEC) -l go -o pkg/server/apiclient --additional-properties packageName=apiclient
	@rm -rf $(API_CLIENT_DIR)/git_push.sh \
	       $(API_CLIENT_DIR)/.travis.yml

.PHONY: admin-ui
admin-ui:
	rm -rf pkg/ui/dist
	(cd pkg/ui && npm run build)
	go-bindata -nometadata -pkg ui -o $(ADMIN_UI_DATA_PATH) pkg/ui/dist/...
	make fmt imports

.PHONY: clean
clean:
	rm -rf $(NAME) dist

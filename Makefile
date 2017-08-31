NAME     := ipdrawer
VERSION  := $(shell git describe --tags --exact-match 2> /dev/null || git rev-parse --short HEAD || echo "unknown")
REVISION := $(shell git rev-parse HEAD)
PROTO := protoc
PKG := github.com/taku-k/ipdrawer

SRCS    := $(shell find . -type f -name '*.go')
PROTOSRCS := $(shell find . -type f -name '*.proto' | grep -v -e vendor)
LINUX_LDFLAGS := -s -w -extldflags "-static"
DARWIN_LDFLAGS := -s -w
LINKFLAGS := \
	-X "github.com/taku-k/ipdrawer/pkg/build.tag=$(VERSION)" \
	-X "github.com/taku-k/ipdrawer/pkg/build.rev=$(REVISION)"
override LINUX_LDFLAGS += $(LINKFLAGS)
override DARWIN_LDFLAGS += $(LINKFLAGS)

SWAGGER_UI_DATA_PATH := pkg/ui/data/swagger/datafile.go
SWAGGER_UI_SRC := third_party/swagger-ui/...

.DEFAULT_GOAL := $(NAME)

$(NAME): $(SRCS)
	go build -ldflags '$(DARWIN_LDFLAGS)' $(PKG)/cmd/...

.PHONY: cross-build
cross-build:
	GOOS=darwin GOARCH=amd64 go build -ldflags '$(DARWIN_LDFLAGS)' -o dist/$(NAME)_darwin_amd64
	GOOS=linux GOARCH=amd64 go build -a -tags netgo -installsuffix netgo -ldflags '$(LINUX_LDFLAGS)' -o dist/$(NAME)_linux_amd64

.PHONY: linux
linux:
	GOOS=linux GOARCH=amd64 go build -a -tags netgo -installsuffix netgo -ldflags '$(LINUX_LDFLAGS)' -o dist/$(NAME)_linux_amd64

.PHONY: vet
vet:
	go tool vet -all -printfuncs=Wrap,Wrapf,Errorf $$(find . -maxdepth 1 -mindepth 1 -type d | grep -v -e "^\.\/\." -e vendor)

.PHONY: test
test:
	go test -cover -v ./pkg/...

.PHONY: test-race
test-race:
	go test -v -race ./pkg/...

.PHONY: test-all
test-all: vet test-race

.PHONY: fmt
fmt:
	gofmt -s -w $$(find . -type f -name '*.go' | grep -v -e vendor)

.PHONY: imports
imports:
	goimports -w $$(find . -type f -name '*.go' | grep -v -e vendor)

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
	done
	go generate ./pkg/...
	make fmt imports

.PHONY: deps
deps:
	go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
	go get -u github.com/golang/protobuf/protoc-gen-go
	go get -u github.com/mwitkow/go-proto-validators/protoc-gen-govalidators
	go get -u github.com/gogo/protobuf/protoc-gen-gofast
	go get -u github.com/jteeuwen/go-bindata/...

.PHONY: ui
ui:
	go-bindata -nocompress -o $(SWAGGER_UI_DATA_PATH) -pkg swagger $(SWAGGER_UI_SRC)
	make fmt imports

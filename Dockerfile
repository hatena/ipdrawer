FROM golang:1.11 as builder

ENV GOPATH /go
ENV GOOS linux
ENV CGO_ENABLED 0

COPY . /go/src/github.com/hatena/ipdrawer
WORKDIR /go/src/github.com/hatena/ipdrawer
RUN go get -u github.com/golang/dep/cmd/dep
RUN make deps
RUN dep ensure
RUN make

FROM alpine:latest

COPY --from=builder /go/src/github.com/hatena/ipdrawer/ipdrawer /bin/ipdrawer

ENTRYPOINT ["ipdrawer"]
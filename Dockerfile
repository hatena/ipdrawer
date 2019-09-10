FROM golang:1.13 as builder

ENV GOPATH /go
ENV GOOS linux
ENV CGO_ENABLED 0

WORKDIR /go/src/github.com/hatena/ipdrawer
COPY . .
RUN make

FROM alpine:latest

COPY --from=builder /go/src/github.com/hatena/ipdrawer/ipdrawer /bin/ipdrawer

ENTRYPOINT ["ipdrawer"]

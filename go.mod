module github.com/hatena/ipdrawer

go 1.13

require (
	github.com/alicebob/miniredis v0.0.0-20170430122723-995ba133bd8f
	github.com/apache/thrift v0.0.0-20161221203622-b2a4d4ae21c7 // indirect
	github.com/cenkalti/backoff v2.2.1+incompatible
	github.com/codahale/hdrhistogram v0.0.0-20161010025455-3a0bb77429bd // indirect
	github.com/go-redis/redis v6.15.9+incompatible
	github.com/go-yaml/yaml v0.0.0-20170812160011-eb3733d160e7
	github.com/gogo/protobuf v0.0.0-20170307180453-100ba4e88506
	github.com/golang/protobuf v1.3.3
	github.com/google/uuid v1.1.2
	github.com/grpc-ecosystem/go-grpc-middleware v0.0.0-20170611114647-f63a7dfb64c1
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/inconshreveable/mousetrap v1.0.0 // indirect
	github.com/meatballhat/negroni-logrus v0.0.0-20170614114520-259659cbe5df
	github.com/mwitkow/go-proto-validators v0.0.0-20170220212302-a55ca57f374a
	github.com/nlopes/slack v0.6.0
	github.com/opentracing/opentracing-go v1.2.0
	github.com/pkg/errors v0.9.1
	github.com/rakyll/statik v0.1.7
	github.com/sirupsen/logrus v1.0.2-0.20170713114250-a3f95b5c4235
	github.com/soheilhy/cmux v0.1.5
	github.com/spf13/cobra v0.0.0-20170724071837-90fc11bbc0a7
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.8.1
	github.com/uber/jaeger-client-go v2.8.0+incompatible
	github.com/uber/jaeger-lib v1.5.0 // indirect
	github.com/urfave/negroni v0.3.0
	golang.org/x/net v0.0.0-20201202161906-c7110b5ffcbb
	golang.org/x/text v0.3.7 // indirect
	google.golang.org/genproto v0.0.0-20200513103714-09dca8ec2884
	google.golang.org/grpc v1.33.1
	gopkg.in/go-resty/resty.v0 v0.4.2-0.20170522074907-7a8134d87181
)

replace github.com/codahale/hdrhistogram => github.com/HdrHistogram/hdrhistogram-go v0.9.0

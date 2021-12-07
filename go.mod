module github.com/hatena/ipdrawer

go 1.13

require (
	github.com/alicebob/miniredis v0.0.0-20170430122723-995ba133bd8f
	github.com/apache/thrift v0.0.0-20161221203622-b2a4d4ae21c7
	github.com/cenkalti/backoff v1.1.0
	github.com/codahale/hdrhistogram v0.0.0-20161010025455-3a0bb77429bd
	github.com/davecgh/go-spew v1.1.1
	github.com/go-redis/redis v6.15.9+incompatible
	github.com/go-yaml/yaml v0.0.0-20170812160011-eb3733d160e7
	github.com/gogo/protobuf v0.0.0-20170307180453-100ba4e88506
	github.com/golang/protobuf v0.0.0-20170726212829-748d386b5c1e
	github.com/google/uuid v0.0.0-20161128191214-064e2069ce9c
	github.com/grpc-ecosystem/go-grpc-middleware v0.0.0-20170611114647-f63a7dfb64c1
	github.com/grpc-ecosystem/grpc-gateway v1.2.3-0.20170724004829-f2862b476edc
	github.com/inconshreveable/mousetrap v1.0.0
	github.com/meatballhat/negroni-logrus v0.0.0-20170614114520-259659cbe5df
	github.com/mwitkow/go-proto-validators v0.0.0-20170220212302-a55ca57f374a
	github.com/nlopes/slack v0.6.0
	github.com/opentracing/opentracing-go v1.2.0
	github.com/philips/go-bindata-assetfs v0.0.0-20150624150248-3dcc96556217
	github.com/pkg/errors v0.9.1
	github.com/pmezard/go-difflib v1.0.0
	github.com/rakyll/statik v0.1.7
	github.com/sirupsen/logrus v1.0.2-0.20170713114250-a3f95b5c4235
	github.com/soheilhy/cmux v0.1.5
	github.com/spf13/cobra v0.0.0-20170724071837-90fc11bbc0a7
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.7.0
	github.com/uber/jaeger-client-go v2.8.0+incompatible
	github.com/uber/jaeger-lib v1.5.0
	github.com/urfave/negroni v0.3.0
	golang.org/x/net v0.0.0-20201202161906-c7110b5ffcbb
	golang.org/x/sys v0.0.0-20200930185726-fdedc70b468f
	golang.org/x/text v0.3.7
	google.golang.org/genproto v0.0.0-20170711235230-b0a3dcfcd1a9
	google.golang.org/grpc v1.5.1
	gopkg.in/go-resty/resty.v0 v0.4.2-0.20170522074907-7a8134d87181
)

replace github.com/codahale/hdrhistogram => github.com/HdrHistogram/hdrhistogram-go v0.9.0

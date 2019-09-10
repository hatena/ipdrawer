# IPDrawer

## What is IPDrawer?
IPDrawer is IP Address Management (IPAM) application and the code is written in Golang.

## Features
* IPDrawer can assigne IP from the predefined IP pools.
* IPDrawer has gRPC and REST API interfaces.

## API Docs
* [REST API Reference](/pkg/server/apiclient/README.md)
* `./ipdrawer start --redis-host localhost` and access to `http://localhost:25577/swagger-ui`

## Development

### Prerequisite

* Go
* make

### Generate a binary

```bash
$ make
$ ./ipdrawer --help
```

### Generate proto files

```bash
$ make proto
```

### Run test

```bash
$ make test
```

### (Option) CI/CD Pipeline
- buildspec.yml
  - build docker image and push to ECR
- create-pr.sh
  - Create PR in another repository for deploy (GitOps)

## Author

[taku-k](https://github.com/taku-k)

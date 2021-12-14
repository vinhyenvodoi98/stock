FROM golang:1.17-alpine AS builder

WORKDIR /go/src/db_watcher_tool

COPY go.* ./
RUN go mod download
COPY . .

ENV GOPATH="$GOROOT/packages"
ENV PATH="$PATH:$GOROOT/bin"

RUN go build -o .out/dbsize cmd/tableSide/main.go

FROM alpine:3.14
COPY --from=builder /go/src/db_watcher_tool/.out/dbsize /dbsize

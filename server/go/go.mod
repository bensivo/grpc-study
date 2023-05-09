module bensivo.com/grpc-greetings-server

go 1.20

replace bensivo.com/grpc-greetings => ../../shared/go/

require (
	bensivo.com/grpc-greetings v0.0.0-00010101000000-000000000000
	github.com/bufbuild/connect-go v1.7.0
	golang.org/x/net v0.10.0
)

require (
	golang.org/x/text v0.9.0 // indirect
	google.golang.org/protobuf v1.30.0 // indirect
)

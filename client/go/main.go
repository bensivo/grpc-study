package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"log"
	"net"
	"net/http"

	greetingsv1 "bensivo.com/grpc-greetings/greetings/v1"
	"bensivo.com/grpc-greetings/greetings/v1/greetingsv1connect"
	"github.com/bufbuild/connect-go"
	"golang.org/x/net/http2"
)

func main() {

	client := greetingsv1connect.NewGreetingsServiceClient(
		newInsecureClient(),
		"http://localhost:4000",
		// connect.WithGRPC(), // Required for standard grpc servers, like the python server in this repo
	)

	req := connect.NewRequest(&greetingsv1.GreetRequest{
		Name: "Golang client",
	})

	res, err := client.Greet(context.Background(), req)
	if err != nil {
		log.Panic(err)
	}

	fmt.Printf("Response: %s\n", res.Msg.Greeting)

}

func newInsecureClient() *http.Client {
	return &http.Client{
		Transport: &http2.Transport{
			AllowHTTP: true,
			DialTLS: func(network, addr string, _ *tls.Config) (net.Conn, error) {
				// If you're also using this client for non-h2c traffic, you may want
				// to delegate to tls.Dial if the network isn't TCP or the addr isn't
				// in an allowlist.
				return net.Dial(network, addr)
			},
			// Don't forget timeouts!
		},
	}
}

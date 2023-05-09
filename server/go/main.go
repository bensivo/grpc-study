package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	greetingsv1 "bensivo.com/grpc-greetings/greetings/v1"
	"bensivo.com/grpc-greetings/greetings/v1/greetingsv1connect"
	"github.com/bufbuild/connect-go"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

type GreetingsServer struct {
	greetingsv1connect.UnimplementedGreetingsServiceHandler
}

func (gs *GreetingsServer) Greet(ctx context.Context, req *connect.Request[greetingsv1.GreetRequest]) (*connect.Response[greetingsv1.GreetResponse], error) {
	log.Printf("Received greet request for %s\n", req.Msg.Name)

	res := connect.NewResponse(&greetingsv1.GreetResponse{
		Greeting: fmt.Sprintf("Hello, %s", req.Msg.Name),
	})

	return res, nil
}

func main() {
	mux := http.NewServeMux()
	// The generated constructors return a path and a plain net/http
	// handler.
	mux.Handle(greetingsv1connect.NewGreetingsServiceHandler(&GreetingsServer{}))
	err := http.ListenAndServe(
		"localhost:4000",
		// For gRPC clients, it's convenient to support HTTP/2 without TLS. You can
		// avoid x/net/http2 by using http.ListenAndServeTLS.
		h2c.NewHandler(mux, &http2.Server{}),
	)
	log.Fatalf("listen failed: %v", err)
}

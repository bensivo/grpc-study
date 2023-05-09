import { ConnectRouter } from "@bufbuild/connect";
import { GreetingsService } from "greetings-grpc/gen/greetings/v1/greetings_connect";
import { GreetResponse } from "greetings-grpc/gen/greetings/v1/greetings_pb";

const router = (router: ConnectRouter) => (
    router.service(GreetingsService, {
        async greet(req): Promise<GreetResponse> {
            console.log(`Received greet request from ${req.name}`)
            return new GreetResponse({
                greeting: `Hello, ${req.name}`
            })
        }
    })
);

import { connectNodeAdapter } from "@bufbuild/connect-node";
import * as http2 from "http2";

http2.createServer(
    connectNodeAdapter({ routes: router }) // responds with 404 for other requests
).listen(4000);


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

// async function main() {
//     const server = fastify();
//     await server.register(fastifyConnectPlugin, {
//         routes: router
//     });
//     server.get("/", (_, reply) => {
//         reply.type("text/plain");
//         reply.send("Hello World!");
//     });
//     await server.listen({ host: "0.0.0.0", port: 4000 });
//     console.log("server is listening at", server.addresses());
// }
// // You can remove the main() wrapper if you set type: module in your package.json,
// // and update your tsconfig.json with target: es2017 and module: es2022.
// void main();
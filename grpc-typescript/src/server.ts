import * as grpc from '@grpc/grpc-js';
    import * as http from "http";
import { connectNodeAdapter } from "@bufbuild/connect-node";
import { GreetRequest, GreetResponse } from './proto/greetings/v1/greetings_pb';

const greetingsService = {
    greet: async (
        call: grpc.ServerUnaryCall<GreetRequest, GreetResponse>,
        callback: grpc.sendUnaryData<GreetResponse>
    ) => {
        console.log(`Received greet request from ${call.request.getName()}`);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = new GreetResponse();
        response.setGreeting('Hi, ' + call.request.getName()),
        callback(null, response)

    },
}

function main() {
    // const server = new grpc.Server();

    // server.bindAsync('0.0.0.0:4000', grpc.ServerCredentials.createInsecure(), () => {
    //     server.start();

    //     server.addService(GreetingsServiceService, greetingsService)
    //     console.log('Server is running on 0.0.0.0:4000');
    // });


http.createServer(
  connectNodeAdapter({ routes }) // responds with 404 for other requests
).listen(8080);
}

main();
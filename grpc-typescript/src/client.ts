import { credentials } from '@grpc/grpc-js';
import { GreetingsServiceClient } from './proto/greetings/v1/greetings_grpc_pb';
import { GreetRequest } from './proto/greetings/v1/greetings_pb';

const client = new GreetingsServiceClient('localhost:4000', credentials.createInsecure());

const request = new GreetRequest();
request.setName('Benjamin');

client.greet(request, (err, response) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(response.getGreeting());
});

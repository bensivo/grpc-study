import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-node";
import { GreetingsService } from "greetings-grpc/gen/greetings/v1/greetings_connect";
import { GreetRequest } from "greetings-grpc/gen/greetings/v1/greetings_pb";

async function main() {
  const transport = createConnectTransport({
    httpVersion: '2',
    baseUrl: 'http://localhost:4000'
  });
  const client = createPromiseClient(GreetingsService, transport);

  const res = await client.greet(new GreetRequest({
    name: 'Typescript client'
  }))

  console.log(res.greeting);
 
}

main();
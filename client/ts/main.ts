import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-node";
import { GreetingsService } from "greetings-grpc/gen/greetings/v1/greetings_connect";
import { GreetRequest } from "greetings-grpc/gen/greetings/v1/greetings_pb";

async function main() {

  const transport = createConnectTransport({
    httpVersion: '1.1',
    baseUrl: 'http://localhost:4000'
  });
  const client = createPromiseClient(GreetingsService, transport);

  const res = await client.greet(new GreetRequest({
    name: 'Typescript client'
  }))

  console.log(res.greeting);
 
}
// You can remove the main() wrapper if you set type: module in your package.json,
// and update your tsconfig.json with target: es2017 and module: es2022.
void main();
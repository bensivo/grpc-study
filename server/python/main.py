from concurrent import futures

import grpc
import greetings.v1.greetings_pb2_grpc as greetings_grpc
import greetings.v1.greetings_pb2 as greetings


class GreetingsServicer(greetings_grpc.GreetingsServiceServicer):
    def Greet(self, request, context):
        print(f'Received request from {request.name}')
        return greetings.GreetResponse(
            greeting = f'Hello, {request.name}'
        )

def main():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    greetings_grpc.add_GreetingsServiceServicer_to_server(GreetingsServicer(), server)

    server.add_insecure_port('0.0.0.0:4000')
    server.start()
    server.wait_for_termination()



if __name__ == '__main__':
    main()
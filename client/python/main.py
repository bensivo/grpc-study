import grpc
import greetings.v1.greetings_pb2_grpc as greetings_grpc
import greetings.v1.greetings_pb2 as greetings


def main():
    channel = grpc.insecure_channel('localhost:4000')

    stub = greetings_grpc.GreetingsServiceStub(channel)
    req = greetings.GreetRequest(name = 'Python client')
    res = stub.Greet(req)
    print(res)

if __name__ == '__main__':
    main()
# GRPC Study

## Requirements
- Node.js
- protoc `brew install protobuf@3 && brew link --overwrite protobuf@3`
    - There is a bug with the latest brew version of protobuf, not yet compatible with the js plugin
- Buf `brew install bufbuild/buf/buf`

## Usage

1. Generate JS/TS files from the proto folder
    ```
    cd shared
    ./build.sh
    ```
2. Run any server
    ts
    ```
    cd server/ts
    npm i 
    npm run start
    ```

    go
    ```
    cd server/go
    go mod tidy
    go run main.go
    ```

3. Run any client
    ts
    ```
    cd client/ts
    npm i 
    npm run start
    ```

    go
    ```
    cd client/go
    go mod tidy
    go run main.go
    ```

4. Run a web client
    ```
    # Install grpcui if you haven't already
    go install github.com/fullstorydev/grpcui/cmd/grpcui@latest

    grpcui -protoset ./shared/proto/buf-image.bin -plaintext localhost:4000 
    ```


## Next Steps:

- Create dockerized build and run for node.js server

- Figure out grpc-gateway for HTTP+JSON interface: https://github.com/grpc-ecosystem/grpc-gateway

- Create separate npm package for generated JS/TS files

- Create a server and client for python, golang
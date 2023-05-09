# GRPC Study

## Requirements
- Node.js
- golang
- python3
- protoc `brew install protobuf@3 && brew link --overwrite protobuf@3`
    - There is a bug with the latest brew version of protobuf, not yet compatible with the js plugin
- buf `brew install bufbuild/buf/buf`

## Usage

1. Generate language-specfic clients from the shared folder
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

    python
    ```
    cd client/python
    python3 -m venv ./venv
    source ./venv/bin/activate
    pip install -r requirements.txt
    python main.py
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

    python
    ```
    cd client/python
    python3 -m venv ./venv
    source ./venv/bin/activate
    pip install -r requirements.txt
    python main.py
    ```

4. Run a web client
    ```
    # Install grpcui if you haven't already
    go install github.com/fullstorydev/grpcui/cmd/grpcui@latest

    grpcui -protoset ./shared/proto/buf-image.bin -plaintext localhost:4000 
    ```


NOTE ON PYTHON: The ts and golang applications are built using the connect ecosystem, which is a framework similar to grpc, but with better support
for HTTP 1.1 (meaning web clients), and a simpler implementation for supported languages.

Python is not in the connect ecosystem, so the python apps here are standard GRPC servers and clients. In general, a connect server can serve grpc clients, but grpc servers cannot serve connect clients (without code changes on the client side).


## Next Steps:

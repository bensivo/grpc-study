# GRPC Study

## Requirements
- Node.js
- protoc `brew install protobuf@3 && brew link --overwrite protobuf@3`
    - There is a bug with the latest brew version of protobuf, not yet compatible with the js plugin
- Buf `brew install bufbuild/buf/buf`

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


## Next Steps:

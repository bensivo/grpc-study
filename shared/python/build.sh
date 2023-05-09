echo "Building python"
source ./venv/bin/activate
python -m grpc_tools.protoc -I../proto --python_out=./src --pyi_out=./src --grpc_python_out=./src ../proto/greetings/v1/greetings.proto

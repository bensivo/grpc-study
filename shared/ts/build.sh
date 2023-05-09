echo "Generating js"
export PATH=$PATH:$PWD/node_modules/.bin
buf generate ../proto --template ./buf.gen.yaml
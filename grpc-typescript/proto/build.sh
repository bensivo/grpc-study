#!/bin/bash

set -e

echo "Linting"
buf lint

if test -f buf-image.bin; then
    echo "Testing for breaking changes"
    buf breaking . --against buf-image.bin
fi


echo "Building image"
buf build . -o buf-image.bin

echo "Generating JS/TS"
buf generate

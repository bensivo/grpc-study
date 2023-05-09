This folder contains all our proto files, and uses buf to compile them.

If you don't have it installed, install buf here: https://buf.budild/docs/installation/

Commands:

Lint proto files - `buf lint`

Build proto files into image - `buf build . -o buf-image.bin`

Test for breaking changes - `buf breaking . --against buf-image.bin`

Geneate JS/TS - `buf generate`



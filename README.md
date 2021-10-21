# node-16-7-0-proxy-epipe

This repository shows a reproduction of an `EPIPE` error on proxying `http` requests.
The issue shows up in Node.js 16.7.0 but not Node.js 16.6.2.

## Reproduction

1. Run `./run-bad.bash` (which uses `v16.7.0`)
2. See `EPIPE` error
3. Run `./run-good.bash` (which uses `v16.6.2`)
4. See no `EPIPE` error

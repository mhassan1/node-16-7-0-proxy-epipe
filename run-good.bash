#!/usr/bin/env bash -ex

docker build -t node-16-7-0-proxy-epipe-good -f Dockerfile-good .
docker run -it node-16-7-0-proxy-epipe-good

#!/usr/bin/env bash

# exit on error
set -e

# cleanup from previous build
rm -rf node_modules

NODE="docker run -it --rm
       -v $(pwd):/app
       -w /app
       node:5.7"

${NODE} npm install

# pre-build checks
# code style
${NODE} npm run lint

# build
${NODE} npm run build

# todo: tests
# todo: dev containers

# remove dev dependencies

${NODE} npm prune --production

docker build -t ephyros-app .
docker build -t ephyros-web -f ./nginx/Dockerfile .

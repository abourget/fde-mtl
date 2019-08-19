#!/bin/bash

TAG=$(git rev-parse --short HEAD)

docker build -t gcr.io/abourget-007/fde-mtl:latest -t gcr.io/abourget-007/fde-mtl:$TAG .
docker push gcr.io/abourget-007/fde-mtl:latest
docker push gcr.io/abourget-007/fde-mtl:$TAG


#!/bin/bash
set -e

npm run build:prod

docker build . -t calc-k8s-fe
docker tag calc-k8s-fe:latest thereincarnator/thereincarnator:calc-k8s-fe
docker push thereincarnator/thereincarnator:calc-k8s-fe

kubectl delete service calc-k8s-fe
kubectl delete deployment calc-k8s-fe
kubectl create -f kubernetes.yaml

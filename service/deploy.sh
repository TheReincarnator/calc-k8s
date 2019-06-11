#!/bin/bash
set -e

./mvnw install

docker build . -t calc-k8s-be --build-arg JAR_FILE=target/calc-k8s-backend-0.0.1-SNAPSHOT.jar
docker tag calc-k8s-be:latest thereincarnator/thereincarnator:calc-k8s-be
docker push thereincarnator/thereincarnator:calc-k8s-be

kubectl delete service calc-k8s-be
kubectl delete deployment calc-k8s-be
kubectl create -f kubernetes.yaml

#!/bin/bash

# bump verson same as package version
yarn bump-version 
version=`cat VERSION`

# docker tag
docker tag jahskee/nextapp 458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp
docker tag jahskee/nextapp 458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp:$version

# docker push
yarn docker-build
docker push 458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp
docker push 458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp:$version

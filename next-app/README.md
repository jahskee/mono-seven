This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### Run local
  npm run dev

### Docker


#### deploy docker
npm run docker-run

#### rename image ready for publish
docker image tag client:latest jahskee/nextapp:latest

### docker publish
docker push jahskee/nextapp:latest

## Create AWS credential file

You should have this file ~/.aws/credentials and the contents should be in the following format:

[default]
aws_access_key_id = XXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


### AWS ECR - Push Docker

[//]: 1. This is the docker image
458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp


[//]: 2. Install Amazon ECR Docker Credential Helpermissions
brew install docker-credential-helper-ecr

[//]: Configure Docker for AWS ECR Authentication
    Place the docker-credential-ecr-login binary on your PATH and set the contents of your ~/.docker/config.json file to be:

    {
      "credsStore": "ecr-login"
    }

[//]: Push to AWS ECR:




docker tag jahskee/nextapp 458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp
docker push 458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp

#delete all images
docker rmi -f $(docker images -a -q)
Medium: https://medium.com/@bradford_hamilton/deploying-containers-on-amazons-ecs-using-fargate-and-terraform-part-2-2e6f6a3a957f

GitHub: https://github.com/bradford-hamilton/terraform-ecs-fargate/tree/master/terraform

cd infra/terraform/aws

terraform plan -out aws_infra
terraform apply aws_infra -auto-approve


terraform plan -destroy
terraform apply -destroy
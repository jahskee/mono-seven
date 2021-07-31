import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";
import * as aws from "@pulumi/aws";

// const cluster = new awsx.ecs.Cluster("nextapp");

// Create a repository.
//const repo = new awsx.ecr.Repository("nextapp2");
//export const image = repo.buildAndPushImage("../../../next-app");

const vpc = new awsx.ec2.Vpc("custom", {subnets: [{ type: "public" }, { type: "private" }] { cidrBlock: "172.8.8.0/16"}});
export const vpcId = vpc.id;
export const vpcPrivateSubnetIds = vpc.privateSubnetIds;
export const vpcPublicSubnetIds = vpc.publicSubnetIds;

const size = "t2.micro";     // t2.micro is available in the AWS free tier
const ami = pulumi.output(aws.ec2.getAmi({
  filters: [{
      name: "name",
      values: ["amzn-ami-hvm-*"],
  }],
  owners: ["137112412989"], // This owner ID is Amazon
  mostRecent: true,
}));

const group = new aws.ec2.SecurityGroup("webserver-secgrp", {
  ingress: [
      { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
  ],
});

const server = new aws.ec2.Instance("webserver-www", {
  instanceType: size,
  vpcSecurityGroupIds: [ group.id ], // reference the security group resource above
  ami: ami.id,
});

export const publicIp = server.publicIp;
export const publicHostName = server.publicDns;

/*

const alb = new awsx.elasticloadbalancingv2.ApplicationLoadBalancer(
    "nextapp-lb", { external: true, securityGroups: cluster.securityGroups });

const atg = alb.createTargetGroup(
    "nextapp-tg", { port: 3000, protocol: "HTTP", deregistrationDelay: 0 });

const web = atg.createListener("web", { port: 80 });

const image = "458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp:latest";
const appService = new awsx.ecs.FargateService("app-svc", {
    cluster,
    taskDefinitionArgs: {
        containers: {
            nextapp: {
                image,
                cpu: 1024,
                memory: 2048,
                portMappings: [ web ],
            },
        }
    },
    desiredCount: 2,
});


export const url = web.endpoint.hostname;
*/
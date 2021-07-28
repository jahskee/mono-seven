import * as awsx from "@pulumi/awsx";

const cluster = new awsx.ecs.Cluster("nextapp");

const alb = new awsx.elasticloadbalancingv2.ApplicationLoadBalancer(
    "nextapp--lb", { external: true, securityGroups: cluster.securityGroups });

const atg = alb.createTargetGroup(
    "nextapp--tg", { port: 3000, protocol: "HTTP", deregistrationDelay: 0 });

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
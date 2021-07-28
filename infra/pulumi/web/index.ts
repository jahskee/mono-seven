import * as awsx from "@pulumi/awsx";

const cluster = new awsx.ecs.Cluster("nextjs-blog");

const alb = new awsx.elasticloadbalancingv2.ApplicationLoadBalancer(
    "nextjs-blog--lb", { external: true, securityGroups: cluster.securityGroups });

const atg = alb.createTargetGroup(
    "nextjs-blog--tg", { port: 3000, protocol: "HTTP", deregistrationDelay: 0 });

const web = atg.createListener("web", { port: 80 });

const appService = new awsx.ecs.FargateService("app-svc", {
    cluster,
    taskDefinitionArgs: {
        containers: {
            nextjs_blog: {
                image: "458831896152.dkr.ecr.us-east-1.amazonaws.com/nextapp:latest",
                cpu: 1024,
                memory: 2048,
                portMappings: [ web ],
            },
        }
    },
    desiredCount: 2,
});

export const url = web.endpoint.hostname;
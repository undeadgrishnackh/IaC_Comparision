"use strict";
const k8s = require("@pulumi/kubernetes");

const appLabels = { app: "nginx" };
const deployment = new k8s.apps.v1.Deployment("nginx", {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: "nginx", image: "nginx" }] }
        }
    }
});
exports.name = deployment.metadata.name;


// TODO - NEXT Steps: 
// 1) docker build & publish: https://www.pulumi.com/blog/build-publish-containers-iac/
// 2) k8s deployment: https://www.pulumi.com/docs/get-started/kubernetes/modify-program/#modify-the-program

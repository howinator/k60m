# Deployments

Deployments are the real meat and potatoes of running a service on kubernetes as they allow you to deploy of fleet of pods and operate them as a unit.
Really, deployments are a thin wrapper around what is called a ReplicaSet which will ensure that the actual number of running pods matches the desired number of pods.
This wrapper exists because ReplicaSets have a single responsibility which is maintaining some number of pods when in actuality we often want to scale those pods and address them on the network.

# Creating a Deployment
To create our deployment, simply run `k apply -f deployment.yml`.
This will actually create two objects, the Deployment and a HorizontalPodAutoscaler.

The HorizontalPodAutoScaler is an object which will tell the ReplicaSet controller to increase the number of pods if, e.g., CPU exceeds some limit.
The metrics you use for scaling pods can basically be any metric which exists in k8s.

There are other things going on here too.
The main thing you might notice is that we're injecting config as environment variables into the express container.
Last, we're putting resource limits and requests on the running container.

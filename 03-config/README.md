# Config

Following 12-factor app principles, k8s pods are generally configured using an environment variables injected into the containers.
k8s provides first-class support for storing config in the cluster and injecting that config into the container environment.
The two objects in k8s which allow us to do that are the `ConfigMap` object and the `Secret` object.

# Creating Config Objects

In this section, I combined the manifests for creating a ConfigMap and a secret into the same file.
First, Howie has pasted a bearer token into the zoom chat (secure, I know).
Edit the config.yml file and replace `<insert secret>` with the bearer token.

Then run `k apply -f config.yml`.
Next let's make sure our config objects were creating by running `k get cm` and `k get secrets`.

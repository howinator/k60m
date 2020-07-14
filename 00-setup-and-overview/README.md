# Setup

1. Install kubectl with `brew install kubectl`.
2. Get the config file from Howie and add it to your ~/.kube dir.
  a. Download the kubeconfig file.
  b. Create the kube config directory, `mkdir ~/.kube`.
  c. Copy the kube config file to `~/.kube`.
3. Configure your shell.
  a. Add an alias for kubectl, `alias k=kubectl`.
  b. Add a shell variable for the kubeconfig, `export KUBECONFIG=~/.kube/k8s-1-18-3-do-eng-global-kubeconfig.yaml`.

# Architecture and Overview

Kubernetes or k8s is a container orchestration platform first developed by Google and now managed by the Cloud Native Computing Foundation.
The basic premise of a container orchestration platform is that you should be able to abstract away the physical (or virtual) machines where your processes, containers, run.

There are three basic concepts that I think are important in understanding the architecture of k8s: the pod, the control plane, and nodes.

The pod is the most basic unit of work in k8s.
A pod is an object which encapsulates the containers, storage, and networking to run a single instance of an application.
The pod is the smallest unit in k8s and forms the basis for every other object in a k8s cluster.

The control plane is a set of pods and resources which manage the other pods and objects in a k8s cluster.
The resources in the control plane consist of etcd, an API server and a number of controllers.
The API server is a stateless server which receives k8s internal and external API requests (GET pods, POST pods) and then reads or writes to a database called etcd.
etcd is a distributed key-value store (which uses Raft for distributed consensus) which stores the desired state of the k8s cluster.
The kube-scheduler is a process which reads from etcd (via the API server) and schedules unallocated pods to available nodes.
Finally, controllers are a set of processes which use control loops to ensure that the current state of the cluster is in the desired state.

The last piece of a k8s cluster is the node.
Nodes generally run two processes: the kubelet and the kube-proxy.
The kubelet manages the container runtime and ensures that pods assigned to that node are running the correct containers.
The kube-proxy process is a simple network proxy which maintains a set of network rules and proxies requests to the correct pod on the node.

# Where I Cheated

I'm using a managed Digital Ocean cluster which I set up using a couple clicks in the Digital Ocean interface.
I also installed a few "one-click apps" into the cluster to show the power of the k8s ecosystem.

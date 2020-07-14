# Pods

As mentioned in section 00, the pod is the basic unit of work in k8s.
In this section, we'll create a simple hello world pod and view it.

# Creating a Pod

Go ahead and look at hello-heap-pod.yml.
It's a simple configuration file which defines a pod using an image using Docker Hub.
Apply the config using `k apply -f hello-heap-pod.yml`.

Next run `k get pod` and notice how there is now a pod running in your namespace.
We can view the logs for this pod by running `k logs -f hello-heap`.

Finally, this pod is in a CrashLoopBackOff because it's exiting when k8s doesn't expect it to, so let's delete it, `k delete pod hello-heap`.


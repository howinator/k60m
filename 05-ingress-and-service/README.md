# Services and Ingresses

So far we have a set of pods, which are being managed by a deployment, but no way to address them.
This is where a service comes in.
A service is a simple abstraction which simply says, "let these pods be addressed as this name".
Another way to think about a service is that it's just software-defined networking.

The last piece of the puzzle is how we allow external traffic to send requests to the service.
This is where the ingress comes in.
An ingress is simply a proxy server which allows rules of the type "when I receive requests for this domain, forward them to this service."

# Creating the Service and Ingress

To create the service and ingress, first open `ingress-service.yml` and replace `<your name>` with your name.
Then run `k apply -f ingress-service.yml`.

There's a little bit of magic going on here.
First, I manually created a DNS record which points all traffic to *.k60m.howinator.io to a load balancer which was automatically created when I added the ingress controller to the cluster.
Next, requests are hitting that load balancer, and the load balancer is forwarding the traffic to the ingresses running in the cluster.
Finally, the ingresses are using the ingress rules defined using the Ingress objects and forwarding traffic to the correct services.

The last piece of magic is that I installed a controller called `cert-manager` which will create letsencrypt SSL certificates for any ingresses which request an SSL certificate.

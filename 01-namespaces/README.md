# Namespaces

Namespaces are an abstraction in kubernetes which allows for multiple "virtual" clusters to exist in a single physical cluster. 
Put another way, namespaces enable total isolation between resources in a single cluster.

Namespaces aren't generally where most k8s tutorials begin, but we're beginning here because namespaces allow all of us to work on this tutorial without stepping on each other's toes.

# Creating our namespace

To create our namespace, simply edit the provided `namespace.yml` file with your name and run `kubectl apply -f namespace.yml`.
Note: for the rest of this workshop, I will use `k` instead of `kubectl`. Run `alias k=kubectl` to avoid typing out `kubectl`.

Confirm the namespace was created by running `k get ns`.

Finally, let's change our default namespace in kubectl to the namespace we just created.
Run `k config set-context --current --namespace=<your name>`.
If you see an error when running this, make sure you have `KUBECONFIG=~/.kube/k8s-1-18-3-do-eng-global-kubeconfig.yaml` set in your shell.

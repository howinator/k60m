# Just Scratching the Surface

k8s can be as complex or as simple as you want.
There are a number of objects we didn't talk about which ship out-of-the-box with k8s, such as cron jobs, stateful storage and access control.
Almost any workload you can think of can be safely run on k8s.

Furthermore, k8s has an incredibly vibrant and thriving ecosystem.
You can often run some service, e.g., postgres, redis, with one command using the k8s package manager, Helm.
Also, a lot of the work of actually running a k8s cluster can be handled by a managed k8s provider such as <insert cloud provider of choice>.

A little easter egg: [this is my favorite piece of code in the k8s codebase](https://github.com/kubernetes/kubernetes/blob/ec2e767e59395376fa191d7c56a74f53936b7653/pkg/controller/volume/persistentvolume/pv_controller.go).

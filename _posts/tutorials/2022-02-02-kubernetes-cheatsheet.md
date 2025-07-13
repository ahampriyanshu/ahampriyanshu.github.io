---
title: "Kubernetes Cheat Sheet"
author: ahampriyanshu
excerpt: Handy commands for Kubernetes
categories: [Tutorials]
tags: [tutorials, kubernetes, devops]
---

## Installing Kubernetes

### kubectl Installation

```bash
# On Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y kubectl

# On CentOS/RHEL
sudo yum install -y kubectl

# On macOS
brew install kubectl

# On Windows (using Chocolatey)
choco install kubernetes-cli

# Direct download (Linux)
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```

### Minikube Installation

```bash
# Linux
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# macOS
brew install minikube

# Windows (using Chocolatey)
choco install minikube

# Start Minikube
minikube start

# Stop Minikube
minikube stop

# Delete Minikube cluster
minikube delete
```

---

## Cluster Management

### Cluster Information

```bash
# Check cluster info
kubectl cluster-info

# Show cluster nodes
kubectl get nodes

# Show node details
kubectl describe node <node-name>

# Get cluster configuration
kubectl config view

# Check current context
kubectl config current-context

# List all contexts
kubectl config get-contexts

# Switch context
kubectl config use-context <context-name>
```

### Kubectl Configuration

```bash
# Set cluster
kubectl config set-cluster <cluster-name> --server=<server-url>

# Set credentials
kubectl config set-credentials <user-name> --token=<token>

# Set context
kubectl config set-context <context-name> --cluster=<cluster-name> --user=<user-name>

# Set default namespace
kubectl config set-context --current --namespace=<namespace>
```

---

## Pods Management

### Basic Pod Operations

```bash
# List all pods
kubectl get pods

# List pods in all namespaces
kubectl get pods --all-namespaces

# List pods with additional info
kubectl get pods -o wide

# Show pod details
kubectl describe pod <pod-name>

# Create pod from YAML
kubectl create -f pod.yaml

# Apply pod configuration
kubectl apply -f pod.yaml

# Delete pod
kubectl delete pod <pod-name>

# Delete all pods
kubectl delete pods --all
```

### Pod Interaction

```bash
# Execute command in pod
kubectl exec <pod-name> -- <command>

# Interactive shell in pod
kubectl exec -it <pod-name> -- /bin/bash

# Execute in specific container
kubectl exec -it <pod-name> -c <container-name> -- /bin/bash

# Copy files to/from pod
kubectl cp <file-path> <pod-name>:/path/to/destination
kubectl cp <pod-name>:/path/to/file <local-path>

# Port forwarding
kubectl port-forward <pod-name> 8080:80

# Show pod logs
kubectl logs <pod-name>

# Follow logs
kubectl logs -f <pod-name>

# Show logs from specific container
kubectl logs <pod-name> -c <container-name>
```

---

## Deployments

### Deployment Management

```bash
# Create deployment
kubectl create deployment <deployment-name> --image=<image-name>

# List deployments
kubectl get deployments

# Show deployment details
kubectl describe deployment <deployment-name>

# Scale deployment
kubectl scale deployment <deployment-name> --replicas=3

# Update deployment image
kubectl set image deployment/<deployment-name> <container-name>=<new-image>

# Rolling update
kubectl rollout status deployment/<deployment-name>

# Rollback deployment
kubectl rollout undo deployment/<deployment-name>

# Show rollout history
kubectl rollout history deployment/<deployment-name>

# Delete deployment
kubectl delete deployment <deployment-name>
```

### Deployment Strategies

```bash
# Apply deployment from file
kubectl apply -f deployment.yaml

# Edit deployment
kubectl edit deployment <deployment-name>

# Patch deployment
kubectl patch deployment <deployment-name> -p '{"spec":{"replicas":5}}'

# Restart deployment
kubectl rollout restart deployment/<deployment-name>

# Pause deployment
kubectl rollout pause deployment/<deployment-name>

# Resume deployment
kubectl rollout resume deployment/<deployment-name>
```

---

## Services

### Service Management

```bash
# List services
kubectl get services

# Show service details
kubectl describe service <service-name>

# Create service from deployment
kubectl expose deployment <deployment-name> --port=80 --target-port=8080

# Create service with type
kubectl expose deployment <deployment-name> --port=80 --type=LoadBalancer

# Create service from file
kubectl apply -f service.yaml

# Delete service
kubectl delete service <service-name>
```

### Service Types

```bash
# ClusterIP (default)
kubectl create service clusterip <service-name> --tcp=80:8080

# NodePort
kubectl create service nodeport <service-name> --tcp=80:8080

# LoadBalancer
kubectl create service loadbalancer <service-name> --tcp=80:8080

# ExternalName
kubectl create service externalname <service-name> --external-name=<external-url>
```

---

## ConfigMaps and Secrets

### ConfigMap Operations

```bash
# Create configmap from literal
kubectl create configmap <config-name> --from-literal=key1=value1 --from-literal=key2=value2

# Create configmap from file
kubectl create configmap <config-name> --from-file=path/to/file

# Create configmap from directory
kubectl create configmap <config-name> --from-file=path/to/directory

# List configmaps
kubectl get configmaps

# Show configmap details
kubectl describe configmap <config-name>

# Edit configmap
kubectl edit configmap <config-name>

# Delete configmap
kubectl delete configmap <config-name>
```

### Secret Operations

```bash
# Create secret from literal
kubectl create secret generic <secret-name> --from-literal=username=admin --from-literal=password=secret

# Create secret from file
kubectl create secret generic <secret-name> --from-file=path/to/file

# Create Docker registry secret
kubectl create secret docker-registry <secret-name> --docker-server=<server> --docker-username=<username> --docker-password=<password>

# Create TLS secret
kubectl create secret tls <secret-name> --cert=path/to/cert.crt --key=path/to/key.key

# List secrets
kubectl get secrets

# Show secret details
kubectl describe secret <secret-name>

# Decode secret
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 --decode

# Delete secret
kubectl delete secret <secret-name>
```

---

## Namespaces

### Namespace Management

```bash
# List namespaces
kubectl get namespaces

# Create namespace
kubectl create namespace <namespace-name>

# Delete namespace
kubectl delete namespace <namespace-name>

# Show namespace details
kubectl describe namespace <namespace-name>

# Set default namespace
kubectl config set-context --current --namespace=<namespace-name>
```

### Working with Namespaces

```bash
# List resources in namespace
kubectl get pods -n <namespace-name>

# Create resource in namespace
kubectl create -f resource.yaml -n <namespace-name>

# Apply to specific namespace
kubectl apply -f resource.yaml -n <namespace-name>

# Delete all resources in namespace
kubectl delete all --all -n <namespace-name>
```

---

## Persistent Volumes

### PV and PVC Operations

```bash
# List persistent volumes
kubectl get pv

# List persistent volume claims
kubectl get pvc

# Show PV details
kubectl describe pv <pv-name>

# Show PVC details
kubectl describe pvc <pvc-name>

# Create PVC from file
kubectl apply -f pvc.yaml

# Delete PVC
kubectl delete pvc <pvc-name>
```

### Storage Classes

```bash
# List storage classes
kubectl get storageclass

# Show storage class details
kubectl describe storageclass <storage-class-name>

# Set default storage class
kubectl patch storageclass <storage-class-name> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

---

## Ingress

### Ingress Management

```bash
# List ingress resources
kubectl get ingress

# Show ingress details
kubectl describe ingress <ingress-name>

# Create ingress from file
kubectl apply -f ingress.yaml

# Edit ingress
kubectl edit ingress <ingress-name>

# Delete ingress
kubectl delete ingress <ingress-name>
```

---

## Monitoring and Debugging

### Resource Monitoring

```bash
# Show resource usage
kubectl top nodes
kubectl top pods

# Show events
kubectl get events

# Show events sorted by timestamp
kubectl get events --sort-by=.metadata.creationTimestamp

# Watch resources
kubectl get pods -w

# Show resource definitions
kubectl explain pod
kubectl explain deployment.spec
```

### Debugging Commands

```bash
# Debug pod
kubectl debug <pod-name> -it --image=busybox

# Check pod status
kubectl get pods --field-selector=status.phase=Failed

# Show pod resource usage
kubectl describe pod <pod-name> | grep -A 5 "Requests\|Limits"

# Check container logs
kubectl logs <pod-name> --previous

# Show all resources
kubectl get all

# Show resource with labels
kubectl get pods --show-labels

# Filter by labels
kubectl get pods -l app=myapp
```

---

## YAML Manifests

### Pod YAML Example

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-container
    image: nginx:latest
    ports:
    - containerPort: 80
```

### Deployment YAML Example

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: my-container
        image: nginx:latest
        ports:
        - containerPort: 80
```

### Service YAML Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

---

## Advanced Commands

### Resource Management

```bash
# Apply all YAML files in directory
kubectl apply -f /path/to/directory/

# Dry run
kubectl apply -f deployment.yaml --dry-run=client

# Force delete pod
kubectl delete pod <pod-name> --force --grace-period=0

# Cordon node (mark unschedulable)
kubectl cordon <node-name>

# Uncordon node
kubectl uncordon <node-name>

# Drain node
kubectl drain <node-name> --ignore-daemonsets

# Taint node
kubectl taint nodes <node-name> key=value:NoSchedule

# Remove taint
kubectl taint nodes <node-name> key:NoSchedule-
```

### Useful Aliases

```bash
# Add to ~/.bashrc or ~/.zshrc
alias k='kubectl'
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kgd='kubectl get deployments'
alias kaf='kubectl apply -f'
alias kdel='kubectl delete'
alias kdes='kubectl describe'
alias klog='kubectl logs'
alias kexec='kubectl exec -it'
```

---

## Troubleshooting

### Common Issues

```bash
# Check cluster health
kubectl get componentstatuses

# Check node conditions
kubectl describe nodes

# Check pod events
kubectl describe pod <pod-name>

# Check resource quotas
kubectl describe resourcequota

# Check network policies
kubectl get networkpolicies

# Check RBAC
kubectl auth can-i <verb> <resource>
kubectl auth can-i create pods --as=system:serviceaccount:default:my-service-account

# Check API versions
kubectl api-versions

# Check API resources
kubectl api-resources
```

### Performance Debugging

```bash
# Show resource consumption
kubectl top pods --sort-by=cpu
kubectl top pods --sort-by=memory

# Check pod resource requests/limits
kubectl describe pod <pod-name> | grep -A 10 "Requests\|Limits"

# Show node allocation
kubectl describe node <node-name> | grep -A 10 "Allocated resources"

# Check persistent volume usage
kubectl get pv -o custom-columns=NAME:.metadata.name,CAPACITY:.spec.capacity.storage,STATUS:.status.phase
```
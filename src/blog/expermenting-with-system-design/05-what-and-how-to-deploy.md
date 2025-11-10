---
title: "What and How to Deploy"
date: 2025-07-01
description: The final piece of the system design puzzle - from operating system fundamentals to containerization, Kubernetes orchestration, and architectural patterns that bring it all together.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'docker', 'kubernetes', 'containers', 'deployment']
---

Welcome to the final installment of our system design series! We've journeyed through networking fundamentals, connectivity patterns, storage systems, and scaling strategies. Now it's time to bring everything together: **deploying and operating distributed systems in production**.

This article covers the operational reality of system design—how containers package applications consistently, how Kubernetes orchestrates them at scale, what operating system concepts underpin everything, and which architectural patterns guide your decisions. Let's dive into the world where design meets deployment.

## Operating System Concepts

### Process and Memory Management

**Operating Systems** provide the essential interface between computer hardware and users, managing resources and enabling application execution.

**Processes** represent currently running programs, with each process requiring memory, CPU time, and other system resources. In large systems, assume any process can terminate unexpectedly.

**Threads** enable concurrent execution within processes, sharing memory space while maintaining separate execution contexts.

```python
# Process vs Thread Example
import multiprocessing
import threading
import time

# CPU-intensive work benefits from processes
def cpu_task():
    return sum(i*i for i in range(1000000))

# I/O-intensive work benefits from threads  
def io_task():
    time.sleep(1)  # Simulated I/O wait
    return "completed"

# Using processes for CPU work
with multiprocessing.Pool() as pool:
    results = pool.map(cpu_task, range(4))

# Using threads for I/O work
threads = []
for i in range(4):
    thread = threading.Thread(target=io_task)
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()
```

### System Calls and Kernel

**System calls** enable programs to request services from the operating system kernel, providing the primary interface between applications and the OS.

**Fork** system calls create new processes from existing ones, with the new process becoming a child of the calling parent process.

**Exec** system calls replace the current process image with a new executable, enabling program execution within existing processes.

The **Kernel** forms the operating system's core, managing hardware resources and providing essential services like process management, memory management, and device control.

**Kernel Mode** provides unrestricted hardware access for system components, while **User Mode** restricts application access to protected system resources.

### Memory Management

**Virtual Memory** allows systems to use more memory than physically available by temporarily storing data on disk, enabling larger applications and better resource utilization.

The **Memory Management Unit (MMU)** handles memory translation between virtual and physical addresses, typically integrated into modern processors.

**Random Access Memory (RAM)** provides fast temporary storage for active processes, with data lost when processes terminate.

### Concurrency and Synchronization

**Concurrency** enables multiple instruction sequences to execute simultaneously, improving system throughput and responsiveness.

**Multiprocessing** coordinates work across multiple processors, while **Parallel Processing** divides tasks among multiple CPUs to reduce execution time.

**Race Conditions** occur when multiple processes access shared resources simultaneously without proper coordination, leading to unpredictable results.

**Deadlocks** happen when processes block each other indefinitely, each waiting for resources held by others.

**Locks** coordinate access to shared resources, preventing race conditions by ensuring exclusive access during critical operations.

```python
# Race Condition Example and Solution
import threading

# Problematic: Race condition
counter = 0
def unsafe_increment():
    global counter
    for _ in range(100000):
        counter += 1  # Not atomic!

# Solution: Use locks
lock = threading.Lock()
def safe_increment():
    global counter
    for _ in range(100000):
        with lock:
            counter += 1  # Now atomic
```

### Process Scheduling

**Scheduling** allocates CPU time among competing processes, ensuring fair resource distribution and system responsiveness.

**Preemptive Scheduling** can interrupt running processes to switch to higher-priority tasks, while **Non-Preemptive Scheduling** allows processes to run to completion.

**Context Switching** enables the CPU to switch between processes by saving and restoring process states.

## Linux System Administration

### Linux Filesystem Hierarchy

**Linux** provides a free, open-source operating system based on Unix, widely used in servers, cloud computing, and embedded systems due to its stability and flexibility.

**Linux Directory Structure** follows the Filesystem Hierarchy Standard (FHS):

- `/bin` - Essential user command binaries
- `/boot` - Boot process files and kernel images  
- `/dev` - Device files representing hardware
- `/etc` - System-wide configuration files
- `/home` - User home directories
- `/lib` - Shared libraries and kernel modules
- `/media` - Mount point for removable media
- `/mnt` - Temporary mount point for filesystems
- `/opt` - Optional application software packages
- `/proc` - Virtual filesystem exposing process information
- `/root` - Root user's home directory
- `/sbin` - System administration binaries
- `/srv` - Service data directories
- `/sys` - Virtual filesystem for hardware information
- `/tmp` - Temporary file storage
- `/usr` - User applications and data

## Virtualization and Containerization

### Virtualization Fundamentals

**Virtual Machines** use software to emulate physical computers, enabling multiple operating systems to run on a single host machine.

**Hypervisors** (Virtual Machine Monitors) create and manage virtual machines, allocating host resources among guest systems.

**Host machines** provide the underlying hardware and hypervisor, while **Guest machines** run as virtualized instances with their own operating systems.

**Bare Metal** virtualization runs directly on hardware without an underlying operating system, offering better performance than hosted solutions.

### Container Technology

**Docker** revolutionizes application deployment by packaging applications and dependencies into lightweight, portable containers that share the host operating system kernel.

**Dockerfile** scripts define container build processes:

```dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

**Docker Compose** orchestrates multi-container applications:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - database
  database:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: secret
```

### Kubernetes Orchestration

**Kubernetes** provides enterprise-grade container orchestration, managing containerized applications across clusters of machines.

**Kubernetes Clusters** consist of control plane nodes (managing cluster state) and worker nodes (running application containers).

**Pods** represent the smallest deployable units, containing one or more containers that share networking and storage.

**Kubelet** agents run on each worker node, ensuring containers remain healthy and communicating with the control plane.

**Nodes** provide the compute resources for running containerized workloads, whether physical machines or virtual instances.

```yaml
# Pod Definition Example
apiVersion: v1
kind: Pod
metadata:
  name: web-server
spec:
  containers:
  - name: nginx
    image: nginx:1.20
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi" 
        cpu: "500m"
```

### Architectural Patterns

**Monolithic Architecture** builds applications as single deployable units, simpler to develop and test but potentially harder to scale specific components.

**Microservices Architecture** decomposes applications into small, independent services communicating through well-defined APIs, enabling independent scaling and development.

**Inheritance** in object-oriented programming enables code reuse through class hierarchies, while **Sandboxing** provides isolated execution environments for security.

---

## Putting It All Together

We've reached the end of our five-part journey through system design! From networking protocols to deployment strategies, we've covered the essential building blocks of modern distributed systems. Let's recap the key principles that should guide your system design decisions:

### Core Principles to Remember

1. **Start Simple**: Begin with monolithic designs and evolve to distributed architectures as needed. Facebook served 100 million users with a PHP monolith—your weekend project doesn't need microservices yet.

2. **Plan for Failure**: Assume components will fail and design systems accordingly. Networks partition, disks fail, processes crash—build redundancy and graceful degradation into your architecture.

3. **Measure Performance**: Use metrics and monitoring to identify bottlenecks. Don't optimize prematurely, but instrument everything so you know where to optimize when the time comes.

4. **Cache Strategically**: Implement caching at multiple levels for optimal performance—from browser caches to CDNs to application-level caches to database query caches.

5. **Security First**: Build security into system design from the beginning. Use HTTPS everywhere, implement proper authentication and authorization, encrypt sensitive data, and apply rate limiting.

6. **Monitor Everything**: Maintain visibility into system behavior and performance through comprehensive logging, metrics collection, and alerting.

### The Journey Continues

The journey of mastering system design involves continuous learning, practical experience, and adapting to new technologies and challenges. The fundamentals we've covered provide a solid foundation for tackling real-world distributed system challenges:

- **Part 1** taught you how machines communicate through networking protocols
- **Part 2** showed you how to connect them efficiently with load balancers and caches
- **Part 3** explored where to store data using various database systems
- **Part 4** revealed how to scale beyond single servers through replication and sharding
- **Part 5** brought it all together with deployment strategies and operational practices

Remember: the best system design isn't the most sophisticated—it's the one that solves real user problems reliably, efficiently, and maintainably. Build for today's needs while keeping tomorrow's growth in mind, but don't over-engineer for imaginary scale.

Now go build something amazing!


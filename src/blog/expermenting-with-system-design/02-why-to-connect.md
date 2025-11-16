---
title: "Why to connect?"
date: 2025-07-01
description: Exploring the infrastructure patterns that power high-performance systems - from load balancers and proxies to caching strategies and content delivery networks.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'load-balancing', 'caching', 'cdn', 'performance']
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

Now comes the exciting part: **scaling those connections** to handle real-world traffic.

When your application grows beyond a single server, you need strategies to distribute load, cache frequently accessed data, and serve content efficiently to users around the globe. This is where load balancers, proxies, caching layers, and CDNs come into play. Let's explore how these components transform simple client-server communication into robust, high-performance systems.

## Caching Strategies

### Caching Fundamentals

**Caching** involves storing frequently accessed data in faster storage mediums to improve retrieval times. Caches can store network request responses, computational results, or any frequently accessed information.

> **Cache Staleness:** Data in caches can become outdated when the primary data source updates without corresponding cache updates.

### Cache Operations

**Cache Hit** occurs when requested data exists in the cache, providing fast data retrieval.

**Cache Miss** happens when requested data isn't found in the cache, requiring retrieval from the primary data source and potentially indicating system issues or poor cache design.

### Cache Management

**Cache Eviction Policies** determine which data gets removed when cache capacity is reached:

- **LRU (Least Recently Used)**: Removes the oldest accessed items
- **FIFO (First In, First Out)**: Removes items in arrival order
- **LFU (Least Frequently Used)**: Removes least accessed items

```python
# Example LRU Cache Implementation
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key in self.cache:
            # Move to end (most recently used)
            value = self.cache.pop(key)
            self.cache[key] = value
            return value
        return None
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.pop(key)
        elif len(self.cache) >= self.capacity:
            # Remove least recently used
            self.cache.popitem(last=False)
        self.cache[key] = value
```

### Content Delivery Networks

**Content Delivery Networks (CDNs)** function as geographically distributed cache systems that store content closer to end users. CDN servers (Points of Presence) dramatically reduce latency compared to requesting data from distant origin servers.

Popular CDN providers include Cloudflare and Google Cloud CDN, offering global infrastructure for content distribution.

## Proxies and Load Balancing

### Proxy Types

**Forward Proxies** act on behalf of clients, typically used to mask client identities or implement corporate firewalls. Traffic flows: Client → Forward Proxy → Internet → Server.

**Reverse Proxies** act on behalf of servers, commonly used for logging, load balancing, and caching. Traffic flows: Client → Internet → Reverse Proxy → Server.

**Nginx** (pronounced "engine X") serves as a popular web server frequently deployed as a reverse proxy and load balancer.

### Load Balancing Strategies

**Load Balancers** distribute incoming traffic across multiple servers, improving system reliability and performance. They can operate at various system levels, from DNS to database layers.

**Server Selection Strategies:**

- **Round-Robin**: Distributes requests sequentially across servers
- **Random Selection**: Assigns requests randomly to available servers  
- **Performance-Based**: Routes to servers with best performance metrics
- **IP-Based Routing**: Directs traffic based on client IP addresses

```python
# Simple Round-Robin Load Balancer
class RoundRobinBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.current = 0
    
    def get_server(self):
        server = self.servers[self.current]
        self.current = (self.current + 1) % len(self.servers)
        return server
```

**Hot Spots** occur when workload distribution becomes uneven, causing some servers to receive disproportionately more traffic. This often results from suboptimal sharding keys or hash functions.

## Hashing and Consistent Hashing

### Hash Functions

**Hash Functions** transform input data into numerical outputs, with good functions minimizing collisions while maximizing output uniformity.

**Consistent Hashing** minimizes key remapping when hash tables resize, making it ideal for load balancers distributing traffic across servers. It reduces request redistribution when servers are added or removed.

**Rendezvous Hashing** (also called highest random weight hashing) provides another approach to minimize redistribution when servers change.

```python
# Consistent Hashing Implementation
import hashlib
import bisect

class ConsistentHash:
    def __init__(self, nodes=None, replicas=150):
        self.replicas = replicas
        self.ring = {}
        self.sorted_keys = []
        
        if nodes:
            for node in nodes:
                self.add_node(node)
    
    def add_node(self, node):
        for i in range(self.replicas):
            key = self.hash(f"{node}:{i}")
            self.ring[key] = node
            bisect.insort(self.sorted_keys, key)
    
    def remove_node(self, node):
        for i in range(self.replicas):
            key = self.hash(f"{node}:{i}")
            del self.ring[key]
            self.sorted_keys.remove(key)
    
    def get_node(self, key):
        if not self.ring:
            return None
        
        hash_key = self.hash(key)
        idx = bisect.bisect_right(self.sorted_keys, hash_key)
        if idx == len(self.sorted_keys):
            idx = 0
        
        return self.ring[self.sorted_keys[idx]]
    
    def hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)
```

**SHA (Secure Hash Algorithms)** represents industry-standard cryptographic hash functions, with SHA-3 being a popular current choice for system implementations.

## Availability and Reliability

### Availability Metrics

**Availability** represents the probability that a server or service remains operational at any given time, typically expressed as a percentage.

**High Availability (HA)** describes systems maintaining exceptional uptime levels, usually five nines (99.999%) or higher.

**Understanding the "Nines":**
- 99% (two 9s): 87.7 hours downtime per year
- 99.9% (three 9s): 8.8 hours downtime per year  
- 99.99% (four 9s): 52.6 minutes downtime per year
- 99.999% (five 9s): 5.3 minutes downtime per year

### Service Level Management

**Service Level Agreements (SLAs)** represent contractual guarantees provided by service providers to customers, typically covering availability and performance metrics.

**Service Level Objectives (SLOs)** define specific measurable targets that constitute an SLA, providing concrete metrics for service quality.

**Redundancy** involves replicating system components to improve overall reliability, ensuring that single points of failure don't compromise the entire system.

## Communication Patterns

### Polling vs Streaming

**Polling** involves regularly fetching resources at fixed intervals to ensure data freshness, trading increased network traffic for data currency.

**Streaming** maintains persistent connections to receive continuous data feeds, reducing latency but requiring more complex connection management.

**Sockets** provide the underlying mechanism for network communication, acting as file-like interfaces for TCP connections.

### Configuration Management

**Configuration** encompasses the parameters and constants critical to system operation. Configuration can be:

- **Static**: Hard-coded and deployed with application code
- **Dynamic**: Stored externally and modifiable without code changes

**JSON (JavaScript Object Notation)** and **YAML** serve as popular configuration formats:

```json
{
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "myapp"
    },
    "cache": {
        "ttl": 3600,
        "max_size": 1000
    }
}
```

```yaml
database:
  host: localhost
  port: 5432  
  name: myapp
cache:
  ttl: 3600
  max_size: 1000
```

## Rate Limiting and Security

### Rate Limiting Fundamentals

**Rate Limiting** controls the number of requests sent to or from a system, protecting against abuse and ensuring fair resource usage. Implementation can occur at multiple levels:

- IP address level
- User account level  
- Geographic region level
- API endpoint level

Rate limiting can use tiered approaches, such as allowing 1 request per second, 5 per 10 seconds, and 10 per minute.

### Attack Prevention

**Denial of Service (DoS) attacks** attempt to overwhelm systems with excessive traffic, making them unavailable to legitimate users.

**Distributed Denial of Service (DDoS) attacks** coordinate attacks from multiple sources, making them significantly harder to defend against.

```python
# Token Bucket Rate Limiter
import time

class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity
        self.tokens = capacity
        self.refill_rate = refill_rate
        self.last_refill = time.time()
    
    def consume(self, tokens=1):
        self._refill()
        if self.tokens >= tokens:
            self.tokens -= tokens
            return True
        return False
    
    def _refill(self):
        now = time.time()
        tokens_to_add = (now - self.last_refill) * self.refill_rate
        self.tokens = min(self.capacity, self.tokens + tokens_to_add)
        self.last_refill = now
```

---

## What's Next?

We've covered the infrastructure that connects your system components—load balancers that distribute traffic, caches that accelerate responses, proxies that add flexibility, and rate limiters that protect against abuse. These patterns ensure your system can handle traffic efficiently and reliably.

But where does all this data actually live? How do you choose between SQL and NoSQL? When should you use a blob store versus a time-series database? 

In the next article, **"What and How to Store"**, we'll explore the world of data storage—from traditional relational databases with ACID guarantees to specialized systems like graph databases, time-series stores, and distributed file systems. You'll learn about storage performance characteristics, indexing strategies, and how to choose the right storage solution for your specific needs.

## Bye

The journey of mastering system design involves continuous learning, practical experience, and adapting to new technologies and challenges. The fundamentals we've covered provide a solid foundation for tackling real-world distributed system challenges:

- **Part 1** taught you how machines communicate through networking protocols
- **Part 2** showed you how to connect them efficiently with load balancers and caches
- **Part 3** explored where to store data using various database systems
- **Part 4** revealed how to scale beyond single servers through replication and sharding
- **Part 5** brought it all together with deployment strategies and operational practices

Remember: the best system design isn't the most sophisticated—it's the one that solves real user problems reliably, efficiently, and maintainably. Build for today's needs while keeping tomorrow's growth in mind, but don't over-engineer for imaginary scale.

Now go build something amazing!


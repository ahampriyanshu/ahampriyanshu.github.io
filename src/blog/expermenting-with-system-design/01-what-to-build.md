---
title: "What to build?"
date: 2025-07-01
description: Understanding the networking fundamentals that form the foundation of distributed systems - from protocols to packets, and clients to servers.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'networking', 'infrastructure', 'protocols']
pin: true
---

Welcome to the first part of a four-part series exploring system design from the ground up. In this article, I will try my best to share everything I've learned about designing systems since I started my graduation in 2019.

## Disclaimer

From 2019 to 2020, I primarily worked as a freelancer, juggling multiple minor projects or subparts of major ones. From 2020 to 2021, I worked as an <s>underpaid</s> contractual employee in a service-based startup where we built, deployed, and maintained typical web applications. Since 2023, I have been working on creating a new B2B product from scratch.

Everything I write here comes from my personal experience over these 4-5 years (which, let's be honest, is not a lot). So, here is the disclaimer: if you are reading this to as a principal engineer at Google, this is not the right series for you. You should probably look for better sources on the internet. But if you are someone who is new to programming, a junior developer about to design a critical system for your own startup, or even a senior developer who just wants to refresh their memory, then I hope you will like this series. By the end, you should have a good enough understanding to write better prompts so the number of review cycles between you and your agentic IDE is as low as possible.

## What not to build

Thinking about shards, global load balancers, and multiple layers of caching for your brand-new weekend side-project? Odds are your app doesn't need Netflix-level scale just yet. Back in the late 2000s Facebook was already flirting with **100 million** users without aws, docker, kubernetes, micro-services, serverless functions, with just a beefy PHP monolith. The secret sauce wasn't infinite scale, it was raw, low-level engineering. They squeezed every byte of RAM out of Memcached, introduced efficient UDP transport, fixed memory fragmentation, even patched the allocator—because when budget was tighter than latency.

Fast-forward to today—spinning up five managed databases on AWS takes less time than 5 mins, and it's tempting to hide complexity behind yet another serverless layer. But the moral of the story hasn't changed: build something people love first, then scale what actually hurts. Real users beat imaginary edge cases every single sprint.

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

## Virtualization and Containerization

### Virtualization Fundamentals

**Virtual Machines** use software to emulate physical computers, enabling multiple operating systems to run on a single host machine.

**Hypervisors** (Virtual Machine Monitors) create and manage virtual machines, allocating host resources among guest systems.

**Host machines** provide the underlying hardware and hypervisor, while **Guest machines** run as virtualized instances with their own operating systems.

**Bare Metal** virtualization runs directly on hardware without an underlying operating system, offering better performance than hosted solutions.

### Architectural Patterns

**Monolithic Architecture** builds applications as single deployable units, simpler to develop and test but potentially harder to scale specific components.

**Microservices Architecture** decomposes applications into small, independent services communicating through well-defined APIs, enabling independent scaling and development.

**Inheritance** in object-oriented programming enables code reuse through class hierarchies, while **Sandboxing** provides isolated execution environments for security.

### Core Principles to Remember

1. **Start Simple**: Begin with monolithic designs and evolve to distributed architectures as needed. Facebook served 100 million users with a PHP monolith—your weekend project doesn't need microservices yet.

2. **Plan for Failure**: Assume components will fail and design systems accordingly. Networks partition, disks fail, processes crash—build redundancy and graceful degradation into your architecture.

3. **Measure Performance**: Use metrics and monitoring to identify bottlenecks. Don't optimize prematurely, but instrument everything so you know where to optimize when the time comes.

4. **Cache Strategically**: Implement caching at multiple levels for optimal performance—from browser caches to CDNs to application-level caches to database query caches.

5. **Security First**: Build security into system design from the beginning. Use HTTPS everywhere, implement proper authentication and authorization, encrypt sensitive data, and apply rate limiting.

6. **Monitor Everything**: Maintain visibility into system behavior and performance through comprehensive logging, metrics collection, and alerting.

When your application grows beyond a single server, you need strategies to distribute load, cache frequently accessed data, and serve content efficiently to users around the globe. This is where load balancers, proxies, caching layers, and CDNs come into play. Let's explore how these components transform simple client-server communication into robust, high-performance systems.
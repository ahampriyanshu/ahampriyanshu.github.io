---
title: "Why to connect?"
date: 2025-07-01
description: Exploring the infrastructure patterns that power high-performance systems - from load balancers and proxies to caching strategies and content delivery networks.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'load-balancing', 'caching', 'cdn', 'performance']
---

Connecting things is where the magic happens. Welcome to the second part of our system design series! In the first part, we discussed what to build (and what not to). Now, we move to the invisible threads that hold the internet together: **Networking and Connectivity**.

This article covers the plumbing of the internet—from how IP addresses work to how load balancers juggle traffic. It's the difference between a localhost demo and a production system that doesn't crash when your post goes viral on Hacker News. Let's dive in.

## Networking Fundamentals

### Client-Server Architecture

In distributed systems, the **client-server model** forms the foundation of most interactions. A **client** represents any machine or process that requests data or services from another system. Conversely, a **server** is a machine or process that provides data or services to clients, typically by listening for incoming network requests.

> **Note:** A machine can simultaneously function as both a client and a server. For example, a web server might serve requests from browsers while also acting as a client when requesting data from a database.

### Internet Protocol (IP) Fundamentals

**Internet Protocol (IP)** serves as the fundamental communication protocol that defines how machines communicate across networks worldwide. All higher-level protocols like TCP, UDP, and HTTP are built upon this foundation.

#### IP Addressing System

Every device connected to the public internet receives an **IP address** - a unique identifier for routing data packets. IPv4 addresses consist of four numbers separated by dots (a.b.c.d), where each number ranges from 0 to 255.

**Special IP Address Ranges:**
- `127.0.0.1` - Refers to your local machine (localhost)
- `192.168.x.y` - Private network addresses (your home/office network)

```bash
# Check your IP configuration
ipconfig  # Windows
ifconfig  # Linux/Mac
```

#### IPv4 vs IPv6

**IPv4** uses 32-bit addresses and was the first non-experimental version of the Internet Protocol. However, **IPv6** represents the latest evolution, providing a much larger address space to accommodate the growing number of internet-connected devices.

**Dual Stack Implementation** allows devices to run both IPv4 and IPv6 simultaneously, providing flexibility during the transition period.

### Network Protocol Stack

#### OSI Model (7 Layers)

The **Open Systems Interconnection Model** provides a conceptual framework for understanding network communication through seven distinct layers:

1. **Physical Layer (Layer 1)**: Handles the physical transmission of raw bitstreams over physical media like cables and wireless signals
2. **Data Link Layer (Layer 2)**: Manages error-free data transfer between adjacent network nodes, including frame creation and error detection
3. **Network Layer (Layer 3)**: Handles packet routing across multiple networks and manages network congestion
4. **Transport Layer (Layer 4)**: Ensures reliable data transmission between devices with flow control and error recovery
5. **Session Layer (Layer 5)**: Manages connections between applications on different devices
6. **Presentation Layer (Layer 6)**: Handles data translation, formatting, and encryption
7. **Application Layer (Layer 7)**: Provides the interface for applications to access network services

#### TCP/IP Model (4 Layers)

The **TCP/IP model** offers a more practical approach to understanding internet communications:

1. **Link Layer**: Combines OSI layers 1-2, handling physical and logical connections
2. **Internet Layer**: Corresponds to OSI layer 3, managing packet routing and addressing
3. **Transport Layer**: Matches OSI layer 4, providing reliable data transmission
4. **Application Layer**: Encompasses OSI layers 5-7, handling all application-level functions

### Transport Layer Protocols

#### Transmission Control Protocol (TCP)

**TCP** provides reliable, ordered data delivery between machines through connection-oriented communication. It implements several crucial features:

- **Flow Control**: Prevents the sender from overwhelming the receiver
- **Congestion Control**: Manages network traffic to prevent network collapse
- **Error Detection**: Uses checksums to ensure data integrity
- **Segmentation**: Breaks large data into manageable segments

**TCP Three-Way Handshake Process:**
```
1. Client → Server: SYN (synchronize)
2. Server → Client: SYN-ACK (synchronize-acknowledge)
3. Client → Server: ACK (acknowledge)
[Connection Established]
```

#### User Datagram Protocol (UDP)

While TCP prioritizes reliability, **UDP** offers faster, connectionless communication suitable for applications where speed matters more than guaranteed delivery.

### Application Layer Protocols

#### HyperText Transfer Protocol (HTTP)

**HTTP** powers the World Wide Web, enabling communication between web browsers and servers. A typical HTTP request includes:

```http
GET /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer token123
```

**HTTP Response Structure:**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234

{"users": [...]}
```

#### HTTPS and Security

**HTTPS** extends HTTP with **Transport Layer Security (TLS)**, providing encrypted communication that protects against man-in-the-middle attacks. It requires servers to have trusted SSL certificates from recognized certificate authorities.

#### Other Essential Protocols

**Simple Mail Transfer Protocol (SMTP)** standardizes email transmission across networks, enabling reliable email delivery regardless of underlying hardware differences.

**File Transfer Protocol (FTP)** facilitates file transfers between computers over TCP/IP connections, with one computer acting as the local host and another as the remote host.

**Address Resolution Protocol (ARP)** maps dynamic IP addresses to permanent physical MAC addresses within local area networks, translating between 32-bit IP addresses and 48-bit MAC addresses.

**Internet Control Message Protocol (ICMP)** helps network devices diagnose communication issues and determine whether data reaches its intended destination in a timely manner.

### Network Components and Concepts

#### MAC Addresses and Data Link Layer

**Media Access Control (MAC) addresses** serve as unique identifiers for network interface cards. These 48-bit hexadecimal numbers (formatted as XX:XX:XX:XX:XX:XX) enable communication at the Data Link Layer of the OSI model.

**Logical Link Control (LLC)** manages communication between network devices as a sublayer of the Data Link Layer, providing error control, flow control, and multiplexing capabilities.

#### Network Infrastructure

**Ethernet** remains the traditional technology for connecting devices in local and wide area networks, providing a standardized protocol for device communication.

**Network switches** forward data packets directly between devices rather than broadcasting to entire networks like hubs, supporting both hardware-based physical networks and software-based virtual implementations.

#### Data Transmission Concepts

**Encapsulation** occurs when data travels down the TCP/IP protocol stack, with each layer adding header information to the actual data payload.

**Decapsulation** reverses this process, removing the encapsulated layers to extract the original data at the destination.

**IP packets** represent the smallest data transmission units, consisting of an IP header (containing source/destination addresses and routing information) and a payload (the actual data being transmitted).

**Ethernet frames** carry data over Ethernet networks, with sizes ranging from 64 bytes to 1,518 bytes depending on the payload size.

### Network Performance and Diagnostics

#### Key Metrics

**Maximum Transmission Unit (MTU)** defines the largest packet size that can be transmitted over a network. Ethernet typically uses 1500-byte packets as the maximum allowed size.

**Round Trip Time (RTT)** measures network latency by calculating the time between sending a request and receiving a response, including propagation delays across all network hops.

**Ping** utility measures communication latency between networks, helping determine network health and performance characteristics.

#### Network Addressing and Resolution

**Private IP addresses** serve internal networks and aren't directly accessible from the internet, typically assigned by routers using Network Address Translation (NAT).

**Public IP addresses** are assigned by Internet Service Providers and enable direct internet communication for publicly accessible devices.

**DNS Lookup (nslookup)** queries DNS servers to retrieve records associated with domain names, including IP address information.

## What's Next?

Now that we've laid the groundwork with networking fundamentals—understanding how machines communicate, what protocols govern their interactions, and how data travels across the internet—we're ready to explore the next critical piece: **connectivity at scale**.

In the next article, **"What and How to Connect"**, we'll dive into the infrastructure patterns that power modern web applications. You'll learn how load balancers distribute traffic across multiple servers, how caching strategies dramatically improve performance, what role proxies play in your architecture, and how Content Delivery Networks bring your content closer to users worldwide.

These patterns transform simple client-server communication into robust, high-performance systems that can serve millions of users. See you in Part 2!

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

- **Part 1** taught you what to build (and what not to).
- **Part 2** showed you how to connect them efficiently with load balancers and caches.
- **Part 3** will explore where to store data using various database systems.
- **Part 4** will reveal how to scale beyond single servers through replication and sharding.

Remember: the best system design isn't the most sophisticated—it's the one that solves real user problems reliably, efficiently, and maintainably. Build for today's needs while keeping tomorrow's growth in mind, but don't over-engineer for imaginary scale.

Now go build something amazing!


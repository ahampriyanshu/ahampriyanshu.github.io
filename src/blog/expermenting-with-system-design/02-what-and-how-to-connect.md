---
title: "What and How to Connect"
date: 2025-07-01
description: Exploring the infrastructure patterns that power high-performance systems - from load balancers and proxies to caching strategies and content delivery networks.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'load-balancing', 'caching', 'cdn', 'performance']
---

Welcome back to our system design series! In Part 1, we explored the networking fundamentals—the protocols, addressing, and communication patterns that enable machines to talk to each other. Now comes the exciting part: **scaling those connections** to handle real-world traffic.

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

The journey continues in Part 3!


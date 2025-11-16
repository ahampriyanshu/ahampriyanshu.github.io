---
title: "When to scale?"
date: 2025-07-01
description: Exploring the patterns and algorithms that enable systems to scale beyond single servers - from replication strategies to distributed consensus and massive data processing.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'scaling', 'distributed-systems', 'replication', 'sharding']
---

Welcome to Part 4 of our system design series! So far, we've built the foundation: networking fundamentals, connectivity patterns, and storage systems. Now comes the real challenge: **scaling beyond a single server**.

When your application outgrows one machine, you enter the fascinating world of distributed systems. How do you replicate data across multiple servers? How do you partition massive datasets? How do multiple machines agree on who's in charge? And how do you process terabytes of data efficiently? These are the questions we'll answer in this article.

## Replication and Sharding

### Replication Strategies

**Replication** involves duplicating data across multiple database servers to improve redundancy, reduce latency, and increase read throughput.

**Master-Slave Replication:**
```
Master Database (writes) → Slave Database 1 (reads)
                       → Slave Database 2 (reads)  
                       → Slave Database 3 (reads)
```

**Master-Master Replication:**
```
Master A ↔ Master B
   ↓         ↓
Slave A1   Slave B1
```

### Sharding (Data Partitioning)

**Sharding** splits databases into smaller pieces to increase throughput and manage larger datasets.

**Common Sharding Strategies:**

- **Geographic Sharding**: Partition by user location
- **Functional Sharding**: Separate by data type (users vs. orders)
- **Hash-Based Sharding**: Use hash functions for even distribution

```python
# Hash-based Sharding Example
def get_shard(user_id, num_shards=4):
    return f"shard_{hash(user_id) % num_shards}"

# Geographic Sharding Example  
def get_geographic_shard(user_location):
    region_shards = {
        'us-east': 'shard_us_east',
        'us-west': 'shard_us_west', 
        'europe': 'shard_europe',
        'asia': 'shard_asia'
    }
    return region_shards.get(user_location, 'shard_default')
```

## Leader Election and Consensus

### Distributed Coordination

**Leader Election** enables nodes in a distributed cluster to select a designated leader responsible for coordinating cluster operations. Proper implementation ensures all nodes know the current leader and can elect a new one when necessary.

**Consensus Algorithms** help multiple entities agree on shared data values, such as determining cluster leadership.

**Paxos and Raft** represent two popular consensus algorithms that enable synchronized operations across distributed systems when implemented correctly.

Both **Etcd** and **ZooKeeper** provide leader election capabilities through their strongly consistent, highly available key-value stores.

## Peer-to-Peer Networks

### Distributed Computing Models

**Peer-to-Peer Networks** enable machines to share workloads directly without centralized coordination, often improving performance for tasks like file distribution.

**Gossip Protocols** allow machines to communicate in an uncoordinated manner, spreading information throughout a cluster without requiring centralized data sources.

This contrasts with the traditional **Client-Server Model** where clients request services from dedicated servers.

## MapReduce and Distributed Processing

### MapReduce Framework

**MapReduce** enables efficient processing of massive datasets across distributed clusters through three phases:

1. **Map Phase**: Transforms data chunks into intermediate key-value pairs
2. **Shuffle Phase**: Reorganizes pairs so matching keys reach the same machine  
3. **Reduce Phase**: Processes grouped key-value pairs into final results

The classic MapReduce example involves counting word occurrences in large text files.

```python
# Word Count MapReduce Example
def map_function(document):
    """Map phase: emit (word, 1) for each word"""
    words = document.split()
    return [(word.lower(), 1) for word in words]

def reduce_function(word, counts):
    """Reduce phase: sum all counts for each word"""
    return (word, sum(counts))
```

### Distributed File Systems

**Distributed File Systems** abstract large machine clusters into unified file systems. Popular implementations include Google File System (GFS) and Hadoop Distributed File System (HDFS).

These systems provide:
- Automatic replication for availability
- Transparent scaling across machines
- Fault tolerance through redundancy
- Efficient handling of very large files

**Hadoop** serves as a popular open-source framework supporting MapReduce jobs and other data processing pipelines, with HDFS as its core storage component.

## Security and Encryption

### Encryption Methods

**Symmetric Encryption** uses a single key for both encryption and decryption, requiring secure key sharing between communicating parties. These algorithms typically offer better performance than asymmetric alternatives.

**Advanced Encryption Standard (AES)** represents the gold standard in symmetric encryption, even used by the U.S. National Security Agency for top-secret information.

```python
# AES Symmetric Encryption Example
from cryptography.fernet import Fernet

# Generate key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt
encrypted_data = cipher_suite.encrypt(b"Secret message")
# Decrypt
decrypted_data = cipher_suite.decrypt(encrypted_data)
```

**Asymmetric Encryption** (public-key cryptography) uses mathematically related key pairs - a public key for encryption and a private key for decryption. While slower than symmetric encryption, it eliminates the key distribution problem.

### HTTPS and TLS

**HTTPS** extends HTTP with Transport Layer Security, providing encrypted communication that prevents man-in-the-middle attacks.

**SSL Certificates** contain server public keys and are digitally signed by trusted Certificate Authorities, confirming that public keys belong to their claimed owners.

**TLS Handshake Process:**
1. Client sends random bytes and supported cipher suites
2. Server responds with random bytes, chosen cipher, and SSL certificate
3. Client verifies certificate and sends encrypted pre-master secret
4. Both sides generate identical session keys for symmetric encryption
5. Encrypted communication begins using symmetric keys

### Access Control

**Access Control Lists (ACLs)** define user permissions within systems, specifying which users can perform which operations on specific resources.

## Monitoring and Observability

### Observability Pillars

**Logging** involves collecting and storing detailed event information, typically outputting to STDOUT or STDERR for centralized aggregation.

**Monitoring** provides visibility into key system metrics through automated collection and human-readable visualizations.

**Alerting** notifies administrators when critical issues occur, typically triggered by threshold violations on monitoring charts.

```python
# Structured Logging Example
import logging
import json

logger = logging.getLogger(__name__)

def process_order(order_id, user_id):
    logger.info("Order processing started", extra={
        'order_id': order_id,
        'user_id': user_id,
        'event_type': 'order_start'
    })
    
    try:
        # Process order
        result = charge_payment(order_id)
        logger.info("Order completed successfully", extra={
            'order_id': order_id,
            'payment_id': result.payment_id,
            'event_type': 'order_complete'
        })
    except Exception as e:
        logger.error("Order processing failed", extra={
            'order_id': order_id,
            'error': str(e),
            'event_type': 'order_error'
        })
        raise
```

---

## What's Next?

You've now mastered the art of scaling—from replicating databases across regions to sharding massive datasets, from electing leaders in distributed clusters to processing terabytes of data with MapReduce. These patterns enable systems to grow from serving hundreds of users to serving millions.

But there's one critical piece remaining: **how do you actually deploy and operate these complex distributed systems?** How do containers make deployment consistent? What role does Kubernetes play in managing clusters? How do you coordinate concurrent processes safely? And what operating system concepts do you need to understand?

In our final article, **"What and How to Deploy"**, we'll explore the operational side of system design. You'll learn about containerization with Docker, orchestration with Kubernetes, operating system fundamentals like processes and threads, and the architectural patterns that tie everything together. This is where theory meets practice.

See you in the final part of this series!


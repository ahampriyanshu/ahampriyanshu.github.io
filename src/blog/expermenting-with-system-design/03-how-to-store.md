---
title: "How to store?"
date: 2025-07-01
description: A comprehensive exploration of storage systems from RAM to disk, relational to NoSQL databases, and specialized stores for every data need.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'databases', 'storage', 'sql', 'nosql']
---

Welcome to Part 3 of our system design series! We've covered networking fundamentals and connectivity patterns—now it's time to tackle one of the most critical decisions in system architecture: **where and how to store your data**.

Every application needs to persist data, but the options are vast and often overwhelming. Should you use SQL or NoSQL? What about blob storage for images? When does a time-series database make sense? In this article, we'll explore the storage landscape, from the performance characteristics of different storage mediums to the strengths and trade-offs of various database systems.

## Storage Systems and Performance

### Storage Hierarchy

Understanding storage performance characteristics is crucial for system design decisions:

**Performance Latency Comparison:**
- Reading 1 MB from RAM: 250 μs (0.25 ms)
- Reading 1 MB from SSD: 1,000 μs (1 ms)  
- Transfer 1 MB over Network: 10,000 μs (10 ms)
- Reading 1 MB from HDD: 20,000 μs (20 ms)
- Inter-Continental Round Trip: 150,000 μs (150 ms)

### Memory vs Storage

**Random Access Memory (RAM)** provides the fastest data access but is volatile - data disappears when the process terminates. RAM serves as the computer's short-term memory for active data processing.

**Disk storage** includes both Hard Disk Drives (HDDs) and Solid State Drives (SSDs). While slower than RAM, disk storage is non-volatile, meaning data persists through power failures and system crashes.

**SSD vs HDD Trade-offs:**
- SSDs offer significantly faster access times but cost more per gigabyte
- HDDs provide cheaper storage for infrequently accessed data
- SSDs are ideal for frequently accessed and updated data
- HDDs work well for long-term archival storage

**Persistent storage** refers to any storage medium that retains data even when the managing process terminates, ensuring data durability across system failures.

### Database Systems

**Databases** serve as specialized programs designed for two core functions: recording data and querying data. They typically operate as long-running servers that communicate with applications through network protocols built on TCP or HTTP.

Some databases operate entirely in memory for maximum speed, with users accepting the risk of data loss if the system fails. However, most production databases require persistence, necessitating disk storage to maintain permanent records even when individual machines fail.

### System Performance Concepts

**Latency** measures the time required for specific operations to complete within a system, typically expressed in milliseconds or seconds.

**Throughput** quantifies the number of operations a system can handle per unit time, often measured in requests per second (RPS) or queries per second (QPS).

**Processes** represent currently running programs on a machine. In large-scale systems, you must assume any process can terminate unexpectedly at any time.

## Database Systems

### Relational Databases

**Relational databases** organize data in tabular formats and support powerful querying through SQL (Structured Query Language). They excel at maintaining data consistency and supporting complex relationships.

**SQL databases** support SQL for data manipulation, though the terms "relational database" and "SQL database" are often used interchangeably.

#### ACID Properties

**ACID transactions** ensure database reliability through four key properties:

- **Atomicity**: All transaction operations succeed together or fail together
- **Consistency**: Transactions maintain database validity and integrity
- **Isolation**: Concurrent transactions don't interfere with each other
- **Durability**: Committed transactions persist despite system failures

```sql
-- Example ACID Transaction
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

#### Database Indexing

**Database indexes** dramatically improve query performance by creating auxiliary data structures that enable faster data retrieval. While they speed up reads, indexes slightly slow write operations since both the table and indexes must be updated.

```sql
-- Create index for faster lookups
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_date ON orders(created_date);
```

**Strong Consistency** ensures that all database reads return the most recent write, maintaining ACID transaction guarantees.

**Eventual Consistency** allows temporary inconsistencies, guaranteeing that the system will become consistent within a specified timeframe.

**PostgreSQL** exemplifies a robust relational database implementing ACID transactions and supporting a dialect of SQL called PostgreSQL.

### NoSQL Databases

**NoSQL databases** provide alternatives to relational structures, offering flexibility for different data models and scaling patterns.

#### Key-Value Stores

**Key-Value stores** offer simple, flexible NoSQL databases often used for caching and dynamic configuration.

**Redis** operates as an in-memory key-value store, providing extremely fast access while offering optional persistence. It's commonly used for caching and rate limiting.

**Etcd** serves as a strongly consistent, highly available key-value store frequently used for leader election and distributed configuration.

**ZooKeeper** provides another strongly consistent key-value solution, often used for configuration management and leader election in distributed systems.

```python
# Redis Example
import redis

r = redis.Redis(host='localhost', port=6379, db=0)
r.set('user:123', '{"name": "John", "email": "john@example.com"}')
user_data = r.get('user:123')
```

### Specialized Storage Systems

#### Blob Storage

**Blob storage** handles large binary objects like images, videos, and backups. Unlike traditional databases, blob stores organize data by object names rather than complex queries.

Blob storage typically requires significant infrastructure, making cloud solutions like **Google Cloud Storage (GCS)** and **Amazon S3** popular choices for most organizations.

```python
# S3 Blob Storage Example
import boto3

s3 = boto3.client('s3')
s3.upload_file('local_file.jpg', 'my-bucket', 'images/user-123.jpg')
```

#### Time Series Databases

**Time Series Databases (TSDBs)** optimize for storing and analyzing time-indexed data, making them ideal for monitoring, IoT data, and financial applications.

**InfluxDB** provides a popular open-source time series database with powerful querying capabilities.

**Prometheus** specializes in monitoring and alerting, offering both time series storage and a complete monitoring ecosystem.

```sql
-- InfluxDB Query Example
SELECT mean("cpu_usage") FROM "system" 
WHERE time >= now() - 1h 
GROUP BY time(5m)
```

#### Graph Databases

**Graph databases** excel at storing and querying data with complex relationships, using nodes and edges to represent connections.

**Neo4j** leads the graph database market, storing data as nodes, relationships, properties, and labels.

**Cypher** serves as the query language for graph databases, often simpler than equivalent SQL for relationship queries.

```cypher
// Find friends of friends
MATCH (user:Person {name: "Alice"})-[:FRIEND]->(friend)-[:FRIEND]->(fof)
WHERE fof <> user
RETURN DISTINCT fof.name
```

#### Spatial Databases

**Spatial databases** optimize for geographic and location-based data, using specialized indexes like **quadtrees** for efficient spatial queries.

**Quadtrees** recursively subdivide 2D space into four quadrants, enabling fast location-based searches in log₄(n) time.

## Messaging and Event-Driven Architecture

### Publish/Subscribe Pattern

**Pub/Sub messaging** decouples publishers from subscribers, enabling scalable event-driven architectures. Publishers send messages to topics without knowing who will consume them, while subscribers listen to relevant topics.

Modern Pub/Sub systems provide powerful guarantees:
- At-least-once delivery
- Message persistence
- Ordered delivery
- Message replay capabilities

**Apache Kafka** offers a distributed messaging system originally created by LinkedIn, excelling in streaming scenarios.

**Google Cloud Pub/Sub** provides a highly scalable managed messaging service with delivery guarantees and message rewinding capabilities.

### Idempotent Operations

**Idempotent operations** produce the same result regardless of how many times they're executed. This property becomes crucial in Pub/Sub systems where messages might be delivered multiple times.

```python
# Non-idempotent (problematic)
def increment_counter(user_id):
    counter = get_counter(user_id)
    set_counter(user_id, counter + 1)  # Repeated calls cause issues

# Idempotent (safe)
def set_status_complete(order_id):
    set_order_status(order_id, "COMPLETE")  # Safe to repeat
```

---

## What's Next?

You've now explored the storage layer—from understanding the performance characteristics of RAM versus disk, to choosing between relational and NoSQL databases, to specialized systems for graphs, time-series data, and blobs. These are the building blocks for persisting and retrieving your application's data.

But here's the challenge: what happens when your data grows beyond what a single database server can handle? How do you ensure your data remains available even when servers fail? How do you process massive datasets efficiently across distributed clusters?

In the next article, **"What and How to Scale"**, we'll tackle these questions head-on. You'll learn about replication strategies for redundancy, sharding techniques for handling massive datasets, distributed consensus algorithms like Paxos and Raft, and MapReduce for processing data at scale. These patterns transform single-server databases into robust, globally distributed data systems.

The scaling strategies await in Part 4!


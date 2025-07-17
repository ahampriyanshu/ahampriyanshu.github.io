---
title: "System Design & Infrastructure Glossary"
author: ahampriyanshu
categories: [System Design, Infrastructure]
excerpt: "A comprehensive glossary covering system design fundamentals, infrastructure concepts, and distributed systems architecture"
tags: [system-design, infrastructure, distributed-systems, glossary]
---


> This glossary serves as a comprehensive reference for system design and infrastructure concepts. Each term includes practical examples and implementation details.

## Table of Contents
- [Networking Fundamentals](#networking-fundamentals)
- [System Architecture](#system-architecture)
- [Data Storage](#data-storage)
- [Performance & Scalability](#performance--scalability)
- [Security](#security)
- [Infrastructure & Operations](#infrastructure--operations)

---

## Networking Fundamentals

### Core Protocols

#### TCP/IP Stack
The foundation of internet communication, consisting of four layers:

```
Application Layer  | HTTP, HTTPS, FTP, SMTP
Transport Layer    | TCP, UDP
Network Layer      | IP, ICMP, ARP
Link Layer         | Ethernet, WiFi
```

> **Note**: TCP provides reliable, ordered delivery while UDP offers faster, connectionless communication.

#### HTTP/HTTPS
**HTTP** (HyperText Transfer Protocol) enables web communication between clients and servers.

```http
GET /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer token123
```

**HTTPS** adds encryption through TLS/SSL certificates for secure communication.

#### IP Addressing
- **IPv4**: 32-bit addresses (e.g., `192.168.1.1`)
- **IPv6**: 128-bit addresses for expanded address space
- **Private Networks**: `192.168.x.x`, `10.x.x.x`, `172.16-31.x.x`

### Network Performance

#### Latency Benchmarks
Understanding typical latency helps in system design decisions:

```
RAM access:           ~100 ns
SSD read (1KB):       ~150 μs
Network (same DC):    ~500 μs
HDD seek:             ~10 ms
Cross-continent:      ~150 ms
```

#### Bandwidth vs Latency
- **Bandwidth**: Amount of data transferred per unit time
- **Latency**: Time for a single request to complete
- **Throughput**: Actual data processed considering system limitations

---

## System Architecture

### Scalability Patterns

#### Horizontal vs Vertical Scaling

**Vertical Scaling (Scale Up)**
```yaml
Before: 1 server × 8GB RAM
After:  1 server × 32GB RAM
```

**Horizontal Scaling (Scale Out)**
```yaml
Before: 1 server × 8GB RAM
After:  4 servers × 8GB RAM each
```

> **Tip**: Horizontal scaling provides better fault tolerance but requires stateless application design.

#### Load Balancing

**Round Robin**
```python
servers = ['server1', 'server2', 'server3']
current = 0

def get_server():
    global current
    server = servers[current % len(servers)]
    current += 1
    return server
```

**Weighted Round Robin**
```python
servers = [
    {'name': 'server1', 'weight': 3},
    {'name': 'server2', 'weight': 2},
    {'name': 'server3', 'weight': 1}
]
```

#### Service Architecture

**Monolithic Architecture**
- Single deployable unit
- Shared database
- Simple deployment but limited scalability

**Microservices Architecture**
```yaml
User Service:     Port 3001
Order Service:    Port 3002
Payment Service:  Port 3003
API Gateway:      Port 8080
```

### Messaging & Communication

#### Synchronous Communication
```javascript
// REST API call
const response = await fetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify(orderData)
});
```

#### Asynchronous Communication
```python
# Message Queue Example
import pika

# Publisher
channel.basic_publish(
    exchange='orders',
    routing_key='process',
    body=json.dumps(order_data)
)

# Consumer
def process_order(ch, method, properties, body):
    order = json.loads(body)
    # Process order logic
    ch.basic_ack(delivery_tag=method.delivery_tag)
```

---

## Data Storage

### Database Types

#### Relational Databases (SQL)
Structured data with ACID properties and complex relationships.

```sql
-- Example: User orders with joins
SELECT u.name, o.total, p.name as product
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at > '2024-01-01';
```

**Popular Options**: PostgreSQL, MySQL, SQLite

#### NoSQL Databases

**Document Stores**
```javascript
// MongoDB example
{
  "_id": "user123",
  "name": "John Doe",
  "preferences": {
    "theme": "dark",
    "notifications": true
  },
  "orders": [
    {"id": "order1", "total": 99.99},
    {"id": "order2", "total": 149.99}
  ]
}
```

**Key-Value Stores**
```python
# Redis example
redis.set("user:123:session", "abc-def-ghi", ex=3600)
redis.get("user:123:session")
```

**Graph Databases**
```cypher
// Neo4j Cypher query
MATCH (user:User)-[:FRIENDS_WITH]->(friend:User)
WHERE user.name = "Alice"
RETURN friend.name
```

### Data Partitioning

#### Sharding Strategies

**Horizontal Sharding**
```python
def get_shard(user_id):
    return f"shard_{user_id % 4}"

# user_id 1001 → shard_1
# user_id 1002 → shard_2
```

**Vertical Sharding**
```yaml
User Service DB:     user_profiles, user_auth
Order Service DB:    orders, order_items
Product Service DB:  products, inventory
```

#### Replication

**Master-Slave Replication**
```
Master DB (Write) → Slave DB 1 (Read)
                 → Slave DB 2 (Read)
                 → Slave DB 3 (Read)
```

**Master-Master Replication**
```
Master DB 1 ←→ Master DB 2
(Writes)       (Writes)
```

---

## Performance & Scalability

### Caching Strategies

#### Cache Levels
```
Browser Cache → CDN → Application Cache → Database Cache
```

#### Cache Patterns

**Cache-Aside (Lazy Loading)**
```python
def get_user(user_id):
    # Check cache first
    user = cache.get(f"user:{user_id}")
    if user:
        return user
    
    # Cache miss - fetch from database
    user = database.get_user(user_id)
    cache.set(f"user:{user_id}", user, ttl=3600)
    return user
```

**Write-Through**
```python
def update_user(user_id, data):
    # Update database
    database.update_user(user_id, data)
    # Update cache
    cache.set(f"user:{user_id}", data, ttl=3600)
```

#### Cache Eviction Policies
- **LRU** (Least Recently Used): Remove oldest accessed items
- **LFU** (Least Frequently Used): Remove least accessed items
- **TTL** (Time To Live): Remove expired items

### Content Delivery

#### CDN (Content Delivery Network)
```
User Request → Nearest CDN Edge → Origin Server (if cache miss)
```

Benefits:
- Reduced latency
- Decreased server load
- Improved availability

---

## Security

### Authentication & Authorization

#### JWT (JSON Web Tokens)
```javascript
// JWT Structure
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user123",
    "exp": 1640995200,
    "role": "admin"
  },
  "signature": "..."
}
```

#### OAuth 2.0 Flow
```
Client → Authorization Server → Resource Server
```

### Encryption

#### Symmetric Encryption (AES)
```python
from cryptography.fernet import Fernet

# Generate key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt
encrypted = cipher.encrypt(b"sensitive data")

# Decrypt
decrypted = cipher.decrypt(encrypted)
```

#### Asymmetric Encryption (RSA)
```python
# Public key encrypts, private key decrypts
public_key, private_key = generate_key_pair()
encrypted = encrypt_with_public_key(data, public_key)
decrypted = decrypt_with_private_key(encrypted, private_key)
```

### Network Security

#### HTTPS/TLS Handshake
1. Client Hello (supported ciphers)
2. Server Hello (chosen cipher + certificate)
3. Key Exchange (pre-master secret)
4. Session Keys Generation

#### Rate Limiting
```python
# Token bucket algorithm
class RateLimiter:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # bucket size
        self.tokens = capacity
        self.last_update = time.time()
    
    def allow_request(self):
        now = time.time()
        # Add tokens based on time elapsed
        self.tokens = min(
            self.capacity,
            self.tokens + (now - self.last_update) * self.rate
        )
        self.last_update = now
        
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
```

---

## Infrastructure & Operations

### Virtualization & Containers

#### Virtual Machines vs Containers
```
VM Architecture:
Hardware → Hypervisor → Guest OS → Application

Container Architecture:
Hardware → Host OS → Container Runtime → Application
```

#### Docker Basics
```dockerfile
# Dockerfile example
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  database:
    image: postgres:13
    environment:
      - POSTGRES_PASSWORD=secret
```

#### Kubernetes Concepts
```yaml
# Pod definition
apiVersion: v1
kind: Pod
metadata:
  name: web-app
spec:
  containers:
  - name: app
    image: myapp:v1
    ports:
    - containerPort: 3000
```

### Monitoring & Observability

#### Key Metrics (SLI/SLO)
```yaml
Availability SLO: 99.9% uptime
Latency SLO:      95% requests < 100ms
Throughput SLO:   Handle 10k requests/minute
```

#### The Three Pillars
1. **Metrics**: Quantitative measurements
2. **Logs**: Event records
3. **Traces**: Request flow tracking

### Reliability Patterns

#### Circuit Breaker
```python
class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.state = 'CLOSED'  # CLOSED, OPEN, HALF_OPEN
        self.last_failure_time = None
    
    def call(self, func, *args, **kwargs):
        if self.state == 'OPEN':
            if time.time() - self.last_failure_time > self.timeout:
                self.state = 'HALF_OPEN'
            else:
                raise Exception("Circuit breaker is OPEN")
        
        try:
            result = func(*args, **kwargs)
            self.failure_count = 0
            self.state = 'CLOSED'
            return result
        except Exception as e:
            self.failure_count += 1
            if self.failure_count >= self.failure_threshold:
                self.state = 'OPEN'
                self.last_failure_time = time.time()
            raise e
```

#### Retry with Exponential Backoff
```python
import time
import random

def retry_with_backoff(func, max_retries=3, base_delay=1):
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise e
            
            # Exponential backoff with jitter
            delay = base_delay * (2 ** attempt) + random.uniform(0, 1)
            time.sleep(delay)
```

### Deployment Strategies

#### Blue-Green Deployment
```
Blue Environment (Current)  → Load Balancer
Green Environment (New)     → Testing
```

#### Canary Deployment
```
95% traffic → Stable version
 5% traffic → New version (canary)
```

#### Rolling Deployment
```python
# Kubernetes rolling update
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
```

---

## System Design Patterns

### Consistency Models

#### CAP Theorem
In distributed systems, you can guarantee at most 2 of:
- **Consistency**: All nodes see the same data
- **Availability**: System remains operational
- **Partition tolerance**: System continues despite network failures

#### ACID vs BASE

**ACID** (Strong Consistency)
- **Atomicity**: All or nothing
- **Consistency**: Valid state always
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed data persists

**BASE** (Eventual Consistency)
- **Basically Available**: System available most of the time
- **Soft state**: Data may be inconsistent temporarily
- **Eventually consistent**: System becomes consistent over time

### Communication Patterns

#### Request-Response
```javascript
// Synchronous
const result = await apiCall();

// Asynchronous with callback
apiCall((error, result) => {
    if (error) handleError(error);
    else handleResult(result);
});
```

#### Publish-Subscribe
```python
# Publisher
publisher.publish('user-events', {
    'type': 'user_created',
    'user_id': 12345,
    'timestamp': '2024-01-01T12:00:00Z'
})

# Subscriber
def handle_user_event(message):
    if message['type'] == 'user_created':
        send_welcome_email(message['user_id'])
```

---

## Performance Optimization

### Database Optimization

#### Indexing Strategies
```sql
-- B-tree index for equality and range queries
CREATE INDEX idx_user_email ON users(email);

-- Composite index for multiple columns
CREATE INDEX idx_order_user_date ON orders(user_id, created_at);

-- Partial index for specific conditions
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';
```

#### Query Optimization
```sql
-- Bad: N+1 query problem
SELECT * FROM users;
-- Then for each user:
SELECT * FROM orders WHERE user_id = ?;

-- Good: Single join query
SELECT u.*, o.*
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

### Application Performance

#### Connection Pooling
```python
# Database connection pool
pool = psycopg2.pool.SimpleConnectionPool(
    minconn=1,
    maxconn=20,
    host='localhost',
    database='mydb'
)

def execute_query(query):
    conn = pool.getconn()
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        return cursor.fetchall()
    finally:
        pool.putconn(conn)
```

#### Asynchronous Processing
```python
# Celery task queue
from celery import Celery

app = Celery('tasks', broker='redis://localhost:6379')

@app.task
def send_email(user_id, email_type):
    # Heavy email processing
    user = get_user(user_id)
    template = get_email_template(email_type)
    send_email_via_smtp(user.email, template)

# Non-blocking call
send_email.delay(user_id=123, email_type='welcome')
```

---

> **Final Note**: This glossary covers fundamental concepts in system design and infrastructure. Each topic can be explored deeper based on specific use cases and requirements.

## Further Reading

- [High Scalability](http://highscalability.com/)
- [AWS Architecture Center](https://aws.amazon.com/architecture/)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)


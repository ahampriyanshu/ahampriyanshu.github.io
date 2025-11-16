---
title: "What to build?"
date: 2025-07-01
description: Understanding the networking fundamentals that form the foundation of distributed systems - from protocols to packets, and clients to servers.
categories: ["Experimenting With System Design"]
tags: ['system-design', 'networking', 'infrastructure', 'protocols']
pin: true
---

Thinking about shards, global load balancers, and fourteen layers of caching for your brand-new weekend side-project? Hold that thought! Odds are your app doesn't need Netflix-level scale just yet. Remember: back in the mid-2000s Facebook was already flirting with **100 million** users without aws, docker, kubernetes, micro-services, serverless redis, or cloud functions in sight—just a beefy PHP monolith. The secret sauce wasn't infinite scale; it was actual engineering. They squeezed every byte of RAM out of Memcached, introduced efficient UDP transport, fixed memory fragmentation, even patched the allocator—because when budget was tighter than latency.

Fast-forward to today—spinning up five managed databases on AWS takes less time than 5 mins, and it's tempting to hide complexity behind yet another serverless layer. But the moral of the story hasn't changed: build something people love first, then scale what actually hurts. Real users beat imaginary edge cases every single sprint.

With that reality check out of the way, let's dive into the fun stuff! This is the first part of a five-part series exploring system design from the ground up. In this article, we'll explore the networking fundamentals that underpin every distributed system—the protocols, addressing schemes, and communication patterns that make the internet work.

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

---

## What's Next?

Now that we've laid the groundwork with networking fundamentals—understanding how machines communicate, what protocols govern their interactions, and how data travels across the internet—we're ready to explore the next critical piece: **connectivity at scale**.

In the next article, **"What and How to Connect"**, we'll dive into the infrastructure patterns that power modern web applications. You'll learn how load balancers distribute traffic across multiple servers, how caching strategies dramatically improve performance, what role proxies play in your architecture, and how Content Delivery Networks bring your content closer to users worldwide.

These patterns transform simple client-server communication into robust, high-performance systems that can serve millions of users. See you in Part 2!


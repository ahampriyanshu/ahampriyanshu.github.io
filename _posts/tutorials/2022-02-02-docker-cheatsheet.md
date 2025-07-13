---
title: "Docker Cheat Sheet"
author: ahampriyanshu
excerpt: Handy commands for Docker
categories: [Tutorials]
tags: [tutorials, docker, containers, devops]
---

## Installing Docker

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io

# CentOS/RHEL
sudo yum install docker

# Arch/Manjaro
sudo pacman -S docker

# macOS (using Homebrew)
brew install --cask docker

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group (no sudo needed)
sudo usermod -aG docker $USER
```

## Docker Basics

### Container Lifecycle

```bash
# Run a container
docker run hello-world

# Run container interactively
docker run -it ubuntu:latest /bin/bash

# Run container in background (detached)
docker run -d nginx

# Run container with custom name
docker run --name my-nginx -d nginx

# Run container with port mapping
docker run -p 8080:80 -d nginx

# Run container with volume mounting
docker run -v /host/path:/container/path -d nginx

# Run container with environment variables
docker run -e ENV_VAR=value -d nginx
```

### Container Management

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a running container
docker stop container-name

# Start a stopped container
docker start container-name

# Restart a container
docker restart container-name

# Remove a container
docker rm container-name

# Remove all stopped containers
docker container prune

# Force remove a running container
docker rm -f container-name
```

### Container Information

```bash
# View container logs
docker logs container-name

# Follow logs in real-time
docker logs -f container-name

# Execute command in running container
docker exec -it container-name /bin/bash

# Inspect container details
docker inspect container-name

# View container resource usage
docker stats

# View container processes
docker top container-name
```

---

## Docker Images

### Image Management

```bash
# List local images
docker images

# Pull image from registry
docker pull ubuntu:latest

# Search for images
docker search nginx

# Remove an image
docker rmi image-name

# Remove all unused images
docker image prune

# Remove all images
docker rmi $(docker images -q)

# Tag an image
docker tag source-image:tag target-image:tag
```

### Building Images

```bash
# Build image from Dockerfile
docker build -t my-app:latest .

# Build with specific Dockerfile
docker build -f Dockerfile.prod -t my-app:prod .

# Build without cache
docker build --no-cache -t my-app:latest .

# Build with build arguments
docker build --build-arg VERSION=1.0 -t my-app:latest .
```

### Registry Operations

```bash
# Push image to registry
docker push username/image:tag

# Pull specific version
docker pull nginx:1.19

# Login to registry
docker login

# Logout from registry
docker logout

# Tag for different registry
docker tag my-app:latest registry.example.com/my-app:latest
```

---

## Docker Volumes

### Volume Operations

```bash
# Create volume
docker volume create my-volume

# List volumes
docker volume ls

# Inspect volume
docker volume inspect my-volume

# Remove volume
docker volume rm my-volume

# Remove all unused volumes
docker volume prune

# Mount volume to container
docker run -v my-volume:/app/data -d my-app
```

### Bind Mounts

```bash
# Mount host directory to container
docker run -v /host/path:/container/path -d my-app

# Mount current directory
docker run -v $(pwd):/app -d my-app

# Read-only mount
docker run -v /host/path:/container/path:ro -d my-app
```

---

## Docker Networking

### Network Management

```bash
# List networks
docker network ls

# Create custom network
docker network create my-network

# Remove network
docker network rm my-network

# Inspect network
docker network inspect my-network

# Connect container to network
docker network connect my-network container-name

# Disconnect container from network
docker network disconnect my-network container-name
```

### Network Types

```bash
# Run container on specific network
docker run --network my-network -d nginx

# Run container with custom hostname
docker run --hostname my-host -d nginx

# Run container with host networking
docker run --network host -d nginx

# Run container with no networking
docker run --network none -d nginx
```

---

## Docker Compose

### Basic Operations

```bash
# Start services defined in docker-compose.yml
docker-compose up

# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Build services
docker-compose build

# View running services
docker-compose ps

# View service logs
docker-compose logs service-name

# Follow logs
docker-compose logs -f service-name
```

### Service Management

```bash
# Scale service
docker-compose up --scale web=3

# Restart service
docker-compose restart service-name

# Stop specific service
docker-compose stop service-name

# Remove stopped containers
docker-compose rm

# Execute command in service
docker-compose exec service-name /bin/bash
```

### Development Workflow

```bash
# Use different compose file
docker-compose -f docker-compose.dev.yml up

# Override compose file
docker-compose -f docker-compose.yml -f docker-compose.override.yml up

# Build and start
docker-compose up --build

# Recreate containers
docker-compose up --force-recreate
```

---

## Dockerfile Commands

### Basic Instructions

```dockerfile
# Set base image
FROM ubuntu:latest

# Set working directory
WORKDIR /app

# Copy files
COPY . /app

# Add files (with URL and tar support)
ADD https://example.com/file.tar.gz /app/

# Run commands
RUN apt-get update && apt-get install -y python3

# Set environment variables
ENV NODE_ENV=production

# Expose ports
EXPOSE 80

# Set default command
CMD ["python3", "app.py"]

# Set entrypoint
ENTRYPOINT ["python3"]

# Set user
USER nobody

# Add metadata
LABEL version="1.0"
LABEL description="My application"
```

### Multi-stage Builds

```dockerfile
# Build stage
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

- Difference between COPY and ADD
    - COPY is used to copy files and directories from the build context to the image.
    - ADD is used to copy files and directories from the build context to the image. It also supports URLs and tar files.   

- Difference between CMD and RUN
    - RUN executes during the build process. It is used to install dependencies and run commands. 
    - CMD executes when the container starts. Only the last CMD in a Dockerfile takes effect.

---

## System Management

### System Information

```bash
# View Docker version
docker --version

# View system information
docker info

# View disk usage
docker system df

# Show detailed disk usage
docker system df -v

# View real-time events
docker events

# View Docker daemon logs
journalctl -u docker.service
```

### Cleanup Operations

```bash
# Remove all unused objects
docker system prune

# Remove all unused objects including volumes
docker system prune -a --volumes

# Remove unused images
docker image prune -a

# Remove unused containers
docker container prune

# Remove unused networks
docker network prune

# Remove unused volumes
docker volume prune
```

---

## Troubleshooting

### Common Issues

```bash
# Check container exit code
docker inspect container-name --format='{{.State.ExitCode}}'

# View container configuration
docker inspect container-name

# Check resource constraints
docker stats container-name

# View container processes
docker exec container-name ps aux

# Check network connectivity
docker exec container-name ping google.com

# View mounted volumes
docker inspect container-name | grep -A 5 Mounts
```

### Debugging Commands

```bash
# Run container with debugging
docker run -it --rm ubuntu:latest /bin/bash

# Override entrypoint for debugging
docker run -it --entrypoint /bin/bash my-app

# View container filesystem changes
docker diff container-name

# Export container as tar
docker export container-name > container.tar

# Import container from tar
docker import container.tar my-app:latest

# Save image as tar
docker save my-app:latest > my-app.tar

# Load image from tar
docker load < my-app.tar
```

### Performance Monitoring

```bash
# Monitor container resources
docker stats --no-stream

# View container processes
docker top container-name

# Check container health
docker inspect container-name | grep -A 5 Health

# View container logs with timestamps
docker logs -t container-name

# Limit log output
docker logs --tail 50 container-name
```

---

## Security Best Practices

### Container Security

```bash
# Run container as non-root user
docker run --user 1000:1000 -d my-app

# Run container with read-only filesystem
docker run --read-only -d my-app

# Set resource limits
docker run --memory=512m --cpus=1 -d my-app

# Drop capabilities
docker run --cap-drop ALL --cap-add NET_BIND_SERVICE -d my-app

# Use security profiles
docker run --security-opt seccomp=default.json -d my-app
```

### Image Security

```bash
# Scan image for vulnerabilities
docker scan my-app:latest

# Use official base images
FROM ubuntu:latest  # Official Ubuntu image

# Keep images minimal
FROM alpine:latest  # Minimal Alpine Linux

# Update base image regularly
RUN apt-get update && apt-get upgrade -y
```

---

## Useful Docker Options

### Common Flags

- `--rm` - Automatically remove container when it exits
- `--name` - Assign name to container
- `-d` - Run container in background (detached)
- `-it` - Interactive mode with TTY
- `-p` - Publish container port to host
- `-v` - Mount volume
- `-e` - Set environment variable
- `--network` - Connect to specific network
- `--restart` - Restart policy (no, on-failure, always, unless-stopped)

### Useful Aliases

```bash
# Add to ~/.bashrc or ~/.zshrc
alias dps='docker ps'
alias dimg='docker images'
alias dlog='docker logs'
alias dexec='docker exec -it'
alias dstop='docker stop $(docker ps -q)'
alias dclean='docker system prune -f'
```

---

## Docker Compose YAML Examples

### Basic Web Application

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/app
    environment:
      - DEBUG=1
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Multi-service Application

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web

  web:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      - NODE_ENV=production
    depends_on:
      - redis
      - db

  redis:
    image: redis:alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  redis_data:
  postgres_data:

networks:
  default:
    driver: bridge
```



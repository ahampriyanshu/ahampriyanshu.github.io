---
title: Deploying MERN app on AWS with NGINX and PM2
author: ahampriyanshu
excerpt: Complete guide to deploy a mern app on aws/godaddy vps
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials]
image:
  src: /images/tutorials/mern.png
  width: 1000
  height: 400
  alt: loading
---

## ssh into the server:

```bash
Updating the system

sudo apt update -y

sudo apt upgrade -y
```

## Dependencies

```bash
sudo apt install git wget

NodeJS and NPM via NVM

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install node

node --version && npm --version
```

### Nginx

```bash
sudo apt install nginx -y

sudo ufw app list

sudo ufw enable

sudo ufw status

sudo ufw allow 'Nginx Full'

sudo ufw allow 'OpenSSH'
```

### MongoDB

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

sudo apt update -y

sudo apt install mongodb-org

sudo systemctl enable mongod

sudo systemctl status mongod

Setting up our MERN application

cd ~

git clone https://github.com/<username>/<repo>.git

cd <app_name>

npm i
```

## Configuring NGINX

```bash
cd /etc/nginx/sites-available/

sudo vim /etc/nginx/sites-available/domain.com

sudo ln -s /etc/nginx/sites-available/domain.com /etc/nginx/sites-enabled/

sudo systemctl reload nginx

sudo systemctl restart nginx

sudo systemctl status nginx
```

## Configuring the MERN application

```bash
cd <app_name>

node <server_file>.js

## SSL using certbot

sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d example.com -d www.example.com

sudo certbot renew --dry-run
```

## Using PM2 to run multiple cluster in production mode

##

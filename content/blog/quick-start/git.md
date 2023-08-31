---
title: "Git Cheat Sheet"
author: ahampriyanshu
excerpt: Installing and using LaTeX
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials]
image:
  src: /images/tutorials/git.png
  width: 1000
  height: 400
  alt: loading
---

## What is Git ?

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### Installing git

```bash
sudo apt install git      [ Debian/Ubuntu ]
sudo yum install git      [ RedHat/CentOS ]
sudo pacman -S git        [ Arch/Manjaro ]
sudo dnf install git      [ Fedora ]
sudo zypper install git   [ OpenSUSE ]
sudo brew install git     [ MacOS ]
```

### Configuring username, email, editor

```bash
$ git config --global user.name "Priyanshu Tiwari"
```

```bash
$ git config --global user.email "ahampriyanshu@gmail.com"
```

### Intializing local git repo

### Creating upstream to the remote repo

### Cloning remote repo

### Working with branches

### Commiting changes

### Pushing changes

### Fixing conflicts

### Merging and deleting branch

### Undoing bad commits

### Rewriting commit history

## What is Github

> GitHub, Inc. is a provider of Internet hosting for software development and version control using Git owned by Microsoft.

### Adding ssh key

```bash
ssh-keygen -t ed25519 -C "email"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub
```

### Adding gpg key

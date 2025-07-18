---
title: "Git Cheat Sheet"
author: ahampriyanshu
excerpt: Comprehensive Git and GitHub commands
categories: [Tutorials]
tags: [tutorials, git, github, version control]
---

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

```bash
$ git config --global core.editor "vim"
```

### Common Git Workflows

#### Standard

```bash
git clone <repository-url>
git checkout -b <branch-name>
git add .
git commit -m "Commit message"
git push origin <branch-name>
```

#### Squashing Commits

```bash
git rebase -i HEAD~3
```

#### Stashing Changes

```bash
git stash
```

```bash
git stash list
git stash apply stash@{0..n}
```

#### Rebasing Workflow

```bash
git checkout feature/new-feature
git rebase main
git checkout main
git merge feature/new-feature
```

#### Feature Branch Workflow
```bash
git checkout -b feature/new-feature
# Make changes and commits
git push -u origin feature/new-feature
# Create pull request
git checkout main
git pull origin main
git merge feature/new-feature
git branch -d feature/new-feature
```

#### Triggering a build

```bash
git commit --allow-empty -m "Trigger build"
git push
```

### Troubleshooting

```bash
# Check Git version
git --version

# Check configuration
git config --list

# Get help
git help command-name

# Check remote repositories
git remote -v

# Fetch without merge
git fetch origin

# Clean untracked files
git clean -f

# Clean untracked directories
git clean -fd
```

### Creating upstream to the remote repo

```bash
# Add remote origin
git remote add origin https://github.com/username/repository.git

# Or using SSH
git remote add origin git@github.com:username/repository.git

# View remotes
git remote -v

# Change remote URL
git remote set-url origin https://github.com/username/new-repository.git
```

### Cloning remote repo

```bash
# Clone via HTTPS
git clone https://github.com/username/repository.git

# Clone via SSH
git clone git@github.com:username/repository.git

# Clone specific branch
git clone -b branch-name https://github.com/username/repository.git

# Clone with different folder name
git clone https://github.com/username/repository.git my-folder
```

### Working with branches

```bash
# List all branches
git branch -a

# Create new branch
git branch new-feature

# Switch to branch
git checkout new-feature

# Create and switch to new branch
git checkout -b new-feature

# Switch to main/master branch
git checkout main

# Delete branch locally
git branch -d branch-name

# Delete branch forcefully
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name

# Rename current branch
git branch -m new-name
```

### Commiting changes

```bash
# Check status
git status

# Add specific files
git add file1.txt file2.txt

# Add all changes
git add .

# Add all tracked files
git add -u

# Commit with message
git commit -m "Add new feature"

# Commit all tracked changes
git commit -a -m "Update existing files"

# Amend last commit
git commit --amend -m "Updated commit message"

# Interactive staging
git add -i
```

### Pushing changes

```bash
# Push to remote repository
git push origin main

# Push new branch to remote
git push -u origin new-feature

# Push all branches
git push --all

# Push tags
git push --tags

# Force push (use with caution)
git push --force

# Push specific tag
git push origin tag-name
```

### Fixing conflicts

```bash
# View conflicts
git status

# Manual resolution - edit files, then:
git add conflicted-file.txt
git commit -m "Resolve merge conflict"

# Use merge tool
git mergetool

# Abort merge
git merge --abort

# Show differences
git diff
git diff --staged
```

### Merging and deleting branch

```bash
# Merge branch into current branch
git merge feature-branch

# Merge without fast-forward
git merge --no-ff feature-branch

# Squash merge
git merge --squash feature-branch

# Delete merged branch
git branch -d feature-branch

# Delete unmerged branch (force)
git branch -D feature-branch

# Delete remote branch
git push origin --delete feature-branch
```

### Undoing bad commits

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo multiple commits
git reset --hard HEAD~3

# Revert specific commit
git revert commit-hash

# Revert without creating commit
git revert --no-commit commit-hash

# Reset to specific commit
git reset --hard commit-hash

# Unstage files
git reset HEAD file.txt
```

### Rewriting commit history

```bash
# Interactive rebase last 3 commits
git rebase -i HEAD~3

# Rebase onto main
git rebase main

# Squash last 3 commits
git reset --soft HEAD~3
git commit -m "Squashed commit message"

# Change commit message
git commit --amend -m "New commit message"

# Cherry-pick specific commit
git cherry-pick commit-hash

# Stash changes
git stash
git stash pop
git stash list
git stash drop
```

### Viewing history and logs

```bash
# View commit history
git log

# View compact log
git log --oneline

# View graph
git log --graph --oneline

# View specific file history
git log -p filename

# View commits by author
git log --author="Author Name"

# View commits in date range
git log --since="2023-01-01" --until="2023-12-31"

# Show specific commit
git show commit-hash
```

### Working with tags

```bash
# Create lightweight tag
git tag v1.0

# Create annotated tag
git tag -a v1.0 -m "Version 1.0"

# List tags
git tag

# Push tags
git push origin v1.0
git push --tags

# Delete tag locally
git tag -d v1.0

# Delete tag remotely
git push origin --delete v1.0
```

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

```bash
# Generate GPG key
gpg --full-generate-key

# List GPG keys
gpg --list-secret-keys --keyid-format LONG

# Export GPG key
gpg --armor --export KEY_ID

# Configure git to use GPG key
git config --global user.signingkey KEY_ID
git config --global commit.gpgsign true

# Sign commits
git commit -S -m "Signed commit"
```

### GitHub CLI commands

```bash
# Install GitHub CLI
sudo apt install gh      [ Debian/Ubuntu ]
brew install gh          [ MacOS ]

# Login to GitHub
gh auth login

# Clone repository
gh repo clone username/repository

# Create repository
gh repo create repository-name

# Create pull request
gh pr create --title "Title" --body "Description"

# List pull requests
gh pr list

# View issues
gh issue list

# Create issue
gh issue create --title "Issue title" --body "Issue description"
```

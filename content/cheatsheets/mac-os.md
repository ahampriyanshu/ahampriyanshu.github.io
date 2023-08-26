---
title: Setting up MacOS
author: ahampriyanshu
excerpt: Things to do after installing MacOS
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, macos, darwin, tutorials]
image:
  src: /images/tutorials/manjaro.png
  width: 1000
  height: 400
  alt: loading
---

## Basic Setup

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew update

brew install git vim go python

curl https://bootstrap.pypa.io/get-pip.py > get-pip.py

sudo python get-pip.py
```

## Installing node

```bash
brew install nvm

nvm install node

npm i yarn -g
```

### To use legacy versions of node

- For a session

```bash
nvm install v1X.XX.X
nvm use v1X.XX.X
```

- Changing the default node version

```bash
nvm default alias v1X.XX.X
```

## Installing postgres

```bash
brew install postgres

brew services enable postgresql

brew services start postgresql
```

## Installing mysql

```bash
brew install mysql

brew services enable mysql

brew services start mysql
```

## Configuring git

```bash
ssh-keygen -t ed25519 -C "ahampriyanshu@gmail.com"

eval "$(ssh-agent -s)"

vim ~/.ssh/config
```

Paste the following

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

```bash
ssh-add -K ~/.ssh/id_ed25519

pbcopy < ~/.ssh/id_ed25519.pub
```

[Add the new shh key](https://github.com/settings/ssh/new)

```
git config --global user.name "ahampriyanshu"

git config --global user.email "ahampriyanshu@gmail.com"
```

## Switching to zsh

```bash
brew install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

chsh -s `which zsh`

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

source ~/.zshrc

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install
```

## Utilities

```bash
brew install --cask visual-studio-code

npm i -g nodemon

pip3 install youtube-dl orange3
```

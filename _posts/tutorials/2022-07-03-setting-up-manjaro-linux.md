---
title: Setting up Manjaro Linux
author: ahampriyanshu
excerpt: Things to do after installing Manjaro Linux
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials]
image:
  src: /images/tutorials/manjaro.png
  width: 1000
  height: 400
  alt: loading
---

## Basic Setup

```bash
sudo pacman -Syu

sudo pacman -S --needed base-devel git vim noto-fonts-emoji

git clone https://aur.archlinux.org/yay-git.git

cd yay-git

makepkg -sri

sudo pacman -S snapd
```

* Menu > Appearance >  Change Theme > ``adwaita-dark``

* Menu > Keyboard > shortcuts > ``ctrl + alt + t = terminal`` 

## Installing node 

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

nvm install node
```

## Installing mongodb

```bash
sudo yay -S mongodb-bin

sudo systemctl enable mongodb

sudo systemctl start mongodb
```

## Installing postgres

```bash
sudo pacman -S postgresql

initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data/'

sudo systemctl enable postgresql

sudo systemctl start postgresql
```

## Installing docker

```bash
sudo pacman -S docker

sudo systemctl enable docker

sudo systemctl start docker

sudo usermod -aG docker $USER

docker login
```

## Configuring git

```bash
ssh-keygen -t ed25519 -C "ahampriyanshu@gmail.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub

git config --global user.name "ahampriyanshu"

git config --global user.email "ahampriyanshu@gmail.com"

npm i -g diff-so-fancy

git config --global core.pager "diff-so-fancy | less --tabs=4 -RFX"

git config --global interactive.diffFilter "diff-so-fancy --patch"

git config --global color.ui true
```

## Switching to zsh

```bash
sudo pacman -S zsh

chsh -s `which zsh`

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install
```

## Utilities

```bash
sudo pacman -Sy vlc qbittorent bat 

yay -S google-chrome visual-studio-code brave telegram-desktop slack-desktop

npm i -g nodemon
```
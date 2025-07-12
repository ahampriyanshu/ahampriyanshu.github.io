---
title: Setting up Manjaro Linux
author: ahampriyanshu
excerpt: Things to do after installing Manjaro Linux
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, manjaro, linux, tutorials]
---

## Basic Setup

```bash
sudo pacman -Syu

sudo pacman -S --needed base-devel git vim noto-fonts-emoji python-pip
```

### Gnome

> Change the scaling factor, if using small screen with small pixel resolution.
> {: .prompt-tip }

```
sudo pacman -S gnome-tweaks
```

> To enable Media Transfer Protocol (This may help if you have trouble connecting your Android device)
> {: .prompt-tip }

```
sudo pacman -S gvfs-mtp
```

Enable gnome-extensions and install

- [Gnome Clipboard](https://extensions.gnome.org/extension/4422/gnome-clipboard/)
- [Net speed Simplified ](https://extensions.gnome.org/extension/3724/net-speed-simplified/)
- [Bluetooth battery indicator ](https://extensions.gnome.org/extension/3991/bluetooth-battery/)

- Settings > Appearance > Style > Dark

- Settings > Keyboard > Shortcuts > Custom Shortcuts
  - `ctrl` + `alt` + `t` -> `gnome-terminal`
  - `ctrl` + `alt` + `c` -> `google-chrome-stable`
  - `ctrl` + `alt` + `f` -> `nautilus`

> To prevent grouping of chrome/vscode/xyz windows together
> {: .prompt-tip }

- Settings > Keyboard > Shortcuts > Switch Windows > Alt + Tab

### KDE

- Menu > Appearance > Change Theme > `adwaita-dark`

* Settings > Keyboard > Shortcuts >
  - `ctrl` + `alt` + `t` -> `terminal`
  - `ctrl` + `alt` + `c` -> `google-chrome-stable`
  - `ctrl` + `alt` + `f` -> `dolphin`

## Installing yay

```bash
git clone https://aur.archlinux.org/yay-git.git

cd yay-git

makepkg -sri
```

## Installing snap

```bash
sudo pacman -S snapd

sudo systemctl enable --now snapd.socket

sudo systemctl start --now snapd.socket

sudo ln -s /var/lib/snapd/snap /snap
```

## Installing node

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

nvm install node

npm i -g yarn nodemon
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

## Installing mongodb

```bash
yay -S mongodb-bin

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
```

[Add the new shh key](https://github.com/settings/ssh/new)

```
git config --global user.name "ahampriyanshu"

git config --global user.email "ahampriyanshu@gmail.com"
```

## Switching to zsh

```bash
sudo pacman -S zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

chsh -s `which zsh`

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install
```

Add these to plugins list in `~/.zshrc`:

```
plugins=(git zsh-autosuggestions zsh-syntax-highlighting pip colorize)
```

## Utilities

```bash
sudo pacman -S vlc qbittorrent

yay -S google-chrome visual-studio-code-bin telegram-desktop slack-desktop

npm i -g nodemon

pip3 install youtube-dl orange3
```

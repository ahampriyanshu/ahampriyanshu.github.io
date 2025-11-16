---
title: Setting up my workstation
date: 2019-09-02
description: Things I do to while setting up my workstation
categories: ["Scripts"]
tags: ['setup', 'linux', 'mac', 'windows']
---

This page collects my workstation setup commands grouped by activity, with OS‑specific instructions for Manjaro Linux, macOS, and Windows.

## Basic Setup

### Manjaro Linux

```bash
sudo pacman -Syu
sudo pacman -S --needed base-devel git vim noto-fonts-emoji python-pip
```

To enable Media Transfer Protocol (this may help if you have trouble connecting your Android device):

```bash
sudo pacman -S gvfs-mtp
```

To prevent grouping of chrome/vscode/xyz windows together:

Settings > Keyboard > Shortcuts > Switch Windows > <kbd>alt</kbd> + <kbd>tab</kbd>

#### Gnome

1. Change the scaling factor, if using a small screen with high pixel density:

```bash
sudo pacman -S gnome-tweaks
```

Enable gnome-extensions and install:

- [Gnome Clipboard](https://extensions.gnome.org/extension/4422/gnome-clipboard/)
- [Net speed Simplified](https://extensions.gnome.org/extension/3724/net-speed-simplified/)
- [Bluetooth battery indicator](https://extensions.gnome.org/extension/3991/bluetooth-battery/)
- Settings > Appearance > Style > Dark
- Settings > Keyboard > Shortcuts > Custom Shortcuts
  - <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>t</kbd> &rarr; gnome-terminal
  - <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>c</kbd> &rarr; google-chrome-stable
  - <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>f</kbd> &rarr; nautilus

#### KDE

- Menu > Appearance > Change Theme > `adwaita-dark`
- Settings > Keyboard > Shortcuts >
  - <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>t</kbd> &rarr; terminal
  - <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>c</kbd> &rarr; google-chrome-stable
  - <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>f</kbd> &rarr; dolphin

### macOS

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew install git vim go python
curl https://bootstrap.pypa.io/get-pip.py > get-pip.py
sudo python get-pip.py
```

### Installing Git

- Execute `choco install git` or download and run the latest [installer](https://git-scm.com/download/win).

## Package Manager

### Manjaro Linux

#### Installing yay

```bash
git clone https://aur.archlinux.org/yay-git.git
cd yay-git
makepkg -sri
```

#### Installing snap

```bash
sudo pacman -S snapd
sudo systemctl enable --now snapd.socket
sudo systemctl start --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
```

### Windows

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;
[System.Net.ServicePointManager]::SecurityProtocol =
  [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

## Installing node

### Manjaro Linux

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install node
npm i -g yarn nodemon
```

### macOS

```bash
brew install nvm
nvm install node
npm i yarn -g
```

#### To use legacy versions of node

- For a session:

```bash
nvm install v1X.XX.X
nvm use v1X.XX.X
```

- Changing the default node version:

```bash
nvm default alias v1X.XX.X
```

### Windows

After installing Chocolatey:

```sh
choco install nodejs-lts
node -v
npm -v
```

You can then install common global tools:

```sh
npm install -g yarn nodemon
```

## Installing postgres

### Manjaro Linux

```bash
sudo pacman -S postgresql
initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data/'
sudo systemctl enable postgresql
sudo systemctl start postgresql
```

### macOS

```bash
brew install postgres
brew services enable postgresql
brew services start postgresql
```

### Windows

After installing Chocolatey:

```sh
choco install postgresql
```

Alternatively, download and run the latest [installer](https://www.postgresql.org/download/windows/), then verify:

```sh
psql --version
```

## Installing MongoDB

### Manjaro Linux

```bash
sudo pacman -S mongodb
sudo systemctl enable mongodb
sudo systemctl start mongodb
```

### macOS

```bash
brew install mongodb
brew services enable mongodb
brew services start mongodb
```


### Windows

```sh
choco install mongodb-cli.install
```

## Installing Docker

```bash
sudo pacman -S docker
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
docker login
```

## Installing MySQL

### Manjaro Linux

```bash
sudo pacman -S mysql
sudo systemctl enable mysql
sudo systemctl start mysql
```

### MacOS

```bash
brew install mysql
brew services enable mysql
brew services start mysql
```

## Installing Git

```bash
ssh-keygen -t ed25519 -C "ahampriyanshu@gmail.com"

eval "$(ssh-agent -s)"

vim ~/.ssh/config
```

Paste the following:

```text
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

### Utilities

```bash
brew install --cask visual-studio-code

npm i -g nodemon

pip3 install youtube-dl orange3
```

#### Installing VSCode

- Download and run the latest [installer](https://code.visualstudio.com/docs/?dv=win).
- Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools), [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go), [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell), [Better Code](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments), [Github Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme), [ThunderClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).

#### Installing Chrome

- Execute `choco install chrome` or download and run the latest [installer](https://www.google.com/chrome/).
- Add [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd), [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [JSON Viewer Pro](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc), [ChroPath](https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo), [ColorPick](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg), [Honey](https://chrome.google.com/webstore/detail/honey-automatic-coupons-r/bmnlcjabgnpnenekpadlanbbkooimhnj).


## Git

```bash
ssh-keygen -t ed25519 -C "ahampriyanshu@gmail.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub
```

Create a [new ssh key](https://github.com/settings/ssh/new)

Setup a global git config

```bash
git config --global user.name "ahampriyanshu"

git config --global user.email "ahampriyanshu@gmail.com"
```

## Terminal Setup

```bash
sudo pacman -S zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

chsh -s `which zsh`

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install
```

Add these to plugins list in `~/.zshrc`

```
plugins=(git zsh-autosuggestions zsh-syntax-highlighting pip colorize)
```

Reload the shell:

```bash
source ~/.zshrc
```

## Utilities

### Manjaro Linux

```bash
sudo pacman -S vlc qbittorrent
yay -S google-chrome visual-studio-code-bin telegram-desktop slack-desktop
npm i -g nodemon
pip3 install youtube-dl orange3
```

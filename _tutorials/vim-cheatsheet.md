---
title: "Vim Cheat Sheet"
author: Priyanshu Tiwari
excerpt: Vim Plugins and Keybindings
image: 
  thumbnail: /images/tutorials/git.png
  caption: vim-cheatsheet
---

## What is Vim ?

> Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is an improved fork of vi.

## Installation

```bash
sudo apt install vim      [ Debian/Ubuntu ]
sudo yum install vim      [ RedHat/CentOS ]
sudo pacman -S vim        [ Arch/Manjaro ]
sudo dnf install vim      [ Fedora ]
sudo zypper install vim   [ OpenSUSE ]
```

## Keybindings

## Plugins

To install vim plugins, I prefer [vim-plug](https://github.com/junegunn/vim-plug).

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

```
iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
    ni $HOME/vimfiles/autoload/plug.vim -Force
```

Then append the following section to your .vimrc file.

```bash
call plug#begin('~/.vim/plugged')

Plug 'user/repo'
OR
Plug 'git URL'

call plug#end()
```

| Command | Usage |
| -- | -- |
| :PlugInstall | Installs a plugins |
| :PlugUninstall | Uninstalls a plugins |
| :PlugUpdate | Updates a plugins |
| :PlugStatus | View the current status |
| :PlugUpgrade | Updates vim-plug |

### Some Awesome Plugins


## Resources

* [my .vimrc](https://gist.github.com/ahampriyanshu/27044cee6455ecd566f340b99f7595c3)
* [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
* [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

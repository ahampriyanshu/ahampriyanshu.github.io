---
title: Vim Cheat Sheet
author: Priyanshu Tiwari
excerpt: Vim Plugins and Keybindings
image: 
  thumbnail: /images/tutorials/vim.png
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

### Basics 

| | |
| -- | -- |
| :q | Exit |
| :q! / ZQ | Forceful exit |
| :wq / :x / ZZ  | Save and exit |
| :qa | Exit all |
| :w | Save |
| Esc / Ctrl + [ | Enter command mode |
| . | Repeat last command |
| u | Undo |
| Ctrl + r | Redo |
| :<num> / <num>G | Jump to <num>th line |

### Movement

| | |
| -- | -- |
| j | Move cursor down |
| k | Move cursor up |
| h | Move cursor left |
| l | Move cursor right |
| H | Move to top of screen |
| M | Move to middle of sreen |
| L | Move to end of screen |
| zz | Move to center of the screen |
| zt | Scroll current line to top of the page |
| zb | Scroll current line to bottom of the page |
| G | Move to end of the file |
| gg | Move to top of the file |
| g_ | Move to the last non-blank line of the file |
| 0 | Jump to the start of the line |
| ^ | Jump to the first non-blank character of the line |
| $ | Jump to the end of the line |
| b |
| w |
| B |
| W |

### Editing

| | |
| -- | -- |
| i | Insert before the cursor |
| a | Insert after the cursor |
| I | Insert at the beginning of the line |
| A | Insert at the end of the line |
| o | Insert new line below |
| O | Insert new line above |
| r | Replace single character |
| R | Enter replace mode |
| bi | Insert at the beginning of the word |
| ea | Insert at the end of the word | 
| ~ | Toggle case of the current character |
| g~iw | Toggle case of the current word | 
| g~$ | Toggle case of all characters to end of line |
| g~~ | Toggle case of the current line |

### Copy & Paste

| | |
| -- | -- |
| y | Copy(yank) selected text |
| yy / Y | Copy current line |
| Y$ | Copy from cursor till end of the end |
| yw | Copy from cursor till the next word |
| y + <i/a> + w | Copy word under the cursor excluding/including whitespaces |
| y + <t/f> + <key> | Copy from cursor till <key>i, excluding/including <key> |
| y + <{/}> | Copy till next/previous block |
| p | Paste after cursor |
| P | Paste before the cursor |
| gp | Paste after the cursor and move to next block |
| x | Delete(cut) single character |
| d | Delete(cut) mark text |
| D | Delete(cut) from cursor till the end of the line |
| dd | Delete(cut) current line |
| dw | Delete(cut) from cursor till the next word |
| d + <i/a> + w | Delete(cut) word under the cursor excluding/including whitespaces |
| d + <t/f> + <key> | Delete(cut) from cursor till <key>i, excluding/including <key> |
| d + <{/}> | Delete(cut) till next/previous block |
| d | Delete(cut) mark text |
| D | Delete(cut) from cursor till the end of the line |
| dd | Delete(cut) current line |
| dw | Delete(cut) from cursor till the next word |
| d + <i/a> + w | Delete(cut) word under the cursor excluding/including whitespaces |
| d + <t/f> + <key> | Delete(cut) from cursor till <key>i, excluding/including <key> |
| d + <{/}> | Delete(cut) till next/previous block |


### Search & Patterns

| | |
| -- | -- |
| * | Next instance of the word under cursor |
| # | Previous instance of the word under cursor |
| n | Next matching search pattern |
| N | Previous matching search pattern |


### Macros

| | |
| -- | -- |
| q<key> | Start recording macro |
| q | Stop recording marcro |
| @<key> | Run recorded macro |
| @@ | Rerun last macro 

### Tabs

| | |
| -- | -- |
| :tabe <path> | Open file in a new tab |
| :tabp | Go to previous tab |
| :tabn | Go to next tab |
| :tabs | List all the tabs |
| :tabfirst | Go to the fist tab |
| :tablast | Go to the last tab |
| :tabclose | Close current tab |

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
| :PlugInstall | Installs a plugin |
| :PlugUninstall | Uninstalls a plugin |
| :PlugUpdate | Updates all the plugins |
| :PlugUpgrade | Updates vim-plug |

### Some Awesome Plugins

## Resources

* [my .vimrc](https://gist.github.com/ahampriyanshu/27044cee6455ecd566f340b99f7595c3)
* [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
* [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

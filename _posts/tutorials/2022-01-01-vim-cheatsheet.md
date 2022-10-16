---
title: Vim Cheat Sheet
author: ahampriyanshu
excerpt: Let's improve Vi Improved
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials, vim, Cheat, Sheet]
image:
  src: /images/tutorials/vim.png
  width: 1000
  height: 400
  alt: loading
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

|                |                       |
| -------------- | --------------------- |
| :q             | Exit                  |
| :q! / ZQ       | Forceful exit         |
| :wq / :x / ZZ  | Save and exit         |
| :qa            | Exit all              |
| :w             | Save                  |
| Esc / Ctrl + [ | Enter command mode    |
| .              | Repeat last command   |
| u              | Undo                  |
| Ctrl + r       | Redo                  |
| :n / nG        | Jump to $n^{th}$ line |

### Movement

|     |                                                   |
| --- | ------------------------------------------------- |
| j   | Move cursor down                                  |
| k   | Move cursor up                                    |
| h   | Move cursor left                                  |
| l   | Move cursor right                                 |
| H   | Move to top of screen                             |
| M   | Move to middle of sreen                           |
| L   | Move to end of screen                             |
| zz  | Move to center of the screen                      |
| zt  | Scroll current line to top of the page            |
| zb  | Scroll current line to bottom of the page         |
| G   | Jump to end of the file                           |
| gg  | Jump to top of the file                           |
| g\_ | Jump to the last non-blank line of the file       |
| 0   | Jump to the start of the line                     |
| ^   | Jump to the first non-blank character of the line |
| $   | Jump to the end of the line                       |
| %   | Jump to matching parenthesis                      |
| w   | Jump to beginning of the next word                |
| e   | Jump to end of the current word                   |
| w   | Jump to beginning of the current word             |

### Editing

|      |                                              |
| ---- | -------------------------------------------- |
| i    | Insert before the cursor                     |
| a    | Insert after the cursor                      |
| I    | Insert at the beginning of the line          |
| A    | Insert at the end of the line                |
| o    | Insert new line below                        |
| O    | Insert new line above                        |
| r    | Replace single character                     |
| R    | Enter replace mode                           |
| bi   | Insert at the beginning of the word          |
| ea   | Insert at the end of the word                |
| ~    | Toggle case of the current character         |
| g~iw | Toggle case of the current word              |
| g~$  | Toggle case of all characters to end of line |
| g~~  | Toggle case of the current line              |

### Copy & Paste

|                |                                                                                  |
| -------------- | -------------------------------------------------------------------------------- |
| y              | Copy(yank) selected text                                                         |
| yy / Y         | Copy current line                                                                |
| Y$             | Copy from cursor till end of the end                                             |
| yw             | Copy from cursor till the next word                                              |
| y + i or a + w | Copy word under the cursor excluding/including whitespaces                       |
| y + t or f + # | Copy from cursor till # (excluding/including #)                                  |
| y + { or }     | Copy till next/previous block                                                    |
| p              | Paste after cursor                                                               |
| P              | Paste before the cursor                                                          |
| gp             | Paste after the cursor and move to next block                                    |
| x              | Delete(cut) single character                                                     |
| d              | Delete(cut) mark text                                                            |
| D              | Delete(cut) from cursor till the end of the line                                 |
| dd             | Delete(cut) current line                                                         |
| dw             | Delete(cut) from cursor till the next word                                       |
| d + i or a + w | Delete(cut) word under the cursor excluding/including whitespaces                |
| d + t or f + # | Delete(cut) from cursor till # (excluding/including #)                           |
| d + { or }     | Delete(cut) till next/previous block                                             |
| c              | Delete(cut) mark text in insert mode                                             |
| C              | Delete(cut) from cursor till the end of the line in insert mode                  |
| cc             | Delete(cut) current line in insert mode                                          |
| cw             | Delete(cut) from cursor till the next word in insert mode                        |
| c + i or a + w | Delete(cut) word under the cursor excluding/including whitespaces in insert mode |
| c + t or f + # | Delete(cut) from cursor till # (excluding/including #) in insert mode            |
| c + { or }     | Delete(cut) till next/previous block in insert mode                              |

### Search & Patterns

|     |                                            |
| --- | ------------------------------------------ |
| \*  | Next instance of the word under cursor     |
| #   | Previous instance of the word under cursor |
| n   | Next matching search pattern               |
| N   | Previous matching search pattern           |

### Macros

|        |                       |
| ------ | --------------------- |
| q<key> | Start recording macro |
| q      | Stop recording marcro |
| @<key> | Run recorded macro    |
| @@     | Rerun last macro      |

### Tabs

|              |                        |
| ------------ | ---------------------- |
| :tabe <path> | Open file in a new tab |
| :tabp        | Go to previous tab     |
| :tabn        | Go to next tab         |
| :tabs        | List all the tabs      |
| :tabfirst    | Go to the fist tab     |
| :tablast     | Go to the last tab     |
| :tabclose    | Close current tab      |

## Plugins

To install vim plugins, I prefer [vim-plug](https://github.com/junegunn/vim-plug).

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

```bash
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

| Command        | Usage                   |
| -------------- | ----------------------- |
| :PlugInstall   | Installs a plugin       |
| :PlugUninstall | Uninstalls a plugin     |
| :PlugUpdate    | Updates all the plugins |
| :PlugUpgrade   | Updates vim-plug        |

### Some Awesome Plugins

- [vim-fugitive](https://github.com/tpope/vim-fugitive)
- [vim-gitgutter](https://github.com/airblade/vim-gitgutter)
- [gruvbox](https://github.com/morhetz/gruvbox)
- [vim-devicons](https://github.com/ryanoasis/vim-devicons)
- [vim-airline](https://github.com/vim-airline/vim-airline)
- [vim-rainbow](https://github.com/frazrepo/vim-rainbow)
- [ale](https://github.com/dense-analysis/ale)
- [fzf.vim](https://github.com/junegunn/fzf.vim)

## Resources

- [my .vimrc](https://gist.github.com/ahampriyanshu/27044cee6455ecd566f340b99f7595c3)
- [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

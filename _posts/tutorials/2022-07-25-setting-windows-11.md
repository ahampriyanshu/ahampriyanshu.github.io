---
title: Setting up Windows 11
author: ahampriyanshu
excerpt: Things to do after installing Windows 11
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, Windows 11, darwin, tutorials]
image:
  src: /images/tutorials/manjaro.png
  width: 1000
  height: 400
  alt: loading
---

### Installing Chocolatey

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) 
```

### Installing MongoDB

- Download and run the lastest [installer](https://www.mongodb.com/try/download/community-kubernetes-operator).
- Create new enviroment variable path with value ``C:\Program Files\MongoDB\Server\{VERSION}\bin``.

### Installing VSCode

- Download and run the latest [installer](https://code.visualstudio.com/docs/?dv=win).
- Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools), [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go), [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell), [Better Code](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments), [Github Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme), [ThunderClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).


### Installing Chrome


- Execute ``choco install chrome`` or download and run the latest [installer](https://www.google.com/chrome/).
- Add [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd), [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [JSON Viewer Pro](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc), [ChroPath](https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo), [ColorPick ](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg), [Honey](https://chrome.google.com/webstore/detail/honey-automatic-coupons-r/bmnlcjabgnpnenekpadlanbbkooimhnj).

### Installing git

- Execute ``choco install git`` or download and run the latest [installer](https://git-scm.com/download/win).
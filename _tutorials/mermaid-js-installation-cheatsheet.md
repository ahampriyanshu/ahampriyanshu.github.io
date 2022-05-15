---
title: "Installing and using MermaidJS"
author: Priyanshu Tiwari
excerpt: Installing mermaid in a jekyll site and generating data structures through it.
mermaid: true
image: 
  thumbnail: /images/tutorials/mermaid.png
  caption: "mermaid js"
---

## Mermaid JS

> Mermaid is a Javascript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

## Installation

1. Click [here] and download the min file of the latest version of mermaid and store it in the assets folder.

2. Include the min file after closing the body tag in the base html file.

```html
<script src='./assets/js/plugins/mermaid.min.js'></script>
```

**Note:** If you are using a jekyll site, use the following snippet to reduce unnecessary loading.

```html
{%- if page.mermaid == true -%}
  <script src="{{ '/assets/js/plugins/mermaid.min.js' | relative_url }}"></script>
{%- endif -%}
```

## Usage

```
graph TD;
    A-->B["∅"];
    A-->C["A"];
    B-->D["∅"];
    B-->E["B"];
    C-->F["A"];
    C-->G["AB"];
    D-->H["∅"];
    D-->I["C"];
    E-->J["B"];
    E-->K["BC"];
    F-->L["A"];
    F-->M["AC"];
    G-->N["AB"];
    G-->O["ABC"];
```

<div class="mermaid">
graph TD;
    A-->B["∅"];
    A-->C["A"];
    B-->D["∅"];
    B-->E["B"];
    C-->F["A"];
    C-->G["AB"];
    D-->H["∅"];
    D-->I["C"];
    E-->J["B"];
    E-->K["BC"];
    F-->L["A"];
    F-->M["AC"];
    G-->N["AB"];
    G-->O["ABC"];
</div>
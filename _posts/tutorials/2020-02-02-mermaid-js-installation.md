---
title: "Installing and using MermaidJS"
author: ahampriyanshu
excerpt: Installing mermaid in a Jekyll site and generating data structures through it.
mermaid: true
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials]
---

## Mermaid JS

> Mermaid is a Javascript-based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

## Installation

1. Click [here](https://unpkg.com/mermaid/) and download the minified file of the latest version of mermaid.

2. Include the downloaded file in the base html.

```html
<script src="./assets/js/plugins/mermaid.min.js"></script>
```

**Note:** If you are using a Jekyll site, use the following snippet to reduce unnecessary loading.

```html
{%raw%} {%- if page.mermaid == true -%}
<script src="{{ '/assets/js/plugins/mermaid.min.js' | relative_url }}"></script>
{%- endif -%} {%endraw%}
```

## Usage

```html
<div class="mermaid">
  graph TD; A-->B["∅"]; A-->C["A"]; B-->D["∅"]; B-->E["B"]; C-->F["A"];
  C-->G["AB"]; D-->H["∅"]; D-->I["C"]; E-->J["B"]; E-->K["BC"]; F-->L["A"];
  F-->M["AC"]; G-->N["AB"]; G-->O["ABC"];
</div>
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

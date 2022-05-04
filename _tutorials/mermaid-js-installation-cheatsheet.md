---
title: "Installing MermaidJS & "
author: Priyanshu Tiwari
excerpt: Installing and using LaTeX 
mermaid: true
image: 
  thumbnail: /images/tutorials/mermaid.png
  caption: "latex"
---

## Mermaid JS

> Mermaid is a Javascript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

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
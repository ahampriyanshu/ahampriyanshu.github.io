---
title: Markdown Syntax Guide
description: Master markdown formatting with examples of text styling, code blocks, tables, math equations, and more. Complete reference for content creators.
date: '2025-11-01'
tags:
  - theme
  - blogging
categories:
  - "Norm Has A Blog"
---

## Text Formatting

**Important:** Make sure to backup your data before proceeding

*Warning:* This action cannot be undone

This price was <del>$100</del> now $80

This is an <ins>important addition</ins> to the document

This text is <mark>highlighted for attention</mark>

This information is <s>no longer valid</s>

Abbreviations like <abbr title="HyperText Markup Language">HTML</abbr>

Citations like <cite>&mdash; Mark Otto</cite>

<kbd>Ctrl + C</kbd> keyboard input

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

H<sub>2</sub> + SO<sub>4</sub> &rarr; H<sub>2</sub>SO<sub>4</sub>

## Headings

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Links

[This is an inline link](https://example.com)

[This is a link with a title](https://example.com "Link Title")

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item 2A
      1. Nested item 2A.a
3. Third item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Code

This blog uses the [Shiki](https://shiki.matsu.io/) library for syntax highlighting.

### Inline Code

This is an inline code: `console.log('Hello, World!');`

### Code Block

This is a code block with a filename:

```javascript:greeting.js
const greeting = (name) => {
  return `Hello, ${name}!`;
};

console.log(greeting('World'));
```

Or without a filename:

```css
.button {
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

or just the code snippet:

```
These are the instructions to find the meaning of life.
```


## Horizontal Rule

Use three or more hyphens, asterisks, or underscores:

---


## Blockquotes

> This is a blockquote.


## Tables

| Political Ideology | Communism  | Conservative |
|--------|-------------|--------------|
| Economic Policy | High Regulation | Free Market |
| Social Policy | Progressive | Regressive |
| Government Role | Expansive | Limited |

Aligned tables:

| Left aligned | Center aligned | Right aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| Text | Text | Text |

## Images

You can add images using standard Markdown syntax:

![Hero Image](/images/hero.jpeg)

## With captions

<figure>
  <img src="https://github.com/ahampriyanshu/meta/blob/main/blog/norm.png?raw=true" alt="norm">
  <figcaption>Rolling Stone review of norm as a SNL cast member</figcaption>
</figure>

<fig>

## HTML

You can also use raw HTML in Markdown:

<div style="border: 1px solid black; padding: 10px; border-radius: 12px; text-align: center; background-color: #f0f0f0; color: blue;">
  This is a custom HTML div with inline styles.
</div>


## Math Equations

Mathematical expressions are fully supported using MathJax.

### Inline Math

You can write inline equations like $E = mc^2$ or the quadratic formula $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$ directly in your text.

### Multi Line Math

Summation and Limits:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Differential equations:

$$
\begin{aligned}
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

Greek alphabets:

$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)
$$

Matrix notation:

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
ax + by \\
cx + dy
\end{bmatrix}
$$

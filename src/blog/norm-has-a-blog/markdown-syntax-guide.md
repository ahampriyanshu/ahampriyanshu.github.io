---
title: Markdown Syntax Guide
description: Markdown formatting with examples of text styling, code blocks, tables, math equations, and more. Complete reference for content creators.
date: '2025-11-01'
tags:
  - theme
  - blogging
categories:
  - "Norm Has A Blog"
math: true
---


## Text Formatting


MICHAEL *whispering*: Once we set this in motion, we can't **undo** it.

The tribute was <del>$100,000</del> now $150,000 after the Five Families summit.

This is an <ins>offer you can't refuse</ins> drafted for the Corleone heirs.

This warning is <mark>highlighted for the Consigliere</mark>.

That truce is <s>no longer honored</s> after Sollozzo's move.

Abbreviations like <abbr title="New York City">NYC</abbr> mark the territories on the map.

Citations like <cite>&mdash; Mario Puzo, The Godfather</cite> keep the story grounded.

<kbd>Ctrl + C</kbd> copies the coded message from Tom Hagen's typewriter.

a<sup>2</sup> + b<sup>2</sup> + 2ab mein yeh extra 2ab kahan se aayaa?

C<sub>10</sub>H<sub>15</sub>N + Cl<sub>2</sub> &rarr; C<sub>10</sub>H<sub>14</sub>N + HCl.

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Links

Click [here](https://ahampriyanshu.com/blog) to see the absolute guide guide.

Click [here](/blog) to see the relative guide.

## Lists

### Unordered Lists

- Roscoe Street Station
- Live from the Crime Scene
  - A Calm Before the Storm
  - The Docks
- A Cold Day in Hell
  - Ragnarok Nightclub
  - Punchinello Manor
- A Bit Closer to Heaven

### Ordered Lists

1. Dark Age economy setup
2. Feudal Age rush
   1. Archers or scouts
      1. Transition plan
3. Castle Age boom
4. Imperial Age dominance

### Task Lists

- [x] Clear the Pacific Coast course
- [x] Finish the Sierra Nevada run
- [ ] Unlock the City outskirts map

## Code

### Inline Code

This is an inline code: `const meaningOfLife = 42;`

### Code Block

This is a code block with a filename:

```ts:jumanji.ts
function takeJumanjiTurn(player: Player; isTurn: boolean; cheated: boolean ) {
  if (cheated) {
    reuturn summonHunter(player);
  }
  if (!isTurn) {
    return skipTurn();
  } 

  rollJumanjiDice(player);
  player.moveForward();
  if(player.isAtEnd()) {
    console.log(`${player.name} has won the game!`);
    resetBoard();
  }
}
```

With a language:

```css
.vcop-trigger-hair {
  background: #061729;
  color: #f94144;
  padding: 12px 24px;
  border: 2px solid #f9c74f;
  border-radius: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  box-shadow: 0 0 12px rgba(249, 65, 68, 0.4);
}
```

or just some imporant text:

```
Pro tip: When signing up for a new service, use the website name as your middle name.
When spam mail shows up, you know exactly who sold your data.
```


## Horizontal Rule

Use ```---``` or ```***```  to create a horizontal rule.

---

## Blockquotes

> There are so many things in our lives that we would throw away if we were not afraid that others might pick them up.

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

Add images using `![alt text](/path/to/img.jpg)` or `img` tag.

![Ranganathaswamy Temple](/images/example.jpeg)

### With captions

<figure>
  <img src="/images/caption.png" alt="norm">
  <figcaption>Courtesy: Rolling Stone</figcaption>
</figure>

## Vernacular languages

### Hindi

होरी ने बैलों की रस्सी थामे धनिया से कहा, "धरती का कर्ज़ चुका दूं तो आत्मा को शांति मिले।" धनिया ने सूखी हंसी के साथ जवाब दिया, "कर्ज़ क्या कभी खत्म हुआ है होरी? बस उम्मीद ही है कि किसी दिन गोदान का सपना सच हो जाएगा।" दोनों की नज़रें आंगन में खेलते गोबर और सोहनी पर टिक गईं। होरी ने बच्चों की ओर इशारा करते हुए कहा, "इनके लिए ही तो इतनी दौड़-धूप है।" धनिया ने माथे की पसीने की बूंद पोंछते हुए उत्तर दिया "और इनके लिए ही हमें लड़ना भी पड़ेगा, चाहे जमींदार हो या गांव की पंचायत।"

### Punjabi

ਮਾਏ ਨੀ ਮਾਏ ਮੈਂ ਇਕ ਸ਼ਿਕਰਾ ਯਾਰ ਬਣਾਇਆ <br> ਓਦੇ ਸਿਰ ਤੇ ਕਲਗੀ ਓਦੇ ਪੈਰੀਂ ਝਾਂਜਰ <br> ਓ ਚੋਗ ਚੁਗ਼ਿੰਦਾ ਆਇਆ <br> ਇਕ ਓਦੇ ਰੂਪ ਦੀ ਧੂਪ ਤਿਖੇਰੀ

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

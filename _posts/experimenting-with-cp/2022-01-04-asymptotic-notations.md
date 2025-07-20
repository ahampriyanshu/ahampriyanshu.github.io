---
title: "DSA Part 1: Introduction"
author: ahampriyanshu
excerpt: Asymptotic notation, big-oh time complexity, space complexity, complexity Graph, possible verdicts
categories:
  - DSA
tags:
  - "data structures and algorithms"
  - "c++"
---

## Asymptotic Notations

Time taken by a program is always +ve.
Input provided is also always +ve.

Hence, analysis of an algorrithm is done always in the first quadrant.

### Big-O Notation

### Big-Ω Notation

### Big-Θ Notation

## Complexity analysis of a problem

### Steps to approach a problem

- Read lengthy and unusual paragraphs to decode the problem statement.
- Observe the input format.
- Observe the output format.
- Analyze the given contraints
  - Time Limit : 0.5s - 4s
  - Memomry Limit : 256MB - 1GB
- Code
- Test the output locally
- Submit

Sometimes instead of reading the problem statement, we can find required logic by observing the pattern in sample input and output.
{: .prompt-tip }

### Analyzing given constraints

Conventionally, we can perform 4.10<sup>8</sup> operation in one second.

#### Complexity Table

| N               | T.C.              |
| :-------------- | :---------------- |
| 10<sup>18</sup> | $O(logN)$         |
| 10<sup>8</sup>  | $O(N)$            |
| 10<sup>4</sup>  | $O(N^2)$          |
| 10<sup>7</sup>  | $O(N \cdot logN)$ |
| 10<sup>2</sup>  | $O(N^3)$          |
| 90              | $O(N^4)$          |
| 20              | $O(2^N)$          |
| 11              | $O(N!)$           |

### Possible verdicts

- Accpeted
- Time limit Exceeded
- Memory Limit Exceeded
- Compilation Error
- SIGTSTP/SIGSTOP
  - Input/Output error.
  - Giving instruction which is not implemented in GNU library.
- Runtime Error
  - Divinding by zero
  - Segmentation Fault
    - Memory allocation
    - Verify you are indeed returning the answer.
    - Re-evaluate the base case of the recursive func.
    - Accessing -ve indices
    - Declaring global array greater than 10<sup>8</sup>
    - Declaring local array greater than 10<sup>6</sup>(4M mem limit per function)
- Wrong Answer
  - Work for corner cases.
  - Implicit conversion.
  - Precision error for float and double.
  - Using uninitialized variables.

---
title: "Introductory Problems | CSES"
author: ahampriyanshu
categories: [Sheets, Cses]
tags: [introductory, sheets, cses]
---

### Weird Algorithm

> Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one.

- [Problem](https://cses.fi/problemset/task/1068)

```java
import java.util.Scanner;
public class Weird_Algorithm {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    long n = sc.nextLong();
    while (n > 1) {
      System.out.print(n + " ");
      n = n % 2 == 0 ? n / 2 : n * 3 + 1;
    }
    System.out.print(n);
  }
}
```

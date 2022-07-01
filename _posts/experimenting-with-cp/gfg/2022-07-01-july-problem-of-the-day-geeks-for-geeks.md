---
title: "July | 2022 | POTD GFG"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, July 2022
math: true
tags: [gfg, geeksforgeeks, geeks, for, potd, problem, of, the, day, july, ds, array, tree, trie, string, stacks, queue, linked list]
---


## 01 July | Matrix Exponentiation

Given an equation of the form $f(n) = f(n-1) + f(n-2)$ where $f(0) = 1$ , $F(1) = 1$ , the task is to find the nth term of this sequence.

* [Practice](https://practice.geeksforgeeks.org/problems/matrix-exponentiation2711/1)

### O(n)

```cpp
int FindNthTerm(long long int n) {
        
    if(n < 2) return n;
        
    long long int k1, k2, k3;
        
    k1 = k2 = 1;
        
    for(int i=2; i<=n; i++){
            k3 = (k1 + k2) % 1000000007;
            k1 = k2;
            k2 = k3; 
    }
            
    return k3;
}
```

### O(logn)

```cpp

```
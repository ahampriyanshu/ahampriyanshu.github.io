---
title: "June | 2022 | POTD GFG"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, June 2022
math: true
tags: [gfg, geeksforgeeks, geeks, for, potd, problem, of, the, data, june, ds, array, tree, trie, string, stacks, queue, linked list]
---


## 28 June | Sum of elements between k1'th and k2'th smallest elements 

Given an array ``A[ ]`` of ``N`` positive integers and two positive integers $K1$ and $K2$. Find the sum of all elements between $K_1$ and $K_2$ smallest elements of the array. It may be assumed that **(1 <= k1 < k2 <= n)**.

* [Practice](https://practice.geeksforgeeks.org/problems/sum-of-elements-between-k1th-and-k2th-smallest-elements3133/1)

```cpp
    long long sumBetweenTwoKth( long long A[], long long N, long long K1, long long K2)
    {
        long long ans = 0;
        
        sort(A, A+N);
        
        for(int i=K1; i<K2-1; i++)
            ans += A[i];
        
        return ans;
    }
```
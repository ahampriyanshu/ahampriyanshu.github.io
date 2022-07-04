---
title: "July | 2022 | POTD GFG"
author: ahampriyanshu
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


## 04 July | Minimum X (xor) A 

Given two integers A and B, the task is to find an integer X such that (X XOR A) is minimum possible and the count of set bit in X is equal to the count of set bits in B.

* [Practice](https://practice.geeksforgeeks.org/problems/x-xor-a-is-minimum-and-set-bits-in-x-b/1#)

```cpp
    int bits(int x) {
        int s = 0;
        while (x != 0) {
            if (x % 2 == 1)
                s++;
            x = x / 2;
        }
        return s;
    }
    
    int minVal(int a, int b) {
        
        int a_bits = bits(a);
        int b_bits = bits(b);
        
        if (a_bits == b_bits) return a;
        
        int ans = a;
        int t = ((a_bits > b_bits) ? (a_bits - b_bits) : (b_bits - a_bits));
        int i = 1;
        int cmp;
        
        while (t > 0) {
            cmp = ((a_bits > b_bits) ? i : 0);
            if ((i & ans) == cmp) {
                ans = ans ^ i;
                t--;
            }
            i = i << 1;
        }
        return ans;
    }
```
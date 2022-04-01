---
title: "April Leetcoding | 2022 | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to April Leetcoding Challenge, 2022.

## Week 1

### 1 March | 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

* [Practice](https://leetcode.com/problems/reverse-string/)

### Bruteforce

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int n(s.size());
        for(int i=0; i<n/2; i++)
            swap(s[i], s[n-i-1]);
    }
};
```
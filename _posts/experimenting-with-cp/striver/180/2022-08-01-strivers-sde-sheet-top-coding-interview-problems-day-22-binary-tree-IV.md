---
title: "Binary Tree IV | Striver’s SDE Sheet"
author: ahampriyanshu
math: true
excerpt: C++ Solutions to Striver's 180
categories: [Sheets, TakeUforward]
tags:
  [
    striver,
    tuf,
    ds,
    algo,
    takeUforward,
    striver180,
    dsa180,
    "180",
    Linked,
    List,
    day,
    "2",
  ]
---

## Problem 1: Reverse Words in a String

You are given a string of length N. You need to reverse the string word by word. There can be multiple spaces between two words and there can be leading or trailing spaces but in the output reversed string you need to put a single space between two words, and your reversed string should not contain leading or trailing spaces.

- [Code Studio](https://www.codingninjas.com/codestudio/problems/696444)
- [Leetcode](https://leetcode.com/problems/reverse-words-in-a-string/)

### Worst/Better

Use in built methods and containers like stack, vector.

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

### Optimal

Reverse the whole string and then reverse word by word.

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(1) $

```cpp

class Solution {
public:
    string reverseWords(string s) {
        reverse(s.begin(), s.end());
        int l = 0, r = 0, i = 0, n = s.size();
        while (i < n) {
            while (i < n && s[i] != ' ')
                s[r++] = s[i++];

            if (l < r) {
                reverse(s.begin() + l, s.begin() + r);
                if (r == n) break;
                s[r++] = ' ';
                l = r;
            }
            ++i;
        }
        if (r > 0 && s[r-1] == ' ') --r;
        s.resize(r);
        return s;
    }
};

```

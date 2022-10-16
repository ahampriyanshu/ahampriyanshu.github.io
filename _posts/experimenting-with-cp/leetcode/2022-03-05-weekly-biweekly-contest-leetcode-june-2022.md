---
title: "Weekly and Biweekly Contests | June | Leetcode"
author: ahampriyanshu
categories: [Contests, Leetcode]
excerpt: All of my accepted submissions on Leetcode , June 2022.
tags: [leetcode, Contests, challenge, june, weekly, biweekly]
math: true
---

## Biweekly Contest 81

### 2315. Count Asterisks

You are given a string s, where every two consecutive vertical bars $'|'$ are grouped into a pair. In other words, the 1st and 2nd $'|'$ make a pair, the 3rd and 4th $'|'$ make a pair, and so forth.

Return the number of $'*'$ in s, excluding the $'*'$ between each pair of $'|'$.

Note that each $'|'$ will belong to exactly one pair.

- [Practice](https://leetcode.com/problems/count-asterisks/)

```cpp
int countAsterisks(string s) {
    int ans(0), bars(0);
    for(char ch:s){
        if(ch == '|')
            bars++;
        if(ch == '*' and bars%2 == 0)
            ans++;
        }
    return ans;
}
```

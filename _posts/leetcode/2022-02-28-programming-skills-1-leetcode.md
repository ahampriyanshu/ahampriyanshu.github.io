---
title: "Programming Skills I | Study Plan | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, programming, skills, back-to-study-plan, easy]
---

C++ Solutions to Programming Skills I, Leetcode.

## Day 1 | Array

### 1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).


* [Practice](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

```cpp
class Solution {
public:
    int countOdds(int low, int high) {
        return (high + 1) / 2 - low / 2;
    }
};
```
---
title: "Linked List & Array | Striver’s SDE Sheet"
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

## Problem 1: Reverse a LinkedList

- [Leetcode](https://leetcode.com/problems/reverse-linked-list/)

```cpp
class Solution {
public:
    ListNode* reverseList(ListNode* next) {
        ListNode* prev = NULL;
        while(next != NULL)
        {
            ListNode* curr = next;
            next = next->next;
            curr->next = prev;
            prev = curr;
        }
        return prev;
    }
};
```

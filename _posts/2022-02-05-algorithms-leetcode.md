---
title: "Algorithm I | Study Plan | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
summary: "C++ Solutions to Algorithm I of 2 weeks study plan, Leetcode"
categories: [Sheets, Leetcode]
tags: [leetcode, algorithms, back-to-study-plan, ds, array, tree, trie, string, stacks, queue, linked list]
---

## Day 1 | Binary Search

### 704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

* [Practice](https://leetcode.com/problems/binary-search/)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int len(nums.size());
        int l(0), r(len-1);
        while(l<=r){
            int mid = (r+l)/2;
            if(nums[mid] == target)
                return mid;
            if(nums[mid] > target)
                r = mid -1;
            else
                l = mid + 1;
        }
        return -1;
    }
};
```
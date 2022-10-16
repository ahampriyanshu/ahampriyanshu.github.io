---
title: "Algorithm II | Study Plan | Leetcode"
author: ahampriyanshu
categories: [Sheets, Leetcode]
excerpt: C++ Solutions to Algorithm II of 2 weeks study plan, Leetcode.
tags:
  [
    leetcode,
    algorithms,
    back,
    to,
    study,
    plan,
    ds,
    array,
    tree,
    trie,
    string,
    stacks,
    queue,
    linked list,
  ]
---

### Day 1 | Binary Search

#### 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

- [Practice](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {

        int len(nums.size()), first = -1, last = -1;
        int l(0), r(len-1);
        while(l<=r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target)
                first =  mid;
            if(nums[mid] >= target)
                r = mid - 1;
            else
                l = mid + 1;
        }

        l = 0, r = len-1;
        while(l<=r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target)
                last =  mid;
            if(nums[mid] > target)
                r = mid -1;
            else
                l = mid + 1;
        }

        return {first, last};
    }
};
```

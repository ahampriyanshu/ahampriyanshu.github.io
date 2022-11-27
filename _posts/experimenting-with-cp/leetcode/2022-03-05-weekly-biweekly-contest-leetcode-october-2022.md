---
title: "Weekly and Biweekly Contests | October | Leetcode"
author: ahampriyanshu
categories: [Contests, Leetcode]
excerpt: All of my accepted submissions on Leetcode , October 2022.
tags: [leetcode, Contests, challenge, October, weekly, biweekly]
---

## Weekly Contest 315

### 2441. Largest Positive Integer That Exists With Its Negative

Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return`-1`.

<a href="https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### O(n) time

```cpp
    int findMaxK(vector<int>& nums) {
        unordered_map<int, int> mp;

        int ans = INT_MIN, key;

        for(auto e: nums){
            if(mp[-e]){
                key = e > 0 ? e : -e;
                ans = max(ans, key);
            }
            mp[e]++;
        }

        return ans == INT_MIN ? -1 : ans;

    }
```

#### O(1) space

```cpp
    int findMaxK(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        int l = 0, r = nums.size() - 1;

        while(l < r){
            if(nums[l]*-1 == nums[r])
                return nums[r];
            else if (nums[l]*-1 < nums[r])
                r--;
            else
                l++;
        }

        return -1;
    }
```

### 2442. Count Number of Distinct Integers After Reverse Operations

You are given an array nums consisting of **positive** integers.

You have to take each integer in the array, **reverse** its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

Return the number of **distinct** integers in the final array.

<a href="https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    int rev_num(int n){
        int rev = 0;
        while(n){
            rev = rev * 10 + (n%10);
            n /= 10;
        }
        return rev;
    }

    int countDistinctIntegers(vector<int>& nums) {
        unordered_map<int, int> mp;
        for(auto e: nums) {
                mp[e]++;
                mp[rev_num(e)]++;
        }
        return mp.size();
    }
```

### 2443. Sum of Number and Its Reverse

Given a non-negative integer num, return `true` if num can be expressed as the sum of any non-negative integer and its reverse, or `false` otherwise.

<a href="https://leetcode.com/problems/sum-of-number-and-its-reverse/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    int rev(int n){
        int rev = 0;
        while(n){
        rev = (rev*10) + (n%10);
        n /= 10;
        }
        return rev;
    }

    bool sumOfNumberAndReverse(int num) {

        if((num%11 == 0 && num < 100) || (num%2 == 0 && num < 20)) return true;

        for(int i=1; i<=num/2; i++)
            if(i + rev(i) == num)
                return true;

        return false;
    }
```

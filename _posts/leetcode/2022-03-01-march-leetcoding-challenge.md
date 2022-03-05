---
title: "March Leetcoding | 2022 | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to March Leetcoding Challenge, 2022.

## Week 1

### 338. Counting Bits

Given an integer n, return an array ans of length ``n + 1`` such that for each ``i (0 <= i <= n), ans[i]`` is the number of 1's in the binary representation of i.

* [Practice](https://leetcode.com/problems/counting-bits/)

### Bruteforce

```cpp
class Solution {
public:
    int getSum(int n){
        int ans = 0;
        while(n){
            if(n%2) ans++;
            n /= 2;
        }
        return ans;
    }
    
    vector<int> countBits(int n) {
        vector<int> ans;
        
        for(int i=0; i<=n; i++)
            ans.push_back(getSum(i));
        
        return ans;
    }
};
```

### Maths + DP

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> res(num);
        res.push_back(0);  // for num=0
        if(num==0) return res;
        
        for(int i=1;i<=num;i++){
            if(i%2==0){
                res[i]=res[i/2];
            } else {
                res[i]=res[i-1]+1;
            }
        }
        return res;
    }
};
```

### Pure DP

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
    vector<int> result(num + 1);
    int offset = 1;
    for (int index = 1; index < num + 1; ++index){
        if (offset * 2 == index)
            offset *= 2;
        result[index] = result[index - offset] + 1;
    }
    return result;
    }
};
```

### 392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

* [Practice](https://leetcode.com/problems/is-subsequence/)

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.empty()) return true;
        int index = 0;
        for(char ch: t)
            if(ch == s[index]) index++;
        return index > s.size() - 1;
    }
};
```

### 413. Arithmetic Slices

An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

* For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

* [Practice](https://leetcode.com/problems/arithmetic-slices/)

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) return 0;
        int ans(0), sum(0);
        for(int i = 0; i < n - 2; i++){
            if(nums[i+1] - nums[i] == nums[i+2] - nums[i+1])
                sum++;
            else
                {
                ans += (sum*(sum+1))/2;
                sum = 0;
                }
        }
        ans += (sum*(sum+1))/2;
        return ans;
    }
};
```

### 740. Delete and Earn

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

* Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.

* [Practice](https://leetcode.com/problems/delete-and-earn/)

```cpp
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
    int n = 10001;
    vector<int> sum(n, 0);
    vector<int> dp(n, 0);
    
    for(auto num: nums)
        sum[num] += num;
    
    dp[0] = 0;
    dp[1] = sum[1];
    for(int i=2; i<n; i++)
        dp[i] = max(dp[i-2] + sum[i], dp[i-1]);
    
    return dp[n-1];
}
};
```
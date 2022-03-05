---
title: "Weekly and Biweekly Contests | March | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Leetcode]
tags: [leetcode, Contests, challenge, march, weekly, biweekly]
---

All of my accepted submissions on Leetcode , March 2022.

## Biweekly Contest 73

### 6024. Most Frequent Number Following Key In an Array

You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

* 0 <= i <= n - 2,
* nums[i] == key and,
* nums[i + 1] == target.

Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

* [Practice](https://leetcode.com/contest/biweekly-contest-73/problems/most-frequent-number-following-key-in-an-array/)

```cpp
class Solution {
public:
    int mostFrequent(vector<int>& nums, int key) {
        int ans(0), freq(0);
        unordered_map<int, int> ump;
        for(int i=0; i<nums.size() - 1; i++){
            if(nums[i] == key)
                ump[nums[i+1]]++;
                if(ump[nums[i+1]] > freq){
                    freq =ump[nums[i+1]];
                    ans = nums[i+1];
                }
                
        }
        return ans;
    }
};
```

### 5217. Sort the Jumbled Numbers

You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all ``0 <= i <= 9``.

You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

**Notes:**

* Elements with the same mapped values should appear in the same relative order as in the input.
* The elements of ``nums`` should only be sorted based on their mapped values and not be replaced by them.

* [Practice](https://leetcode.com/problems/arithmetic-slices/)

```cpp
class Solution {
public:
    
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        vector<int> ans;
        long long int ele, digit, base, mapped;
        map<int, vector<long long int>> mp;
        for(int i=0; i<nums.size(); i++){
            ele = nums[i];
            base = 1;
            mapped = 0;
            if(ele){
            while(ele){
                digit = ele%10;
                mapped += mapping[digit]*base;
                base *=  10;
                ele /= 10;
            }
            }
            else mapped = mapping[0];
            mp[mapped].push_back(nums[i]);
        }
        
        for(auto &e:mp)
            ans.insert(ans.end(), e.second.begin(), e.second.end());
        
        return ans;
    }
};
```
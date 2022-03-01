---
title: "March Leetcoding | 2022 | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to March Leetcoding Challenge, 2022.

## Day 1 | Binary Search

### 704. Binary Search

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

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
    int result[] = new int[num + 1];
    int offset = 1;
    for (int index = 1; index < num + 1; ++index){
        if (offset * 2 == index){
            offset *= 2;
        }
        result[index] = result[index - offset] + 1;
    }
    return result;
```

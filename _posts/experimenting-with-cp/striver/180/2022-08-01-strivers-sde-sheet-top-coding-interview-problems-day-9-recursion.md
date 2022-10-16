---
title: "Recursion | Striver’s SDE Sheet"
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

## Problem 1: Subset Sums

Given a list arr of N integers, print sums of all subsets in it.

Note: Return all the element is increasing order.

- [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/subset-sums2234/1#)

### Brute

```cpp
class Solution
{
public:

    vector<int> subsetSums(vector<int> arr, int N)
    {
        vector<int> ans;
        long long total = 1 << n;

        for (long long i = 0; i < total; i++) {
            long long sum = 0;
            for (int j = 0; j < n; j++)
                if (i & (1 << j))
                    sum += arr[j];

            ans.push_back(sum);
            sort(ans.begin(), ans.end());
            return ans;
        }
};
```

### Optimal

```cpp
class Solution
{
public:

    void solve(int index, int sum, int N, vector<int> &arr, vector<int> &ans)
    {
        if(index == N){
            ans.push_back(sum);
            return;
        }

        solve(index+1, sum + arr[index], N, arr, ans);
        solve(index+1, sum, N, arr, ans);
    }

    vector<int> subsetSums(vector<int> arr, int N)
    {
        vector<int> ans;
        solve(0, 0, N, arr, ans);
        sort(ans.begin(), ans.end());
        return ans;
    }
};
```

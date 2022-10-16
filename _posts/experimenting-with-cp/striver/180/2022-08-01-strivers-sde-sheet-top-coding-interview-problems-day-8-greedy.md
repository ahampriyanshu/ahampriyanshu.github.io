---
title: "Greedy | Striver’s SDE Sheet"
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

### Problem 1: N Meetings in a room

- [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1)

```cpp
class Solution
{
    public:
    int maxMeetings(int start[], int end[], int n)
    {
       pair<int, int> a[n + 1];

       for(int i=0; i<n; i++)
       {
           a[i].first = end[i];
           a[i].second = start[i];
       }

       sort(a, a+n);
       int ans = 1, end_time = a[0].first;

       for (int i = 1; i < n; i++)
            if ( a[i].second > end_time) {
                ans++;
                end_time = a[i].first;
            }
        return ans;

    }
};
```

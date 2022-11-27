---
title: "Introductory Problems | CSES"
author: ahampriyanshu
categories: [Sheets, Cses]
tags: [introductory, sheets, cses]
---

### Distinct Numbers

> You are given a list of n integers, and your task is to calculate the number of distinct values in the list.

- [Problem](https://cses.fi/problemset/task/1621)

```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, e;
    cin >> n;
    unordered_map<int, int> mp;
    for (int i = 0; i < n; i++)
    {
        cin >> e;
        mp[e]++;
    }
    cout << mp.size();
    return 0;
}
```

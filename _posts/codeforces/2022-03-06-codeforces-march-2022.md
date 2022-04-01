---
title: "Codeforces | March | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codeforces]
tags: [live, contest, march, codeforces, div2, div3, educational, global, round]
---

All of my accepted submissions on Codeforces(March 2022).

## Round #755 (Div. 2)

### A. Game

You are playing a very popular computer game. The next level consists of n consecutive locations, numbered from 1 to n, each of them containing either land or water. It is known that the first and last locations contain land, and for completing the level you have to move from the first location to the last. Also, if you become inside a location with water, you will die, so you can only move between locations with land.

You can jump between adjacent locations for free, as well as **no more than once** jump from any location with land *i* to any location with land **i+x**, spending x coins (x≥0).

Your task is to spend the minimum possible number of coins to move from the first location to the last one.

Note that this is always possible since both the first and last locations are the land locations.

* [1649/A](https://codeforces.com/contest/1649/problem/A)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
ll solve()
{
    ll n, ans(0);
    cin >> n;
    ll arr[n];
    for (ll i = 0; i < n; i++)
        cin >> arr[i];
    
    if(n == 2) return 0;
 
    ll start(1), end(n-2);
 
    while(arr[start]){
        start++;
        if(start == n-1)
        return 0;
    }
 
    while(arr[end]){
        end--;
        if(end == 1)
        return 2;
    }
 
    return end - start + 2;
 
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        cout << solve() << endl;
}
```
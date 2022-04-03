---
title: "April | 2022 | Codechef"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codechef]
tags: [live, contest, codechef, starters, cookoff, lunchtime]
---

All of my accepted submissions on Codechef(April 2022).

## Cookoff

### A. Digit Sum Parities

For a positive integer M, MoEngage defines ``digitSum(M)`` as the sum of digits of the number M (when written in decimal).

For example, ``digitSum(1023)``=1+0+2+3=6.

Given a positive integer N, find the smallest integer X strictly greater than N such that:

- ``digitSum(N)`` and ``digitSum(X)`` have different parity, i.e. one of them is odd and the other is even.

* [DIGSMPAR](https://www.codechef.com/COOK140B/problems/DIGSMPAR)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

ll getSum(ll n)
{
    ll sum = 0;
    while (n != 0)
    {
        sum = sum + n % 10;
        n = n / 10;
    }
    return sum;
};

ll solve()
{
    ll n, x, old_sum, new_sum;
    cin >> n;

    old_sum = getSum(n);
    n++;
    new_sum = getSum(n);

    if(old_sum%2 and new_sum%2)
    n++;

    if(old_sum%2 == 0 and new_sum%2 == 0)
    n++;

    return n;
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

### B. Sticks and Rectangles

MoEngage has a bundle of N sticks. The ith stick has a length Li meters.

Find the minimum number of sticks (of any length) you need to add to the bundle such that you can construct some rectangles where each stick of the bundle belongs to exactly one rectangle and each side of a rectangle should be formed with exactly one stick.

* [RECSTI](https://www.codechef.com/COOK140B/problems/RECSTI)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

ll solve()
{
    ll n, e, ans = 0;
    unordered_map<ll, ll> ump;
    cin >> n;

    for (ll i = 0; i < n; i++)
    {
        cin >> e;
        ump[e]++;
    }

    for (auto e : ump)
        if (e.second % 2)
        {
            ans++;
            n++;
        }
    return n % 4 ? ans + 2 : ans;
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
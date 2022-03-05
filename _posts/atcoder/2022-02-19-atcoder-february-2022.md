---
title: "Atcoder | February | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Atcoder]
tags: [live, contest, atcoder, div2, grand]
---

All of my accepted submissions on Atcoder, February 2022.

## ABC 239

### A - Horizon

Assuming that the horizon seen from a place x meters above the ground is x(12800000+x) meters away, find how many meters away the horizon seen from a place H meters above the ground is.

* [abc239_a](https://atcoder.jp/contests/abc239/tasks/abc239_a)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    long double h;
    cin >> h;
    long double tmp = h*(12800000 + h);
    cout << fixed << setprecision(7) << sqrt(tmp) << endl;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

### B - Integer Division

Given an integer X between −10^-18 and 10^18 (inclusive), print ⌊10/X​⌋.

* [abc239_b](https://atcoder.jp/contests/abc239/tasks/abc239_b)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    long double n;
    cin >> n;
   cout << n / 10 - (n % 10 < 0) << "\n";
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

### C - Knight Fork

On an xy-coordinate plane, is there a lattice point whose distances from two lattice points (x1, y1) and (x2, y2) are both √5.

![loading image](https://img.atcoder.jp/ghi/2bee701e93a6a0298f73121b85a03f46.jpg)

* [abc239_c](https://codeforces.com/contest/1634/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
bool solve()
{
    long double x1, x2, y1, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    long double sum = pow((x1 - x2), 2)  + pow((y1 - y2), 2);
    if (sum == 16 or sum == 20 or sum == 18 or sum == 10 or sum == 4 or sum == 2)
    return true;
    return false;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    if(solve()) cout << "YES\n"; else cout << "NO\n";
}
```

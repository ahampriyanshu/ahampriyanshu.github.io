---
title: "Div 2 | Ladders | a2oj"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, A2oj]
tags: [a2oj, ladder, codeforces]
---

## Problem 1-10

### 1 Queue at the School

* [Problem Statement](http://codeforces.com/problemset/problem/266/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, t;
    string str;
    cin >> n >> t >> str;
    while(t--){
        int i = 0;
        while (i<n-1)
        {
            if( str[i] == 'B' and str[i+1] == 'G')
            {
                str[i] = 'G';
                str[++i] = 'B';
            }
            i++;
        }
        
    }
    cout << str << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

### 2 Xenia and Ringroad

* [Problem Statement](http://codeforces.com/problemset/problem/339/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, m, prev, curr, ans = 0;
    cin >> n >> m;
    for (int i = 0; i < m; i++)
    {
        cin >> curr;
        if (i == 0)
        {
            ans += curr - 1;
        }
        else
        {
            if (curr < prev) ans += n - prev + curr;
            else if (curr > prev) ans += curr - prev;
        }
        prev = curr;
    }
    cout << ans << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

### 3 Fedor and New Game

* [Problem Statement](https://codeforces.com/problemset/problem/467/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, m, k, ans=0;
    cin >> n >> m >> k;
    vector<ll> vec(m+1);

    for (ll i = 0; i <= m; i++)
        cin >> vec[i];

    for (ll i = 0; i < m; i++)
    {
        ll t = 0;
        for (ll j = 0; j < n; j++)
            if (((vec[i] >> j) & 1) != ((vec[m] >> j) & 1))
                t++;
        if(t <= k)
            ans++;
    }

    cout << ans << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```
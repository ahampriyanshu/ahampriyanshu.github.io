---
title: "Atcoder Contests 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Atcoder]
excerpt: All of my accepted submissions on Atcoder [2022]
tags: [live, contest, atcoder, div2, grand]
---

## February

### ABC 239

#### A - Horizon

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

#### B - Integer Division

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

#### C - Knight Fork

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

## March


### ABC 242

#### A - Horizon

In a certain programming contest, T-shirts are awarded to participants according to the following rules.

* All participants who ranked A-th or higher get a T-shirt.
* Additionally, from the participants who ranked between (A+1)-th and B-th (inclusive), C participants chosen uniformly at random get a T-shirt.

There were 1000 participants in this contest, and all of them got different ranks.
Iroha-chan, who participated in this contest, ranked X-th.
Find the probability that she gets a T-shirt.

* [abc242_a](https://atcoder.jp/contests/abc242/tasks/abc242_a)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    long double a,b,c,x;
    cin >> a >> b >> c >> x;
    if(x <= a)
     cout << fixed << setprecision(7) << 1. << endl;
    else if(x <= b)
    cout << fixed << setprecision(7) << c/(b-a) << endl;
    else cout << fixed << setprecision(7) << 0. << endl;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

#### B - Integer Division

Given an integer X between −10^-18 and 10^18 (inclusive), print ⌊10/X​⌋.

* [abc239_b](https://atcoder.jp/contests/abc239/tasks/abc239_b)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    string str;
    cin >> str;
    sort(str.begin(), str.end());
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

#### C - 1111gal password

Given an integer N, find the number of integers X that satisfy all of the following conditions, modulo 998244353.

- X is an N-digit positive integer.
- Let X1, X2, …, XN
    - 1≤Xi≤9 for all integers 1≤i≤N;
    - ∣Xi −Xi+1∣≤1 for all integers 1≤i≤N−1.

* [abc242_c](https://atcoder.jp/contests/abc242/tasks/abc242_c)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
#define MOD 998244353
 
typedef long long int ll;
 
void solve()
{
    ll n, ans(0);
    cin >> n;
    vector<vector<ll>> dp( n+1 , vector<ll> (10, 0));
    for(ll i=0; i<n; i++) {
       for(ll j=1; j<10; j++) {
            if (i) {
                dp[i][j] += dp[i-1][j];
                dp[i][j] %= MOD;
                if (j != 1) 
                    dp[i][j] += dp[i-1][j-1];
                    
                if (j != 9) 
                    dp[i][j] += dp[i-1][j+1];
                
            } else  dp[i][j] = 1;
            dp[i][j] %= MOD;
        }
    }
 
    for (ll i=1; i<10; i++) {
        ans += dp[n-1][i];
        ans %= MOD;
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

## April


### ABC 246

#### A - Four Points

There is a rectangle in the xy-plane. Each edge of this rectangle is parallel to the x- or y-axis, and its area is not zero.

Given the coordinates of three of the four vertices of this rectangle, find the coordinates of the other vertex.

* [abc246_a](https://atcoder.jp/contests/abc246/tasks/abc246_a)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    int a,b,c,d,e,f;
    cin >> a >> b>> c >> d >> e >> f;
    if(a == c)
    cout << e;
    else if(a == e)
    cout << c;
    else
    cout << a;
    cout << " ";
    if(b == d)
    cout << f;
    else if(b == f)
    cout << d;
    else
    cout << b;
    cout << endl;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```


#### B - Get Closer

From the point (0,0) in a two-dimensional plane, let us move the distance of 1 toward the point (A,B). Find our coordinates after the move.

Here, after moving the distance of d from a point X to a point Y (d≤ length of the segment XY), we are at the point on the segment XY whose distance from X is d.
The Constraints guarantee that the distance between the points (0,0) and (A,B) is at least 1.

* [abc246_b](https://atcoder.jp/contests/abc246/tasks/abc246_b)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    double a,b,c,x,y;
    cin >> a >> b;
    c = sqrt((a * a) + (b * b));
    x = a/c;
    cout << fixed << setprecision(12) << x << " " << sqrt(1.0 - (x * x)) << endl;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```


#### C - 1111gal password

There are N items in a shop. For each i=1,2,…,N, the price of the i-th item is Ai yen (the currency of Japan).

Takahashi has K coupons.
Each coupon can be used on one item. You can use any number of coupons, possibly zero, on the same item. Using k coupons on an item with a price of a yen allows you to buy it for max{a−kX,0} yen.

Print the minimum amount of money Takahashi needs to buy all the items.

* [abc246_c](https://atcoder.jp/contests/abc246/tasks/abc246_c)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
ll solve()
{
    ll n, k, x, i = 0, d, ans = 0;
    cin >> n >> k >> x;
 
    vector<ll> vec(n);
 
    for (; i < n; i++)
        cin >> vec[i];
 
    for (i = 0; i < n; i++)
    {
        d = (vec[i] - (vec[i] % x)) / x;
        if (d < k)
        {
            vec[i] -= d * x;
            k -= d;
        }
        else
        {
            vec[i] = vec[i] - k * x < 0 ? 0 : vec[i] - k * x;
            k = 0;
            break;
        }
    }
 
    if (k > 0)
    {
        sort(vec.begin(), vec.end(), greater<int>());
        i = 0;
        while (k > 0 && i < n)
        {
            vec[i++] = 0;
            k--;
        }
    }
 
    return accumulate(vec.begin(), vec.end(), 0);
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll sol = solve();
    cout << sol << endl;
}
```
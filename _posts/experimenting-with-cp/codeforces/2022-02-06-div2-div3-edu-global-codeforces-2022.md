---
title: "Codeforces Contests 2022"
author: ahampriyanshu
math: true
categories: [Contests, Codeforces]
excerpt: All of my accepted submissions on Codeforces, 2022
tags: [live, contest, codeforces, solutions, c++, div2, div3, educational, global, round]
---

## February

### Round #770 (Div. 2)

#### Reverse and Concatenate

You are given a string s of length n and a number k. Let's denote by rev(s) the reversed string s (i.e. rev(s)=snsn−1...s1). You can apply one of the two kinds of operations to the string:

replace the string s with s+rev(s)
replace the string s with rev(s)+s
How many different strings can you get as a result of performing exactly k operations (possibly of different kinds) on the original string s?

In this statement we denoted the concatenation of strings s and t as s+t. In other words, s+t=s1s2...snt1t2...tm, where n and m are the lengths of strings s and t respectively.


* [1634/A](https://codeforces.com/contest/1634/problem/A)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
int solve()
{
    ll n, k, ans(0);
    string str;
    cin >> n >> k >> str;
    if(!k) return 1;
    bool isPal(true);
    for(int i = 0;  i < n; i++)
    if (str[i] != str[n - i - 1])
    return 2;
    return 1;
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

#### B. Fortune Telling

Your friends Alice and Bob practice fortune telling.

Fortune telling is performed as follows. There is a well-known array a of n non-negative integers indexed from 1 to n. The tellee starts with some non-negative number d and performs one of the two operations for each i=1,2,…,n, in the increasing order of i. The possible operations are:

* replace their current number d with d+ai
* replace their current number d with d⊕ai (hereinafter ⊕ denotes the bitwise XOR operation)
> Notice that the chosen operation may be different for different i and for different tellees.

One time, Alice decided to start with d=x and Bob started with d=x+3. Each of them performed fortune telling and got a particular number in the end. Notice that the friends chose operations independently of each other, that is, they could apply different operations for the same i.

You learnt that either Alice or Bob ended up with number y in the end, but you don't know whose of the two it was. Given the numbers Alice and Bob started with and y, find out who (Alice or Bob) could get the number y after performing the operations. It is guaranteed that on the jury tests, exactly one of your friends could have actually gotten that number.

* [1634/B](https://codeforces.com/contest/1634/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
bool isAlice = false;
 
void recur(ll index, ll sum, ll y, ll N, vector<ll> &vec)
{
    if(isAlice) return;
 
    if(index == N){
        if(sum == y) isAlice  = true;
        return;
    }
        
    recur(index+1, sum + vec[index], y, N, vec);
    recur(index+1, sum ^ vec[index], y, N, vec);
}
 
void solve()
{
    isAlice = false;
    ll n, x,y, ele, ans(0);
    vector<ll> vec;
    cin >> n >> x >> y;
    bool isPal(true);
    for(ll i = 0;  i < n; i++)
    {
        cin >> ele;
        vec.push_back(ele);
    }
    recur(0, x, y, n, vec);
    if(isAlice) cout << "Alice\n";
    else cout << "Bob\n";
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

### Round #771 (Div. 2)

#### A. Reverse

You are given a permutation p1,p2,…,pn of length n. You have to choose two integers l,r (1≤l≤r≤n) and reverse the subsegment [l,r] of the permutation. The permutation will become p1,p2,…,pl−1,pr,pr−1,…,pl,pr+1,pr+2,…,pn.

Find the lexicographically smallest permutation that can be obtained by performing exactly one reverse operation on the initial permutation.

Note that for two distinct permutations of equal length a and b, a is lexicographically smaller than b if at the first position they differ, a has the smaller element.

A permutation is an array consisting of n distinct integers from 1 to n in arbitrary order. For example, [2,3,1,5,4] is a permutation, but [1,2,2] is not a permutation (2 appears twice in the array) and [1,3,4] is also not a permutation (n=3 but there is 4 in the array).

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n;
    cin >> n;
    ll arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];

    for (int i = 0; i < n; i++)
    {
        if (i + 1 != arr[i])
        {
            ll j = i;
            while (arr[++j] != i + 1)
                ;
            reverse(arr + i, arr + j + 1);
            break;
        }
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

#### B. Odd Swap Sort

You are given an array a1,a2,…,an. You can perform operations on the array. In each operation you can choose an integer i (1 ≤ i < n), and swap elements ai and ai+1 of the array, if ai+ai+1 is odd.

Determine whether it can be sorted in non-decreasing order using this operation any number of times.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
bool solve()
{
    ll n;
    cin >> n;
    ll arr[n];
    for(ll i=0; i<n; i++)
        cin >> arr[i];

    for (ll i = 0; i < n-1; i++)
    {
    bool sortMore = false;
     for (ll j = 0; j < n-i-1; j++)
     {
        if (arr[j] > arr[j+1])
        {
            if((arr[j]+arr[j+1])%2 == 0) return false;
            else {
                swap(arr[j], arr[j+1]);
                sortMore = true;
            } 
        }
        
     }
     if (!sortMore)
        return true;
   }

    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        if(solve()) cout << "YES\n";
        else cout << "NO\n";
}
```


### Round #772 (Div. 2)

#### A. Min Or Sum

You are given an array a of size n.

* You can perform the following operation on the array:

* Choose two different integers i,j (1 ≤ i < j ≤ n), replace ai with x and aj with y. In order not to break the array, ai|aj=x|y must be held, where | denotes the bitwise OR operation. Notice that x and y are non-negative integers.

Please output the minimum sum of the array you can get after using the operation above any number of times.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    ll n, ele, ans(0);
    cin >> n;
    for (ll i = 0; i < n; i++)
    {
        cin >> ele;
        ans |= ele; 
    }
    cout << ans << endl;
 
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

#### B. Avoid Local Maximums

You are given an array a of size n. Each element in this array is an integer between 1 and 109.

You can perform several operations to this array. During an operation, you can replace an element in the array with any integer between 1 and 109.

Output the minimum number of operations needed such that the resulting array doesn't contain any local maximums, and the resulting array after the operations.

An element ai is a local maximum if it is strictly larger than both of its neighbors (that is, ai>ai−1 and ai>ai+1). Since a1 and an have only one neighbor each, they will never be a local maximum.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    ll n, ans(0);
    cin >> n;
    ll arr[n];
    for (ll i = 0; i < n; i++)
        cin >> arr[i];
 
    if (n == 2)
    {
        cout << 0 << endl
             << arr[0] << " " << arr[1] << endl;
        return;
    }
 
    for (ll i = 1; i < n - 1; i++)
    {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1])
        {
            if (i + 2 < n && arr[i+1] < arr[i+2])
               arr[i+1] = max(arr[i], arr[i+2]);
            else
                arr[i] = max(arr[i - 1], arr[i + 1]);
            ans++;
        }
    }
 
    cout << ans << endl;
    for (ll i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

## March


### Round #755 (Div. 2)

#### A. Game

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

## April


### April Fools Day Contest 2022

#### A. Game

![loading](https://espresso.codeforces.com/fbe5755ad6373642cf347efaf5896410a028f4fb.png)

* [1663/A](https://codeforces.com/contest/1663/problem/A)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
int main(){
cout << "red panda" << endl;
}
```

#### C. Pōja Verdon

Aenar has an array a consisting of n integers.

* [1663/A](https://codeforces.com/contest/1663/problem/C)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
int main(){
 
int n, ele, sum = 0;
cin >> n;
 
for(int i=0; i<n; i++){
    cin >> ele;
    sum += ele;
}
 
cout << sum << endl;
 
}
```

## June

### Round #797 (Div. 3)

#### A. Print a Pedestal

Given the integer n — the number of available blocks. You must use all blocks to build a pedestal.

The pedestal consists of 3 platforms for 2-nd, 1-st and 3-rd places respectively. The platform for the 1-st place must be strictly higher than for the 2-nd place, and the platform for the 2-nd place must be strictly higher than for the 3-rd place. Also, the height of each platform must be greater than zero (that is, each platform must contain at least one block).

![fig1](https://espresso.codeforces.com/24d7d231439d1d5b474e5d7f27d3fdec09725412.png)

Example pedestal of n=11 blocks: second place height equals 4 blocks, first place height equals 5 blocks, third place height equals 2 blocks.
Among all possible pedestals of n blocks, deduce one such that the platform height for the 1-st place minimum as possible. If there are several of them, output any of them.

* [1690/A](https://codeforces.com/contest/1690/problem/A)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll n, hq, hr, h1, h2, h3;
    cin >> n;

    hq = n / 3;
    hr = n % 3;

    if (hr == 2)
    {
        cout << hq + 1 << " " << hq + 2 << " " << hq - 1 << endl;
    }
    else if (hr == 1)
    {
        if (hq == 2)
            cout << hq << " " << hq + 2 << " " << hq - 1 << endl;
        else
            cout << hq + 1 << " " << hq + 2 << " " << hq - 2 << endl;
    }
    else
    {
        cout << hq << " " << hq + 1 << " " << hq - 1 << endl;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        solve();

    return 0;
}
```

#### B. Array Decrements

Kristina has two arrays a and b, each containing n non-negative integers. She can perform the following operation on array a any number of times:

* apply a decrement to each non-zero element of the array, that is, replace the value of each element ai such that ai>0 with the value ai−1 (1≤i≤n). If ai was 0, its value does not change.

Determine whether Kristina can get an array b from an array a in some number of operations (probably zero). In other words, can she make ai=bi after some number of operations for each 1≤i≤n?

For example, let n=4, a=[3,5,4,1] and b=[1,3,2,0]. In this case, she can apply the operation twice:

* after the first application of the operation she gets a=[2,4,3,0];
* after the second use of the operation she gets a=[1,3,2,0].

Thus, in two operations, she can get an array b from an array a.

* [1690/B](https://codeforces.com/contest/1690/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

bool solve()
{
    ll n, i, diff, sum = 0, mini = INT_MAX;
    cin >> n;
    vector<ll> a(n), b(n);

    for (i = 0; i < n; i++)
        cin >> a[i];

    for (i = 0; i < n; i++)
        cin >> b[i];

    for (i = 0; i < n; i++)
    {
        diff = a[i] - b[i];
        if (diff < 0)
            return false;
        if (b[i] > 0)
            mini = min(mini, diff);
    }

    for (i = 0; i < n; i++)
    {
        a[i] -= mini;
        if (a[i] > b[i])
            return false;
    }

    return true;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
    {
        if (solve())
            cout << "YES\n";
        else
            cout << "NO\n";
    }
    return 0;
}
```


## July

### Round #804 (Div. 2)

#### A. The Third Three Number Problem

You are given a positive integer n. Your task is to find any three integers $a$, $b$ and $c$ $(0 ≤a ,b, c ≤ 10^9)$ for which $(a \bigoplus b)+(b \bigoplus c)+(a \bigoplus c)=n$, or determine that there are no such integers.

Here $a \bigoplus b$ denotes the bitwise XOR of $a$ and $b$. For example, $2 \bigoplus 4=6$ and $3 \bigoplus 1=2$.

* [1699/A](https://codeforces.com/contest/1699/problem/A)

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long int ll;
 
void solve()
{
    ll n;
    cin >> n;

    if(n%2) {
        cout << -1 << endl;
        return;
    }

    ll a = n/2, b = 0, c = 0;
    cout << a << " " << b << " "<< c << endl;
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
       
}
```

#### B. Almost Ternary Matrix

You are given two **even** integers $n$ and $m$. Your task is to find any binary matrix $a$ with $n$ rows and $m$ columns where every cell $(i,j)$ has **exactly** two neighbours with a different value than $a_i,j$.

Two cells in the matrix are considered neighbours if and only if they share a side. More formally, the neighbours of cell $(x,y)$ are: $(x−1,y), (x,y+1), (x+1,y) and (x,y−1)$.

It can be proven that under the given constraints, an answer always exists.

* [1699/B](https://codeforces.com/contest/1699/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, m;
    cin >> n >> m;
    bool zero = true;
    string even = "1 0 ", odd = "0 1 ";
    for (int i = 1; i <= n; i++)
    {
            for (int j = 1; j <= m/2; j++)
                if(i%4 <= 1)
                    if(j%2)
                        cout << odd;
                    else
                        cout << even;
                else
                    if(j%2)
                        cout << even;
                    else
                        cout << odd;
            
        cout << endl;
    }
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```
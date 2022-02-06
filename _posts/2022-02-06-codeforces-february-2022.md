---
title: "Codeforces | February | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codeforces]
tags: [live, contest, codeforces, div2, div3, educational, global, round]
---

All of my accepted solutions on Codeforces(February 2022).

## Round #770 (Div. 2)

### Reverse and Concatenate

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

### Fortune Telling

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
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

## Round #771 (Div. 2)

### A. Reverse

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

### B. Odd Swap Sort

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
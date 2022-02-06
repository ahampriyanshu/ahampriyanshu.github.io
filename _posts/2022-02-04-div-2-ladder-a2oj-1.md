---
title: "1-10 | Div 2 | Ladders | a2oj"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, A2oj]
tags: [a2oj, ladder, codeforces, id5, problems, one, ten]
---

## 1 Queue at the School

During the break the schoolchildren, boys and girls, formed a queue of n people in the canteen. Initially the children stood in the order they entered the canteen. However, after a while the boys started feeling awkward for standing in front of the girls in the queue and they started letting the girls move forward each second.

Let's describe the process more precisely. Let's say that the positions in the queue are sequentially numbered by integers from 1 to n, at that the person in the position number 1 is served first. Then, if at time x a boy stands on the i-th position and a girl stands on the (i + 1)-th position, then at time x + 1 the i-th position will have a girl and the (i + 1)-th position will have a boy. The time is given in seconds.

You've got the initial position of the children, at the initial moment of time. Determine the way the queue is going to look after t seconds.

* [266B](http://codeforces.com/problemset/problem/266/B)

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

## 2 Xenia and Ringroad

Xenia lives in a city that has n houses built along the main ringroad. The ringroad houses are numbered 1 through n in the clockwise order. The ringroad traffic is one way and also is clockwise.

Xenia has recently moved into the ringroad house number 1. As a result, she's got m things to do. In order to complete the i-th task, she needs to be in the house number ai and complete all tasks with numbers less than i. Initially, Xenia is in the house number 1, find the minimum time she needs to complete all her tasks if moving from a house to a neighboring one along the ringroad takes one unit of time.

Please, do not use the %lld specifier to read or write 64-bit integers in С++. It is preferred to use the cin, cout streams or the %I64d specifier.

* [339B](http://codeforces.com/problemset/problem/339/B)

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

## 3 Fedor and New Game

After you had helped George and Alex to move in the dorm, they went to help their friend Fedor play a new computer game «Call of Soldiers 3».

The game has (m + 1) players and n types of soldiers in total. Players «Call of Soldiers 3» are numbered form 1 to (m + 1). Types of soldiers are numbered from 0 to n - 1. Each player has an army. Army of the i-th player can be described by non-negative integer xi. Consider binary representation of xi: if the j-th bit of number xi equal to one, then the army of the i-th player has soldiers of the j-th type.

Fedor is the (m + 1)-th player of the game. He assume that two players can become friends if their armies differ in at most k types of soldiers (in other words, binary representations of the corresponding numbers differ in at most k bits). Help Fedor and count how many players can become his friends.

* [467B](https://codeforces.com/problemset/problem/467/B)

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

## 4 Random Teams

n participants of the competition were split into m teams in some manner so that each team has at least one participant. After the competition each pair of participants from the same team became friends.

Your task is to write a program that will find the minimum and the maximum number of pairs of friends that could have formed by the end of the competition.

* [478B](https://codeforces.com/problemset/problem/467/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll m,n;
    cin >> n >> m;
    ll q(n/m), r(n%m);
    ll mini = (q*(q+1)*r)/2 + (q*(q-1)*(m-r))/2;
    ll maxi = ((n-m) * (n-m+1))/2;
    cout << mini <<" "<< maxi << endl;
}
```
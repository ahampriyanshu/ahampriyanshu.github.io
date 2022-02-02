---
title: "CodeChef Starters 24 | Div 3 | Codechef"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codechef]
tags: [live, contest, codechef, starters]
---

## Badminton Serves 

```
Chef is playing badminton today. The service rules of this singles game of badminton are as follows:

The player who starts the game serves from the right side of their court.
Whenever a player wins a point, they serve next.
1.If the server has won an even number of points during a game, then they will serve from the right side of 1. the service court for the subsequent point.
1. Chef will be the player who begins the game.

Given the number of points P obtained by Chef at the end of the game, please determine how many times Chef served from the right side of the court.
```

* [Problem](https://www.codechef.com/START24C/problems/BADMINTON)

```java
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;
void solve()
{
    ll p;
    cin >> p;
    cout << p/2 + 1 << endl;


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
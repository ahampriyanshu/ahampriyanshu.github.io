---
title: "Codechef | March | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codechef]
tags: [live, contest, codechef, starters, cookoff, lunchtime]
---

All of my accepted submissions on Codechef(March 2022).

## Lunchtime

### Parallel Processing

There are N tasks waiting in line to be executed. The execution time for the ith task is Ai seconds.

Chef has two processors to execute these N tasks. Both these processors work simultaneously. Each processor executes the assigned tasks one by one.

Chef assigns a prefix of these tasks to the first processor and the remaining tasks to the second processor.

For example, if there are 3 tasks, Chef can do one of the following:

- Assign no task to the first processor. This means, the second processor will execute tasks 1,2 and 3.
- Assign task 1 to the first processor. This means, the second processor will execute tasks 2 and 3.
- Assign tasks 1 and 2 to the first processor. This means, the second processor will execute task 3.
- Assign tasks 1,2 and 3 to the first processor. Thus, second processor would execute no tasks.

Find the minimum time in which all the tasks can be executed.

* [PLPROCESS](https://www.codechef.com/LTIME105B/problems/PLPROCESS)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

ll solve()
{
    ll n, e, ans(0);
    cin >> n;
    vector<ll> vec;

    for(ll i=0; i<n; i++)
        {
            cin >> e;
            vec.push_back(e);
        }
    if(n == 1) return vec[0];

    if(n == 2) return max(vec[0], vec[1]);

    ll start = 1, end = n - 1;

    ll p1 = vec[0], p2 = vec[end];
    end--;

    while(start <= end){

    if(p1 < p2){
        p1 += vec[start];
        start++;
    }else{
        p2 += vec[end];
        end--;
    }

    }
    
    return max(p1, p2);

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

### Four Equidistant Points on a Grid

The manhattan distance between two points P1(x1,y1) and P2(x2,y2) is given by d(P1,P2)=|x2−x1|+|y2−y1|.

In other words, manhattan distance is the minimum number of moves required to reach P2 from P1 if, in each move, you are allowed to travel one unit along the X-axis or one unit along the Y-axis.

You are given an integer D. Find four points (P1,P2,P3,P4) with integer coordinates, such that:

- The absolute value of both X and Y coordinates of all points is at most 109.
- The manhattan distance between any pair of points is D . More formally, d(Pi,Pj)=D for all 1 ≤ i < j ≤ 4.
If such set of points do not exist, print -1. If there are multiple solutions, you may print any.

* [DISTCON](https://www.codechef.com/LTIME105B/problems/DISTCON)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll d;
    cin >> d;

    if(d%2){
        cout << -1 << endl; 
        return;
    }

    cout << 0 << " " <<  d/2 << endl;
    cout << d/2 << " " <<  0 << endl;
    cout << d << " " <<  d/2 << endl;
    cout << d/2  <<  " " << d << endl;

}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
        solve();
}
```
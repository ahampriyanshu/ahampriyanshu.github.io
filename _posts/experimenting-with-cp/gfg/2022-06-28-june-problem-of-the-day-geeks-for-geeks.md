---
title: "June | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, June 2022
math: true
tags:
  [
    gfg,
    geeksforgeeks,
    geeks,
    for,
    potd,
    problem,
    of,
    the,
    day,
    june,
    ds,
    array,
    tree,
    trie,
    string,
    stacks,
    queue,
    linked list,
  ]
---

## 28 June | Sum of elements between k1'th and k2'th smallest elements

Given an array $A[ ]$ of $N$ positive integers and two positive integers $K1$ and $K2$. Find the sum of all elements between $K_1$ and $K_2$ smallest elements of the array. It may be assumed that $(1 <= k1 < k2 <= n)$.

- [Practice](https://practice.geeksforgeeks.org/problems/sum-of-elements-between-k1th-and-k2th-smallest-elements3133/1)

```cpp
    long long sumBetweenTwoKth( long long A[], long long N, long long K1, long long K2)
    {
        long long ans = 0;

        sort(A, A+N);

        for(int i=K1; i<K2-1; i++)
            ans += A[i];

        return ans;
    }
```

## 29 June | Jump Game

Given an positive integer $N$ and a list of $N$ integers $A[ ]$. Each element in the array denotes the maximum length of jump you can cover. Find out if you can make it to the last index if you start at the first index of the list.

- [Practice](https://practice.geeksforgeeks.org/problems/jump-game/1#)

```cpp
    int canReach(int A[], int N) {
        if(N == 1) return 1;
        if(A[0] == 0) return 0;

        int reach = 0;

        for(int i = 0; i < N; i++)
        {
            if(i > reach) return 0;
            reach = max(reach, i + A[i]);
        }

        return 1;
    }
```

## 30 June | Number of ways

Given a value $N$. In how many ways you can construct a grid of size $N x 4$ using tiles of size $1 x 4$.

- [Practice](https://practice.geeksforgeeks.org/problems/number-of-ways2552/1#)

```cpp
long long int arrangeTiles(int N){

    vector<long long int> dp(90);
    dp[1] = dp[2] = dp[3] = 1;
    dp[4] = 2;

    for(int i=5;i<=N;i++)
        dp[i] = dp[i-1] + dp[i-4];

    return dp[N];
}
```

---
title: "DSA Part 8: Dynamic Programming"
author: ahampriyanshu
excerpt: What is dynamic programming, top down and bottom up approach, lcs, lis
categories:
  - DSA
tags:
  - "recursion"
  - "tail recursion"
  - "is_sorted()"
  - "fibonacci series"
  - "subset"
---

> Dynamic Programming is an optimization over plain recursion. In this, we re-use the solutions of subproblems for overlapping subproblems

Two types are

**1.** Memoization - Top Down

No of dimenstions $rightarrow$ No of changing params in the recursive call. Will reduce the time complexity from $O(2^n)$ to $O(n)$.

```cpp
int memo[n+1];
memset(memo, -1, sizeof(memo));

int fib(int n){

  if(memo[n] == -1)
    memo[n] == (n == 0 || n==1) ? n : fib(n-1) + fib(n-2);
  return memo[n];

}
```

**2.** Tabulation - Bottom Up

Doesn't consume space in stack for recursion calls.

```cpp
int fib(int n){

  int f[n+1];
  f[0] = 0, f[1] = 1;

  for(int i=2; i<=n; i++)
    f[i] = f[i-i] + f[i-2];

  return f[n];

}
```

## Applications

| Utitlity            | Algorithm                    |
| :------------------ | :--------------------------- |
| Git Diff            | LCS                          |
| Close Search        | Edit distance                |
| Shortest Path       | Bellman Ford, Floyd Warshall |
| Resource Allocation | 0-1 knapsack                 |

## Problem

### Longest Common Subsequences

Given two sequences, find the length of longest subsequence present in both of them.

- [Practice](https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1#)

* Naive

```cpp
    int longestCommonSubstr (string S1, string S2, int n, int m)
    {
    if(n == 0 || m == 0)
        return 0;

    if(S1[n-1] == S2[m-1])
        return 1 + longestCommonSubstr(S1, S2, n-1, m-1);

    return max(longestCommonSubstr(S1, S2, n, m-1), longestCommonSubstr(S1, S2, n-1, m));
    }
```

**Time Complexity:** $O(2^n)$

- Memoization

```cpp
int lcs( string s1, string s2, int m, int n, vector<vector<int> >& dp){

  if(dp[m][n] != -1)
    return dp[m][n];

  if(m == 0 || n == 0)
    return 0;

  if (s1[m-1] == s2[n-1])
    return dp[m][n] = 1 + lcs(s1, s2, m-1, n-1);

  return dp[m][n] = max(lcs(s1, s2, m-1, n), lcs(s1, s2, m, n-1));

}
```

**Time Complexity:** $O(m \times n)$

**Auxiliary Space:** $O(m \times n)$

- Tabulation

```cpp
int lcs(int m, int n, string X, string Y)
{
  int L[m+1][n+1];

  for (int i=0; i<=m; i++)
    for (int j=0; j<=n; j++)
      {
        if (i == 0 || j == 0)
          L[i][j] = 0;
        else if (X[i-1] == Y[j-1])
          L[i][j] = L[i-1][j-1] + 1;
        else
          L[i][j] = max(L[i-1][j], L[i][j-1]);
        }
  return L[m][n];
}
```

**Time Complexity:** $O(m \times n)$

**Auxiliary Space:** $O(m \times n)$

- Space Optimized

```cpp
int lcs(int m, int n, string X, string Y)
{

    int L[2][n + 1];

    bool index;

    for (int i = 0; i <= m; i++)
    {
        index = i & 1;

        for (int j = 0; j <= n; j++)

            if (i == 0 || j == 0)
                L[index][j] = 0;
            else if (X[i-1] == Y[j-1])
                 L[index][j] = L[1 - index][j - 1] + 1;
            else
                L[index][j] = max(L[1 - index][j],
                               L[index][j - 1]);
    }
    return L[index][n];
}
```

**Time Complexity:** $O(m \times n)$

**Auxiliary Space:** $O(n)$

### Coin Change

Given a value N, find the number of ways to make change for N cents, if we have infinite supply of each of $S = { S1, S2, .. , SM }$ valued coins.

- Naive

```cpp
    long long int count(int S[], int m, int n) {

    long long int i, j,x,y,table[n + 1][m];

    for (i = 0; i < m; i++)
        table[0][i] = 1;

    for (i = 1; i < n + 1; i++)
    {
        for (j = 0; j < m; j++)
        {
            x = (i-S[j] >= 0) ? table[i - S[j]][j] : 0;
            y = (j >= 1) ? table[i][j - 1] : 0;
            table[i][j] = x + y;
        }
    }
    return table[n][m - 1];
    }
```

- Optimal

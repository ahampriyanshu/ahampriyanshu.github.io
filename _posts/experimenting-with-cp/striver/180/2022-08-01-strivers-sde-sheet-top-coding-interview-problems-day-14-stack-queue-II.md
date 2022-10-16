---
title: "Stack & Queue II | Striver’s SDE Sheet"
author: ahampriyanshu
math: true
excerpt: C++ Solutions to Striver's 180
categories: [Sheets, TakeUforward]
tags:
  [
    striver,
    tuf,
    ds,
    algo,
    takeUforward,
    striver180,
    dsa180,
    "180",
    Linked,
    List,
    day,
    "2",
  ]
---

## Problem 1: Nth Root Of M

You are given two positive integers N and M. You have to find the Nth root of M i.e. M^(1/N).

- [Code Studio](https://www.codingninjas.com/codestudio/problems/1062679)
- [GFG](https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1/#)

### Worst

Import math library and use built-in methods.

### Better

Apply binary search.

**Time Complexity:** $ O(n*log(m*(d^10))) $

**Auxiliary Space:** $ O(1) $

```cpp
#include<bits/stdc++.h>

using namespace std;

class Solution {
  public:

    int multiply(int number, int times, int mx) {
      long long int product = 1;
      for (int i = 0; i < times; i++) {
        product *= number;
        if (product > mx) return mx + 2;
      }
      return product;
    }

  int NthRoot(int n, long long m) {

    int l = 1;
    int r = m;

    while (l <= r) {
      int mid = l + (r - l) / 2;
      int d = multiply(mid, n, m);
      if (d == m) return mid;
      if (d < m) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return -1;
  }

};

// { Driver Code Starts.
int main() {
  int tc;
  cin >> tc;
  while (tc--) {
    int n, m;
    cin >> n >> m;
    Solution ob;
    int ans = ob.NthRoot(n, m);
    cout << ans << "\n";
  }
  return 0;
} // } Driver Code Ends
```

### Optimal

Apply [Newton-Raphson Method](https://brilliant.org/wiki/newton-raphson-method/)

**Time Complexity:** $ O(log(M) \* log(N)) $

**Auxiliary Space:** $ O(1) $

```cpp

double findNthRootOfM(int n, long long m) {

    double error = 1e-7;
    double diff = 1e18;
    double xk = 2;

    while (diff > error) {

        double xk_1 = (pow(xk, n) * (n - 1) + m) / (n * pow(xk, n - 1));
        diff = abs(xk - xk_1);
        xk = xk_1;
    }

    return xk;
}
```

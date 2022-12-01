---
title: "Array IV | Striver’s SDE Sheet"
author: ahampriyanshu
math: true
excerpt: C++ Solutions to Striver's 180
categories: [Sheets, TakeUforward]
tags:
  [
    striver,
    sde,
    sheets,
    algo,
    ds,
    takeUforward,
    striver180,
    dsa180,
    "180",
    array,
    day,
    "2",
  ]
---

## Problem 1

- [Leetcode](https://leetcode.com/problems/set-matrix-zeroes/)

### Brute

This question has been updated on leetcode with newer constraints : _-2^31 <= matrix[i][j] <= 2^31 - 1_. Hence, we will have to use some extra space.

```cpp
class Solution {
public:

    void nullify(vector<vector<int>>& matrix, int a, int b, int r, int c){

        for (int i = 0; i < a; i++)
        {
            matrix[i][c] = 0;
        }

        for (int i = 0; i < b; i++)
        {
            matrix[r][i] = 0;
        }
    }

    void setZeroes(vector<vector<int>>& matrix) {

        int m = matrix.size();
        int n = matrix[0].size();
        vector<pair<int, int>> indexes;
        pair<int, int> index;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (matrix[i][j] == 0)
                {
                    index.first = i;
                    index.second = j;
                    indexes.push_back(index);
                }
            }
        }

        for (auto e : indexes)
        {
            nullify(matrix, m, n, e.first, e.second);
        }

    }
};
```

### Optimal

```cpp
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int rows = matrix.size();
        int cols = matrix[0].size();
        bool zeroth_col = false;
        for (int j = 0; j < rows; ++j) {
            if (matrix[j][0] == 0) zeroth_col = true;
            for (int i = 1; i < cols; ++i) {
                if (matrix[j][i] == 0) {
                    matrix[j][0] = matrix[0][i] = 0;
                }
            }
        }
        for (int j = rows - 1; j >= 0; --j) {
            for (int i = cols - 1; i > 0; --i) {
                if (matrix[j][0] == 0 || matrix[0][i] == 0) matrix[j][i] = 0;
            }
            if (zeroth_col) matrix[j][0] = 0;
        }
    }
};
```

## Problem 5

- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### Brute

This question has been updated on leetcode with newer constraints : _-2^31 <= matrix[i][j] <= 2^31 - 1_. Hence, we will have to use some extra space.

### Optimal

- In this approach, we will iterate over the array and store the minimun value & the maximum profit in seperate variables.

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(1) $

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy = INT_MAX, n =  prices.size(), profit = 0;
        for (auto price : prices)
        {
            if (price < buy) buy = price;
            if (price - buy > profit) profit = price - buy;
        }
        return profit;
    }
};
```

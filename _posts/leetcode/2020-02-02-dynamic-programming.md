---
title: "Dynamic Programming I | Study Plan | Leetcode"
author: ahampriyanshu
categories: [Sheets, Leetcode]
excerpt: C++ Solutions to Dynamic Programming I, Leetcode.
tags: [leetcode, programming, skills, back, to, study, plan, easy]
---

## Day 1 | Array

### 509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given n, calculate F(n).

- [Practice](https://leetcode.com/problems/fibonacci-number/)

#### Recursion

```cpp
class Solution {
public:
    int fib(int n) {

        if(!n) return 0;
        if(n == 1 or n == 2) return 1;

        vector<int> dp(n);

        dp[0] = dp[1] = 1;

        for(int i=2; i<n; i++)
            dp[i] = dp[i-1] + dp[i-2];

    return dp[n-1];
    }
};
```

#### DP

```cpp
int fib(int n) {
	if(n <= 1)
		return n;
	return fib(n - 1) + fib(n - 2);
}
```

#### Binet's Formula

Binet's formula for the n'th Fibonacci number:

![loading image](https://wikimedia.org/api/rest_v1/media/math/render/svg/57459135cb5773799fab490a49311b3725df94fd)

This formula can compute the solution in **O(1) time** and **O(1) space**.

This implementation breaks down after n > 71 because Math.pow uses floating point numbers to be able to do exponents in O(1) time.

```cpp
class Solution {
public:
    int fib(int n) {
        double sqrt5 = sqrt(5);
        return (pow(1 + sqrt5, n) - pow(1 - sqrt5, n)) / pow(2, n) / sqrt5;
    }
};
```

#### Golden Ration

This formula can compute the solution in **O(logn) time** and **O(1) space**.

This implementation breaks down after n > 71 because Math.pow uses floating point numbers to be able to do exponents in O(logn) time.

```cpp
int fib(int n) {
	double goldenRatio = (1 + sqrt(5)) / 2;
	return round(pow(goldenRatio, n) / sqrt(5));
}
```

### 1491. Average Salary Excluding the Minimum and Maximum Salary

The Tribonacci sequence Tn is defined as follows:

`T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.`

Given n, return the value of Tn.

- [Practice](https://leetcode.com/problems/n-th-tribonacci-number/discuss/1575588/C%2B%2B-Easy-Solution-or-DP-or-100-Faster)

#### Recursion

```cpp
class Solution {
public:
    int tribonacci(int n) {
        if(n<2)return n;
        if(n==2)return 1;

        return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
    }
};
```

### DP

```cpp
class Solution {
public:
    int tribonacci(int n) {
    int dp[3] = {0, 1, 1}4;
    for (int i = 3; i <= n; ++i)
        dp[i%3] += dp[(i+1)%3] + dp[(i+2)%3];
    return dp[n%3];
    }
};
```

## Day 2

### 70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

- [Practice](https://leetcode.com/problems/climbing-stairs/)

#### Recursion

```cpp
class Solution {
public:
    int climbStairs(int n) {
    return n <= 2 ? n : climbStairs(n-1) + climbStairs(n-2);
    }
};
```

### DP

```cpp
class Solution {
public:
    int climbStairs(int n) {
    if(n <= 2) return n;
    int * dp = new int[n];
    dp[0] = 1, dp[1] = 2;
    for(int i = 2; i < n; i++)
        dp[i] = dp[i-1] + dp[i-2];

    return dp[n-1];
    }
};
```

### 746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

- [Practice](https://leetcode.com/problems/min-cost-climbing-stairs/)

```cpp
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n=cost.size();
        int tmp, first=cost[0],second=cost[1];
        for(int i=2;i<n;i++){
            tmp=min(first,second)+cost[i];
            first=second;
            second=tmp;
        }
        return min(first,second);
    }
};
```

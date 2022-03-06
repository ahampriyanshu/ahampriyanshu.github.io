---
title: "Programming Skills I | Study Plan | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, programming, skills, back, to, study, plan, easy]
---

C++ Solutions to Programming Skills I, Leetcode.

## Day 1 | Array

### 1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).


* [Practice](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

```cpp
class Solution {
public:
    int countOdds(int low, int high) {
        return (high + 1) / 2 - low / 2;
    }
};
```

### 1491. Average Salary Excluding the Minimum and Maximum Salary

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

* [Practice](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

```cpp
class Solution {
public:
    double average(vector<int>& salary){
        double ans(0);
        int mini(INT_MAX), maxi(INT_MIN);
        for(auto e: salary){
            ans += e;
            mini = min(e, mini);
            maxi = max(e, maxi);
        }
        
        ans = ans - mini - maxi;
        ans = ans / (salary.size() - 2);
        return ans;
    }
};
```

### STL

```cpp
double average(vector<int>& s) {
    return (accumulate(begin(s), end(s), 0.) - *min_element(begin(s), end(s)) - *max_element(begin(s), end(s))) / (s.size() - 2);
}
```

## Day 2 | Operator

### 191. Number of 1 Bits

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

**Note:**

- Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

* [Practice](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

#### Brute

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int cnt=0;
        while(n){
            if((n&1)>0) ++cnt;
            n=n>>1;
        }
        return cnt;
    }
};
```

#### Optimal

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int cnt=0;
        while(n){
			++cnt;
            n=n&(n-1);
        }
        return cnt;
    }
};
```

#### STL

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        return __builtin_popcount(n);
    }
};
```

### 1281. Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

* [Practice](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/)

```cpp
class Solution {
public:
    int subtractProductAndSum(int n) {
        int e, sum(0), prod(1);
        while(n){
            e = n%10;
            sum += e;
            prod *= e;
            n /= 10;
        }
        return prod - sum;
    }
};
```

## Day 3 | Conditional Statements

### 976. Largest Perimeter Triangle

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

* [Practice](https://leetcode.com/problems/largest-perimeter-triangle/)

```cpp
class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        int  len(nums.size());
        sort(nums.begin(), nums.end(), greater<int>());
        
        for(int i=0; i<len-2; i++)
            if(nums[i] < nums[i+1] + nums[i+2] ) 
                return nums[i] + nums[i+1] + nums[i+2];
        
        return 0;
    }
};
```

### 1779. Find Nearest Point That Has the Same X or Y Coordinate

You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

* [Practice](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

```cpp
class Solution {
public:
    int nearestValidPoint(int x, int y, vector<vector<int>>& points) {
        int ans = -1, a, b, c, dist = INT_MAX;
        for(int i=0; i<points.size(); i++){
            a = points[i][0], b = points[i][1];
            if(a==x || b==y){
                c = abs(x-a) + abs(y-b);
                if(c<dist){
                    dist = c;
                    ans = i;
                }
            }
        }
        return ans;
    }
};
```
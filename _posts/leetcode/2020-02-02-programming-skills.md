---
title: "Programming Skills I | Study Plan | Leetcode"
author: ahampriyanshu
categories: [Sheets, Leetcode]
excerpt: C++ Solutions to Programming Skills I, Leetcode.
tags: [leetcode, programming, skills, back, to, study, plan, easy]
---

## Day 1 | Array

### 1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive)

- [Practice](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

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

- [Practice](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

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

- [Practice](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/)

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

- [Practice](https://leetcode.com/problems/largest-perimeter-triangle/)

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

- [Practice](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

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

## Day 4 | Loop

### 1502. Can Make Arithmetic Progression From Sequence

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

- [Practice](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/)

```cpp
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        sort(arr.begin(), arr.end());

        int n = arr.size();

        if(n  == 2) return true;
        int diff = arr[1] - arr[0];


        for(int i = 1; i<n-1; i++)
            if(arr[i+1] - arr[i] != diff)
                return false;
        return true;
    }
};
```

#### Linear Time

```cpp
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        sort(arr.begin(), arr.end());

        int n = arr.size();

        if(n  == 2) return true;
        int pos, mini = INT_MAX, maxi = INT_MIN;

        for (int e : arr) {
            mini = min(mini, e);
            maxi = max(maxi, e);
        }

        if ((maxi - mini) % (n - 1)) return false;
        int d = (maxi - mini) / (n - 1);

        int i = 0;
        while (i < n) {
            if (arr[i] == mini + i * d) i++;
            else if ((arr[i] - mini) % d) return false;
            else {
                pos = (arr[i] - mini) / d;
                if (arr[pos] == arr[i]) return false;
                swap(arr[i], arr[pos]);
            }
        }
        return true;

    }
};
```

### 202. Happy Number

Write an algorithm to determine if a number n is happy.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return `true` if n is a **happy number**, and `false` if not.

- [Practice](https://leetcode.com/problems/happy-number/)

```cpp
class Solution {
public:
    bool isHappy(int n) {
        int num = n,ans = 0;
        unordered_map<int, int> ump;
        ump[n]++;
        while(1){

            while(num){
            ans += num % 10 * num % 10;
            num /= 10;
            }

            if(ans == 1) return true;
            if(ump[ans]) break;
            ump[ans]++;
            num = ans;
            ans = 0;

        }
     return false;
    }
};
```

#### Floyd's Cycle Detection Algorithm

```cpp
class Solution {
public:
    int next(int n)
    {
        int sum = 0;

        while(n)
        {
            sum += pow(n % 10,2);
            n = n / 10;
        }

        return sum;
    }

public:
    bool isHappy(int n) {
        int slow = next(n);
        int fast = next(next(n));

        while(slow != fast)
        {
            slow = next(slow);
            fast = next(next(fast));
        }

        return fast == 1 ;
    }
};
```

#### Brent's Cycle Detection Algorithm

```cpp
class Solution {
public:
    int next(int n)
    {
        int sum = 0;

        while(n)
        {
            sum += pow(n % 10,2);
            n = n / 10;
        }

        return sum;
    }

public:
    bool isHappy(int n) {
        int slow = n;
        int fast = next(n);
        int cnt = 1;
        int lim = 2;

        while(slow != fast)
        {
            if(cnt == lim)
            {
                cnt = 1;
                lim = lim*2;
                slow = fast;
            }
            else
                cnt ++;

            fast = next(fast);
        }

        return fast == 1 ;
    }
};
```

### 1790. Check if One String Swap Can Make Strings Equal

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

- [Practice](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/)

```cpp
class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
	int n = size(s1), cnt = 0, i1, i2;
	for(int i = 0; i < n; i++)
		if(s1[i] != s2[i])
            (cnt++ ? i2 : i1) = i;
	return cnt == 0 || (cnt == 2 && s1[i1] == s2[i2] && s1[i2] == s2[i1]);
    }
};
```

## Day 6 | Array

### 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Note :** that you must do this in-place without making a copy of the array.

- [Practice](https://leetcode.com/problems/move-zeroes/submissions/)

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int curr=0, end=0, n(nums.size());

        while(curr < n)
            if(nums[curr] == 0) curr++;
            else nums[end++] = nums[curr++];


        while(end <n)
            nums[end++] = 0;
    }
};
```

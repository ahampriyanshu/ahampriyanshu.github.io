---
title: "Array I | Striver’s SDE Sheet"
author: ahampriyanshu
math: true
excerpt: C++ Solutions to Striver's 180
categories: [Sheets, TakeUforward]
tags: [striver, tuf, ds, algo, takeUforward, striver180, dsa180, "180"]
---

### Problem 1

Find the duplicate in an array of N+1 integers.

- [Leetcode](https://leetcode.com/problems/find-the-duplicate-number/)

#### Worst

Just apply mergesort

Time Complexity: $ O(nlogn) $

Auxiliary Space: $ O(n) $

#### Better

Count the occurences of 0,1,2 in first transversal and update the array in the second.

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp

```

#### Optimal

Use three variable pointing to and

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int low=0,high=nums.size()-1,mid=0;
        while(mid<=high){
            if(nums[mid]==0){
                swap(nums[mid],nums[low]);
                mid++;
                low++;
            }
            else if(nums[mid]==1){
                mid++;
            }
            else{
                swap(nums[high], nums[mid]);
                high--;
            }
        }
    }
};
```

### Problem 2

Sort an array of 0’s 1’s 2’s without using extra space or sorting algo

- [Leetcode](https://leetcode.com/problems/sort-colors/)

#### Worst

Just apply mergesort

Time Complexity: $ O(nlogn) $

Auxiliary Space: $ O(n) $

#### Better

Count the occurences of **0**,**1**,**2** in first transversal and update the array in the second.

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp
class Solution
{
public:
    void sort012(int a[], int n)
    {
        int zeros = 0, ones = 0, twos = 0;
        for (int i = 0; i < n; i++)
        {
            if (a[i] == 0)
            {
                zeros++;
            }
            else if (a[i] == 1)
            {
                ones++;
            }
            else
            {
                twos++;
            }
        }
        int i = 0;
        while (zeros > 0)
        {
            a[i++] = 0;
            zeros--;
        }
        while (ones > 0)
        {
            a[i++] = 1;
            ones--;
        }
        while (twos > 0)
        {
            a[i++] = 2;
            twos--;
        }
    }
};
```

#### Optimal

Use three variable pointing to and

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int low=0,high=nums.size()-1,mid=0;
        while(mid<=high){
            if(nums[mid]==0){
                swap(nums[mid],nums[low]);
                mid++;
                low++;
            }
            else if(nums[mid]==1){
                mid++;
            }
            else{
                swap(nums[high], nums[mid]);
                high--;
            }
        }

    }
};
```

### Problem 3

Find the repeating and the missing number.

- [GFG](https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/)

#### Worst

Apply mergesort and then find the missing and repeating value.

Time Complexity: $ O(nlogn) $

Auxiliary Space: $ O(n) $

#### Better

Use a hash array or hash map to count the occurrences of numbers.Index with values '2' and '0' will give the repeating and missing numbers respectively.

Time Complexity: $ O(n) $

Auxiliary Space: $ O(n) $

```cpp
class Solution
{
public:
    int *findTwoElement(int *arr, int n)
    {

        static int ar[2];
        int index[n] = {0};

        for (int i = 0; i < n; i++)
        {
            index[arr[i] - 1]++;
        }

        for (int i = 0; i < n; i++)
        {
            if (index[i] > 1)
            {
                ar[0] = i + 1;
            }
            if (index[i] < 1)
            {
                ar[1] = i + 1;
            }
        }

        return ar;
    }
};

```

#### Better

Use three variable pointing to and

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp
class Solution{
public:
    int *findTwoElement(int *arr, int n) {

    static int ar[2];
    for (int i = 0; i < n; i++)
        if (arr[abs(arr[i]) - 1] > 0)
            arr[abs(arr[i]) - 1] = -arr[abs(arr[i]) - 1];
        else
            ar[0] = abs(arr[i]) ;


    for (int i = 0; i < n; i++)
        if (arr[i] > 0)
            ar[1] = (i + 1);

    return ar;
    }
};
```

#### Optimal

Use three variable pointing to and

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp
class Solution{
public:
    int *findTwoElement(int *arr, int n) {


    }
};
```

### Problem 4

- [Find the repeating and the missing](https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/)

#### Worst

Swap all the smaller numbers from the second array and then sort both the resultant arrays.

Time Complexity: $ O(nlogn) $

Auxiliary Space: $ O(n) $

```cpp
class Solution{
    public:
        //Function to merge the arrays.
        void merge(long long arr1[], long long arr2[], int n, int m)
        {

        int i=n-1, j = 0;
        while(i>=0 && j<m)
        {
        if(arr1[i] > arr2[j])
        swap(arr1[i--] , arr2[j++]);
        else
        i--;
        }

        sort(arr1 , arr1+n);
        sort(arr2 , arr2+m);

        }
};
```

#### Better

Use **inserstion sort**.

Time Complexity: $ O(n) $

Auxiliary Space: $ O(n) $

```cpp
class Solution
{
public:
    int *findTwoElement(int *arr, int n)
    {

        static int ar[2];
        int index[n] = {0};

        for (int i = 0; i < n; i++)
        {
            index[arr[i] - 1]++;
        }

        for (int i = 0; i < n; i++)
        {
            if (index[i] > 1)
            {
                ar[0] = i + 1;
            }
            if (index[i] < 1)
            {
                ar[1] = i + 1;
            }
        }

        return ar;
    }
};

```

#### Optimal

Use three variable pointing to and

Time Complexity: $ O(n) $

Auxiliary Space: $ O(1) $

```cpp
class Solution{
public:
    int *findTwoElement(int *arr, int n) {


    }
};
```

### 5. Maximum Subarray

Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum and print the subarray.

A subarray is a contiguous part of an array.

- [Practice](https://leetcode.com/problems/maximum-subarray)

#### Naive

- [Practice](https://leetcode.com/problems/maximum-subarray)
  > Use two loops to get generate all the subarrays and then store the sum of a subarray in a variable. Return the max value.
  > {: .prompt-warning }

**Time Complexity:** $ O(n^2) $
**Auxiliary Space:** $ O(1) $

### Optimal

> Implement Kadane Algorithm. Declare two variables: local sum and maximum sum. Iterate the array, adding the elements to the local sum. Update ans when ans is greater than sum.
> {: .prompt-tip }

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int sum =0, mx = INT_MIN;
        for (int i=0; i< nums.size(); i++){
            sum += nums[i];
            mx = max(sum ,mx);
            if (sum < 0)
                sum = 0;
        }
        return mx;
    }
};
```

**Time Complexity:** $ O(n) $
**Auxiliary Space:** $ O(1) $

### 6. Stocks Sell or Buy

- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

#### Brute

```cpp
class Solution
{
public:
    void maxProfit(vector<int>& prices)
  {
          for (int i = 0; i < prices.size() - 1; i++) {
            for (int j = i + 1; j < prices.size(); j++) {
                int profit = prices[j] - prices[i];
                if (profit > maxprofit)
                    maxprofit = profit;
            }
        }
        return maxprofit;
  }
};
```

#### Optimal

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

## Day 8 | Greedy

## Day 9 | Recursion

### Subset Sums

Given a list arr of N integers, print sums of all subsets in it.

Note: Return all the element is increasing order.

- [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/subset-sums2234/1#)

#### Brute

```cpp
class Solution
{
public:

    vector<int> subsetSums(vector<int> arr, int N)
    {
        vector<int> ans;
        long long total = 1 << n;

        for (long long i = 0; i < total; i++) {
            long long sum = 0;
            for (int j = 0; j < n; j++)
                if (i & (1 << j))
                    sum += arr[j];

            ans.push_back(sum);
            sort(ans.begin(), ans.end());
            return ans;
        }
};
```

#### Optimal

```cpp
class Solution
{
public:

    void solve(int index, int sum, int N, vector<int> &arr, vector<int> &ans)
    {
        if(index == N){
            ans.push_back(sum);
            return;
        }

        solve(index+1, sum + arr[index], N, arr, ans);
        solve(index+1, sum, N, arr, ans);
    }

    vector<int> subsetSums(vector<int> arr, int N)
    {
        vector<int> ans;
        solve(0, 0, N, arr, ans);
        sort(ans.begin(), ans.end());
        return ans;
    }
};
```

## Day 11 | Binary Search

## Day 15 | String

## Day 21 | Binary Search Tree Part-II

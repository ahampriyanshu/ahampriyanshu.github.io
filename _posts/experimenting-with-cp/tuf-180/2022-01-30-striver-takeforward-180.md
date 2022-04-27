---
title: "Striver 180 | takeUforward"
author: Priyanshu Tiwari
categories: [Sheets, TakeUforward]
tags: [striver, tuf, ds, algo, takeUforward]
---

# Day 1 | Arrays

## Problem 1

Find the duplicate in an array of N+1 integers.

* [Leetcode](https://leetcode.com/problems/find-the-duplicate-number/)

### Worst

Just apply mergesort

**Time Complexity:** $ O(nlogn) $

**Space Complexity:** $ O(n) $

### Better 

Count the occurences of 0,1,2 in first transversal and update the array in the second.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

```cpp

```

### Optimal

Use three variable pointing to and 

**Time Complexity:** $ O(n) $

**Space Complexity:** $ O(1) $

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

## Problem 2

Sort an array of 0’s 1’s 2’s without using extra space or sorting algo

* [Leetcode](https://leetcode.com/problems/sort-colors/)

### Worst

Just apply mergesort

**Time Complexity:** $ O(nlogn) $

**Space Complexity:** $ O(n) $

### Better 

Count the occurences of **0**,**1**,**2** in first transversal and update the array in the second.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

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

### Optimal

Use three variable pointing to and 

**Time Complexity:** $ O(n) $

**Space Complexity:** $ O(1) $

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


## Problem 3

Find the repeating and the missing number.

* [GFG](https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/)

### Worst 

Apply mergesort and then find the missing and repeating value.

**Time Complexity:** $ O(nlogn) $

**Space Complexity:** $ O(n) $

### Better 

Use a hash array or hash map to count the occurrences of numbers.Index with values '2' and '0' will give the repeating and missing numbers respectively.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(n) $

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

### Better

Use three variable pointing to and 

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

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

### Optimal

Use three variable pointing to and 

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

```cpp
class Solution{
public:
    int *findTwoElement(int *arr, int n) {
    
    
    }
};
```

## Problem 4

* [Find the repeating and the missing](https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/)

### Worst 

Swap all the smaller numbers from the second array and then sort both the resultant arrays.

**Time Complexity:** $ O(nlogn) $

**Space Complexity:** $ O(n) $

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

### Better 

Use **inserstion sort**.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(n) $

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

### Optimal

Use three variable pointing to and 

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

```cpp
class Solution{
public:
    int *findTwoElement(int *arr, int n) {
    
    
    }
};
```

## 5. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

* [Practice](https://leetcode.com/problems/maximum-subarray)

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

## 6. Stocks Sell or Buy

* [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### Brute

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

### Optimal

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

# Day 2 | Arrays

## Problem 1

* [Leetcode](https://leetcode.com/problems/set-matrix-zeroes/)

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

* [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### Brute

This question has been updated on leetcode with newer constraints : _-2^31 <= matrix[i][j] <= 2^31 - 1_. Hence, we will have to use some extra space.

### Optimal 

* In this approach, we will iterate over the array and store the minimun value & the maximum profit in seperate variables.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

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
# Day 5 | Linked List

## Reverse a LinkedList

* [Leetcode](https://leetcode.com/problems/reverse-linked-list/)

```cpp
class Solution {
public:
    ListNode* reverseList(ListNode* next) {
        ListNode* prev = NULL;
        while(next != NULL)
        {
            ListNode* curr = next;
            next = next->next;
            curr->next = prev;
            prev = curr;
        }
        return prev;
    }
};
```
``
# Day 8 | Greedy

## Problem 1

* [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1)

```cpp
class Solution
{
    public:
    int maxMeetings(int start[], int end[], int n)
    {
       pair<int, int> a[n + 1];
       
       for(int i=0; i<n; i++)
       {
           a[i].first = end[i];
           a[i].second = start[i];
       }

       sort(a, a+n);
       int ans = 1, end_time = a[0].first;

       for (int i = 1; i < n; i++) 
            if ( a[i].second > end_time) {
                ans++;
                end_time = a[i].first;
            }
        return ans;
       
    }
};
```

# Day 9 | Recursion

## Subset Sums

Given a list arr of N integers, print sums of all subsets in it.

Note: Return all the element is increasing order.

* [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/subset-sums2234/1#)

### Brute

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

### Optimal

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


# Day 11 | Binary Search

## Problem 1: Nth Root Of M

You are given two positive integers N and M. You have to find the Nth root of M i.e. M^(1/N).

* [Code Studio](https://www.codingninjas.com/codestudio/problems/1062679)
* [GFG](https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1/#)

### Worst

Import math library and use built-in methods.

### Better

Apply binary search.


**Time Complexity:** $ O(n*log(m*(d^10))) $ 

**Space Complexity:** $ O(1) $

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


**Time Complexity:** $ O(log(M) * log(N)) $ 

**Space Complexity:** $ O(1) $

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


# Day 15 | String

## Problem 1: Reverse Words in a String

You are given a string of length N. You need to reverse the string word by word. There can be multiple spaces between two words and there can be leading or trailing spaces but in the output reversed string you need to put a single space between two words, and your reversed string should not contain leading or trailing spaces.

* [Code Studio](https://www.codingninjas.com/codestudio/problems/696444)
* [Leetcode](https://leetcode.com/problems/reverse-words-in-a-string/)

### Worst/Better

Use in built methods and containers like stack, vector.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(n) $

### Optimal 

Reverse the whole string and then reverse word by word.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

```cpp

class Solution {
public:
    string reverseWords(string s) {
        reverse(s.begin(), s.end());
        int l = 0, r = 0, i = 0, n = s.size();
        while (i < n) {
            while (i < n && s[i] != ' ')
                s[r++] = s[i++];

            if (l < r) { 
                reverse(s.begin() + l, s.begin() + r);
                if (r == n) break;
                s[r++] = ' ';
                l = r;
            }
            ++i;
        }
        if (r > 0 && s[r-1] == ' ') --r;
        s.resize(r);
        return s;
    }
};

```


# Day 21 | Binary Search Tree Part-II

## Problem 1: Floor in a BST

You are given a BST (Binary search tree) with’ N’ number of nodes and a value ‘X’. Your task is to find the greatest value node of the BST which is smaller than or equal to ‘X’.

* [Code Studio](https://www.codingninjas.com/codestudio/problems/920457)

### Worst

Transerse the whole tree. Keep track of the closest smaller or same element.

**Time Complexity:** $ O(n) $

**Space Complexity:** $ O(n) $

### Better

Check whether the key is < or == or > than the root node.

**Time Complexity:** $ O(h) $ 

**Space Complexity:** $ O(n) $

```cpp
int floorInBST(TreeNode<int> * root, int X)
{
    if (!root)
        return INT_MAX;
 
    if (root->val == X)
        return root->val;
 
    if (root->val > X)
        return floorInBST(root->left, X);
 
    int ans = floorInBST(root->right, X);
    return ans <= X ? ans : root->val;
}
```

### Optimal 

Check whether the key is < or == or > than the root node.

**Time Complexity:** $ O(h) $ 

**Space Complexity:** $ O(1) $

```cpp
int floorInBST(TreeNode<int> * root, int X)
{
    if (!root)
        return INT_MAX;
 
    if (root->val == X)
        return root->val;
 
    if (root->val > X)
        return floorInBST(root->left, X);
 
    int ans = floorInBST(root->right, X);
    return ans <= X ? ans : root->val;
}
```

## Problem 2: Ceil in a BST

Ninja is given a binary search tree and an integer. Now he is given a particular key in the tree and returns its ceil value. Can you help Ninja solve the problem ?

* [Code Studio](https://www.codingninjas.com/codestudio/problems/ceil-from-bst_920464)

### Worst

Transerse the whole tree. Keep track of the least greater than or same element.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(n) $

### Better

Check whether the key is < or == or > than the root node.

**Time Complexity:** $ O(h) $ 

**Space Complexity:** $ O(n) $

```cpp
int findCeil(BinaryTreeNode<int> *root, int x){
   
    int ans = -1;
    if (!root) return ans;
    
    if (root -> data == x) return root -> data;
    
    if (root -> data < x) return findCeil(root->right, x);
 
    ans = findCeil(root->left, x);
    return ans >= x ? ans : root->data;
}
```

### Optimal 

Check whether the key is < or == or > than the root node.

**Time Complexity:** $ O(h) $ 

**Space Complexity:** $ O(1) $

```cpp
int findCeil(BinaryTreeNode<int> *root, int x){
   
    int ans = -1;
    if (!root) return ans;
    
    if (root -> data == x) return root -> data;
    
    if (root -> data < x) return findCeil(root->right, x);
 
    ans = findCeil(root->left, x);
    return ans >= x ? ans : root->data;
}
```
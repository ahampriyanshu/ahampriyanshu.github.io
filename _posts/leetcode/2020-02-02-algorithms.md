---
title: "Algorithm I | Study Plan | Leetcode"
author: ahampriyanshu
categories: [Sheets, Leetcode]
excerpt: C++ Solutions to Algorithm I of 2 weeks study plan, Leetcode.
tags:
  [
    leetcode,
    algorithms,
    back,
    to,
    study,
    plan,
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

### Day 1 | Binary Search

#### 704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

- [Practice](https://leetcode.com/problems/binary-search/)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int len(nums.size());
        int l(0), r(len-1);
        while(l<=r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target)
                return mid;
            if(nums[mid] > target)
                r = mid -1;
            else
                l = mid + 1;
        }
        return -1;
    }
};
```

#### 278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

- [Practice](https://leetcode.com/problems/first-bad-version/)

```cpp
class Solution {
public:
    int firstBadVersion(int n) {
        int l = 1, h = n, mid;
        while (l < h) {
            mid = l + (h - l) / 2;
            if (isBadVersion(mid)) h = mid;
            else l = mid+1;
        }
        return l;
    }
};
```

### Day 2 | Two Pointers

#### 977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

```cpp
class Solution {
public:
    vector<int> sortedSquares(vector<int>& A) {
        int l = 0, r = A.size() - 1;
        vector<int> ans(r+1);
        for (int k = A.size() - 1; k >= 0; k--)
            if (abs(A[r]) > abs(A[l])) ans[k] = A[r] * A[r--];
            else ans[k] = A[l] * A[l++];
        return ans;
    }
};
```

#### 189. Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

##### Brute

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector<int> ans;
        int len(nums.size());
        if(len == 1 || k == 0) return;
        if(k>len) k = k%len;
        int start = len-k;

        for(int i = start; i<len; i++)
            ans.push_back(nums[i]);

        for(int i = 0; i<start; i++)
            ans.push_back(nums[i]);

        nums = ans;
    }
};
```

##### Optimal

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        k %=nums.size();
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin()+k);
        reverse(nums.begin()+k, nums.end());
    }
};
```

### Day 3 | Two Pointers

#### 283. Move Zeroes

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

### Day 4 | Two Pointers

#### 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

- [Practice](https://leetcode.com/problems/reverse-string/)

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int n(s.size());
        for(int i=0; i<n/2; i++)
            swap(s[i], s[n-i-1]);
    }
};
```

#### 557. Reverse Words in a String III

Given a string **s**, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

- [Practice](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

```cpp
class Solution {
public:
    string reverseWords(string s) {
        int i = 0;
        for (int j = 0; j < s.size(); ++j) {
            if (s[j] == ' ') {
                reverse(s.begin() + i, s.begin() + j);
                i = j + 1;
            }
        }
        reverse(s.begin() + i, s.end());
        return s;
    }
};
```

### Day 5 | Two Pointers

#### 876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

- [Practice](https://leetcode.com/problems/middle-of-the-linked-list/)

```cpp
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        while(fast && fast->next){
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
```

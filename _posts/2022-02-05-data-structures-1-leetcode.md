---
title: "Data Structure I | Study Plan | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, data, structure, back-to-study-plan, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to Data Structure I of 2 Weeks Study Plan, Leetcode.

## Day 1 | Array

### 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

* [Practice](https://leetcode.com/problems/contains-duplicate)

```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        return nums.size() > set<int>(nums.begin(), nums.end()).size();   
    }
};
```

### 53. Maximum Subarray

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

## Day 2 | Array

### 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

* [Practice](https://leetcode.com/problems/two-sum/)

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mp;
        int n = nums.size();
        for(int i=0; i<n; i++)
        {
            int rem = target - nums[i];
            if(mp.find(rem) != mp.end())
                return {i, mp[rem]};
            mp[nums[i]] = i;
        }
        return {};
    }
};
```

### 88. Merge Sorted Array

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    
    int i = m-1;
    int j = n-1;
    int k = m+n-1;

    while(i>=0 &&j>=0 ) nums1[k--] = nums1[i]>nums2[j] ? nums1[i--] : nums2[j--];
    while(i>=0) nums1[k--] = nums1[i--] ;
    while(j>=0) nums1[k--] = nums2[j--] ; 
        
    }
};
```

## Day 3 | Array

### 350. Intersection of Two Arrays II

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& arr1, vector<int>& arr2) {
  sort(arr1.begin(),arr1.end());
        sort(arr2.begin(),arr2.end());
        
        int n=arr1.size();
        int m=arr2.size();
        int i=0;
        int j=0;
		
        vector<int> v;
        
        while(i<n && j<m)
            if(arr1[i]<arr2[j]) i++;
            else if(arr1[i]>arr2[j]) j++;
            else
            {
                v.push_back(arr1[i]);
                i++;
                j++;
            }

        return v;
    }
};
```

### 121. Best Time to Buy and Sell Stock

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy = INT_MAX, profit = 0;
        for (auto price: prices)
        {
        if(price < buy) buy = price;
        if(price - buy > profit) profit = price - buy;
        }
        return profit;
    }
};
```

## Day 6 | String   

### 387. First Unique Character in a String

```cpp
class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char, int> mp;
        
        for(char ch: s)
            mp[ch]++;
      141. Linked List Cycle  
        for(int i=0; i<s.size(); i++)
            if(mp[s[i]] == 1)
                return i;
        
        return -1;
    }
};
```

### 

```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
     int arr[26]={0};
        for(auto & i:magazine)
            arr[i-'a']++;
        for(auto & i:ransomNote){
            if(arr[i-'a'])
                arr[i-'a']--;
            else
                return false;
        }
        return true;
    }
};
```

### 242. Valid Anagram

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int letters[26]={0};
        
        if(s.length() != t.length())
            return false;
        
        for(int i=0;i<s.length();i++)
            letters[s[i]-97]++;
        
        for(int i=0;i<t.length();i++)
            letters[t[i]-97]--;
        
        for(int i=0;i<26;i++)
            if(letters[i] != 0)
                return false;
            
        return true;
    }
};
```
## Day 7 | Linked List  

### 141. Linked List Cycle

```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while(fast!=NULL && fast->next!=NULL){
        slow=slow->next;
        fast=fast->next->next;
        if(fast==slow) return true;
    }
    return false;
}
};
```

### 21. Merge Two Sorted Lists

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        
        ListNode *head = NULL , *tail = NULL ;
        
        if(l1 == NULL)
            return l2;
        
        if(l2 == NULL)
            return l1;
        
        if(l1->val <= l2->val)
        {
            head = tail = l1;
            l1 = l1->next;
        }
        else
        {
            head = tail = l2;
            l2 = l2->next;
        }
        
        
        while(l1 != NULL && l2 != NULL)
        
            if(l1->val <= l2->val)
            {
                tail->next = l1; 
                tail = tail->next;
                l1 = l1->next;
            }
            else 
            {
                tail->next = l2;
                tail = tail->next;
                l2 = l2->next;
            }
        
            if (l1) tail->next = l1;
            else tail->next = l2;
        
        return head;
    }
};

```

### 203. Remove Linked List Elements

```cpp
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
    
    while(head && head->val == val)
        head = head->next;
        
    ListNode* curr = head;
        
    while(curr != NULL && curr->next != NULL)
        if(curr->next->val == val)
            curr->next = curr->next->next;
        else
            curr = curr->next;
            
    if(curr && curr->val == val)
        curr = NULL;
        
    return head;
    }
};
```

## Day 4 | Array

### 118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

![unable to load](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif   )

* [Practice](https://leetcode.com/problems/pascals-triangle/)

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
    vector<vector<int>> ans(numRows);
        for(int i=0;i<numRows;i++)
        {
            ans[i].resize(i+1);
            ans[i][0]=ans[i][i]=1;
            for(int j=1;j<i;j++)
                ans[i][j]=ans[i-1][j-1]+ans[i-1][j];
        }
        return ans;
    }
};
```

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        
    vector<vector<int>> ans;

    for (int line = 1; line <= numRows; line++)
    {
        vector<int> level;
        int C = 1;
        for (int i = 1; i <= line; i++)
        {
            level.push_back(C);
            C = C * (line - i) / i;
        }
        ans.push_back(level);
    }
    return ans;
    }
};
```
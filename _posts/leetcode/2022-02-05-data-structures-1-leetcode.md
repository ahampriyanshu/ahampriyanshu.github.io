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
        unordered_map<int, int> ump;
        int i,rem,n(nums.size());
        for(i=0; i<n; i++){
            rem = target - nums[i];
            if(ump.find(rem) != ump.end())
                break;
            ump[nums[i]] = i;
        }
        return {i, ump[rem]};
    }
};
```

### 88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

* [Practice](https://leetcode.com/problems/merge-sorted-array/)

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

#### Single loop

```cpp
class Solution {
public:
    void merge(vector<int>& a, int m, vector<int>& b, int n) {
    while(n) a[m + n] = (m > 0 && a[m - 1] > b[n - 1])? a[--m] : b[--n];
    }
};
```

## Day 3 | Array

### 350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

* [Practice](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

#### Hashing

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& arr1, vector<int>& arr2) {
        
        unordered_map<int, int> ump;
        vector<int> ans;
        
        for(auto e:arr1)
            ump[e]++;
        
        for(auto e:arr2){
            if(ump[e]){
                ans.push_back(e);
                ump[e]--;
            }
        }
        return ans;
    }
};
```

#### Sorting

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
                v.push_back(arr1[i++]);
                j++;
            }

        return v;
    }
};
```

### 121. Best Time to Buy and Sell Stock

You are given an array _prices_ where _prices[i]_ is the price of a given stock on the ith day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a different day in the future to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return 0.

* [Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy = INT_MAX, profit = 0;
        for (int price: prices)
        {
        if(price < buy) buy = price;
        if(price - buy > profit) profit = price - buy;
        }
        return profit;
    }
};
```

#### Kadane

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int curr = 0, profit = 0;
        for(int i = 1; i < prices.size(); i++) {
            curr = max(0, curr += prices[i] - prices[i-1]);
            profit = max(curr, profit);
        }
        return profit;
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

#### Formula based  

> NCr = (NCr - 1 * (N - r + 1)) / r
{: .prompt-note }

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

## Day 6 | String   

### 387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

```cpp
class Solution {
public:
    int firstUniqChar(string s) {
        int  n(s.size()), hash[26] = {0};
        
        for(int i=0; i<n; i++)
            hash[s[i] - 'a']++;
        
        for(int i=0; i<n; i++)
            if(hash[s[i] - 'a'] == 1)
                return i;
        
        return -1;
    }
};
```

### 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int hash[26]={0};

        for(char ch:magazine)
            hash[ch-'a']++;

        for(char ch:ransomNote){
            if(hash[ch-'a'])
                hash[ch-'a']--;
            else
                return false;
        }
        return true;
    }
};
```

### 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int hash[26] = {0};
        
        if(s.length() != t.length())
            return false;        
        
        for(char ch:s)
            hash[ch-97]++;
        
        for(char ch:t)
            if(hash[ch-97])
                hash[ch-97]--;
            else
                return false;
        
        return true;
    }
};
```
## Day 7 | Linked List  

### 141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
    
    ListNode *slow = head, *fast = head;
    
    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
        if(fast==slow) return true;
    }
    return false;
}
};
```

### 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode head(INT_MIN), *tail = &head;
        
        while (l1 && l2) {
            if (l1->val < l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }

        tail->next = l1 ? l1 : l2;
        return head.next;
    }
};
```

### 203. Remove Linked List Elements

Given the head of a linked list and an integer **val**, remove all the nodes of the linked list that has **Node.val == val**, and return the new head.

* [Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

```cpp
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        
        while(head && head->val == val)
            head = head->next;
        
        ListNode *curr = head;
        
        while(curr)
            if(curr->next && curr->next->val == val)
                curr->next = curr->next->next;
            else
                curr = curr->next;
        return head;
    }
};
```

## Day 12 | Tree

### 226. Invert Binary Tree 

Given the root of a binary tree, invert the tree, and return its root.

![unable to load](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

* [Practice](https://leetcode.com/problems/invert-binary-tree/)

#### Recursion

```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return NULL;
        TreeNode* tmp = root -> left;
        root -> left = invertTree(root -> right);
        root -> right = invertTree(tmp);
        return root;
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return NULL;
        queue<TreeNode*> q;
        q.push(root);
        
        while(!q.empty()){
            
            TreeNode *tmp = q.front();
            q.pop();
            
            if(tmp->left) q.push(tmp->left);
            if(tmp->right) q.push(tmp->right);
            
            swap(tmp->left, tmp->right);
        }
        
        return root;
    }
};
```

## Day 13 | Tree

### 700. Search in a Binary Search Tree

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

* [Practice](https://leetcode.com/problems/search-in-a-binary-search-tree/)

#### Recursion

```cpp
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if(!root) return NULL;
        if(root->val == val) return root;
        if(root->val > val) return searchBST(root->left, val);
        return searchBST(root->right, val);
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        while(root and root->val != val)
            root = root->val > val ? root->left : root->right;
        return root;
    }
};
```
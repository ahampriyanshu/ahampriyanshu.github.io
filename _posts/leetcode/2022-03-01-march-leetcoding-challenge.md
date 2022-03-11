---
title: "March Leetcoding | 2022 | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to March Leetcoding Challenge, 2022.

## 1 March

### 338. Counting Bits

Given an integer n, return an array ans of length ``n + 1`` such that for each ``i (0 <= i <= n), ans[i]`` is the number of 1's in the binary representation of i.

* [Practice](https://leetcode.com/problems/counting-bits/)

### Bruteforce

```cpp
class Solution {
public:
    int getSum(int n){
        int ans = 0;
        while(n){
            if(n%2) ans++;
            n /= 2;
        }
        return ans;
    }
    
    vector<int> countBits(int n) {
        vector<int> ans;
        
        for(int i=0; i<=n; i++)
            ans.push_back(getSum(i));
        
        return ans;
    }
};
```

### Maths + DP

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> res(num);
        res.push_back(0);  // for num=0
        if(num==0) return res;
        
        for(int i=1;i<=num;i++){
            if(i%2==0){
                res[i]=res[i/2];
            } else {
                res[i]=res[i-1]+1;
            }
        }
        return res;
    }
};
```

### Pure DP

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
    vector<int> result(num + 1);
    int offset = 1;
    for (int index = 1; index < num + 1; ++index){
        if (offset * 2 == index)
            offset *= 2;
        result[index] = result[index - offset] + 1;
    }
    return result;
    }
};
```
## 2 March

### 392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

* [Practice](https://leetcode.com/problems/is-subsequence/)

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.empty()) return true;
        int index = 0;
        for(char ch: t)
            if(ch == s[index]) index++;
        return index > s.size() - 1;
    }
};
```

## 3 March

### 413. Arithmetic Slices

An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

* For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

* [Practice](https://leetcode.com/problems/arithmetic-slices/)

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) return 0;
        int ans(0), sum(0);
        for(int i = 0; i < n - 2; i++){
            if(nums[i+1] - nums[i] == nums[i+2] - nums[i+1])
                sum++;
            else
                {
                ans += (sum*(sum+1))/2;
                sum = 0;
                }
        }
        ans += (sum*(sum+1))/2;
        return ans;
    }
};
```

## 5 March

### 740. Delete and Earn

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

* Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.

* [Practice](https://leetcode.com/problems/delete-and-earn/)

```cpp
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
    int n = 10001;
    vector<int> sum(n, 0);
    vector<int> dp(n, 0);
    
    for(auto num: nums)
        sum[num] += num;
    
    dp[0] = 0;
    dp[1] = sum[1];
    for(int i=2; i<n; i++)
        dp[i] = max(dp[i-2] + sum[i], dp[i-1]);
    
    return dp[n-1];
}
};
```


## 7 March

### 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

* [Practice](https://leetcode.com/problems/merge-two-sorted-lists/)

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

## 8 March

### 141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 

Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

* [Practice](https://leetcode.com/problems/linked-list-cycle/)

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

## 9 March

### 82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

![Loading image](https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg)
* [Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* temp = new ListNode(0,head);
        ListNode* prev = temp;
        
        while(head){
            if(head->next && head->val==head->next->val){
                while(head->next && head->val==head->next->val)
                   head=head->next;
                prev->next=head->next;
            }else
                prev=prev->next;
            head=head->next;
        }
        return temp->next;
    }
};
```


## 10 March

### 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

![Loading image](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
* [Practice](https://leetcode.com/problems/add-two-numbers/)

```cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

        int digit, carry = 0;
        ListNode *head = new ListNode(0);
        ListNode *node = head;
        
        while (l1 || l2)
        {
            digit = carry;
            
            if (l1){
                digit += l1->val;
                l1 = l1->next;
            }
             
            if (l2){
                digit += l2->val;
                l2 = l2->next;
            }
             
            carry = digit / 10;
            digit = digit % 10;
            node->next = new ListNode(digit);
            node = node->next;
        }
        
        if (carry) node->next = new ListNode(carry);

        return head->next;
        
    }
};
```

## 11 March

### 61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

![Loading image](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

* [Practice](https://leetcode.com/problems/rotate-list/)

```cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        
        if(!head) return head;
        
        vector<int> vec;
        ListNode *curr= head;
        while(head){
            vec.push_back(head->val);
            head = head->next;
        }
        
        int n = vec.size();
        k %= n;
        reverse(vec.begin(), vec.end());
        reverse(vec.begin(), vec.begin()+k);
        reverse(vec.begin()+k, vec.end());
        
        ListNode * ans = new ListNode(vec[0]);
        ListNode * new_head = ans;
        
        for(int i=1; i<n; i++){
            ans -> next = new ListNode(vec[i]);
            ans = ans -> next;
        }
        
        return new_head;
    }
};
```
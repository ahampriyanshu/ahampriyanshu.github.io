---
title: "April | 2022 | Leetcoding Challenge"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to April Leetcoding Challenge, 2022.

## Week 1

### 1 March | 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

* [Practice](https://leetcode.com/problems/reverse-string/)

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

### 2 March | 680. Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

* [Practice](https://leetcode.com/problems/valid-palindrome-ii/)

```cpp
class Solution {
public:
    bool validPalindrome(string s) {
        int n = s.size();
        
        if(n < 3) return true;
  
        if(n==3){
            
        if(s[0] == s[2]) return true;
            else{
        if(s[0] == s[1] || s[1] == s[2])
            return true;
        return false;
            }
     
        }
        
        int l=0, r=n-1, l_cost = 0, r_cost = 0;
        
        while(l<=r){
            
            if(l_cost > 1)
                break;
            
            if(s[l] != s[r]){
                l_cost++;
                l++;
            }else{
            l++;
            r--;
            }
        }
        
        l=0, r=n-1;
        
        while(l<=r){
            
            if(r_cost > 1)
                break;
            
            if(s[l] != s[r]){
                r_cost++;
                r--;
            }else{
            l++;
            r--; 
        }  
        }
      
        
        if(l_cost > 1 && r_cost > 1)
            return false;
        return true;
    }
};
```


### 2 March | 680. Valid Palindrome II

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

- For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

- For example, the next permutation of arr = [1,2,3] is [1,3,2].
- Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
- While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.

The replacement must be **in place** and use only constant extra memory.

* [Practice](https://leetcode.com/problems/next-permutation/)

```cpp
class Solution
{
public:
    int binary_search(vector<int> &s, int l, int r, int key)
    {
        int index = -1;
        while (l <= r)
        {
            int mid = l + (r - l) / 2;
            if (s[mid] <= key)
                r = mid - 1;
            else
            {
                l = mid + 1;
                if (index == -1 || s[index] >= s[mid])
                    index = mid;
            }
        }
        return index;
    }

    void reverse(vector<int> &s, int l, int r)
    {
        while (l < r)
            swap(s[l++], s[r--]);
    }

    void nextPermutation(vector<int> &s)
    {
        int len = s.size(), i = len - 2;
        while (i >= 0 && s[i] >= s[i + 1])
            --i;
        
        if (i >= 0)
        {
            int index = binary_search(s, i + 1, len - 1, s[i]);
            swap(s[i], s[index]);
            reverse(s, i + 1, len - 1);
        }
        else
            sort(s.begin(), s.end());
    }
};
```
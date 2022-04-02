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
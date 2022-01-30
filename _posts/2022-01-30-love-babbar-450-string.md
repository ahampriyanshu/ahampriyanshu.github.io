---
title: "String | 450 DSA | Love Babbar"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Lovebabbar]
tags: [love, babbar, '450 dsa', sheet, string]
---

## Day 1

### Problem 1: Reverse a string

* Write a function that reverses a string. The input string is given as an array of characters s.
* [Leetcode](https://leetcode.com/problems/reverse-string/)

#### Worst/ Better

* Loop through the string from the back and store the elements in a new string.
* Time Complexity : **O(n)** 
* Space Complexity : **O(n)**

#### Optimal 

* Make two pointers pointing towards the extreme ends and swap till the front < rear.
* Time Complexity : **O(n)** 
* Space Complexity : **O(1)**

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        char ch;
        for(int i=0, j= s.size() - 1; i<j; i++, j--){
            ch = s[j];
            s[j] = s[i];
            s[i] = ch;
        }
    }
};
```

### Problem 2: Check for palindrome

* Given a string S, check if it is palindrome or not.
* [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/palindrome-string0817/1)

#### Worst/ Better/Optimal 

* Make two pointers pointing towards the extreme ends and check if ch[front] == ch[rear] till the front < rear.
* Time Complexity : **O(n)** 
* Space Complexity : **O(1)**

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        char ch;
        for(int i=0, j= s.size() - 1; i<j; i++, j--){
            ch = s[j];
            s[j] = s[i];
            s[i] = ch;
        }
    }
};
```

### Problem 3: Print duplicates in a string

* Print all the duplicates in the input string.

#### Worst/Better/Optimal 

* Either create a hash-array or a hash-map.
* Time Complexity : **O(n)** 
* Space Complexity : **O(k)** size of the map

### Problem 4: Subjective

* Why String is Immutable or Final in Java
* [Stack Overflow](https://stackoverflow.com/a/48840927/15876098)
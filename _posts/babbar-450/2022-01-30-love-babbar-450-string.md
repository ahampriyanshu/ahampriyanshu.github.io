---
title: "String | 450 DSA | Love Babbar"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Lovebabbar]
tags: [love, babbar, '450 dsa', sheet, string]
---

## Problem 1: Reverse a string

Write a function that reverses a string. The input string is given as an array of characters s.
* [Leetcode](https://leetcode.com/problems/reverse-string/)

### Worst/ Better

Loop through the string from the back and store the elements in a new string.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(n) $

### Optimal 

Make two pointers pointing towards the extreme ends and swap till the front < rear.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

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

## Problem 2: Check for palindrome

Given a string S, check if it is palindrome or not.
* [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/palindrome-string0817/1)

### Worst/ Better/Optimal 

Make two pointers pointing towards the extreme ends and check if ch[front] == ch[rear] till the front < rear.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(1) $

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

## Problem 3: Print duplicates in a string

Print all the duplicates in the input string.

### Worst/Better/Optimal 

Either create a hash-array or a hash-map.

**Time Complexity:** $ O(n) $ 

**Space Complexity:** $ O(k) $ (number of distinct characters)

## Problem 4: Subjective

Why String is Immutable or Final in Java
* [Stack Overflow](https://stackoverflow.com/a/48840927/15876098)
* [Baeldng]https://www.baeldung.com/java-string-immutable

## Problem 5: To check if strings are rotations of each other or not

Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1? Given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false.

* [Geeks For Geeks](https://practice.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1)

### Using substr

```cpp
bool solve(string s1,string s2){
    int n = s1.size(), m = s2.size();
    if(n != m) return false; 
    s1 += s1;
    return (s1.find(s2) != string::npos);
}
```

### Using queue

```cpp
bool solve(string s1, string s2)
{
    int n = s1.size(), m = s2.size();
    if(n != m) return false; 

    queue<char> q1;
    for (int i = 0; i < n; i++)
        q1.push(s[i]);

    queue<char> q2;
    for (int i = 0; i < m; i++)
        q2.push(s2[i]);

    while (m--) {
        char ch = q2.front();
        q2.pop();
        q2.push(ch);
        if (q2 == q1)
            return true;
    }
    return false;
}
```

**Time Complexity:** $ O(max(m,n)) $ 

**Space Complexity:** $ O(m+n) $
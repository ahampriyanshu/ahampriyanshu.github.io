---
title: "Weekly and Biweekly Contests | November | Leetcode"
author: ahampriyanshu
categories: [Contests, Leetcode]
excerpt: All of my accepted submissions on Leetcode , November 2022.
tags: [leetcode, Contests, challenge, November, weekly, biweekly]
math: true
---

## Biweekly Contest 92

### 2481. Minimum Cuts to Divide a Circle

A valid cut in a circle can be:

* A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
* A cut that is represented by a straight line that touches one point on the edge of the circle and its center.

Some valid and invalid cuts are shown in the figures below.

Given the integer ``n``, return the minimum number of cuts needed to divide a circle into n equal slices.

<a href="https://leetcode.com/contest/biweekly-contest-92/problems/minimum-cuts-to-divide-a-circle/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    int numberOfCuts(int n) {
        if(n == 1) return 0;
        return n&1 ? n : n/2;
    }
```

### 6277. Difference Between Ones and Zeros in Row and Column

You are given a 0-indexed $m x n$ binary matrix grid.

A 0-indexed $m x n$ difference matrix diff is created with the following procedure:

* Let the number of ones in the $i_{th}$ row be $onesRow_i$.
* Let the number of ones in the $j_{th}$ column be $onesCol_j$.
* Let the number of zeros in the $i_{th}$ row be $zerosRow_i$.
* Let the number of zeros in the $j_{th}$ column be $zerosCol_j$.
* $diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj$

Return the difference matrix diff.

<a href="https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) {
        vector<int> row(grid.size());
        vector<int> col(grid[0].size());
        for(int i = 0; i < grid.size(); ++i){
            for(int j = 0; j < grid[0].size(); ++j){
                row[i] += grid[i][j];
                col[j] += grid[i][j];
            }
        }
        vector<vector<int>> diff(grid.size(), vector<int> (grid[0].size()));
        for(int i = 0; i < grid.size(); ++i){
            for(int j = 0; j < grid[0].size(); ++j){
                diff[i][j] = 2*row[i] + 2*col[j] - grid.size() - grid[0].size();
            }
        }
        return diff;
    }
```

## Weekly Contest 321

### 2485. Find the Pivot Integer

Given a positive integer n, find the pivot integer x such that:

* The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

<a href="https://leetcode.com/problems/find-the-pivot-integer/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    int pivotInteger(int n) {
        int ans = (n * n + n ) /2;
        int sq = sqrt(ans);
        if(sq * sq == ans)return sq;
        else return -1;
    }
```

### 2486. Append Characters to String to Make Subsequence

You are given two strings s and t consisting of only lowercase English letters.

Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

<a href="https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    int appendCharacters(string s, string t) {
        int s_len = s.size(), t_len = t.size();
        int i = 0, j = 0;
        while(i < s_len && j < t_len){
            if(s[i] == t[j]) {i++; j++;}
            else i++;
        }
        return t_len - j;
    }
```

### 2487. Remove Nodes From Linked List

You are given the head of a linked list.

Remove every node which has a node with a strictly greater value anywhere to the right side of it.

Return the head of the modified linked list.

<a href="https://leetcode.com/problems/remove-nodes-from-linked-list/description/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

```cpp
    ListNode* removeNodes(ListNode* head) {
        
        if(!head || !head->next) return head;
        
        ListNode* next = removeNodes(head->next);
        
        if(next->val > head->val) return next;
        head->next = next;
        return head;
        
    }
```
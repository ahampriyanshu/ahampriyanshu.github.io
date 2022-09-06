---
title: "September | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, September 2022
math: true
tags: [gfg, geeksforgeeks, geeks, for, potd, problem, of, the, day, september, ds, array, tree, trie, string, stacks, queue, linked list]
---

## 02 | Minimum Cost to cut a board into squares

A board of length $M$ and width $N$ is given. The task is to break this board into $M * N$ squares such that cost of breaking is minimum. The cutting cost for each edge will be given for the board in two arrays $X[]$ and $Y[]$. In short, you need to choose such a sequence of cutting such that cost is minimized. Return the minimized cost.

<a href="https://practice.geeksforgeeks.org/problems/minimum-cost-to-cut-a-board-into-squares/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    int minimumCostOfBreaking(vector<int> X, vector<int> Y, int M, int N){
    sort(X.rbegin(), X.rend());
    sort(Y.rbegin(), Y.rend());
    
    int x_pos = 0, y_pos = 0;
    int h = 1, v = 1;
    int ans = 0;
    
    while(x_pos != X.size() && y_pos != Y.size()){
        if(X[x_pos] >= Y[y_pos]){
            ans += X[x_pos++] * v;
            h++;
        } else {
            ans += Y[y_pos++] * h;
            v++;
        }
    }
    
    while(x_pos != X.size()) {
        ans += X[x_pos++] * v;
    }
    while(y_pos != Y.size()) {
        ans += Y[y_pos++] * h;
    }
    
    return ans;
    }
```

## 05 | Smallest sum contiguous subarray

Given an array $arr[]$ of $N$ integers. Find the contiguous sub-array(containing at least one number) which has the minimum sum and return its sum.

<a href="https://practice.geeksforgeeks.org/problems/preorder-to-postorder4423/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
  int smallestSumSubarray(vector<int>& a){
      
      int sum = INT_MAX, local = 0;

      for(auto e: a){
          local += e;
          
          sum = min(sum, local);
                   if(local >= 0)
          local = 0;
      }
      
      return sum;
  }
```

## 06 | Minimum Sum of Absolute Differences of Pairs

You are given two arrays A and B of equal length N. Your task is to pair each element of array A to an element in array B, such that the sum of the absolute differences of all the pairs is minimum.

<a href="https://practice.geeksforgeeks.org/problems/minimum-sum-of-absolute-differences-of-pairs/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    Node* partition(Node *l, Node *h){
        Node* i = l;
        while(l != h){
            if(l->data <= h->data){
                swap(i->data,l->data);
                i = i->next;
            }
            l = l->next;
        }
        swap(i->data, h->data);
        return i;
    }
```

## 06 | Minimum Sum of Absolute Differences of Pairs

You are given two arrays A and B of unique elements of size N. Check if one array is a stack permutation of the other array or not.
Stack permutation means that one array can be created from another array using a stack and stack operations.

<a href="https://practice.geeksforgeeks.org/problems/stack-permutations/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    int isStackPermutation(int N,vector<int> &A,vector<int> &B){
        stack<int> st;
        int i(0), j(0);
        
        while(i<N){
            st.push(A[i++]);
            while(!st.empty() and B[j]==st.top() and j++ < N)
                st.pop();
        }
        
        return i == j;
    }
```
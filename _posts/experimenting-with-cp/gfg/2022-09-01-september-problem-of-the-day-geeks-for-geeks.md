---
title: "September | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, September 2022
math: true
tags:
  [
    gfg,
    geeksforgeeks,
    geeks,
    for,
    potd,
    problem,
    of,
    the,
    day,
    september,
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

## 25 | Queries on a Matrix

You are given a matrix of dimension n\*n. All the cells are initially, zero. You are given Q queries, which contains 4 integers a b c d where (a,b) is the TOP LEFT cell and (c,d) is the Bottom Right cell of a submatrix. Now, all the cells of this submatrix have to be incremented by one. After all the Q queries have been performed. Your task is to find the final resulting Matrix.
**Note:** Zero-Based Indexing is used for cells of the matrix.

<a href="https://practice.geeksforgeeks.org/problems/queries-on-a-matrix0443/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    vector<vector<int>> solveQueries(int n, vector<vector<int>> Queries) {

        vector<vector<int>> mat (n, vector<int>(n, 0));

        for(vector<int> query: Queries){

            int a = query[0], b = query[1], c = query[2], d = query[3];

            for(int i = a; i <= c; i++)

                for(int j = b; j <= d; j++)

                    mat[i][j]++;

        }

        return mat;
    }
```

## 26 | Tom and Jerry

Tom and Jerry being bored in this pandemic, decides to play a game. Given an integer N. On each player's turn, that player makes a move by subtracting a divisor of current N (which is less than N) from current N, thus forming a new N for the next turn. The player who does not have any divisor left to subtract loses the game.

The game begins with Tom playing the first move. Both Tom and Jerry play optimally. The task is to determine who wins the game. Return 1 if Tom wins, else return 0.

<a href="https://practice.geeksforgeeks.org/problems/stack-permutations/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    int numsGame(int N) {
        return 1-N%2;
    }
```

## 27 | Minimum Cost of ropes

There are given N ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two ropes is equal to sum of their lengths. The task is to connect the ropes with minimum cost. Given N size array arr[] contains the lengths of the ropes.

<a href="https://practice.geeksforgeeks.org/problems/stack-permutations/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    long long minCost(long long arr[], long long n) {

    priority_queue<long long, vector<long long>, greater<long long>> pq;

    for(int i = 0;i<n;i++)
        pq.push(arr[i]);

    long long ans = 0;
    while(!pq.empty()){
        long long top = pq.top();
        pq.pop();

        if(pq.empty()) break;
        long long top2 = pq.top();
        pq.pop();
        ans += (top+top2);
        pq.push(top+top2);
      }
      return ans;
    }
```

## 28 | Fitting The Array

Geek is playing an array game. He is weak in the concepts of arrays. Geek is given two arrays arr[ ] and brr[ ] of the same size n. The array arr[ ] will be said to fit in array brr[ ] if by arranging the elements of both arrays, there exists a solution such that i'th element of arr[ ] is less than or equal to i'th element of brr[ ], for each i, 0 <= i < n. Help Geek find if the given array arr[ ] will fit in array brr[ ] or not.

<a href="https://practice.geeksforgeeks.org/problems/fitting-the-array1514/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    bool isFit(int arr[], int brr[], int n){

        sort(arr,arr+n);
        sort(brr,brr+n);

        for(int i=0;i<n;i++)
            if(arr[i]>brr[i])
                return false;

        return true;
    }
```

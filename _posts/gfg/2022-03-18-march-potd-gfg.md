---
title: "March Leetcoding | 2022 | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to March Leetcoding Challenge, 2022.

## 18 March

### Coin Piles

There are N piles of coins each containing  Ai (1<=i<=N) coins. Find the minimum number of coins to be removed such that the absolute difference of coins in any two piles is at most K.

**Note:** You can also remove a pile by removing all the coins of that pile.

* [Practice](https://practice.geeksforgeeks.org/problems/coin-piles5152/1#)

```cpp
class Solution {
  public:
    int minSteps(int A[], int N, int K) {

        int p, total, ans = INT_MAX;        
        sort(A, A+N);
        vector<int> preSum(1,0);
        
        for(int i=0; i<N; i++)
            preSum.push_back(preSum[i]+A[i]);
        
        for(int i=0; i<N; i++){
            if(preSum[i] >= ans) return ans;
            p = upper_bound(A+i+1, A+N, A[i]+K) - A;
            total = preSum[N] - preSum[p] - (N-p)*(A[i]+K);
            ans = min(ans, preSum[i]+total);
        }
        
        return ans;
    }
};
```
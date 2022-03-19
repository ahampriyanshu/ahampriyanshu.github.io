---
title: "Problem Of The Day | March 2022 | Geeks For Geeks"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, GFG]
tags: [geeks, for, gfg, potd, day, challenge, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to Problem Of The Day, GFG, March 2022.

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

## 19 March

### Coin Piles

Given a string, find the rank of the string amongst its permutations sorted lexicographically. 

* [Practice]https://practice.geeksforgeeks.org/problems/rank-the-permutations2229/1#)

```cpp
class Solution{
  public:
    long long findRank(string str) {
      long long fact[19];
      fact[0]=1;
      fact[1]=1;
      long long n=str.size(),ans=0;
      
      for(int i=2;i<=18;i++)
          fact[i]=i*fact[i-1];
      
      for(int i=0;i<n;i++){
        int count=0;
        for(int j=i+1;j<n;j++)
            if(str[i]>str[j])
                count++;
          
        ans+=count*fact[n-1-i];
      }
      
      return ans+1;
   }
};
```
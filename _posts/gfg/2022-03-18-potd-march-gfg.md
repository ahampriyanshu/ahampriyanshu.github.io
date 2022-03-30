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

* [Practice](https://practice.geeksforgeeks.org/problems/rank-the-permutations2229/1#)

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

## 20 March | Choose and Swap

You are given a string s of lower case english alphabets. You can choose any two characters in the string and replace all the occurences of the first character with the second character and replace all the occurences of the second character with the first character. Your aim is to find the lexicographically smallest string that can be obtained by doing this operation at most once.

* [Practice](https://practice.geeksforgeeks.org/problems/choose-and-swap0531/1#)

```cpp
class Solution{
public:
    string chooseandswap(string a){
       int found[26] = {0};
        char max_so_far = CHAR_MIN ;
        char smallest   = CHAR_MAX ;
        for(int i = 0  ; i < a.size() ; ++i){
            if(found[a[i] - 'a'] == 0 && a[i] < max_so_far){
                for(int j = i ; j < a.size() ; ++j){
                    if(found[a[j] - 'a'] == 0){
                        smallest = min(smallest , a[j]) ;
                    }
                    found[a[j] - 'a'] = 1 ;
                }
                for(int j = i - 1 ; j >= 0 ; --j){
                    if(a[j] > smallest){
                        max_so_far = a[j] ;
                    }
                }
                break;
            }
            max_so_far = max(max_so_far , a[i]);
            found[a[i] - 'a'] = 1 ;
        }
        if(max_so_far != CHAR_MIN && smallest != CHAR_MAX){
            for(int i = 0 ; i < a.size() ; ++i){
                if(a[i] == max_so_far){
                    a[i] = smallest ;
                }
                else if(a[i] == smallest){
                    a[i] = max_so_far ;
                }
            }
        }
        return a;
    }
};
```


## 22 March | Smaller on Left 

Given an array arr[ ] of N positive integers, the task is to find the greatest element on the left of every element in the array which is strictly smaller than itself, if this element does not exist for an index print "-1".

* [Practice](https://practice.geeksforgeeks.org/problems/smaller-on-left20360700/1#)

```cpp
vector<int> Smallestonleft(int arr[], int n)
{
    set<int, greater<int>> s = {arr[0]};
    vector<int> ans = {-1};
    
    for(int i=1; i<n; i++){
        s.insert(arr[i]);
        auto it = s.upper_bound(arr[i]);
        if(it == s.end())
            ans.push_back(-1);
        else
            ans.push_back(*it);
    }
    
    return ans;
}
```

## 26 March | Maximum average subarray

Given an array Arr of size N and a positive integer K, find the sub-array of length K with the maximum average.

* [Practice](https://practice.geeksforgeeks.org/problems/maximum-average-subarray5859/1#)

```cpp
class Solution{   
public:
    int findMaxAverage(int arr[], int n, int k) {
        
        int ans = 0, i=0 ,j=0, sum=0, max_sum = INT_MIN;
        
        while(j<n){
            sum += arr[j];
            if(j-i+1 == k){
                if(max_sum <= sum){
                    ans = i;
                    max_sum = sum;
                }
                sum -= arr[i];
                i++;
            }
            j++;
        }
        
        return ans;
    }
};
```

## 29 March | Maximum average subarray

You have got a maze, which is a n*n Grid. Every cell of the maze contains these numbers 1, 2 or 3. 
If it contains 1 : means we can go Right from that cell only.
If it contains 2 : means we can go Down from that cell only.
If it contains 3 : means we can go Right and Down to both paths from that cell.
We cant go out of the maze at any time.
Initially, You are on the Top Left Corner of The maze(Entry). And, You need to go to the Bottom Right Corner of the Maze(Exit).
You need to find the total number of paths from Entry to Exit Point.
There may be many paths but you need to select that path which contains the maximum number of Adventure.
The Adventure on a path is calculated by taking the sum of all the cell values thatlies in the path.

* [Practice](https://practice.geeksforgeeks.org/problems/adventure-in-a-maze2051/1#)

```cpp
class Solution {
public:
vector<int> FindWays(vector<vector<int>> &a){
    
    int n=a.size();
    int i,j;
    int m=1e9+7;
    
    vector<vector<long>> paths(n,vector<long>(n,0)),adv(n,vector<long>(n,-1));
    paths[0][0]=1;
    adv[0][0]=a[0][0];
    
    for(i=0;i<n;i++)
        for(j=0;j<n;j++)
            if(paths[i][j])
                if(a[i][j]==1 && j+1<n)
                {
                    paths[i][j+1]=(paths[i][j+1]+paths[i][j])%m;
                    adv[i][j+1]=max(adv[i][j+1],(adv[i][j]+a[i][j+1])%m);
                }
                else if(a[i][j]==2 && i+1<n)
                {
                    paths[i+1][j]=(paths[i+1][j]+paths[i][j])%m;
                    adv[i+1][j]=max(adv[i+1][j],(adv[i][j]+a[i+1][j])%m);
                }
                else if(a[i][j]==3)
                {
                    if(i+1<n)
                    {
                        paths[i+1][j]=(paths[i+1][j]+paths[i][j])%m;
                        adv[i+1][j]=max(adv[i+1][j],(adv[i][j]+a[i+1][j])%m);
                    }
                    if(j+1<n)
                    {
                        paths[i][j+1]=(paths[i][j+1]+paths[i][j])%m;
                        adv[i][j+1]=max(adv[i][j+1],(adv[i][j]+a[i][j+1])%m);
                    }
                }

    if(adv[n-1][n-1]==-1) adv[n-1][n-1]=0;
    return {paths[n-1][n-1],adv[n-1][n-1]};
}
};
```


## 30 March | Counts Zeros Xor Pairs

Given an array A[] of size N. Find the number of pairs (i, j) such that
Ai XOR Aj = 0, and 1 ≤ i < j ≤ N.

* [Practice](https://practice.geeksforgeeks.org/problems/counts-zeros-xor-pairs0349/1)

```cpp

long long int calculate(int arr[], int n)
{
    int key, ans = 0;
    unordered_map<int, int> m;
 
    for (int i=0; i<n ; i++)
    {
        key =  0^arr[i];
        
        if (m.find(key) != m.end())
            ans += m[key];
            
        m[arr[i]]++;
    }

    return ans;
}
```
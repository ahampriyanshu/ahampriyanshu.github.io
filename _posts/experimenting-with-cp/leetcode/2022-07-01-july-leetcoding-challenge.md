---
title: "July | 2022 | Leetcoding Challenge"
author: ahampriyanshu
categories: [Contests, Leetcode]
math: true
excerpt: C++ Solutions to July Leetcoding Challenge, 2022
tags: [leetcode, leetcoding, challenge, july, ds, array, tree, trie, string, stacks, queue, linked list]
---


## 01 July | 1710. Maximum Units on a Truck

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where $boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBox-i]$:

* $numberOfBoxes_i$ is the number of boxes of type $i$.
* $numberOfUnitsPerBox_i$ is the number of units in each box of the type $i$.

You are also given an integer $truckSize$, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed $truckSize$.

Return the **maximum** total number of **units** that can be put on the truck.

* [Practice](https://leetcode.com/problems/reverse-string/)

### Merge Sort

```cpp
static bool cmp(const vector<int>& v1, const vector<int>& v2){
        return v1[1] > v2[1];
}
    
int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
        
        int ans = 0;
        
        sort(boxTypes.begin(), boxTypes.end(), cmp);
        
        
        for(auto box: boxTypes){

            if(truckSize >= box[0]){
                ans += box[0] * box[1];
                truckSize -= box[0];
            }else{
                ans += truckSize * box[1];
                break;
            }
            
        }
        
        return ans;
}
```

### Count Sort

```cpp
int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
        
    int freq[1001]{0}, ans = 0;
        
	for(auto box : boxTypes) 
        freq[box[1]] += box[0];
        
	for(int units = 1000; truckSize > 0 && ~units; --units) { 
		ans += min(truckSize, freq[units]) * units;
		truckSize -= freq[units];
	}
        
        return ans;
}
```

## 02 July | 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

* horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
* verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

* [Practice](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/)

```cpp
    int maxArea(int h, int w, vector<int>& h, vector<int>& v) {   
        h.push_back(h);
        sort(h.begin(), h.end());
		int maxh = h[0];
        for(int i=1; i<h.size(); i++)
            maxh = max(maxh, h[i] - h[i-1]);
        
        v.push_back(w);
        sort(v.begin(), v.end());
		int maxv = v[0];
        for(int i=1; i<v.size(); i++)
            maxv = max(maxv, v[i] - v[i-1]);
		
        return (1LL*maxh*maxv) % 1000000007;
    }
```

## 03 July | 376. Wiggle Subsequence

A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

* For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
* In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array nums, return the length of the longest wiggle subsequence of nums.

* [Practice](https://leetcode.com/problems/wiggle-subsequence/)

```cpp
int wiggleMaxLength(vector<int>& nums) {
        int n = nums.size();
        int peak = 1, valley = 1;

        for(int i=1; i<n; i++){
            if(nums[i]>nums[i-1])
                peak=valley + 1;
            else if(nums[i]<nums[i-1])
                valley = peak + 1;
        }

        return max(peak, valley);
    }
```

## 04 July | 1710. Maximum Units on a Truck

There are **n** children standing in a line. Each child is assigned a rating value given in the integer array **ratings**.

You are giving candies to these children subjected to the following requirements:

* Each child must have at least one candy.
* Children with a higher rating get more candies than their neighbors.

_Return the minimum number of candies you need to have to distribute the candies to the children._

* [Practice](https://leetcode.com/problems/candy/)

```cpp
    int candy(vector<int>& ratings) {
        
        int n = ratings.size(), sum = 0;
        vector<int> res(n, 1);
        
        if (n == 1) return 1;
        
        for(int i=0; i<n-1; i++)
            if (ratings[i+1] > ratings[i]) 
                res[i+1] = res[i] + 1;
        
        for (int i=n-2; i>=0; i--) 
        {
            if (ratings[i] > ratings[i+1] && res[i] <= res[i+1]) 
                res[i] = res[i+1]+1;
            sum += res[i];
        }
        
        sum += res[n-1];
        return sum;
    }
```

## 05 July | 1710. Maximum Units on a Truck

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

* [Practice](https://leetcode.com/problems/longest-consecutive-sequence/)

### O(nlogn)

```cpp
    int longestConsecutive(vector<int>& nums) {
        
        int n = nums.size(), ans = INT_MIN, cnt = 1;
        
        if(n == 0) return 0;
        
        if(n == 1) return 1;
        
        sort(nums.begin(), nums.end());
        
        for(int i=0; i<n-1.; i++)
            if(nums[i] + 1 == nums[i+1])
                ans = max(ans, ++cnt);
            else if(nums[i] != nums[i+1])
                cnt = 1;
        
        return max(ans, cnt++);
    }
```

## 06 July | 509. Fibonacci Number

The **Fibonacci numbers**, commonly denoted $F(n)$ form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from ``0`` and ``1``. That is,

* [Practice](https://leetcode.com/problems/fibonacci-number/)

### O(nlogn)

```cpp
    int fib(int n) {
        
        if(!n) return 0;
        if(n <= 2) return 1;
        
        vector<int> dp(n);
        
        dp[0] = dp[1] = 1;
        
        for(int i=2; i<n; i++)
            dp[i] = dp[i-1] + dp[i-2];
        
        return dp[n-1];
    }
```

## 06 July | 509. Fibonacci Number

The **Fibonacci numbers**, commonly denoted $F(n)$ form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from ``0`` and ``1``.

* [Practice](https://leetcode.com/problems/fibonacci-number/)

### Recursive

```cpp
bool helper(string& s1, string& s2, string &s3, int l1, int l2, int l3) {
        
        if(l1<0 && l2<0 && l3<0)  
            return true;
        
        if(l1>=0 && l2>=0 && s1[l1]==s3[l3] && s2[l2]==s3[l3] ) 
            return (helper(s1, s2, s3, l1-1, l2, l3-1) || helper(s1, s2, s3, l1, l2-1, l3-1));
        
        if(l1>=0 && s1[l1]==s3[l3])
            return helper(s1, s2, s3, l1-1, l2, l3-1);
        
        if(l2>=0 &&s2[l2]==s3[l3])
            return helper(s1, s2, s3, l1, l2-1, l3-1);
        
        return false;
}
    
bool isInterleave(string s1, string s2, string s3) {
        if(s3.size() != s1.size() + s2.size())
			return false;
        return helper(s1, s2, s3,s1.size()-1, s2.size()-1, s3.size()-1);
}
```

### DP

```cpp
bool isInterleave(string s1, string s2, string s3) {
        vector<int>cur(s2.size()+1,0),prev(s2.size()+1,0);
        if(s3.size()!=s1.size()+s2.size())
            return false;
        
        for(int i=s1.size();i>=0;i--){
            for(int j=s2.size();j>=0;j--){
                int k=i+j;
                if(i==s1.size()&&j==s2.size())
                    cur[j]=1;
                
                else if(s3[k]==s2[j]&&s3[k]==s1[i])
                    cur[j]= prev[j]||cur[j+1];
                
                else if(s1[i]==s3[k])
                    cur[j]= prev[j];
                
                else if(s3[k]==s2[j])
                    cur[j]= cur[j+1];
                
                else
                    cur[j]= false;
            }
            prev=cur;
        }
        return cur[0];
}
```

## 07 July | 509. Fibonacci Number

There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.

A neighborhood is a maximal group of continuous houses that are painted with the same color.

* For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].
Given an array houses, an $m x n$ matrix cost and an integer target where:

* $houses[i]$: is the color of the house $i$, and 0 if the house is not painted yet.
* $cost[i][j]$: is the cost of paint the house $i$ with the color $j + 1$.
Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return $-1$.

* [Practice](https://leetcode.com/problems/paint-house-iii/)

```cpp
    int dp[101][101][21];
    
    int INF = 1000001;
    
    int dfs(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target, int idx, int nei, int last){
        
        if(idx == m)
            return nei == target ? 0 : INF; 
            
        if(nei > target) return INF;
        
        if(dp[idx][nei][last] != -1)
            return dp[idx][nei][last];
        
        if(houses[idx] == 0){
            
            int ans = INF;
            
            for(int col = 1; col<=n; col++)
                ans = min(ans, cost[idx][col-1] + dfs(houses, cost, m, n, target, idx+1, col == last ? nei : nei + 1, col));
            
            return dp[idx][nei][last] = ans;
        }
            
        return dp[idx][nei][last] = dfs(houses, cost, m, n, target, idx + 1, houses[idx] == last ? nei : nei + 1, houses[idx]);
    }
    
    int minCost(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target) {
        memset(dp, -1, sizeof dp);
        
        int ans = dfs(houses, cost, m, n, target, 0, 0, 0);
        return ans < INF ? ans : -1; 
    }
```

## 10 July | 746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

* [Practice](https://leetcode.com/problems/min-cost-climbing-stairs/)

```cpp
    int minCostClimbingStairs(vector<int>& cost) {
        int n=cost.size();
        int tmp, first=cost[0],second=cost[1];
        for(int i=2;i<n;i++){
            tmp=min(first,second)+cost[i];
            first=second;
            second=tmp;
        }
        return min(first,second);
    }
```
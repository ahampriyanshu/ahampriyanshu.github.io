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
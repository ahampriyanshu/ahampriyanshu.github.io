---
title: "July | 2022 | Leetcoding Challenge"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
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
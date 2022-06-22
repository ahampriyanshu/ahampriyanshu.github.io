---
title: "June | 2022 | Leetcoding Challenge"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Leetcode]
excerpt: C++ Solutions to June Leetcoding Challenge, 2022
tags: [leetcode, leetcoding, challenge, june, ds, array, tree, trie, string, stacks, queue, linked list]
---


## 21 June | 1642. Furthest Building You Can Reach

You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building ``i`` to building ``i+1`` (0-indexed),

* If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
* If the current building's height is less than the next building's height, you can either use one ladder or ``(h[i+1] - h[i])`` bricks.

_Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally._

![loading image](https://assets.leetcode.com/uploads/2020/10/27/q4.gif)

* [Practice](https://leetcode.com/problems/reverse-string/)

```cpp
int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
    
    priority_queue<int> heap;

    int i=0, diff =0; 

    for(i=0; i<heights.size()-1; i++){ 


    diff = heights[i+1]-heights[i];


    if(diff < 1)
        continue;


    bricks -= diff; 
    heap.push(diff); 


    if(bricks < 0){
        bricks += heap.top(); 
        heap.pop(); 
        ladders--; 
    }


    if(ladders < 0) break;

    }

    return i;
}
```

## 22 June | 215. Kth Largest Element in an Array

Given an integer array ``nums`` and an integer ``k``, return the ``kth`` largest element in the array.

Note that it is the ``kth`` largest element in the sorted order, not the ``kth`` distinct element.

* [Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/)

### Maxheap

```cpp
int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int> pq(nums.begin(), nums.end());
    int i=0;
	while(i++ < k-1) 
        pq.pop();
	return pq.top();
}
```

### Sorting

```cpp
int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int> pq(nums.begin(), nums.end());
    int i=0;
	while(i++ < k-1) 
        pq.pop();
	return pq.top();
}
```
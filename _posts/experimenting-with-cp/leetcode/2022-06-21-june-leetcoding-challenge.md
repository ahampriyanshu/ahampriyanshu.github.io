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
    sort(nums.begin(), nums.end(), greater<int>());
    return nums[k-1];
}
```

## 23 June | 630. Course Schedule III

There are ``n`` different online courses numbered from ``1`` to ``n``. You are given an array ``courses`` where ``courses[i] = [durationi, lastDayi]`` indicate that the ith course should be taken **continuously** for ``durationi`` days and must be finished before or on ``lastDayi``.

You will start on the ``1st`` day and you cannot take two or more courses simultaneously.

_Return the maximum number of courses that you can take._

* [Practice](https://leetcode.com/problems/course-schedule-iii/)

### Maxheap

```cpp
    static bool comp(const vector<int>& a, vector<int>& b){
        return a[1] < b[1];
    }
    
    int scheduleCourse(vector<vector<int>>& courses) {
    
        sort(courses.begin(), courses.end(), comp);
        
        priority_queue<int> pq;
        int sum = 0;
        
        for(vector<int> course : courses) {
            sum += course[0];
            pq.push(course[0]);
            if(sum > course[1]){ 
                sum -= pq.top();
                pq.pop();
            }
        }
        return pq.size();
    }
```

## 25 June | 665. Non-decreasing Array

Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying **at most one element**.

We define an array is non-decreasing if ``nums[i] <= nums[i + 1]`` holds for every i (**0-based**) such that ``(0 <= i <= n - 2)``.

* [Practice](https://leetcode.com/problems/course-schedule-iii/)

### Maxheap

```cpp
bool checkPossibility(vector<int>& nums) 
    {
        for(int i=0;i<nums.size()-1;i++)
        {
            if(nums[i]>nums[i+1])
            {
                if(i-1>=0&&nums[i-1]>nums[i+1])
                    nums[i+1]=nums[i];
                else
                    nums[i]=nums[i+1];
                break;
            }
        
        for(int i=0;i<nums.size()-1;i++)
            if(nums[i]>nums[i+1])
                return false;

        return true; 
    }
}
```
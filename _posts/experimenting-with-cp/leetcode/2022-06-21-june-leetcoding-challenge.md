---
title: "June | 2022 | Leetcoding Challenge"
author: ahampriyanshu
categories: [Contests, Leetcode]
math: true
excerpt: C++ Solutions to June Leetcoding Challenge, 2022
tags:
  [
    leetcode,
    leetcoding,
    challenge,
    june,
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

## 21 June | 1642. Furthest Building You Can Reach

You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building `i` to building `i+1` (0-indexed),

- If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
- If the current building's height is less than the next building's height, you can either use one ladder or `(h[i+1] - h[i])` bricks.

_Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally._

![loading image](https://assets.leetcode.com/uploads/2020/10/27/q4.gif)

- [Practice](https://leetcode.com/problems/reverse-string/)

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

Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

- [Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/)

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

There are `n` different online courses numbered from `1` to `n`. You are given an array `courses` where `courses[i] = [durationi, lastDayi]` indicate that the ith course should be taken **continuously** for `durationi` days and must be finished before or on `lastDayi`.

You will start on the `1st` day and you cannot take two or more courses simultaneously.

_Return the maximum number of courses that you can take._

- [Practice](https://leetcode.com/problems/course-schedule-iii/)

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

We define an array is non-decreasing if `nums[i] <= nums[i + 1]` holds for every i (**0-based**) such that `(0 <= i <= n - 2)`.

- [Practice](https://leetcode.com/problems/non-decreasing-array/)

```cpp
bool checkPossibility(vector<int>& nums)
    {
        for(int i=0;i<nums.size()-1;i++)
        {
            if(nums[i]>nums[i+1])
            {
                if(i-1>=0 && nums[i-1] > nums[i+1])
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

## 26 June | 1423. Maximum Points You Can Obtain from Cards

There are several cards **arranged in a row**, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

- [Practice](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)

```cpp
    int maxScore(vector<int>& nums, int k) {

        int front=k-1, rear=nums.size()-1, sum=0;

        for(int i=0;i<k;i++)
            sum+=nums[i];

        int maxi = sum;

        while(front>=0 && front<rear){
            sum+=nums[rear--] - nums[front--];
            maxi=max(maxi,sum);
        }
        return maxi;
    }
```

## 27 June | 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

- [Practice](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/)

```cpp
int minPartitions(string n) {
    char mx = '0';
    for(auto ch:n){
        if(ch == '9')
            return 9;
        if(ch > mx)
            mx = ch;
    }
    return mx - '0';
}
```

## 28 June | 1647. Minimum Deletions to Make Character Frequencies Unique

A string `s` is called **good** if there are no two different characters in `s` that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make `s` **good**.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

- [Practice](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

```cpp
int minDeletions(string s) {

    vector<int> freq(26, 0);

    for(char ch:s)
        freq[ch - 'a']++;

    sort(freq.begin(), freq.end(), greater<int>());

    int ans(0), limit = freq[0];

    for(int i=1; i<26 && freq[i]; i++){
        if(limit){
            if(freq[i] >= limit)
            {
                limit--;
                ans += freq[i] - limit;
            }
            else limit = freq[i];
        }
        else ans += freq[i];
    }

    return ans;
}
```

## 29 June | 1647. Minimum Deletions to Make Character Frequencies Unique

You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each $people[i] = [h_i, ki]$ represents the $i_th$ person of height $h_i$ with exactly $k_i$ other people in front who have a height greater than or equal to $h_i$

Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where $queue[j] = [h_j, k_j]$ is the attributes of the $j_th$ person in the queue (queue[0] is the person at the front of the queue).

- [Practice](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

```cpp
    static bool compare(vector<int>& a, vector<int> & b)
    {
        if(a[0] == b[0])
            return a[1] < b[1];
        return a[0] > b[0];
    }

    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {

        int n = people.size();
        sort(people.begin(), people.end(), compare);
        vector<vector<int>> ans;
        for(int i = 0; i < n; i++)
        {
            int pos = people[i][1];
            ans.insert(ans.begin() + pos, people[i]);
        }

        return ans;
    }
```

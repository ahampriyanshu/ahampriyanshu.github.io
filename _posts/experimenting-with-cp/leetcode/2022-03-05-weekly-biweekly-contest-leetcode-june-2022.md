---
title: "Weekly and Biweekly Contests | March | Leetcode"
author: ahampriyanshu
categories: [Contests, Leetcode]
excerpt: All of my accepted submissions on Leetcode , March 2022.
tags: [leetcode, Contests, challenge, march, june, weekly, biweekly]
---

## March

### Biweekly Contest 73

#### 6024. Most Frequent Number Following Key In an Array

You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

* 0 <= i <= n - 2,
* nums[i] == key and,
* nums[i + 1] == target.

Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

* [Practice](https://leetcode.com/contest/biweekly-contest-73/problems/most-frequent-number-following-key-in-an-array/)

```cpp
class Solution {
public:
    int mostFrequent(vector<int>& nums, int key) {
        int ans(0), freq(0);
        unordered_map<int, int> ump;
        for(int i=0; i<nums.size() - 1; i++){
            if(nums[i] == key)
                ump[nums[i+1]]++;
                if(ump[nums[i+1]] > freq){
                    freq =ump[nums[i+1]];
                    ans = nums[i+1];
                }
                
        }
        return ans;
    }
};
```

#### 5217. Sort the Jumbled Numbers

You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all ``0 <= i <= 9``.

You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

**Notes:**

* Elements with the same mapped values should appear in the same relative order as in the input.
* The elements of ``nums`` should only be sorted based on their mapped values and not be replaced by them.

* [Practice](https://leetcode.com/problems/arithmetic-slices/)

```cpp
class Solution {
public:
    
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        vector<int> ans;
        long long int ele, digit, base, mapped;
        map<int, vector<long long int>> mp;
        for(int i=0; i<nums.size(); i++){
            ele = nums[i];
            base = 1;
            mapped = 0;
            if(ele){
            while(ele){
                digit = ele%10;
                mapped += mapping[digit]*base;
                base *=  10;
                ele /= 10;
            }
            }
            else mapped = mapping[0];
            mp[mapped].push_back(nums[i]);
        }
        
        for(auto &e:mp)
            ans.insert(ans.end(), e.second.begin(), e.second.end());
        
        return ans;
    }
};
```

### Weekly Contest 284

#### 2200. Find All K-Distant Indices in an Array

You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

Return a list of all k-distant indices sorted in increasing order.

* [Practice](https://leetcode.com/contest/weekly-contest-284/problems/find-all-k-distant-indices-in-an-array/)

```cpp
class Solution {
public:
    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {
        int n = nums.size();
        vector<int> keys;
        vector<int> ans;
        for(int i=0; i<n; i++)
            if(nums[i] == key)
                keys.push_back(i);
        
        
        int m = keys.size();
        for(int i=0; i<n; i++)
            for(int j:keys)
                if(abs(i-j) <= k){
                    ans.push_back(i);
                    break;
                }
        
        return ans;
    }
};
```

## June

### Biweekly Contest 81

#### 2315. Count Asterisks

You are given a string s, where every two consecutive vertical bars ``'|'`` are grouped into a pair. In other words, the 1st and 2nd ``'|'`` make a pair, the 3rd and 4th ``'|'`` make a pair, and so forth.

Return the number of ``'*'`` in s, excluding the ``'*'`` between each pair of ``'|'``.

Note that each ``'|'`` will belong to exactly one pair.

* [Practice](https://leetcode.com/problems/count-asterisks/)

```cpp
int countAsterisks(string s) {  
    int ans(0), bars(0);        
    for(char ch:s){
        if(ch == '|')
            bars++;
        if(ch == '*' and bars%2 == 0)
            ans++;
        }        
    return ans; 
}
```


## March

### Biweekly Contest 82

#### 2331. Evaluate Boolean Binary Tree

You are given the root of a full binary tree with the following properties:

* Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
* Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.

The evaluation of a node is as follows:

* If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
* Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.

_Return the boolean result of evaluating the root node._

A full binary tree is a binary tree where each node has either 0 or 2 children.

A leaf node is a node that has zero children.

* [Practice](https://leetcode.com/problems/evaluate-boolean-binary-tree/)

```cpp
    bool evaluateTree(TreeNode* root) {
        
        if(root->val < 2) 
            return root->val;
        
        if(root->val == 2)
            return evaluateTree(root->left) || evaluateTree(root->right);
        
        return evaluateTree(root->left) && evaluateTree(root->right);
    }
```

### Biweekly Contest 82

#### 2335. Minimum Amount of Time to Fill Cups

You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

* [Practice](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/)

```cpp
int fillCups(vector<int>& a) {
        int ans = 0;
        while(1){
            sort(a.begin(), a.end());
            if(a[0] == 0 and a[1] == 0){
                ans += a[2];
                break;
            }
            a[2]--;
            a[1]--;
            ans++;
        }
        return ans;
}
```

#### 2336. Smallest Number in Infinite Set

You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

Implement the SmallestInfiniteSet class:

* ``SmallestInfiniteSet()`` Initializes the SmallestInfiniteSet object to contain all positive integers.
* int ``popSmallest()`` Removes and returns the smallest integer contained in the infinite set.
* ``void addBack(int num)`` Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

* [Practice](https://leetcode.com/problems/smallest-number-in-infinite-set/)

```cpp
    priority_queue<int, vector<int>, greater<int> > heap;
    unordered_map<int, int> mp;
    
    SmallestInfiniteSet() {
        for(int i=1; i<=1000; i++)
            {
            heap.push(i);
            mp[i]++;
            }
    }
    
    int popSmallest() {
        int ans = heap.top();
        mp[ans]--;
        heap.pop();
        return ans;
    }
    
    void addBack(int num) {
        if(mp[num]) return;
        heap.push(num);
        mp[num]++;
    }
```

### Biweekly Contest 83

#### 2347. Best Poker Hand

You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of $ranks[i]$ and a suit of $suits[i]$.

The following are the types of poker hands you can make from best to worst:

* ``"Flush"``: Five cards of the same suit.
* ``"Three of a Kind"``: Three cards of the same rank.
* ``"Pair"``: Two cards of the same rank.
* ``"High Card"``: Any single card.

Return a string representing the best type of poker hand you can make with the given cards.

_Note that the return values are case-sensitive._

* [Practice](https://leetcode.com/problems/best-poker-hand/)

```cpp
    string bestHand(vector<int>& ranks, vector<char>& suits) {
        
        unordered_map<int, int> rank;
        unordered_map<char, int> suit;
        
        for(auto r:ranks)
            rank[r]++;
        
        for(auto s:suits)
            suit[s]++;
        
        int bestRank = INT_MIN, bestSuit = INT_MIN;
        
        for(auto r: rank)
            bestRank = max(bestRank, r.second);
        
        for(auto s:suit)
            bestSuit = max(bestSuit, s.second);
        
        
        if(bestSuit == 5) return "Flush";
        
        if(bestRank > 2) return "Three of a Kind";
        
        if(bestRank == 2) return "Pair";
        
        return "High Card";
        
    }
```

#### 2348. Number of Zero-Filled Subarrays

Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

* [Practice](https://leetcode.com/problems/number-of-zero-filled-subarrays/)

```cpp
    long long zeroFilledSubarray(vector<int>& nums) {
        
        long long zero(0), ans(0), i=0, n = nums.size();
        
        while(i<n){
            if(nums[i] == 0)
                zero++;
            else{
                ans += zero*(zero+1)/2; 
                zero = 0;
            }
            i++;
        }
        
        if(zero) ans += zero*(zero+1)/2; 
        
        return ans;
    }
```
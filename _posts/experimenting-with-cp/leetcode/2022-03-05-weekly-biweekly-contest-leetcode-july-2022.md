---
title: "Weekly and Biweekly Contests | July | Leetcode"
author: ahampriyanshu
categories: [Contests, Leetcode]
excerpt: All of my accepted submissions on Leetcode , July 2022.
tags: [leetcode, Contests, challenge, July, weekly, biweekly]
---

## Biweekly Contest 82

### 2331. Evaluate Boolean Binary Tree

You are given the root of a full binary tree with the following properties:

- Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
- Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.

The evaluation of a node is as follows:

- If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
- Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.

_Return the boolean result of evaluating the root node._

A full binary tree is a binary tree where each node has either 0 or 2 children.

A leaf node is a node that has zero children.

- [Practice](https://leetcode.com/problems/evaluate-boolean-binary-tree/)

```cpp
    bool evaluateTree(TreeNode* root) {

        if(root->val < 2)
            return root->val;

        if(root->val == 2)
            return evaluateTree(root->left) || evaluateTree(root->right);

        return evaluateTree(root->left) && evaluateTree(root->right);
    }
```

## Biweekly Contest 82

### 2335. Minimum Amount of Time to Fill Cups

You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

- [Practice](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/)

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

### 2336. Smallest Number in Infinite Set

You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

Implement the SmallestInfiniteSet class:

- `SmallestInfiniteSet()` Initializes the SmallestInfiniteSet object to contain all positive integers.
- int `popSmallest()` Removes and returns the smallest integer contained in the infinite set.
- `void addBack(int num)` Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

- [Practice](https://leetcode.com/problems/smallest-number-in-infinite-set/)

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

## Biweekly Contest 83

### 2347. Best Poker Hand

You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of $ranks[i]$ and a suit of $suits[i]$.

The following are the types of poker hands you can make from best to worst:

- `"Flush"`: Five cards of the same suit.
- `"Three of a Kind"`: Three cards of the same rank.
- `"Pair"`: Two cards of the same rank.
- `"High Card"`: Any single card.

Return a string representing the best type of poker hand you can make with the given cards.

_Note that the return values are case-sensitive._

- [Practice](https://leetcode.com/problems/best-poker-hand/)

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

### 2348. Number of Zero-Filled Subarrays

Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

- [Practice](https://leetcode.com/problems/number-of-zero-filled-subarrays/)

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

## Weekly Contest 303

### 2351. First Letter to Appear Twice

Given a string s consisting of lowercase English letters, return the first letter to appear twice.

**Note:**

- A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
- s will contain at least one letter that appears twic

- [Practice](https://leetcode.com/problems/count-asterisks/)

```cpp
    char repeatedCharacter(string s) {

        vector<int> index(26, -1);
        vector<int> dist(26, 101);
        char ans;
        int idx, mini = 101;

        for(int i=0; i<s.size(); i++){
            idx = s[i] - 'a';
            if(index[idx] == -1)
                index[idx] = i;
            else if (dist[idx] == 101)
                dist[idx] = i;
        }

        for(int i=0; i<26; i++){
            // cout << i << " -> " << dist[i] << endl;
            if(dist[i] < mini){
                mini = dist[i];
                ans = i + 'a';
            }
        }

        return ans;

    }
```

### 2352. Equal Row and Column Pairs

Given a `0-indexed` $n x n$ integer matrix grid, return the number of pairs $(R_i, C_j)$ such that row $R_i$ and column $C_j$ are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array).

- [Practice](https://leetcode.com/contest/weekly-contest-303)

```cpp
    char repeatedCharacter(string s) {

        vector<int> index(26, -1);
        vector<int> dist(26, 101);
        char ans;
        int idx, mini = 101;

        for(int i=0; i<s.size(); i++){
            idx = s[i] - 'a';
            if(index[idx] == -1)
                index[idx] = i;
            else if (dist[idx] == 101)
                dist[idx] = i;
        }

        for(int i=0; i<26; i++)
            if(dist[i] < mini){
                mini = dist[i];
                ans = i + 'a';
            }

        return ans;

    }
```

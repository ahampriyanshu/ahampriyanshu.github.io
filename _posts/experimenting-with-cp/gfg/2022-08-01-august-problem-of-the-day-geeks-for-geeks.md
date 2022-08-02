---
title: "August | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, August 2022
math: true
tags: [gfg, geeksforgeeks, geeks, for, potd, problem, of, the, day, august, ds, array, tree, trie, string, stacks, queue, linked list]
---

## 01 July | Egg Dropping Puzzle

You are given N identical eggs and you have access to a K-floored building from $1$ to $K$.

There exists a floor f where $0 <= f <= K$ such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break. There are few rules given below. 

* An egg that survives a fall can be used again.
* A broken egg must be discarded.
* The effect of a fall is the same for all eggs.
* If the egg doesn't break at a certain floor, it will not break at any floor below.
* If the eggs breaks at a certain floor, it will break at any floor above.

Return the minimum number of moves that you need to determine with certainty what the value of f is.

* [Practice](https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1)

### DP

```cpp
    int eggDrop(int n, int k) 
    {
        vector<vector<int>> dp(n+1, vector<int>(k+1, 0));
    
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= k; j++) {
                
                if(i == 1)
                    dp[i][j] = j;
                else if(j == 1)
                    dp[i][j] = 1;
                else {
                int ans = INT_MAX;
                for(int pi = 0, ci = j-1; ci >= 0; ci--,pi++) 
                    ans = min(ans,max(dp[i][ci],dp[i-1][pi]));
                dp[i][j] = ans+1;
                }
            }
        }
        
        return dp[n][k];
    }
```

## 02 July | Delete nodes greater than k

Given a BST and a value k, the task is to delete the nodes having values greater than or equal to k.

* [Practice](https://practice.geeksforgeeks.org/problems/delete-nodes-greater-than-k/1)

### DFS

```cpp
    Node* deleteNode(Node* root, int k)
    {
        if(!root) return root;
        
        if(root->data >= k)
            return deleteNode(root->left, k);
            
        root->left = deleteNode(root->left, k);
        root->right = deleteNode(root->right, k);
            
        return root;
    }
```

## 03 July | 



* [Practice]()

### 

```cpp

```

## 04 July | 



* [Practice]()

### 

```cpp

```

## 05 July | 



* [Practice]()

### 

```cpp

```

## 06 July | 



* [Practice]()

### 

```cpp

```

## 07 July | 



* [Practice]()

### 

```cpp

```

## 08 July | 



* [Practice]()

### 

```cpp

```

## 09 July | 



* [Practice]()

### 

```cpp

```

## 10 July | 



* [Practice]()

### 

```cpp

```

## 11 July | 



* [Practice]()

### 

```cpp

```

## 12 July | 



* [Practice]()

### 

```cpp

```

## 13 July | 



* [Practice]()

### 

```cpp

```

## 14 July | 



* [Practice]()

### 

```cpp

```

## 15 July | 



* [Practice]()

### 

```cpp

```

## 16 July | 



* [Practice]()

### 

```cpp

```

## 17 July | 



* [Practice]()

### 

```cpp

```

## 18 July | 



* [Practice]()

### 

```cpp

```

## 19 July | 



* [Practice]()

### 

```cpp

```

## 20 July | 



* [Practice]()

### 

```cpp

```

## 21 July | 



* [Practice]()

### 

```cpp

```

## 22 July | 



* [Practice]()

### 

```cpp

```

## 23 July | 



* [Practice]()

### 

```cpp

```

## 24 July | 



* [Practice]()

### 

```cpp

```

## 25 July | 



* [Practice]()

### 

```cpp

```

## 26 July | 



* [Practice]()

### 

```cpp

```

## 27 July | 



* [Practice]()

### 

```cpp

```

## 28 July | 



* [Practice]()

### 

```cpp

```

## 29 July | 



* [Practice]()

### 

```cpp

```

## 30 July | 



* [Practice]()

### 

```cpp

```
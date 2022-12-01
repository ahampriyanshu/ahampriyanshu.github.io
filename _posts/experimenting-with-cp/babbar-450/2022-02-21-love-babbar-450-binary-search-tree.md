---
title: "BST | 450 DSA | Love Babbar"
author: ahampriyanshu
categories: [Sheets, Lovebabbar]
tags: [love, babbar, "450 dsa", sheets, binary, search, tree]
---

#### Search a node in BST

Given a Binary Search Tree and a node value X, find if the node with value X is present in the BST or not.

- [GFG](https://practice.geeksforgeeks.org/problems/search-a-node-in-bst/1/#)

> The idea is to use the fact that the given tree is a BST. So, instead of transverting every node, we can use the binary search algorithm.
> {: .prompt-tip }

- Time Complexity : **O(h)**
- Space Complexity : **O(1)**

```cpp
bool search(Node* root, int x) {

    if (!root) return false;

    while(root){
        if(root->data == x)
            return true;

         if(root->data < x)
            root = root->right;
         else
            root = root->left;
    }

    return false;
}
```

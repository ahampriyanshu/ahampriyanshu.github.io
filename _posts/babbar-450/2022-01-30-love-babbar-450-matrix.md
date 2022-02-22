---
title: "Matrix | 450 DSA | Love Babbar"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Lovebabbar]
tags: [love, babbar, '450 dsa', sheet, matrix]
---

### Search a node in BST

Given a matrix of size r*c. Traverse the matrix in spiral form.

* [GFG](https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1)

> The idea is to use the fact that the given tree is a BST. So, instead of transverting every node, we can use the binary search algorithm.
{: .prompt-note }

* Time Complexity : **O(m*n)** 
* Space Complexity : **O(1)**

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
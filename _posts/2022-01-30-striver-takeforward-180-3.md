---
title: "21 - 30 | Striver 180 | takeUforward"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, TakeUforward]
tags: [striver, tuf, ds, algo, binary, search, tree, takeUforward]
---

## Day 21 | Binary Search Tree Part-II

### Problem 1: Floor in a BST

> You are given a BST (Binary search tree) with’ N’ number of nodes and a value ‘X’. Your task is to find the greatest value node of the BST which is smaller than or equal to ‘X’.
* [Code Studio](https://www.codingninjas.com/codestudio/problems/920457)

#### Worst

* Transerse the whole tree. Keep track of the closest smaller or same element.
* Time Complexity : **O(n)**
* Space Complexity : **O(n)**

#### Better

* Check whether the key is < or == or > than the root node.
* Time Complexity : **O(h)** 
* Space Complexity : **O(n)**

```cpp
int floorInBST(TreeNode<int> * root, int X)
{
    if (!root)
        return INT_MAX;
 
    if (root->val == X)
        return root->val;
 
    if (root->val > X)
        return floorInBST(root->left, X);
 
    int ans = floorInBST(root->right, X);
    return ans <= X ? ans : root->val;
}
```

#### Optimal 

* Check whether the key is < or == or > than the root node.
* Time Complexity : **O(h)** 
* Space Complexity : **O(1)**

```cpp
int floorInBST(TreeNode<int> * root, int X)
{
    if (!root)
        return INT_MAX;
 
    if (root->val == X)
        return root->val;
 
    if (root->val > X)
        return floorInBST(root->left, X);
 
    int ans = floorInBST(root->right, X);
    return ans <= X ? ans : root->val;
}
```

### Problem 2: Ceil in a BST

> Ninja is given a binary search tree and an integer. Now he is given a particular key in the tree and returns its ceil value. Can you help Ninja solve the problem?
* [Code Studio](https://www.codingninjas.com/codestudio/problems/ceil-from-bst_920464)

#### Worst

* Transerse the whole tree. Keep track of the least greater than or same element.
* Time Complexity : **O(n)** 
* Space Complexity : **O(n)**

#### Better

* Check whether the key is < or == or > than the root node.
* Time Complexity : **O(h)** 
* Space Complexity : **O(n)**

```cpp
int findCeil(BinaryTreeNode<int> *root, int x){
   
    int ans = -1;
    if (!root) return ans;
    
    if (root -> data == x) return root -> data;
    
    if (root -> data < x) return findCeil(root->right, x);
 
    ans = findCeil(root->left, x);
    return ans >= x ? ans : root->data;
}
```


#### Optimal 

* Check whether the key is < or == or > than the root node.
* Time Complexity : **O(h)** 
* Space Complexity : **O(1)**

```cpp
int findCeil(BinaryTreeNode<int> *root, int x){
   
    int ans = -1;
    if (!root) return ans;
    
    if (root -> data == x) return root -> data;
    
    if (root -> data < x) return findCeil(root->right, x);
 
    ans = findCeil(root->left, x);
    return ans >= x ? ans : root->data;
}
```
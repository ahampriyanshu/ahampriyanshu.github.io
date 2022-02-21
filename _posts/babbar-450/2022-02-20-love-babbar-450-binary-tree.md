---
title: "Binary Tree | 450 DSA | Love Babbar"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Lovebabbar]
tags: [love, babbar, '450 dsa', sheet, tree]
---

### Level order traversal 

Given a binary tree, find its level order traversal. Level order traversal of a tree is breadth-first traversal for the tree.

* [GFG](https://practice.geeksforgeeks.org/problems/level-order-traversal/1#)

> Create a queue, insert the root node, pop the queue in a temp variable and push the left and the right child. Repeat until the queue is empty.
{: .prompt-note }

* Time Complexity : **O(n)** 
* Space Complexity : **O(n)**

```cpp
class Solution
{
    public:
    vector<int> levelOrder(Node* root){
    queue<Node*> q;
    vector<int> v;
    q.push(root);
    while(!q.empty()){
        Node *tmp = q.front();
        v.push_back(tmp->data);
        if(tmp->left)
            q.push(tmp->left);
        if(tmp->right)
            q.push(tmp->right);
        q.pop();
    }
    return v;
    }
};
```
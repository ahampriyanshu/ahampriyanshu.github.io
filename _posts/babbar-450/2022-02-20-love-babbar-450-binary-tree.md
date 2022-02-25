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

### Reverse Level Order Traversal

Given a binary tree of size N, find its reverse level order traversal. ie- the traversal must begin from the last level.

* [GFG](https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1#)

> Create a queue, insert the root node, pop the queue in a temp variable and push the right and then the left child. Repeat until the queue is empty. Reverse the resultant vector.
{: .prompt-note }

* Time Complexity : **O(n)** 
* Space Complexity : **O(n)**

```cpp
vector<int> reverseLevelOrder(Node *root)
{
    queue<Node*> q;
    vector<int> v;
    q.push(root);
    while(!q.empty()){
        Node *tmp = q.front();
        v.push_back(tmp->data);
        if(tmp->right)
            q.push(tmp->right);
        if(tmp->left)
            q.push(tmp->left);
        
        q.pop();
    }
    reverse(v.begin(), v.end());
    return v;
}
```

### Height of Binary Tree

Given a binary tree, find its height.

* [GFG](https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1#)

> Calculate the height of the left or the right subtree 
{: .prompt-note }

* Time Complexity : **O(n)** 
* Space Complexity : **O(n)**

```cpp
class Solution{
    public:
    int height(struct Node* node){
        if(!node) return 0;
        return 1 + max(height(node->left), height(node->right));
    }
};
```
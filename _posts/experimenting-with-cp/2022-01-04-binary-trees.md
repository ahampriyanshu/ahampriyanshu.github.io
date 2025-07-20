---
title: "Binary Trees | Striver’s A2Z DSA Course/Sheet"
author: ahampriyanshu
mathjax:
  enable: true
  combo: "tex-svg"
  tags: "ams"
excerpt: C++ Solutions to Striver’s A2Z DSA Course/Sheet
categories: [Sheets, TakeUforward]
tags:
  [
    striver,
    tuf,
    ds,
    algo,
    takeUforward,
    new,
    dsa,
    course,
    sheets,
    solution,
    a2z,
    binary,
    trees,
    step,
    "13",
  ]
---

## Step 13.1

### Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

<a href="https://leetcode.com/problems/binary-tree-inorder-traversal/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### Recursive

> Inorder traversal is Left -> Root -> Right. So, we will call dfs recursively on the left node, push the value and do the same for the right child node.
> {: .prompt-tip }

```cpp
    void dfs(TreeNode* root, vector<int> &ans){
        if(!root) return;

        dfs(root->left, ans);

        ans.push_back(root->val);

        dfs(root->right, ans);

    }

    vector<int> inorderTraversal(TreeNode* root) {

        vector<int> ans;

        dfs(root, ans);

        return ans;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

#### Iterative

> Core logic is exactly similar to the previous approach but in this method instead of calling a recursive helper function we will use stack data structure.
> {: .prompt-tip }

```cpp
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        stack<TreeNode*> st;
        TreeNode* curr = root;
        while (curr || !st.empty()) {
            while (curr) {
                st.push(curr);
                curr = curr -> left;
            }
            curr = st.top();
            st.pop();
            ans.push_back(curr -> val);
            curr = curr -> right;
        }
        return ans;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

#### Morris traversal

> {: .prompt-tip }

```cpp

```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(1) $

### Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

<a href="https://leetcode.com/problems/binary-tree-preorder-traversal/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### Recursive

> Preorder traversal is Root -> Left -> Right. So, we will push the value and call dfs recursively on the left node and the right child node.
> {: .prompt-tip }

```cpp
    void dfs(TreeNode* root, vector<int> &ans){

        if(!root) return;
        ans.push_back(root->val);
        dfs(root->left, ans);
        dfs(root->right, ans);

    }

    vector<int> preorderTraversal(TreeNode* root) {

        vector<int> ans;
        dfs(root, ans);
        return ans;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

#### Iterative

> Core logic is exactly similar to the previous approach but in this method instead of calling a recursive helper function we will use stack data structure. Another important thing to note is we will first push right node and then the left node. It is due to the LIFO nature of stack.
> {: .prompt-tip }

```cpp
    vector<int> preorderTraversal(TreeNode* root) {

        if(!root) return {};

        vector<int> ans;
        stack<TreeNode*> st;
        TreeNode* curr;
        st.push(root);

        while(!st.empty()){
            curr = st.top();
            st.pop();
            ans.push_back(curr->val);
            if (curr->right) st.push(curr->right);
            if (curr->left) st.push(curr->left);
        }


        return ans;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

#### Morris traversal

> {: .prompt-tip }

```cpp

```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(1) $

### Postorder Traversal

Given the root of a binary tree, return the Postorder traversal of its nodes' values.

<a href="https://leetcode.com/problems/binary-tree-postorder-traversal/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### Recursive

> Postorder traversal is Left -> Right -> Root. So, we will call dfs recursively on the left node, the right child node and then push the value,
> {: .prompt-tip }

```cpp
    void dfs(TreeNode* root, vector<int> &ans){

        if(!root) return;
        dfs(root->left, ans);
        dfs(root->right, ans);
        ans.push_back(root->val);

    }

    vector<int> postorderTraversal(TreeNode* root) {

        vector<int> ans;

        dfs(root, ans);

        return ans;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

#### Iterative

> Core logic is exactly similar to the previous approach but in this method instead of calling a recursive helper function we will use stack data structure.
> {: .prompt-tip }

```cpp
    vector<int> postorderTraversal(TreeNode* root) {

        if(!root) return {};

        vector<int> ans;
        stack<TreeNode*> s;
        TreeNode* last = NULL;

        while(root || !s.empty()){
			if(root){
				s.push(root);
				root = root->left;
			}
			else{
				root = s.top();
				if(root->right == NULL || root->right == last){
				    ans.push_back(root->val);
				    s.pop();
				    last = root;
				    root = NULL;
				}
				else root = root->right;
			}
		}

        return ans;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

#### Morris traversal

> {: .prompt-tip }

```cpp

```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(1) $

## Step 13.2

### Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

<a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

<!-- <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a> -->

#### DFS

> Depth or height of the tree is number of node in path from root node to farthest leaf node. It can be assumed as the maximum height among left or right subtree incremented by 1.
> {: .prompt-tip }

```cpp
    int maxDepth(TreeNode* root) {
        if(!root) return 0;
        return max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

### Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

<a href="https://leetcode.com/problems/balanced-binary-tree/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### Top Down

> This question can be broken down as to into three simple steps. First, calculate the height of left and right nodes, check for absolute difference and do the same for both the child subtrees.
> {: .prompt-tip }

```cpp
    int dfs(TreeNode* root){
        if(!root) return 0;
        return 1 + max(dfs(root->left), dfs(root->right));
    }

    bool isBalanced(TreeNode* root) {

        if(!root) return true;
        int left = dfs(root->left), right = dfs(root->right);
        return abs(left-right) <= 1 && isBalanced(root->left) && isBalanced(root->right);

    }
```

**Time Complexity:** $ O(n^2) $

**Auxiliary Space:** $ O(n) $

#### Bottom Up

> It is similar to the previous approach but instead of returning the actual height of the child node, we just return -1 to mark that subtree as unbalanced. Thus we visit each node only once.
> {: .prompt-tip }

```cpp
    int dfs(TreeNode* root) {

        if (!root) return 0;
        int left = dfs(root->left), right = dfs(root->right);
        return (left == -1 || right == -1 || abs(left-right) > 1) ? -1 : max(left, right)+1;
    }

    bool isBalanced(TreeNode* root) {
        return dfs(root) != -1;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

### Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

<a href="https://leetcode.com/problems/diameter-of-binary-tree/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### Recursive

> This question can be broken down as to into three simple steps. First, calculate the height of left and right nodes, check for absolute difference and do the same for both the child subtrees.
> {: .prompt-tip }

```cpp
    int maxdiadepth = 0;

    int dfs(TreeNode* root){
        if(root == NULL) return 0;

        int leftdepth = dfs(root->left);
        int rightdepth = dfs(root->right);

        if(leftdepth + rightdepth > maxdiadepth) maxdiadepth = leftdepth + rightdepth;
        return max(leftdepth, rightdepth) + 1;
    }

    int diameterOfBinaryTree(TreeNode* root) {
        dfs(root);

        return maxdiadepth;
    }
```

**Time Complexity:** $ O(n^2) $

**Auxiliary Space:** $ O(n) $

#### Iterative

> It is similar to the previous approach but instead of returning the actual height of the child node, we just return -1 to mark that subtree as unbalanced. Thus we visit each node only once.
> {: .prompt-tip }

```cpp
    int dfs(TreeNode* root) {

        if (!root) return 0;
        int left = dfs(root->left), right = dfs(root->right);
        return (left == -1 || right == -1 || abs(left-right) > 1) ? -1 : max(left, right)+1;
    }

    bool isBalanced(TreeNode* root) {
        return dfs(root) != -1;
    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

### Check if two trees are identical or not

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

<a href="https://leetcode.com/problems/diameter-of-binary-tree/"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" /></a>

#### Recursive

> Return true if both p and q are null. Then check if either of them is null or not. Lastly, return false, if they differ in value. Apply the same for left and right child node.
> {: .prompt-tip }

```cpp
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(!p and !q) return true;
        if(!p or !q) return false;
        if(p->val != q->val) return false;
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
```

**Time Complexity:** $ O(n^2) $

**Auxiliary Space:** $ O(n) $

#### Iterative

> It is similar to the previous approach but instead of returning the actual height of the child node, we just return -1 to mark that subtree as unbalanced. Thus we visit each node only once.
> {: .prompt-tip }

```cpp
    bool isSameTree(TreeNode* p, TreeNode* q) {

		queue<TreeNode*> qu;

        TreeNode *n1, *n2;

		qu.push(p);
		qu.push(q);

		while(qu.size() != 0){

            n1 = qu.front();
			qu.pop();
			n2 = qu.front();
			qu.pop();


			if(!n1 && !n2) continue;
			if(!n1 || !n2) return false;
			if(n1->val != n2->val) return false;

			qu.push(n1->left);
			qu.push(n2->left);
			qu.push(n1->right);
			qu.push(n2->right);

		}

		return true;

    }
```

**Time Complexity:** $ O(n) $

**Auxiliary Space:** $ O(n) $

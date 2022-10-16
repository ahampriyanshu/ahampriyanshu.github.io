---
title: "Data Structure I | Study Plan | Leetcode"
author: ahampriyanshu
excerpt: C++ Solutions to Data Structure I of 2 Weeks Study Plan, Leetcode.
categories: [Sheets, Leetcode]
tags:
  [
    leetcode,
    data,
    structure,
    back,
    to,
    study,
    plan,
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

## Day 1 | Array

### 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

- [Practice](https://leetcode.com/problems/contains-duplicate)

```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        return nums.size() > set<int>(nums.begin(), nums.end()).size();
    }
};
```

### 53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

- [Practice](https://leetcode.com/problems/maximum-subarray)

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int sum =0, mx = INT_MIN;
        for (int i=0; i< nums.size(); i++){
            sum += nums[i];
            mx = max(sum ,mx);
            if (sum < 0)
                sum = 0;
        }
        return mx;
    }
};
```

## Day 2 | Array

### 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

- [Practice](https://leetcode.com/problems/two-sum/)

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> ump;
        int i,rem,n(nums.size());
        for(i=0; i<n; i++){
            rem = target - nums[i];
            if(ump.find(rem) != ump.end())
                break;
            ump[nums[i]] = i;
        }
        return {i, ump[rem]};
    }
};
```

### 88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

- [Practice](https://leetcode.com/problems/merge-sorted-array/)

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

    int i = m-1;
    int j = n-1;
    int k = m+n-1;

    while(i>=0 &&j>=0 ) nums1[k--] = nums1[i]>nums2[j] ? nums1[i--] : nums2[j--];
    while(i>=0) nums1[k--] = nums1[i--] ;
    while(j>=0) nums1[k--] = nums2[j--] ;

    }
};
```

#### Single loop

```cpp
class Solution {
public:
    void merge(vector<int>& a, int m, vector<int>& b, int n) {
    while(n) a[m + n] = (m > 0 && a[m - 1] > b[n - 1])? a[--m] : b[--n];
    }
};
```

## Day 3 | Array

### 350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

- [Practice](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

#### Hashing

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& arr1, vector<int>& arr2) {

        unordered_map<int, int> ump;
        vector<int> ans;

        for(auto e:arr1)
            ump[e]++;

        for(auto e:arr2){
            if(ump[e]){
                ans.push_back(e);
                ump[e]--;
            }
        }
        return ans;
    }
};
```

#### Sorting

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& arr1, vector<int>& arr2) {
        sort(arr1.begin(),arr1.end());
        sort(arr2.begin(),arr2.end());

        int n=arr1.size();
        int m=arr2.size();
        int i=0;
        int j=0;

        vector<int> v;

        while(i<n && j<m)
            if(arr1[i]<arr2[j]) i++;
            else if(arr1[i]>arr2[j]) j++;
            else
            {
                v.push_back(arr1[i++]);
                j++;
            }

        return v;
    }
};
```

### 121. Best Time to Buy and Sell Stock

You are given an array _prices_ where _prices[i]_ is the price of a given stock on the ith day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a different day in the future to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return 0.

- [Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy = INT_MAX, profit = 0;
        for (int price: prices)
        {
        if(price < buy) buy = price;
        if(price - buy > profit) profit = price - buy;
        }
        return profit;
    }
};
```

#### Kadane

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int curr = 0, profit = 0;
        for(int i = 1; i < prices.size(); i++) {
            curr = max(0, curr += prices[i] - prices[i-1]);
            profit = max(curr, profit);
        }
        return profit;
    }
};
```

## Day 4 | Array

### 118. Pascal's Triangle

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

- [Practice](https://leetcode.com/problems/reshape-the-matrix/)

```cpp
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        vector<vector<int>> ans;

        int m = mat.size();
        int n = mat[0].size();
        int size = m *n;

        if(size != r*c)
            return mat;

        vector<int> vec(size);
        int k = 0;
        for(auto &e: mat)
            for(auto &ee:e)
                vec[k++] = ee;

        k = 0;
        for(int i=0; i<r; i++){
            vector<int> ith;
            for(int j=0; j<c; j++){
                ith.push_back(vec[k++]);
            }
            ans.push_back(ith);
        }
        return ans;
    }
};
```

### Single loop

```cpp
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = size(mat), n = size(mat[0]), total = m * n;
        if(r * c != total) return mat;

        vector<vector<int>> ans(r, vector<int>(c));
        for(int i = 0; i < total; i++)
            ans[i / c][i % c] = mat[i / n][i % n];

        return ans;
    }
};
```

### 118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

![loading image](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

- [Practice](https://leetcode.com/problems/pascals-triangle/)

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
    vector<vector<int>> ans(numRows);
        for(int i=0;i<numRows;i++)
        {
            ans[i].resize(i+1);
            ans[i][0]=ans[i][i]=1;
            for(int j=1;j<i;j++)
                ans[i][j]=ans[i-1][j-1]+ans[i-1][j];
        }
        return ans;
    }
};
```

#### Formula based

> NCr = (NCr - 1 \* (N - r + 1)) / r
> {: .prompt-tip }

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {

    vector<vector<int>> ans;

    for (int line = 1; line <= numRows; line++)
    {
        vector<int> level;
        int C = 1;
        for (int i = 1; i <= line; i++)
        {
            level.push_back(C);
            C = C * (line - i) / i;
        }
        ans.push_back(level);
    }
    return ans;
    }
};
```

## Day 5 | Array

### 36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
1. Each column must contain the digits 1-9 without repetition.
1. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

- [Practice](https://leetcode.com/problems/valid-sudoku/)

```cpp
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
    unordered_set<char>rowset[9],colset[9],boxset[9];
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                int boxno = (i/3)*3+(j/3);
                char val = board[i][j];
                if(val=='.')
                    continue;
                if(rowset[i].count(val) || colset[j].count(val) || boxset[boxno].count(val))
                    return false;
                rowset[i].insert(val);
                colset[j].insert(val);
                boxset[boxno].insert(val);
            }
        }
        return true;
    }
};
```

### 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

1. Integers in each row are sorted from left to right.
1. The first integer of each row is greater than the last integer of the previous row.

- [Practice](https://leetcode.com/problems/valid-sudoku/)

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n = matrix.size();
        int m = matrix[0].size();
        for(int i=0; i<n; i++)
        {
            if(target >= matrix[i][0] and target <= matrix[i][m-1])
            {
            for(int j=0; j<m; j++)
                if( matrix[i][j] == target)
                    return true;
            return false;
            }
        }
        return false;
    }
};
```

## Day 6 | String

### 387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

- [Practice](https://leetcode.com/problems/first-unique-character-in-a-string/)

```cpp
class Solution {
public:
    int firstUniqChar(string s) {
        int  n(s.size()), hash[26] = {0};

        for(int i=0; i<n; i++)
            hash[s[i] - 'a']++;

        for(int i=0; i<n; i++)
            if(hash[s[i] - 'a'] == 1)
                return i;

        return -1;
    }
};
```

### 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

- [Practice](https://leetcode.com/problems/ransom-note/)

```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int hash[26]={0};

        for(char ch:magazine)
            hash[ch-'a']++;

        for(char ch:ransomNote){
            if(hash[ch-'a'])
                hash[ch-'a']--;
            else
                return false;
        }
        return true;
    }
};
```

### 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

- [Practice](https://leetcode.com/problems/valid-anagram/submissions/)

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int hash[26] = {0};

        if(s.length() != t.length())
            return false;

        for(char ch:s)
            hash[ch-97]++;

        for(char ch:t)
            if(hash[ch-97])
                hash[ch-97]--;
            else
                return false;

        return true;
    }
};
```

## Day 7 | Linked List

### 141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to.

Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

- [Practice](https://leetcode.com/problems/linked-list-cycle/)

```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {

    ListNode *slow = head, *fast = head;

    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
        if(fast==slow) return true;
    }
    return false;
}
};
```

### 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

- [Practice](https://leetcode.com/problems/merge-two-sorted-lists/)

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode head(INT_MIN), *tail = &head;

        while (l1 && l2) {
            if (l1->val < l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }

        tail->next = l1 ? l1 : l2;
        return head.next;
    }
};
```

### 203. Remove Linked List Elements

Given the head of a linked list and an integer **val**, remove all the nodes of the linked list that has **Node.val == val**, and return the new head.

- [Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

```cpp
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {

        while(head && head->val == val)
            head = head->next;

        ListNode *curr = head;

        while(curr)
            if(curr->next && curr->next->val == val)
                curr->next = curr->next->next;
            else
                curr = curr->next;
        return head;
    }
};
```

## Day 8 | Linked List

### 206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

![loading image](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```cpp
class Solution {
public:
    ListNode* reverseList(ListNode* head) {

        ListNode *curr = head, *prev = NULL;

        while(curr){
            ListNode *next = curr->next;
            curr -> next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};
```

### 83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

![loading image](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(!head) return head;

        ListNode* tmp = head;

        while(tmp->next) {
            if(tmp->val == tmp->next->val)
                tmp->next = tmp->next->next;
            else
                tmp = tmp->next;
        }
        return head;
    }
};
```

## Day 9 | Stack / Queue

### 20. Valid Parentheses

Given a string s containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

```cpp
class Solution {
public:
    bool isValid(string s) {
    stack<char>st;
    for(char i : s)
    {
        if(i == '(')
            st.push(')');
        else if(i == '{')
            st.push('}');
        else if(i == '[')
            st.push(']');
        else if( st.empty() || st.top() != i)
            return false;
        else st.pop();
    }
    return st.empty();
    }
};
```

### 232. Implement Queue using Stacks

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

- void push(int x) Pushes element x to the back of the queue.
- int pop() Removes the element from the front of the queue and returns it.
- int peek() Returns the element at the front of the queue.
- boolean empty() Returns true if the queue is empty, false otherwise.

#### O(1) pop

```cpp
class MyQueue {
public:
    stack<int> que;
    stack<int> tmp;
    int e;
    MyQueue() {
    }

    void push(int x) {

        while(!que.empty()){
            tmp.push(que.top());
            que.pop();
        }

        tmp.push(x);

        while(!tmp.empty()){
            que.push(tmp.top());
            tmp.pop();
        }
    }

    int pop() {
        e = que.top();
        que.pop();
        return e;
    }

    int peek() {
      return que.top();
    }

    bool empty() {
       return que.empty();
    }
};
```

#### O(1) push

```cpp
class MyQueue {
public:
    stack<int> que;
    stack<int> tmp;
    int e;
    int front;
    MyQueue() {
    }

    void push(int x) {
        que.push(x);
    }

    int pop() {

        while(!que.empty()){
            tmp.push(que.top());
            que.pop();
        }

        front = tmp.top();
        tmp.pop();

        while(!tmp.empty()){
            que.push(tmp.top());
            tmp.pop();
        }
        return front;
    }

    int peek() {

        while(!que.empty()){
            tmp.push(que.top());
            que.pop();
        }

        front = tmp.top();

        while(!tmp.empty()){
            que.push(tmp.top());
            tmp.pop();
        }
        return front;
    }

    bool empty() {
       return que.empty();
    }
};
```

#### O(1) push, O(1) pop b

```cpp
class MyQueue {
public:
    stack<int> in;
    stack<int> out;
    int e;
    int front;
    MyQueue() {
    }

    void push(int x) {
        in.push(x);
    }

    int pop() {

                if(out.empty()) {
            while(!in.empty()) {
                out.push(in.top());
                in.pop();

            }

        }

        front = out.top();
        out.pop();
        return val;
    }

    int peek() {

        if(out.empty()) {
            while(!in.empty()) {
                out.push(in.top());
                in.pop();
            }

        }

        return out.top();
    }

    bool empty() {
       return in.empty();
    }
};
```

## Day 11 | Tree

### 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

- [Practice](https://leetcode.com/problems/binary-tree-level-order-traversal/)

```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {

        if(!root) return {};

        vector<vector<int>> answer;
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty())
        {
            int size=q.size();
            vector<int> v;
            while(size--)
            {
                TreeNode* temp=q.front();
                q.pop();
                v.push_back(temp->val);
                if(temp->left) q.push(temp->left);
                if(temp->right) q.push(temp->right);
            }
            answer.push_back(v);
        }
        return answer;
    }
};
```

### 101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

- [Practice](https://leetcode.com/problems/symmetric-tree/)

#### Recursive

```cpp
class Solution {
public:
    bool solve(TreeNode * r1, TreeNode * r2)
    {
        if(r1 == NULL && r2 == NULL)
            return true;

        else if(r1 == NULL || r2 == NULL || r1->val != r2->val)
            return false;

        return solve(r1->left, r2->right) && solve(r1->right, r2->left);
    }

    bool isSymmetric(TreeNode* root)
    {
        return solve(root->left, root->right);
    }
};
```

#### Iterative

```cpp
class Solution {
public:

    bool isSymmetric(TreeNode* root)
    {
    if (!root) return true;

    queue<TreeNode*> q;
    q.push(root->left);
    q.push(root->right);

    while (!q.empty()) {
        TreeNode* l = q.front();
        q.pop();
        TreeNode* r = q.front();
        q.pop();

        if(!l && !r) continue;
        if(!l || !r) return false;

        if (p->val != q->val)
            return false;

        q.push(l->left);
        q.push(r->right);
        q.push(l->right);
        q.push(r->left);
    }

    return true;
    }
};
```

### 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

- [Practice]()

#### Recursive

```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (!root) return 0;
        return 1 + max(maxDepth(root->left), maxDepth(root->right));
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(!root) return 0;
        int ans = 0;
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty()){
            ++ans;
            int size = q.size();
            while(size--){
                TreeNode* tmp = q.front();
                q.pop();

                if(tmp->left)
                    q.push(tmp->left);
                if(tmp->right)
                    q.push(tmp->right);
            }
        }
        return ans;
    }
};
```

## Day 12 | Tree

### 226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

![loading image](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

- [Practice](https://leetcode.com/problems/invert-binary-tree/)

#### Recursion

```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return NULL;
        TreeNode* tmp = root -> left;
        root -> left = invertTree(root -> right);
        root -> right = invertTree(tmp);
        return root;
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return NULL;
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()){
            TreeNode *tmp = q.front();
            q.pop();
            if(tmp->left) q.push(tmp->left);
            if(tmp->right) q.push(tmp->right);
            swap(tmp->left, tmp->right);
        }

        return root;
    }
};
```

### 112. Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

- [Practice](https://leetcode.com/problems/search-in-a-binary-search-tree/)

#### Recursion

```cpp
class Solution {
public:
    bool hasPathSum(TreeNode* root, int sum) {
        if(!root) return false;
        if (!root->left && !root->right)
            return sum == root->val;
        return hasPathSum(root->left, sum - root->val) || hasPathSum(root->right, sum - root->val);
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if(!root) return false;

        queue<pair<TreeNode*,int>> q;
        q.push({root, root->val});

        while(!q.empty())
        {
            pair<TreeNode*, int> tmp = q.front();
            q.pop();

            TreeNode *cur = tmp.first;
            int target = tmp.second;

            if(!cur->left && !cur->right && target == targetSum)
                return true;

            if(cur->right) q.push({cur->right, target + cur->right->val});
            if(cur->left) q.push({cur->left, target + cur->left->val});
        }

        return false;
    }
};
```

## Day 13 | Tree

### 700. Search in a Binary Search Tree

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

- [Practice](https://leetcode.com/problems/search-in-a-binary-search-tree/)

#### Recursion

```cpp
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if(!root) return NULL;
        if(root->val == val) return root;
        if(root->val > val) return searchBST(root->left, val);
        return searchBST(root->right, val);
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        while(root and root->val != val)
            root = root->val > val ? root->left : root->right;
        return root;
    }
};
```

### 701. Insert into a Binary Search Tree

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

- [Practice](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

#### Recursive

```cpp
class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* node, int val) {
       	if (!node) {
			TreeNode *newNode = new TreeNode(val);
			return newNode;
		}

		if (val < node->val)
			node->left = insertIntoBST(node->left, val);
		else
			node->right = insertIntoBST(node->right, val);

		return node;
    }
};
```

## Day 14 | Tree

### 235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

- [Practice](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

#### Recursive

```cpp
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if ((root -> val > p -> val) && (root -> val > q -> val)) {
            return lowestCommonAncestor(root -> left, p, q);
        }
        if ((root -> val < p -> val) && (root -> val < q -> val)) {
            return lowestCommonAncestor(root -> right, p, q);
        }
        return root;
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode* curr = root;
        while (1) {
            if (p -> val < curr -> val && q -> val < curr -> val)
                curr = curr -> left;
            else if (p -> val > curr -> val && q -> val > curr -> val)
                curr = curr -> right;
             else
                break;
        }
        return curr;
    }
};
```

### 653. Two Sum IV - Input is a BST

Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

- [Practice](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

#### Recursive

```cpp
class Solution {
public:
    set<int> s;
    bool findTarget(TreeNode* root, int k) {
        if(!root) return false;
        if(s.find(k - root->val) != s.end()) return true;
        s.insert(root->val);
        return findTarget(root->left, k ) || findTarget(root->right, k);
    }
};
```

#### Iterative

```cpp
class Solution {
public:
    vector<int> vec;
    void inorder(TreeNode* root) {
        if (!root) return;
        inorder(root->left);
        vec.push_back(root->val);
        inorder(root->right);
    }
    bool findTarget(TreeNode* root, int k) {
        inorder(root);
        int l = 0, r = vec.size()-1;
        while (l < r) {
            if (vec[l] + vec[r] == k) return true;
            else {
                if (vec[l] + vec[r] < k) l++;
                else r--;
            }
        }
        return false;
    }
};
```

---
title: "July | 2022 | Leetcoding Challenge"
author: ahampriyanshu
categories: [Contests, Leetcode]
math: true
excerpt: C++ Solutions to July Leetcoding Challenge, 2022
tags:
  [
    leetcode,
    leetcoding,
    challenge,
    july,
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

## 01 July | 1710. Maximum Units on a Truck

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where $boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBox-i]$:

- $numberOfBoxes_i$ is the number of boxes of type $i$.
- $numberOfUnitsPerBox_i$ is the number of units in each box of the type $i$.

You are also given an integer $truckSize$, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed $truckSize$.

Return the **maximum** total number of **units** that can be put on the truck.

- [Practice](https://leetcode.com/problems/reverse-string/)

### Merge Sort

```cpp
static bool cmp(const vector<int>& v1, const vector<int>& v2){
        return v1[1] > v2[1];
}

int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {

        int ans = 0;

        sort(boxTypes.begin(), boxTypes.end(), cmp);


        for(auto box: boxTypes){

            if(truckSize >= box[0]){
                ans += box[0] * box[1];
                truckSize -= box[0];
            }else{
                ans += truckSize * box[1];
                break;
            }

        }

        return ans;
}
```

### Count Sort

```cpp
int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {

    int freq[1001]{0}, ans = 0;

	for(auto box : boxTypes)
        freq[box[1]] += box[0];

	for(int units = 1000; truckSize > 0 && ~units; --units) {
		ans += min(truckSize, freq[units]) * units;
		truckSize -= freq[units];
	}

        return ans;
}
```

## 02 July | 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

- horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
- verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

- [Practice](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/)

```cpp
    int maxArea(int h, int w, vector<int>& h, vector<int>& v) {
        h.push_back(h);
        sort(h.begin(), h.end());
		int maxh = h[0];
        for(int i=1; i<h.size(); i++)
            maxh = max(maxh, h[i] - h[i-1]);

        v.push_back(w);
        sort(v.begin(), v.end());
		int maxv = v[0];
        for(int i=1; i<v.size(); i++)
            maxv = max(maxv, v[i] - v[i-1]);

        return (1LL*maxh*maxv) % 1000000007;
    }
```

## 03 July | 376. Wiggle Subsequence

A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

- For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
- In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
  A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array nums, return the length of the longest wiggle subsequence of nums.

- [Practice](https://leetcode.com/problems/wiggle-subsequence/)

```cpp
int wiggleMaxLength(vector<int>& nums) {
        int n = nums.size();
        int peak = 1, valley = 1;

        for(int i=1; i<n; i++){
            if(nums[i]>nums[i-1])
                peak=valley + 1;
            else if(nums[i]<nums[i-1])
                valley = peak + 1;
        }

        return max(peak, valley);
    }
```

## 04 July | 1710. Maximum Units on a Truck

There are **n** children standing in a line. Each child is assigned a rating value given in the integer array **ratings**.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

_Return the minimum number of candies you need to have to distribute the candies to the children._

- [Practice](https://leetcode.com/problems/candy/)

```cpp
    int candy(vector<int>& ratings) {

        int n = ratings.size(), sum = 0;
        vector<int> res(n, 1);

        if (n == 1) return 1;

        for(int i=0; i<n-1; i++)
            if (ratings[i+1] > ratings[i])
                res[i+1] = res[i] + 1;

        for (int i=n-2; i>=0; i--)
        {
            if (ratings[i] > ratings[i+1] && res[i] <= res[i+1])
                res[i] = res[i+1]+1;
            sum += res[i];
        }

        sum += res[n-1];
        return sum;
    }
```

## 05 July | 1710. Maximum Units on a Truck

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

- [Practice](https://leetcode.com/problems/longest-consecutive-sequence/)

### O(nlogn)

```cpp
    int longestConsecutive(vector<int>& nums) {

        int n = nums.size(), ans = INT_MIN, cnt = 1;

        if(n == 0) return 0;

        if(n == 1) return 1;

        sort(nums.begin(), nums.end());

        for(int i=0; i<n-1.; i++)
            if(nums[i] + 1 == nums[i+1])
                ans = max(ans, ++cnt);
            else if(nums[i] != nums[i+1])
                cnt = 1;

        return max(ans, cnt++);
    }
```

## 06 July | 509. Fibonacci Number

The **Fibonacci numbers**, commonly denoted $F(n)$ form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

- [Practice](https://leetcode.com/problems/fibonacci-number/)

### O(nlogn)

```cpp
    int fib(int n) {

        if(!n) return 0;
        if(n <= 2) return 1;

        vector<int> dp(n);

        dp[0] = dp[1] = 1;

        for(int i=2; i<n; i++)
            dp[i] = dp[i-1] + dp[i-2];

        return dp[n-1];
    }
```

## 06 July | 509. Fibonacci Number

The **Fibonacci numbers**, commonly denoted $F(n)$ form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from `0` and `1`.

- [Practice](https://leetcode.com/problems/fibonacci-number/)

### Recursive

```cpp
bool helper(string& s1, string& s2, string &s3, int l1, int l2, int l3) {

        if(l1<0 && l2<0 && l3<0)
            return true;

        if(l1>=0 && l2>=0 && s1[l1]==s3[l3] && s2[l2]==s3[l3] )
            return (helper(s1, s2, s3, l1-1, l2, l3-1) || helper(s1, s2, s3, l1, l2-1, l3-1));

        if(l1>=0 && s1[l1]==s3[l3])
            return helper(s1, s2, s3, l1-1, l2, l3-1);

        if(l2>=0 &&s2[l2]==s3[l3])
            return helper(s1, s2, s3, l1, l2-1, l3-1);

        return false;
}

bool isInterleave(string s1, string s2, string s3) {
        if(s3.size() != s1.size() + s2.size())
			return false;
        return helper(s1, s2, s3,s1.size()-1, s2.size()-1, s3.size()-1);
}
```

### DP

```cpp
bool isInterleave(string s1, string s2, string s3) {
        vector<int>cur(s2.size()+1,0),prev(s2.size()+1,0);
        if(s3.size()!=s1.size()+s2.size())
            return false;

        for(int i=s1.size();i>=0;i--){
            for(int j=s2.size();j>=0;j--){
                int k=i+j;
                if(i==s1.size()&&j==s2.size())
                    cur[j]=1;

                else if(s3[k]==s2[j]&&s3[k]==s1[i])
                    cur[j]= prev[j]||cur[j+1];

                else if(s1[i]==s3[k])
                    cur[j]= prev[j];

                else if(s3[k]==s2[j])
                    cur[j]= cur[j+1];

                else
                    cur[j]= false;
            }
            prev=cur;
        }
        return cur[0];
}
```

## 07 July | 509. Fibonacci Number

There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.

A neighborhood is a maximal group of continuous houses that are painted with the same color.

- For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].
  Given an array houses, an $m x n$ matrix cost and an integer target where:

- $houses[i]$: is the color of the house $i$, and 0 if the house is not painted yet.
- $cost[i][j]$: is the cost of paint the house $i$ with the color $j + 1$.
  Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return $-1$.

- [Practice](https://leetcode.com/problems/paint-house-iii/)

```cpp
    int dp[101][101][21];

    int INF = 1000001;

    int dfs(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target, int idx, int nei, int last){

        if(idx == m)
            return nei == target ? 0 : INF;

        if(nei > target) return INF;

        if(dp[idx][nei][last] != -1)
            return dp[idx][nei][last];

        if(houses[idx] == 0){

            int ans = INF;

            for(int col = 1; col<=n; col++)
                ans = min(ans, cost[idx][col-1] + dfs(houses, cost, m, n, target, idx+1, col == last ? nei : nei + 1, col));

            return dp[idx][nei][last] = ans;
        }

        return dp[idx][nei][last] = dfs(houses, cost, m, n, target, idx + 1, houses[idx] == last ? nei : nei + 1, houses[idx]);
    }

    int minCost(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target) {
        memset(dp, -1, sizeof dp);

        int ans = dfs(houses, cost, m, n, target, 0, 0, 0);
        return ans < INF ? ans : -1;
    }
```

## 8 July |

Given strings s1, s2, and s3, find whether s3 is formed by an **interleaving** of s1 and s2.

An **interleaving** of two strings s and t is a configuration where s and t are divided into n and m **non-empty** substrings respectively, such that:

- s = s1 + s2 + ... + sn
- t = t1 + t2 + ... + tm
- |n - m| <= 1

The **interleaving** is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

**Note:** $a + b$ is the concatenation of strings a and b.

- [Practice]()

```cpp
    bool isInterleave(string s1, string s2, string s3) {
        vector<int>cur(s2.size()+1,0),prev(s2.size()+1,0);
        if(s3.size()!=s1.size()+s2.size())
            return false;

        for(int i=s1.size();i>=0;i--){
            for(int j=s2.size();j>=0;j--){
                int k=i+j;
                if(i==s1.size()&&j==s2.size()){
                    cur[j]=1;
                }
                else if(s3[k]==s2[j]&&s3[k]==s1[i]){
                    cur[j]= prev[j]||cur[j+1];
                }
                else if(s1[i]==s3[k]){
                    cur[j]= prev[j];
                }
                else if(s3[k]==s2[j]){
                    cur[j]= cur[j+1];
                }
                else{
                    cur[j]= false;
                }
            }
            prev=cur;
        }
        return cur[0];
    }
```

## 9 July | 1473. Paint House III

There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.

A neighborhood is a maximal group of continuous houses that are painted with the same color.

For example: $houses = [1,2,2,3,3,2,1,1]$ contains 5 neighborhoods $[{1}, {2,2}, {3,3}, {2}, {1,1}]$.
Given an array houses, an m x n matrix cost and an integer target where:

- $houses[i]$: is the color of the house i, and 0 if the house is not painted yet.
- $cost[i][j]$: is the cost of paint the house i with the color j + 1.

Return the minimum cost of painting all the remaining houses in such a way that there are exactly **target** neighborhoods. If it is not possible, return $-1$.

- [Practice](https://leetcode.com/problems/paint-house-iii/)

```cpp
    int dp[101][101][21];

    int INF = 1000001;

    int dfs(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target, int idx, int nei, int last){

        if(idx == m)
            return nei == target ? 0 : INF;

        if(nei > target) return INF;

        if(dp[idx][nei][last] != -1)
            return dp[idx][nei][last];

        if(houses[idx] == 0){

            int ans = INF;

            for(int col = 1; col<=n; col++)
                ans = min(ans, cost[idx][col-1] + dfs(houses, cost, m, n, target, idx+1, col == last ? nei : nei + 1, col));

            return dp[idx][nei][last] = ans;
        }

        return dp[idx][nei][last] = dfs(houses, cost, m, n, target, idx + 1, houses[idx] == last ? nei : nei + 1, houses[idx]);
    }

    int minCost(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target) {
        memset(dp, -1, sizeof dp);

        int ans = dfs(houses, cost, m, n, target, 0, 0, 0);
        return ans < INF ? ans : -1;
    }
```

## 10 July | 746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

- [Practice](https://leetcode.com/problems/min-cost-climbing-stairs/)

```cpp
    int minCostClimbingStairs(vector<int>& cost) {
        int n=cost.size();
        int tmp, first=cost[0],second=cost[1];
        for(int i=2;i<n;i++){
            tmp=min(first,second)+cost[i];
            first=second;
            second=tmp;
        }
        return min(first,second);
    }
```

## 11 July | 199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

- [Practice](https://leetcode.com/problems/binary-tree-right-side-view/)

```cpp
    vector<int> rightSideView(TreeNode* root) {

    vector<int> ans;

    if(!root) return ans;

    queue<TreeNode*> q;

    q.push(root);

    while(!q.empty()){
        TreeNode* temp;

        int n=q.size();

        while(n--){
            temp=q.front();
            q.pop();
            if(temp->left) q.push(temp->left);
            if(temp->right) q.push(temp->right);
        }

        ans.push_back(temp->val);
    }
    return ans;

    }
```

## 12 July | 473. Matchsticks to Square

You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.

- [Practice](https://leetcode.com/problems/matchsticks-to-square/)

```cpp
    bool dfs(vector<int>& matchsticks, vector<int>& sides, int index, int target){
        if(index == -1){
            return true;
        }
        for(int i = 0; i < 4; i++){
            if(((sides[i] + matchsticks[index]) > target) or (i > 0 and sides[i] == sides[i - 1])){
                continue;
            }
            sides[i] += matchsticks[index];
            if(dfs(matchsticks, sides, index - 1, target)){
                return true;
            }
            sides[i] -= matchsticks[index];
        }
        return false;
    }

    bool makesquare(vector<int>& matchsticks) {
        int sum = 0;
        for(int i : matchsticks){
            sum += i;
        }
        if(sum%4 != 0 or matchsticks.size() < 3){
            return false;
        }
        sort(matchsticks.begin(), matchsticks.end());
        vector<int> sides(4, 0);
        return dfs(matchsticks, sides, matchsticks.size() - 1, sum/4);
    }
```

## 13 July | 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

- [Practice](https://leetcode.com/problems/binary-tree-level-order-traversal/)

```cpp
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
```

## 14 July | 105. Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

- [Practice](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

```cpp
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        map<int,int> mp;
        for(int i=0;i<preorder.size();i++){
            mp[inorder[i]]=i;
        }
        TreeNode* root = construct(preorder,0,preorder.size()-1,inorder,0,inorder.size()-1,mp);
        return root;
    }
    TreeNode* construct(vector<int>&preorder, int preStart, int preEnd, vector<int> &inorder,int inStart, int inEnd, map<int,int> &mp){
        if(preStart>preEnd || inStart>inEnd) return NULL;
        TreeNode* root = new TreeNode(preorder[preStart]);
        int inRoot = mp[root->val];
        int numsLeft = inRoot-inStart;

        root->left = construct(preorder,preStart+1,preStart+numsLeft,inorder,inStart,inRoot-1,mp);
        root->right = construct(preorder,preStart+numsLeft+1,preEnd,inorder,inRoot+1,inEnd,mp);
        return root;
    }
```

## 15 July | 695. Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

![loading](https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg)

- [Practice](https://leetcode.com/problems/max-area-of-island/)

```cpp
    int utility(vector<vector<int>>& grid, int i, int j)
    {
        if(i<0 || i>=grid.size() || j<0 || j>=grid[0].size())
            return 0;
        if(grid[i][j]==0)
            return 0;

        grid[i][j]=0;


        return (1+ utility(grid, i+1, j) + utility(grid, i, j+1) + utility(grid, i-1, j) + utility(grid, i, j-1));
    }


    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int ans = 0, x =0;
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
            {
                if(grid[i][j])
                    x = utility(grid, i, j);

                ans = max(ans, x);
            }
        return ans;
    }
```

## 16 July | 576. Out of Boundary Paths

There is an $m x n$ grid with a ball. The ball is initially at the position $[startRow, startColumn]$. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers $m$, $n$, $maxMove$, $startRow$, $startColumn$, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo $10^9 + 7$.

- [Practice](https://leetcode.com/problems/out-of-boundary-paths/)

```cpp
    int dx[4] = {0, 0, -1, 1};
    int dy[4] = { -1, 1, 0, 0};
    int dp[55][55][55];
    long long M = 1e9 + 7;

    bool isOut(int m, int n, int x, int y) {
        return (x < 0 or x == m or y == n or y < 0 );
    }

    int solve(int m, int n, int moves, int sr, int sc) {

        if (isOut(m, n, sr, sc)) return 1;
        if (moves == 0) return 0;

        if (dp[sr][sc][moves] != -1) return dp[sr][sc][moves];

        long long ways = 0;
        for (int i = 0; i < 4; i++) {
            int xx = sr + dx[i];
            int yy = sc + dy[i];

            ways += solve(m, n, moves - 1, xx, yy) % M;
            ways %= M;
        }

        dp[sr][sc][moves] = ways % M;
        return ways;
    }

    int findPaths(int m, int n, int maxMove, int sr, int sc) {
        memset(dp, -1, sizeof(dp));
        return solve(m, n, maxMove, sr, sc);
    }
```

## 19 July | 118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

- [Practice](https://leetcode.com/problems/pascals-triangle/)

```cpp
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> ans;
        for(int i = 0; i<numRows; ++i)
        {
            vector<int> row(i+1, 1);
            for(int j = 1; j<i; ++j)
                row[j] = ans[i-1][j] + ans[i-1][j-1];
            ans.push_back(row);
        }
        return ans;
    }
```

## 20 July | 792. Number of Matching Subsequences

Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

- [Practice](https://leetcode.com/problems/number-of-matching-subsequences/)

```cpp
bool hasMatches(string &curr, string &s) {
        int pos = 1;
        int i = s.find(curr[0]);
        if (i == -1)
            return false;
        while (pos < curr.length()) {
            i = s.find(curr[pos], i + 1);
            if (i == -1)
                return false;
            pos++;
        }
        return true;
    }

    int numMatchingSubseq(string s, vector<string>& words) {
        int count = 0;
        for (string str : words)
            if (hasMatches(str, s))
                count++;
        return count;
    }
```

## 21 July | 86. Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

- [Practice](https://leetcode.com/problems/partition-list)

```cpp
    ListNode* partition(ListNode* head, int x) {

        if(!head or !head->next) return head;

        ListNode *left = new ListNode(0), *start = left, *center = new ListNode(0), *middle = center;

        while(head and head->val != x){
            if(head->val < x){
            left->next = new ListNode(head->val);
            left = left->next;
            }else{
            center->next = new ListNode(head->val);
            center = center->next;
            }
            head = head->next;
        }

        if(!head){
            if(middle->next)
            left->next = middle->next;
            return start->next;
        }

        ListNode *right = head, *end = right;

        head = head->next;

        while(head){
            if(head->val < x){
            left->next = new ListNode(head->val);
            left = left->next;
            }else{
            right->next = new ListNode(head->val);
            right = right->next;
            }
            head = head->next;
        }

        right->next = NULL;

        if(middle->next){
            left->next = middle->next;
            center->next = end;
        } else left->next = end;


        return start->next;
    }
```

## 22 July | 92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

- [Practice](https://leetcode.com/problems/reverse-linked-list-ii/)

```cpp
    ListNode* reverseBetween(ListNode* head, int left, int right) {

        ListNode *sentinel = new ListNode(0), *prev = sentinel, *curr, *next;
        int i = 0;
        sentinel->next = head;

        while (i++ < left - 1)
            prev = prev->next;

        curr = prev->next;

        for (i = 0; i < right - left; i++){
            next = prev->next;
            prev->next = curr->next;
            curr->next = curr->next->next;
            prev->next->next = next;
        }

        return sentinel->next;
    }
```

## 24 July | 240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.

- [Practice](https://leetcode.com/problems/search-a-2d-matrix-ii/)

```cpp
    bool searchMatrix(vector<vector<int>>& mat, int target) {

        int m = mat.size(), n = mat[0].size(), i = m - 1, j = 0;

        while (i>=0 && j<n){
            if (mat[i][j] == target) return true;
            if (mat[i][j] < target) j++;
            else i--;
        }

        return false;

    }
```

## 25 July | 240. Search a 2D Matrix II

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return $[-1, -1]$.

You must write an algorithm with $O(log n)$ runtime complexity.

- [Practice](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### Binary Search

```cpp
    vector<int> searchRange(vector<int>& nums, int target) {

        int first = -1, last = -1, l(0), r(nums.size()-1);

        while(l<=r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target)
                first =  mid;
            if(nums[mid] >= target)
                r = mid - 1;
            else
                l = mid + 1;
        }

        l = 0, r = nums.size()-1;
        while(l<=r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target)
                last =  mid;
            if(nums[mid] > target)
                r = mid -1;
            else
                l = mid + 1;
        }

        return {first, last};

    }
```

### STL

```cpp
vector<int> searchRange(vector<int>& nums, int target) {
        vector<int>ans;
        vector<int>::iterator it, lower, upper;
        it = find(nums.begin(), nums.end(), target);
        if(it != nums.end()){
            lower = lower_bound(nums.begin(), nums.end(), target);
            upper = upper_bound(nums.begin(), nums.end(), target);
            ans.push_back(lower - nums.begin());
            ans.push_back(upper - nums.begin() - 1);
        }
        else{
            ans.push_back(-1);
            ans.push_back(-1);
        }
        return ans;
    }
```

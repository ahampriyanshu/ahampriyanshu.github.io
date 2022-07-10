---
title: "July | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, July 2022
math: true
tags: [gfg, geeksforgeeks, geeks, for, potd, problem, of, the, day, july, ds, array, tree, trie, string, stacks, queue, linked list]
---

## 01 July | Matrix Exponentiation

Given an equation of the form $f(n) = f(n-1) + f(n-2)$ where $f(0) = 1$ , $F(1) = 1$ , the task is to find the nth term of this sequence.

* [Practice](https://practice.geeksforgeeks.org/problems/matrix-exponentiation2711/1)

### O(n)

```cpp
int FindNthTerm(long long int n) {
        
    if(n < 2) return n;
        
    long long int k1, k2, k3;
        
    k1 = k2 = 1;
        
    for(int i=2; i<=n; i++){
            k3 = (k1 + k2) % 1000000007;
            k1 = k2;
            k2 = k3; 
    }
            
    return k3;
}
```

### O(logn)

```cpp

```

## 02 July | Count the paths 

Given a directed acyclic graph(DAG) with n nodes labeled from $0$ to $n-1$. Given edges, s and d ,count the number of ways to reach from s to d.There is a directed Edge from vertex $edges[i][0]$ to the vertex $edges[i][1]$.

* [Practice](https://practice.geeksforgeeks.org/problems/count-the-paths4332/1)

```cpp
int dfs(vector<vector<int>> &adj, vector<int> dp, int n, int s, int &d){
        if(s == d){
            return 1;
        }
        if(dp[s] != -1){
            return dp[s];
        }
        dp[s] = 0;
        
        for(auto &e : adj[s])
            dp[s] += dfs(adj, dp, n, e, d);
        
        return dp[s];
    }

	int possible_paths(vector<vector<int>>edges, int n, int s, int d){
	    vector<vector<int>> adj (n);
	    for(auto &e : edges){
	        int u = e[0];
	        int v = e[1];
	        adj[u].push_back(v);
	    }
	    vector<int> dp(n, -1);
	    return dfs(adj, dp ,n, s, d);
	}
```

## 03 July | Word Break - Part 2

Given a string s and a dictionary of words dict of length n, add spaces in s to construct a sentence where each word is a valid dictionary word. Each dictionary word can be used more than once. Return all such possible sentences.

* [Practice](https://practice.geeksforgeeks.org/problems/word-break-part-23249/1)

```cpp
    void solve(string s, string ans, unordered_set<string> &st, vector<string>& dict) {
        
        if(s.length() <= 0) {
            ans.pop_back();
            dict.push_back(ans);
        }
    
        for(int i = 0; i < s.length(); i++) {
            string left = s.substr(0,i+1);
    
            if(st.find(left) != st.end()) {
                solve(s.substr(i+1), ans + left + " ", st,dict);
            }
        }
    }
    
    vector<string> wordBreak(int n, vector<string>& dict, string s)
    {
        unordered_set<string> st;
        for(string str : dict)
            st.insert(str);
        
        dict.clear();
        solve(s,"",st,dict);
        
        return dict;
    }
```

## 04 July | Minimum X (xor) A 

Given two integers A and B, the task is to find an integer X such that (X XOR A) is minimum possible and the count of set bit in X is equal to the count of set bits in B.

* [Practice](https://practice.geeksforgeeks.org/problems/x-xor-a-is-minimum-and-set-bits-in-x-b/1#)

```cpp
    int bits(int x) {
        int s = 0;
        while (x != 0) {
            if (x % 2 == 1)
                s++;
            x = x / 2;
        }
        return s;
    }
    
    int minVal(int a, int b) {
        
        int a_bits = bits(a);
        int b_bits = bits(b);
        
        if (a_bits == b_bits) return a;
        
        int ans = a;
        int t = ((a_bits > b_bits) ? (a_bits - b_bits) : (b_bits - a_bits));
        int i = 1;
        int cmp;
        
        while (t > 0) {
            cmp = ((a_bits > b_bits) ? i : 0);
            if ((i & ans) == cmp) {
                ans = ans ^ i;
                t--;
            }
            i = i << 1;
        }
        return ans;
    }
```

## 05 July | Count BST nodes that lie in a given range

Given a Binary Search Tree (BST) and a range l-h(inclusive), count the number of nodes in the BST that lie in the given range.

* The values smaller than root go to the left side
* The values greater and equal to the root go to the right side

* [Practice](https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1#)

### O(n)

```cpp
    int getCount(Node *root, int l, int h)
    {
      if(!root) return 0;
      
      int ans = 0;
      
      if(root->data >= l and root->data <= h)
        ans++;
      
      ans += getCount(root->left, l, h);
      ans += getCount(root->right, l, h);
      
      return ans;
    }
```

### O(h)

```cpp
    int getCount(Node *root, int low, int high)
    {
    	if (!root) 
    	    return 0;
    
    	if (root->data == high && root->data == low)
    		return 1;
    
    	if (root->data <= high && root->data >= low)
    		return 1 + getCount(root->left,low,high) + getCount(root->right,low,high);
    
    	if (root->data < low)
    		return getCount(root->right, low, high);
    		
    	return getCount(root->left, low, high);
    }
```

## 06 July | Count BST nodes that lie in a given range

Given a Binary Tree, print the diagonal traversal of the binary tree.

* [Practice](https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1#)

```cpp
vector<int> diagonal(Node *root)
{
    vector<int> ans;
    queue<Node*> q;
    q.push(root);
    
    while(!q.empty()){
        Node* tmp = q.front();
        q.pop();
        while(tmp){
            if(tmp->left) 
                q.push(tmp->left);
            ans.push_back(tmp->data);
            tmp = tmp->right;
        }
    }
    
    return ans;
}
```

## 07 July | Count BST nodes that lie in a given range

2 players A and B take turns alternatively to play a game in which they have N numbers on a paper. In one turn, a player can replace one of the numbers by any of its factor (except for 1 & the number itself). The player who is unable to make a move looses the game. Find the winner of the game if A starts the game and both play optimally.

* [Practice](https://practice.geeksforgeeks.org/problems/brain-game1742/1#)

```cpp
bool brainGame(vector<int>nums) {
    int dp[1005] = {0};
    dp[1] = dp[2] = 0;
    
    for(int i = 3; i <= 1000; i++)
        for(int j = 2; j * j <= i; j++)
            if(i % j == 0)
                dp[i] = max(dp[i], 1 + max(dp[i / j], dp[j]));
    
    int x = 0;
    for(auto num: nums)
        x = x xor dp[num];
    
    return x > 0;
}
```

## 09 July | Polynomial Addition

Given two polynomial numbers represented by a linked list. The task is to complete the function **addPolynomial()** that adds these lists meaning adds the coefficients who have the same variable powers.

* [Practice](https://practice.geeksforgeeks.org/problems/polynomial-addition/1#)

```cpp
    Node* addPolynomial(Node *first, Node *second)
    {
        Node*head=new Node(0,0);
        Node*temp=head;
        
        while(first && second){
           if(first->pow > second->pow){
               temp->next=first;
               first=first->next;
           }
           else if(first->pow < second->pow){
               temp->next=second;
               second=second->next;
           }
           else{
               first->coeff+=second->coeff;
               temp->next=first;
               first=first->next;
               second=second->next;
           }
           temp=temp->next;
        }
        
        temp->next = first ? first : second;
        
        return head->next;
    }
```

## 10 July | Find all possible paths from top to bottom 

Given a N x M grid. Find All possible paths from top left to bottom right.From each cell you can either move only to right or down.

* [Practice](https://practice.geeksforgeeks.org/problems/find-all-possible-paths-from-top-to-bottom/1#)

```cpp
    void solve(vector<vector<int>> & res,int x,int y,int n,int m,vector<vector<int>> &grid,vector<int> path){
        if(x>=n || y>=m)return;
         path.push_back(grid[x][y]);
         
        if(x==n-1 && y==m-1)
            return res.push_back(path);
        
        solve(res,x+1,y,n,m,grid,path);
        solve(res,x,y+1,n,m,grid,path);
    }
    
    vector<vector<int>> findAllPossiblePaths(int n, int m, vector<vector<int>> &grid)
    {
        vector<vector<int>> res;
        solve(res,0,0,n,m,grid,{});
        return res;
    }
```
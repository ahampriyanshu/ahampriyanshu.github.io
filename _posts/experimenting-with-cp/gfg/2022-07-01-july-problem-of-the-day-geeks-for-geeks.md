---
title: "July | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, July 2022
math: true
tags:
  [
    gfg,
    geeksforgeeks,
    geeks,
    for,
    potd,
    problem,
    of,
    the,
    day,
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

## 01 July | Matrix Exponentiation

Given an equation of the form $f(n) = f(n-1) + f(n-2)$ where $f(0) = 1$ , $F(1) = 1$ , the task is to find the nth term of this sequence.

- [Practice](https://practice.geeksforgeeks.org/problems/matrix-exponentiation2711/1)

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

## 02 July | Count the paths

Given a directed acyclic graph(DAG) with n nodes labeled from $0$ to $n-1$. Given edges, s and d ,count the number of ways to reach from s to d.There is a directed Edge from vertex $edges[i][0]$ to the vertex $edges[i][1]$.

- [Practice](https://practice.geeksforgeeks.org/problems/count-the-paths4332/1)

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

- [Practice](https://practice.geeksforgeeks.org/problems/word-break-part-23249/1)

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

- [Practice](https://practice.geeksforgeeks.org/problems/x-xor-a-is-minimum-and-set-bits-in-x-b/1#)

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

- The values smaller than root go to the left side
- The values greater and equal to the root go to the right side

- [Practice](https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1#)

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

- [Practice](https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1#)

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

- [Practice](https://practice.geeksforgeeks.org/problems/brain-game1742/1#)

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

- [Practice](https://practice.geeksforgeeks.org/problems/polynomial-addition/1#)

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

- [Practice](https://practice.geeksforgeeks.org/problems/find-all-possible-paths-from-top-to-bottom/1#)

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

## 11 July | Reaching the heights

The teacher gives a mental ability question to Raju. The question is as follows:-

Raju is in an elevator. Given by his teacher is an array of size N which denotes the number of floors and has a 1 based indexing. The elevator starts from the ground and moves up and down, $X$ and $Y$ floors respectively. There is a code used in the elevator according to which it moves up $X$ floors given at odd indexes of the array and moves down Y floors given at even indexes of the array. He is asked to go to the highest floor possible. Help him to sort the array such that he reaches the highest floor after traversing the whole array from starting till the end, without skipping any index.

He always prefers to move more number of floors up and less number of floors down. Once he gets into the elevator, the elevator should not reach the ground again, if it does return $-1$.

- [Practice](https://practice.geeksforgeeks.org/problems/reaching-the-heights1921/1)

```cpp
vector<int> reaching_height(int n, int a[]) {
   sort(a,a+n,greater<int>());
   vector<int> v;
   int k=n-1;
   int i=0,res=0;

   while(i<=k){
       v.push_back(a[i++]);
       v.push_back(a[k--]);
   }

   for(int i=0;i<n;i++){
       if(i%2==0) res+=v[i];
       else res-=v[i];
       if(res==0)return {-1};
   }

   if(res>0){
       if(n%2==1)v.pop_back();
   }

   return v;
}
```

## 12 July | Shortest Uncommon Subsequence

Given two strings S and T, find length of the shortest subsequence in S which is not a subsequence in T. If no such subsequence is possible, return -1. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. A string of length n has 2^n different possible subsequences.

- [Practice](https://practice.geeksforgeeks.org/problems/shortest-uncommon-subsequence5746/1)

```cpp
int dp[500][500];
  int helper(string& S,string& T,int i,int j){
      if(i>=S.size()) return 500;
      if(j>=T.size()) return 1;
      if(dp[i][j] !=-1) return dp[i][j];
      int k=j;
      for(;k<T.size();k++){
          if(S[i]==T[k])break;
      }
      if(k==T.size())return 1;
      return dp[i][j] = min(helper(S,T,i+1,j),1+helper(S,T,i+1,k+1));
  }
    int shortestUnSub(string S, string T) {
        memset(dp,-1,sizeof(dp));
        int res =helper(S,T,0,0);
        if(res>=500) return -1;
        return res;
    }
```

## 14 July | BST to greater sum tree

Given a BST, transform it into greater sum tree where each node contains sum of all nodes greater than that node.

- [Practice](https://practice.geeksforgeeks.org/problems/bst-to-greater-sum-tree/1)

```cpp
    int tmp,sum = 0;
    void transformTree(struct Node *root)
    {
        if(root==NULL) return;

        transformTree(root->right);
        tmp = root->data;
        root->data = sum;
        sum += tmp;
        transformTree(root->left);
    }
```

## 15 July | Min sum formed by digits

Given an array of digits (values are from 0 to 9), find the minimum possible sum of two numbers formed from digits of the array. All digits of given array must be used to form the two numbers.

- [Practice](https://practice.geeksforgeeks.org/problems/min-sum-formed-by-digits3551/1)

```cpp
    long long int minSum(int arr[], int n)
    {
        sort(arr, arr+n);

        long long int odd_fact, even_fact, even, odd;

        odd = even = 0;

        for(int i=0; i<n; i++)
            if(i%2)
                odd = odd*10 + arr[i];
            else
                even = even*10 + arr[i];

        return even + odd;
    }
```

## 19 July | Count Smaller elements

Given an array Arr of size $N$ containing positive integers. Count number of smaller elements on right side of each array.

- [Practice](https://practice.geeksforgeeks.org/problems/count-smaller-elements2214/1)

```cpp
 int solve(Node*& root,int val,int total){
     if(root==NULL){
         root=new Node(val,0);
         return total;
     }
     if(root->val<val){
         return root->count+solve(root->right,val,total+1);
     }
     else {
         root->count++;
         return solve(root->left,val,total);
    }
}

vector<int> constructLowerArray(int *arr, int n) {
    vector<int> ans(n);
    Node* root=NULL;
    for(int i=n-1;i>=0;i--){
        ans[i]=solve(root,arr[i],0);
    }
    return ans;
}
```

## 20 July | Form a palindrome

Given a string, find the minimum number of characters to be inserted to convert it to palindrome.
**For Example:**
ab: Number of insertions required is 1. **b**ab or aba
aa: Number of insertions required is 0. aa
abcd: Number of insertions required is 3. **dcb**abcd

- [Practice](https://practice.geeksforgeeks.org/problems/form-a-palindrome1455/1)

```cpp
    int countMin(string s){
       string a = s;
       reverse(a.begin(),a.end());
       int n = s.size();

       vector<vector<int>> dp(n+1, vector<int> (n+1,0));

       for(int i = 1; i <= n; i++) {
           for(int j = 1; j <= n; j++) {
               if(s[i-1] == a[j-1])
                   dp[i][j] = dp[i-1][j-1] + 1;
               else
                   dp[i][j] = max(dp[i][j-1],dp[i-1][j]);
           }
       }

       return n - dp[n][n];
    }
```

## 21 July | Get min at pop

You are given an array $A$ of size $N$. You need to first push the elements of the array into a stack and then print minimum in the stack at each pop.

- [Practice](https://practice.geeksforgeeks.org/problems/get-min-at-pop/1)

```cpp
stack<int> _push(int arr[],int n)
{
   int mn=arr[0];
   stack<int>s;
   s.push(arr[0]);
   for(int i=1;i<n;i++)
   {
       if(arr[i]<mn)
            mn=arr[i];
        s.push(mn);
   }
   return s;
}

void _getMinAtPop(stack<int>s)
{
    while(!s.empty())
    {
        cout<< s.top() <<" ";
        s.pop();
    }
}
```

## 22 July | Number of provinces

Given an **undirected** graph with V vertices. We say two vertices u and v belong to a single province if there is a path from u to v or v to u. Your task is to find the number of provinces.

**Note:** A province is a group of **directly** or **indirectly** connected cities and no other cities outside of the group.

- [Practice](https://practice.geeksforgeeks.org/problems/number-of-provinces/1)

```cpp
    void dfs(map<int, vector<int>>&mp, vector<int>&vis, int i) {
        vis[i] = 1;
        for(auto it:mp[i]) {
            if(vis[it] == 0)
                dfs(mp, vis, it);
        }
    }

    int numProvinces(vector<vector<int>> adj, int V) {

        int row = adj.size();
        int cdol = adj[0].size();
        map<int, vector<int>>mp;

        for(int i=0; i<V; i++) {
            for(int j=0; j<V; j++) {
                if(i == j) continue;
                if(adj[i][j]==1)mp[i+1].push_back(j+1);
            }
        }

        vector<int>vis(V+1, 0);
        int count = 0;
        for(int i=1; i<= V; i++) {
            if(!vis[i]) {
                count++;
                dfs(mp, vis, i);
            }
        }

        return count;
    }
```

## 23 July | Number of provinces

You are playing a game. At each level of the game, you have to choose one of the roads to go to the next level. Initially, you have h amount of health and m amount of money.
If you take the first road then your health increases by 3 and money increase by 2. If you take the second road then your health decreases by 5 and money decrease by 10. If you take the third road then health decreases by 20 and money increase by 5.
You have to tell what is the maximum level you can reach up to under the constraints that in no two consecutive levels you can select the same road twice and once your health or money becomes <= 0 game ends(that level is not counted).

- [Practice](https://practice.geeksforgeeks.org/problems/levels-of-game/1)

```cpp
        int maxLevel(int h,int m)
        {
            int ans = 0;
            bool r1 = true;
            while(h>0 and m>0) {
               if (r1) {
                   h+=3;
                   m+=2;
                   r1=false;
                   ans++;
               } else {
                   r1 = true;
                   if (h>5) {
                       if (m>10) {
                           h-=5;
                           m-=10;
                           ans++;
                       } else if (h>20) {
                           h-=20;
                           m+=5;
                           ans++;
                       } else break;
                   } else break;
               }
           }
           return ans;
       }
```

## 24 July | Distance from the Source (Bellman-Ford Algorithm)

Given a Binary Tree, find the maximum sum path from a leaf to root.

- [Practice](https://practice.geeksforgeeks.org/problems/maximum-sum-leaf-to-root-path/1)

```cpp
    int maxPathSum(Node* root)
    {
        if(!root) return 0;

        int left = maxPathSum(root->left);
        int right = maxPathSum(root->right);

        return max(root->data+left, root->data+right);
    }
```

## 25 July | Distance from the Source (Bellman-Ford Algorithm)

Given a weighted, directed and connected graph of V vertices and E edges, Find the shortest distance of all the vertex's from the source vertex S.
Note: The Graph doesn't contain any negative weight cycle.

- [Practice](https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1)

```cpp
    vector <int> bellman_ford(int V, vector<vector<int>> adj, int S) {
        vector<int>dis(V, 1e8);
        dis[S]=0;
        for(int j=0; j<V; j++){
            for(auto i:adj)
                dis[i[1]]=min(dis[i[1]], dis[i[0]]+i[2]);
        }
        return dis;
    }
```

## 26 July | Length of longest palindrome in linked list

Given a linked list, the task is to complete the function $maxPalindrome()$ which returns an integer denoting the length of the longest palindrome list that exist in the given linked list

- [Practice](https://practice.geeksforgeeks.org/problems/length-of-longest-palindrome-in-linked-list/1)

```cpp
int count (Node *first, Node *second)
{
    Node *a = first;
    Node *b = second;

    int cnt = 0;

    while(a && b ){
        if(a->data == b->data){
            a = a->next;
            b = b->next;
            cnt++;
        }
        else break;
    }return cnt;
}

int maxPalindrome(Node *head)
{
    Node *curr = head;
    Node *prev = NULL;

    int ans = 0;

    while(curr){
        Node *next = curr->next;
        curr->next = prev;

        ans = max(ans, 2*count(prev, next)+1);
        ans = max(ans, 2*count(curr, next));

        prev = curr;
        curr = next;
    }return ans;
}
```

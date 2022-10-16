---
title: "August | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, August 2022
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
    august,
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

## 01 | Egg Dropping Puzzle

You are given N identical eggs and you have access to a K-floored building from $1$ to $K$.

There exists a floor f where $0 <= f <= K$ such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break. There are few rules given below.

- An egg that survives a fall can be used again.
- A broken egg must be discarded.
- The effect of a fall is the same for all eggs.
- If the egg doesn't break at a certain floor, it will not break at any floor below.
- If the eggs breaks at a certain floor, it will break at any floor above.

Return the minimum number of moves that you need to determine with certainty what the value of f is.

- [Practice](https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1)

### DP

```cpp
    int eggDrop(int n, int k)
    {
        vector<vector<int>> dp(n+1, vector<int>(k+1, 0));

        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= k; j++) {

                if(i == 1)
                    dp[i][j] = j;
                else if(j == 1)
                    dp[i][j] = 1;
                else {
                int ans = INT_MAX;
                for(int pi = 0, ci = j-1; ci >= 0; ci--,pi++)
                    ans = min(ans,max(dp[i][ci],dp[i-1][pi]));
                dp[i][j] = ans+1;
                }
            }
        }

        return dp[n][k];
    }
```

## 02 | Delete nodes greater than k

Given a BST and a value k, the task is to delete the nodes having values greater than or equal to k.

- [Practice](https://practice.geeksforgeeks.org/problems/delete-nodes-greater-than-k/1)

### DFS

```cpp
    Node* deleteNode(Node* root, int k)
    {
        if(!root) return root;

        if(root->data >= k)
            return deleteNode(root->left, k);

        root->left = deleteNode(root->left, k);
        root->right = deleteNode(root->right, k);

        return root;
    }
```

## 03 | Preorder to BST

Given an array arr[] of N nodes representing preorder traversal of some BST. You have to build the exact BST from it's given preorder traversal.
In Pre-Order traversal, the root node is visited before the left child and right child nodes.

- [Practice](https://practice.geeksforgeeks.org/problems/preorder-to-postorder4423/1)

```cpp
   Node* post_order(int pre[], int size)
   {
       int preorderIdx = 0;
       Node* root = constructBST(pre, &preorderIdx, pre[0], INT_MIN, INT_MAX, size);
       return root;
   }

   Node* constructBST(int pre[], int *preorderIdx, int key, int min, int max, int size)
   {
       if(*preorderIdx >= size)
       {
           return NULL;
       }
       Node* root = NULL;
       if(key>min && key<max)
       {
           root = newNode(key);
           *preorderIdx +=1;
           if(*preorderIdx<size)
           {
               root->left = constructBST(pre, preorderIdx, pre[*preorderIdx], min, key, size);
           }

           if(*preorderIdx<size)
           {
               root->right = constructBST(pre, preorderIdx, pre[*preorderIdx], key, max, size);
           }
       }

       return root;
   }
```

## 04 | Complete Binary Tree

Given a Binary Tree, write a function to check whether the given Binary Tree is Complete Binary Tree or not. A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes should be as much close to left as possible.

- [Practice](https://practice.geeksforgeeks.org/problems/complete-binary-tree/1)

```cpp
    bool isCompleteBT(Node* root){

        queue<Node*> q;
        bool missing=false;
        q.push(root);

        while(!q.empty()){
            Node *temp=q.front();
            q.pop();
            if(!temp->left)
                missing=true;
            else
                if(missing) return false;
                else  q.push(temp->left);
            if(!temp->right)
                missing=true;
            else
                if(missing) return false;
                else q.push(temp->right);
        }
        return true;
    }
```

## 05 | X Total Shapes

Given a grid of n\*m consisting of O's and X's. The task is to find the number of 'X' total shapes.

**Note:** `X` shape consists of one or more adjacent X's (diagonals not included).

- [Practice](https://practice.geeksforgeeks.org/problems/x-total-shapes3617/1)

```cpp
    void dfs(vector<vector<char>>& g, int i,int j){

    if(i<0 || i>= g.size() || j<0 || j>=g[0].size() || g[i][j]=='O')
        return;

    g[i][j] = 'O';
    dfs(g,i,j-1);
    dfs(g,i,j+1);
    dfs(g,i-1,j);
    dfs(g,i+1,j);

   }

   int xShape(vector<vector<char>>& grid)
   {
       // Code here
       int count = 0;
       for(int i=0; i<grid.size(); i++){
           for(int j=0; j<grid[0].size(); j++){
               if(grid[i][j] == 'X'){
                   count++;
                   dfs(grid,i,j);
               }
           }
       }
       return count;
   }
```

## 06 | QuickSort on Doubly Linked List

Sort the given doubly linked list of size N using quicksort. Just complete the partition function using the quicksort technique.

- [Practice](https://practice.geeksforgeeks.org/problems/quicksort-on-doubly-linked-list/1)

```cpp
    Node* partition(Node *l, Node *h){
        Node* i = l;
        while(l != h){
            if(l->data <= h->data){
                swap(i->data,l->data);
                i = i->next;
            }
            l = l->next;
        }
        swap(i->data, h->data);
        return i;
    }
```

## 07 | Exceptionally odd

Given an array of N positive integers where all numbers occur even number of times except one number which occurs odd number of times. Find the exceptional number.

- [Practice](https://practice.geeksforgeeks.org/problems/find-the-odd-occurence4820/1)

```cpp
    int getOddOccurrence(int arr[], int n) {
        int ans = arr[0];

        for(int i=1; i<n; i++)
            ans ^= arr[i];

        return ans;

    }
```

## 08 | Josephus problem

Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle in a fixed direction.

The task is to choose the safe place in the circle so that when you perform these operations starting from 1st place in the circle, you are the last one remaining and survive.

- [Practice](https://practice.geeksforgeeks.org/problems/josephus-problem/1)

```cpp
    int josephus(int n, int k)
    {
    if (n == 1)
        return n;
    return (josephus(n - 1, k) + k - 1) % n + 1;
    }
```

## 09 | Nine Divisors

Find the count of numbers less than equal to N having exactly 9 divisors.

- [Practice](https://practice.geeksforgeeks.org/problems/nine-divisors3751/1)

```cpp
    long long int nineDivisors(long long int N){
        int sN = sqrt(N);
        vector<bool> prime(sN+1,true);
        for(int i=2;i<=sqrt(sN)+1;i++){
            if(prime[i])
            for(int j=i*i;j<=sN;j+=i){
                 prime[j]=0;
            }
        }
        vector<int> primes;
        for(int i=2;i<=sN;i++){
            if(prime[i])    primes.push_back(i);
        }

        int primesSize = primes.size();
        int ans=0;
        for(int i=0;i<primesSize;i++){
            long long notExceed  = sqrt(N)/primes[i];
            ans += (upper_bound(primes.begin(),primes.begin()+i,notExceed) - primes.begin());
        }
        for(int i=0;i<primesSize;i++){
            long long sq = primes[i]*primes[i];
            if(sq*sq*sq*sq <= N) ans++;
            else break;
        }
        return ans;
    }
```

## 10 | M-Coloring Problem

Given an undirected graph and an integer M. The task is to determine if the graph can be colored with at most M colors such that no two adjacent vertices of the graph are colored with the same color. Here coloring of a graph means the assignment of colors to all vertices. Print 1 if it is possible to colour vertices and 0 otherwise.

- [Practice](https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1)

```cpp
    bool isValid(bool g[101][101], int n,vector<int> &color,int in,int c)
    {
        int i;

        for(i=0;i<n;i++)
        {
            if(i!=in && g[in][i]==1 && color[i]==c)
            return 0;
        }

        return 1;
    }

    bool dfs(bool g[101][101], int m, int n,vector<int> &color,int in)
    {
        if(in==n || color[in]!=-1)
        return 1;

        int i,j;

        for(i=0;i<m;i++)
        {
            color[in]=i;

            if(isValid(g,n,color,in,i) && dfs(g,m,n,color,in+1))
            return 1;

            color[in]=-1;
        }

        return 0;
    }
```

## 11 | Pots of Gold Game

Two players X and Y are playing a game in which there are pots of gold arranged in a line, each containing some gold coins. They get alternating turns in which the player can pick a pot from one of the ends of the line. The winner is the player who has a higher number of coins at the end. The objective is to maximize the number of coins collected by X, assuming Y also plays optimally.

Return the maximum coins X could get while playing the game. Initially, X starts the game.

- [Practice](https://practice.geeksforgeeks.org/problems/pots-of-gold-game/1)

```cpp
int solve(int i,int j,vector<int>a,int dp[505][505])
   {
       if(i==j) return a[i];
       if(i>j) return 0;
       if(dp[i][j]!=-1) return dp[i][j];
       return dp[i][j]=max(a[i]+min(solve(i+2,j,a,dp),solve(i+1,j-1,a,dp)),a[j]+min(solve(i+1,j-1,a,dp),solve(i,j-2,a,dp)));
   }
   int maxCoins(vector<int>&A,int n)
   {
    //Write your code here
    int dp[505][505];
    memset(dp,-1,sizeof(dp));
    return solve(0,n-1,A,dp);
   }
```

## 12 | Case-specific Sorting of Strings

Given a string S consisting of only uppercase and lowercase characters. The task is to sort uppercase and lowercase letters separately such that if the ith place in the original string had an Uppercase character then it should not have a lowercase character after being sorted and vice versa.

- [Practice](https://practice.geeksforgeeks.org/problems/case-specific-sorting-of-strings4845/1)

```cpp
    string caseSort(string str, int n)
    {
        string s1="";
        string s2="";
        string sn = str;
        sort(str.begin(),str.end());
        int i=0;
        while(i<n)
            if(str[i]<=90) s1 += str[i++];
            else s2 += str[i++];

        i=0;
        int j=0,k=0;
        while(i<n)
            if(sn[i]>=97)
                sn[i++] = s2[j++];
            else
                sn[i++] = s1[k++];


        return sn;
    }
```

## 13 | Max length chain

You are given N pairs of numbers. In every pair, the first number is always smaller than the second number. A pair (c, d) can follow another pair (a, b) if b < c. Chain of pairs can be formed in this fashion. You have to find the longest chain which can be formed from the given set of pairs.

- [Practice](https://practice.geeksforgeeks.org/problems/max-length-chain/1)

```cpp
    int maxChainLen(struct val p[],int n){

    vector<pair<int,int> > v;

    for(int i=0;i<n;i++)
        v.push_back({p[i].first,p[i].second});

    sort(v.begin(),v.end());
    int num = v.size();
    int c= 1;
    int prev = v[0].second;
        for(int i=1;i<num;i++)
        {
            if(prev<v[i].first)
            {
                prev = max(v[i].second,prev);
                c++;
            }
            else
            {
                prev = min(v[i].second,prev);
            }
        }
        return c;
    }
```

## 21 | Game with nos

You are given an array arr[], you have to re-construct an array arr[]. The values in arr[] are obtained by doing Xor of consecutive elements in the array.

- [Practice](https://practice.geeksforgeeks.org/problems/game-with-nos3123/1)

```cpp
int* game_with_number(int arr[], int n)
{
    int i = 0;

    while(i<n-1)
        arr[i] = arr[i++]^arr[i];

    return arr;
}
```

## 27 | Rearrange Negative and Positive

Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.

**Note:** Array should start with positive number.

- [Practice](https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1)

### Stack

```cpp
	void rearrange(int arr[], int n) {

	    int i = 0;
	    queue<int> pos, neg;

	    for(; i<n; i++)
	        if(arr[i]<0)
	            neg.push(arr[i]);
	        else
	            pos.push(arr[i]);

	    if(pos.empty() || neg.empty()) return;

       	bool fillPos = true;
	    i = 0;

	    while(!pos.empty() and !neg.empty()){
	       if(fillPos){
	           arr[i++] = pos.front();
	           pos.pop();
	       }else{
	           arr[i++] = neg.front();
	           neg.pop();
	       }
	       fillPos = !fillPos;
	    }

	    while(!pos.empty()){
	       arr[i++] = pos.front();
	           pos.pop();
	    }

	    while(!neg.empty()){
	       arr[i++] = neg.front();
	           neg.pop();
	    }
}
```

### Vector

```cpp
void rearrange(int arr[], int n) {

    vector<int> pos, neg;

    for(int i=0;i<n;i++)
        if(arr[i]<0) neg.push_back(arr[i]);
        else pos.push_back(arr[i]);

    int i=0,j=0,k=0;

    while(i<pos.size() || j<neg.size())
        if(i<pos.size())
            arr[k++]=pos[i++];

        if(j<neg.size())
            arr[k++]=neg[j++];
}
```

## 28 | Binary Tree to DLL

Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place. The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be same as Inorder of the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

- [Practice](https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1)

```cpp
    void solve(Node* root, Node* &head, Node* &pre){

    if(!root) return ;

    solve(root->left, head, pre);

    if(!pre)
        head = root;
    else{
        pre->right = root;
        root->left = pre;
    }

    pre = root;


    solve(root->right, head, pre);

    }

    Node * bToDLL(Node *root)
    {
        Node* head = NULL, pre = NULL;
        solve(root, head, pre);
        return head;
    }
```

## 29 | Next Right Node

Given a Binary tree and a key in the binary tree, find the node right to the given key. If there is no node on right side, then return a node with value -1.

- [Practice](https://practice.geeksforgeeks.org/problems/next-right-node/1)

```cpp
    Node *nextRight(Node *root, int key)
    {
        if(!root) return root;

        queue<Node*> q;

        q.push(root);

        while(!q.empty()){

            int n = q.size();

            while(n--){
            Node *curr = q.front();
            q.pop();

            if(curr->data == key){
                if(n>0)
                return q.front();
                return new Node(-1);
            }

            if(curr->left) q.push(curr->left);
            if(curr->right) q.push(curr->right);
            }
        }

        return new Node(-1);
    }
```

## 30 |

- [Practice]()

```cpp

```

## 31 |

- [Practice]()

```cpp

```

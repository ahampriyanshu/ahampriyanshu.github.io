---
title: "October | 2022 | POTD GFG"
author: ahampriyanshu
categories: [Contests, GFG]
excerpt: C++ Solutions to Problem Of The Day Geeks For Geeks, October 2022
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
    october,
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

## 01 | Number of Distinct Islands

Given a boolean 2D matrix grid of size $n /times m$. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one island is not equal to another (not rotated or reflected).

<a href="https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    void dfs(vector<vector<int>>& grid, int x0, int y0, int i, int j, vector<pair<int, int>>& v) {
        int rows = grid.size(), cols = grid[0].size();

        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] <= 0) return;

        grid[i][j] *= -1;

        v.push_back({i - x0, j - y0});

        for (auto dir : dirs)
            dfs(grid, x0, y0, i + dir[0], j + dir[1], v);

    }

    int countDistinctIslands(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();

        set<vector<pair<int, int>>> coordinates;

        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (grid[i][j] != 1) continue;
                vector<pair<int, int>> v;
                dfs(grid, i, j, i, j, v);
                coordinates.insert(v);
            }
        }

        return coordinates.size();
    }
```

## 15 | Shortest Distance in a Binary Maze

Given a n \* m matrix grid where each element can either be 0 or 1. You need to find the shortest distance between a given source cell to a destination cell. The path can only be created out of a cell if its value is 1.

If the path is not possible between source cell and destination cell, then return -1.

**Note:** You can move into an adjacent cell if that adjacent cell is filled with element 1. Two cells are adjacent if they share a side. In other words, you can move in one of the four directions, Up, Down, Left and Right.

<a href="https://practice.geeksforgeeks.org/problems/move-last-element-to-front-of-a-linked-list/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
int vis[501][501];
    bool boundCheck(int i,int j,vector<vector<int>>&grid)
    {
        if(i<0 || j<0 || i>=grid.size() || j>=grid[0].size() || !grid[i][j] || vis[i][j])
        return false;
        vis[i][j] = 1;
        return true;
    }

    int shortestPath(vector<vector<int>> &grid, pair<int, int> source, pair<int, int> dest) {
        memset(vis,0,sizeof(vis));

        queue<pair<int,int>> q;

        int dist = 0;

        q.push({source.first,source.second});
        while(!q.empty())
        {
            int itr = q.size();
            while(itr--)
            {
                int i = q.front().first;
                int j = q.front().second;

                q.pop();

                if(i==dest.first && j==dest.second)
                    return dist;

                if(boundCheck(i+1,j,grid)) q.push({i+1,j});
                if(boundCheck(i,j-1,grid)) q.push({i,j-1});
                if(boundCheck(i-1,j,grid)) q.push({i-1,j});
                if(boundCheck(i,j+1,grid)) q.push({i,j+1});
            }
            dist++;
        }
        return -1;
    }
```

## 16 | Move Last Element to Front of a Linked List

You are given the head of a Linked List. You have to move the last element to the front of the Linked List and return the list.

<a href="https://practice.geeksforgeeks.org/problems/move-last-element-to-front-of-a-linked-list/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    ListNode *moveToFront(ListNode *head){

    if(!head || !head->next) return head;

     ListNode *curr=head;

      while(curr->next->next!=NULL){
        curr= curr->next;

      ListNode *res= curr->next;
      res->next = head;
      curr->next = NULL;
      return res;
    }
```

## 17 | Replace every element with the least greater element on its right

Given an array `arr[]` of `N` integers and replace every element with the least greater element on its right side in the array. If there are no greater elements on the right side, replace it with `-1`.

<a href="https://practice.geeksforgeeks.org/problems/replace-every-element-with-the-least-greater-element-on-its-right/1"><img src="https://img.shields.io/badge/GFG-black?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" /></a>

```cpp
    vector<int> findLeastGreater(vector<int>& v, int n) {
        set<int> s;
        vector<int> ans(n);
        for(int i = n-1;i>=0;i--){
            auto it = s.upper_bound(v[i]);
            if(it==s.end()) ans[i] = -1;
            else ans[i] = *it;
            s.insert(v[i]);
        }
        return ans;
    }
```

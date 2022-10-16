---
title: STL Cheat Sheet
author: ahampriyanshu
excerpt: The ultimate guide to Standard Template Library (STL) from C++ 11 onwards
math: true
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, C++, STL, Cheat, Sheet]
---

## pair

- utility container
- Used to store two data object in a single container

```cpp
#include <iostream>
using namespace std

int main(){
  pair<int, int> p1;
  pair<int, int> p2(303, 52);
  pair<int, char> p3(1, 'a');
  pair<int, int> p4(p3);
  pair<int, int> p5 = {2, 'b'};
  pair<int, int> p6 = make_pair('A', 1);
}
```

**Input/Output**

```cpp
cout << p.first << " " << p.second;
```

## vector

- Linear data structure
- Contigous in memory
- Dynamic in size
- Random access
- Fast traversal
- Insertion and deletion at rear node

**Initialization**

```cpp
#include <vector>
using namespace std;

int main(){

  vector<int> v1;
  vector<int> v2 {1,2,3};
  vector<int> v3(v2);
  vector<int> v4 = v3;
  vector<int> v5(10);
  vector<int> v6(10, -1);

}
```

**Input/Output**

```cpp
for(int i=0; i<n; i++)
  cin >> v[i];

for(int i=0; i<n; i++)
  cout << v[i] << " ";

for(int i=0; i<n; i++){
  cin << ele;
  v.push_back(ele);
}

for(auto e: v)
  cout << e << " ";
```

**Access/Insertion/Deletion**

```cpp

// Returns size of the vector
v.size();

// Returns true if vector is empty
v.empty();

// unsafe : Segmentation Fault
v[i];

// safe : Out-Of-Bound Exception
v.at(i);

int f = v.front();
int b = v.back();

// inserts at the beginning
v.insert(v.begin(), x);


// inserts at the ending
v.push_back(ele);
v.emplace_back(ele);

// removes the last element
v.pop_back();

// removes the first element
v.erase(v.begin());

// removes the last element
v.erase(v.end())

//flushes the vector
v.clear();
```

**Sorting**

```cpp
reverse(v.begin(), v.end());

reverse(v.begin(), v.end(), greater<int>());
```

**Max/Min**

```cpp
int* maxi =  *max_element(v.begin(), v.end());
int* mini =  *min_element(v.begin(), v.end());
cout << *mini << " " << *maxi << endl;
```

**Upper/Lower Bound**

- Upper : Just greater then x
- Lower : Not less than x

```cpp
vector<int>::iterator lower, upper;
lower = lower_bound(v.begin(), v.end(), 42);
upper = upper_bound(v.begin(), v.end(), 42);
cout << (lower - v.begin() + 1) << " " << (upper - v.begin() + 1);
```

**2D vector**

```cpp
// Intialization
vector<vector<int>> v1( n , vector<int> (m));
vector<vector<int>> v2( n , vector<int> (m, -1));

for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++)
        cout << v[i][j] << " ";
    cout << "\n";
}

for(vector<int> v: v1){
    for(int i: v)
        cout << i << " ";
    cout << "\n";
}

// Sorting a single row
sort(vec[i].begin(), vec[i].end());


// Sorting the whole vector
bool comp(const vector<int>& v1, const vector<int>& v2){
    return v1[1] < v2[1];
}

sort(vec.begin(), vec.end(), comp);
```

|                         |                                                                       |
| ----------------------- | --------------------------------------------------------------------- |
| v.size()                | Returns the size current size                                         |
| v.max_size()            | Returns the size maximum possible size                                |
| v.empty()               | Returns true if vector is empty                                       |
| v[i]                    | Accessing $i_{th}$ element (unsafe: Can cause segmentation errors)    |
| v.at()                  | Accessing $i_{th}$ element (safe: throws exception when out-of-bound) |
| v.front()               | Accessing the first element                                           |
| v.back()                | Accessing the last element                                            |
| v.push_back(data)       | Inserts at the end                                                    |
| v.emplace_back(data)    | Inserts at the end but bit more efficiently                           |
| v.insert(pos_itr, data) | Inserts at specified position                                         |
| v.fill(data)            | Fill the whole vector with 'data'                                     |
| for (auto e : v)        | Looping through the vector                                            |

## array

- Linear data structure
- Contigous in memory
- Fixed in size
- Random access
- Fast traversal

```cpp
#include <array>
using namespace std;

int main(){

  array<int> a;
  array<int, 3> b{1,2,3};
  array<int> c = b;

}
```

|                  |                                                                       |
| ---------------- | --------------------------------------------------------------------- |
| a.size()         | Returns the size current size                                         |
| a.max_size()     | Returns the size maximum possible size                                |
| a.empty()        | Returns true if array is empty                                        |
| a[i]             | Accessing $i_{th}$ element (unsafe: Can cause segmentation errors)    |
| a.at()           | Accessing $i_{th}$ element (safe: throws exception when out-of-bound) |
| a.front()        | Accessing the first element                                           |
| a.back()         | Accessing the last element                                            |
| a.fill(data)     | Fill the whole array with 'data'                                      |
| for (auto e : a) | Looping through the array                                             |

## list

- Doubly Linked List

## string

-

## queue

- Linear data structure.

## deque

## Map

- Implemented via balanced binary tree.

## unordered_map

- Implemented via hash table

## set

- Implemented via balanced binary tree.

## unordered_set

- Implemented via hash table

## Algorithms

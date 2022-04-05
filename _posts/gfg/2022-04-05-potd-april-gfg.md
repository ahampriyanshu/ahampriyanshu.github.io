---
title: "Problem Of The Day | March 2022 | Geeks For Geeks"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, GFG]
tags: [geeks, for, gfg, potd, day, challenge, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to Problem Of The Day, GFG, March 2022.

## 5 April

### Triangle and Square 

Geek has a ticket to the Geek Summer Carnival. The ticket has a positive integer B written on it. B denotes the base of a right-angled isosceles triangle. 
Geek can avail discounts on X courses in the carnival.

X is the maximum number of squares of size 2x2 units that can fit in the given right-angled isosceles triangle. 
Find X.

* [Practice](https://practice.geeksforgeeks.org/problems/3f48d387900a38bd9fd0594b93f9f4f97f5ada8a1644/1##)

```cpp
int countSquare(int B){
    if(B<2) return 0;
    int n = (B  - 2)/2;
	return (n*n + n)/2;
}
```
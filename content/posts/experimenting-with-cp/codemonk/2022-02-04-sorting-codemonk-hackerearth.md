---
title: "Sorting | Codemonk | Hackerearth"
author: ahampriyanshu
categories: [Sheets, CodeMonk]
tags: [sorting, codemonk, sheets, hackerearth]
---

Sorting is a process of arranging items in ascending or descending order. This process can be implemented via many different algorithms. You will be learning about various types sorting algorithms.

### Monk and Nice Strings

Monk's best friend Micro's birthday is coming up. Micro likes Nice Strings very much, so Monk decided to gift him one. Monk is having N nice strings, so he'll choose one from those. But before he selects one, he need to know the Niceness value of all of those. Strings are arranged in an array A, and the Niceness value of string at position i is defined as the number of strings having position less than i which are lexicographicaly smaller than A[i]. Since nowadays, Monk is very busy with the Code Monk Series, he asked for your help.

> Note: Array's index starts from 1.

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    vector<string> vec;
	string str;
	int n, index = 1;
    cin >> n;
	for(int i=0; i<n; i++){
		cin >> str;
		vec.push_back(str);
	}

	for(int i=0; i<vec.size(); i++){
		int ans = 0;
		for(int j=0; j<i;j++)
		if(vec[i] > vec[j]) ans++;
		cout << ans << endl;
	}
}
```

### Monk and Suffix Sort

Monk loves to play games. On his birthday, his friend gifted him a string S. Monk and his friend started playing a new game called as Suffix Game. In Suffix Game, Monk's friend will ask him lexicographically k<sup>th</sup> smallest suffix of the string S. Monk wants to eat the cake first so he asked you to play the game.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
	string str;
	vector<string> vec;
	int k;
	cin >> str >> k;
	int len(str.size());
	for(int i=0; i<len; i++)
		vec.push_back(str.substr(i));
	sort(vec.begin(), vec.end());
	cout << vec[k-1];
}
```

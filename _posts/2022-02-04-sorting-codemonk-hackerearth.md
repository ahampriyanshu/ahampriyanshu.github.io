---
title: "Sorting | Codemonk | Hackerearth"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, CodeMonk]
tags: [sorting,  codemonk, sheet, hackerearth]
---

Sorting is a process of arranging items in ascending or descending order. This process can be implemented via many different algorithms. You will be learning about various types sorting algorithms.

## Monk and Nice Strings

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
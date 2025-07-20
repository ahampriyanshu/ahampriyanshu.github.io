---
title: "Codemonk | HackerEarth"
author: ahampriyanshu
categories: [Solutions, CodeMonk]
tags: [sorting, array, codemonk, solutions, hackerearth]
---

## Array

An array is a sequential collection of variables of same data type. It stores data elements in a continuous memory location. A string is a sequence of characters.

### Monk and Rotation

Monk loves to preform different operations on arrays, and so being the principal of Hackerearth School, he assigned a task to his new student Mishki. Mishki will be provided with an integer array A of size N and an integer K , where she needs to rotate the array in the right direction by K steps and then print the resultant array. As she is new to the school, please help her to complete the task.

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

void solve()
{
    int n, k, temp;
    cin >> n >> k;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int x = n - (k % n);
    for (int i = x; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    for (int i = 0; i < x; i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    cin >> test;
    while (test--)
    {
        solve();
        cout << endl;
    }
}
```

### Monk and Inversions

Monk's best friend Micro, who happen to be an awesome programmer, got him an integer matrix M of size NxN for his birthday. Monk is taking coding classes from Micro. They have just completed array inversions and Monk was successful in writing a program to count the number of inversions in an array. Now, Micro has asked Monk to find out the number of inversion in the matrix M.

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int solve()
{
    int n, i, j, ii, jj, ans = 0;
    cin >> n;
    int arr[n][n];
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            cin >> arr[i][j];
        }
    }

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            for (ii = i; ii < n; ii++)
            {
                for (jj = j; jj < n; jj++)
                {
                    if (arr[ii][jj] < arr[i][j])
                        ans++;
                }
            }
        }
    }

    return ans;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    cin >> test;
    while (test--)
    {
        cout << solve() << endl;
    }
}
```

### Minimum AND xor OR

Given an array A of N integers. Find out the minimum value of the following expression for all valid i,j.
(Ai and Aj) xor (Ai or Aj), where i != j.

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int solve()
{
    int n, i, ans = INT_MAX;
    cin >> n;
    int arr[n];
    for (i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    sort(arr, arr + n);

    for (i = 0; i < n - 1; i++)
    {

        ans = min(ans, arr[i] ^ arr[i + 1]);
    }

    return ans;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    cin >> test;
    while (test--)
    {
        cout << solve() << endl;
    }
}
```

## Sorting

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
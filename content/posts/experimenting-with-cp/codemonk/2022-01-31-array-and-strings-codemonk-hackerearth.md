---
title: "Arrays & Strings | Codemonk | Hackerearth"
author: ahampriyanshu
categories: [Sheets, CodeMonk]
tags: [arrays, strings, codemonk, sheets, hackerearth]
---

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

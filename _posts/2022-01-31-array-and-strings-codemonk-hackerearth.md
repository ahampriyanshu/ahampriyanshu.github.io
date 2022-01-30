---
title: "Arrays & Strings | Codemonk | Hackerearth"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Hackerearth]
tags: [arrays, strings, codemonk, sheet, hackerearth]
---

## Monk and Rotation

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

## Monk and Inversions

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

## Minimum AND xor OR

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
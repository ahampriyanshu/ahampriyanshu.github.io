---
title: "C++ | Ladder 4 | a2oj"
author: ahampriyanshu
categories: [Sheets, A2oj]
excerpt: Solutions to some random Codeforces problems [A Div 2]
tags: [codeforces, a2oj, ladder, id5, div, A]
---

### Problem 1-10

#### 1 Young Physicist

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, x, y, z, xSum, ySum, zSum;
    xSum = ySum = zSum = 0;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> x >> y >> z;
        xSum += x;
        ySum += y;
        zSum += z;
    }

    if (xSum == 0 && ySum == 0 && zSum == 0)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }

    return 0;
}
```

#### 2 Beautiful Matrix

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int ele, x, y;

    for (int i = 1; i < 26; i++)
    {
        cin >> ele;
        if (ele == 1)
        {
            x = (i + 4) / 5;
            y = i % 5 ? i % 5 : 5;
        }
    }

    cout << abs(x - 3) + abs(y - 3) << endl;

    return 0;
}
```

#### 4 Borze

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string str;
    cin >> str;
    int i = 0, len = str.size();
    while (i < len)
    {
        if (str[i] == '-')
        {
            if (str[i + 1] == '-')
            {
                cout << 2;
                i += 2;
            }
            else
            {
                cout << 1;
                i += 2;
            }
        }
        else
        {
            cout << 0;
            i++;
        }
    }
    cout << endl;
    return 0;
}
```

#### 5 Beautiful Year

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int num, a, b, c, d;
    cin >> num;
    bool isNotBeautiful = true;

    while (isNotBeautiful)
    {
        num++;
        a = num % 10;
        b = num / 10 % 10;
        c = num / 100 % 10;
        d = num / 1000 % 10;
        if (a != b && a != c && a != d && b != c && b != d && c != d)
        {
            isNotBeautiful = false;
        }
    }
    cout << d << c << b << a << endl;
    return 0;
}
```

#### 6 Lights Out

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int ele;
    {% raw %}
    int arr[5][5] = {{0, 0, 0, 0, 0}, {0, 1, 1, 1, 0}, {0, 1, 1, 1, 0}, {0, 1, 1, 1, 0}, {0, 0, 0, 0, 0}};
    {% endraw %}
    for (int i = 1; i < 4; i++)
    {
        for (int j = 1; j < 4; j++)
        {
            cin >> ele;
            if (ele % 2 != 0)
            {
                arr[i][j] = !arr[i][j];
                arr[i - 1][j] = !arr[i - 1][j];
                arr[i + 1][j] = !arr[i + 1][j];
                arr[i][j + 1] = !arr[i][j + 1];
                arr[i][j - 1] = !arr[i][j - 1];
            }
        }
    }
    for (int i = 1; i < 4; i++)
    {
        for (int j = 1; j < 4; j++)
        {
            cout << arr[i][j];
        }
        cout << endl;
    }

    return 0;
}
```

#### 7 Word

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string str;
    cin >> str;
    int isEqual = 0;
    for (auto &ch : str)
    {
        if (isupper(ch))
            isEqual++;
        else
            isEqual--;
    }

    if (isEqual > 0)
    {
        transform(str.begin(), str.end(), str.begin(), ::toupper);
    }
    else
    {
        transform(str.begin(), str.end(), str.begin(), ::tolower);
    }

    cout << str << endl;
    return 0;
}
```

#### 8 Word Capitalization

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string str;
    cin >> str;
    str[0] = towupper(str[0]);
    cout << str << endl;
    return 0;
}
```

#### 9 Nearly Lucky Number

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string str;
    int luckyCnt = 0;
    cin >> str;

    for (auto &ch : str)
    {
        if (ch == '4' || ch == '7')
            luckyCnt++;
    }
    if (luckyCnt == 7 || luckyCnt == 4)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }
    return 0;
}
```

#### 10 Stones on the Table

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string str;
    int n, ans = 0;
    cin >> n >> str;
    char prev = str[0];
    for (int i = 1; i < n; i++)
    {
        if (str[i] == prev)
            ans++;
        else
            prev = str[i];
    }
    cout << ans << endl;
    return 0;
}
```

#### 11 Panoramix’s Prediction

```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPrime(int n)
{
    for (int num = 2; num <= n / 2; num++)
    {
        if (n % num == 0)
            return false;
    }
    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, m, i;
    cin >> n >> m;
    for (i = n + 1; i <= m; i++)
    {
        if (isPrime(i))
        {
            break;
        }
    }
    if (i == m)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }
    return 0;
}
```

#### 12 Ultra-Fast Mathematician

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string n1, n2;
    cin >> n1 >> n2;
    for (int i = 0; i < n2.size(); i++)
    {
        printf("%d", n1[i] - '0' ^ n2[i] - '0');
    }
    return 0;
}
```

#### 13 Perfect Permutation

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin >> n;
    if (n % 2 == 1)
    {
        cout << -1 << endl;
    }
    else
    {
        for (int i = 1; i <= n; i += 2)
            cout << i + 1 << " " << i << " ";
    }
}
```

#### 14 Arrival of the General

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, ele, mn = INT_MAX, mx = INT_MIN, mn_index = 0, mx_index = 0;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> ele;
        if (ele <= mn)
        {
            mn = ele;
            mn_index = i;
        }
        if (ele > mx)
        {
            mx = ele;
            mx_index = i;
        }
    }
    int factor = mn_index > mx_index ? 0 : 1;
    cout << n - mn_index - 1 + mx_index - factor << endl;
}
```

#### 15 Drinks

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, drink;
    double ans;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> drink;
        ans += drink;
    }
    cout << setprecision(12) << (ans) / n << endl;
}
```

#### 16 Insomnia cure

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int k, l, m, n, d, ans = 0;
    cin >> k >> l >> m >> n >> d;
    for (int i = 1; i <= d; i++)
    {
        if (i % k == 0 || i % l == 0 || i % m == 0 || i % n == 0)
            ans++;
    }
    cout << ans << endl;
}
```

#### 20 Helpful Maths

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string str;
    vector<int> num;
    cin >> str;
    int n = str.size();
    for(int i=0; i<n; i=i+2)
    num.push_back(str[i] - '0');
    n = num.size();
    sort(num.begin(), num.end());
    for(int i=0; i<n-1; i++)
    cout << num[i] <<"+";
    cout << num[n-1];
    return 0;
}
```

#### 30 Effective Approach

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

int main()
{
   ios_base::sync_with_stdio(false);
   cin.tie(NULL);
   cout.tie(NULL);
   string str;
   ll n, ans = 0;
   cin >> n;
   for (int stat = 0; stat < n; stat++)
    {
        cin >> str;
        if(str[0] == '+' || str[2] == '+')
        ans++;
        else
        ans--;
    }
    cout << ans << endl;
}
```

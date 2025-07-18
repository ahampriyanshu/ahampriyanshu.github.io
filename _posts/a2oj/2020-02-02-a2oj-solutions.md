---
title: "C++ | Ladder 4 | a2oj"
author: ahampriyanshu
categories: [Solutions, A2oj]
excerpt: Solutions to some random Codeforces problems [A Div 2]
tags: [solutions, a2oj, ladder, id5, div, A]
---

## Div 2 A Ladder 4

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

## Div 2 A Ladder 5


### Problem 1-10

#### 1 Queue at the School

During the break the schoolchildren, boys and girls, formed a queue of n people in the canteen. Initially the children stood in the order they entered the canteen. However, after a while the boys started feeling awkward for standing in front of the girls in the queue and they started letting the girls move forward each second.

Let's describe the process more precisely. Let's say that the positions in the queue are sequentially numbered by integers from 1 to n, at that the person in the position number 1 is served first. Then, if at time x a boy stands on the i-th position and a girl stands on the (i + 1)-th position, then at time x + 1 the i-th position will have a girl and the (i + 1)-th position will have a boy. The time is given in seconds.

You've got the initial position of the children, at the initial moment of time. Determine the way the queue is going to look after t seconds.

- [266B](http://codeforces.com/problemset/problem/266/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, t;
    string str;
    cin >> n >> t >> str;
    while(t--){
        int i = 0;
        while (i<n-1)
        {
            if( str[i] == 'B' and str[i+1] == 'G')
            {
                str[i] = 'G';
                str[++i] = 'B';
            }
            i++;
        }

    }
    cout << str << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

#### 2 Xenia and Ringroad

Xenia lives in a city that has n houses built along the main ringroad. The ringroad houses are numbered 1 through n in the clockwise order. The ringroad traffic is one way and also is clockwise.

Xenia has recently moved into the ringroad house number 1. As a result, she's got m things to do. In order to complete the i-th task, she needs to be in the house number ai and complete all tasks with numbers less than i. Initially, Xenia is in the house number 1, find the minimum time she needs to complete all her tasks if moving from a house to a neighboring one along the ringroad takes one unit of time.

Please, do not use the %lld specifier to read or write 64-bit integers in С++. It is preferred to use the cin, cout streams or the %I64d specifier.

- [339B](http://codeforces.com/problemset/problem/339/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, m, prev, curr, ans = 0;
    cin >> n >> m;
    for (int i = 0; i < m; i++)
    {
        cin >> curr;
        if (i)
        {
            if (curr < prev) ans += n - prev + curr;
            else if (curr > prev) ans += curr - prev;
        }
        else ans += curr - 1;
        prev = curr;
    }
    cout << ans << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

#### 3 Fedor and New Game

After you had helped George and Alex to move in the dorm, they went to help their friend Fedor play a new computer game «Call of Soldiers 3».

The game has (m + 1) players and n types of soldiers in total. Players «Call of Soldiers 3» are numbered form 1 to (m + 1). Types of soldiers are numbered from 0 to n - 1. Each player has an army. Army of the i-th player can be described by non-negative integer xi. Consider binary representation of xi: if the j-th bit of number xi equal to one, then the army of the i-th player has soldiers of the j-th type.

Fedor is the (m + 1)-th player of the game. He assume that two players can become friends if their armies differ in at most k types of soldiers (in other words, binary representations of the corresponding numbers differ in at most k bits). Help Fedor and count how many players can become his friends.

- [467B](https://codeforces.com/problemset/problem/467/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, m, k, ans=0;
    cin >> n >> m >> k;
    vector<ll> vec(m+1);

    for (ll i = 0; i <= m; i++)
        cin >> vec[i];

    for (ll i = 0; i < m; i++)
    {
        ll t = 0;
        for (ll j = 0; j < n; j++)
            if (((vec[i] >> j) & 1) != ((vec[m] >> j) & 1))
                t++;
        if(t <= k)
            ans++;
    }

    cout << ans << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

#### 4 Random Teams

n participants of the competition were split into m teams in some manner so that each team has at least one participant. After the competition each pair of participants from the same team became friends.

Your task is to write a program that will find the minimum and the maximum number of pairs of friends that could have formed by the end of the competition.

- [478B](https://codeforces.com/problemset/problem/467/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll m,n;
    cin >> n >> m;
    ll q(n/m), r(n%m);
    ll mini = (q*(q+1)*r)/2 + (q*(q-1)*(m-r))/2;
    ll maxi = ((n-m) * (n-m+1))/2;
    cout << mini <<" "<< maxi << endl;
}
```

#### 5 Vanya and Lanterns

Vanya walks late at night along a straight street of length l, lit by n lanterns. Consider the coordinate system with the beginning of the street corresponding to the point 0, and its end corresponding to the point l. Then the i-th lantern is at the point ai. The lantern lights all points of the street that are at the distance of at most d from it, where d is some positive number, common for all lanterns.

Vanya wonders: what is the minimum light radius d should the lanterns have to light the whole street?

- [492B](https://codeforces.com/problemset/problem/492/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;


int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    double l,n,ele;
    vector<double> vec;
    cin >> n >> l;
    for(ll i=0; i<n; i++){
        cin >> ele;
        vec.push_back(ele);
    }
    double f,e,ans,diff=0;
    f = e = ans = INT_MIN;
    sort(vec.begin(), vec.end());

    if(vec[0] != 0)
    f = vec[0];

    if(vec[n-1] != l)
    e = l - vec[n-1];

    for(ll i=0; i<n-1; i++)
        diff = max(diff, vec[i+1] - vec[i]);

    ans = max({ans, diff/2, e, f});
    cout.precision(10);
    cout << fixed << ans << endl;
}
```

#### 6 Sort the Array

Being a programmer, you like arrays a lot. For your birthday, your friends have given you an array a consisting of n **distinct** integers.

Unfortunately, the size of a is too small. You want a bigger array! Your friends agree to give you a bigger array, but only if you are able to answer the following question correctly: is it possible to sort the array a (in increasing order) by reversing **exactly one** segment of a? See definitions of segment and reversing in the notes.

- [451B](https://codeforces.com/contest/451/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n;
    cin >> n;
    ll arr[n];
    for (ll i = 0; i < n; i++)
        cin >> arr[i];

    bool sorted = true;
    ll l = 0, r = 0;

    for (ll i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
        {
            l = i;
            break;
        }

    for (ll i = n - 1; i >= 1; i--)
        if (arr[i] < arr[i - 1])
        {
            r = i;
            break;
        }

    reverse(arr + l, arr + r + 1);

    for (ll i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
        {
            sorted = false;
            break;
        }

    if (sorted)
        cout << "yes\n" << l + 1 << " " << r + 1 << "\n";
    else
        cout << "no\n";

}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

#### 7 Lecture

You have a new professor of graph theory and he speaks very quickly. You come up with the following plan to keep up with his lecture and make notes.

You know two languages, and the professor is giving the lecture in the first one. The words in both languages consist of lowercase English characters, each language consists of several words. For each language, all words are distinct, i.e. they are spelled differently. Moreover, the words of these languages have a one-to-one correspondence, that is, for each word in each language, there exists exactly one word in the other language having has the same meaning.

You can write down every word the professor says in either the first language or the second language. Of course, during the lecture you write down each word in the language in which the word is shorter. In case of equal lengths of the corresponding words you prefer the word of the first language.

You are given the text of the lecture the professor is going to read. Find out how the lecture will be recorded in your notes.

- [499B](https://codeforces.com/contest/499/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll n, m;
    unordered_map<string, string> ump;
    string w1, w2, word;
    cin >> n >> m;
    ll arr[n];
    for (ll i = 0; i < m; i++)
    {
        cin >> w1 >> w2;
        word = w2.size() < w1.size() ? w2 : w1;
        ump[w1] = ump[w2] = word;
    }

    for (ll i = 0; i < n; i++)
    {
        cin >> word;
        cout << ump[word] << " ";
    }
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    solve();
}
```

#### 8 Tprimes

We know that prime numbers are positive integers that have exactly two distinct positive divisors. Similarly, we'll call a positive integer t Т-prime, if t has exactly three distinct positive divisors.

You are given an array of n positive integers. For each of them determine whether it is Т-prime or not.

- [230B](https://codeforces.com/contest/230/problem/B)

```cpp
#include <cstdio>
#include <cstring>
#include <set>
#include <iostream>
using namespace std;

set <long long> tprimes;

bool isPrime(int n) {
    for (int i = 2; i * i <= n; ++ i)
        if (n % i == 0)
            return false;
    return true;
}

int main() {
    tprimes.insert(4);
    for (int i = 3; i <= 1000000; i += 2) {
        if (isPrime(i))
            tprimes.insert((long long)i * i);

    }
    int n;
    scanf("%d", &n);
    while (n --) {
        long long x;
        cin >> x;
        puts(tprimes.find(x) == tprimes.end()? "NO": "YES");
    }
    return 0;
}
```

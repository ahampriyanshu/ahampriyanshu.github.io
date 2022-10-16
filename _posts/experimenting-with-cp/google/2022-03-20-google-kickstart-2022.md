---
title: "Google Kickstart 2022"
author: ahampriyanshu
categories: [Contests, Google]
excerpt: C++ Solutions to Google Kickstart, 2022.
tags:
  [
    live,
    contest,
    online,
    qualification,
    round,
    google,
    hashcode,
    A,
    B,
    C,
    D,
    round A,
    round B,
    round C,
    round D,
  ]
---

## Round A

### Problem A

#### Description

Ada gives John a positive integer N. She challenges him to construct a new number (without leading zeros), that is a multiple of 9, by inserting exactly one digit (0 … 9) anywhere in the given number N. It is guaranteed that N does not have any leading zeros.

As John prefers smaller numbers, he wants to construct the smallest such number possible. Can you help John?

#### Input

The first line of the input gives the number of test cases, T. T test cases follow.

Each test case has a single line containing a positive integer N: the number Ada gives John.

#### Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the new number constructed by John. As mentioned earlier, y cannot have leading zeros.

#### Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll solve()
{

    ll ans = 0;
    string correct, typed;
    unordered_map<char, int> cmp, tmp;
    cin >> correct >> typed;

    for(char e:correct)
        cmp[e]++;

    for(char e:typed)
        tmp[e]++;

    for(auto e:cmp){
        if(tmp[e.first] && tmp[e.first] >= e.second) ans += tmp[e.first] - e.second;
        else return -1;
    }

    return ans;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
    {
        sol = solve();
        if(sol == -1)
        cout << "Case #" << (t + 1) << ": IMPOSSIBLE" << endl;
        else
        cout << "Case #" << (t + 1) << ": " << sol << endl;
    }

    return 0;
}
```

### Problem B

#### Description

Barbara is a speed typer. In order to check her typing speed, she performs a speed test. She is given a string I that she is supposed to type.

While Barbara is typing, she may make some mistakes, such as pressing the wrong key. As her typing speed is important to her, she does not want to spend additional time correcting the mistakes, so she continues to type with the errors until she finishes the speed test. After she finishes the speed test, she produces a P.

Now she wonders how many extra letters she needs to delete in order to get I from P. It is possible that Barbara made a mistake and P cannot be converted back to I just by deleting some letters. In particular, it is possible that Barbara missed some letters.

Help Barbara find out how many extra letters she needs to remove in order to obtain I or if I cannot be obtained from P by removing letters then output IMPOSSIBLE.

#### Input

The first line of the input gives the number of test cases, T. T test cases follow.

Each test case has 2 lines. The first line of each test case is an input string I (that denotes the string that the typing test has provided). The next line is the produced string P (that Barbara has entered).

#### Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of extra letters that need to be removed in order to obtain I. If it is not possible to obtain I then output IMPOSSIBLE as y.

#### Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    string str;
    cin >> str;
    int n = str.size(), sum = 0;

    for (auto e : str)
        sum += e - '0';

    int insert_number = 9 - sum % 9, insert_index = 0;

    if (insert_number == 9)
    {
        insert_number = 0;
        insert_index = 1;
    }

    for(;insert_index < n; insert_index++)
        if (str[insert_index] - '0' > insert_number)
            break;

    char ans = insert_number + '0';

    for (int i = 0; i < insert_index; i++)
        cout << str[i];

    cout << ans;

    for (int i = insert_index; i < n; i++)
        cout << str[i];
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test;
    string sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
    {
        cout << "Case #" << (t + 1) << ": ";
        solve();
        cout << endl;
    }

    return 0;
}
```

## Round B

### Problem A

#### Description

A company named Gooli has issued a new policy that their employees account passwords must contain:

- At least 7 characters.
- At least one uppercase English alphabet letter.
- At least one lowercase English alphabet letter.
- At least one digit.
- At least one special character. There are four special characters: #, @, \*, and &.

The company has asked all the employees to change their passwords if the above requirements are not satisfied. Charles, an employee at Gooli, really likes his old password. In case his old password does not satisfy the above requirements, Charles will fix it by appending letters, digits, and special characters. Can you help Charles to find the shortest possible new password that satisfies his company's requirements?

#### Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of two lines. The first line of each test case contains an integer N, denoting the length of the old password. The second line of each test case contains the old password of length N. Old password contains only digits, letters, and special characters.

#### Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is a valid new password, obtained by possibly fixing the old password in the way that Charles wants and satisfying the company's requirements.

It is guaranteed that at least one solution exists. If there are multiple solutions, you may output any one of them.

#### Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll si;
    string pass;
    cin >> si >> pass;

    bool upper, lower, special, digit;
    upper = lower = special = digit = false;

    for(char &ch:pass){
    if(ch>=65&&ch<=90) upper = true;
    else if(ch>=48&&ch<=57) digit = true;
    else if(ch>=97&&ch<=122) lower = true;
    else special = true;
    }

    if(!upper) pass += "A";
    if(!lower) pass += "a";
    if(!digit) pass += "1";
    if(!special) pass += "@";

    ll rem = pass.length() < 7 ? 7 - pass.length() : 0;

    while(rem--) pass += "A";

    cout << pass << endl;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
    {
        cout << "Case #" << (t + 1) << ": ";
        solve();
    }

    return 0;
}
```

## Round E

### Problem A

#### Description

John loves to play computer games. He recently discovered an interesting game. In the game there are N cells, which are aligned in a row from left to right and are numbered with consecutive integers starting from 1. Initially, all cells are coloured white. A cell is valid if it has white color and it does not have any adjacent red colored cell. On each turn, a player paints any valid cell with the red color. The game ends when no valid cells are present. The score of the player is equal to the number of cells they paint.

To master the game, John is practicing against a bot. The bot is poorly trained and it always paints the first valid cell from the left. John on the other hand is playing the game very carefully and he can choose any valid cell. The bot makes the first move and the players take turns alternately.

Find the maximum achievable score by the bot, assuming that John is playing optimally to minimize the score of his opponent.

#### Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.
The only line of each test case contains an integer **N** representing the number of cells in the game.

#### Output

For each test case, output one line containing `Case #x: y`, where $x$ is the test case number (starting from 1) and y is the maximum achievable score by the bot given that John is playing optimally.

#### Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll solve()
{
    ll n;
    cin >> n;
    n--;
    return (n/5)+1;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test;
    string sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        cout << "Case #" << (t + 1) << ": " << solve() << endl;

    return 0;
}
```

### Problem B

#### Description

A group of **N** students prepares together for upcoming programming competitions such as Kick Start and Code Jam by Google. To help each other prepare, it was decided that each student will pick a mentor among other students. A mentor will help their mentee to solve problems, learn algorithms, track their progress, and will generally support them throughout preparation.

Each student will have exactly one mentor among all other students, and a person can be a mentor to multiple people. For every student $i$ we know their rating $R_i$ which approximates how good that student is at programming competitions. Because it is believed that a mentor should not be much stronger than their mentee, a student $j$ can be a mentor of student $i$ only if $R_j ≤ 2 \times Ri$. Note that a mentor can even have a rating that is lower or equal to their mentee's rating.

Unsurprisingly, each student wants to have the strongest possible mentor. For each student, can you help to figure out what is the highest possible rating of a mentor they can pick?

#### Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of two lines. The first line of each test case contains an integer N, representing the number of students in a group. The second line of each test case contains N integers R1 R2 R3 … RN where Ri is a rating of the i-th student.

#### Output

For each test case, output one line containing `Case #x: M1 M2 M3 … MN` where $x$ is the test case number (starting from 1), and $M_i$ is the maximum possible rating of the $i_{th}$ student's mentor or $−1$ if there are no suitable mentors for that student..

#### Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    int n;
    cin>>n;
    vector<int>v;
    int a[n],b[n];

    for(int i=0;i<n;i++){
        cin>>a[i];
        v.push_back(i);
        b[i]=a[i];
    }

    sort(b,b+n);

    for(int i=0;i<n;i++){
        int k=upper_bound(b,b+n,a[i]*2)-b-1;

        if(k>=0 && b[k]==a[i])
            k--;

        if(k<0)
            cout<<"-1 ";
        else
            cout<<b[k]<<" ";
}

}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test;
    string sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        cout << "Case #" << (t + 1) << ": " << solve() << endl;

    return 0;
}
```

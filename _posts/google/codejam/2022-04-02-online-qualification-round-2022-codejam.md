---
title: "Qualification Round | Codejam | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Google]
tags: [live, contest, online, qualification, round, google, codejam]
---

## Problem A

### Description

A secret team of programmers is plotting to disrupt the programming language landscape and bring punched cards back by introducing a new language called Punched Card Python that lets people code in Python using punched cards! Like good disrupters, they are going to launch a viral campaign to promote their new language before even having the design for a prototype. For the campaign, they want to draw punched cards of different sizes in ASCII art.

Example Punched Card.

![loading_image](https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a4621b)

The ASCII art of a punched card they want to draw is similar to an R×C matrix without the top-left cell. That means, it has (R⋅C)−1 cells in total. Each cell is drawn in ASCII art as a period (.) surrounded by dashes (-) above and below, pipes (|) to the left and right, and plus signs (+) for each corner. Adjacent cells share the common characters in the border. Periods (.) are used to align the cells in the top row.

For example, the following is a punched card with R=3 rows and C=4 columns:

..+-+-+-+
..|.|.|.|
+-+-+-+-+
|.|.|.|.|
+-+-+-+-+
|.|.|.|.|
+-+-+-+-+

There are more examples with other sizes in the samples below. Given the integers R and C describing the size of a punched card, print the ASCII art drawing of it as described above.

## Input

The first line of the input gives the number of test cases, T. T lines follow, each describing a different test case with two integers R and C: the number of rows and columns of the punched card that must be drawn.

## Output

For each test case, output one line containing Case #x:, where x is the test case number (starting from 1). Then, output (2⋅R)+1 additional lines with the ASCII art drawing of a punched card with R rows and C columns.

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll r, c;
    cin >> r >> c;

    for(int i=1; i<=2*r+1; i++){
        for(int j=1; j<=2*c+1; j++){

            if(i==1 && j<3){
                cout << ".";
                continue;
            }

            if(i==2 && j==1){
                cout << ".";
                continue;
            }


            if(i%2){
                if(j%2)
                cout << "+";
                else
                cout << "-";
            }else{
                if(j%2)
                cout << "|";
                else
                cout << ".";
            }

        }

        cout << endl;
    }
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

        cout << "Case #" << (t + 1) << ":" << endl;
        solve();
    }

    return 0;
}
```

## Problem B

### Description

You are part of the executive committee of the Database Design Day festivities. You are in charge of promotions and want to print three D's to create a logo of the contest. You can choose any color you want to print them, but all three have to be printed in the same color.

![loading_image](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1cdSOY7WiKnEIm4EtiJyBgZdflL0gjG2oEiBAUuAtPBJtBjuu9BJSLJBrFb4K43rU9/3d_printing.png)

You were given three printers and will use each one to print one of the D's. All printers use ink from 4 individual cartridges of different colors (cyan, magenta, yellow, and black) to form any color. For these printers, a color is uniquely defined by 4 non-negative integers c, m, y, and k, which indicate the number of ink units of cyan, magenta, yellow, and black ink (respectively) needed to make the color.

The total amount of ink needed to print a single D is exactly 106 units. For example, printing a D in pure yellow would use 106 units of yellow ink and 0 from all others. Printing a D in the Code Jam red uses 0 units of cyan ink, 500000 units of magenta ink, 450000 units of yellow ink, and 50000 units of black ink.

To print a color, a printer must have at least the required amount of ink for each of its 4 color cartridges. Given the number of units of ink each printer has in each cartridge, output any color, defined as 4 non-negative integers that add up to 106, such that all three printers have enough ink to print it.

## Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of 3 lines. The i-th line of a test case contains 4 integers Ci, Mi, Yi, and Ki, representing the number of ink units in the i-th printer's cartridge for the colors cyan, magenta, yellow, and black, respectively.

## Output

For each test case, output one line containing Case #x: r, where x is the test case number (starting from 1) and r is IMPOSSIBLE if there is no color that can be printed by all 3 printers. Otherwise, r must be equal to "c m y k" where c, m, y, and k are non-negative integers that add up to 106 and c≤Ci, m≤Mi, y≤Yi, and k≤Ki, for all i.

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll mx = 1000000, n=3, m=4, total = 0, sum, remaining;
    ll arr[3][4];

    ll mn[4];
    
    for(ll i=0; i<n; i++)
        for(ll j=0; j<m; j++)
            cin >> arr[i][j];

    for(ll i=0; i<m; i++){
        mn[i] = min({arr[0][i],arr[1][i], arr[2][i]});
        total += mn[i];
    }

    if(total < mx){
        cout << "IMPOSSIBLE" << endl;
        return;
    }

    if(total == mx){
        cout << mn[0] << " " << mn[1] << " " << mn[2] << " " << mn[3] << endl;
        return;
    }

    remaining = mx;

    for(ll i=0; i<m; i++){
        sum = min(mn[i], remaining);
        cout << sum <<" ";
        remaining = remaining - sum < 0 ? 0 : remaining - sum;
    }
    cout << endl;
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

## Problem C

### Description

While the most typical type of dice have 6 sides, each of which shows a different integer 1 through 6, there are many games that use other types. In particular, a dk is a die with k sides, each of which shows a different integer 1 through k. A d6 is a typical die, a d4 has four sides, and a d1000000 has one million sides.

![loading_image](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1qY5tfNCjf8YoCMu6HlnbBl9frVt7iWV6MzsRqgwA1EitmQlG2zgBhSvGwhaDa/D1000000.png)

In this problem, we start with a collection of N dice. The i-th die is a dSi, that is, it has Si sides showing integers 1 through Si. A straight of length ℓ starting at x is the list of integers x,x+1,…,x+(ℓ−1). We want to choose some of the dice (possibly all) and pick one number from each to form a straight. What is the longest straight we can form in this way?

## Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case is described in two lines. The first line of a test case contains a single integer N, the number of dice in the game. The second line contains **N** integers`` S1,S2,…,SN,`` each representing the number of sides of a different die.

## Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the maximum number of input dice that can be put in a straight.

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll n, i, ans = 0;
    cin >> n;
    vector<ll> dice(n);

    for(i=0; i<n; i++)
        cin >> dice[i];

    sort(dice.begin(), dice.end());

    i=0;
    while(i<n){
        if(ans<=dice[i])
        ans++;
        i++;
    }

   cout << ans << endl;
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

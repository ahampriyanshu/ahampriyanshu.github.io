---
title: "Google Codejam 2022"
author: ahampriyanshu
categories: [Contests, Google]
excerpt: C++ Solutions to Google Codejam, 2022.
tags: [live, contest, online, qualification, 1B, round, google, codejam]
---

## Qualification Round

### Problem A

#### Description

A secret team of programmers is plotting to disrupt the programming language landscape and bring punched cards back by introducing a new language called Punched Card Python that lets people code in Python using punched cards! Like good disrupters, they are going to launch a viral campaign to promote their new language before even having the design for a prototype. For the campaign, they want to draw punched cards of different sizes in ASCII art.

Example Punched Card.

![loading_image](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1czYfn54qiD2aqETqCx884cVUzIDuxEgv_7KFfDN5b8VWc1JFa-nVRTY2r_KjyYVaL1w/punched_card.png)

The ASCII art of a punched card they want to draw is similar to an R×C matrix without the top-left cell. That means, it has (R⋅C)−1 cells in total. Each cell is drawn in ASCII art as a period `(.)` surrounded by dashes `(-)` above and below, pipes `(|)` to the left and right, and plus signs `(+)` for each corner. Adjacent cells share the common characters in the border. Periods `(.)` are used to align the cells in the top row.

For example, the following is a punched card with R=3 rows and C=4 columns:

```
..+-+-+-+

..|.|.|.|

+-+-+-+-+

|.|.|.|.|

+-+-+-+-+

|.|.|.|.|

+-+-+-+-+
```

There are more examples with other sizes in the samples below. Given the integers R and C describing the size of a punched card, print the ASCII art drawing of it as described above.

#### Input

The first line of the input gives the number of test cases, T. T lines follow, each describing a different test case with two integers R and C: the number of rows and columns of the punched card that must be drawn.

#### Output

For each test case, output one line containing Case #x:, where x is the test case number (starting from 1). Then, output (2⋅R)+1 additional lines with the ASCII art drawing of a punched card with R rows and C columns.

#### Solution

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

### Problem B

#### Description

You are part of the executive committee of the Database Design Day festivities. You are in charge of promotions and want to print three D's to create a logo of the contest. You can choose any color you want to print them, but all three have to be printed in the same color.

![loading_image](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1cdSOY7WiKnEIm4EtiJyBgZdflL0gjG2oEiBAUuAtPBJtBjuu9BJSLJBrFb4K43rU9/3d_printing.png)

You were given three printers and will use each one to print one of the D's. All printers use ink from 4 individual cartridges of different colors (cyan, magenta, yellow, and black) to form any color. For these printers, a color is uniquely defined by 4 non-negative integers c, m, y, and k, which indicate the number of ink units of cyan, magenta, yellow, and black ink (respectively) needed to make the color.

The total amount of ink needed to print a single D is exactly 106 units. For example, printing a D in pure yellow would use 106 units of yellow ink and 0 from all others. Printing a D in the Code Jam red uses 0 units of cyan ink, 500000 units of magenta ink, 450000 units of yellow ink, and 50000 units of black ink.

To print a color, a printer must have at least the required amount of ink for each of its 4 color cartridges. Given the number of units of ink each printer has in each cartridge, output any color, defined as 4 non-negative integers that add up to 106, such that all three printers have enough ink to print it.

#### Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of 3 lines. The i-th line of a test case contains 4 integers Ci, Mi, Yi, and Ki, representing the number of ink units in the i-th printer's cartridge for the colors cyan, magenta, yellow, and black, respectively.

#### Output

For each test case, output one line containing Case #x: r, where x is the test case number (starting from 1) and r is IMPOSSIBLE if there is no color that can be printed by all 3 printers. Otherwise, r must be equal to "c m y k" where c, m, y, and k are non-negative integers that add up to 106 and c≤Ci, m≤Mi, y≤Yi, and k≤Ki, for all i.

#### Solution

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

### Problem C

#### Description

While the most typical type of dice have 6 sides, each of which shows a different integer 1 through 6, there are many games that use other types. In particular, a dk is a die with k sides, each of which shows a different integer 1 through k. A d6 is a typical die, a d4 has four sides, and a d1000000 has one million sides.

![loading_image](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1qY5tfNCjf8YoCMu6HlnbBl9frVt7iWV6MzsRqgwA1EitmQlG2zgBhSvGwhaDa/D1000000.png)

In this problem, we start with a collection of N dice. The i-th die is a dSi, that is, it has Si sides showing integers 1 through Si. A straight of length ℓ starting at x is the list of integers x,x+1,…,x+(ℓ−1). We want to choose some of the dice (possibly all) and pick one number from each to form a straight. What is the longest straight we can form in this way?

#### Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case is described in two lines. The first line of a test case contains a single integer N, the number of dice in the game. The second line contains **N** integers` S1,S2,…,SN,` each representing the number of sides of a different die.

#### Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the maximum number of input dice that can be put in a straight.

#### Solution

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

## Round 1B

### Problem A

#### Description

Pancakes are normally served in stacks, but the Infinite House of Pancakes embraces change! The restaurant's new advertising hook is to serve the pancakes from a deque, or double-ended queue.

You are a server at the restaurant, and your job is to serve every pancake in the deque. Customers will arrive one at a time, and each one gets a single pancake. You must serve each customer either the leftmost or rightmost pancake in the deque; the choice is yours. When a pancake is served, it disappears from the deque, exposing the pancake that was next to it. Or, once there is only one pancake left, your only choice is to serve that one, and then your job is complete!

![loading_image](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1oRMoLFtk1g7GwO6ssvpYFcXplwok1UCuvzvKESWONXKOo9cuqrkcFn1mt9EKQ8X452GE/pancake_deque.png)

Each pancake has a deliciousness level. Because customers do not get to choose which pancakes they get, each customer only has to pay for their pancake if it is at least as delicious as each of the pancakes that all of the previous customers got. (The first customer always pays for their pancake, since in that case there are no previous customers.)

How many customers will pay for their pancake, if you serve the pancakes in an order that maximizes that number?

#### Input

The first line of the input gives the number of test cases, T. T test cases follow. Each test case is described with two lines. The first line of a test case contains a single integer N, the number of pancakes in the pancake deque. The second line of a test case contains N integers D1,D2,…,DN, where Di is the deliciousness level of the i-th pancake from the left in the deque.

#### Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of customers who pay for their pancakes, if you serve the pancakes in an order that maximizes that number.

#### Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll solve()
{
    ll n;
    cin >> n;
    vector<ll> vec(n);

    for(ll i=0; i<n; i++)
        cin >> vec[i];

    ll i=0, j = n-1, ans = 0, curr = -1, prev = -1;

    while(i <= j){

        if(vec[i] <= vec[j])
            curr = vec[i++];
        else
            curr = vec[j--];

        if(prev <= curr) ans++;
        prev = max(curr, prev);
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
        cout << "Case #" << (t + 1) << ": " << solve() << endl;

    return 0;
}
```

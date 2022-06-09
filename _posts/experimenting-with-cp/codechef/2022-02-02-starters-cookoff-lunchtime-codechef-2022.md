---
title: "Codechef Contests 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codechef]
excerpt: All of my accepted submissions on Codechef [2022]
tags: [live, contest, codechef, starters, cookoff, lunchtime, february, march, april, june]
---

## Febtruary

### CodeChef Starters 24

#### Badminton Serves 

Chef is playing badminton today. The service rules of this singles game of badminton are as follows:

1. The player who starts the game serves from the right side of their court.
1. Whenever a player wins a point, they serve next.
1. If the server has won an even number of points during a game, then they will serve from the right side of the service court for the subsequent point.

Given the number of points P obtained by Chef at the end of the game, please determine how many times Chef served from the right side of the court.

* [BADMINTON](https://www.codechef.com/START24C/problems/BADMINTON)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;
void solve()
{
    ll p;
    cin >> p;
    cout << p/2 + 1 << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);   
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

#### Avoid Contact 

A hostel has N rooms in a straight line. It has to accommodate X people. Unfortunately, out of these X people, Y of them are infected with chickenpox. Due to safety norms, the following precaution must be taken:

- No person should occupy a room directly adjacent to a room occupied by a chickenpox-infected person. In particular, two chickenpox-infected people cannot occupy adjacent rooms.

For example, if room 4 has a chickenpox-infected person, then nobody should occupy rooms 3 and 5. Similarly, if room 1 has a chickenpox-infected person then nobody should occupy room 2.

What's the minimum value of N for which all the people can be accommodated in the hostel, following the above condition?

* [AVOIDCONTACT](https://www.codechef.com/START24C/problems/AVOIDCONTACT)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;
void solve()
{
    ll x,y,ans = 0;
    cin >> x >> y;
    ans = x == y ? x+y-1 : x+y;
    cout << ans << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);   
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

#### EVM Hacking

There are three cities and thus three EVMs. An insider told Chef that his party got A,B,C votes respectively in these three cities according to the EVMs. Also, the total number of votes cast are P,Q,R respectively for the three cities.

Chef, being the party leader, can hack at most one EVM so that his party wins. On hacking a particular EVM all the votes cast in that EVM are counted in favor of Chef's party.

A party must secure strictly more than half of the total number of votes cast in order to be considered the winner. Can Chef achieve his objective of winning by hacking at most one EVM?

* [EVMHACK](https://www.codechef.com/START24C/problems/EVMHACK)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;
void solve()
{
    ll a,b,c,p,q,r;
    cin >> a >> b >> c >> p >> q >> r;
    ll diff = max({p-a, q-b, r-c});
    if(diff + a + b + c > (p + q + r)/2)
    cout<<"YES\n";
    else
    cout << "NO\n";
}

int main()
{
    ios_base::sync_with_stdio(false);   
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

#### Yet Another Constructive Problem

You are given a positive integer X which is at most 108.

Find three distinct non-negative integers A,B,C that do not exceed 109 and satisfy the following equation:

```
(A∣B)&(B∣C)&(C∣A)=X
```

Here, ∣ denotes the bitwise OR operator and & denotes the bitwise AND operator.

It can be shown that a solution always exists for inputs satisfying the given constraints.

* [ORANDCON](https://www.codechef.com/START24C/problems/ORANDCON)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;
void solve()
{
    ll x;
    cin >> x;
    ll a = 0, b = x, c = b +1;
    while(c < INT_MAX){
        if(( (a|b) & (b|c) & (c|a)) == x)
            break;
        c++;    
    }
    cout << a <<" "<< b <<" "<< c <<"\n";
}

int main()
{
    ios_base::sync_with_stdio(false);   
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

#### Anti Palindrome

A (1-indexed) string S of length N is said to be anti-palindrome if, for each 1≤i≤N, Si≠S(N+1−i).

You are given a string S of length N (consisting of lowercase Latin letters only). Rearrange the string to convert it into an anti-palindrome or determine that there is no rearrangement which is an anti-palindrome.

If there are multiple rearrangements of the string which are anti-palindromic, print any of them.

* [ANTI_PAL](https://www.codechef.com/START24C/problems/ANTI_PAL)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

bool cmp(pair<char, ll>& a,
         pair<char, ll>& b)
{
    return a.second < b.second;
}
  

void solve()
{
    ll n;
    bool to_front = true;
    string str, front="", rear="", ans = "";
    vector<pair<char, ll> > vec;
    map<char, ll> mp;
    cin >> n >> str;
    if(n%2){
        cout << "NO\n";
        return;
    }

    
    for (auto& ch : str) {
        mp[ch]++;
    }
  
    for (auto& e : mp) {
        vec.push_back(e);
    }
  
    sort(vec.begin(), vec.end(), cmp);

    ll len = vec.size();

    if(vec[len - 1].second > n/2){
        cout << "NO\n";
        return;
    }
  
    for(ll i = 0; i <len; i++ ){
        string tmp ="";
        ll times = vec[i].second;
        char ch = vec[i].first;
        while(times--)
            tmp += ch;
        ans += tmp;
    }
    len = ans.length();

    for (ll start = 0, end = len/2 -1; start < end; start++, end--) 
        swap(ans[start], ans[end]);
    


    cout << "YES\n" <<  ans << endl;
    
}

int main()
{
    ios_base::sync_with_stdio(false);   
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        solve();
}
```

## March

### Lunchtime

#### A. Parallel Processing

There are N tasks waiting in line to be executed. The execution time for the ith task is Ai seconds.

Chef has two processors to execute these N tasks. Both these processors work simultaneously. Each processor executes the assigned tasks one by one.

Chef assigns a prefix of these tasks to the first processor and the remaining tasks to the second processor.

For example, if there are 3 tasks, Chef can do one of the following:

- Assign no task to the first processor. This means, the second processor will execute tasks 1,2 and 3.
- Assign task 1 to the first processor. This means, the second processor will execute tasks 2 and 3.
- Assign tasks 1 and 2 to the first processor. This means, the second processor will execute task 3.
- Assign tasks 1,2 and 3 to the first processor. Thus, second processor would execute no tasks.

Find the minimum time in which all the tasks can be executed.

* [PLPROCESS](https://www.codechef.com/LTIME105B/problems/PLPROCESS)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

ll solve()
{
    ll n, e, ans(0);
    cin >> n;
    vector<ll> vec;

    for(ll i=0; i<n; i++)
        {
            cin >> e;
            vec.push_back(e);
        }
    if(n == 1) return vec[0];

    if(n == 2) return max(vec[0], vec[1]);

    ll start = 1, end = n - 1;

    ll p1 = vec[0], p2 = vec[end];
    end--;

    while(start <= end){

    if(p1 < p2){
        p1 += vec[start];
        start++;
    }else{
        p2 += vec[end];
        end--;
    }

    }
    
    return max(p1, p2);

}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        cout << solve() << endl;
}
```

#### B. Four Equidistant Points on a Grid

The manhattan distance between two points P1(x1,y1) and P2(x2,y2) is given by d(P1,P2)=|x2−x1|+|y2−y1|.

In other words, manhattan distance is the minimum number of moves required to reach P2 from P1 if, in each move, you are allowed to travel one unit along the X-axis or one unit along the Y-axis.

You are given an integer D. Find four points (P1,P2,P3,P4) with integer coordinates, such that:

- The absolute value of both X and Y coordinates of all points is at most 109.
- The manhattan distance between any pair of points is D . More formally, d(Pi,Pj)=D for all 1 ≤ i < j ≤ 4.
If such set of points do not exist, print -1. If there are multiple solutions, you may print any.

* [DISTCON](https://www.codechef.com/LTIME105B/problems/DISTCON)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

void solve()
{
    ll d;
    cin >> d;

    if(d%2){
        cout << -1 << endl; 
        return;
    }

    cout << 0 << " " <<  d/2 << endl;
    cout << d/2 << " " <<  0 << endl;
    cout << d << " " <<  d/2 << endl;
    cout << d/2  <<  " " << d << endl;

}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
        solve();
}
```

## April

### Cookoff

#### A. Digit Sum Parities

For a positive integer M, MoEngage defines ``digitSum(M)`` as the sum of digits of the number M (when written in decimal).

For example, ``digitSum(1023)``=1+0+2+3=6.

Given a positive integer N, find the smallest integer X strictly greater than N such that:

- ``digitSum(N)`` and ``digitSum(X)`` have different parity, i.e. one of them is odd and the other is even.

* [DIGSMPAR](https://www.codechef.com/COOK140B/problems/DIGSMPAR)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

ll getSum(ll n)
{
    ll sum = 0;
    while (n != 0)
    {
        sum = sum + n % 10;
        n = n / 10;
    }
    return sum;
};

ll solve()
{
    ll n, x, old_sum, new_sum;
    cin >> n;

    old_sum = getSum(n);
    n++;
    new_sum = getSum(n);

    if(old_sum%2 and new_sum%2)
    n++;

    if(old_sum%2 == 0 and new_sum%2 == 0)
    n++;

    return n;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        cout << solve() << endl;
}
```

#### B. Sticks and Rectangles

MoEngage has a bundle of N sticks. The ith stick has a length Li meters.

Find the minimum number of sticks (of any length) you need to add to the bundle such that you can construct some rectangles where each stick of the bundle belongs to exactly one rectangle and each side of a rectangle should be formed with exactly one stick.

* [RECSTI](https://www.codechef.com/COOK140B/problems/RECSTI)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

ll solve()
{
    ll n, e, ans = 0;
    unordered_map<ll, ll> ump;
    cin >> n;

    for (ll i = 0; i < n; i++)
    {
        cin >> e;
        ump[e]++;
    }

    for (auto e : ump)
        if (e.second % 2)
        {
            ans++;
            n++;
        }
    return n % 4 ? ans + 2 : ans;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    ll test;
    for (cin >> test; test--;)
        cout << solve() << endl;
}
```

## June

### Starters 41

#### A. Break the Stick

Chef has a stick of length N.

He can break the stick into 2 or more parts such that the parity of length of each part is same. For example, a stick of length 11 can be broken into three sticks of lengths {3,3,5} since each part is odd, but it cannot be broken into two sticks of lengths {5,6} since one is even and the other is odd.

Chef can then continue applying this operation on the smaller sticks he obtains, as many times as he likes.

Can Chef obtain a stick of length exactly X by doing this?

* [BREAKSTICK](https://www.codechef.com/START41B/problems/BREAKSTICK)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll n, x;
    cin >> n >> x;

    if (n % 2 and x%2 == 0){
        cout << "NO" << endl;
        return;
    }
    cout << "YES" << endl;
        
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        solve();

    return 0;
}
```

#### B. Sticks and Rectangles

You are given two integers L and R(L+3≤R). Output any four distinct integers between L and R (inclusive) such that their bitwise XOR is zero.

More formally, output any four integers a1,a2,a3,a4 such that:

* a1⊕a2⊕a3⊕a4=0
* L≤a1,a2,a3,a4≤R
* ai=aj if and only if i=j

If more than one such quadruple exists, you may output any of them. If no such quadruple exists, print −1 instead.

* [SIMPLE_XOR](https://www.codechef.com/START41B/problems/SIMPLE_XOR)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll l, r;
    cin >> l >> r;

    if (l % 2)
        l++;

    if (l+3 <= r)
        cout << l << " " << l + 1 << " " << l + 2 << " " << l + 3 << endl;
    else
        cout << -1 << endl;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        solve();

    return 0;
}
```

### Starters 42

#### A. Minimum number of Flips

Chef has an array A of length N consisting of 1 and −1 only.

In one operation, Chef can choose any index i (1≤i≤N) and multiply the element Ai by −1.

Find the minimum number of operations required to make the sum of the array equal to 0. Output -1 if the sum of the array cannot be made 0.

* [MINFLIPS](https://www.codechef.com/START42C/problems/MINFLIPS)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll solve()
{
    ll n,i,e, sum(0);
    cin >> n;

    for (i = 0; i < n; i++)
    {
        cin >> e;
        sum += e;
    }

    sum = abs(sum);

    if(sum%2) return -1;
    return sum/2;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
    cout << solve() << endl;

    return 0;
}
```

#### B. Divisible by 3 

Stack likes the number 3 a lot.

He has two non-negative integers A and B.
In one operation, Stack can do either of the following:

* A:=|A−B| (change A to |A−B|)
* B:=|A−B| (change B to |A−B|)

**Note: ** that |X| denotes absolute value of X. For example |−7|=7 and |4|=4.

Find the minimum number of operations after which at least one integer out of A and B becomes divisible by 3.

* [MODULO3](https://www.codechef.com/START42C/problems/MODULO3)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll solve()
{
    ll a, b, mini, maxi;
    cin >> a >> b;
    mini = min(a%3, b%3);
    maxi = max(a%3, b%3);

    if(mini == 0) return 0;
    if(mini == 1 and maxi == 1) return 1;
    if( abs(a-b)%3 == 0) return 1;
    return 2;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        cout << solve() << endl;

    return 0;
}
```


#### C. How Many Maximums 

From an array A containing N integers, you construct a binary string S of length (N−1) as follows. For all 1≤i<N:

* If Ai<Ai+1, then Si=0.
* If Ai>Ai+1, then Si=1.

Given the string S, determine the count of indices i (1≤i≤N) such that it is possible for Ai to be the maximum element of the array A.

* [HOWMANYMAX](https://www.codechef.com/START42C/problems/HOWMANYMAX)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll solve()
{
    ll n,i,e, ans(0);
    bool upwards = true;
    string s;
    cin >> n >> s;

    for(i=0; i<=n-2; i++){
        if(s[i] == '1') {
            if(upwards) ans++;
            upwards = false;
        } else upwards = true;

    }

    if(s[n-2] == '0' and upwards) ans++;

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
    cout << solve() << endl;

    return 0;
}
```

#### D. Minimum or Maximum 

From a hidden array A of length N, Stack constructs an array B of length N such that:

For all i (1≤i≤N), Bi=max(A1,A2,…,Ai) or Bi=min(A1,A2,…,Ai).
For the given array B of length N, Stack wants you to check whether a possible array A exists or not.

* [MINORMAX](https://www.codechef.com/START42C/problems/MINORMAX)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve()
{
    ll n,i,e, maxi = INT_MIN, mini = INT_MAX;
    bool possible = true;

    cin >> n;

    for(i = 0; i<n; i++){
        cin >> e;
        mini = min(mini, e);
        maxi = max(maxi, e);
        if(e > mini and e < maxi) possible = false;
    }

    if(possible) cout << "YES" << endl;
    else cout << "NO" << endl;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll test, sol;
    cin >> test;

    for (ll t = 0; t < test; ++t)
        solve();

    return 0;
}
```



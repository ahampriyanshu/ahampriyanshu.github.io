---
title: "February | 2022 | Codechef"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Codechef]
tags: [live, contest, codechef, starters, cookoff, lunchtime]
---

All of my accepted submissions on Codechef(February 2022).

## CodeChef Starters 24

### Badminton Serves 

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

### Avoid Contact 

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

### EVM Hacking

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

### Yet Another Constructive Problem

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

### Anti Palindrome

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
---
title: "NLTH | Wipro | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Wipro]
tags: [live, contest, wipro, national, talent, hunt, hash, set, array, string]
mermaid: true
--- 

All of the submissions for Elite NLTH, February 2022.

> All the submissions are posted once the examination was already over.
{: .prompt-warning }


## Morning Shift : 22 Feb

"Easy Math" is an online math tutorial platform for kids. In the tutorial, there is a multiplication assessment in which a student is given three numbers N, X and Y, respectively. The student has to print the sum of all the numbers from 1 to Nwhere only the multiples of X and Y will be considered for summation.

Write an algorithm to print the sum of all the numbers from 1 to N.

```cpp
#include<bits/stdc++.h>
using namespace std ;
typedef long long int ll ;

int main()
{
   ll n,x,y ; 
   cin >> n >> x >> y ;
   ll sum=0 ;
   for(ll i=1 ; i<=n ; i++)
   {
       if(i%x==0 || i%y==0)
       {
           sum+=i ;
       }
   }
   cout << sum << endl ;
   return 0 ;
}
```

## Afternoon Shift : 22 Feb

During the fall season the 'Place Hill country receives lots of students' visa applications for admissions in the various degree colleges of the country. The country code of all the visa applications received online per day is stored in the form of strings tagged 'a-z' or 'A-Z' in the visa center database. Each character of the string represents the country code. The string is case sensitive and lowercase letters represent one country and capital letters represent another country. The visa center wishes to know the count of the applications of a particular country code received per day.

Write an algorithm to help the visa center find out the count of the application of a particular country code received per day.

### Hashmap

```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    string str;
    char ele;
    unordered_map<char, int> ump;
    cin >> str >> ele;

    for(auto ch:str)
        ump[ch]++;

    cout << ump[ele] << endl;
}
```

### Constant Space

```cpp
#include<bits/stdc++.h>
using namespace std ;

int main()
{
   string s ;
   char ch ;
   cin >> s >> ch ;
   int count =0 ;
   for(auto e:str)
       if(e==ch)
           count++ ;
   
   cout << count << endl ;
   return 0 ;
}
```

### STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    string str;
    char ele;
    unordered_map<char, int> ump;
    cin >> str >> ele;
    cout << count(str.begin(), str.end(), ele) << endl;
}
```

## Evening Shift : 22 Feb

For the e-learning various tutorials are provided to the students. One of the tutorials shows the highlighter on a number A on the number line. There is a "jump" button in the tutorial. On pressing the "jump" button, the highlighter moves by a fixed number D towards the right side if D is positive and towards the left side if D is negative. The student has to press the button N number of times. The tutorial has various sets of exercises. For every exercise, the positions of the highlighter before every"jump" button press will be stored in the database.

Write an algorithm to find the position of the highlighter before every button press if the button must be pressed N number of times in an exercise.

```cpp
#include<iostream>
using namespace std ;

typedef long long int ll;

int main()
{
   ll a,d,n ;
   cin >> a >> d >> n ;

   for(ll i=0 ; i< n ; i++, a+=d)
       cout << a << " " ;
   
   return 0 ;
}
```
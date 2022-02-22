---
title: "Elite National Talent Hunt | Infosys | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Wipro]
tags: [live, contest, wipro, national, talent, hunt, hash, set, array, string]
mermaid: true
---

All of the submissions for Elite National Talent Hunt, February 2022.

> All the submissions are posted once the examiantion was already over.
{: .prompt-warning }

## Afternoon Shift : 22 Feb

[3:32 pm, 22/02/2022] ahampriyanshu: During the fall season the 'Place Hill country receives lots of students' visa applications for admissions in the various degree colleges of the country. The country code of all the visa applications received online per day is stored in the form of strings tagged 'a-z' or 'A-Z' in the visa center database. Each character of the string represents the country code. The string is case sensitive and lowercase letters represent one country and capital letters represent another country. The visa center wishes to know the count of the applications of a particular country code received per day.

Write an algorithm to help the visa center find out the count of the application of a particular country code received per day.

### Hashmap

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

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

typedef long long int ll;

int main()
{
    string str;
    char ele;
    unordered_map<char, int> ump;
    cin >> str >> ele;

    cout << count(str.begin(), str.end(), ele) << endl;
}
```
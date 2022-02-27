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

## 22 Feb

### Problem 1

"Easy Math" is an online math tutorial platform for kids. In the tutorial, there is a multiplication assessment in which a student is given three numbers N, X and Y, respectively. The student has to print the sum of all the numbers from 1 to Nwhere only the multiples of X and Y will be considered for summation.

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

### Problem 2

During the fall season the 'Place Hill country receives lots of students' visa applications for admissions in the various degree colleges of the country. The country code of all the visa applications received online per day is stored in the form of strings tagged 'a-z' or 'A-Z' in the visa center database. Each character of the string represents the country code. The string is case sensitive and lowercase letters represent one country and capital letters represent another country. The visa center wishes to know the count of the applications of a particular country code received per day.

Write an algorithm to help the visa center find out the count of the application of a particular country code received per day.

#### Hashmap

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

#### Constant Space

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

#### STL

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

### Problem 3

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

## 23 Feb

### Problem 1

For the current academic session, a university has decided to allocate grades to the students based on their marks obtained in the exam. The whole process will be automated and will be done by the university system. At first the system takes in the list of N subject marks obtained by the student. Then, the system will output the k ^ (th) smallest mark from the list.

```cpp
#include<bits/stdc++.h>
using namespace std ;


int main()
{
    int n ;
    cin >> n ;
    int arr[n];
    for(int i=0 ; i<n ; i++)
        cin >> arr[i];

    int k;
    cin >> k;
    sort(arr, arr+n);
    cout << arr[k-1] << endl ;
    return 0 ;
}
```

### Problem 2

The data transmitting network of MNC CompSoft' transmits two types of data packets throughout the network. The data packets are transmitted in batches. At the end of the day the company updates its database with the number of packets sent and received by the network. The company has a list of N batches to be transmitted through the network. Each batch is identified by batch ID ranging from 0 to (N-1). The list consists of the number of data packets that are transmitted per batch through the network. The batches received by the network are denoted by negative numbers and the ones sent by the network are denoted by positive numbers in the list. The company wishes to know the total count of the data packets sent through the network.

```cpp
#include<bits/stdc++.h>
using namespace std ;


int main()
{
    int n ;
    cin >> n ;
    int arr[n] ;
    int sum=0 ;
    for(int i=0 ; i<n ; i++)
    {
        cin >> arr[i] ;
        if(arr[i]>=0)
            sum+=arr[i] ;
    }

    cout << sum ;
    return 0 ;
}
```

### Problem 3

An online image processing application Photoshoot takes in an image. The application then convert the image into the pixels of count N. N is a decimal number. The image pixels are then converted into the computer adaptation before processing further. The computer adaptation of the image is the binary representation of the value N.

```cpp
#include<bits/stdc++.h>
using namespace std ;

int main()
{
    long long n ;
    cin >> n ;
    vector<long long> vec ;
    while(n>0)
    {
        vec.push_back(n%2) ;
        n/=2 ;
    }

    for(long long i=vec.size()-1 ; i>=0 ; i--)
        cout << vec[i] ;
    return 0 ;
}
```
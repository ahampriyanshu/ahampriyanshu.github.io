---
title: "Competitive Programming Part 1: Introduction"
author: Priyanshu Tiwari
excerpt: time complexity, space complexity, complexity Graph, possible verdicts
categories:
  - 'competitive-programming'
tags:
  - 'competitive-programming'
  - 'c++'
---

## Steps to approach a problem

* Ready lengthy and unusual paragrams to decode the problem statement.
* Observe the input format.
* Observe the output format.
* Analyze the given contraints
    - Time Limit : 0.5s - 4s
    - Memomry Limit : 256MB - 1GB
* Find hidden logic/pattern in the sample input and output.
* Code

## Analyzing given constraints

Conventionally, we can perform 4.10<sup>18</sup> operation in one second.

### Complexity Table

| N | TC |
| :-- | :-- |
| 10<sup>18</sup> | **O(logN)** |
| 10<sup>8</sup> | **O(N)** |
| 10<sup>4</sup> | **O(N<sup>2</sup>)** |
| 10<sup>7</sup> | **O(NlogN)** |
| 10<sup>2</sup> | **O(N<sup>3</sup>)** |
| 90 | **O(N<sup>4</sup>)** |
| 20 | **O(2<sup>N</sup>)** |
| 11 | **O(N!)** |

### Complexity Graph

![center-aligned-image](/images/cp/cn-cp-02.png){: .align-center}

## Possible verdicts

* Accpeted
* Time limit Exceeded
* Memory Limit Exceeded
* Compilation Error
* SIGTSTP/SIGSTOP
    - Input/Output error.
    - Giving instruction which is not implemented in GNU library.
* Runtime Error
    - Divinding by zero
    - Segmentation Fault 
        - Memory allocation
        - Accessing -ve indices
        - Declaring global array greater than 10<sup>8</sup>
        - Declaring local array greater than 10<sup>6</sup>(4M mem limit per function)
* Wrong Answer
    - Work for corner cases.
    - Implicit conversion.
    - Precision error for float and double.
    - Using uninitialized variables.

## Some basic problems


### Zig Zag in 2D array

* [Link to problem](https://classroom.codingninjas.com//app/classroom/me/430/content/7195/offering/50385/problem/3023)

> Solution

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){

    int n;
    cin>>n;

    int ** arr = new int*[n];

    for(int i=0; i<n; i++){
        arr[i] = new int[n];
        for(int j=0; j<n; j++)
            cin >> arr[i][j];
    }

    for(int i=0; i<n; i++){
        if(i%2){
            for(int j=n; j>=0; j--)
                cout << arr[i][j] << " ";
        }else{
            for(int j=0; j<n; j++)
                cout << arr[i][j] << " ";
        }
        
    }

    for(int i=0; i<n; i++)
        delete arr[i];

    delete[] arr;

    return 0;

}
```

### The Lead Game

The game of billiards involves two players knocking 3 balls around on a green baize table. Well, there is more to it, but for our purposes this is sufficient.

The game consists of several rounds and in each round both players obtain a score, based on how well they played. Once all the rounds have been played, the total score of each player is determined by adding up the scores in all the rounds and the player with the higher total score is declared the winner.

The Siruseri Sports Club organises an annual billiards game where the top two players of Siruseri play against each other. The Manager of Siruseri Sports Club decided to add his own twist to the game by changing the rules for determining the winner. In his version, at the end of each round, the cumulative score for each player is calculated, and the leader and her current lead are found. Once all the rounds are over the player who had the maximum lead at the end of any round in the game is declared the winner.

Your task is to help the Manager find the winner and the winning lead. You may assume that the scores will be such that there will always be a single winner. That is, there are no ties.

* [Link to problem](https://www.codechef.com/problems/TLG)

> Solution

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){

    int n, s1, s2, cs1 = 0, cs2 = 0, max_lead = 0, max_leader = 1;
    cin>>n;

    for(int i=0; i<n; i++){
        cin >> s1 >> s2;

        cs1 += s1;
        cs2 += s2;

        int curr_lead = 0;
        int curr_leader = 1;

        if(cs1 > cs2){
            curr_lead = cs1 - cs2;
        }else{
            curr_lead = cs2 - cs1;
            curr_leader = 2;
        }

        if(curr_lead > max_lead){
            max_lead = curr_lead;
            max_leader = curr_leader;
        }
        
    }

    cout << max_leader << " " << max_lead << endl;

    return 0;
}
```
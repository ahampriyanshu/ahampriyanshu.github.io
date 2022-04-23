---
title: "Intro To CP 3: Typecasting"
author: Priyanshu Tiwari
excerpt: typecasting, reference variables, dynamic allocation, pre-processors, macros, define, const and global variables, inline functions
categories:
  - 'competitive-programming'
tags:
  - 'competitive-programming'
  - 'c++'
---

## Typecasting

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){

    int i=65;
    char c=i;  // Implicit typecasting
    cout << c << endl;

    int * p = &i;
    char * pc = (char*)p;  // Explicit typecasting

    cout << p << endl;
    cout << pc << endl;

    cout << *p << endl;
    cout << *pc << endl;

    cout << *(pc + 1) << endl;
    cout << *(pc + 2) << endl;
    cout << *(pc + 3) << endl;
}
```

```
A
0x7ffd964aac34
A
65
A


```

## Reference Variables

```cpp
#include<bits/stdc++.h>
using namespace std;

void increment(int& k){
    k++;
}

int main(){

    int i = 10;
    int& j = i;
    i++;

    cout << i << " " << j << endl;

    increment(j);
    cout << i << " " << j << endl;
}
```

```
dynamic-2.cpp: In function ‘int& f(int)’:
dynamic-2.cpp:10:12: warning: reference to local variable ‘a’ returned [-Wreturn-local-addr]
   10 |     return a;
      |            ^
dynamic-2.cpp:9:9: note: declared here
    9 |     int a = n;
      |         ^
dynamic-2.cpp: In function ‘int* g()’:
dynamic-2.cpp:15:12: warning: address of local variable ‘a’ returned [-Wreturn-local-addr]
   15 |     return &a;
      |            ^~
dynamic-2.cpp:14:9: note: declared here
   14 |     int a = 10;
      |         ^
11 11
12 12
```

Two different containers to reach same memory location.
Doesn't occupy new space in the memory.
Mostly used while passing variables to any functions that should alter/update the value of the original variable.

We can't declare and initialize reference variable  in two different steps
{: .notice--info}

```cpp
int i;
i = 10; ✅

int &j;
j = i; ❌
```

## Dynamic Allocation

* Stack $\rightarrow$ Static Memmory Allocation
* Heap $\rightarrow$ Dynamic Memmory Allocation

```cpp
// data_type * name = new data type
int * p = new int;
*p = 10;
delete p;
```

This command consumes 12 bytes $\rightarrow$

* 4 bytes in heap for allocating an integer.
* 8 bytes in stack for storing the address of the integer allocated in the heap;

```cpp
int main(){

    // It will cause memory-leak.
    while(1){
        int* pi = new int;
    }

    // It won't due to `scope of variables`
    while(1){
        int i = 10;
    }
}
```

### 2D Dynamic Allocation

```cpp

int main(){

    int m,n;
    cin >> n;

    int ** p = new int*[m];

    for(int i=0; i<n; i++){
        cin >> m;
        p[i] = new int[m];
        for(int j=0; j<m; j++)
            cin >> p[i][j];
    }

    for(int i=0; i<n; i++){
        delete [] p[i];
    }

    delete [] p;
}
```

## Macros and Pre-processors

### #define and global variables

```cpp
#include<bits/stdc++.h>
using namespace std;

#define PI 3.14

double pi_global = 3.14;

int main(){

    int r;
    double pi_local = 3.14;
    cin >> r;

    // Naive and difficult to update
    cout << 3.14 * r * r << endl;

    // Consumes space, limited scope
    cout << pi_local * r * r << endl;


    // Can be altered/modified by any child func, consumes spac
    cout << pi_global * r * r << endl;

    // global, constant, doesn't consume space
    cout << PI * r * r << endl;

}
```

### Inline functions

```cpp
#include<bits/stdc++.h>
using namespace std;

int max(int a, int b){
    return (a > b) ? a : b;
}

inline int max_inline(int a, int b){
    return (a > b) ? a : b;
}

int main(){

    int a = 10;
    int b = 20;

    int d;

    // long and naive
    if(a > b) d = a;
    else d = b;

    // diff. to read
    int e = a > b ? a : b;

    // degrades performance as the instruction flow breaks for a moment
    int f = max(a, b);

    // at compile time whole code of the inline function gets inserted or substituted, therefore preserving the performance
    int g = max_inline(a, b);
}
```

**Note**: Usually, the compiler supports 1 to 3 sets of instructions as ``inline`` func, more than that is treated as a normal func only.
{: .notice--warning}

### Default Func

```cpp
int sum(int a[], int size, int start = 0){
    int ans = 0;
    for(int i=start; i<size; i++)
        ans += a[i];
}

int main(){

    int a[20];

    cout << sum(a, 20) << endl;
    cout << sum(a, 20, 5) << endl;
}
```


## Constant Variables

```cpp

const int i = 10; ✅
int const i = 10; ✅

const int i; ❌

const int i = 10;
i++; ❌

int i = 10;
const int& j = i;
i++; ✅
j++; ❌

const int i = 10;
const int& j = i; ✅

const int i = 10; 
int& j = i; ❌

const int i = 10;
int* j = &i; ❌


int i = 10;
int j = 12;


int const  * a = &i;
int * const b = &i;
int const * const c = &i;

a = &j;  ✅
(*a)++;  ❌

b = &j;  ❌
(*b)++;  ✅

c = &j;  ❌
(*c)++;  ❌

```
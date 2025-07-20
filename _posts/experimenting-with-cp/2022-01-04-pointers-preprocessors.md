---
title: "DSA Part 4: Pointers & Preprocessors"
author: ahampriyanshu
excerpt: Pointers, pointer arithmetic, character array, double pointer, typecasting, reference variables, dynamic allocation,preprocessors, macros, define, const and global variables, inline functions
categories:
  - DSA
tags:
  - "data structures and algorithms"
  - "Pointers"
  - "pointer arithmetic"
  - "double pointer"
  - "typecasting"
  - "reference variables"
  - "dynamic allocation"
  - "macros"
  - "define"
  - "typedef"
---

## Pointers

### Need for pointers

- To store the address of some variables from the symbol table.
- This address can be retrieved using **&** and is stored in hexadecimal form. Eg : `0x7ffc40fe4b94`
- We can declare a pointer using `data_type * name`
- We state the data_type while declaring pointers to make the de-referencing process much easier.
- Usually 8 bytes but can also be 4 bytes in 32-bit systems.

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){

    int i=10;
    cout << &i << endl;
    int* p = &i;
    cout << p << endl;
    cout << i << " " << *p << endl;
    cout << sizeof(i) << " " << sizeof(p) << endl;
    i++;
    cout << i << " " << *p << endl;

    int a = i;
    a++;

    cout << i << " " << a << endl;

    (*p)++;

    cout << i << " " << *p << endl;
}
```

**Note:** Do not try to access or modify uninitialized pointers as they can point to any segment of the memory. To prevent this we usually initialize pointers with either some valid variable's address or _NULL_.
{: .prompt-tip }

```cpp
int* p;
cout << *p << endl;
(*p)++;
```

### Pointer arithmetic

- We can use normal arithmetic on pointers too.
- With each decrement/increment, the pointer now shifts to x data_type bytes and starts pointing to the new location(variable).
- This comes in handy while dealing with an array.

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){

    int i=10;
    int* p = &i;
    cout << p << endl;
    p = p + 2;
    cout << p << endl;
    p = p - 2;
    cout << p << endl;
    double j = 10;
    int* pd = &j;
    cout << pd << endl;
    pd = pd + 2;
}
```

### Pointers and arrays

```cpp
int main(){

    int a[10];
    cout << a << endl;
    cout << &a[0] << endl;

    a[0] = 10;

    cout << *a << endl;
    cout << a[0] << endl;
    cout << *(a+2) << endl;
    cout << a[2] << endl;

    a = a+3;
}
```

- In th above code **arr** is a pointer that contains the address to the intial block of 4\*5=20 bytes.
- In other words : `arr = &arr[0]` and `*arr = arr[0]`
- So,
  a[0] = _(a)
  a[1] = _(a+1)
  .
  .
  .
  **a[i] = \*(a+i)**

Hence we can also use
{: .prompt-tip }

`a[i] == i[a]` as `*(a+i) == *(i+a)`

#### Differences b/w array and pointer

1. The basic difference is that the pointer allocates the memory of 8byte when initialized but the arr is nothing but the address of the first of n blocks.
1. The `sizeof()` of operator on an integer pointer with always give 8(or 4) bytes but **sizeof(arr) = sizeof(int)xn**
1. p and &p are two different things but arr and &arr will give the same output as arr is nothing but the address of the first block.
1. We can never do `arr = arr + 3` as once array can't be reassigned.

### Characters Pointers

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){

    int a[] = {1, 2, 3};
    char b[] = "abc";

    cout << a << endl;
    cout << b << endl;

    char* c = &b[0];
    cout << c << endl;

    char d = 'a';
    char* pd = &d;

    cout << d << endl;
    cout << pd << endl;
}
```

> Output

```
0x7ffdcc7c3158
abc
abc
a
ad1|��
```

- As we can see that character arrays and pointers behave a bit differently, this is because of how cout is implemented for char arrays and pointers in c++.
- Instead of printing the address of the 0th index, the content of the array is printed.

char s1[] = "abc";

char\* s2 = "abc";

While executing the above code, the compiler will first create a temporary space of the string literal and then copy those values to the memory block provided to s1. But s2 points towards the same temporary which can be very dangerous and hence should be avoided.
{: .prompt-warning }

### Pointers and functions

- Array is always passed as a pointer to a function in c++.

```cpp
void print(int* p){
    cout << *p << endl;
}

void increment1(int* p){
    p++;
}

void increment2(int* p){
    (*p)++;
}

int main(){

    int i = 10;
    int *p= &i;

    print(p);
    increment1(p);
    print(p);

    print(p);
    increment2(p);
    print(p);
}
```

> Output

```
10
10
10
11
```

```cpp
#include<bits/stdc++.h>
using namespace std;

int size1(int a[]){
    return sizeof(a);
}

int size2(int * a){
    return sizeof(a);
}

void print(int b[]){
    cout << *b << endl;
}

int main(){

    int a[10];
    int b[] = {1, 2, 3, 4, 5};

    cout << sizeof(a) << endl;
    cout << size1(a) << endl;
    cout << size2(a) << endl;

    print(b);
    print(b+1);
    print(b+3);
}
```

> Output

```cpp
40
8
8
1
2
4
```

### Pointer to a Pointer: Double Pointers

```cpp
int main(){

    int i=10;
    int* p = &i;
    int** pp = &p;

    cout << &i << endl;
    cout << p << endl;
    cout << *pp << endl;

    cout << &p << endl;
    cout << pp << endl;

    cout << i << endl;
    cout << *p << endl;
    cout << **pp << endl;
}
```

> Output

```
0x7ffcfa610594
0x7ffcfa610594
0x7ffcfa610594
0x7ffcfa610598
0x7ffcfa610598
10
10
10
```

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

Two different containers to reach the same memory location.
Doesn't occupy new space in the memory.
Mostly used while passing variables to any functions that should alter/update the value of the original variable.

We can't declare and initialize reference variables in two different steps
{: .prompt-tip }

```cpp
int i;
i = 10; ✅

int &j;
j = i; ❌
```

## Dynamic Allocation

- Stack $\rightarrow$ Static Memmory Allocation
- Heap $\rightarrow$ Dynamic Memmory Allocation

```cpp
// data_type * name = new data type
int * p = new int;
*p = 10;
delete p;
```

This command consumes 12 bytes $\rightarrow$

- 4 bytes in the heap for allocating an integer.
- 8 bytes in the stack for storing the address of the integer allocated in the heap;

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

## Preprocessors

Preprocessors are directives given to a compiler before the compilation begin. These are replaced with some other predefined values.

### Macros

#### #define

```cpp
#include <iostream>

// defining macro without argument
#define AREA(r) (3.14 * r *r)

int main(){

    int r;
    cin >> r;
    cout << AREA(r);
}
```

```cpp
#include <iostream>

// defining macro with arguments
#define PI 3.14

int main(){

    int r;
    cin >> r;
    cout << PI * r * r;
}
```

#### Predefined macros

| Macro    | Usage                                              |
| -------- | -------------------------------------------------- |
| **LINE** | Current line number in the source code             |
| **FILE** | Filename of the source code                        |
| **DATE** | MM DD YY of the time when the program was compiled |
| **TIME** | HH:MM:SS of the time when the program was compiled |

#### Header files

tells the compiler to include a file in the source code program.

```cpp

// standard header files
#include <iostream>

// user defined header files
#include "my_func.h"

```

## Typedef

Typedef keyword is used to assign a new name to an existing data type. Unlike #define macros, it is terminated by a semi-colon(;) and is interpreted by the compiler during compile time.

```cpp
typedef long long ll;
typedef unsigned int positive_integer;
```

## Global variables

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

## Inline functions

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

    // at compile-time whole code of the inline function gets inserted or substituted, therefore preserving the performance
    int g = max_inline(a, b);
}
```

**Note**: Usually, the compiler supports 1 to 3 sets of instructions as `inline` func, more than that is treated as a normal func only.
{: .prompt-warning }

## Default Arguments

It allows a function to be called without providing one or more trailing arguments.

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

**Note**: As of now, Java does not support default arguments.
{: .prompt-warning }

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

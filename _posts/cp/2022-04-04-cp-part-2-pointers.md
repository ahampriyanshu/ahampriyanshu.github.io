---
title: "Competitive Programming Part 2: Pointers"
author: Priyanshu Tiwari
excerpt: need of pointers, pointers and array, character array, double pointers
categories:
  - 'competitive-programming'
tags:
  - 'competitive-programming'
  - 'c++'
---

## Need of pointers

* To store the address of some variables from the symbol table.
* This address can be retrieved using **&** and is stored in hexadecimal form. Eg : ``0x7ffc40fe4b94``
* We can declare a pointer using ``data_type * name``
* We state the data_type while declaring pointers to make the de-referencing process much easier.

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
{: .notice--info}

```cpp
int* p;
cout << *p << endl;
(*p)++;
```

## Size of pointers

* Usually 8 bytes but can also be 4 bytes in 32-bit systems.

## Pointer arithmetic

* We can use normal arithmetic on pointers too.
* With each decrement/increment, the pointer now shifts to x data_type bytes and starts pointing to the new location(variable).
* This comes in handy while dealing with an array.

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

## Pointers and arrays

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

* In th above code **arr** is a pointer that contains the address to the intial block of 4*5=20 bytes.
* In other words : ``arr = &arr[0]`` and ``*arr = arr[0]``
* So,
    a[0] = *(a)
    a[1] = *(a+1)
    .
    .
    .
    **a[i] = *(a+i)**

Hence we can also use
{: .notice--info}

``a[i] == i[a]`` as ``*(a+i) == *(i+a)``

### Differences b/w array and pointer

1. The basic difference is that the pointer allocates the memory of 8byte when initialized but the arr is nothing but the address of the first of n blocks.
1. The ``sizeof()`` of operator on an integer pointer with always give 8(or 4) bytes but **sizeof(arr) = sizeof(int)xn**
1. p and &p are two different things but arr and &arr will give the same output as arr is nothing but the address of the first block.
1. We can never do `` arr = arr + 3 `` as once array can't be reassigned.

## Characters Pointers

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

* As we can see that character arrays and pointers behaves a bit differently, this is because how cout is implemented for char arrays and pointers in c++.
* Instead of printing the address of the 0th index, the content of the array is printed.

char s1[] = "abc";

char* s2 = "abc";

While executing the above code, the compiler will first create a temporary space of the string literal and then copy those values to the memory block provided to s1. But s2 points towards the same temporary which can be very dangerous and hence should be avoided.
{: .notice--warning}

## Pointers and functions

* Array is always passed as a pointer to a function in c++.

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

## Pointer to a Pointer : Double Pointers

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
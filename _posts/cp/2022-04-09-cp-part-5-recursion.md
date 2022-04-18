---
title: "Competitive Programming Part 5: Recursions"
author: Priyanshu Tiwari
excerpt: Recursions and PMI, power(x,n), count digits of an integer, is_sorted(), fibonacci series
categories:
  - 'competitive-programming'
tags:
  - 'competitive-programming'
  - 'c++'
---

## Recursion

When a func calls itself.

Can cause **segmentation fault**, if base case is implemented poorly.

Based on **PMI**(Principle of Mathematical Induction).

## Implement Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., x<sup>n</sup>).

```cpp
double myPow(double x, int n) {
        if(n==0) return 1.0;
        double y = myPow(x, n/2);
        
        if(n % 2 == 0)
            return y*y;
        else return n < 0 ? (y*y)/x : x*y*y; 
}
```

## Print N numbers

You are given an integer N. Print numbers from 1 to N without the help of loops.

```cpp
void printTillN(int N, int i = 1)
{
    cout << i << " ";

    if(i == N)
        return;
    return printTillN(N, i+1);
}
```

## Count digits in an integer

Count the number of digits in a long integer entered by a user.

```cpp
int countDigit(long long n)
{
    if (n/10 == 0)
        return 1;
    return 1 + countDigit(n / 10);
}
```

## Fibonacci Series

Print fibonacci numbers till n.

```cpp
int fib(int n)
{
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
```

## Implement is_sorted()

Implement is_sorted() for array of integers.

```cpp
bool is_sorted(int a[], int size){

    if(size == 0 || size == 1) return true;

    if(a[0] > a[1]) return false;

    return is_sorted(a+1, size - 1);
}
```

## Sum of array

Given an array of length N, you need to find and return the sum of all elements of the array.

```cpp
int sum(int a[], int size){

    if(size == 1) return a[0];
    return a[0] + sum(a+1, size - 1);

}
```

## First Index of Number

Given an array of length N and an integer x, you need to find and return the first index of integer x present in the array. Return -1 if it is not present in the array.

```cpp
int firstIndex(int input[], int size, int x) {
	if(size == 0) return -1;
    if(input[0] == x) return 0;
    int ans = firstIndex(input+1, size-1, x);
    if(ans != -1) return ans + 1;
    return ans;
}
```

## Last Index of Number

Given an array of length N and an integer x, you need to find and return the last index of integer x present in the array. Return -1 if it is not present in the array.

```cpp
int lastIndex(int input[], int size, int x){
    if(size == 0) return -1;
    int ans = lastIndex(input+1, size-1, x);    
    if(ans == -1)
        if(input[0] != x) return -1;
        else return 0;
    return ans + 1; 
}
```

## All Indices of Number

Given an array of length N and an integer x, you need to find all the indexes where x is present in the input array. Save all the indexes in an array (in increasing order).

```cpp
int indexes(int input[], int size, int x, int output[]){
    if(size == 0) return 0;
    int ans = indexes(input, size-1, x, output);
    if(input[size - 1] == x){
        output[ans] = size - 1;
        return ans + 1;
    }
    else return ans;
}
```
---
title: "Intro To CP 5: Recursions"
author: Priyanshu Tiwari
excerpt: Recursions and PMI, power(x,n), count digits of an integer, is_sorted(), fibonacci series
categories:
  - 'competitive-programming'
tags:
  - 'competitive-programming'
  - 'c++'
---

# Recursion

When a function calls itself. Can cause **segmentation fault** in c++ or **stack overflow** in java, if base case is implemented poorly. Based on **PMI**(Principle of Mathematical Induction). Memory consuming but easier(and sometimes more natural) to implement.

## Tail Recursion

When the last step in a recursive function is the recursive call itself. These kinds of recursive functions are memory-friendly in modern compiler as the compiler replaces the recursive call with ``GOTO`` statement. Hence, no extra memory is needed to store the previous function in the stack.

* Augmented recursion

```cpp
int fact(int n)
{
    if(n == 0 || n == 1)
    return 1;
    return n * fact(n-1);
}
```

**Space Complexity:** $O(n)$

* Tail recursion

```cpp
int fact(int n, int k)
{
    if(n == 0 || n == 1)
    return k;
    return fact(n-1, k*n);
}
```

**Space Complexity:** $O(1)$

## Tail vs Non-Tail

| Tail | Non-Tail |
| -- | -- |
| Quick Sort | Merge Sort |
| Inorder, Preorder Traversal | Postorder Traversal |

# Problems

## Implement $log_2n$

Implement log2(n), which calculates floor of $log_2n$.

```cpp
int log2(int n) {
    if(n==1)
    return 0;
    return 1 + log2(n/2);
}
```

## Implement deci_to_bin

Implement deci_to_bin(n), which prints the binary representation of a +ve integer.

```cpp
void deci_to_bin(int n) {
    if(n==10)
    return;
    func(n/2);
    cout << n << " ";
}
```

## Implement Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., x<sup>n</sup>).

```cpp
double myPow(double x, int n) {
    
    if(n==0) return 1.0;
        double y = myPow(x, n/2);
        
    if(n % 2 == 0)
        return y*y;
    return n < 0 ? (y*y)/x : x*y*y; 
}
```

## Print N to 1 numbers

You are given an integer N. Print numbers from N to 1 without the help of loops.

```cpp
void print(int N)
{
    if(N == 0)
        return;

    cout << N << " ";
    print(N-1);
}
```

## Print 1 to N numbers

You are given an integer N. Print numbers from 1 to N without the help of loops.

```cpp
void print(int N)
{
    if(N == 0)
        return;

    print(N-1);
    cout << N << " ";
}
```

## Tail Recursive Approach

```cpp
void print(int N, int i = 1)
{
    cout << i << " ";

    if(i == N)
        return;
    print(N, i+1);
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

## Sum of n natural numbers

Return sum of n natural numbers using recursion.

```cpp
int sum(int n)
{
    if (n == 0)
        return 0;
    return n + sum(n-1);
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

## Check Palindrome

Given a string, write a recursive function that checks if the given string is a palindrome, else, not a palindrome.

```cpp
bool isPalindrome(string s, int i){
        
    if(i > s.size()/2)
       return true ;

    return s[i] == s[s.size()-i-1] && isPalindrome(s, i+1) ;
    
}
```
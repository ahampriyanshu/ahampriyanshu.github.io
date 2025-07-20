---
title: "DSA Part 5: Recursion"
author: ahampriyanshu
excerpt: Basic of recursion, PMI, tail recursion, pow(x,n), subset, powerset, count and sum of integer, is_sorted(), fibonacci series, factorial, first and last index of a number
mermaid: true
categories:
  - DSA
tags:
  - "recursion"
  - "tail recursion"
  - "is_sorted()"
  - "fibonacci series"
  - "subset"
  - "powerset"
  - josephus'
  - "tower of hanoi"
  - "check palindrome"
---

## Recursion

Recursion is a process of a function calling itself. It can cause segmentation fault/stack overflow if the base case is implemented poorly. It is based on **PMI**(Principle of Mathematical Induction).

A program/algo based on a recursive approach is memory-consuming but easier(and sometimes more natural, i.e. DFS, BFS, MergeSort) to implement when compared to the iterative solution.

### Tail Recursion

When the last step in a recursive function is the recursive call itself. These kinds of recursive functions are as the compiler replaces the recursive call with the `GOTO` statement. Hence, no extra memory is needed to store the previous function in the stack.

- No-Tail recursion

```cpp
int fact(int n)
{
  if(n == 0 || n == 1)
  return 1;
  return n * fact(n-1);
}
```

**Auxiliary Space:** $O(n)$

- Tail recursion

```cpp
int fact(int n, int k)
{
  if(n == 0 || n == 1)
  return k;
  return fact(n-1, k*n);
}
```

**Auxiliary Space:** $O(1)$

### Tail vs Non-Tail

| Tail                        | Non-Tail            |
| --------------------------- | ------------------- |
| Quick Sort                  | Merge Sort          |
| Inorder, Preorder Traversal | Postorder Traversal |

## Problems

### Implement $log_2n$

Implement log2(n), which calculates floor of $log_2n$.

```cpp
int log2(int n) {
  if(n==1)
  return 0;
  return 1 + log2(n/2);
}
```

### Implement deci_to_bin

Implement deci_to_bin(n), which prints the binary representation of a +ve integer.

```cpp
void deci_to_bin(int n) {
  if(n==0)
  return;
  func(n/2);
  cout << n%2;
}
```

### Implement Pow(x, n)

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

### Print N to 1

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

### Print 1 to N

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

### Tail Recursive Approach

```cpp
void print(int N, int i = 1)
{
    cout << i << " ";

    if(i == N)
        return;
    print(N, i+1);
}
```

### Count digits in an integer

Count the number of digits in an integer.

```cpp
int countDigit(long long n)
{
    if (n/10 == 0)
        return 1;
    return 1 + countDigit(n / 10);
}
```

### Sum of digits in an integer

Return the sum of digits of an integer.

```cpp
int sum(long long n)
{
    if (n <= 9)
        return n;
    return n%10 + sum(n / 10);
}
```

### Sum of n natural numbers

Return sum of n natural numbers using recursion.

```cpp
int sum(int n)
{
    if (n == 0)
        return 0;
    return n + sum(n-1);
}
```

### Fibonacci Series

Print fibonacci numbers till n.

```cpp
int fib(int n)
{
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
```

### Implement is_sorted()

Implement is_sorted() for array of integers.

```cpp
bool is_sorted(int a[], int size){

    if(size == 0 || size == 1) return true;

    if(a[0] > a[1]) return false;

    return is_sorted(a+1, size - 1);
}
```

### Sum of array

Given an array of length N, you need to find and return the sum of all elements of the array.

```cpp
int sum(int a[], int size){

    if(size == 1) return a[0];
    return a[0] + sum(a+1, size - 1);

}
```

### First Index of Number

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

### Last Index of Number

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

### All Indices of Number

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

### Tower Of Hanoi

The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in rod 1. You need to print all the steps of the discs movement so that all the discs reach the 3rd rod.

- [Practice](https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1/)

```cpp
long long toh(int N, int from, int to, int aux) {

        long long count=0;
        if(N==0) return 0;

        count += toh(N-1 , from , aux , to);
        cout<<"move disk "<<N<<" from rod "<<from<<" to rod "<<to<<endl;
        count += toh(N-1 , aux, to , from);

         return ++count;

    }
```

### Check Palindrome

Given a string, write a recursive function that checks if the given string is a palindrome, else, not a palindrome.

```cpp
bool isPalindrome(string s, int i){

    if(i > s.size()/2)
       return true ;

    return s[i] == s[s.size()-i-1] && isPalindrome(s, i+1) ;

}
```

### Subset Sums

Given a list arr of N integers, print sums of all subsets in it.

- [Practice](https://practice.geeksforgeeks.org/problems/subset-sums2234/1#)

```cpp
class Solution
{
public:

    void subset(int index, int sum, int N, vector<int> &arr, vector<int> &ans)
    {
        if(index == N){
            ans.push_back(sum);
            return;
        }
        subset(index+1, sum + arr[index], N, arr, ans);
        subset(index+1, sum, N, arr, ans);
    }

    vector<int> subsetSums(vector<int> arr, int N)
    {
        vector<int> ans;
        solve(0, 0, N, arr, ans);
        return ans;
    }
};
```

**Time Complexity:** $O(2^n)$

### Josephus Problem

N people are standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom. Given the total number of person n and a number k which indicates that k-1 persons are skipped and the kth person is killed in the circle. The task is to choose the place in the initial circle so that you are the last one remaining and so survive.

- [Practice](https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/)

```cpp
int josephus(int n, int k)
{
    if (n == 1)
        return 0;
    return (josephus(n - 1, k) + k) % n;
}
```

**Time Complexity:** $O(n)$

### Generate powerset

Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

- [Practice](https://www.geeksforgeeks.org/recursive-program-to-generate-power-set/)

<div class="mermaid">
graph TD;
    A-->B["∅"];
    A-->C["A"];
    B-->D["∅"];
    B-->E["B"];
    C-->F["A"];
    C-->G["AB"];
    D-->H["∅"];
    D-->I["C"];
    E-->J["B"];
    E-->K["BC"];
    F-->L["A"];
    F-->M["AC"];
    G-->N["AB"];
    G-->O["ABC"];
</div>

```cpp
void powerset(string str, string curr = "", int index = 0,)
{
    if(index == str.length()){
        cout << curr << " ";
        return;
    }

    powerset(str,curr,index+1,);
    powerset(str, curr + s[i], sum,index+1,);
}
```

**Time Complexity:** $O(2^n)$

### LCS

You are given two strings, find the longest common sequece.

```cpp
    int longestCommonSubstr (string S1, string S2, int n, int m)
    {
    if(n == 0 || m == 0)
        return 0;

    if(S1[n-1] == S2[m-1])
        return 1 + longestCommonSubstr(S1, S2, n-1, m-1);

    return max(longestCommonSubstr(S1, S2, n, m-1), longestCommonSubstr(S1, S2, n-1, m));
    }
```

**Time Complexity:** $O(2^n)$

### All permutation

A permutation also called an “arrangement number” or “order,” is a rearrangement of the elements of an ordered list S into a one-to-one correspondence with S itself. A string of length n has n! permutation.

- [Practice](https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/)

<div class="mermaid">
graph TD;
    A["ABC"]-->B["ABC"];
    A-->C["BAC"];
    A-->D["CBA"];
    B-->E["ABC"];
    B-->F["ACB"];
    C-->G["BAC"];
    C-->H["BCA"];
    D-->J["CBA"];
    D-->K["CAB"];
</div>

```cpp
void find_permutation(string s, int i=0){

	if(i == s.length()-1){
		cout << s << " ";
        return;
	}

	for(int j=i; j<s.length(); j++){
		swap(s[i], s[j]);
		find_permutation(s, i+1);
		swap(s[i], s[j]);
	}
}
```

### Calculate lenght of the string

Given a string calculate length of the string using recursion.

```cpp
int length(string str)

if(str[0] == '\0')
    return 0;
return 1 + length(str + 1);
```

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(1)$

### Replace character in a string

Given a string str and two characters X and Y, the task is to write a recursive function to replace all occurrences of character X with character Y

```cpp
void length(string str, char c1, char c2)
dffddf
if(str[0] == '\0')
    return 0;
if(str[0] == c1) str[0] = c2;
return length(str + 1, c1, c2);
```

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(1)$

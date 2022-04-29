---
title: "Project Euler"
author: Priyanshu Tiwari
excerpt: Python solutions to first 100 problems on Project Euler
categories: [Sheets, Projectuler]
tags: [live, sheets, project, euler, mathematics, primes]

---

## 1. Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.


### Input Format

First line contains T that denotes the number of test cases. This is followed by T lines, each containing an integer, N.

### Output Format

For each test case, print an integer that denotes the sum of all the multiples of 3 or 5 below N.

* Sample Input 0
```
2
10
100
```
* Sample Output 0
```
23
2318
```

```python
for _ in range(int(input())):   
    n =int(input())
    n -= 1
    a= n//3                   
    b= n//5
    c= n//15 
    print((3*a*(a+1) + 5*b*(b+1) - 15*c*(c+1))>>1)
```

## 2. Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

### Input Format

First line contains T that denotes the number of test cases. This is followed by T lines, each containing an integer, N.

### Output Format

For each test case, print an integer that denotes the sum of all the multiples of 3 or 5 below N.

* Sample Input 0
```
2
10
100
```
* Sample Output 0
```
10
44
```

```python
for _ in range(int(input())):
    N = int(input())
    A, B, C = 1, 2, 3
    ans = 2
    while C < N:
        if not C % 2:
            ans += C
        A, B, C = B, C, B + C
    print(ans)
```

## 3. Largest prime factor

What is the largest prime factor of a given number ?

### Input Format

First line contains **T** , the number of test cases. This is followed by **T** lines each containing an integer **N**.

### Output Format

For each test case, display the largest prime factor of N .

Sample Input
```
2
10
17
```
Sample Output
```
5
17
```

```python
for _ in range(int(input())):      # looping for number of test cases
    num = int(input())
    fact = 2                       # supposing two as the smallest factorial
    is_prime = 2                   # Taking two as the smallest prime
    while fact * fact <= num :     # Factor is always <= the sqrt of that number
        while num  % fact == 0:    
            is_prime = fact
            num  //= fact    
        fact += 1                  # Incrementing the factorial by 1
    if num > is_prime:             # If the number is itself prime           
        is_prime = num 
    print(is_prime)
```

## 4. Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.

### Sample Input

```
2
101110
800000
```

### Sample Output

```
101101
793397
```

```python
palindromes = []  # A list to store all palndromes
for num1 in range(100, 1000):  # starting num 1 from 100
    for num2 in range(100000//num1, 1000):  # skipping unnecesarry iteration for num2
        palindrome = num1 * num2
        if str(palindrome) == str(palindrome)[::-1] and palindrome not in palindromes:  # if the number is palindrome and not in list => append
            palindromes.append(palindrome)
palindromes.sort()    # sort the list
length = len(palindromes)

for _ in range(int(input())):
    test = int(input())
    for num in range(length - 1, -1, -1):
        if palindromes[num] < test:
            print(palindromes[num])
            break
```

## 5. Smallest multiple

What is the smallest positive number that is evenly divisible(divisible with no remainder) by all of the numbers from  to ?

### Input Format

First line contains  that denotes the number of test cases. This is followed by  lines, each containing an integer.

```
1 <= Test Cases <= 10
1 <= Input <= 40
```
### Output Format

Print the required answer for each test case.

Sample Input

```
2
3
10
```
Sample Output
```
6
2520
```

```python
from math import gcd                                                            
from functools import reduce  
                                                  
for _ in range(int(input())):
    print(reduce(lambda x,y: x*y//gcd(x,y), range(1,int(input())+1))) 
```

## 6. Sum square difference
The sum of the squares of the first ten natural numbers is,

``12 + 22 + ... + 102 = 385``

The square of the sum of the first ten natural numbers is,

``(1 + 2 + ... + 10)2 = 552 = 3025``

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

ProjectEuler+ Problem Statement

The Project Euler problem is equivalent to the ProjectEuler+ challenge with T = 1 and N = 100.

### Sample Input

```
2
3
10
```

### Sample Output

```
22
2640
```

```python
import sys


for _ in range(int(input())):
    n = int(input().strip())
    print(pow((((n+1)*n)//2),2) - (n*(n+1)*((2*n)+1))//6)

```

## 7. 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

ProjectEuler+ Problem Statement

The Project Euler problem is equivalent to the ProjectEuler+ challenge with T = 1 and N = 10001.

### Sample Input
```
2
3
6
```

### Sample Output
```
5
13
```

```python
from math import floor

def prime(n,l):
    x=l[len(l)-1]
    while len(l)<n:
        x+=2
        y=floor(x**0.5)
        count=0
        for i in l:
            if i>y:
                count=0
                break
            if x%i==0:
                count=1
                break
        if count==0:
            l.append(x)
    return l


l=[2,3]
for i in range(int(input())):
    n=int(input())
    if len(l)<n:
        l=prime(n,l)
    print(l[n-1])

```
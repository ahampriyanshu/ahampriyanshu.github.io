---
title: "DSA Part 2: Mathematics"
author: Priyanshu Tiwari
excerpt: Number sequences, extended euclidean algorithm, prime factorization, sieve of eratosthenes, lcm , gcd
categories:
  - DSA
tags:
  - 'data structures'
  - cpp
  - ap
  - gp
  - gcd
  - hcf
  - lcm
  - euclidean
  - prime

---

## Number sequences

### Arithmetic progression

> 2, 4, 6, 8, ......

a<sub>1</sub> = a + 0.d

a<sub>2</sub> = a + 1.d

a<sub>3</sub> = a + 2.d

.

.

.

a<sub>n</sub> = a + (n-1).d

We know that

$\rightarrow avg = \frac{sum}{n}$

$\rightarrow sum = avg \times n$

And in case of evenly distributed numbers

$\rightarrow avg = \frac{first + last}{2}$

$\rightarrow sum = \frac{(a + a + (n-1).d)n}{2}$

$\rightarrow sum = \frac{n(2a + (n-1)*d)}{2}$

### Geometric progression

2, 4, 16, 32, 64 ......

a, $a.r^{1}$,  $a.r^{2}$, $a.r^{3}$, ... $r^{n-1}$

Nth term $\rightarrow$

$a_{n} = a*r^{n-1}$

Sum till N terms $\rightarrow$

$S_{n} = a*(r^{n} - 1)/ r-1$

Sum of infinite terms $\rightarrow$

$S_{\infty} = \frac{a}{1-r}$

### Quadratic formula

Roots of quad eq. 

$ax^{2} + by + c = 0$

$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$.

$D = b^{2} - 4ac$

* D < 0 : Imaginary roots
* D = 0 : Two equal roots
* D > 0 : Two distinct roots

### Prime numbers

2,3,5,7,11, .... 

All the numbers having exactly two factors.

Can be represented as **6n+1** or **6n-1**, except 2 and 3.

2 and 3 are only consecutive prime numbers.

## Problems

### Number of digits in an integer

#### Iterative

```cpp
count(n){
    int cnt = 0;
    while(n){
        cnt += n%10;
        n /= 10;
    }

    return cnt;
}
```

#### Recursive

```cpp
count(n){
    if(!n) return n;
    return 1+count(n)l
}
```

#### Logarithmic

```cpp
count(n){
    return floor(log(n) + 1);
}
```

### Check if the given integer is a palindrome or not.

```cpp
bool isPal(int n){
  int rev = 0;
  int tmp = n;
  
  while(tmp){
    int ones = tmp % 10;
    rev = rev * 10 + ones;
    tmp /= rmp;
  }

  return rev == n;
}
```

### Factorial of a number

#### Iterative

```cpp
int fact(int n);

int res = 1;

for(int i=2; i<=n; i++)
  res *= i;

return res;
}
```

#### Recursive

```cpp
int fact(int n){
  if(!n) return 1;
  return n * fact(n-1);
}
```

### Count trailing zeros in the factorial of a number

```cpp
int ctz(int n){
  int res = 0;
  for(int i=5; i<=n; i *= 5)
    res += n/i;
  return res;
}
```

TC : O(log<sub>5</sub>n)

### GCD of two numbers

#### Naive

```cpp
int gcd(int a, int b){
  int res = min(a, b);

  while(res){
    if(a%res == 0 and b%res == 0)
      break;
    res--;
  }

  return res;
}
```

**Time Complexity:** O(min(a,b))

#### Euclidean Algorithm

```cpp
int gcd(int a, int b){
  while(a != b)
    if(a>b)
      a = a-b;
    else
      b = b-a;
  return a;
}
```

#### Optimized Euclidean Algorithm

```cpp
int gcd(int a, int b){
  if(b==0)
  return a;
  return gcd(b, a%b);
}
```

**Time Complexity:** O(log max(a,b))

#### Extended Euclidean Algorithm

```cpp
int gcd(int a, int b, int *x, int *y)
{
    if (a == 0)
    {
        *x = 0;
        *y = 1;
        return b;
    }
 
    int res = gcd(b%a, a, &x1, &y1);
 
    *x = y1 - (b/a) * x1;
    *y = x1;
 
    return res;
}
```

### LCM of two numbers

#### Naive

```cpp
int gcd(int a, int b){
  int res = max(a, b);

  while(res){
    if(res%a == 0 and res%a == 0)
      break;
    res++;
  }

  return res;
}
```

**Time Complexity:** O(a*b - max(a,b))

#### Efficient Approach

$\rightarrow  a\times b = gcd(a,b) \times lcm(a,b)$

$\rightarrow lcm(a,b) = \frac{a\times b}{gcd(a,b)}$

**Time Complexity:** O(log max(a,b))

### Prime number

#### Naive approach

```cpp
bool isPrime(int n)
{=
    if (n <= 1)
        return false;
  
    for (int i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
```

**Time Complexity:** O(n)

#### Efficient approach

```cpp
bool isPrime(int n)
{
    if (n <= 1)
        return false;
  
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
```

**Time Complexity:** O($\sqrt{n}$)

#### Optimized approach

```cpp
bool isPrime(int n)
{
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
        
    if (n % 2 == 0 || n % 3 == 0)
        return false;
  
    for (int i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
  
    return true;
}
```

### Prime factorization of a number

#### Naive

```cpp
bool isPrime(int n)
{
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
        
    if (n % 2 == 0 || n % 3 == 0)
        return false;
  
    for (int i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
  
    return true;
}

void primeFactors(int n)
{
    for (int i = 2; i <= n; i = i + 2)
    {

      if(isPrime(i))

      int x = i;
        
      while (n % x == 0)
      {
      cout << i << " ";
      x = x*i;
      }
    }
 
}
```

**Time Complexity:** O($nlogn $)

#### Efficient

```cpp
void primeFactors(int n)
{
    if (n <= 1) return;

    for (int i = 2; i*i <= n; i = i + 2)
    {
        while (n % i == 0)
        {
            cout << i << " ";
            n = n/i;
        }
    }
 
    if (n > 1)
        cout << n << " ";
}
```

**Time Complexity:** O($\sqrt{n} logn $)

#### Using Sieve

```cpp
void primeFactors(int n)
{
    int c=2;
    while(n>1)
    {
        if(n%c==0){
        cout<<c<<" ";
        n/=c;
        }
        else c++;
    }
}
```

**Time Complexity:** O(n)

### Print all divisors in ascending order

#### Naive

```cpp
void printDivisors(int n)
{
    for (int i = 1; i <= n; i++)
        if (n % i == 0)
            cout <<" " << i;
}
```

**Time Complexity:** O(n)

#### Efficient

```cpp
void printDivisors(int n)
{
    for (int i=1; i*i<=n; i++)
    {
        if (n%i == 0)
          cout << i << " ";
    }

        for (; i>=1; i--)
    {
        if (n%i == 0)
          cout << n/i << " ";
    }
}
```

**Time Complexity:** O($\sqrt{n}$)

### N Prime Numbers

#### Naive

```cpp
void nPrimes(){
  for(int i=2; i<=n; i++)
    if(isPrime(i))
      cout << i << " ";
}
```

**Time Complexity:** O($n \times \sqrt{n}$)

#### Sieve of Eratosthenes

```cpp
void manipulated_seive(int n)
{

  vector<bool> isPrime(n+1, true);

 
  for (int i=2; i*i<=n ; i++)
  {
    if (isprime[i])
    {
      cout << i << " "
      for(int j=i*i; j<=n; j+= i)
        isPrime[j] = false;
    }
  }   
}
```

**Time Complexity:** O($ log log n $)

### Computating Pow(x,n)

#### Naive

FOR(1->n) : x = x*x;

**Time Complexity:** O(n)

#### Optimized

```cpp
double myPow(double x, int n) {
        if(n==0) return 1.0;
        double y = myPow(x, n/2);
        
        if(n % 2 == 0)
            return y*y;
        else return n < 0 ? (y*y)/x : x*y*y; 
}
```

**Time Complexity:** O(logn)

#### Constant Space

$\rightarrow $ Every natural number can be written as the sum of distinct powers of 2.

```cpp
double myPow(long long int x, long long int n) {
  long long int res = 1;
  while(n>0){

    if(n&1)
    res = res * x;
    
    x *= x;
    n = n >> 1;
  }
  return res;
}
```

**Time Complexity:** O(logn)
---
title: "DSA Part 3: Bit Manipulation"
author: ahampriyanshu
excerpt: binary numbers, msb, lsb, unsigned and signed 32-bits int, 2's complement, bitwise operators, some common bitwise operators
mathjax:
  enable: true
  combo: "tex-svg"
  tags: "ams"
categories:
  - DSA
tags:
  - "data structures and algorithms"
  - "bitwise operators"
  - "binary numbers"
  - "unsigned and unsigned"
  - "xor"
  - "or"
  - "and"
  - "not"
  - "rightmost setbit"
---

## Binary Numbers

A binary number is a number that is represented by using two digits only, usually `0` and `1`.

In C++, there are either 32-bit or 64-bit numbers an are stored as

<figure class="align-center">
  <img src="{{ '/images/dsa/3-1.png' | absolute_url }}" alt="loading">
  <figcaption>Binary representation of $11_{10}$</figcaption>
</figure>

### Significant bits

#### MSB

- Most Significant Bit(high-order bit or left-most bit)
- The MSB gives the sign of the number (sign bit) , 0 for positive and 1 for negative.

#### LSB

- Least Significant Bit(low-order bit or right-most bit)
- To determine whether the number is even or odd.

## Signed and Unsigned 32-bit Int

### Unsigned Integer

These uses all the 32 bits to store the magnitude of the number. As a result there is no way to determine whether polarity of the number so we assume the number to be +ve.The range of unsigned binary number is from 0 to (2n-1).

#### Minimum Possible Value

When all the bits are set to 0.

<figure class="align-center">
  <img src="{{ '/images/dsa/3-2.png' | absolute_url }}" alt="loading">
  <figcaption>Binary representation of 0</figcaption>
</figure>

$\rightarrow (2^{31} \cdot 0) + (2^{30} \cdot 0) + \ldots( 2^0 \cdot 0) = 0$

```cpp
unsigned int mini = 0;
```

#### Maximum Possible Value

When all the bits are set to 1.

<figure class="align-center">
  <img src="{{ '/images/dsa/3-3.png' | absolute_url }}" alt="loading">
  <figcaption>Binary representation of 1</figcaption>
</figure>

$\rightarrow (2^{31} \cdot 1) + (2^{30} \cdot 1) + \ldots + (2^0 \cdot 1) $

$\rightarrow 2^{32} - 1 = 4,294,967,295 $ (approx. 4 billion)

```cpp
unsigned int maxi = UINT_MAX;
```

### Signed

The first bit from the left(msb) is reserved. All the positive integers are stored as it is. For negative numbers, we set the msb to 1 and then store the rest of the number in 2's complement. Why ?

- To avoid double representation of 0.
- Also increases the range by one.

* 2's Complement

2’s complement of a number is obtained by inverting each bit of given number plus 1 to least significant bit(LSB).

**Note:** Overflow is ignored while computing 2's complement.
{: .prompt-tip }

#### Minimum Possible Value

When all the bits are set to 1.

<figure class="align-center">
  <img src="{{ '/images/dsa/3-3.png' | absolute_url }}" alt="loading">
  <figcaption>Binary representation of –2,147,483,648</figcaption>
</figure>

$\rightarrow - {(2^{31} \cdot 1) + (2^{30} \cdot 1) + \ldots + (2^0 \cdot 1)} $

$\rightarrow -2^{31} = –2,147,483,648 $ (approx. -2 billion)

```cpp
int mini = INT_MIN;
```

#### Maximum Possible Value

When all the bits are set to 1, except the MSB.

<figure class="align-center">
  <img src="{{ '/images/dsa/3-4.png' | absolute_url }}" alt="loading">
  <figcaption>Binary representation of 2,147,483,647</figcaption>
</figure>

$\rightarrow (2^{31} \cdot 1) + (2^{30} \cdot 1) + \ldots + (2^0 \cdot 1) $

$\rightarrow 2^{31} - 1 = 2,147,483,647 $ (approx. 2 billion)

```cpp
int maxi = INT_MAX;
```

## Bitwise Operators

### Types of operators

| Operator | Operation   |
| -------- | ----------- |
| &        | AND         |
| \|       | OR          |
| ^        | XOR         |
| >>       | Left Shift  |
| <<       | Right Shift |
| ~        | NOT         |

### Unary operators

#### & - Bitwise AND

Performs bitwise _AND_ on every bit of the operands.

```cpp
  int a = 7, b = 9;
  cout << 7 & 9 << endl;
```

|       |     |
| ----- | --- |
| 0 & 0 | 0   |
| 1 & 0 | 0   |
| 1 & 1 | 1   |

#### | - Bitwise OR

Performs bitwise _OR_ on every bit of the operands.

```cpp
  int a = 7, b = 9;
  cout << 7 | 9 << endl;
```

|        |     |
| ------ | --- |
| 0 \| 0 | 0   |
| 1 \| 0 | 1   |
| 1 \| 1 | 1   |

#### ^ - Bitwise XOR

Performs bitwise _XOR_ on every bit of the operands.

```cpp
  int a = 7, b = 9;
  cout << 7 ^ 9 << endl;
```

|       |     |
| ----- | --- |
| 0 ^ 0 | 0   |
| 1 ^ 0 | 1   |
| 1 ^ 1 | 0   |

- x ^ 0 = x
- x ^ x = 0
- x ^ y = y ^ x

#### ~ - Bitwise NOT

Inverts all bits of the operand.

```cpp
  int a = 7
  cout << (~7) << endl;
```

|     |     |
| --- | --- |
| ~0  | 1   |
| ~1  | 0   |

- `~a` $\implies$ `INT_MAX - a` (only for +ve integers)

### RSB

Subtracting 1 from a decimal number flips all the bits after the rightmost set bit including the rightmost set bit.
{: .prompt-tip }

```
110100            (52)
110100 - 0000001  (52 - 1)
110011            (51)
```

To find the right most set bit of a number we can perform AND between the given number and inverse of the number decremented by 1.
{: .prompt-tip }

```cpp
int rsb = a & ~(a-1);
```

```
  110100            (52)
  110011            (51)
  001100           ~(51)

  110100            (52)
& 001100           ~(51)
  000100            (Right most set bit)

```

### Binary operators

#### << (Left Shift)

```cpp
  int a = 7, b = 2;
  cout << (b << a) << endl;
```

```
00000111 << 2 (7 << 2)
00001100      (28)
```

The above operation will shift all bits of 'b', 'a' bits towards the left. Bits vacated after shifting are filled with 0.

- b << a $\implies b \times 2^a $

#### >> (Right Shift)

```cpp
  int a = 7, b = 2;
  cout << (b >> a) << endl;
```

```
00000111 >> 2 (7 >> 2)
00000001      (1)
```

The above operation will shift all bits of 'b', 'a' bits towards the right. Bits vacated after shifting are filled with 0.

- b >> a $\implies \lfloor \frac{b}{2^a} \rfloor $

## Problems

### Check Kth bit is set or not

Given a number n, check if the Kth bit of n is set or not.

- [Practice](https://www.geeksforgeeks.org/check-whether-k-th-bit-set-not/)

#### Using left shift

```cpp
bool kthbit(int k, int n){
  if (n & (1 << (k - 1)))
    return true;
  return false;
}
```

**Time Complexity:** $O(1)$

#### Using right shift

```cpp
bool kthbit(int k, int n){
  if ((n >> (k-1)&1))
    return true;
  return false;
}
```

**Time Complexity:** $O(1)$

### Count set bit

Write a program to count the number of 1s in the binary representation of an integer.

- [Practice](https://www.geeksforgeeks.org/count-set-bits-in-an-integer/)

#### Naive

```cpp
int setBits(int N) {

    int count = 0;
    while(N){
      count += (N & 1);
      N = N >> 1;
    }
  return count;
}
```

**Time Complexity:** $O(n)$

#### Brian Kernighan’s Algorithm

```cpp
int setBits(int N) {
    int count = 0;
    while (N) {
      N &= (N - 1);
      count++;
    }
  return count;
}
```

**Time Complexity:** $O(logn)$

#### Using Lookup Table

```cpp
int bits[256];

void initialize()
{
    bits[0] = 0;
    for (int i = 0; i < 256; i++)
    {
      bits[i] = (i & 1) + bits[i / 2];
    }
}

int setBits(int n)
{
  return (bits[n & 0xff] + bits[(n >> 8) & 0xff] + bits[(n >> 16) & 0xff] + bits[n >> 24]);
}
```

**Time Complexity:** $O(1)$

### Detect if two integers have opposite signs

Given two signed integers, write a function that returns true if the signs of given integers are different, otherwise false.

- [Practice](https://www.geeksforgeeks.org/detect-if-two-integers-have-opposite-signs/)

#### Arithmetic comparison

```cpp
bool oppositeSigns(int x, int y)
{
    return (x < 0) ? (y >= 0) : (y < 0);
}
```

#### Using XOR

We can utilize the fact that XOR operation evalutes to 1 iff both the operands differ from each other. So we can say that the resultant MSB would be 1 iff x and y have opposite signs.

```cpp
bool oppositeSigns(int x, int y)
{
    return ((x ^ y) < 0);
}
```

### Swap two numbers without using temp variable

Given two variables, x, and y, swap two variables without using a third variable.

#### Arithmetic Operators

```cpp
void swapped(int* x, int* y)
{
    x = x + y;
    y = x - y;
    x = x - y;
}
```

#### Using XOR

Use the fact `x ^ x = 0`

```cpp
void swapped(int* x, int* y)
{
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
}
```

### Is power of 2

Given a positive integer, write a function to find if it is a power of two or not.

- [Practice](https://www.geeksforgeeks.org/program-to-find-whether-a-given-number-is-power-of-2/)

#### Naive

```cpp
int setBits(int N) {

  if (n == 0)
        return 0;
    while (n != 1)
    {
        if (n%2 != 0)
            return 0;
        n = n/2;
    }
    return 1;
}
```

**Time Complexity:** $O(logn)$

#### Brian Kernighan’s Algorithm

```cpp
int setBits(int N) {

    if(!N) return false;

    int count = 0;
    while (N) {
      N &= (N - 1);
      count++;
    }
  return count == 1;
}
```

**Time Complexity:** $O(logn)$

#### Optimized

```cpp
bool isPowerofTwo(long long n){
  return n && (!(n&(n-1)));
}
```

**Time Complexity:** $O(1)$

#### Using log

```cpp
bool isPowerofTwo(long long n){
  if(!n) return false;
  return (ceil(log2(n)) == floor(log2(n)));
```

**Time Complexity:** $O(1)$

### Add two numbers without using arithmetic operators

Write a function that returns sum of two integers. The function should not use any of the arithmetic operators

```cpp
int Add(int x, int y)
{
    while (y)
    {
        unsigned carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }
    return x;
}
```

### Find odd occuring number

Given an array of positive integers. All numbers occur an even number of times except one number which occurs an odd number of times.

- [Practice](https://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/)

#### Naive

Use hashmap to store the frequency.

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(n)$

#### Using XOR

use the fact that `a ^ a = 0`

```cpp
int oddoccur(int arr[], int arr_size)
{
    int res = 0;
    for (int i = 0; i < arr_size; i++)
      res = res ^ arr[i];
    return res;
}
```

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(1)$

### Find the only non-duplicate in array

Variation of the previous question.

### Find the two numbers with odd occurrences in an unsorted array

Given an unsorted array that contains even number of occurrences for all numbers except two numbers. Find the two numbers which have odd occurrences.

- [Practice](https://www.geeksforgeeks.org/find-the-two-numbers-with-odd-occurences-in-an-unsorted-array/)

#### Naive

Use hashmap to store the frequency.

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(n)$

#### Using XOR

```cpp
    vector<int> twoOddNum(int arr[], int n)
    {
        int XOR = 0, ans1 = 0, ans2 = 0;

        for(int i=0; i<n; i++)
          XOR = XOR ^ arr[i];

        int rsb = XOR & ~(XOR-1);

        for(int i=0; i<n; i++)
            if(arr[i] & rsb)
                ans1 = ans1 ^ arr[i];
            else
                ans2 = ans2 ^ arr[i];

        return {max(ans1, ans2), min(ans1, ans2)};
    }
```

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(1)$

### Find the element that appears once

Given an array where every element occurs three times, except one element which occurs only once. Find the element that occurs once.

- [Practice](https://www.geeksforgeeks.org/find-the-element-that-appears-once/)

#### Naive

Use hashmap to store the frequency.

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(n)$

#### Using XOR

use the fact that `a ^ a = 0`

```cpp
int getSingle(int arr[], int n)
{
    int ones = 0, twos = 0;
    int common_bit_mask;
    for (int i = 0; i < n; i++) {
        twos = twos | (ones & arr[i]);
        ones = ones ^ arr[i];
        common_bit_mask = ~(ones & twos);
        ones &= common_bit_mask;
        twos &= common_bit_mask;
    }

    return ones;
}
```

**Time Complexity:** $O(n)$

**Auxiliary Space:** $O(1)$

### Power Set

Given an unsorted array that contains even number of occurrences for all numbers except two numbers. Find the two numbers which have odd occurrences.

- [Practice](https://www.geeksforgeeks.org/find-the-two-numbers-with-odd-occurences-in-an-unsorted-array/)

```cpp
vector<string> AllPossibleStrings(string s){
        vector<string> ans;
		    int counter, j, si = s.length(), pow_si = pow(2, si);
        for (counter = 0; counter < pow_si; counter++) {
            string word;
            for (j = 0; j < si; j++)
                if (counter & (1 << j))
                    word += s[j];
        ans.push_back(word);
        }
        return ans;
	}
```

**Time Complexity:** $O(n \times 2^n)$

**Auxiliary Space:** $O(1)$

---
title: "DSA Part 6: Arrays"
author: ahampriyanshu
excerpt: Static and dynamic arrays, vectors in STL, trapping rainwater, window sliding, prefix sum
mermaid: true
categories:
  - DSA
tags:
  - "arrays"
---

Array is a continuos block of memory. We use an 'index' to access $i^{th}$ element of the array. In most of the programming languages indexing start from 0.

## Time complexity

| Operation | T.C.   |
| --------- | ------ |
| Access    | $O(1)$ |
| Search    | $O(n)$ |
| Insertion | $O(n)$ |
| Deletion  | $O(n)$ |

## Dynamic Arrays

Automatically double up in size once the limit is exhausted.

- **Vector** - C++
- **ArrayList** - Java
- **List** - Python

Avereage T.C. for insertion at end is $O(1)$.

## Problems

### Largest element in array

Given an array of integers, write a program that efficiently finds the largest element present in the array. Given an array return the index of the largest element.

```cpp
int index(int arr[]){

  int res = 0;
  for(int i=1; i<n; i++)
    if(arr[i] > arr[res])
      res = i;

  return res;
}
```

## Second Largest element

Given an array of integers, write a program that efficiently finds the second largest element present in the array.

```cpp
int index(int arr[], int n){

  int res = -1, largest = 0;
  for(int i=1; i<n; i++)
    if(arr[i] > arr[largest])
    {
      largest = i;
      res = largest;
    }
    else if(arr[i] < arr[largest])
      if(res == -1 || arr[i] > arr[res])
        res = i;

  return res;
}
```

### Implement is_sorted()

Implement is_sorted() for array of integers.

```cpp
bool is_sorted(int a[], int size){

    if(size == 0 || size == 1) return true;

    for(int i=1; i<size; i++)
      if(a[i] < a[i-1])
        return false;
    return true;
}
```

### Remove duplicate elements from sorted array

Given a sorted array arr[] of size N, delete all the duplicates elements from arr[].

- [Practice](https://www.geeksforgeeks.org/remove-duplicates-sorted-array/)

```cpp
int remove_duplicate(int arr[],int n){
    int index = 1;

    for(int i=1; i<n; i++)
      if(arr[i] != arr[i-1])
        arr[index++] = arr[i];

    return index;
}
```

### Rotate array

Given an array, rotate the array to the right by k steps, where k is non-negative.

- [Practice](https://leetcode.com/problems/rotate-array/)

```cpp
  void rotate(vector<int>& nums, int k) {
      k %=nums.size();
      reverse(nums.begin(), nums.end());
      reverse(nums.begin(), nums.begin()+k);
      reverse(nums.begin()+k, nums.end());
  }
```

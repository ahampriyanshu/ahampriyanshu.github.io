---
title: "Array | 6 Months DSA Sheet | Work@Tech"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, DSA]
tags: [work, at, tech, dsa, sheet, six, month, vector, array, string, Accenture, Cisco, Dell, Grofers, Juniper Networks, MAQ Software , Veritas, Goldman Sachs, Juniper Networks, LinkedIn, Microsoft, Snapdeal, Synopsys, Zoho, Amazon, VMware, Meta, Amazon, D. E. Shaw, Facebook, Goldman Sachs, Google, Ola, PayPal, PayU, Samsung, Teradata, Visa, Yahoo]
mermaid: true
---

C++ Solutions to six month DSA Sheets, Work@Tech.

## Cumulative Sum

The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

* [Practice](https://workat.tech/problem-solving/practice/cumulative-sum)

```cpp
vector<int> getCumulativeSum(vector<int> &arr) {
    int n(arr.size());
    vector<int> ans(n);
    for (int i = 1; i < n; i++) 
       ans[i] += ans[i - 1];
    return ans;
}
```

## Positive Cumulative Sum

The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

* [Practice](https://workat.tech/problem-solving/practice/positive-cumulative-sum)

```cpp
vector<int> getPositiveCumulativeSum(vector<int> &arr) {
	int n(arr.size());
    vector<int> ans, sum(n);
	if(arr[0] > 0) ans.push_back(arr[0]);
    for (int i = 1; i < n; i++){ 
        arr[i] += arr[i - 1];
		if(arr[i] > 0) ans.push_back(arr[i]);
	}
    return ans;
}
```

## Identical Twins

For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

* [Practice](https://workat.tech/problem-solving/practice/identical-twins)

### Constant Space

```cpp
int getIdenticalTwinsCount(vector<int> &arr) {
    int ans = 0, n(arr.size());
	for(int i=0; i<n; i++)
		for(int j=i+1; j<n; j++)
			if(arr[i] == arr[j]) ans++;
	return ans;
}
```

### Linear Time

```cpp
int getIdenticalTwinsCount(vector<int> &arr) {
   unordered_map<int, int> freq;
   int ans = 0;

   for (auto x: arr) 
      freq[x]++;
   
   for (auto x: freq) 
      ans += (x.second * (x.second - 1) / 2);

    return ans;
}
```

## Even Number of Digits

Given an array of integers, find the elements which have an even number of digits.

* [Practice](https://workat.tech/problem-solving/practice/even-number-of-digits)

```cpp
vector<int> getEvenDigitNumbers(vector<int> &arr) {
    int len(arr.size());
	vector<int> ans;
	for(int i=0; i<len; i++){
		int digits = 0, num = arr[i];
		string str = to_string(num);
		if(!(str.length() & 1)) ans.push_back(arr[i]);
	}
	return ans;
}
```

```cpp
int getDigitCount(int n) {
   int count = 0;
   if(n == 0) {
       return 1;
   }
   while (n > 0) {
       count++;
       n /= 10;
   }
   return count;
}

vector<int> getEvenDigitNumbers(vector<int> &arr) {
   vector<int> evenDigitList;
   for (int x: arr) {
       if(getDigitCount(x) % 2 == 0) {
           evenDigitList.push_back(x);
       }
   }
   return evenDigitList;
}
```

## Implement Insertion Sort

Given an array, sort it using insertion sort.

* [Practice](https://workat.tech/problem-solving/practice/implement-insertion-sort)

```cpp
void insertionSort(vector<int> &arr) {
    int i, key, j, n(arr.size());
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;
		
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

## Merge Two Sorted Arrays

Given two sorted arrays **A** and **B**, find the merged sorted array **C** by merging **A** and **B**.

```cpp
vector<int> mergeSortedArrays(vector<int> &A, vector<int> B) {
    
	int i(0), j(0), k(0), n(A.size()), m(B.size());
	vector<int> C(n+m);
	
	while(i<n && j<m){
		if(A[i] <= B[j])
			C[k++] = A[i++];
		else
			C[k++] = B[j++];
	}
	
	while(i<n)
		C[k++] = A[i++];
	
	while(j<m)
		C[k++] = B[j++];
	
	return C;
}
```

## Merge Sorted Subarrays

Consider an array that is divided into two parts and both of the parts are sorted individually. Given the mentioned array and the end index of the first part, merge them to create a sorted array. Update the same array with the merged elements. You can use extra auxiliary space.

> Expected Time Complexity: **O(n)** where n denotes the size of the array.

* [Practice](https://workat.tech/problem-solving/practice/merge-sorted-subarrays/editorial)

```cpp
void merge(vector<int> &arr, int endIndex) {
	int i(0), j(endIndex+1), k(0), n(arr.size());
	vector<int> C(n);
	
	while(i<=endIndex && j<n)
		if(arr[i] <= arr[j])
			C[k++] = arr[i++];
		else
			C[k++] = arr[j++];
	
	while(i<=endIndex)
		C[k++] = arr[i++];
	
	while(j<n)
		C[k++] = arr[j++];
	
	arr = C;
}
```

## Square sorted array

Given an array of numbers, return an array that contains the squares of all the numbers in non-decreasing order.

* [Practice](https://workat.tech/problem-solving/practice/square-sorted-array)

```cpp
vector<int> getSquareSortedArray(vector<int> &arr) {
	int n(arr.size());
	for(int i=0; i<n; i++)
		arr[i] *= arr[i];
	sort(arr.begin(), arr.end());
	return arr;
}
```

## Max Consecutive Ones

Given an array **A**, find the maximum number of consecutive **1s** in the array.

* [Practice](https://workat.tech/problem-solving/practice/max-consecutive-ones)

```cpp
int getMaxConsecutiveOnes(vector<int> &A) {
    int global_max(0), local_max(0);
	for(auto e:A){
		if(e == 1)
			local_max++;
		else{
			global_max = max(local_max, global_max);
			local_max = 0;
		}
	}
	return max(local_max, global_max);
}
```

## Arithmetic Sequence

An Arithmetic progression (AP) or arithmetic sequence is a sequence of numbers such that the difference between the consecutive terms is constant. For instance, the sequence 5, 7, 9, 11, 13, 15, . . . is an arithmetic progression with a common difference of 2.

Given an unsorted array, find if it can be reordered to form an arithmetic sequence.

* [Practice](https://workat.tech/problem-solving/practice/arithmetic-sequence)

```cpp
bool isArithmeticSequence(vector<int> &arr) {
    int n(arr.size()), maxi = INT_MIN, mini = INT_MAX;
	unordered_map<int, int> ump;
	for(auto e: arr){
		if(e>maxi) maxi = e;
		if(e<mini) mini = e;
		ump[e]++;
	}
	
	int d = (maxi - mini) / (n - 1);
	
	while(maxi > mini){
		if(!ump[maxi])
			return false;
		maxi -= d;
	}
	
	return true;
}
```

## Largest Contiguous Sum

A subarray is a part of an array including one or more contiguous/adjacent elements.

* [Practice](https://workat.tech/problem-solving/practice/largest-contiguous)

```cpp
int largestContiguousSum(vector <int> &arr){
  	int ans(INT_MIN), sum(0);
	for(auto e: arr){
		sum += e;
		ans = max(ans, sum);
		if(sum < 0)  sum = 0;
	}
	return ans;
}
```

## Pascal's Triangle

The triangle below is known as Pascal’s triangle.

![pascal triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In this triangle, the value at a position is equal to the sum of values of the 2 elements just above it.

* [Practice](https://workat.tech/problem-solving/practice/pascals-triangle)

```cpp
vector<int> pascalTriangleRow(int row) {
	int N = row-1, prev = 1;
	vector<int> ans = {1};
    
    for (int i = 1; i <= N; i++) {
        prev = (prev * (N - i + 1)) / i;
		ans.push_back(prev);
    }
	return ans;
}
```

## Contains Element?

Given a sorted array and a number key, return whether the key is present in the array or not.

* [Practice](https://workat.tech/problem-solving/practice/contains-element)

```cpp
bool containsElement(vector<int> &arr, int key) {
    int mid, l(0), r(arr.size());
	while(l<r){
		mid = l + (r -l)/2;
		if(arr[mid] == key) return true;
		if(arr[mid] < key) l = mid + 1;
		else r = mid;
	}
	return false;
}
```

## Contains Element?

Given a sorted array and a number key, find the index of the first and last occurrence of the key in the array.

> If the key is not present, return [-1, -1].


* [Practice](https://workat.tech/problem-solving/practice/search-range)

```cpp
bool containsElement(vector<int> &arr, int key) {
    int mid, l(0), r(arr.size());
	while(l<r){
		mid = l + (r -l)/2;
		if(arr[mid] == key) return true;
		if(arr[mid] < key) l = mid + 1;
		else r = mid;
	}
	return false;
}
```
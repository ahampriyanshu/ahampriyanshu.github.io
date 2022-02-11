---
title: "Array | 6 Months DSA Sheet | Work@Tech"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, DSA]
tags: [work, at, tech, dsa, sheet, six, month, vector, array, string, Accenture, Cisco, Dell, Grofers, Juniper Networks, MAQ Software , Veritas ]
mermaid: true
---

C++ Solutions to six month dsa sheets, Leetcode.

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

### O(1) Space Complexity

```cpp
int getIdenticalTwinsCount(vector<int> &arr) {
    int ans = 0, n(arr.size());
	for(int i=0; i<n; i++)
		for(int j=i+1; j<n; j++)
			if(arr[i] == arr[j]) ans++;
	return ans;
}
```

### O(n) Time Complexity

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

### Input Format

First-line contains an integer ‘T’ denoting the number of test cases.

For each test case the input has three lines:
* Two space-separated integers ‘n’ and ‘m’ denoting the length of the array A and B respectively.
* n space-separated integers denoting the elements of the array A.
* m space-separated integers denoting the elements of the array B.

### Output Format
For each test-case, the output has a line with n+m space separated integers denoting the elements of the array C.

### Sample Input
```2
5 2
1 3 3 4 4
5 6
6 2
1 3 3 3 3 4
9 11
```

### Expected Output
```1 3 3 4 4 5 6
1 3 3 3 3 4 9 11
```

### Constraints
```1 <= T <= 100
1 <= n, m <= 104
1 <= Ai, Bi <= 105
```

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
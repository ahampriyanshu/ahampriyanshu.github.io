---
title: "Algorithms Part 1: Sorting"
author: Priyanshu Tiwari
excerpt: Merge, Quick, Radix, Bubble, Heap, Shell, Bucket Sort
categories:
  - 'algorithms'
tags:
  - 'algorithms'
  - 'c++'
  - 'merge'
  - 'quick'
  - 'bubble'
  - 'sort'
---

## Merge Sort

Merge sort is a divide-and-conquer, comparison-based sorting algorithm.

Conceptually, a merge sort works as follows:

- Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
- Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.[^1]

[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>

![loading](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

```cpp

void merge(int arr[], int start, int mid, int end) {

	int temp[end - start + 1];

	int i = start, j = mid, k = 0;

	while(i < mid && j <= end) 
		if(arr[i] <= arr[j])
			temp[k++] = arr[i++];
		else
			temp[k++] = arr[j++];

	while(i < mid) 
		temp[k++] = arr[i++];

	while(j <= end) 
		temp[k++] = arr[j++];

	for(i = start; i <= end; i++)
		arr[i] = temp[i - start];
}


void mergeSort(int *arr, int start, int end) {

	if(start >= end) return; 

    int mid = start + (end-start)/2;
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merge(arr, start, mid, end);

}
```

Worst-case time complexity : ${\displaystyle O(n\log n)}O(n\log n)$

Best-case time complexity : ${\displaystyle \Omega (n\log n)}\Omega$

Average time complexity : ${\displaystyle \Theta (n\log n)}\Theta (n\log n)$

Worst-case space complexity : ${\displaystyle O(n)}O(n)$ 

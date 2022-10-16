---
title: "DSA Part 7: Searching & Sorting Algos"
author: ahampriyanshu
excerpt: Merge, Quick, Radix, Bubble, Heap, Shell, Bucket, Tim Sort
categories:
  - DSA
tags:
  - "data structures and algorithms"
  - "c++"
  - "merge"
  - "quick"
  - "bubble"
  - "sort"
---

## Sorting Algo

### Merge Sort

Merge sort is a divide-and-conquer, comparison-based sorting algorithm.

Conceptually, a merge sort works as follows:

- Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
- Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.[^1]

[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>

![loading](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

```cpp

void merge(int arr[], int start, int end) {

	int temp[end - start + 1];

	int i = start, j = start + (end-start)/2, k = 0;

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

|                             |                          |
| --------------------------- | ------------------------ |
| Worst-case time complexity  | $O(n \cdot log n)$       |
| Best-case time complexity   | $\Omega (n \cdot log n)$ |
| Average time complexity     | $\Theta (n \cdot log n)$ |
| Worst-case space complexity | $O(n \cdot log n)$       |

## Problems

### Aggressive Cows

Given an array of length ‘N’, where each element denotes the position of a stall. Now you have ‘N’ stalls and an integer ‘K’ which denotes the number of cows that are aggressive. To prevent the cows from hurting each other, you need to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. Return the largest minimum distance.

- [Practice](https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559)

```cpp
bool isPossible(vector<int> &stalls, int k, int mid){
    int cowCount = 1;
    int lastPosition = stalls[0];
    for(int i =0; i<stalls.size();i++){
	    if(stalls[i]-lastPosition >= mid){
            cowCount++;
            if(cowCount==k)
                return true;
            lastPosition = stalls[i];
        }
    }
    return false;
}

int aggressiveCows(vector<int> &stalls, int k)
{
    sort(stalls.begin(), stalls.end());

    int start = 0;
    int maxi=-1;
    for(int i =0; i<stalls.size(); i++){
        maxi = max(maxi,stalls[i]);
    }
    int end = maxi;
    int ans = -1;
    int mid  = start+(end-start)/2;

    while(start<=end){
        if(isPossible(stalls,k,mid)){
            ans = mid;
            start = mid+1;
        }
        else{
            end = mid-1;
        }
        mid = start+(end-start)/2;
    }
    return ans;
}
```

### Variation

We say that two integers x and y have a variation of at least K, if x − y ≥ K (the absolute value of their difference is at least K). Given a sequence of N integers a1,a2,...,aN and K, the total variation count is the number of pairs of elements in the sequence with variation at least K.

Your task is to write a program that takes a sequence and the value K as input and computes the total variation count.

- [Practice](https://www.codechef.com/ZCOPRAC/problems/ZCO15002)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int n, k;
	cin >> n >> k;
	int arr[n];
	for (int i=0; i<n; i++)
	    cin >> arr[i];

	  sort(arr, arr+n);
	  int i=0, j = 1, ans = 0;

	  while(j<n){
	      if(arr[j] - arr[i] >= k){
	          ans += (n-j);
	          i++;
	      } else j++;
	  }

	  cout << ans << endl;
	return 0;
}
```

### Count Inversions

For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum.

Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

- [Practice](https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1)

```cpp
class Solution{
  public:

    long long merge(long long arr[], long long start, long long mid, long long end) {

    long long inversions = 0, i = start, j = mid, k = 0;
	long long temp[end - start + 1];

	while(i < mid && j <= end){
		if(arr[i] <= arr[j])
			temp[k++] = arr[i++];
		else {
			temp[k++] = arr[j++];
			inversions += mid - i;
		}
	}

	while(i < mid)
		temp[k++] = arr[i++];

	while(j <= end)
		temp[k++] = arr[j++];

	for(i = start; i <= end; i++)
		arr[i] = temp[i - start];

	return inversions;
}


    long long merge_sort(long long A[], long long left, long long right){

        if(left >= right) return 0;

        long long mid = left + (right-left)/2;
        return merge_sort(A, left, mid) + merge_sort(A, mid+1, right) +  merge(A, left, mid+1, right);
    }

    long long int inversionCount(long long A[], long long N)
    {
        return merge_sort(A, 0, N-1);
    }

};
```

### Chef Restaurant

Chef is a cook and he has recently opened a restaurant.

The restaurant is open during N time intervals [L1,R1),[L2,R2),…,[LN,RN). No two of these intervals overlap — formally, for each valid i, j such that i≠j, either Ri < Lj or Rj < Li.

M people (numbered 1 through M) are planning to eat at the restaurant; let's denote the time when the i-th person arrives by Pi. If the restaurant is open at that time, this person does not have to wait, but if it is closed, this person will wait until it is open. Note that if this person arrives at an exact time when the restaurant is closing, they have to wait for the next opening time.

For each person, calculate how long they have to wait (possibly 0 time), or determine that they will wait forever for the restaurant to open.

- [Practice](https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559)

```cpp
    #include <bits/stdc++.h>
    using namespace std;

    int main() {
    	int t;
    	cin >> t;
    	while(t--){
    	    int n, m;
    	    cin >> n >> m;
    	    vector<pair<int, int>> intervals;

    	    for (int i =0; i<n; i++) {
    	        int start, end;
    	        cin >> start >> end;
    	        intervals.push_back(make_pair(start, end));
    	    }

    	    sort(intervals.begin(), intervals.end());

    	    while(m--){
    	        int curr;
    	        cin >> curr;
    	        int pos = lower_bound(intervals.begin(), intervals.end(), make_pair(curr, 0)) - intervals.begin();
    	        if(pos == 0) cout << intervals[0].first - curr << endl;
    	        else {
    	            int ans = -1;
    	            if(intervals[pos-1].second > curr) ans = 0;
    	            else if (pos < intervals.size()){
    	               ans = intervals[pos].first - curr;
    	            }
    	            cout << ans << endl;
    	        }
    	    }
    	}
    	return 0;
    }
```

### Murder

Once detective Saikat was solving a murder case. While going to the crime scene he took the stairs and saw that a number is written on every stair. He found it suspicious and decides to remember all the numbers that he has seen till now. While remembering the numbers he found that he can find some pattern in those numbers. So he decides that for each number on the stairs he will note down the sum of all the numbers previously seen on the stairs which are smaller than the present number. Calculate the sum of all the numbers written on his notes diary.

```cpp
#include<bits/stdc++.h>
using namespace std;

long long merge(long long arr[], long long start, long long mid, long long end) {

    long long ans = 0, i = start, j = mid, k = 0;
	long long temp[end - start + 1];

	while(i < mid && j <= end){
		if(arr[i] <= arr[j]){
			ans += arr[i]*(end-j+1)
			temp[k++] = arr[i++];
		}
		else
			temp[k++] = arr[j++];
	}

	while(i < mid)
		temp[k++] = arr[i++];

	while(j <= end)
		temp[k++] = arr[j++];

	for(i = start; i <= end; i++)
		arr[i] = temp[i - start];

	return inversions;
}


long long merge_sort(long long A[], long long left, long long right){

    if(left >= right) return 0;

    long long mid = left + (right-left)/2;
    return merge_sort(A, left, mid) + merge_sort(A, mid+1, right) +  merge(A, left, mid+1, right);
}

int main() {
int t;
    cin>>t;
    for(int i=0;i<t;i++)
    {
        long long n;
        cin>>n;
        int arr[n];
        for(int j=0;j<n;j++)
            cin>>arr[j];
        cout<<merge_sort(arr,0,n-1)<<endl;
    }
	// Write your code here
}
```

### Distribute Candies

Shaky has N (1<=N<=50000) candy boxes each of them contains a non-zero number of candies (between 1 and 1000000000). Shaky want to distibute these candies among his K (1<=K<=1000000000) IIIT-Delhi students. He want to distibute them in a way such that:

- All students get equal number of candies.
- All the candies which a student get must be from a single box only.

As he want to make all of them happy so he want to give as many candies as possible. Help Shaky in finding out what is the maximum number of candies which a student can get.

```cpp
#include<bits/stdc++.h>
using namespace std;
int main() {
    int t;
    cin>>t;
    while(t--)
    {int n,k;
     cin>>n;
      int arr[n],ans=0,s;
     cin>>k;
     long long max=0;
     for(int i=0;i<n;i++){
		cin>>arr[i];
        max = max(max, arr[i]);
    }

	long long start=0,end=max,mid;
	while(start<=end)
	{
		s=0;
	  	mid=start+(end-start)/2;
	   	for(int i=0;i<n;i++)
	       s+=(arr[i]/mid);
	 	if(s>=k){
			ans=mid;
	     	start=mid+1;
	 	}
	 	else
	    	end=mid-1;
	}
	cout<<ans<<endl;
    }
}
```

### Momos Market

Shreya loves to eat momos. Her mother gives her money to buy vegetables but she manages to save some money out of it daily. After buying vegetables, she goes to "Momos Market", where there are ‘n’ number of shops of momos. Each of the shops of momos has a rate per momo. She visits the market and starts buying momos (one from each shop) starting from the first shop. She will visit the market for ‘q’ days. You have to tell that how many momos she can buy each day if she starts buying from the first shop daily. She cannot use the remaining money of one day on some other day. But she will save them for other expenses in the future, so, you also need to tell the sum of money left with her at the end of each day.

```cpp
#include<bits/stdc++.h>
using namespace std;
int main()
{
  long  int n;
    cin>>n;
int arr[n];
    long int s=0;
    for(int i=0;i<n;i++)
    {
        int m;
        cin>>m;
        s+=m;
        arr[i]=s;
    }
  long   int q;
    cin>>q;
    while(q--)
    {
        long long int r;
        cin>>r;
        long long int start=0,end=n-1,mid;
        long  int ans = -1;
     while(start<=end)
     {
         mid=start+(end-start)/2;
         if(arr[mid]<=r){
                ans = mid;
                start=mid+1;
            }
            else
                end=mid-1;
     }
     if(ans == -1)
        cout<<0<<" "<<r<<endl;
     else
     cout<<ans+1<<" "<<r-arr[ans]<<endl;
    }
	return 0;
}
```

### Taj Mahal Entry

Taj Mahal is one of the seven wonders of the world. Aahad loves to travel places and wants to visit Taj Mahal. He visited Agra to view Taj Mahal. There is a ticketing system at Taj Mahal. There are total ‘n’ windows which provide the tickets to get entry into Taj Mahal. There are ‘Ai’ people already present at each window to get the tickets. Each window gives ticket to one person in one minute. Initially, Aahad stands in front of the first window. After each minute, if he didn’t get the ticket, he moves on to the next window to get the ticket. If he is at window 1, he will move to 2. If at 2nd, he will move to 3rd. If he is at last window, he will move to 1st again and so on. Find the window number at which he will get the ticket.

```cpp
#include<bits/stdc++.h>
using namespace std;
int main()
{
   long n;
    cin>>n;
    long long arr[n];
    for(long i=0;i<n;i++)
        cin>>arr[i];
    for(long i=0;i<n;i++)
    {long long m=arr[i]-i;
     if(m<0)
         m=0;
        long long t=(m)/(n);
        if((m)%n!=0)
            t++;
     if(t<0)
         t=0;
        arr[i]=(t*n)+i;

     }
    long long min=arr[0];
    long int m=0;
     for(long i=0;i<n;i++)
    {
         if(arr[i]<min)
    {
        min=arr[i];
        m=i;
    }}

        cout<<m+1;
	return 0;
}
```

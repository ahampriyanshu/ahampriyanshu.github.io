---
title: "InfyTQ Certification Round | Infosys | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Infytq]
tags: [live, contest, infosys, infytq, certification, round]
---

All of the accepted/partially-accepted solutions for InfyTQ Certification Round ,February 2022.

> All the submissions are posted only when the contest is already over.
{: .prompt-warning }


## Morning Shift : 8 Feb

### Problem 1

Consider the following inputs:

* A square, inmatrix containing at least one non-zero value and inmatrix of size nxn where n > 0.
* An integer value, innum where 1 <= innum <= n.

Identify and print a string outstr based on the below logic:

* Identify the min non-zero sum, minsum and maxsum.
* Form a string in format minsum:maxsum.
* If the value of minsum and maxsum are equal, then print minsum.

> The basic logic was to skip to the end of the line after reading the value of n and innum scan and then read 'n' input strings, split them, convert them to form a 2D integer matrix.
{: .prompt-note }


```java
import java.io.*;
import java.util.*;

class Main
{
     
    public static void main (String[] args)
    {
       Scanner sc=new Scanner(System.in);
       int n=sc.nextInt();
       int innum=sc.nextInt();  
       sc.nextLine(); 
       
       int matrix[][]=new int[n][n];
       
       for(int i=0; i<n;i++)
        {
        String temp = sc.nextLine();
        String str[] = temp.split(",");
        for(int j=0; j<n;j++)
            matrix[i][j] =  Integer.parseInt(str[i]);
        }
 
        int maxi = Integer.MIN_VALUE;
        int mini = Integer.MAX_VALUE;
    
 
        for (int i = 0; i <= n-innum; i++) {
     
            for (int j = 0; j <= n-innum; j++) {
                
                int localSum = 0;
     
                for (int k = i; k < i+innum; k++) 
                    for (int l = j; l < j+innum; l++) 
                        localSum += matrix[k][l];
                
                maxi = Math.max(maxi, localSum);
                if(localSum > 0 && localSum < mini) mini = localSum;
            }
        }
    
        if(maxi == mini)
        System.out.println(mini);
         else
        System.out.println(mini + ":" + maxi);
    }
}
```

### Problem 2

Given a non-empty array of integers inarr, identify and print an integer outnum based on the below logic:

* Considering inarr to be circular array, identify the subarray(s) formed with contiguously placed elements in an array which lead the maximum sum of the arrays.
* Assign the maximum sum to outnum.

> The basic logic was to scan the whole input as buffer convert it into array of type Long to avoid overflow.
{: .prompt-note }


```java
import java.io.*;
import java.util.*;

class Main
{
     
    public static void main (String[] args)  throws java.lang.Exception
    {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
    String str[] = br.readLine().split(",");
    Long n = str.length;
    Long arraysum=0 ;
    Long arr[] = new Long[n];
    
    for (Long i=0; i<n; i++)
    {
        arr[i] = Long.parseLong(str[i]);
        arraysum+=arr[i] ;
    } 

    Long sum=0;
    Long ans=arr[0] ;
    for (Long i=0; i<n; i++)
    {
        sum+=arr[i] ;
        ans=Math.max(sum,ans) ;
        if(sum<=0) sum=0 ;
    }

    Long temp[] = new Long[n];
    for (Long i=0; i<n; i++)
    {
        temp[i]=-arr[i] ;
    }

    sum=0 ;
    Long res=temp[0] ;
    for (Long i=0; i<n; i++)
    {
        
        sum+=temp[i] ;
        res=Math.max(sum,res) ;
        if(sum<=0)
            sum=0 ;

    }
    Long x=arraysum+res;
    System.out.println(Math.max(ans,x));
    }
}
```
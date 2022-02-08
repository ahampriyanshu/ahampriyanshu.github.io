---
title: "InfyTQ Certification Round | Infosys | 2022"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Infytq]
tags: [live, contest, infosys, infytq, certification, round, hash, set, array, string]
mermaid: true
---

All of the accepted/partially-accepted solutions for InfyTQ Certification Round, February 2022.

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

> The basic logic was to skip to the end of the line after reading the value of n and innum scan. Then read 'n' input strings, split them, convert them to form a 2D integer matrix.
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

> The basic logic was to scan the whole input as buffer and convert it into array of type Long to avoid overflow.
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
        temp[i]=-arr[i];

    sum=0;
    Long res=temp[0] ;
    for (Long i=0; i<n; i++)
    {
        sum+=temp[i] ;
        res=Math.max(sum,res) ;
        if(sum<=0)
            sum=0;
    }
    Long x=arraysum+res;
    System.out.println(Math.max(ans,x));
    }
}
```

## Evening Shift : 8 Feb

### Problem 1

Consider two non-empty input strings of alphabets instr1, instr2 and a non zero positive integer innum.Generate and print the output string outstr based on the below logic:

* Starting from the leftmost alphabet, identify innum number of alphabets from instr1 and instr2

* Add the identified alphabets from instr1 followed by instr2 to outstr

* Repeat the above two steps, identifying and the subsequent innum number of alphabets from instr1 and instr2 until either instr1 or instr2 or both have less than innum characters left for processing

* Add the remaining alphabets (if any) in instr1 followed by remaining alphabets (if any) in instr2 to the end of outstr

* If innum is greater than the total number of alphabets in any of the input strings, then take both input strings completely and process in the same order.

> The basic logic was to create a hash array to sort the string in O(n) time complexity.
{: .prompt-note }

```java
import java.util.*;
import java.io.*;

public class myCode {
    static final int SIZE = 26;
    public static void main(String[] args) throws java.lang.Exception {

        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String vow = "", con = "";
        int n = str.length();
        int[] hash = new int[SIZE];

        for (int i = 0; i < n; i++)
            hash[str.charAt(i) - 'a']++;

        for (int i = 0; i < SIZE; i++) {
            int freq = hash[i];
            char ch = (char)(i + 97);

            if (freq > 0) {
                String temp = "";

                while (freq-- > 0)
                    temp += ch;

                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                    vow += temp;
                else 
                    con += temp;
            }
        }

        int vowLen = vow.length(), conLen = con.length();

        if (vowLen > 0) {
            System.out.print(vow, str.indexOf(vow.charAt(0)));
        else
            System.out.print("NA-1");

        if (conLen > 0) 
            System.out.print(con, str.lastIndexOf(con.charAt(conLen - 1)));
        else 
            System.out.print("NA-1");
        

    }
}
```

![Results](/assets/img/posts/infytq-08-01.jpg){: .shadow }

### Problem 2

Consider a non-empty string instr consisting of only lower-case alphabets. Identify and print the string outstr, based on the below logic:

- Identify all the vowels in instr and add them to outstr in lexicographical order

- Considering the first vowel fvowel in outstr, find the index of the first occurrence of fvowel in instr and append it to outstr.
    - If there is no vowel in instr add "NA" and append "-1" in place of index. Identify all the consonants in instr and append them to outstr in lexicographical order

- Considering the last consonant Iconsonant in outstr, find the index of the last occurrence of Iconsonant in instr and add it to outstr.
    - If there is no consonant in instr add "NA" and append-1" in place of index.

> Note Lexicographical order is tabcde....xyz"

> The basic logic was to use the substring method of the String class.
{: .prompt-note }

```java
import java.util.*;
import java.io.*;

class myCode {


    public static void main(String[] args) throws java.lang.Exception {

        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        int num = sc.nextInt();
        int len1 = s1.length();
        int len2 = s2.length();
        int a = 0;
        int b = 0;
        while (len1 >= num && len2 >= num) {
            String temp1 = s1.substring(a,a + num );
            System.out.print(temp1);
            a += num;
            len1 -= num;
            String temp2 = s2.substring(b,b + num );
            System.out.print(temp2);
            b += num;
            len2 -= num;
        }

        if (len1 == 0 && len2 == 0) return;
        else  System.out.print(s1.substring(a) + s2.substring(b));
    }
}
```

![Results](/assets/img/posts/infytq-08-02.jpg){: .shadow }

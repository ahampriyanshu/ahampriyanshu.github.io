---
title: "20 - 29 | 30 Days of Code | Hackerrank"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Hackerrank]
tags: [hackerrank, '30 days of code', 'c++', 'cpp', 'c', 'js', 'java', 'python']
---

Solutions to HackerRank 30 Days Of Code from Day 20 to 29 in C, C++, JS, Java, Python and Swift.

## Day 20 : Sorting

* [Problem Statement](https://www.hackerrank.com/challenges/30-sorting/problem)

### CPP
```cpp
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

int main()
{
    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));

    string a_temp_temp;
    getline(cin, a_temp_temp);

    vector<string> a_temp = split(rtrim(a_temp_temp));

    vector<int> a(n);
 
    for (int i = 0; i < n; i++) {
        int a_item = stoi(a_temp[i]);

        a[i] = a_item;
    }
    
    int numberOfSwaps =0;
    for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
            numberOfSwaps++;
        }
    }
    
    if (numberOfSwaps == 0) {
        break;
    }
}

    cout << "Array is sorted in " << numberOfSwaps <<" swaps.\n" << "First Element: " 
    << a[0] << "\nLast Element: " << a[n-1];

    // Write your code here

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}
```

### C
```c
#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main() {
    int n; 

    scanf("%d", &n);

    int *a = malloc(sizeof(int) * n);

    for(int a_i = 0; a_i < n; a_i++){
       scanf("%d", &a[a_i]);
    }
    
    int numberOfSwaps = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                int temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
                numberOfSwaps++;
            }
        }
        if (numberOfSwaps == 0) break;
    }

    printf("Array is sorted in %d swaps.\nFirst Element: %d\nLast Element: %d\n",            numberOfSwaps, a[0], a[n - 1]);
    return 0;
}
```

### Java
```java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> a = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

    int numberOfSwaps =0;
    for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        if (a.get(j) > a.get(j+1)) {
            Collections.swap(a, j, j+1);  
            numberOfSwaps++;
        }
    }
    
    if (numberOfSwaps == 0) {
        break;
    }
}

    System.out.println( "Array is sorted in " + numberOfSwaps +" swaps.\n" + "First Element: " + a.get(0) + "\nLast Element: " + a.get(n-1) );

        bufferedReader.close();
    }
}
```

### Javascript
```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    let numberOfSwaps = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
                numberOfSwaps++;
            }
        }
        if (numberOfSwaps == 0) break;
    }
    console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[n-1]}\n`)
}
```

### Python
```python
#!/bin/python3
import math
import os
import random
import re
import sys


if __name__ == '__main__':
    n = int(input().strip())
    a = list(map(int, input().rstrip().split()))
    numberOfSwaps = 0;
    for i in range(n):
        for j in range(n-1):
            if a[j] > a[j + 1]:
                temp = a[j + 1]
                a[j + 1] = a[j]
                a[j] = temp
                numberOfSwaps += 1        
        if numberOfSwaps == 0 : break

print("Array is sorted in {} swaps.\nFirst Element: {}\nLast Element: {}\n".format(numberOfSwaps,a[0],a[n-1]))
```

## Day 21 : Generics

* [Problem Statement](https://www.hackerrank.com/challenges/30-generics/problem)

### CPP
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

template <typename T>
void printArray(vector<T> arr){
for(auto& e : arr) cout << e << endl;
}

int main() {
	int n;
	
	cin >> n;
	vector<int> int_vector(n);
	for (int i = 0; i < n; i++) {
		int value;
		cin >> value;
		int_vector[i] = value;
	}
	
	cin >> n;
	vector<string> string_vector(n);
	for (int i = 0; i < n; i++) {
		string value;
		cin >> value;
		string_vector[i] = value;
	}

	printArray<int>(int_vector);
	printArray<string>(string_vector);

	return 0;
}
```

### Java
```java
import java.util.*;

class Printer <T> {
public static < E > void printArray( E[] inputArray ) {
      for(E elem : inputArray) {
         System.out.printf("%s\n", elem);
      }
   }
}

public class Generics {
    
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        Integer[] intArray = new Integer[n];
        for (int i = 0; i < n; i++) {
            intArray[i] = scanner.nextInt();
        }

        n = scanner.nextInt();
        String[] stringArray = new String[n];
        for (int i = 0; i < n; i++) {
            stringArray[i] = scanner.next();
        }
        
        Printer<Integer> intPrinter = new Printer<Integer>();
        Printer<String> stringPrinter = new Printer<String>();
        intPrinter.printArray( intArray  );
        stringPrinter.printArray( stringArray );
        if(Printer.class.getDeclaredMethods().length > 1){
            System.out.println("The Printer class should only have 1 method named printArray.");
        }
    } 
}
```

## Day 22 : Binary Search Trees 

* [Problem Statement](https://www.hackerrank.com/challenges/30-binary-search-trees/problem)

### CPP
```cpp
#include <iostream>
#include <cstddef>

using namespace std;	

class Node{
    public:
        int data;
        Node *left;
        Node *right;
        Node(int d){
            data = d;
            left = NULL;
            right = NULL;
        }
};
class Solution{
    public:
  		Node* insert(Node* root, int data) {
            if(root == NULL) {
                return new Node(data);
            }
            else {
                Node* cur;
                if(data <= root->data){
                    cur = insert(root->left, data);
                    root->left = cur;
                }
                else{
                    cur = insert(root->right, data);
                    root->right = cur;
               }

               return root;
           }
        }
		int getHeight(Node* root){
        if(root==NULL) return -1;
        return 1+max(getHeight(root->left),getHeight(root->right));
        }

}; //End of Solution

int main() {
    Solution myTree;
    Node* root = NULL;
    int t;
    int data;

    cin >> t;

    while(t-- > 0){
        cin >> data;
        root = myTree.insert(root, data);
    }
    int height = myTree.getHeight(root);
    cout << height;

    return 0;
}
```

### C
```c
#include <stdio.h>
#include <stdlib.h>
typedef struct Node{
    struct Node* left;
    struct Node* right;
    int data;
}Node;
Node* newNode(int data){
    Node* node=(Node*)malloc(sizeof(Node));
    node->left=node->right=NULL;
    node->data=data;
    return node;
}

#define max(x, y) (((x) > (y)) ? (x) : (y))

int getHeight(Node* root){
if(root==NULL) return -1;
return 1+max(getHeight(root->left),getHeight(root->right));
}
Node* insert(Node* root,int data){
    if(root==NULL)
        return newNode(data);
    else{
        Node* cur;
        if(data<=root->data){
            cur=insert(root->left,data);
            root->left=cur;                
        }
        else{
            cur=insert(root->right,data);
            root->right=cur;
        }
        
    }
    return root;
}
int main(){
    Node* root=NULL;
    int T,data;
    scanf("%d",&T);
    while(T-->0){
        scanf("%d",&data);
        root=insert(root,data);
    }
    int height=getHeight(root);
    printf("%d",height);
    return 0;
    
}
```

### Java
```java
import java.util.*;
import java.io.*;
class Node{
    Node left,right;
    int data;
    Node(int data){
        this.data=data;
        left=right=null;
    }
}

class Solution{
    
    public static int getHeight(Node root){
    if(root==null) return -1;
    return 1+Math.max(getHeight(root.left),getHeight(root.right));
    }

    public static Node insert(Node root,int data){
        if(root==null){
            return new Node(data);
        }
        else{
            Node cur;
            if(data<=root.data){
                cur=insert(root.left,data);
                root.left=cur;
            }
            else{
                cur=insert(root.right,data);
                root.right=cur;
            }
            return root;
        }
    }
    public static void main(String args[]){
            Scanner sc=new Scanner(System.in);
            int T=sc.nextInt();
            Node root=null;
            while(T-->0){
                int data=sc.nextInt();
                root=insert(root,data);
            }
            int height=getHeight(root);
            System.out.println(height);
        }   
}
```

### Javascript
```javascript
// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
    if(root==null) return -1
    return 1+Math.max(this.getHeight(root.left),this.getHeight(root.right))
    }; // End of function getHeight
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    console.log(tree.getHeight(root));
});
```

### Python
```python
class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data
class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root
    
    def getHeight(self,root):
        if root==None: return -1;
        return 1+max(self.getHeight(root.left),self.getHeight(root.right));

T=int(input())
myTree=Solution()
root=None
for i in range(T):
    data=int(input())
    root=myTree.insert(root,data)
height=myTree.getHeight(root)
print(height)       
```

## Day 23 : BST Level-Order Traversal

* [Problem Statement](https://www.hackerrank.com/challenges/30-binary-trees/problem)

### CPP
```cpp
#include <iostream>
#include <cstddef>
#include <queue>
#include <string>
#include <cstdlib>

using namespace std;	
class Node{
    public:
        int data;
        Node *left,*right;
        Node(int d){
            data=d;
            left=right=NULL;
        }
};
class Solution{
    public:
  		Node* insert(Node* root, int data){
            if(root==NULL){
                return new Node(data);
            }
            else{
                Node* cur;
                if(data<=root->data){
                    cur=insert(root->left,data);
                    root->left=cur;
                }
                else{
                   cur=insert(root->right,data);
                   root->right=cur;
                 }           
           return root;
           }
        }
    
	void levelOrder(Node * root){
        
    if (root == NULL)  return;

    queue<Node *> q;
    q.push(root);
 
    while (!q.empty())
    {
        Node *node = q.front();
        cout << node->data << " ";
        q.pop();

        if (node->left != NULL) q.push(node->left);
        if (node->right != NULL) q.push(node->right);
    }
	}

};//End of Solution
int main(){
    Solution myTree;
    Node* root=NULL;
    int T,data;
    cin>>T;
    while(T-->0){
        cin>>data;
        root= myTree.insert(root,data);
    }
    myTree.levelOrder(root);
    return 0;
}
```

### C
```c
#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct Node{
    struct Node* left;
    struct Node* right;
    int data;
}Node;
Node* newNode(int data){
    Node* node=(Node*)malloc(sizeof(Node));
    node->left=node->right=NULL;
    node->data=data;
    return node;
}
#define max(x, y) (((x) > (y)) ? (x) : (y))

int getHeight(Node* root){
if(root==NULL) return 0;
return 1+max(getHeight(root->left),getHeight(root->right));
}

void print(struct Node* root, int level){ 
    if (root == NULL)  return; 
    if (level == 1) {printf("%d ", root->data); return;} 
    print(root->left, level-1); 
    print(root->right, level-1); 
}
  
void levelOrder( struct Node *root) 
{
    int h = getHeight(root); 
    for (int i=1; i<=h; i++) print(root, i); 
}

Node* insert(Node* root,int data){
    if(root==NULL)
        return newNode(data);
    else{
        Node* cur;
        if(data<=root->data){
            cur=insert(root->left,data);
            root->left=cur;                
        }
        else{
            cur=insert(root->right,data);
            root->right=cur;
        }
        
    }
    return root;
}
int main(){
    Node* root=NULL;
    int T,data;
    scanf("%d",&T);
    while(T-->0){
        scanf("%d",&data);
        root=insert(root,data);
    }
    levelOrder(root);
    return 0;
    
}
```

### Java
```java
import java.io.*;
import java.util.*;
class Node{
    Node left,right;
    int data;
    Node(int data){
        this.data=data;
        left=right=null;
    }
}
class Solution{
	static void levelOrder(Node root){
        
        if (root == null) return;
        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            Node curr = q.remove();
            System.out.print(curr.data + " ");
            if (curr.left != null) q.add(curr.left);
            if (curr.right != null) q.add(curr.right);
        }
    }

	public static Node insert(Node root,int data){
        if(root==null){
            return new Node(data);
        }
        else{
            Node cur;
            if(data<=root.data){
                cur=insert(root.left,data);
                root.left=cur;
            }
            else{
                cur=insert(root.right,data);
                root.right=cur;
            }
            return root;
        }
    }
    public static void main(String args[]){
            Scanner sc=new Scanner(System.in);
            int T=sc.nextInt();
            Node root=null;
            while(T-->0){
                int data=sc.nextInt();
                root=insert(root,data);
            }
            levelOrder(root);
        }	
}
```

### Javascript
```javascript
// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {
    if (this.root == null) return
      let q = [root];
      while (q.length > 0) {
        let node = q.shift();
        process.stdout.write(node.data + " ");
        if (node.left)  q.push(node.left)
        if (node.right) q.push(node.right)
      }
      
	}; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
});
```

### Python
```python
import sys

class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data
class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root
        
    def levelOrder(self,root):
        from collections import deque
        if root is None: return
        q = deque()
        q.append(root)
        while q:
            node = q.popleft()
            print(node.data, end=" ")
            if node.left is not None: q.append(node.left)
            if node.right is not None: q.append(node.right)

T=int(input())
myTree=Solution()
root=None
for i in range(T):
    data=int(input())
    root=myTree.insert(root,data)
myTree.levelOrder(root)
```

## Day 24 : More Linked Lists

* [Problem Statement](https://www.hackerrank.com/challenges/30-linked-list-deletion/problem)

### CPP
```cpp
#include <cstddef>
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;	
class Node
{
    public:
        int data;
        Node *next;
        Node(int d){
            data=d;
            next=NULL;
        }
};
class Solution{
    public:
Node* removeDuplicates(Node *head){
    if (head == NULL || head->next == NULL) return head;
        Node *curr = head;
        while (curr->next != NULL )
            if (curr->data == curr->next->data) curr->next = curr->next->next;
            else curr = curr->next;
        return head;
}

          Node* insert(Node *head,int data)
          {
               Node* p=new Node(data);
               if(head==NULL){
                   head=p;  

               }
               else if(head->next==NULL){
                   head->next=p;

               }
               else{
                   Node *start=head;
                   while(start->next!=NULL){
                       start=start->next;
                   }
                   start->next=p;   

               }
                    return head;
                
            
          }
          void display(Node *head)
          {
                  Node *start=head;
                    while(start)
                    {
                        cout<<start->data<<" ";
                        start=start->next;
                    }
           }
};
			
int main()
{
	Node* head=NULL;
  	Solution mylist;
    int T,data;
    cin>>T;
    while(T-->0){
        cin>>data;
        head=mylist.insert(head,data);
    }	
    head=mylist.removeDuplicates(head);

	mylist.display(head);
		
}
```

### C
```c
#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

typedef struct Node
{
    int data;
    struct Node* next;
}Node;

Node* removeDuplicates(Node *head){
    if (head == NULL || head->next == NULL) return head;
      Node *curr = head;
      while (curr->next != NULL )
          if (curr->data == curr->next->data) curr->next = curr->next->next;
          else curr = curr->next;
      return head;
}

Node* insert(Node *head,int data)
{
  Node *p = (Node*)malloc(sizeof(Node));
  p->data = data;
  p->next=NULL;   
  
  if(head==NULL){
   head=p;  
  
  }
  else if(head->next==NULL)
  {
      head->next=p;
      
  }
  else{
  Node *start=head;
  while(start->next!=NULL)
    start=start->next;
  
  start->next=p;   
  
  }
      return head;
}
void display(Node *head)
{
	Node *start=head;
	while(start)
	{
		printf("%d ",start->data);
		start=start->next;
	}
}
int main()
{
	int T,data;
    scanf("%d",&T);
    Node *head=NULL;	
    while(T-->0){
        scanf("%d",&data);
        head=insert(head,data);
    }
    head=removeDuplicates(head);
	display(head);
		
}
```

### Java
```java
import java.io.*;
import java.util.*;
class Node{
	int data;
	Node next;
	Node(int d){
        data=d;
        next=null;
    }
	
}
class Solution
{

    public static Node removeDuplicates(Node head) {
        if (head == null || head.next == null) return head;
        Node curr = head;
        while (curr.next != null )
            if (curr.data == curr.next.data) curr.next = curr.next.next;
            else curr = curr.next;
        return head;

    }

    public static  Node insert(Node head,int data)
    {
        Node p=new Node(data);			
        if(head==null)
            head=p;
        else if(head.next==null)
            head.next=p;
        else
        {
            Node start=head;
            while(start.next!=null)
                start=start.next;
            start.next=p;

        }
        return head;
    }
    public static void display(Node head)
        {
              Node start=head;
              while(start!=null)
              {
                  System.out.print(start.data+" ");
                  start=start.next;
              }
        }
        public static void main(String args[])
        {
              Scanner sc=new Scanner(System.in);
              Node head=null;
              int T=sc.nextInt();
              while(T-->0){
                  int ele=sc.nextInt();
                  head=insert(head,ele);
              }
              head=removeDuplicates(head);
              display(head);

       }
    }
```

### Javascript
```javascript
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

    this.removeDuplicates=function(head){
    if (head == null || head.next == null) return head;
    var curr = head
    while (curr.next != null )
        {if (curr.data == curr.next.data) curr.next = curr.next.next;
        else curr = curr.next;}
    return head;
    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		
```

### Python
```python
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None 
class Solution: 
    def insert(self,head,data):
            p = Node(data)           
            if head==None:
                head=p
            elif head.next==None:
                head.next=p
            else:
                start=head
                while(start.next!=None):
                    start=start.next
                start.next=p
            return head  
    def display(self,head):
        current = head
        while current:
            print(current.data,end=' ')
            current = current.next

    def removeDuplicates(self,head):
        if not head or not head.next : return head
        current = head
        while current.next:
            if current.data == current.next.data: current.next = current.next.next
            else: current = current.next
        return head

mylist= Solution()
T=int(input())
head=None
for i in range(T):
    data=int(input())
    head=mylist.insert(head,data)    
head=mylist.removeDuplicates(head)
mylist.display(head); 
```

## Day 25 : Running Time and Complexity

* [Problem Statement](https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem)

### CPP
```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

bool ifPrime(int number){
    if (number == 1) return false;
    for (int i=2; i*i <= number; i++) if (number % i == 0) return false; 
    return true;
}

int main() {
    int n, num;
    cin >> n;
    while(n--){
        cin >> num;
        if (ifPrime(num)) cout << "Prime\n"; 
        else cout << "Not prime\n";
    }  
    return 0;
}
```

### C
```c
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <stdbool.h>

bool ifPrime(int number){
    if (number == 1) return false;
    for (int i=2; i*i <= number; i++) if (number % i == 0) return false; 
    return true;
}

int main() {
    int n, num;
    scanf("%d", &n);
    while(n--){
        scanf("%d", &num);
        if (ifPrime(num)) printf("Prime\n"); 
        else printf("Not prime\n");
    }  
    return 0;
}

```

### Java
```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    public static boolean ifPrime(int number){
    if (number == 1) return false;
    for (int i=2; i*i <= number; i++) if (number % i == 0) return false; 
    return true;
}

    public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int n = scan.nextInt();
    while(n-->0){
        int num = scan.nextInt();
        if (ifPrime(num)) System.out.printf("Prime\n"); 
        else System.out.printf("Not prime\n");
    }  
    scan.close();
    }
}
```

### Javascript
```javascript
function ifPrime(number){
    if (number == 1) return false;
    for (let i=2; i*i <= number; i++) if (number % i == 0) return false; 
    return true;
}

function processData(input) {
    let n = input.split("\n")
    for(let t = 1; t<n.length ; t++ ){
        if (ifPrime(n[t])) console.log("Prime"); 
        else console.log("Not prime");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```

### Python
```python
import math

def ifPrime(number):
    if number == 1: return False
    for i in range(2, int(math.sqrt(number)) + 1): 
        if number % i == 0: return False
    return True

for _ in range(int(input())):
    if ifPrime(int(input())): print("Prime")
    else: print("Not prime")
```

## Day 26 : Nested Logic

* [Problem Statement](https://www.hackerrank.com/challenges/30-nested-logic/problem)

### CPP
```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int d1,d2,m1,m2,y1,y2,ans = 0;
    cin >> d1 >> m1 >> y1 >> d2 >> m2 >> y2;
    
    if (y1 > y2) ans = 10000;
    else if (y1 == y2) {
    if (m1 > m2) ans = 500 * (m1 - m2);
    else if (m1 == m2 &&d1 > d2) ans = 15 * (d1 - d2);      
    } 
    
    cout << ans << endl;
    return 0;
}
```

### C
```c
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int d1,d2,m1,m2,y1,y2,ans = 0;
    scanf("%d%d%d%d%d%d", &d1,  &m1,  &y1,  &d2,  &m2,  &y2);
    
    if (y1 > y2) ans = 10000;
    else if (y1 == y2) {
    if (m1 > m2) ans = 500 * (m1 - m2);
    else if (m1 == m2 &&d1 > d2) ans = 15 * (d1 - d2);      
    } 
    
    printf("%d", ans);
    return 0;
}
```

### Java
```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int d1 = scan.nextInt();
    int m1 = scan.nextInt();
    int y1 = scan.nextInt();
    int d2 = scan.nextInt();
    int m2 = scan.nextInt();
    int y2 = scan.nextInt();
    int ans = 0;
    if (y1 > y2) ans = 10000;
    else if (y1 == y2) {
    if (m1 > m2) ans = 500 * (m1 - m2);
    else if (m1 == m2 &&d1 > d2) ans = 15 * (d1 - d2);      
    }
    System.out.println(ans);
    scan.close(); 
    }
}
```

### Javascript
```javascript
function processData(input) {
    let data = input.split("\n");
    let ret = data[0].split(" ");
    let due = data[1].split(" ");
    let ans = 0;
    if (ret[2] > due[2]) ans = 10000;
    else if (ret[2] == due[2]) {
    if (ret[1] > due[1]) ans = 500 * (ret[1] - due[1]);
    else if (ret[1] == due[1] && ret[0] > due[0]) ans = 15 * (ret[0] - due[0]);      
    }
    console.log(ans);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```

### Python
```python
(d1, m1, y1) = [int(x.strip()) for x in input().split()]
(d2, m2, y2) = [int(x.strip()) for x in input().split()]

ans = 0
if y1 > y2: ans = 10000
elif y1 == y2:
    if m1 > m2: ans = 500 * (m1 - m2)
    elif m1 == m2 and d1 > d2: ans = 15 * (d1 - d2)  
print(ans)
```

## Day 27 : Testing

* [Problem Statement](https://www.hackerrank.com/challenges/30-testing/problem)

### CPP
```cpp
#include <algorithm>
#include <iostream>
#include <stdexcept>
#include <vector>
#include <cassert>
#include <set>

using namespace std;

int minimum_index(vector<int> seq) {
    if (seq.empty()) {
        throw invalid_argument("Cannot get the minimum value index from an empty sequence");
    }
    int min_idx = 0;
    for (int i = 1; i < seq.size(); ++i) {
        if (seq[i] < seq[min_idx]) {
            min_idx = i;
        }
    }
    return min_idx;
}
class TestDataEmptyArray {
public:
    static vector<int> get_array() {
        vector<int> vec{};
        return vec;
    }

};

class TestDataUniqueValues {
public:
    static vector<int> get_array() {
        vector<int> vec{ 2,1 };
        return vec;
    }

    static int get_expected_result(){ return 1; }

};

class TestDataExactlyTwoDifferentMinimums {
public:
    static vector<int> get_array() {
        vector<int> vec{ 2,1,1 };
        return vec;
    }

    static int get_expected_result(){ return 1; }

};

void TestWithEmptyArray() {
    try {
        auto seq = TestDataEmptyArray::get_array();
        auto result = minimum_index(seq);
    } catch (invalid_argument& e) {
        return;
    }
    assert(false);
}

void TestWithUniqueValues() {
    auto seq = TestDataUniqueValues::get_array();
    assert(seq.size() >= 2);

    assert(set<int>(seq.begin(), seq.end()).size() == seq.size());

    auto expected_result = TestDataUniqueValues::get_expected_result();
    auto result = minimum_index(seq);
    assert(result == expected_result);
}

void TestWithExactlyTwoDifferentMinimums() {
    auto seq = TestDataExactlyTwoDifferentMinimums::get_array();
    assert(seq.size() >= 2);

    auto tmp = seq;
    sort(tmp.begin(), tmp.end());
    assert(tmp[0] == tmp[1] and (tmp.size() == 2 or tmp[1] < tmp[2]));

    auto expected_result = TestDataExactlyTwoDifferentMinimums::get_expected_result();
    auto result = minimum_index(seq);
    assert(result == expected_result);
}

int main() {
    TestWithEmptyArray();
    TestWithUniqueValues();
    TestWithExactlyTwoDifferentMinimums();
    cout << "OK" << endl;
    return 0;
}
```

### Java
```java
import java.util.*;

public class Solution {

    public static int minimum_index(int[] seq) {
        if (seq.length == 0) {
            throw new IllegalArgumentException("Cannot get the minimum value index from an empty sequence");
        }
        int min_idx = 0;
        for (int i = 1; i < seq.length; ++i) {
            if (seq[i] < seq[min_idx]) {
                min_idx = i;
            }
        }
        return min_idx;
    }
    
    static class TestDataEmptyArray {
        public static int[] get_array() {
            return new int[]{};
        }
    }

    static class TestDataUniqueValues {
        public static int[] get_array() {
            return new int[]{2,1};
        }

        public static int get_expected_result() {
            return 1;
        }
    }

    static class TestDataExactlyTwoDifferentMinimums {
        public static int[] get_array() {
            return new int[]{2,1,1};
        }

        public static int get_expected_result() {
            return 1;
        }
    }

    
	public static void TestWithEmptyArray() {
        try {
            int[] seq = TestDataEmptyArray.get_array();
            int result = minimum_index(seq);
        } catch (IllegalArgumentException e) {
            return;
        }
        throw new AssertionError("Exception wasn't thrown as expected");
    }

    public static void TestWithUniqueValues() {
        int[] seq = TestDataUniqueValues.get_array();
        if (seq.length < 2) {
            throw new AssertionError("less than 2 elements in the array");
        }

        Integer[] tmp = new Integer[seq.length];
        for (int i = 0; i < seq.length; ++i) {
            tmp[i] = Integer.valueOf(seq[i]);
        }
        if (!((new LinkedHashSet<Integer>(Arrays.asList(tmp))).size() == seq.length)) {
            throw new AssertionError("not all values are unique");
        }

        int expected_result = TestDataUniqueValues.get_expected_result();
        int result = minimum_index(seq);
        if (result != expected_result) {
            throw new AssertionError("result is different than the expected result");
        }
    }

    public static void TestWithExactlyTwoDifferentMinimums() {
        int[] seq = TestDataExactlyTwoDifferentMinimums.get_array();
        if (seq.length < 2) {
            throw new AssertionError("less than 2 elements in the array");
        }

        int[] tmp = seq.clone();
        Arrays.sort(tmp);
        if (!(tmp[0] == tmp[1] && (tmp.length == 2 || tmp[1] < tmp[2]))) {
            throw new AssertionError("there are not exactly two minimums in the array");
        }

        int expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result();
        int result = minimum_index(seq);
        if (result != expected_result) {
            throw new AssertionError("result is different than the expected result");
        }
    }

    public static void main(String[] args) {
        TestWithEmptyArray();
        TestWithUniqueValues();
        TestWithExactlyTwoDifferentMinimums();
        System.out.println("OK");
    }
}
```

### Python
```python
def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")
    min_idx = 0
    for i in range(1, len(seq)):
        if seq[i] < seq[min_idx]:
            min_idx = i
    return min_idx

class TestDataEmptyArray():
    @staticmethod
    def get_array():
        return []

class TestDataUniqueValues():
    @staticmethod
    def get_array():
        return [2,1]

    @staticmethod
    def get_expected_result():
        return 1

class TestDataExactlyTwoDifferentMinimums():
    @staticmethod
    def get_array():
        return [2,1,1]

    @staticmethod
    def get_expected_result():
        return 1
        
        

def TestWithEmptyArray():
    try:
        seq = TestDataEmptyArray.get_array()
        result = minimum_index(seq)
    except ValueError as e:
        pass
    else:
        assert False


def TestWithUniqueValues():
    seq = TestDataUniqueValues.get_array()
    assert len(seq) >= 2

    assert len(list(set(seq))) == len(seq)

    expected_result = TestDataUniqueValues.get_expected_result()
    result = minimum_index(seq)
    assert result == expected_result


def TestiWithExactyTwoDifferentMinimums():
    seq = TestDataExactlyTwoDifferentMinimums.get_array()
    assert len(seq) >= 2
    tmp = sorted(seq)
    assert tmp[0] == tmp[1] and (len(tmp) == 2 or tmp[1] < tmp[2])

    expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result()
    result = minimum_index(seq)
    assert result == expected_result

TestWithEmptyArray()
TestWithUniqueValues()
TestiWithExactyTwoDifferentMinimums()
print("OK")

```

## Day 28 : RegEx, Patterns, and Intro to Databases

* [Problem Statement](https://www.hackerrank.com/challenges/30-regex-patterns/problem)

### CPP
```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int N;
    cin >> N;

    string email,name;
    vector<string> list;

    while(N--) {
    cin >> name >> email;
    if(regex_match(email, regex("(.*)@gmail.com")))
    list.push_back(name);
    }

    sort(list.begin(), list.end());   
    for(auto& user : list) cout << user << endl;
    return 0;
}
```

### C
```c
#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int cmp(const void *a, const void *b) {
    const char *s1 = *(const char **)a, *s2 = *(const char **)b;
    return strcmp(s1, s2);
}
    
int main(){
    int n, size = 0; 
    scanf("%d",&n);
    char *list[30];
    for(int i = 0; i < n; i++){
        char* name = (char *)malloc(20 * sizeof(char));
        char* email = (char *)malloc(50 * sizeof(char));
        scanf("%s %s",name,email);
        if(strcmp((email+strlen(email)-10), "@gmail.com") == 0) list[size++] = name;
    }
    qsort(list, size, sizeof(char *), cmp);
    for (int i=0;i!=size;++i) printf("%s\n", list[i]);
    return 0;
}
```

### Java
```java
import java.io.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        String regexPattern = "@gmail.com";
        Pattern p = Pattern.compile(regexPattern);
        List<String> list = new ArrayList<String>();
        for(int i = 0; i < N; i++){
            String firstName = in.next();
            Matcher m = p.matcher(in.next());
            if (m.find()) list.add(firstName); 
        }
        in.close();
        Collections.sort(list);
        for (String user : list) {
            System.out.println(user);
        }
    }
}
```

### Javascript
```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let N = parseInt(readLine());
    let patt = new RegExp("@gmail.com");
    let list = [];
    for(let i = 0;i < N; i++){
        let input = readLine().split(' ');
        let name  = input[0];
        let email = input[1];
        if(patt.test(email)) list.push(name)
    }
    
    list.sort().forEach(function(name){console.log(name)});
}
```

### Python
```python
#!/bin/python3
import sys
import re

list = []
pattern = re.compile('@gmail.com$')

for _ in range(int(input())):
    name,email = input().strip().split(' ')
    if pattern.search(email): list.append(name)
    
list.sort()
for user in list:
    print(user)
```

## Day 29 : Bitwise AND

* [Problem Statement](https://www.hackerrank.com/challenges/30-bitwise-and/problem)

### CPP
```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    cin >> t;
    int n, k;
    
    while(t--)
    {
        cin >> n >> k;
        vector<int> vec;
        int ans = 0;

        for(int i = 1; i <= n; i++) vec.push_back(i);

        for(int a = 0; a < n; a++){
        for(int b = a + 1; b < n; b++){
            int ab = vec[a] & vec[b];
            if(ab > ans && ab < k) ans = ab;
            }
        }

        cout << ans << endl;
    }

    return 0;
}
```

### C
```c
#include <assert.h>
#include <ctype.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* readline();
char* ltrim(char*);
char* rtrim(char*);
char** split_string(char*);

int parse_int(char*);

int bitwiseAnd(int n, int k) {
        int arr[1000];
        int ans = 0;

        for(int i = 0; i < n; i++) arr[i] = i+1;

        for(int a = 0; a < n; a++){
        for(int b = a + 1; b < n; b++){
            int ab = (arr[a] & arr[b]);
            if(ab > ans && ab < k) ans = ab;
            }
        }
    return ans;
}

int main()
{
    FILE* fptr = fopen(getenv("OUTPUT_PATH"), "w");

    int t = parse_int(ltrim(rtrim(readline())));

    for (int t_itr = 0; t_itr < t; t_itr++) {
        char** first_multiple_input = split_string(rtrim(readline()));

        int count = parse_int(*(first_multiple_input + 0));

        int lim = parse_int(*(first_multiple_input + 1));

        int res = bitwiseAnd(count, lim);

        fprintf(fptr, "%d\n", res);
    }

    fclose(fptr);

    return 0;
}

char* readline() {
    size_t alloc_length = 1024;
    size_t data_length = 0;

    char* data = malloc(alloc_length);

    while (true) {
        char* cursor = data + data_length;
        char* line = fgets(cursor, alloc_length - data_length, stdin);

        if (!line) {
            break;
        }

        data_length += strlen(cursor);

        if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') {
            break;
        }

        alloc_length <<= 1;

        data = realloc(data, alloc_length);

        if (!data) {
            data = '\0';

            break;
        }
    }

    if (data[data_length - 1] == '\n') {
        data[data_length - 1] = '\0';

        data = realloc(data, data_length);

        if (!data) {
            data = '\0';
        }
    } else {
        data = realloc(data, data_length + 1);

        if (!data) {
            data = '\0';
        } else {
            data[data_length] = '\0';
        }
    }

    return data;
}

char* ltrim(char* str) {
    if (!str) {
        return '\0';
    }

    if (!*str) {
        return str;
    }

    while (*str != '\0' && isspace(*str)) {
        str++;
    }

    return str;
}

char* rtrim(char* str) {
    if (!str) {
        return '\0';
    }

    if (!*str) {
        return str;
    }

    char* end = str + strlen(str) - 1;

    while (end >= str && isspace(*end)) {
        end--;
    }

    *(end + 1) = '\0';

    return str;
}

char** split_string(char* str) {
    char** splits = NULL;
    char* token = strtok(str, " ");

    int spaces = 0;

    while (token) {
        splits = realloc(splits, sizeof(char*) * ++spaces);

        if (!splits) {
            return splits;
        }

        splits[spaces - 1] = token;

        token = strtok(NULL, " ");
    }

    return splits;
}

int parse_int(char* str) {
    char* endptr;
    int value = strtol(str, &endptr, 10);

    if (endptr == str || *endptr != '\0') {
        exit(EXIT_FAILURE);
    }

    return value;
}
```

### Java
```java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

    public static int bitwiseAnd(int N, int K) {
        if ((K | (K - 1)) > N ) return (K - 2);
        return K - 1;

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        for (int tItr = 0; tItr < t; tItr++) {
            String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

            int count = Integer.parseInt(firstMultipleInput[0]);

            int lim = Integer.parseInt(firstMultipleInput[1]);

            int res = Result.bitwiseAnd(count, lim);

            bufferedWriter.write(String.valueOf(res));
            bufferedWriter.newLine();
        }

        bufferedReader.close();
        bufferedWriter.close();
    }
}
```

### Javascript
```javascript
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function bitwiseAnd(N, K) {
    if ((K | (K - 1)) > N ) return (K - 2);
    return K - 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const count = parseInt(firstMultipleInput[0], 10);

        const lim = parseInt(firstMultipleInput[1], 10);

        const res = bitwiseAnd(count, lim);

        ws.write(res + '\n');
    }

    ws.end();
}
```

### Python
```python
for i in range(int(input())):
    n, k = [int(x) for x in input().split()]
    if (k | (k - 1)) > n: print(k - 2)
    else: print(k - 1)
```
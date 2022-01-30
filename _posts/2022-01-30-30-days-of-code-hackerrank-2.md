---
title: "10 - 19 | 30 Days of Code | Hackerrank"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Hackerrank]
tags: [hackerrank, '30 days of code', 'c++', 'cpp', 'c', 'js', 'java', 'python']
---


## Day 10 : Binary Numbers

* [Problem Statement](https://www.hackerrank.com/challenges/30-binary-numbers/problem)

### CPP
```cpp
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);



int main()
{
    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));
    int ans = 0, series = 0;
    
    while(n>0)
    {
        if (n%2 == 1)         
            series++;
        else
            series = 0;   
        ans = max(ans, series);
        n = n/2;
    }
    cout << ans << endl;
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
#define MAX(x, y) (((x) > (y)) ? (x) : (y))
char* readline();
char* ltrim(char*);
char* rtrim(char*);

int parse_int(char*);



int main()
{
    int n = parse_int(ltrim(rtrim(readline())));
    int ans = 0, series = 0;
    
    while(n>0)
    {
        if (n%2 == 1)         
            series++;
        else
            series = 0;   
        ans = MAX(ans, series);
        n = n/2;
    }
    printf("%d\n", ans);
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
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());
        int ans = 0, series = 0;
        while(n>0)
        {
            if (n%2 == 1)         
                series++;
            else
                series = 0;   
            ans = Math.max(ans, series);
            n = n/2;
        }
        System.out.println(ans);
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
    var n = parseInt(readLine().trim(), 10);
    var ans = 0, series = 0;
    
    while(n>0)
    {
        if (n%2 == 1)
            series++
        else
            series = 0
            
        ans = Math.max(ans, series)
        n = parseInt(n/2)
    }
    console.log(ans);
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
    ans = 0
    series = 0
    
    while n>0 :
        if n%2 == 1 :
            series += 1
        else :
            series = 0 
        ans = max(ans, series)
        n = n //2
    
    print(ans)
```

## Day 11 : 2D Arrays

* [Problem Statement](https://www.hackerrank.com/challenges/30-2d-arrays/problem)

### CPP
```cpp
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);



int main()
{

    vector<vector<int>> arr(6);

    for (int i = 0; i < 6; i++) {
        arr[i].resize(6);

        string arr_row_temp_temp;
        getline(cin, arr_row_temp_temp);

        vector<string> arr_row_temp = split(rtrim(arr_row_temp_temp));

        for (int j = 0; j < 6; j++) {
            int arr_row_item = stoi(arr_row_temp[j]);

            arr[i][j] = arr_row_item;
        }
    }
    
    int ans = INT_MIN ;
    
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++)
        ans = max(ans, arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1]        [j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
    }
    cout << ans << endl;
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
#define MAX(x, y) (((x) > (y)) ? (x) : (y))
char* readline();
char* ltrim(char*);
char* rtrim(char*);
char** split_string(char*);

int parse_int(char*);



int main()
{

    int** arr = malloc(6 * sizeof(int*));

    for (int i = 0; i < 6; i++) {
        *(arr + i) = malloc(6 * (sizeof(int)));

        char** arr_item_temp = split_string(rtrim(readline()));

        for (int j = 0; j < 6; j++) {
            int arr_item = parse_int(*(arr_item_temp + j));

            *(*(arr + i) + j) = arr_item;
        }
    }
    
    int ans = INT_MIN ;
    
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++)
        ans = MAX(ans, arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +                   arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
    }
    printf("%d\n", ans);

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
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[][] = new int[6][6];
        for(int i=0; i < 6; i++){
            for(int j=0; j < 6; j++){
                arr[i][j] = sc.nextInt();
            }
        }
        
        int ans = Integer.MIN_VALUE;
        for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++)
        ans = Math.max(ans, arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + 
        arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
    }
        System.out.println(ans);
        sc.close();
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
  var arr = Array(6);
  var i,j;
  for (i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ');
    arr[i] = arr[i].map(Number);
  }

  var ans = -64;
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++)
    {ans = Math.max(ans, arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +                   arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])}
  }
  console.log(ans)
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

    arr = []
    ans = -64
    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split(' '))))

    for i in range(4):
        for j in range(4):
            ans = max(ans,arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
    print (ans)
```

## Day 12 : Inheritance

* [Problem Statement](https://www.hackerrank.com/challenges/30-inheritance/problem)

### CPP
```cpp
#include <iostream>
#include <vector>

using namespace std;


class Person{
	protected:
		string firstName;
		string lastName;
		int id;
	public:
		Person(string firstName, string lastName, int identification){
			this->firstName = firstName;
			this->lastName = lastName;
			this->id = identification;
		}
		void printPerson(){
			cout<< "Name: "<< lastName << ", "<< firstName <<"\nID: "<< id << "\n"; 
		}
	
};

class Student :  public Person{
private:
    vector<int> testScores;
public:
    Student(string firstName, string lastName, int id, vector<int> scores) : Person(firstName, lastName, id) {
        this->testScores = scores;
    }

    char calculate() {
        int total = 0;
        int n = testScores.size();
        for (int i = 0; i < n; i++)
        total += this->testScores[i];

        int avg = total / n;

        if (avg > 89) return 'O';
        if (avg > 79) return 'E';
        if (avg > 69) return 'A';
        if (avg > 54) return 'P';
        if (avg > 39) return 'D';
        return 'T';
    }
};

int main() {
	string firstName;
  	string lastName;
	int id;
  	int numScores;
	cin >> firstName >> lastName >> id >> numScores;
  	vector<int> scores;
  	for(int i = 0; i < numScores; i++){
	  	int tmpScore;
	  	cin >> tmpScore;
		scores.push_back(tmpScore);
	}
	Student* s = new Student(firstName, lastName, id, scores);
	s->printPerson();
	cout << "Grade: " << s->calculate() << "\n";
	return 0;
}
```

### Java
```java
import java.util.*;

class Person {
    protected String firstName;
    protected String lastName;
    protected int idNumber;
    
    Person(String firstName, String lastName, int identification){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    public void printPerson(){
        System.out.println("Name: " + lastName + ", " + firstName + "\nID: " + idNumber);
    }
     
}

class Student extends Person{
    private int[] scores;
   
    Student(String firstName, String lastName, int identification, int[] scores){ 
        super(firstName,lastName,identification);
        this.scores = scores; 
    }

    
    public char calculate (){
        
        int total = 0, n = scores.length;
        for (int i = 0; i < n; i++) {
            total += scores[i];
        }
        int avg = total / n;
        if (avg > 89) return 'O';
        if (avg > 79) return 'E';
        if (avg > 69) return 'A';
        if (avg > 54) return 'P';
        if (avg > 39) return 'D';
        return 'T';

    }
}
class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String firstName = scan.next();
        String lastName = scan.next();
        int id = scan.nextInt();
        int numScores = scan.nextInt();
        int[] testScores = new int[numScores];
        for(int i = 0; i < numScores; i++){
            testScores[i] = scan.nextInt();
        }
        scan.close();
        
        Student s = new Student(firstName, lastName, id, testScores);
        s.printPerson();
        System.out.println("Grade: " + s.calculate() );
    }
}
```

### Javascript
```javascript
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    
  constructor(firstName, lastName, identification, testScores) {
    super(firstName, lastName, identification)
    this.testScores = testScores
    }
  
   calculate() {
    var total = 0;
    this.testScores.forEach(score => { total += score })
    var avg = (total / this.testScores.length);
    if (avg > 89) return 'O';
    if (avg > 79) return 'E';
    if (avg > 69) return 'A';
    if (avg > 54) return 'P';
    if (avg > 39) return 'D';
    return 'T';
   }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
```

### Python
```python
class Person:
	def __init__(self, firstName, lastName, idNumber):
		self.firstName = firstName
		self.lastName = lastName
		self.idNumber = idNumber
	def printPerson(self):
		print("Name:", self.lastName + ",", self.firstName)
		print("ID:", self.idNumber)

class Student(Person):
    def __init__(self, firstName, lastName, idNumber, testScores):
        super().__init__(firstName, lastName, idNumber)
        self.testScores = testScores

    def calculate(self):
        total = 0
        for testScore in self.testScores:
            total += testScore
        avg = total // len(self.testScores)

        if avg > 89 : return 'O'
        if avg > 79 : return 'E'
        if avg > 69 : return 'A'
        if avg > 54 : return 'P'
        if avg > 39 : return 'D'
        return 'T'

line = input().split()
```

## Day 13 : Abstract Classes

* [Problem Statement](https://www.hackerrank.com/challenges/30-abstract-classes/problem)

### CPP
```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
class Book{
    protected:
        string title;
        string author;
    public:
        Book(string t,string a){
            title=t;
            author=a;
        }
        virtual void display()=0;

};

class MyBook : public Book{
    private:
    int price;
    public:
    MyBook(string title, string author, int price) : Book(title, author){
        this->price = price;
    }
    void display(){
        cout << "Title: " << title << "\nAuthor: " << author << "\nPrice: " << price << endl;
    } 
};

int main() {
    string title,author;
    int price;
    getline(cin,title);
    getline(cin,author);
    cin>>price;
    MyBook novel(title,author,price);
    novel.display();
    return 0;
}
```

### Java
```java
import java.util.*;

class Book {
    protected String title;
    protected String author;
    
    Book(String title, String author){
        this.title = title;
        this.author = author;
    }
     
}

class MyBook extends Book{
    
    private int price;
    
    MyBook(String title, String author, int price){ 
        super(title,author);
        this.price = price; 
    }
    
    public void display(){
        System.out.println("Title: " + title + "\nAuthor: " + author + "\nPrice: " + price);
    }
}

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String title = sc.nextLine();
        String author = sc.nextLine();
        int price = sc.nextInt();
        
        MyBook mb = new MyBook(title, author, price);
        mb.display();
    }
}
```

### Javascript
```javascript
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('\n'));
    main();    
});
function readLine() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

class MyBook extends Book{
    
    constructor(title, author,price) {
    super(title,author)
    this.price = price
    }
    
    display() {
        process.stdout.write(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`)
    }
}
```

### Python
```python
from abc import ABCMeta, abstractmethod
class Book(object, metaclass=ABCMeta):
    def __init__(self,title,author):
        self.title=title
        self.author=author   
    @abstractmethod
    def display(): pass

class MyBook(Book):
    def __init__(self,title,author,price):
        super().__init__(title,author)
        self.price = price
        
    def display(self):
        print("Title:",title,"\nAuthor:",author,"\nPrice:",price)

title=input()
author=input()
price=int(input())
new_novel=MyBook(title,author,price)
new_novel.display()
```

## Day 14 : Scope

* [Problem Statement](https://www.hackerrank.com/challenges/30-scope/problem)

### CPP
```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference {
    private:
    vector<int> elements;
  
  	public:
  	int maximumDifference;
    Difference(vector<int> elements){
        this->elements = elements;
    }
    
    void computeDifference(){
    int min_ele = 101, max_ele = -1;
    for(int i=0; i<(int)elements.size(); i++){
        if (elements[i] < min_ele) min_ele = elements[i];
        if (elements[i] > max_ele) max_ele = elements[i];
    }
    maximumDifference = max_ele - min_ele;
    }

};

int main() {
    int N;
    cin >> N;
    
    vector<int> a;
    
    for (int i = 0; i < N; i++) {
        int e;
        cin >> e;
        
        a.push_back(e);
    }
    
    Difference d(a);
    
    d.computeDifference();
    
    cout << d.maximumDifference;
    
    return 0;
}
```


### Java
```java
import java.io.*;
import java.util.*;

class Difference{
    private int[] elements;
   
    Difference(int[] elements){ 
        this.elements = elements; 
    }
    
    public void maximumDifference;
    int computeDifference(){
    int min_ele = 101, max_ele = -1;
    for(int i=0; i<elements.length; i++){
        if (elements[i] < min_ele) min_ele = elements[i];
        if (elements[i] > max_ele) max_ele = elements[i];
    }
    maximumDifference = max_ele - min_ele
    }
}

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        Difference d = new Difference(arr);
        d.computeDifference();
        System.out.println(d.maximumDifference);
        sc.close();
    }
}
```

### Python
```python
class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        maximum = 0
        min_ele=101
        max_ele = -1

        for i in range(len(self.__elements)):
            if self.__elements[i] < min_ele : min_ele = self.__elements[i]
            if self.__elements[i] > max_ele : max_ele = self.__elements[i]
        self.maximumDifference =  max_ele - min_ele

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
```

## Day 15 : Linked List

* [Problem Statement](https://www.hackerrank.com/challenges/30-linked-list/problem)

### CPP
```cpp
#include <iostream>
#include <cstddef>
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

      Node* insert(Node *head,int data)
      {
        if(head==NULL) head=new Node(data);
        else head->next=insert(head->next,data);
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
	mylist.display(head);
		
}
```

### C
```c
#include <stdlib.h>
#include <stdio.h>	
typedef struct Node
{
    int data;
    struct Node* next;
}Node;

Node* insert(Node *head,int data)
{
    if(head == NULL) {
        head = malloc(sizeof(Node));
        head->data = data;
    }
    else head->next=insert(head->next,data);
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
  display(head);
		
}

```

### Java
```java
import java.util.Scanner;

class Node {
    int data;
    Node next;

    Node(int d) {
        data = d;
        next = null;
    }
}

class Solution {
    public static Node insert(Node head, int data) {
        if (head == null) head = new Node(data);
        else {
            Node curr = head;
            while (curr.next != null) curr = curr.next;
            curr.next = new Node(data);
        }
        return head;
    }

    public static void display(Node head) {
        Node start = head;
        while (start != null) {
            System.out.print(start.data + " ");
            start = start.next;
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Node head = null;
        int N = sc.nextInt();

        while (N-->0) {
            int ele = sc.nextInt();
            head = insert(head, ele);
        }
        display(head);
        sc.close();
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

this.insert=function(head,data){ 
    if(head == null) return new Node(data)
    var curr = head;
    while(curr.next != null) curr = curr.next;
    curr.next = new Node(data);
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
    def display(self,head):
        current = head
        while current:
            print(current.data,end=' ')
            current = current.next
    def insert(self,head,data): 
        if head is None: head = Node(data)
        else:
            curr = head
            while curr.next:
                curr = curr.next
            curr.next = Node(data)
        return head

mylist= Solution()
T=int(input())
head=None
for i in range(T):
    data=int(input())
    head=mylist.insert(head,data)    
mylist.display(head); 	  
```

## Day 16 : Exceptions

* [Problem Statement](https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem)

### CPP
```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    string S;
    getline(cin, S);
    try {
    int I = stoi(S);
    cout << I << endl;
    } catch(...) {
    cout << "Bad String" << endl;
    }
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
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String string = in.next();
        in.close();
        try {
            System.out.println(Integer.parseInt(string));
        } catch (NumberFormatException numberFormatException) {
            System.out.println("Bad String");
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
  var S = readLine();
  try {
    isNaN(S) ? null.throw : console.log(parseInt(S));
  } catch(err) {
    console.log("Bad String");
  }
}

```

### Python
```python
try: print(int(input()))
except: print("Bad String")
```

## Day 17 : More Exceptions

* [Problem Statement](https://www.hackerrank.com/challenges/30-more-exceptions/problem)

### CPP
```cpp
#include <cmath>
#include <iostream>
#include <exception>
#include <stdexcept>
using namespace std;
class Calculator{
    public: 
    int power(int base,int power){
    if (base < 0 || power< 0) throw  invalid_argument("n and p should be non-negative");
    return pow(base,power);
    }
};

int main()
{
    Calculator myCalculator=Calculator();
    int T,n,p;
    cin>>T;
    while(T-->0){
      if(scanf("%d %d",&n,&p)==2){
         try{
               int ans=myCalculator.power(n,p);
               cout<<ans<<endl; 
         }
         catch(exception& e){
             cout<<e.what()<<endl;
         }
      }
    }
    
}
```

### Java
```java
import java.util.Scanner;

class Calculator {

    public int power(int n, int p) throws Exception {
        if (n < 0 || p < 0) throw new Exception("n and p should be non-negative");
        return (int) Math.pow(n, p);
    }
}

class Solution {

    public static void main(String[] argh) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-->0) {
            int n = sc.nextInt();
            int p = sc.nextInt();
            Calculator myCalculator = new Calculator();
            try {
                int ans = 
                System.out.println(myCalculator.power(n, p););

            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
    sc.close();
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
class Calculator{

    power(base, pow){
        if (base <0 || pow <0) throw "n and p should be non-negative"
        return Math.pow(base,pow)
    }
}
function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}
```

### Python
```python
class Calculator:

    def power(self,n, p):
        if n < 0 or p <0 : raise Exception("n and p should be non-negative")
        return pow(n, p)

myCalculator=Calculator()
T=int(input())
for i in range(T):
    n,p = map(int, input().split())
    try:
        ans=myCalculator.power(n,p)
        print(ans)
    except Exception as e:
        print(e)   
```

## Day 18 : Queues and Stacks

* [Problem Statement](https://www.hackerrank.com/challenges/30-queues-stacks/problem)

### CPP
```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
private:
    queue<char> qu;
    stack<char> st;

public:
    void pushCharacter(char ch) {
        st.push(ch);
    }
    
    char popCharacter() {
        char ch = st.top();
        st.pop();
        return ch;
    }
    
    void enqueueCharacter(char ch) {
        qu.push(ch);
    }

    char dequeueCharacter() {
        char ch = qu.front();
        qu.pop();
        return ch;
    }
};

int main() {
    // read the string s.
    string s;
    getline(cin, s);
    
  	// create the Solution class object p.
    Solution obj;
    
    // push/enqueue all the characters of string s to stack.
    for (int i = 0; i < s.length(); i++) {
        obj.pushCharacter(s[i]);
        obj.enqueueCharacter(s[i]);
    }
    
    bool isPalindrome = true;
    
    // pop the top character from stack.
    // dequeue the first character from queue.
    // compare both the characters.
    for (int i = 0; i < s.length() / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            isPalindrome = false;
            
            break;
        }
    }
    
    // finally print whether string s is palindrome or not.
    if (isPalindrome) {
        cout << "The word, " << s << ", is a palindrome.";
    } else {
        cout << "The word, " << s << ", is not a palindrome.";
    }
    
    return 0;
}
```

### Java
```java
import java.util.*;
import java.util.Scanner;

public class Solution {

    Stack<Character> s = new Stack<Character>();
    Queue<Character> q = new LinkedList<Character>();
    void pushCharacter(char ch)
        {
        s.push(ch);
    }
     void enqueueCharacter(char ch){
        q.add(ch);
     }
    char popCharacter() {
        return s.pop();
    }

    char dequeueCharacter()
        {
        return q.remove();
        }


    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        scan.close();
        char[] s = input.toCharArray();
        Solution p = new Solution();

        for (char c : s) {
            p.pushCharacter(c);
            p.enqueueCharacter(c);
        }

        boolean isPalindrome = true;
        for (int i = 0; i < s.length / 2; i++) {
            if (p.popCharacter() != p.dequeueCharacter()) {
                isPalindrome = false;
                break;
            }
        }
    if (isPalindrome) System.out.println("The word, " + input + ", is a palindrome.");
    else System.out.println("The word, " + input + ", is not a palindrome.");    
    
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
function Solution() {
  this.stack = []
  this.queue = []
  this.pushCharacter = this.stack.push
  this.popCharacter = this.stack.pop
  this.enqueueCharacter = this.queue.push
  this.dequeueCharacter = this.queue.shift
}
function main(){
    // read the string s
    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}
```

### Python
```python
import sys
from collections import deque

class Solution:
    def __init__(self):
        self.s = deque()
        self.q = deque()
    def pushCharacter(self, char): self.s.append(char)  
    def popCharacter(self): return(self.s.pop())   
    def enqueueCharacter(self, char): self.q.append(char)
    def dequeueCharacter(self): return(self.q.popleft())

# read the string s
s=input()
#Create the Solution class object
obj=Solution()   

l=len(s)
# push/enqueue all the characters of string s to stack
for i in range(l):
    obj.pushCharacter(s[i])
    obj.enqueueCharacter(s[i])
    
isPalindrome=True
'''
pop the top character from stack
dequeue the first character from queue
compare both the characters
''' 
for i in range(l // 2):
    if obj.popCharacter()!=obj.dequeueCharacter():
        isPalindrome=False
        break
#finally print whether string s is palindrome or not.
if isPalindrome:
    print("The word, "+s+", is a palindrome.")
else:
    print("The word, "+s+", is not a palindrome.")    
```

## Day 19 : Interfaces

* [Problem Statement](https://www.hackerrank.com/challenges/30-interfaces/problem)

### CPP
```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
class AdvancedArithmetic{
    public:
        virtual int divisorSum(int n)=0;
};
class Calculator : public AdvancedArithmetic {
public:
    int divisorSum(int n) {
    int ans = 0;
    for(int i=1; i<=n; i++)
    if (n%i==0) ans += i;    
    return ans;
    }
};
int main(){
    int n;
    cin >> n;
    AdvancedArithmetic *myCalculator = new Calculator(); 
    int sum = myCalculator->divisorSum(n);
    cout << "I implemented: AdvancedArithmetic\n" << sum;
    return 0;
}
```

### Java
```java
import java.util.Scanner;

interface AdvancedArithmetic {
    int divisorSum(int n);
}

class Calculator implements AdvancedArithmetic {
    @Override
    public int divisorSum(int n) {
    int ans = 0;
    for(int i=1; i<=n; i++)
    if (n%i==0) ans += i;    
    return ans;
    }
}

class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        AdvancedArithmetic myCalculator = new Calculator();
        int sum = myCalculator.divisorSum(n);
        System.out.println("I implemented: " + myCalculator.getClass().getInterfaces()[0].getName() + "\n" + sum);
        scan.close();
    }
}
```

### Python
```python
class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError

class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        ans = 0
        for i in range(1, n + 1): 
            if n%i == 0: ans += i
        return ans


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s) 
```
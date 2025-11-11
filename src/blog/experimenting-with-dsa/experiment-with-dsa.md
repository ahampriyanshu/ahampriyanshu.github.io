---
title: "Experimenting with DSA"
date: 2020-02-02
description: Comprehensive exploration of data structures and algorithms, covering arrays, trees, graphs, sorting, searching, and dynamic programming concepts.
categories: ["Experimenting With DSA"]
tags: ['data-structures', 'algorithms', 'problem-solving']
---

## Data structures

Data structures can be categorized based on how data elements are organized and accessed:

**Linear Data Structures**: Elements are arranged sequentially, one after another.
- **Arrays**: Fixed-size, contiguous memory
- **Linked Lists**: Dynamic size, nodes connected via pointers  
- **Stacks**: LIFO (Last In First Out)
- **Queues**: FIFO (First In First Out)

```java
int[] linearArray = {1, 2, 3, 4, 5};
```

**Non-Linear Data Structures**: Elements are arranged in hierarchical or network fashion.
- **Trees**: Hierarchical structure with root, branches, and leaves
- **Graphs**: Nodes connected by edges in any pattern
- **Hash Tables**: Key-value pairs with hash function mapping

```java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}
```

### Basic operations on data structures?

All data structures support these fundamental operations:

1. **Create/Initialize**: Allocate memory and set up the structure
2. **Insert/Add**: Add new elements to the structure  
3. **Delete/Remove**: Remove elements from the structure
4. **Search/Find**: Locate elements based on key or value
5. **Update/Modify**: Change existing element values
6. **Traverse/Iterate**: Visit all elements in some order
7. **Sort**: Arrange elements in ascending/descending order
8. **Merge**: Combine two or more structures

```java
import java.util.*;

List<Integer> list = new ArrayList<>();  // Create
list.add(10);                            // Insert
list.add(20);                            // Insert  
list.remove(Integer.valueOf(10));        // Delete
boolean found = list.contains(20);       // Search
list.set(0, 25);                         // Update
for(int num : list) { /* process */ }    // Traverse
Collections.sort(list);                  // Sort
```

**Time Complexity Notation**:
- O(1): Constant time - best case
- O(log n): Logarithmic - very efficient  
- O(n): Linear - proportional to input size
- O(n log n): Log-linear - efficient sorting
- O(n²): Quadratic - avoid for large inputs

### Primitive Data Types

Java provides built-in primitive data types that are the building blocks for data manipulation.

#### Primitive Types & Their Wrapper Classes

```java
byte primitiveByte = 127;
Byte wrapperByte = Byte.valueOf((byte) 127);

short primitiveShort = 32767;
Short wrapperShort = Short.valueOf((short) 32767);

int primitiveInt = 2147483647;
Integer wrapperInt = Integer.valueOf(2147483647);

long primitiveLong = 9223372036854775807L;
Long wrapperLong = Long.valueOf(9223372036854775807L);

float primitiveFloat = 3.14f;
Float wrapperFloat = Float.valueOf(3.14f);

double primitiveDouble = 3.14159265359;
Double wrapperDouble = Double.valueOf(3.14159265359);

boolean primitiveBoolean = true;
Boolean wrapperBoolean = Boolean.valueOf(true);

char primitiveChar = 'A';
Character wrapperChar = Character.valueOf('A');
```

#### Primitive vs Wrapper Classes

| Type | Size (bits) | Range | Default Value | Wrapper Class |
|------|-------------|--------|---------------|---------------|
| `byte` | 8 | -128 to 127 | 0 | `Byte` |
| `short` | 16 | -32,768 to 32,767 | 0 | `Short` |
| `int` | 32 | -2³¹ to 2³¹-1 | 0 | `Integer` |
| `long` | 64 | -2⁶³ to 2⁶³-1 | 0L | `Long` |
| `float` | 32 | ±3.40282347E+38 | 0.0f | `Float` |
| `double` | 64 | ±1.79769313486231570E+308 | 0.0d | `Double` |
| `boolean` | 1 | true/false | false | `Boolean` |
| `char` | 16 | 0 to 65,535 | '\u0000' | `Character` |

#### Autoboxing and Unboxing

```java
int primitive = 42;
Integer wrapper = primitive;

Integer wrapperObj = 100;
int primitiveValue = wrapperObj;

List<Integer> numbers = new ArrayList<>();
numbers.add(10);
numbers.add(20);

for (int num : numbers) {
    System.out.println(num * 2);
}
```

### String Types and Operations

Strings are sequences of characters and are fundamental to most programming tasks.

#### String Classes in Java

```java
String immutableString = "Hello World";
StringBuilder mutableBuilder = new StringBuilder("Hello");
StringBuffer threadSafeBuffer = new StringBuffer("Hello");

String str1 = "Hello";
String str2 = "Hello";
String str3 = new String("Hello");

System.out.println(str1 == str2);
System.out.println(str1 == str3);
System.out.println(str1.equals(str3));
```

#### String Operations & Time Complexities

| Operation | String | StringBuilder | StringBuffer | Time Complexity |
|-----------|--------|---------------|--------------|-----------------|
| Creation | O(n) | O(n) | O(n) | Linear with length |
| Concatenation | O(n+m) | O(1) amortized | O(1) amortized | String creates new object |
| Character Access | O(1) | O(1) | O(1) | Direct index access |
| Length | O(1) | O(1) | O(1) | Cached value |
| Substring | O(n) | O(n) | O(n) | Creates new object |
| Search | O(n×m) | O(n×m) | O(n×m) | Pattern matching |

#### Essential String Algorithms

```java
public class StringOperations {
    
    public static String reverseString(String str) {
        char[] chars = str.toCharArray();
        int left = 0, right = chars.length - 1;
        while (left < right) {
            char temp = chars[left];
            chars[left++] = chars[right];
            chars[right--] = temp;
        }
        return new String(chars);
    }
    
    public static boolean isPalindrome(String str) {
        str = str.toLowerCase().replaceAll("[^a-zA-Z0-9]", "");
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left++) != str.charAt(right--)) {
                return false;
            }
        }
        return true;
    }
    
    public static Map<Character, Integer> characterFrequency(String str) {
        Map<Character, Integer> frequency = new HashMap<>();
        for (char ch : str.toCharArray()) {
            frequency.merge(ch, 1, Integer::sum);
        }
        return frequency;
    }
    
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        
        Map<Character, Integer> count = new HashMap<>();
        for (char ch : s1.toCharArray()) {
            count.merge(ch, 1, Integer::sum);
        }
        
        for (char ch : s2.toCharArray()) {
            count.merge(ch, -1, Integer::sum);
            if (count.get(ch) == 0) {
                count.remove(ch);
            }
        }
        
        return count.isEmpty();
    }
    
    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        
        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }
}
```

#### String Builder vs String Buffer

```java
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(6, "Beautiful ");
sb.reverse();
String result = sb.toString();

StringBuffer buffer = new StringBuffer();
buffer.append("Thread");
buffer.append(" Safe");
buffer.delete(0, 7);
String threadSafeResult = buffer.toString();
```

#### String Formatting and Manipulation

```java
String name = "Java";
int version = 17;
double price = 99.99;

String formatted1 = String.format("Language: %s, Version: %d, Price: $%.2f", 
                                  name, version, price);

String formatted2 = String.join(", ", "Apple", "Banana", "Cherry");

String[] parts = "one,two,three".split(",");
String rejoined = String.join("-", parts);

String trimmed = "  Hello World  ".strip();
String upper = "hello".toUpperCase();
String replaced = "Hello World".replace("World", "Java");
```

#### Regular Expressions with Strings

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegexOperations {
    
    public static boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        return Pattern.matches(emailRegex, email);
    }
    
    public static String extractNumbers(String text) {
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(text);
        StringBuilder numbers = new StringBuilder();
        
        while (matcher.find()) {
            numbers.append(matcher.group()).append(" ");
        }
        return numbers.toString().trim();
    }
    
    public static String maskCreditCard(String cardNumber) {
        return cardNumber.replaceAll("\\b(\\d{4})\\d{8}(\\d{4})\\b", "$1****$2");
    }
}
```

#### Memory and Performance Considerations

```java
String inefficient = "";
for (int i = 0; i < 1000; i++) {
    inefficient += i;
}

StringBuilder efficient = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    efficient.append(i);
}
String result = efficient.toString();

String[] words = {"Java", "is", "awesome"};
String joined1 = String.join(" ", words);
String joined2 = words[0] + " " + words[1] + " " + words[2];
```

#### Real-World String Applications
- **Text Processing**: Parsing configuration files, log analysis
- **Data Validation**: Email, phone number, URL validation
- **Serialization**: JSON/XML parsing and generation
- **Internationalization**: Multi-language text handling
- **Security**: Input sanitization, SQL injection prevention
- **Search Algorithms**: Pattern matching, text indexing

### Arrays [array, List, most common operations with time complexities, out of bound, real world examples]

Arrays are **contiguous memory** blocks storing elements of the same type, accessible via index.

#### Java Arrays vs Collections

```java
int[] arr = new int[5];
int[] nums = {1, 2, 3, 4, 5};

List<Integer> list = new ArrayList<>();
list.add(10);
```

#### Common Operations & Time Complexities

| Operation | Array | ArrayList | Description |
|-----------|--------|-----------|-------------|
| Access by index | O(1) | O(1) | Direct memory access |
| Search unsorted | O(n) | O(n) | Linear scan required |
| Insert at end | N/A | O(1)* | Amortized constant |
| Insert at beginning | O(n) | O(n) | Shift all elements |
| Delete at end | N/A | O(1) | Simply reduce size |
| Delete at beginning | O(n) | O(n) | Shift all elements |

*Amortized O(1) due to dynamic resizing

#### Essential Array Algorithms

```java
import java.util.*;

public class ArrayOperations {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) return false;
        }
        return true;
    }
    
    public static int maxSum(int[] arr, int k) {
        int maxSum = 0, windowSum = 0;
        
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        maxSum = windowSum;
        
        for (int i = k; i < arr.length; i++) {
            windowSum = windowSum - arr[i-k] + arr[i];
            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
    }
    
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    
    public static void rotate(int[] nums, int k) {
        k = k % nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }
    
    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start++] = arr[end];
            arr[end--] = temp;
        }
    }
}
```

#### Array Bounds & Common Pitfalls

```java
public static int safeGet(int[] arr, int index) {
    if (index >= 0 && index < arr.length) {
        return arr[index];
    }
    throw new IllegalArgumentException("Index out of bounds");
}

for (int i = 0; i <= arr.length; i++) {
    System.out.println(arr[i]);
}

for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

#### Real-World Applications
- **Image Processing**: 2D arrays for pixel data
- **Databases**: Storing records in contiguous memory
- **Gaming**: Game boards, inventory systems
- **Financial**: Stock prices, trading data
- **Scientific Computing**: Matrices, numerical analysis

#### Interview Patterns
1. **Two Pointers**: Palindromes, sorted array problems
2. **Sliding Window**: Subarray problems, string matching  
3. **Binary Search**: Search in sorted/rotated arrays
4. **Prefix Sums**: Range query problems
5. **Kadane's Algorithm**: Maximum subarray sum

### What is a linked list? [different types of linked list, and most common operations with time complexities, real world examples]

A **linked list** is a linear data structure where elements (nodes) are stored in sequence, but not in contiguous memory locations. Each node contains data and a reference (link) to the next node.

#### Types of Linked Lists

**1. Singly Linked List**
```java
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class SinglyLinkedList {
    ListNode head;
    
    public void insertFirst(int val) {
        ListNode newNode = new ListNode(val);
        newNode.next = head;
        head = newNode;
    }
    
    public ListNode search(int val) {
        ListNode current = head;
        while (current != null) {
            if (current.val == val) return current;
            current = current.next;
        }
        return null;
    }
    
    public void delete(int val) {
        if (head == null) return;
        
        if (head.val == val) {
            head = head.next;
            return;
        }
        
        ListNode current = head;
        while (current.next != null && current.next.val != val) {
            current = current.next;
        }
        
        if (current.next != null) {
            current.next = current.next.next;
        }
    }
}
```

**2. Doubly Linked List**
```java
class DoublyListNode {
    int val;
    DoublyListNode prev, next;
    DoublyListNode(int val) { this.val = val; }
}

class DoublyLinkedList {
    DoublyListNode head, tail;
    
    public void insertLast(int val) {
        DoublyListNode newNode = new DoublyListNode(val);
        if (tail == null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }
    
    public void deleteNode(DoublyListNode node) {
        if (node.prev != null) node.prev.next = node.next;
        else head = node.next;
        
        if (node.next != null) node.next.prev = node.prev;
        else tail = node.prev;
    }
}
```

**3. Circular Linked List**
```java
class CircularLinkedList {
    ListNode head;
    
    public void insert(int val) {
        ListNode newNode = new ListNode(val);
        if (head == null) {
            head = newNode;
            newNode.next = head;
        } else {
            ListNode temp = head;
            while (temp.next != head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = head;
        }
    }
}
```

#### Common Operations & Time Complexities

| Operation | Singly | Doubly | Array |
|-----------|--------|---------|-------|
| Access by index | O(n) | O(n) | O(1) |
| Insert at beginning | O(1) | O(1) | O(n) |
| Insert at end | O(n) | O(1)* | O(1)* |
| Delete from beginning | O(1) | O(1) | O(n) |
| Delete from end | O(n) | O(1)* | O(1) |
| Search | O(n) | O(n) | O(n) |

*With tail pointer maintained

#### Essential Linked List Algorithms

```java
public class LinkedListAlgorithms {
    
    public ListNode reverse(ListNode head) {
        ListNode prev = null, current = head;
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    }
    
    public ListNode findMiddle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
    
    public ListNode mergeTwoSorted(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        current.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
    
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy, second = dummy;
        
        for (int i = 0; i <= n; i++) {
            first = first.next;
        }
        
        while (first != null) {
            first = first.next;
            second = second.next;
        }
        
        second.next = second.next.next;
        return dummy.next;
    }
}
```

#### Real-World Applications
- **Operating Systems**: Process scheduling queues
- **Web Browsers**: Forward/back navigation (doubly linked)
- **Music Players**: Playlist implementation (circular)
- **Undo Functionality**: Command pattern with linked operations
- **Memory Management**: Dynamic memory allocation
- **Hash Tables**: Separate chaining for collision resolution

#### Interview Patterns
1. **Two Pointers**: Finding middle, detecting cycles
2. **Dummy Nodes**: Simplify edge cases in insertion/deletion
3. **Recursion**: Tree-like operations on lists
4. **In-place Reversal**: Space-efficient modifications

### Iterator

An **iterator** is a design pattern that provides a way to access elements of a collection sequentially without exposing the underlying representation.

#### Java Iterator Interface

```java
import java.util.*;

List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
Iterator<Integer> iter = list.iterator();

while (iter.hasNext()) {
    Integer value = iter.next();
    if (value % 2 == 0) {
        iter.remove();
    }
}
```

#### Types of Iterators

**1. Iterator** - Forward only, read/remove
**2. ListIterator** - Bidirectional, read/write/insert/remove
**3. Enhanced for-loop** - Simplified syntax

```java
public class IteratorExamples {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry"));
        
        Iterator<String> iter = fruits.iterator();
        while (iter.hasNext()) {
            System.out.println(iter.next());
        }
        
        ListIterator<String> listIter = fruits.listIterator();
        
        while (listIter.hasNext()) {
            String fruit = listIter.next();
            if (fruit.equals("Banana")) {
                listIter.set("Blueberry");
            }
        }
        
        while (listIter.hasPrevious()) {
            System.out.println(listIter.previous());
        }
        
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

#### Custom Iterator Implementation

```java
class MyArrayList<T> implements Iterable<T> {
    private T[] array;
    private int size;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public MyArrayList(int capacity) {
        this.capacity = capacity;
        this.array = (T[]) new Object[capacity];
        this.size = 0;
    }
    
    public void add(T item) {
        if (size < capacity) {
            array[size++] = item;
        }
    }
    
    @Override
    public Iterator<T> iterator() {
        return new MyIterator();
    }
    
    private class MyIterator implements Iterator<T> {
        private int currentIndex = 0;
        
        @Override
        public boolean hasNext() {
            return currentIndex < size;
        }
        
        @Override
        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            return array[currentIndex++];
        }
        
        @Override
        public void remove() {
            if (currentIndex == 0) {
                throw new IllegalStateException();
            }
            
            for (int i = currentIndex - 1; i < size - 1; i++) {
                array[i] = array[i + 1];
            }
            size--;
            currentIndex--;
        }
    }
}
```

#### Iterator Benefits & Best Practices

**Benefits**:
- **Uniform Interface**: Same pattern for all collections
- **Safe Removal**: Prevents ConcurrentModificationException
- **Memory Efficient**: One element at a time
- **Abstraction**: Hide implementation details

**Best Practices**:
```java
// ✅ GOOD - Safe concurrent modification
Iterator<Integer> iter = list.iterator();
while (iter.hasNext()) {
    if (iter.next() % 2 == 0) {
        iter.remove();  // Safe removal
    }
}

// ❌ BAD - ConcurrentModificationException
for (Integer num : list) {
    if (num % 2 == 0) {
        list.remove(num);  // Throws exception!
    }
}

// ✅ GOOD - Use appropriate iterator type
ListIterator<String> listIter = list.listIterator();
listIter.add("NewItem");  // Only ListIterator supports add()
```

#### Real-World Applications
- **Database Cursors**: Iterate through query results
- **File Processing**: Stream large files line by line
- **GUI Components**: Tree traversal, menu systems
- **Pagination**: Web page results iteration

### What is a stack? [Lifo, most common operations with time complexities, stack overflow, real world examples]

A **stack** is a linear data structure that follows **LIFO** (Last In, First Out) principle. Elements are added and removed from the same end called the "top".

#### Stack Operations & Time Complexities

| Operation | Time | Description |
|-----------|------|-------------|
| push(item) | O(1) | Add element to top |
| pop() | O(1) | Remove & return top element |
| peek()/top() | O(1) | View top element without removing |
| isEmpty() | O(1) | Check if stack is empty |
| size() | O(1) | Get number of elements |

#### Java Stack Implementations

**1. Using Built-in Stack Class (Legacy)**
```java
import java.util.Stack;

Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
stack.push(30);

System.out.println(stack.peek());
System.out.println(stack.pop());
System.out.println(stack.pop());
```

**2. Using Deque (Recommended)**
```java
import java.util.Deque;
import java.util.ArrayDeque;

Deque<Integer> stack = new ArrayDeque<>();
stack.push(10);
stack.push(20);
stack.push(30);

System.out.println(stack.peek());
System.out.println(stack.pop());
```

**3. Custom Array-based Implementation**
```java
class ArrayStack<T> {
    private T[] array;
    private int top;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public ArrayStack(int capacity) {
        this.capacity = capacity;
        this.array = (T[]) new Object[capacity];
        this.top = -1;
    }
    
    public void push(T item) {
        if (isFull()) {
            throw new StackOverflowError("Stack is full");
        }
        array[++top] = item;
    }
    
    public T pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        T item = array[top];
        array[top--] = null;
        return item;
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return array[top];
    }
    
    public boolean isEmpty() { return top == -1; }
    public boolean isFull() { return top == capacity - 1; }
    public int size() { return top + 1; }
}
```

#### Essential Stack Algorithms

```java
public class StackAlgorithms {
    
    public static boolean isValidParentheses(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character, Character> pairs = Map.of(')', '(', '}', '{', ']', '[');
        
        for (char c : s.toCharArray()) {
            if (pairs.containsValue(c)) {
                stack.push(c);
            } else if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    
    public static int evaluatePostfix(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();
        
        for (String token : tokens) {
            if (isOperator(token)) {
                int b = stack.pop();
                int a = stack.pop();
                stack.push(applyOperation(token, a, b));
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
        return stack.pop();
    }
    
    public static int[] nextGreaterElements(int[] nums) {
        int[] result = new int[nums.length];
        Deque<Integer> stack = new ArrayDeque<>();
        
        Arrays.fill(result, -1);
        
        for (int i = 0; i < nums.length; i++) {
            while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
                result[stack.pop()] = nums[i];
            }
            stack.push(i);
        }
        return result;
    }
    
    public static int largestRectangle(int[] heights) {
        Deque<Integer> stack = new ArrayDeque<>();
        int maxArea = 0;
        int i = 0;
        
        while (i < heights.length) {
            if (stack.isEmpty() || heights[i] >= heights[stack.peek()]) {
                stack.push(i++);
            } else {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
        }
        
        while (!stack.isEmpty()) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        return maxArea;
    }
    
    private static boolean isOperator(String token) {
        return token.equals("+") || token.equals("-") || 
               token.equals("*") || token.equals("/");
    }
    
    private static int applyOperation(String op, int a, int b) {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: throw new IllegalArgumentException("Invalid operator");
        }
    }
}
```

#### Stack Overflow

**Stack Overflow** occurs when:
1. **Infinite Recursion**: Function calls itself without base case
2. **Deep Recursion**: Recursion depth exceeds JVM stack size
3. **Large Local Variables**: Excessive memory allocation on stack

```java
// ❌ CAUSES STACK OVERFLOW
public int factorial(int n) {
    return n * factorial(n - 1);  // No base case!
}

// ✅ PROPER RECURSION
public int factorial(int n) {
    if (n <= 1) return 1;         // Base case
    return n * factorial(n - 1);
}

// ✅ ITERATIVE ALTERNATIVE
public int factorialIterative(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

#### Real-World Applications
- **Function Call Management**: JVM call stack
- **Browser History**: Back button functionality  
- **Undo Operations**: Text editors, image editors
- **Expression Evaluation**: Compilers, calculators
- **Depth-First Search**: Graph traversal
- **Backtracking Algorithms**: Maze solving, N-Queens
- **Memory Management**: Stack frames, local variables

#### Interview Patterns
1. **Monotonic Stack**: Next/Previous greater/smaller element
2. **Expression Parsing**: Infix to postfix, evaluation
3. **Bracket Matching**: Balanced parentheses validation
4. **Histogram Problems**: Largest rectangle variations

### What is a queue? [Fifo, most common operations with time complexities, real world examples]

A **queue** is a linear data structure that follows **FIFO** (First In, First Out) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue).

#### Queue Operations & Time Complexities

| Operation | Time | Description |
|-----------|------|-------------|
| enqueue(item) | O(1) | Add element to rear |
| dequeue() | O(1) | Remove & return front element |
| front()/peek() | O(1) | View front element |
| rear()/back() | O(1) | View rear element |
| isEmpty() | O(1) | Check if queue is empty |
| size() | O(1) | Get number of elements |

#### Java Queue Implementations

**1. Using LinkedList (implements Queue)**
```java
import java.util.Queue;
import java.util.LinkedList;

Queue<Integer> queue = new LinkedList<>();
queue.offer(10);    // enqueue
queue.offer(20);
queue.offer(30);

System.out.println(queue.peek());  // 10 (front)
System.out.println(queue.poll());  // 10 (dequeue)
System.out.println(queue.poll());  // 20
```

**2. Using ArrayDeque (Recommended)**
```java
import java.util.Queue;
import java.util.ArrayDeque;

Queue<Integer> queue = new ArrayDeque<>();
queue.offer(10);
queue.offer(20);
queue.offer(30);

System.out.println(queue.peek());  // 10
System.out.println(queue.poll());  // 10
```

**3. Custom Array-based Circular Queue**
```java
class CircularQueue<T> {
    private T[] array;
    private int front, rear, size, capacity;
    
    @SuppressWarnings("unchecked")
    public CircularQueue(int capacity) {
        this.capacity = capacity;
        this.array = (T[]) new Object[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void enqueue(T item) {
        if (isFull()) {
            throw new IllegalStateException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        array[rear] = item;
        size++;
    }
    
    public T dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        T item = array[front];
        array[front] = null;
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return array[front];
    }
    
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public int size() { return size; }
}
```

#### Types of Queues

**1. Priority Queue**
```java
import java.util.PriorityQueue;

// Min-heap by default
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(30);
minHeap.offer(10);
minHeap.offer(20);
System.out.println(minHeap.poll()); // 10

// Max-heap using custom comparator
PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
maxHeap.offer(30);
maxHeap.offer(10);
maxHeap.offer(20);
System.out.println(maxHeap.poll()); // 30
```

**2. Double-ended Queue (Deque)**
```java
import java.util.Deque;
import java.util.ArrayDeque;

Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(10);    // Add to front
deque.addLast(20);     // Add to rear
deque.addFirst(5);     // Add to front

System.out.println(deque.removeFirst()); // 5
System.out.println(deque.removeLast());  // 20
```

#### Essential Queue Algorithms

```java
public class QueueAlgorithms {
    
    // 1. Breadth-First Search - O(V + E)
    public static void bfs(int[][] graph, int start) {
        boolean[] visited = new boolean[graph.length];
        Queue<Integer> queue = new LinkedList<>();
        
        queue.offer(start);
        visited[start] = true;
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            
            for (int neighbor = 0; neighbor < graph[node].length; neighbor++) {
                if (graph[node][neighbor] == 1 && !visited[neighbor]) {
                    queue.offer(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }
    
    // 2. Level Order Tree Traversal - O(n)
    public static void levelOrder(TreeNode root) {
        if (root == null) return;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                System.out.print(node.val + " ");
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            System.out.println(); // New level
        }
    }
    
    // 3. Sliding Window Maximum - O(n)
    public static int[] maxSlidingWindow(int[] nums, int k) {
        int[] result = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>(); // Store indices
        
        for (int i = 0; i < nums.length; i++) {
            // Remove indices outside window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            
            // Remove smaller elements (maintain decreasing order)
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
            
            // Add to result when window is full
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }
        
        return result;
    }
    
    // 4. Generate Binary Numbers from 1 to n - O(n)
    public static String[] generateBinaryNumbers(int n) {
        String[] result = new String[n];
        Queue<String> queue = new LinkedList<>();
        queue.offer("1");
        
        for (int i = 0; i < n; i++) {
            String binary = queue.poll();
            result[i] = binary;
            
            queue.offer(binary + "0");
            queue.offer(binary + "1");
        }
        
        return result;
    }
    
    // 5. Rotting Oranges (Multi-source BFS) - O(m*n)
    public static int orangesRotting(int[][] grid) {
        Queue<int[]> queue = new LinkedList<>();
        int fresh = 0;
        
        // Add all rotten oranges to queue
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[]{i, j});
                } else if (grid[i][j] == 1) {
                    fresh++;
                }
            }
        }
        
        int[][] directions = {% raw %}{{0,1}, {1,0}, {0,-1}, {-1,0}}{% endraw %};
        int minutes = 0;
        
        while (!queue.isEmpty() && fresh > 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] pos = queue.poll();
                
                for (int[] dir : directions) {
                    int newRow = pos[0] + dir[0];
                    int newCol = pos[1] + dir[1];
                    
                    if (newRow >= 0 && newRow < grid.length && 
                        newCol >= 0 && newCol < grid[0].length && 
                        grid[newRow][newCol] == 1) {
                        
                        grid[newRow][newCol] = 2;
                        queue.offer(new int[]{newRow, newCol});
                        fresh--;
                    }
                }
            }
            minutes++;
        }
        
        return fresh == 0 ? minutes : -1;
    }
}
```

#### Real-World Applications
- **Task Scheduling**: Operating system process management
- **Print Queue**: Document printing in order
- **Breadth-First Search**: Shortest path algorithms
- **Web Server**: Request handling (FIFO)
- **Call Centers**: Customer service queues
- **Buffer**: Producer-consumer problems
- **Cache**: LRU cache implementation with deque

#### Interview Patterns
1. **Level-order Traversal**: Binary tree problems
2. **Sliding Window**: Maximum/minimum in subarrays
3. **Multi-source BFS**: Matrix problems (rotting oranges)
4. **Monotonic Deque**: Sliding window maximum/minimum

### Implement stack using queue and vice versa

These are classic interview questions that test understanding of both data structures and their conversion techniques.

#### Stack Using Queue

**Method 1: Using Two Queues**
```java
class StackUsingQueue {
    private Queue<Integer> q1;
    private Queue<Integer> q2;
    
    public StackUsingQueue() {
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }
    
    // Push: O(1)
    public void push(int x) {
        q1.offer(x);
    }
    
    // Pop: O(n) - move all elements except last to q2
    public int pop() {
        if (q1.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        
        // Move all elements except last to q2
        while (q1.size() > 1) {
            q2.offer(q1.poll());
        }
        
        int result = q1.poll();
        
        // Swap q1 and q2
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
        
        return result;
    }
    
    // Top: O(n)
    public int top() {
        if (q1.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        
        while (q1.size() > 1) {
            q2.offer(q1.poll());
        }
        
        int result = q1.peek();
        q2.offer(q1.poll());
        
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
        
        return result;
    }
    
    public boolean isEmpty() {
        return q1.isEmpty();
    }
}
```

**Method 2: Using One Queue (Optimal)**
```java
class StackUsingOneQueue {
    private Queue<Integer> queue;
    
    public StackUsingOneQueue() {
        queue = new LinkedList<>();
    }
    
    // Push: O(n) - rotate queue after adding
    public void push(int x) {
        int size = queue.size();
        queue.offer(x);
        
        // Rotate queue to bring new element to front
        for (int i = 0; i < size; i++) {
            queue.offer(queue.poll());
        }
    }
    
    // Pop: O(1)
    public int pop() {
        if (queue.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return queue.poll();
    }
    
    // Top: O(1)
    public int top() {
        if (queue.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return queue.peek();
    }
    
    public boolean isEmpty() {
        return queue.isEmpty();
    }
}
```

#### Queue Using Stack

**Method 1: Using Two Stacks**
```java
class QueueUsingStack {
    private Stack<Integer> stack1; // For enqueue
    private Stack<Integer> stack2; // For dequeue
    
    public QueueUsingStack() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
    }
    
    // Enqueue: O(1)
    public void enqueue(int x) {
        stack1.push(x);
    }
    
    // Dequeue: O(1) amortized, O(n) worst case
    public int dequeue() {
        if (stack2.isEmpty()) {
            // Move all elements from stack1 to stack2
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
        
        if (stack2.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        
        return stack2.pop();
    }
    
    // Peek: O(1) amortized
    public int peek() {
        if (stack2.isEmpty()) {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
        
        if (stack2.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        
        return stack2.peek();
    }
    
    public boolean isEmpty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
}
```

**Method 2: Using One Stack (Recursive)**
```java
class QueueUsingOneStack {
    private Stack<Integer> stack;
    
    public QueueUsingOneStack() {
        stack = new Stack<>();
    }
    
    // Enqueue: O(n) - recursive approach
    public void enqueue(int x) {
        if (stack.isEmpty()) {
            stack.push(x);
            return;
        }
        
        // Remove top element
        int temp = stack.pop();
        
        // Recursive call
        enqueue(x);
        
        // Add removed element back
        stack.push(temp);
    }
    
    // Dequeue: O(1)
    public int dequeue() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return stack.pop();
    }
    
    public boolean isEmpty() {
        return stack.isEmpty();
    }
}
```

#### Complete Example with Tests

```java
public class StackQueueConversion {
    public static void main(String[] args) {
        // Test Stack using Queue
        System.out.println("=== Stack using Queue ===");
        StackUsingQueue stack = new StackUsingQueue();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        
        System.out.println("Top: " + stack.top());     // 3
        System.out.println("Pop: " + stack.pop());     // 3
        System.out.println("Pop: " + stack.pop());     // 2
        System.out.println("Top: " + stack.top());     // 1
        
        // Test Queue using Stack
        System.out.println("\n=== Queue using Stack ===");
        QueueUsingStack queue = new QueueUsingStack();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        
        System.out.println("Peek: " + queue.peek());       // 1
        System.out.println("Dequeue: " + queue.dequeue()); // 1
        System.out.println("Dequeue: " + queue.dequeue()); // 2
        queue.enqueue(4);
        System.out.println("Dequeue: " + queue.dequeue()); // 3
        System.out.println("Dequeue: " + queue.dequeue()); // 4
    }
}
```

#### Time Complexity Summary

| Implementation | Push/Enqueue | Pop/Dequeue | Space |
|----------------|-------------|-------------|-------|
| Stack using 2 Queues | O(1) | O(n) | O(n) |
| Stack using 1 Queue | O(n) | O(1) | O(n) |
| Queue using 2 Stacks | O(1) | O(1) amortized | O(n) |
| Queue using 1 Stack | O(n) | O(1) | O(n) |

#### Interview Tips
- **Trade-offs**: Choose method based on which operation is more frequent
- **Amortized Analysis**: Two stacks for queue gives O(1) amortized dequeue
- **Space Optimization**: Single data structure methods save space but increase time complexity
- **Edge Cases**: Always handle empty stack/queue scenarios

### What is a hash table? [different types, how does hashing works, linear/quadratic probing, double hashing collision resultion, chaining, open addressing, coalescing, probabalistic hashing, most common operations with time complexities, real world examples]

A **hash table** (HashMap) is a data structure that maps keys to values using a **hash function**. It provides O(1) average time complexity for basic operations.

#### How Hashing Works

```java
// Basic concept
int hash(String key) {
    int hashValue = 0;
    for (int i = 0; i < key.length(); i++) {
        hashValue = (hashValue * 31 + key.charAt(i)) % tableSize;
    }
    return hashValue;
}
```

#### Java HashMap Usage

```java
import java.util.*;

Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);           // O(1) average
map.put("banana", 3);
map.put("orange", 8);

System.out.println(map.get("apple"));    // 5, O(1) average
System.out.println(map.containsKey("grape")); // false
map.remove("banana");          // O(1) average

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}
```

#### Collision Resolution Techniques

**1. Separate Chaining**
```java
class HashTableChaining<K, V> {
    private static class Node<K, V> {
        K key;
        V value;
        Node<K, V> next;
        
        Node(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Node<K, V>[] table;
    private int size;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public HashTableChaining(int capacity) {
        this.capacity = capacity;
        this.table = new Node[capacity];
        this.size = 0;
    }
    
    private int hash(K key) {
        return Math.abs(key.hashCode()) % capacity;
    }
    
    public void put(K key, V value) {
        int index = hash(key);
        Node<K, V> head = table[index];
        
        // Check if key already exists
        Node<K, V> current = head;
        while (current != null) {
            if (current.key.equals(key)) {
                current.value = value;  // Update existing
                return;
            }
            current = current.next;
        }
        
        // Add new node at beginning
        Node<K, V> newNode = new Node<>(key, value);
        newNode.next = head;
        table[index] = newNode;
        size++;
    }
    
    public V get(K key) {
        int index = hash(key);
        Node<K, V> current = table[index];
        
        while (current != null) {
            if (current.key.equals(key)) {
                return current.value;
            }
            current = current.next;
        }
        return null;  // Key not found
    }
}
```

**2. Linear Probing (Open Addressing)**
```java
class HashTableLinearProbing<K, V> {
    private K[] keys;
    private V[] values;
    private boolean[] deleted;
    private int size;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public HashTableLinearProbing(int capacity) {
        this.capacity = capacity;
        this.keys = (K[]) new Object[capacity];
        this.values = (V[]) new Object[capacity];
        this.deleted = new boolean[capacity];
        this.size = 0;
    }
    
    private int hash(K key) {
        return Math.abs(key.hashCode()) % capacity;
    }
    
    public void put(K key, V value) {
        int index = hash(key);
        
        // Linear probing to find empty slot or existing key
        while (keys[index] != null && !deleted[index]) {
            if (keys[index].equals(key)) {
                values[index] = value;  // Update existing
                return;
            }
            index = (index + 1) % capacity;  // Linear probe
        }
        
        // Insert at found slot
        keys[index] = key;
        values[index] = value;
        deleted[index] = false;
        size++;
    }
    
    public V get(K key) {
        int index = hash(key);
        
        while (keys[index] != null) {
            if (!deleted[index] && keys[index].equals(key)) {
                return values[index];
            }
            index = (index + 1) % capacity;
        }
        return null;
    }
}
```

**3. Quadratic Probing**
```java
// Instead of index = (index + 1) % capacity
// Use: index = (index + i*i) % capacity where i is attempt number

public void putQuadratic(K key, V value) {
    int index = hash(key);
    int i = 1;
    
    while (keys[index] != null && !deleted[index]) {
        if (keys[index].equals(key)) {
            values[index] = value;
            return;
        }
        index = (hash(key) + i * i) % capacity;  // Quadratic probing
        i++;
    }
    
    keys[index] = key;
    values[index] = value;
    deleted[index] = false;
    size++;
}
```

**4. Double Hashing**
```java
public class DoubleHashing<K, V> {
    // Use two hash functions
    private int hash1(K key) {
        return Math.abs(key.hashCode()) % capacity;
    }
    
    private int hash2(K key) {
        return 7 - (Math.abs(key.hashCode()) % 7);  // Different prime
    }
    
    public void put(K key, V value) {
        int index = hash1(key);
        int step = hash2(key);
        
        while (keys[index] != null && !deleted[index]) {
            if (keys[index].equals(key)) {
                values[index] = value;
                return;
            }
            index = (index + step) % capacity;  // Double hashing
        }
        
        keys[index] = key;
        values[index] = value;
        deleted[index] = false;
        size++;
    }
}
```

#### Time Complexities

| Operation | Average | Worst Case | Best Case |
|-----------|---------|------------|-----------|
| Insert | O(1) | O(n) | O(1) |
| Search | O(1) | O(n) | O(1) |
| Delete | O(1) | O(n) | O(1) |

**Load Factor**: α = n/m (where n = elements, m = table size)
- Keep α ≤ 0.75 for good performance
- Resize when load factor exceeds threshold

#### Essential HashMap Algorithms

```java
public class HashMapAlgorithms {
    
    // 1. Two Sum - O(n)
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return null;
    }
    
    // 2. Group Anagrams - O(n*k log k)
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
    
    // 3. Longest Consecutive Sequence - O(n)
    public static int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        
        int longest = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) {  // Start of sequence
                int current = num;
                int streak = 1;
                
                while (set.contains(current + 1)) {
                    current++;
                    streak++;
                }
                longest = Math.max(longest, streak);
            }
        }
        return longest;
    }
    
    // 4. LRU Cache using LinkedHashMap
    class LRUCache extends LinkedHashMap<Integer, Integer> {
        private int capacity;
        
        public LRUCache(int capacity) {
            super(capacity, 0.75f, true);  // Access order
            this.capacity = capacity;
        }
        
        @Override
        protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
            return size() > capacity;
        }
        
        public int get(int key) {
            return super.getOrDefault(key, -1);
        }
        
        public void put(int key, int value) {
            super.put(key, value);
        }
    }
}
```

#### Different HashMap Types in Java

```java
// 1. HashMap - Not synchronized, allows null
Map<String, Integer> hashMap = new HashMap<>();

// 2. LinkedHashMap - Maintains insertion/access order  
Map<String, Integer> linkedMap = new LinkedHashMap<>();

// 3. TreeMap - Sorted by keys, O(log n) operations
Map<String, Integer> treeMap = new TreeMap<>();

// 4. ConcurrentHashMap - Thread-safe
Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();

// 5. WeakHashMap - Weak references, allows GC
Map<String, Integer> weakMap = new WeakHashMap<>();
```

#### Real-World Applications
- **Database Indexing**: Fast record lookup
- **Caching**: Web servers, CDNs
- **Symbol Tables**: Compilers, interpreters  
- **Sets**: Duplicate detection, membership testing
- **Frequency Counting**: Analytics, statistics
- **Memoization**: Dynamic programming optimization

#### Interview Patterns
1. **Two Pointers with HashMap**: Complement problems
2. **Frequency Counting**: Character/element analysis
3. **Sliding Window with Map**: Substring problems
4. **Graph Problems**: Adjacency representations

### Sets [sparse sets, disjoints sets]

A **set** is a collection of unique elements with no duplicates. Java provides several Set implementations.

#### Basic Set Operations

```java
import java.util.*;

// HashSet - O(1) average operations
Set<Integer> hashSet = new HashSet<>();
hashSet.add(1); hashSet.add(2); hashSet.add(1); // Only {1, 2}

// TreeSet - O(log n) operations, sorted
Set<Integer> treeSet = new TreeSet<>(Arrays.asList(3, 1, 4, 1, 5));
System.out.println(treeSet); // [1, 3, 4, 5]

// LinkedHashSet - Maintains insertion order
Set<Integer> linkedSet = new LinkedHashSet<>();
```

#### Disjoint Set (Union-Find)

```java
class UnionFind {
    private int[] parent;
    private int[] rank;
    
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;  // Each element is its own parent initially
        }
    }
    
    // Find with path compression - O(α(n)) amortized
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // Path compression
        }
        return parent[x];
    }
    
    // Union by rank - O(α(n)) amortized  
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) return false;  // Already connected
        
        // Union by rank
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        return true;
    }
    
    public boolean connected(int x, int y) {
        return find(x) == find(y);
    }
}

// Usage Example - Detecting cycle in undirected graph
public static boolean hasCycle(int n, int[][] edges) {
    UnionFind uf = new UnionFind(n);
    
    for (int[] edge : edges) {
        if (!uf.union(edge[0], edge[1])) {
            return true;  // Cycle detected
        }
    }
    return false;
}
```

### What is a graph? [edges, path, vertices, adjacency matrix, adjacency list,  how it differs from the tree, different types of graphs, and most common operations with time complexities, real world examples]

### Trees [root, node, leaf, edge, height, depth, siblings, subtree, preorder, postorder and inorder, bsf, dsf, different types of trees, redblack tree, trie, mst, threaded binary tree, expression tree,  and most common operations with time complexities, real world examples]

## Algorithms [asymptotic analysis, time complexity, space complexity, real world examples]

Algorithms are step-by-step procedures for solving computational problems. Understanding algorithm complexity is crucial for writing efficient code.

### Asymptotic Analysis

**Big O Notation** - Upper bound (worst case)
**Big Ω (Omega)** - Lower bound (best case)  
**Big Θ (Theta)** - Tight bound (average case)

```java
// O(1) - Constant Time
public int getFirst(int[] arr) {
    return arr[0];  // Always takes same time
}

// O(log n) - Logarithmic Time  
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// O(n) - Linear Time
public int findMax(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {  // Visit each element once
        max = Math.max(max, arr[i]);
    }
    return max;
}

// O(n log n) - Log-linear Time
public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);      // T(n/2)
        mergeSort(arr, mid + 1, right); // T(n/2)  
        merge(arr, left, mid, right);   // O(n)
    }
    // Total: T(n) = 2T(n/2) + O(n) = O(n log n)
}

// O(n²) - Quadratic Time
public void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {        // n iterations
        for (int j = 0; j < arr.length - 1; j++) { // n iterations
            if (arr[j] > arr[j + 1]) {
                // swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

### Time Complexity Hierarchy

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

Best ←                                              → Worst
```

#### Binary Search Visualization

### Space Complexity

```java
// O(1) - Constant Space
public int sum(int a, int b) {
    return a + b;  // Only uses fixed variables
}

// O(n) - Linear Space
public int[] createArray(int n) {
    return new int[n];  // Space grows with input size
}

// O(log n) - Logarithmic Space (recursion depth)
public int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  // Call stack depth = log n
}
```

### Amortized Analysis

```java
// ArrayList.add() - O(1) amortized
// - Most additions are O(1)
// - Occasional resize is O(n)
// - Average over many operations = O(1)

public class DynamicArray {
    private int[] arr;
    private int size;
    
    public void add(int val) {
        if (size == arr.length) {
            resize();  // O(n) occasionally
        }
        arr[size++] = val;  // O(1) most of the time
    }
    
    private void resize() {
        int[] newArr = new int[arr.length * 2];
        System.arraycopy(arr, 0, newArr, 0, size);
        arr = newArr;
    }
}
```

### Master Theorem for Divide & Conquer

For recurrence: **T(n) = aT(n/b) + f(n)**

1. If f(n) = O(n^c) where c < log_b(a), then T(n) = O(n^(log_b(a)))
2. If f(n) = O(n^c) where c = log_b(a), then T(n) = O(n^c log n)  
3. If f(n) = O(n^c) where c > log_b(a), then T(n) = O(f(n))

```java
// Example: Merge Sort
// T(n) = 2T(n/2) + O(n)
// a=2, b=2, f(n)=O(n), c=1
// log_b(a) = log_2(2) = 1 = c
// Therefore: T(n) = O(n log n)
```

### Sorting algorithms [bubble sort, selection sort, insertion sort, merge sort, quick sort, heap sort, counting sort, radix sort, bucket sort, and most common operations with time complexities, real world examples]

Sorting algorithms arrange elements in a specific order. Here are the most important ones for interviews:

### Comparison-based Sorting

**1. Bubble Sort - O(n²)**
```java
public static void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

**2. Selection Sort - O(n²)**
```java
public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap minimum with first element
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}
```

**3. Insertion Sort - O(n²) worst, O(n) best**
```java
public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

**4. Merge Sort - O(n log n)**
```java
public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] leftArr = Arrays.copyOfRange(arr, left, mid + 1);
    int[] rightArr = Arrays.copyOfRange(arr, mid + 1, right + 1);
    
    int i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }
    
    while (i < leftArr.length) arr[k++] = leftArr[i++];
    while (j < rightArr.length) arr[k++] = rightArr[j++];
}
```

**5. Quick Sort - O(n log n) average, O(n²) worst**
```java
public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Swap arr[i+1] and arr[high] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}
```

**6. Heap Sort - O(n log n)**
```java
public static void heapSort(int[] arr) {
    int n = arr.length;
    
    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        
        // Call heapify on reduced heap
        heapify(arr, i, 0);
    }
}

private static void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    
    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        
        heapify(arr, n, largest);
    }
}
```

### Non-Comparison Sorting

**7. Counting Sort - O(n + k)**
```java
public static void countingSort(int[] arr) {
    int max = Arrays.stream(arr).max().orElse(0);
    int[] count = new int[max + 1];
    int[] output = new int[arr.length];
    
    // Store count of each element
    for (int num : arr) {
        count[num]++;
    }
    
    // Change count[i] to actual position
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    System.arraycopy(output, 0, arr, 0, arr.length);
}
```

**8. Radix Sort - O(d × (n + k))**
```java
public static void radixSort(int[] arr) {
    int max = Arrays.stream(arr).max().orElse(0);
    
    // Do counting sort for every digit
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

private static void countingSortByDigit(int[] arr, int exp) {
    int[] output = new int[arr.length];
    int[] count = new int[10];
    
    // Store count of occurrences
    for (int num : arr) {
        count[(num / exp) % 10]++;
    }
    
    // Change count[i] to actual position
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    
    System.arraycopy(output, 0, arr, 0, arr.length);
}
```

### Sorting Algorithm Comparison

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(k) | Yes |
| Radix Sort | O(d(n + k)) | O(d(n + k)) | O(d(n + k)) | O(n + k) | Yes |

### Java Built-in Sorting

```java
import java.util.*;

// Arrays.sort() - uses Dual-Pivot Quicksort
int[] arr = {64, 34, 25, 12, 22, 11, 90};
Arrays.sort(arr);

// Collections.sort() - uses TimSort (hybrid of merge/insertion sort)
List<Integer> list = Arrays.asList(64, 34, 25, 12, 22, 11, 90);
Collections.sort(list);

// Custom comparator
Arrays.sort(arr, (a, b) -> b - a);  // Descending order
```

#### Real-World Applications
- **Database Systems**: Query result ordering
- **Search Engines**: Page ranking algorithms
- **Operating Systems**: Process scheduling
- **Graphics**: Polygon rendering, collision detection
- **Finance**: Stock price analysis, risk assessment

### Searching algorithms [linear search, binary search, jump search, exponential search, interpolation search, and most common operations with time complexities, real world examples, binary search tree, redblack tree, trie, and most common operations with time complexities, real world examples]

---

## Summary

This comprehensive DSA cheatsheet covers the fundamental data structures and algorithms essential for coding interviews and competitive programming. Each section includes:

✅ **Complete Java implementations** with proper syntax  
✅ **Time and space complexity analysis** 
✅ **Real-world applications and examples**  
✅ **Interview patterns and common pitfalls**  
✅ **Best practices and optimization techniques**

### What's Next?

Future posts will expand on:
- **Advanced Tree Structures**: Red-black trees, AVL trees, B-trees
- **Graph Algorithms**: DFS, BFS, Dijkstra, Floyd-Warshall
- **Dynamic Programming**: Memoization, tabulation patterns
- **Advanced Topics**: Segment trees, fenwick trees, tries
- **System Design**: Scalability patterns using these data structures

### Quick Reference Links
- [Arrays](#arrays) | [Linked Lists](#linked-lists) | [Stacks](#stacks) | [Queues](#queues)
- [Hash Tables](#hash-tables) | [Sets](#sets) | [Sorting](#sorting-algorithms)
- [Time Complexity](#asymptotic-analysis) | [Space Optimization](#space-complexity)

Remember: **Understanding concepts > Memorizing code**. Focus on the underlying principles and practice implementing these from scratch!

**Greedy algorithms** make locally optimal choices at each step, hoping to find a global optimum. They work well for optimization problems with greedy choice property.

#### Core Greedy Strategy
1. Make the locally optimal choice
2. Reduce problem to smaller subproblem  
3. Never reconsider previous choices

#### Classic Greedy Algorithms

**1. Activity Selection Problem - O(n log n)**
```java
public class GreedyAlgorithms {
    static class Activity {
        int start, end;
        Activity(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }
    
    public static List<Activity> selectActivities(Activity[] activities) {
        // Sort by end time (greedy choice)
        Arrays.sort(activities, (a, b) -> a.end - b.end);
        
        List<Activity> selected = new ArrayList<>();
        selected.add(activities[0]);
        int lastEnd = activities[0].end;
        
        for (int i = 1; i < activities.length; i++) {
            if (activities[i].start >= lastEnd) {
                selected.add(activities[i]);
                lastEnd = activities[i].end;
            }
        }
        return selected;
    }
    
    // 2. Fractional Knapsack - O(n log n)
    static class Item {
        int value, weight;
        double ratio;
        
        Item(int value, int weight) {
            this.value = value;
            this.weight = weight;
            this.ratio = (double) value / weight;
        }
    }
    
    public static double fractionalKnapsack(int capacity, Item[] items) {
        // Sort by value-to-weight ratio (greedy choice)
        Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
        
        double totalValue = 0;
        int currentWeight = 0;
        
        for (Item item : items) {
            if (currentWeight + item.weight <= capacity) {
                // Take whole item
                currentWeight += item.weight;
                totalValue += item.value;
            } else {
                // Take fraction of item
                int remainingCapacity = capacity - currentWeight;
                totalValue += item.ratio * remainingCapacity;
                break;
            }
        }
        return totalValue;
    }
    
    // 3. Huffman Coding - O(n log n)
    static class HuffmanNode {
        int freq;
        char ch;
        HuffmanNode left, right;
        
        HuffmanNode(char ch, int freq) {
            this.ch = ch;
            this.freq = freq;
        }
        
        HuffmanNode(int freq, HuffmanNode left, HuffmanNode right) {
            this.freq = freq;
            this.left = left;
            this.right = right;
        }
    }
    
    public static HuffmanNode buildHuffmanTree(char[] chars, int[] freq) {
        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);
        
        // Create leaf nodes
        for (int i = 0; i < chars.length; i++) {
            pq.offer(new HuffmanNode(chars[i], freq[i]));
        }
        
        // Build tree bottom-up (greedy: always combine two minimum frequency nodes)
        while (pq.size() > 1) {
            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();
            HuffmanNode merged = new HuffmanNode(left.freq + right.freq, left, right);
            pq.offer(merged);
        }
        
        return pq.poll();
    }
}
```

#### Graph Algorithms - MST

**Kruskal's Algorithm - O(E log E)**
```java
class KruskalMST {
    static class Edge {
        int src, dest, weight;
        Edge(int src, int dest, int weight) {
            this.src = src; this.dest = dest; this.weight = weight;
        }
    }
    
    public static List<Edge> kruskalMST(int vertices, Edge[] edges) {
        // Sort edges by weight (greedy choice)
        Arrays.sort(edges, (a, b) -> a.weight - b.weight);
        
        UnionFind uf = new UnionFind(vertices);
        List<Edge> mst = new ArrayList<>();
        
        for (Edge edge : edges) {
            // Add edge if it doesn't create cycle
            if (uf.union(edge.src, edge.dest)) {
                mst.add(edge);
                if (mst.size() == vertices - 1) break;
            }
        }
        return mst;
    }
}
```

**Prim's Algorithm - O(V²) or O(E log V) with priority queue**
```java
class PrimMST {
    public static List<Edge> primMST(int[][] graph) {
        int vertices = graph.length;
        boolean[] inMST = new boolean[vertices];
        int[] key = new int[vertices];
        int[] parent = new int[vertices];
        
        Arrays.fill(key, Integer.MAX_VALUE);
        key[0] = 0;
        parent[0] = -1;
        
        List<Edge> mst = new ArrayList<>();
        
        for (int count = 0; count < vertices - 1; count++) {
            // Find minimum key vertex not in MST (greedy choice)
            int u = minKey(key, inMST);
            inMST[u] = true;
            
            if (parent[u] != -1) {
                mst.add(new Edge(parent[u], u, graph[parent[u]][u]));
            }
            
            // Update key values of adjacent vertices
            for (int v = 0; v < vertices; v++) {
                if (graph[u][v] != 0 && !inMST[v] && graph[u][v] < key[v]) {
                    parent[v] = u;
                    key[v] = graph[u][v];
                }
            }
        }
        return mst;
    }
    
    private static int minKey(int[] key, boolean[] inMST) {
        int min = Integer.MAX_VALUE, minIndex = -1;
        for (int v = 0; v < key.length; v++) {
            if (!inMST[v] && key[v] < min) {
                min = key[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
}
```

#### More Greedy Examples

```java
public class MoreGreedyAlgorithms {
    // 4. Coin Change (Greedy - works for standard denominations)
    public static List<Integer> coinChangeGreedy(int[] coins, int amount) {
        Arrays.sort(coins);  // Sort in ascending order
        List<Integer> result = new ArrayList<>();
        
        // Start with largest denomination (greedy choice)
        for (int i = coins.length - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                result.add(coins[i]);
                amount -= coins[i];
            }
        }
        return amount == 0 ? result : new ArrayList<>();  // Empty if no solution
    }
    
    // 5. Job Scheduling - O(n log n)
    static class Job {
        char id;
        int deadline, profit;
        Job(char id, int deadline, int profit) {
            this.id = id; this.deadline = deadline; this.profit = profit;
        }
    }
    
    public static List<Job> jobScheduling(Job[] jobs, int maxTime) {
        // Sort by profit in descending order (greedy choice)
        Arrays.sort(jobs, (a, b) -> b.profit - a.profit);
        
        boolean[] timeSlots = new boolean[maxTime];
        List<Job> scheduled = new ArrayList<>();
        
        for (Job job : jobs) {
            // Find latest available slot before deadline
            for (int t = Math.min(maxTime - 1, job.deadline - 1); t >= 0; t--) {
                if (!timeSlots[t]) {
                    timeSlots[t] = true;
                    scheduled.add(job);
                    break;
                }
            }
        }
        return scheduled;
    }
    
    // 6. Gas Station Problem - O(n)
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, currentGas = 0, start = 0;
        
        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i] - cost[i];
            currentGas += gas[i] - cost[i];
            
            // If current gas becomes negative, start from next station
            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }
        
        return totalGas >= 0 ? start : -1;
    }
}
```

#### When to Use Greedy vs Other Approaches

| Problem Type | Greedy | Dynamic Programming | Backtracking |
|--------------|--------|-------------------|--------------|
| Optimization with greedy choice property | ✅ | ❌ | ❌ |
| Multiple optimal solutions exist | ❌ | ✅ | ✅ |
| Need to explore all possibilities | ❌ | ❌ | ✅ |
| Overlapping subproblems | ❌ | ✅ | ❌ |

#### Real-World Applications
- **Operating Systems**: CPU scheduling, memory allocation
- **Network Routing**: Shortest path algorithms (Dijkstra)
- **Data Compression**: Huffman coding, LZ77
- **Finance**: Portfolio optimization, trading strategies
- **Resource Allocation**: Load balancing, task assignment
- **Graph Theory**: Minimum spanning trees, network design

**Backtracking** is a systematic method for solving problems by exploring all potential solutions and abandoning ("backtracking") from paths that don't lead to a solution.

#### Core Backtracking Template
```java
public boolean backtrack(parameters) {
    // Base case - found solution or invalid state
    if (isComplete(parameters)) {
        if (isValid(parameters)) {
            // Process solution
            return true; // or false to continue searching
        }
        return false;
    }
    
    // Try all possible choices
    for (choice : choices) {
        // Make choice
        makeChoice(choice);
        
        // Recurse
        if (backtrack(updatedParameters)) {
            return true; // Found solution
        }
        
        // Backtrack - undo choice
        undoChoice(choice);
    }
    
    return false; // No solution found
}
```

#### Classic Backtracking Problems

**1. N-Queens Problem - O(N!)**
```java
public class BacktrackingAlgorithms {
    
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> solutions = new ArrayList<>();
        int[] queens = new int[n]; // queens[i] = column position of queen in row i
        solve(0, queens, solutions);
        return solutions;
    }
    
    private static void solve(int row, int[] queens, List<List<String>> solutions) {
        if (row == queens.length) {
            // Found complete solution
            solutions.add(generateBoard(queens));
            return;
        }
        
        // Try placing queen in each column of current row
        for (int col = 0; col < queens.length; col++) {
            if (isValid(queens, row, col)) {
                queens[row] = col;          // Make choice
                solve(row + 1, queens, solutions);  // Recurse
                // No need to explicitly backtrack (queens[row] will be overwritten)
            }
        }
    }
    
    private static boolean isValid(int[] queens, int row, int col) {
        for (int i = 0; i < row; i++) {
            // Check column and diagonal conflicts
            if (queens[i] == col || 
                queens[i] - i == col - row || 
                queens[i] + i == col + row) {
                return false;
            }
        }
        return true;
    }
    
    private static List<String> generateBoard(int[] queens) {
        List<String> board = new ArrayList<>();
        for (int i = 0; i < queens.length; i++) {
            char[] row = new char[queens.length];
            Arrays.fill(row, '.');
            row[queens[i]] = 'Q';
            board.add(new String(row));
        }
        return board;
    }
    
    // 2. Generate Parentheses - O(4^n / √n)
    public static List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack("", 0, 0, n, result);
        return result;
    }
    
    private static void backtrack(String current, int open, int close, int n, List<String> result) {
        // Base case - complete string
        if (current.length() == 2 * n) {
            result.add(current);
            return;
        }
        
        // Add opening parenthesis if we haven't used all
        if (open < n) {
            backtrack(current + "(", open + 1, close, n, result);
        }
        
        // Add closing parenthesis if it would be valid
        if (close < open) {
            backtrack(current + ")", open, close + 1, n, result);
        }
    }
    
    // 3. Sudoku Solver - O(9^(n*n))
    public static boolean solveSudoku(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    // Try digits 1-9
                    for (char digit = '1'; digit <= '9'; digit++) {
                        if (isValidSudoku(board, row, col, digit)) {
                            board[row][col] = digit;    // Make choice
                            
                            if (solveSudoku(board)) {   // Recurse
                                return true;
                            }
                            
                            board[row][col] = '.';      // Backtrack
                        }
                    }
                    return false; // No valid digit found
                }
            }
        }
        return true; // All cells filled
    }
    
    private static boolean isValidSudoku(char[][] board, int row, int col, char digit) {
        // Check row, column, and 3x3 box
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == digit) return false;           // Row check
            if (board[i][col] == digit) return false;           // Column check
            
            // 3x3 box check
            int boxRow = 3 * (row / 3) + i / 3;
            int boxCol = 3 * (col / 3) + i % 3;
            if (board[boxRow][boxCol] == digit) return false;
        }
        return true;
    }
}
```

#### More Backtracking Examples

```java
public class MoreBacktrackingProblems {
    
    // 4. Word Search - O(N * 4^L) where L is word length
    public static boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (dfs(board, word, 0, i, j)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    private static boolean dfs(char[][] board, String word, int index, int row, int col) {
        // Base case - found complete word
        if (index == word.length()) return true;
        
        // Boundary and character check
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            board[row][col] != word.charAt(index)) {
            return false;
        }
        
        char temp = board[row][col];
        board[row][col] = '#';  // Mark as visited
        
        // Explore all 4 directions
        boolean found = dfs(board, word, index + 1, row + 1, col) ||
                       dfs(board, word, index + 1, row - 1, col) ||
                       dfs(board, word, index + 1, row, col + 1) ||
                       dfs(board, word, index + 1, row, col - 1);
        
        board[row][col] = temp; // Backtrack
        return found;
    }
    
    // 5. Permutations - O(N!)
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        generatePermutations(nums, current, used, result);
        return result;
    }
    
    private static void generatePermutations(int[] nums, List<Integer> current, 
                                           boolean[] used, List<List<Integer>> result) {
        // Base case - complete permutation
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                current.add(nums[i]);      // Make choice
                used[i] = true;
                
                generatePermutations(nums, current, used, result);  // Recurse
                
                current.remove(current.size() - 1);  // Backtrack
                used[i] = false;
            }
        }
    }
    
    // 6. Combination Sum - O(2^N)
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        Arrays.sort(candidates); // Sort for optimization
        backtrack(candidates, target, 0, current, result);
        return result;
    }
    
    private static void backtrack(int[] candidates, int target, int start,
                                List<Integer> current, List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int i = start; i < candidates.length; i++) {
            if (candidates[i] > target) break; // Optimization
            
            current.add(candidates[i]);        // Make choice
            backtrack(candidates, target - candidates[i], i, current, result);  // Recurse
            current.remove(current.size() - 1); // Backtrack
        }
    }
    
    // 7. Palindrome Partitioning - O(2^N)
    public static List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        List<String> current = new ArrayList<>();
        backtrack(s, 0, current, result);
        return result;
    }
    
    private static void backtrack(String s, int start, List<String> current, List<List<String>> result) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int end = start; end < s.length(); end++) {
            String substring = s.substring(start, end + 1);
            if (isPalindrome(substring)) {
                current.add(substring);                    // Make choice
                backtrack(s, end + 1, current, result);   // Recurse
                current.remove(current.size() - 1);       // Backtrack
            }
        }
    }
    
    private static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) {
                return false;
            }
        }
        return true;
    }
}
```

#### Time Complexity Analysis

| Problem | Time Complexity | Space Complexity | Why |
|---------|----------------|------------------|-----|
| N-Queens | O(N!) | O(N) | Try N positions in first row, N-1 in second, etc. |
| Generate Parentheses | O(4^n / √n) | O(n) | Catalan number bounds |
| Sudoku | O(9^(n²)) | O(n²) | 9 choices per empty cell |
| Permutations | O(N! × N) | O(N) | N! permutations, N time to copy each |
| Combinations | O(2^N) | O(N) | Each element can be included or excluded |

#### Optimization Techniques

```java
public class BacktrackingOptimizations {
    
    // 1. Pruning - Early termination
    public static boolean canPartitionKSubsets(int[] nums, int k) {
        int sum = Arrays.stream(nums).sum();
        if (sum % k != 0) return false; // Early pruning
        
        int target = sum / k;
        Arrays.sort(nums);
        
        // More pruning
        if (nums[nums.length - 1] > target) return false;
        
        return backtrack(nums, new boolean[nums.length], k, 0, 0, target);
    }
    
    // 2. Constraint Propagation - Forward checking
    private static boolean backtrack(int[] nums, boolean[] used, int k, int start, int sum, int target) {
        if (k == 1) return true; // Last subset automatically works
        if (sum == target) {
            return backtrack(nums, used, k - 1, 0, 0, target);
        }
        
        for (int i = start; i < nums.length; i++) {
            if (used[i] || sum + nums[i] > target) continue; // Pruning
            
            used[i] = true;
            if (backtrack(nums, used, k, i + 1, sum + nums[i], target)) {
                return true;
            }
            used[i] = false;
            
            // Additional pruning: if this number doesn't work, 
            // don't try other identical numbers
            while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++;
        }
        return false;
    }
}
```

#### Real-World Applications
- **Game AI**: Chess engines, puzzle solvers
- **Constraint Satisfaction**: Scheduling, resource allocation
- **Combinatorial Optimization**: Route planning, task assignment
- **Parsing**: Syntax analysis, pattern matching
- **Cryptography**: Key generation, cryptanalysis
- **Bioinformatics**: Sequence alignment, protein folding
- **Circuit Design**: Logic synthesis, placement optimization

### Dynamic programming [memoization, tabulation, and most common operations with time complexities, real world examples]

**Dynamic Programming (DP)** solves complex problems by breaking them into overlapping subproblems and storing results to avoid redundant calculations.

#### Core DP Principles
1. **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems**: Same subproblems are solved multiple times
3. **Memoization**: Top-down approach with recursion + caching
4. **Tabulation**: Bottom-up approach filling table iteratively

#### DP Implementation Approaches

**Memoization (Top-Down)**
```java
// Fibonacci with memoization - O(n)
public class DPMemoization {
    private Map<Integer, Integer> memo = new HashMap<>();
    
    public int fibonacci(int n) {
        if (n <= 1) return n;
        if (memo.containsKey(n)) return memo.get(n);
        
        int result = fibonacci(n - 1) + fibonacci(n - 2);
        memo.put(n, result);
        return result;
    }
}
```

**Tabulation (Bottom-Up)**
```java
// Fibonacci with tabulation - O(n)
public class DPTabulation {
    public int fibonacci(int n) {
        if (n <= 1) return n;
        
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
    
    // Space-optimized version - O(1) space
    public int fibonacciOptimized(int n) {
        if (n <= 1) return n;
        
        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}
```

#### Classic DP Problems

**1. 0/1 Knapsack - O(n × W)**
```java
public class DynamicProgramming {
    
    // Memoization approach
    private Integer[][] memo;
    
    public int knapsack(int[] weights, int[] values, int capacity) {
        memo = new Integer[weights.length][capacity + 1];
        return knapsackMemo(weights, values, capacity, 0);
    }
    
    private int knapsackMemo(int[] weights, int[] values, int capacity, int index) {
        // Base case
        if (index == weights.length || capacity == 0) return 0;
        
        if (memo[index][capacity] != null) return memo[index][capacity];
        
        // Don't take current item
        int exclude = knapsackMemo(weights, values, capacity, index + 1);
        
        // Take current item (if it fits)
        int include = 0;
        if (weights[index] <= capacity) {
            include = values[index] + knapsackMemo(weights, values, 
                     capacity - weights[index], index + 1);
        }
        
        memo[index][capacity] = Math.max(include, exclude);
        return memo[index][capacity];
    }
    
    // Tabulation approach
    public int knapsackTabulation(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                // Don't take item i-1
                dp[i][w] = dp[i - 1][w];
                
                // Take item i-1 if it fits
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i][w], 
                              values[i - 1] + dp[i - 1][w - weights[i - 1]]);
                }
            }
        }
        return dp[n][capacity];
    }
    
    // 2. Longest Common Subsequence - O(m × n)
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
    
    // 3. Edit Distance (Levenshtein) - O(m × n)
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];  // No operation needed
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j],      // Delete
                                           Math.min(dp[i][j - 1],  // Insert
                                                   dp[i - 1][j - 1])); // Replace
                }
            }
        }
        return dp[m][n];
    }
    
    // 4. Coin Change - O(amount × coins)
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);  // Initialize with impossible value
        dp[0] = 0;
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    // 5. Longest Increasing Subsequence - O(n²) or O(n log n)
    public int lengthOfLIS(int[] nums) {
        if (nums.length == 0) return 0;
        
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        int maxLength = 1;
        
        for (int i = 1; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLength = Math.max(maxLength, dp[i]);
        }
        return maxLength;
    }
    
    // Optimized LIS with binary search - O(n log n)
    public int lengthOfLISOptimized(int[] nums) {
        List<Integer> tails = new ArrayList<>();
        
        for (int num : nums) {
            int left = 0, right = tails.size();
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (tails.get(mid) < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            
            if (left == tails.size()) {
                tails.add(num);
            } else {
                tails.set(left, num);
            }
        }
        return tails.size();
    }
}
```

#### Advanced DP Patterns

**1. Kadane's Algorithm - Maximum Subarray**
```java
public class AdvancedDP {
    
    // Maximum Subarray Sum - O(n)
    public int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }
    
    // 2. House Robber - O(n)
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int prev2 = nums[0];
        int prev1 = Math.max(nums[0], nums[1]);
        
        for (int i = 2; i < nums.length; i++) {
            int current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
    
    // 3. Unique Paths - O(m × n)
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        
        // Initialize first row and column
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
    
    // Space optimized - O(n)
    public int uniquePathsOptimized(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        return dp[n - 1];
    }
    
    // 4. Palindromic Substrings - O(n²)
    public int countSubstrings(String s) {
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        int count = 0;
        
        // Every single character is a palindrome
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
            count++;
        }
        
        // Check for palindromes of length 2
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                dp[i][i + 1] = true;
                count++;
            }
        }
        
        // Check for palindromes of length 3 and more
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    count++;
                }
            }
        }
        return count;
    }
    
    // 5. Word Break - O(n²)
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}
```

#### Matrix Chain Multiplication Pattern

```java
public class MatrixChainDP {
    
    // Matrix Chain Multiplication - O(n³)
    public int matrixChainOrder(int[] p) {
        int n = p.length - 1;
        int[][] dp = new int[n][n];
        
        // Length of chain
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                // Try all possible split points
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
        return dp[0][n - 1];
    }
    
    // Burst Balloons - O(n³)
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] arr = new int[n + 2];
        arr[0] = arr[n + 1] = 1;
        for (int i = 0; i < n; i++) arr[i + 1] = nums[i];
        
        int[][] dp = new int[n + 2][n + 2];
        
        for (int len = 2; len <= n + 1; len++) {
            for (int left = 0; left <= n + 1 - len; left++) {
                int right = left + len;
                for (int k = left + 1; k < right; k++) {
                    dp[left][right] = Math.max(dp[left][right],
                        dp[left][k] + dp[k][right] + arr[left] * arr[k] * arr[right]);
                }
            }
        }
        return dp[0][n + 1];
    }
}
```

#### DP on Trees

```java
// House Robber III - Tree DP
public class TreeDP {
    
    public int rob(TreeNode root) {
        int[] result = robHelper(root);
        return Math.max(result[0], result[1]);
    }
    
    // returns [rob, not_rob]
    private int[] robHelper(TreeNode node) {
        if (node == null) return new int[]{0, 0};
        
        int[] left = robHelper(node.left);
        int[] right = robHelper(node.right);
        
        // If we rob current node, we can't rob children
        int rob = node.val + left[1] + right[1];
        
        // If we don't rob current node, take max from children
        int notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        
        return new int[]{rob, notRob};
    }
}
```

#### Time & Space Complexity Patterns

| Problem Type | Time | Space | Pattern |
|-------------|------|-------|---------|
| 1D DP | O(n) | O(n) → O(1) | Linear scan with optimization |
| 2D Grid DP | O(m×n) | O(m×n) → O(n) | Matrix traversal |
| Substring DP | O(n²) | O(n²) | All pairs comparison |
| Tree DP | O(n) | O(h) | DFS with state |
| Interval DP | O(n³) | O(n²) | Matrix chain pattern |

#### When to Use DP vs Other Approaches

✅ **Use DP when:**
- Problem has optimal substructure
- Overlapping subproblems exist
- Brute force has exponential time complexity
- Need to count/optimize something

❌ **Don't use DP when:**
- No overlapping subproblems (use divide & conquer)
- Greedy choice property exists (use greedy)
- Need to find all solutions (use backtracking)

#### Real-World Applications
- **Bioinformatics**: DNA sequence alignment, protein folding
- **Finance**: Portfolio optimization, option pricing
- **Operations Research**: Resource allocation, scheduling
- **Computer Graphics**: Image processing, compression
- **Natural Language Processing**: Speech recognition, machine translation
- **Game Theory**: Strategic decision making, AI gaming

**Encryption** transforms readable data (plaintext) into unreadable form (ciphertext) to protect confidentiality.

#### Symmetric Encryption

**1. Caesar Cipher - O(n)**
```java
public class EncryptionAlgorithms {
    
    // Caesar Cipher - Simple substitution
    public static String caesarEncrypt(String text, int shift) {
        StringBuilder result = new StringBuilder();
        
        for (char ch : text.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                ch = (char) ((ch - base + shift) % 26 + base);
            }
            result.append(ch);
        }
        return result.toString();
    }
    
    public static String caesarDecrypt(String ciphertext, int shift) {
        return caesarEncrypt(ciphertext, -shift);
    }
    
    // 2. XOR Cipher - O(n)
    public static String xorCipher(String text, String key) {
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < text.length(); i++) {
            char textChar = text.charAt(i);
            char keyChar = key.charAt(i % key.length());
            result.append((char) (textChar ^ keyChar));
        }
        return result.toString();
    }
    
    // 3. Advanced Encryption Standard (AES) - Conceptual
    public static byte[] aesEncrypt(byte[] plaintext, byte[] key) {
        // This is a simplified representation
        // Real AES uses 128-bit blocks, 10/12/14 rounds
        try {
            javax.crypto.Cipher cipher = javax.crypto.Cipher.getInstance("AES");
            javax.crypto.spec.SecretKeySpec keySpec = new javax.crypto.spec.SecretKeySpec(key, "AES");
            cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, keySpec);
            return cipher.doFinal(plaintext);
        } catch (Exception e) {
            throw new RuntimeException("Encryption failed", e);
        }
    }
    
    public static byte[] aesDecrypt(byte[] ciphertext, byte[] key) {
        try {
            javax.crypto.Cipher cipher = javax.crypto.Cipher.getInstance("AES");
            javax.crypto.spec.SecretKeySpec keySpec = new javax.crypto.spec.SecretKeySpec(key, "AES");
            cipher.init(javax.crypto.Cipher.DECRYPT_MODE, keySpec);
            return cipher.doFinal(ciphertext);
        } catch (Exception e) {
            throw new RuntimeException("Decryption failed", e);
        }
    }
}
```

#### Asymmetric Encryption (Public Key)

**RSA Algorithm - O(log³ n)**
```java
import java.math.BigInteger;
import java.security.SecureRandom;

public class RSAEncryption {
    private BigInteger n, d, e;  // n=modulus, d=private, e=public
    
    public RSAEncryption(int bitLength) {
        SecureRandom random = new SecureRandom();
        
        // 1. Generate two large primes
        BigInteger p = BigInteger.probablePrime(bitLength / 2, random);
        BigInteger q = BigInteger.probablePrime(bitLength / 2, random);
        
        // 2. Compute n = p * q
        n = p.multiply(q);
        
        // 3. Compute φ(n) = (p-1)(q-1)
        BigInteger phi = p.subtract(BigInteger.ONE).multiply(q.subtract(BigInteger.ONE));
        
        // 4. Choose e (commonly 65537)
        e = BigInteger.valueOf(65537);
        
        // 5. Compute d = e^(-1) mod φ(n)
        d = e.modInverse(phi);
    }
    
    // Encrypt with public key (e, n)
    public BigInteger encrypt(BigInteger message) {
        return message.modPow(e, n);
    }
    
    // Decrypt with private key (d, n)
    public BigInteger decrypt(BigInteger ciphertext) {
        return ciphertext.modPow(d, n);
    }
    
    // Digital signature
    public BigInteger sign(BigInteger message) {
        return message.modPow(d, n);  // Sign with private key
    }
    
    public boolean verify(BigInteger message, BigInteger signature) {
        return message.equals(signature.modPow(e, n));  // Verify with public key
    }
}
```

#### Hash Functions

```java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashingAlgorithms {
    
    // Simple hash function - O(n)
    public static int simpleHash(String input) {
        int hash = 0;
        for (char ch : input.toCharArray()) {
            hash = (hash * 31 + ch) % 1000007;  // Large prime
        }
        return hash;
    }
    
    // SHA-256 using Java's built-in
    public static String sha256(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(input.getBytes());
            
            StringBuilder hexString = new StringBuilder();
            for (byte b : hashBytes) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 not available", e);
        }
    }
    
    // Password hashing with salt
    public static String hashPassword(String password, String salt) {
        return sha256(password + salt);
    }
    
    public static boolean verifyPassword(String password, String salt, String hashedPassword) {
        return hashPassword(password, salt).equals(hashedPassword);
    }
}
```

#### Time Complexities

| Algorithm | Key Generation | Encryption | Decryption | Security Level |
|-----------|---------------|------------|------------|----------------|
| Caesar Cipher | O(1) | O(n) | O(n) | Very Low |
| XOR Cipher | O(k) | O(n) | O(n) | Low |
| AES | O(1) | O(n) | O(n) | High |
| RSA | O(k³) | O(log³ n) | O(log³ n) | High |
| SHA-256 | - | O(n) | - | Hash only |

**Data compression** reduces file size by eliminating redundancy. There are two types: lossless (exact reconstruction) and lossy (approximate reconstruction).

#### Huffman Coding - O(n log n)

```java
import java.util.*;

public class CompressionAlgorithms {
    
    // Huffman Tree Node
    static class HuffmanNode implements Comparable<HuffmanNode> {
        int freq;
        char ch;
        HuffmanNode left, right;
        
        HuffmanNode(char ch, int freq) {
            this.ch = ch;
            this.freq = freq;
        }
        
        HuffmanNode(int freq, HuffmanNode left, HuffmanNode right) {
            this.freq = freq;
            this.left = left;
            this.right = right;
        }
        
        @Override
        public int compareTo(HuffmanNode other) {
            return Integer.compare(this.freq, other.freq);
        }
        
        boolean isLeaf() {
            return left == null && right == null;
        }
    }
    
    // Build Huffman Tree
    public static HuffmanNode buildHuffmanTree(Map<Character, Integer> frequencies) {
        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>();
        
        // Create leaf nodes for each character
        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
            pq.offer(new HuffmanNode(entry.getKey(), entry.getValue()));
        }
        
        // Build tree bottom-up
        while (pq.size() > 1) {
            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();
            HuffmanNode merged = new HuffmanNode(left.freq + right.freq, left, right);
            pq.offer(merged);
        }
        
        return pq.poll();
    }
    
    // Generate Huffman codes
    public static Map<Character, String> generateCodes(HuffmanNode root) {
        Map<Character, String> codes = new HashMap<>();
        if (root.isLeaf()) {
            codes.put(root.ch, "0");  // Special case for single character
        } else {
            generateCodesRecursive(root, "", codes);
        }
        return codes;
    }
    
    private static void generateCodesRecursive(HuffmanNode node, String code, Map<Character, String> codes) {
        if (node.isLeaf()) {
            codes.put(node.ch, code);
        } else {
            generateCodesRecursive(node.left, code + "0", codes);
            generateCodesRecursive(node.right, code + "1", codes);
        }
    }
    
    // Compress text using Huffman coding
    public static String compress(String text) {
        // Count character frequencies
        Map<Character, Integer> frequencies = new HashMap<>();
        for (char ch : text.toCharArray()) {
            frequencies.merge(ch, 1, Integer::sum);
        }
        
        // Build Huffman tree and generate codes
        HuffmanNode root = buildHuffmanTree(frequencies);
        Map<Character, String> codes = generateCodes(root);
        
        // Encode text
        StringBuilder compressed = new StringBuilder();
        for (char ch : text.toCharArray()) {
            compressed.append(codes.get(ch));
        }
        
        return compressed.toString();
    }
    
    // Decompress using Huffman tree
    public static String decompress(String compressed, HuffmanNode root) {
        StringBuilder decompressed = new StringBuilder();
        HuffmanNode current = root;
        
        for (char bit : compressed.toCharArray()) {
            if (bit == '0') {
                current = current.left;
            } else {
                current = current.right;
            }
            
            if (current.isLeaf()) {
                decompressed.append(current.ch);
                current = root;  // Reset to root
            }
        }
        
        return decompressed.toString();
    }
}
```

#### Run-Length Encoding (RLE) - O(n)

```java
public class RunLengthEncoding {
    
    // Compress using RLE
    public static String compress(String text) {
        if (text.isEmpty()) return text;
        
        StringBuilder compressed = new StringBuilder();
        char current = text.charAt(0);
        int count = 1;
        
        for (int i = 1; i < text.length(); i++) {
            if (text.charAt(i) == current) {
                count++;
            } else {
                compressed.append(count).append(current);
                current = text.charAt(i);
                count = 1;
            }
        }
        compressed.append(count).append(current);  // Don't forget last group
        
        return compressed.toString();
    }
    
    // Decompress RLE
    public static String decompress(String compressed) {
        StringBuilder decompressed = new StringBuilder();
        
        for (int i = 0; i < compressed.length(); i += 2) {
            int count = Character.getNumericValue(compressed.charAt(i));
            char ch = compressed.charAt(i + 1);
            
            for (int j = 0; j < count; j++) {
                decompressed.append(ch);
            }
        }
        
        return decompressed.toString();
    }
}
```

#### LZ77 Algorithm - O(n²) worst case

```java
public class LZ77Compression {
    
    static class Token {
        int offset, length;
        char nextChar;
        
        Token(int offset, int length, char nextChar) {
            this.offset = offset;
            this.length = length;
            this.nextChar = nextChar;
        }
        
        @Override
        public String toString() {
            return String.format("(%d,%d,%c)", offset, length, nextChar);
        }
    }
    
    // LZ77 compression with sliding window
    public static List<Token> compress(String text, int windowSize) {
        List<Token> tokens = new ArrayList<>();
        int pos = 0;
        
        while (pos < text.length()) {
            int searchStart = Math.max(0, pos - windowSize);
            int maxLength = 0;
            int bestOffset = 0;
            
            // Find longest match in sliding window
            for (int i = searchStart; i < pos; i++) {
                int length = 0;
                while (pos + length < text.length() && 
                       i + length < pos && 
                       text.charAt(i + length) == text.charAt(pos + length)) {
                    length++;
                }
                
                if (length > maxLength) {
                    maxLength = length;
                    bestOffset = pos - i;
                }
            }
            
            char nextChar = (pos + maxLength < text.length()) ? 
                           text.charAt(pos + maxLength) : '\0';
            
            tokens.add(new Token(bestOffset, maxLength, nextChar));
            pos += maxLength + 1;
        }
        
        return tokens;
    }
    
    // LZ77 decompression
    public static String decompress(List<Token> tokens) {
        StringBuilder result = new StringBuilder();
        
        for (Token token : tokens) {
            // Copy from sliding window
            int startPos = result.length() - token.offset;
            for (int i = 0; i < token.length; i++) {
                result.append(result.charAt(startPos + i));
            }
            
            // Add next character
            if (token.nextChar != '\0') {
                result.append(token.nextChar);
            }
        }
        
        return result.toString();
    }
}
```

#### Compression Algorithms Comparison

| Algorithm | Time Complexity | Space Complexity | Compression Ratio | Use Case |
|-----------|----------------|------------------|-------------------|----------|
| Huffman Coding | O(n log n) | O(n) | Good for text | Lossless, variable frequency |
| RLE | O(n) | O(1) | Good for repetitive data | Simple, fast |
| LZ77 | O(n²) worst | O(w) where w=window | Very good | General purpose |
| LZW | O(n) | O(dictionary) | Very good | GIF, TIFF images |
| Arithmetic Coding | O(n) | O(alphabet) | Optimal | Near-theoretical limits |

#### Real-World Applications
- **File Compression**: ZIP, RAR, 7-Zip archives
- **Image Compression**: JPEG (lossy), PNG (lossless)
- **Video Compression**: H.264, H.265, VP9
- **Database Compression**: Column-store databases
- **Network Protocols**: HTTP/2, WebSocket compression
- **Storage Systems**: Filesystem compression (NTFS, ZFS)

**Cryptography** focuses on secure communication in the presence of adversaries. Modern cryptography combines mathematics, computer science, and engineering.

#### Digital Signatures

```java
import java.security.*;
import java.security.spec.*;

public class CryptographyAlgorithms {
    
    // Digital Signature Algorithm (DSA)
    public static class DigitalSignature {
        private PrivateKey privateKey;
        private PublicKey publicKey;
        
        public DigitalSignature() throws Exception {
            KeyPairGenerator keyGen = KeyPairGenerator.getInstance("DSA");
            keyGen.initialize(2048);
            KeyPair keyPair = keyGen.generateKeyPair();
            
            privateKey = keyPair.getPrivate();
            publicKey = keyPair.getPublic();
        }
        
        // Sign message - O(log³ n)
        public byte[] sign(byte[] message) throws Exception {
            Signature signature = Signature.getInstance("SHA256withDSA");
            signature.initSign(privateKey);
            signature.update(message);
            return signature.sign();
        }
        
        // Verify signature - O(log³ n)  
        public boolean verify(byte[] message, byte[] signatureBytes) throws Exception {
            Signature signature = Signature.getInstance("SHA256withDSA");
            signature.initVerify(publicKey);
            signature.update(message);
            return signature.verify(signatureBytes);
        }
    }
}
```

#### Key Exchange Algorithms

```java
import javax.crypto.KeyAgreement;
import java.security.KeyPair;
import java.security.KeyPairGenerator;

public class KeyExchange {
    
    // Diffie-Hellman Key Exchange - O(log³ n)
    public static class DiffieHellman {
        private KeyPair keyPair;
        
        public DiffieHellman() throws Exception {
            KeyPairGenerator keyGen = KeyPairGenerator.getInstance("DH");
            keyGen.initialize(2048);
            keyPair = keyGen.generateKeyPair();
        }
        
        public PublicKey getPublicKey() {
            return keyPair.getPublic();
        }
        
        // Generate shared secret
        public byte[] generateSharedSecret(PublicKey otherPublicKey) throws Exception {
            KeyAgreement keyAgreement = KeyAgreement.getInstance("DH");
            keyAgreement.init(keyPair.getPrivate());
            keyAgreement.doPhase(otherPublicKey, true);
            return keyAgreement.generateSecret();
        }
    }
}
```

#### Blockchain and Hash Chains

```java
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;

public class BlockchainAlgorithms {
    
    static class Block {
        private String previousHash;
        private String data;
        private long timestamp;
        private int nonce;
        private String hash;
        
        public Block(String data, String previousHash) {
            this.data = data;
            this.previousHash = previousHash;
            this.timestamp = System.currentTimeMillis();
            this.hash = calculateHash();
        }
        
        public String calculateHash() {
            String input = previousHash + data + timestamp + nonce;
            return applySHA256(input);
        }
        
        // Proof of Work - Mining with difficulty
        public void mineBlock(int difficulty) {
            String target = new String(new char[difficulty]).replace('\0', '0');
            
            while (!hash.substring(0, difficulty).equals(target)) {
                nonce++;
                hash = calculateHash();
            }
            System.out.println("Block mined: " + hash);
        }
        
        private String applySHA256(String input) {
            try {
                MessageDigest digest = MessageDigest.getInstance("SHA-256");
                byte[] hash = digest.digest(input.getBytes("UTF-8"));
                StringBuilder hexString = new StringBuilder();
                
                for (byte b : hash) {
                    String hex = Integer.toHexString(0xff & b);
                    if (hex.length() == 1) hexString.append('0');
                    hexString.append(hex);
                }
                return hexString.toString();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        
        // Getters
        public String getHash() { return hash; }
        public String getPreviousHash() { return previousHash; }
    }
    
    static class Blockchain {
        private List<Block> chain;
        private int difficulty = 4;  // Mining difficulty
        
        public Blockchain() {
            chain = new ArrayList<>();
            createGenesisBlock();
        }
        
        private void createGenesisBlock() {
            Block genesis = new Block("Genesis Block", "0");
            genesis.mineBlock(difficulty);
            chain.add(genesis);
        }
        
        public void addBlock(String data) {
            Block previousBlock = getLatestBlock();
            Block newBlock = new Block(data, previousBlock.getHash());
            newBlock.mineBlock(difficulty);
            chain.add(newBlock);
        }
        
        public Block getLatestBlock() {
            return chain.get(chain.size() - 1);
        }
        
        // Validate blockchain integrity
        public boolean isChainValid() {
            for (int i = 1; i < chain.size(); i++) {
                Block current = chain.get(i);
                Block previous = chain.get(i - 1);
                
                // Check if current block's hash is valid
                if (!current.getHash().equals(current.calculateHash())) {
                    return false;
                }
                
                // Check if previous hash matches
                if (!current.getPreviousHash().equals(previous.getHash())) {
                    return false;
                }
            }
            return true;
        }
    }
}
```

#### Merkle Trees

```java
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;

public class MerkleTree {
    
    static class MerkleNode {
        String hash;
        MerkleNode left, right;
        
        MerkleNode(String hash) {
            this.hash = hash;
        }
        
        MerkleNode(MerkleNode left, MerkleNode right) {
            this.left = left;
            this.right = right;
            this.hash = sha256(left.hash + right.hash);
        }
    }
    
    private MerkleNode root;
    private List<String> leaves;
    
    public MerkleTree(List<String> data) {
        this.leaves = new ArrayList<>();
        for (String item : data) {
            leaves.add(sha256(item));
        }
        root = buildTree(leaves);
    }
    
    // Build Merkle tree - O(n)
    private MerkleNode buildTree(List<String> hashes) {
        if (hashes.size() == 1) {
            return new MerkleNode(hashes.get(0));
        }
        
        List<String> nextLevel = new ArrayList<>();
        
        for (int i = 0; i < hashes.size(); i += 2) {
            String left = hashes.get(i);
            String right = (i + 1 < hashes.size()) ? hashes.get(i + 1) : left;
            nextLevel.add(sha256(left + right));
        }
        
        return buildTree(nextLevel);
    }
    
    // Get Merkle proof for data verification - O(log n)
    public List<String> getMerkleProof(String data) {
        String targetHash = sha256(data);
        int index = leaves.indexOf(targetHash);
        if (index == -1) return null;
        
        List<String> proof = new ArrayList<>();
        getMerkleProofRecursive(leaves, index, proof);
        return proof;
    }
    
    private void getMerkleProofRecursive(List<String> level, int index, List<String> proof) {
        if (level.size() == 1) return;
        
        List<String> nextLevel = new ArrayList<>();
        
        for (int i = 0; i < level.size(); i += 2) {
            String left = level.get(i);
            String right = (i + 1 < level.size()) ? level.get(i + 1) : left;
            
            if (i == index || i + 1 == index) {
                // Add sibling to proof
                if (i == index) {
                    proof.add(right);
                } else {
                    proof.add(left);
                }
                index = i / 2;  // Parent index
            }
            
            nextLevel.add(sha256(left + right));
        }
        
        getMerkleProofRecursive(nextLevel, index, proof);
    }
    
    // Verify Merkle proof - O(log n)
    public boolean verifyProof(String data, List<String> proof) {
        String hash = sha256(data);
        
        for (String sibling : proof) {
            hash = sha256(hash + sibling);  // Simplified - order matters in real implementation
        }
        
        return hash.equals(root.hash);
    }
    
    private String sha256(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(input.getBytes());
            StringBuilder hexString = new StringBuilder();
            
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
    public String getRootHash() {
        return root.hash;
    }
}
```

#### Cryptographic Algorithm Complexities

| Algorithm | Key Generation | Operation | Verification | Use Case |
|-----------|---------------|-----------|--------------|----------|
| RSA | O(k³) | O(log³ n) | O(log³ n) | Digital signatures, encryption |
| DSA | O(k³) | O(log³ n) | O(log³ n) | Digital signatures only |
| ECDSA | O(k) | O(k) | O(k) | Efficient signatures |
| Diffie-Hellman | O(k³) | O(log³ n) | - | Key exchange |
| Merkle Trees | - | O(n) build | O(log n) verify | Data integrity |

#### Real-World Applications
- **Cryptocurrencies**: Bitcoin, Ethereum blockchain
- **Digital Certificates**: SSL/TLS, PKI infrastructure  
- **Secure Communications**: Signal, WhatsApp end-to-end encryption
- **Software Distribution**: Code signing, package verification
- **Identity Verification**: Digital passports, authentication
- **Data Integrity**: Git commits, software updates

**Network algorithms** solve problems related to graph connectivity, flow, and routing in computer networks and communication systems.

#### Shortest Path Algorithms

**Dijkstra's Algorithm - O((V + E) log V)**
```java
import java.util.*;

public class NetworkAlgorithms {
    
    static class Edge {
        int destination, weight;
        Edge(int destination, int weight) {
            this.destination = destination;
            this.weight = weight;
        }
    }
    
    static class Node implements Comparable<Node> {
        int vertex, distance;
        Node(int vertex, int distance) {
            this.vertex = vertex;
            this.distance = distance;
        }
        
        @Override
        public int compareTo(Node other) {
            return Integer.compare(this.distance, other.distance);
        }
    }
    
    // Dijkstra's shortest path
    public static int[] dijkstra(List<List<Edge>> graph, int source) {
        int n = graph.size();
        int[] distances = new int[n];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[source] = 0;
        
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(source, 0));
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            
            if (current.distance > distances[current.vertex]) continue;
            
            for (Edge edge : graph.get(current.vertex)) {
                int newDistance = distances[current.vertex] + edge.weight;
                
                if (newDistance < distances[edge.destination]) {
                    distances[edge.destination] = newDistance;
                    pq.offer(new Node(edge.destination, newDistance));
                }
            }
        }
        
        return distances;
    }
    
    // Floyd-Warshall all-pairs shortest paths - O(V³)
    public static int[][] floydWarshall(int[][] graph) {
        int n = graph.length;
        int[][] distances = new int[n][n];
        
        // Initialize distances
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                distances[i][j] = graph[i][j];
            }
        }
        
        // Main algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (distances[i][k] != Integer.MAX_VALUE && 
                        distances[k][j] != Integer.MAX_VALUE &&
                        distances[i][k] + distances[k][j] < distances[i][j]) {
                        distances[i][j] = distances[i][k] + distances[k][j];
                    }
                }
            }
        }
        
        return distances;
    }
}
```

#### Network Flow Algorithms

**Ford-Fulkerson Maximum Flow - O(E × maxFlow)**
```java
public class MaxFlow {
    
    // Ford-Fulkerson using BFS (Edmonds-Karp)
    public static int maxFlow(int[][] capacity, int source, int sink) {
        int n = capacity.length;
        int[][] residualGraph = new int[n][n];
        
        // Initialize residual graph
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                residualGraph[i][j] = capacity[i][j];
            }
        }
        
        int[] parent = new int[n];
        int maxFlowValue = 0;
        
        // While there's an augmenting path
        while (bfs(residualGraph, source, sink, parent)) {
            // Find minimum capacity along the path
            int pathFlow = Integer.MAX_VALUE;
            for (int v = sink; v != source; v = parent[v]) {
                int u = parent[v];
                pathFlow = Math.min(pathFlow, residualGraph[u][v]);
            }
            
            // Update residual capacities
            for (int v = sink; v != source; v = parent[v]) {
                int u = parent[v];
                residualGraph[u][v] -= pathFlow;  // Forward edge
                residualGraph[v][u] += pathFlow;  // Backward edge
            }
            
            maxFlowValue += pathFlow;
        }
        
        return maxFlowValue;
    }
    
    private static boolean bfs(int[][] residualGraph, int source, int sink, int[] parent) {
        int n = residualGraph.length;
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new LinkedList<>();
        
        queue.offer(source);
        visited[source] = true;
        parent[source] = -1;
        
        while (!queue.isEmpty()) {
            int u = queue.poll();
            
            for (int v = 0; v < n; v++) {
                if (!visited[v] && residualGraph[u][v] > 0) {
                    visited[v] = true;
                    parent[v] = u;
                    if (v == sink) return true;
                    queue.offer(v);
                }
            }
        }
        
        return false;
    }
}
```

#### Routing Algorithms

**Distance Vector Routing (Bellman-Ford based)**
```java
public class RoutingAlgorithms {
    
    static class Router {
        int id;
        Map<Integer, Integer> distanceVector;  // destination -> distance
        Map<Integer, Integer> nextHop;         // destination -> next hop
        List<Integer> neighbors;
        
        Router(int id) {
            this.id = id;
            this.distanceVector = new HashMap<>();
            this.nextHop = new HashMap<>();
            this.neighbors = new ArrayList<>();
            
            // Distance to self is 0
            distanceVector.put(id, 0);
            nextHop.put(id, id);
        }
        
        // Update routing table based on neighbor's advertisement
        public boolean updateRoutingTable(int neighbor, Map<Integer, Integer> neighborVector) {
            boolean updated = false;
            int linkCost = getDirectCost(neighbor);
            
            for (Map.Entry<Integer, Integer> entry : neighborVector.entrySet()) {
                int destination = entry.getKey();
                int neighborDistance = entry.getValue();
                
                if (neighborDistance == Integer.MAX_VALUE) continue;
                
                int newDistance = linkCost + neighborDistance;
                int currentDistance = distanceVector.getOrDefault(destination, Integer.MAX_VALUE);
                
                if (newDistance < currentDistance) {
                    distanceVector.put(destination, newDistance);
                    nextHop.put(destination, neighbor);
                    updated = true;
                }
            }
            
            return updated;
        }
        
        private int getDirectCost(int neighbor) {
            // Simplified - in real implementation, this would be actual link cost
            return neighbors.contains(neighbor) ? 1 : Integer.MAX_VALUE;
        }
    }
    
    // Simulate distance vector routing
    public static void distanceVectorRouting(List<Router> routers, int iterations) {
        for (int iter = 0; iter < iterations; iter++) {
            boolean anyUpdate = false;
            
            for (Router router : routers) {
                for (int neighbor : router.neighbors) {
                    Router neighborRouter = routers.get(neighbor);
                    boolean updated = router.updateRoutingTable(neighbor, neighborRouter.distanceVector);
                    anyUpdate |= updated;
                }
            }
            
            if (!anyUpdate) {
                System.out.println("Routing converged after " + (iter + 1) + " iterations");
                break;
            }
        }
    }
}
```

#### Network Topology Algorithms

**Spanning Tree Protocol (STP)**
```java
public class SpanningTreeProtocol {
    
    static class Bridge implements Comparable<Bridge> {
        int id, priority;
        
        Bridge(int id, int priority) {
            this.id = id;
            this.priority = priority;
        }
        
        @Override
        public int compareTo(Bridge other) {
            if (this.priority != other.priority) {
                return Integer.compare(this.priority, other.priority);
            }
            return Integer.compare(this.id, other.id);
        }
    }
    
    static class Port {
        int bridgeId, portId, cost;
        boolean isActive;
        
        Port(int bridgeId, int portId, int cost) {
            this.bridgeId = bridgeId;
            this.portId = portId;
            this.cost = cost;
            this.isActive = true;
        }
    }
    
    // Simplified STP - finds minimum spanning tree
    public static List<Edge> spanningTree(List<Bridge> bridges, List<Edge> links) {
        // Sort bridges to find root bridge (lowest priority/ID)
        Bridge rootBridge = Collections.min(bridges);
        
        List<Edge> spanningTreeEdges = new ArrayList<>();
        // Implement actual STP algorithm here
        // This is a simplified version using Kruskal's algorithm
        
        Collections.sort(links, (a, b) -> Integer.compare(a.weight, b.weight));
        UnionFind uf = new UnionFind(bridges.size());
        
        for (Edge edge : links) {
            if (uf.union(edge.src, edge.dest)) {
                spanningTreeEdges.add(edge);
                if (spanningTreeEdges.size() == bridges.size() - 1) break;
            }
        }
        
        return spanningTreeEdges;
    }
}
```

#### Load Balancing Algorithms

```java
public class LoadBalancer {
    
    static class Server {
        String id;
        int currentLoad;
        int capacity;
        
        Server(String id, int capacity) {
            this.id = id;
            this.capacity = capacity;
            this.currentLoad = 0;
        }
        
        boolean canHandle(int load) {
            return currentLoad + load <= capacity;
        }
    }
    
    // Round Robin - O(1)
    static class RoundRobinBalancer {
        private List<Server> servers;
        private int current = 0;
        
        RoundRobinBalancer(List<Server> servers) {
            this.servers = new ArrayList<>(servers);
        }
        
        public Server getNextServer() {
            Server server = servers.get(current);
            current = (current + 1) % servers.size();
            return server;
        }
    }
    
    // Least Connections - O(n)
    static class LeastConnectionsBalancer {
        private List<Server> servers;
        
        LeastConnectionsBalancer(List<Server> servers) {
            this.servers = servers;
        }
        
        public Server getNextServer() {
            return servers.stream()
                    .min((s1, s2) -> Integer.compare(s1.currentLoad, s2.currentLoad))
                    .orElse(null);
        }
    }
    
    // Weighted Round Robin - O(1) amortized
    static class WeightedRoundRobinBalancer {
        private List<Server> servers;
        private List<Integer> weights;
        private List<Integer> currentWeights;
        private int totalWeight;
        
        WeightedRoundRobinBalancer(List<Server> servers, List<Integer> weights) {
            this.servers = servers;
            this.weights = weights;
            this.currentWeights = new ArrayList<>(weights);
            this.totalWeight = weights.stream().mapToInt(Integer::intValue).sum();
        }
        
        public Server getNextServer() {
            int maxWeight = -1;
            int selectedIndex = -1;
            
            for (int i = 0; i < currentWeights.size(); i++) {
                if (currentWeights.get(i) > maxWeight) {
                    maxWeight = currentWeights.get(i);
                    selectedIndex = i;
                }
            }
            
            currentWeights.set(selectedIndex, maxWeight - totalWeight);
            for (int i = 0; i < currentWeights.size(); i++) {
                currentWeights.set(i, currentWeights.get(i) + weights.get(i));
            }
            
            return servers.get(selectedIndex);
        }
    }
}
```

#### Network Algorithm Complexities

| Algorithm | Time Complexity | Space Complexity | Use Case |
|-----------|----------------|------------------|----------|
| Dijkstra | O((V + E) log V) | O(V) | Single-source shortest path |
| Floyd-Warshall | O(V³) | O(V²) | All-pairs shortest path |
| Ford-Fulkerson | O(E × f) | O(V²) | Maximum flow |
| Distance Vector | O(V³) | O(V²) | Distributed routing |
| STP | O(E log E) | O(V) | Loop-free topology |

#### Real-World Applications
- **Internet Routing**: BGP, OSPF protocols
- **Content Delivery**: CDN optimization, load balancing
- **Network Design**: ISP topology planning
- **Traffic Engineering**: QoS, bandwidth allocation
- **Data Center Networks**: Fat-tree, spine-leaf architectures
- **Wireless Networks**: Mobile routing, mesh networks

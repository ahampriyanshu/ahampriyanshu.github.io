---
title: "March Leetcoding | 2022 | Leetcode"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Contests, Leetcode]
tags: [leetcode, leetcoding, challenge, march, ds, array, tree, trie, string, stacks, queue, linked list]
---

C++ Solutions to March Leetcoding Challenge, 2022.

## Week 1

### 1 March | 338. Counting Bits

Given an integer n, return an array ans of length ``n + 1`` such that for each ``i (0 <= i <= n), ans[i]`` is the number of 1's in the binary representation of i.

* [Practice](https://leetcode.com/problems/counting-bits/)

### Bruteforce

```cpp
class Solution {
public:
    int getSum(int n){
        int ans = 0;
        while(n){
            if(n%2) ans++;
            n /= 2;
        }
        return ans;
    }
    
    vector<int> countBits(int n) {
        vector<int> ans;
        
        for(int i=0; i<=n; i++)
            ans.push_back(getSum(i));
        
        return ans;
    }
};
```

### Maths + DP

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> res(num);
        res.push_back(0);  // for num=0
        if(num==0) return res;
        
        for(int i=1;i<=num;i++){
            if(i%2==0){
                res[i]=res[i/2];
            } else {
                res[i]=res[i-1]+1;
            }
        }
        return res;
    }
};
```

### Pure DP

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
    vector<int> result(num + 1);
    int offset = 1;
    for (int index = 1; index < num + 1; ++index){
        if (offset * 2 == index)
            offset *= 2;
        result[index] = result[index - offset] + 1;
    }
    return result;
    }
};
```

### 2 March |  392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

* [Practice](https://leetcode.com/problems/is-subsequence/)

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.empty()) return true;
        int index = 0;
        for(char ch: t)
            if(ch == s[index]) index++;
        return index > s.size() - 1;
    }
};
```

### 3 March | 413. Arithmetic Slices

An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

* For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

* [Practice](https://leetcode.com/problems/arithmetic-slices/)

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) return 0;
        int ans(0), sum(0);
        for(int i = 0; i < n - 2; i++){
            if(nums[i+1] - nums[i] == nums[i+2] - nums[i+1])
                sum++;
            else
                {
                ans += (sum*(sum+1))/2;
                sum = 0;
                }
        }
        ans += (sum*(sum+1))/2;
        return ans;
    }
};
```

### 5 March |  740. Delete and Earn

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

* Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.

* [Practice](https://leetcode.com/problems/delete-and-earn/)

```cpp
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
    int n = 10001;
    vector<int> sum(n, 0);
    vector<int> dp(n, 0);
    
    for(auto num: nums)
        sum[num] += num;
    
    dp[0] = 0;
    dp[1] = sum[1];
    for(int i=2; i<n; i++)
        dp[i] = max(dp[i-2] + sum[i], dp[i-1]);
    
    return dp[n-1];
}
};
```

## Week 2

### 7 March | 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

* [Practice](https://leetcode.com/problems/merge-two-sorted-lists/)

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode head(INT_MIN), *tail = &head;
        
        while (l1 && l2) {
            if (l1->val < l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }

        tail->next = l1 ? l1 : l2;
        return head.next;
    }
};
```

### 8 March | 141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 

Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

* [Practice](https://leetcode.com/problems/linked-list-cycle/)

```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
    
    ListNode *slow = head, *fast = head;
    
    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
        if(fast==slow) return true;
    }
    return false;
}
};
```

### 9 March | 82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

![Loading image](https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg)
* [Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* temp = new ListNode(0,head);
        ListNode* prev = temp;
        
        while(head){
            if(head->next && head->val==head->next->val){
                while(head->next && head->val==head->next->val)
                   head=head->next;
                prev->next=head->next;
            }else
                prev=prev->next;
            head=head->next;
        }
        return temp->next;
    }
};
```

### 10 March | 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

![Loading image](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
* [Practice](https://leetcode.com/problems/add-two-numbers/)

```cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

        int digit, carry = 0;
        ListNode *head = new ListNode(0);
        ListNode *node = head;
        
        while (l1 || l2)
        {
            digit = carry;
            
            if (l1){
                digit += l1->val;
                l1 = l1->next;
            }
             
            if (l2){
                digit += l2->val;
                l2 = l2->next;
            }
             
            carry = digit / 10;
            digit = digit % 10;
            node->next = new ListNode(digit);
            node = node->next;
        }
        
        if (carry) node->next = new ListNode(carry);

        return head->next;
        
    }
};
```

### 11 March | 61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

![Loading image](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

* [Practice](https://leetcode.com/problems/rotate-list/)

```cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        
        if(!head) return head;
        
        vector<int> vec;
        ListNode *curr= head;
        while(head){
            vec.push_back(head->val);
            head = head->next;
        }
        
        int n = vec.size();
        k %= n;
        reverse(vec.begin(), vec.end());
        reverse(vec.begin(), vec.begin()+k);
        reverse(vec.begin()+k, vec.end());
        
        ListNode * ans = new ListNode(vec[0]);
        ListNode * new_head = ans;
        
        for(int i=1; i<n; i++){
            ans -> next = new ListNode(vec[i]);
            ans = ans -> next;
        }
        
        return new_head;
    }
};
```

### Constant Space

```cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == NULL || head->next == NULL || k == 0) return head;
        int len = 1;
        ListNode *tail = head;
        
        while (tail->next)
            tail = tail->next, len++;
        
        tail->next = head;
        k %= len;
        for (int i = 0; i < len - k; i++)
            tail = tail->next;
            
        head = tail->next;
        tail->next = NULL;
        return head;
    }
};
```

### 12 March | 61. Copy List With Random Pointer

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

![Loading image](https://assets.leetcode.com/uploads/2019/12/18/e1.png)

* [Practice](https://leetcode.com/problems/copy-list-with-random-pointer/)

```cpp
class Solution {
public:
    Node* copyRandomList(Node* head) {
        
        unordered_map<Node*, Node*> mp;
        Node * ptr = head;
        
        while (ptr) {
            mp[ptr] =new Node(ptr->val);
            ptr = ptr->next;
        }
        
        ptr = head;
        
        while (ptr) {
            mp[ptr]->next = mp[ptr->next];
            mp[ptr]->random = mp[ptr->random];
            ptr = ptr->next;
        }
        
        return mp[head];
    }
};
```

### Constant Space

```cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == NULL || head->next == NULL || k == 0) return head;
        int len = 1;
        ListNode *tail = head;
        
        while (tail->next)
            tail = tail->next, len++;
        
        tail->next = head;
        k %= len;
        for (int i = 0; i < len - k; i++)
            tail = tail->next;
            
        head = tail->next;
        tail->next = NULL;
        return head;
    }
};
```

## Week 3

### 13 March | 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
1. Open brackets must be closed in the correct order.

* [Practice](https://leetcode.com/problems/valid-parentheses/)

```cpp
class Solution {
public:
    bool isValid(string s) {
    stack<char>st;
    for(char i : s)
    {
        if(i == '(')
            st.push(')');
        else if(i == '{')
            st.push('}');
        else if(i == '[')
            st.push(']');
        else if( st.empty() || st.top() != i)
            return false;
        else st.pop();      
    }
    return st.empty();            
    }
};
```

### 14 March | 71. Simplify Path

Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

* The path starts with a single slash '/'.
* Any two directories are separated by a single slash '/'.
* The path does not end with a trailing '/'.
* The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.

* [Practice](https://leetcode.com/problems/valid-parentheses/)

```cpp
class Solution {
public:
    string simplifyPath(string path) {
        stack <string> st;
        int n = path.size();
        for(int i=0; i<n; i++)
        {
            if(path[i] == '/')
                continue;

            string str;

            while(i<n && path[i] != '/')
                str += path[i++];

            if(str == ".")
                continue;
            else if(str == "..")
            {
                if(!st.empty())
                    st.pop();
            }
            else
                st.push(str);
        }

        string ans;

        for (auto e : st)
            ans += "/" + e;

        return st.empty() ? "/" : ans;
    }
};
```

### 15 March | 1249. Minimum Remove to Make Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
1. Open brackets must be closed in the correct order.

* [Practice](https://leetcode.com/problems/valid-parentheses/)

```cpp
class Solution {
public:
    string simplifyPath(string path) {
        stack <string> st;
        int n = path.size();
        for(int i=0; i<n; i++)
        {
            if(path[i] == '/')
                continue;

            string str;

            while(i<n && path[i] != '/')
                str += path[i++];

            if(str == ".")
                continue;
            else if(str == "..")
            {
                if(!st.empty())
                    st.pop();
            }
            else
                st.push(str);
        }

        string ans;
        while(!st.empty())
        {
            ans = "/" + st.top() + ans;
            st.pop();
        }

        return st.empty() ? "/" : ans;
    }
};
```

#### Without creating a new string

```cpp
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        stack<int> box;
        int n = s.length();
        
        for(int i=0; i<n; i++) {
            if(s[i] == ')'){
                if(!box.empty() && s[box.top()] == '(')
                    box.pop();
                else{
                    s.erase(i,1);
                    i--;
                }
            }
            else if(s[i] == '(')
                box.push(i);
            
        }
        
        while(!box.empty()) {
            s.erase(box.top(),1);
            box.pop();
        }
        
        return s;
    }
};
```


### 16 March | 20. Valid Parentheses

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

* [Practice](https://leetcode.com/problems/validate-stack-sequences/)

```cpp
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        int start=0, siz = popped.size()-1;
        if(!siz) return true;
        for(int e:pushed){
            st.push(e);
           while(!st.empty() && st.top() == popped[start]){
               st.pop();
               start++;
              if(start==siz)
                  return true;
               }
            }
     return false;          
   }
};
```

### 17 March | 856. Score of Parentheses

Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

* "()" has score 1.
* AB has score A + B, where A and B are balanced parentheses strings.
* (A) has score 2 * A, where A is a balanced parentheses string.

* [Practice](https://leetcode.com/problems/score-of-parentheses/)

```cpp
class Solution {
public:
    int scoreOfParentheses(string s) {
        int ans(0), cnt(0);
        char prev = '(';
        
        for (const char &ch: s) {
            if (ch == '(')
                cnt++;
            else {
                cnt--;
                if (prev == '(')
                    ans += pow(2, cnt);
            }
            
            prev = ch;
        }
        
        return ans;
    }
};
```

### 18 March | 316. Remove Duplicate Letters

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

* [Practice](https://leetcode.com/problems/remove-duplicate-letters/)

```cpp
class Solution {
public:
    string removeDuplicateLetters(string s) {
        
        int n = s.length();
        string ans="";
        vector<int> count(26,0);
        vector<int> visited(26,0);
        
        for(int i=0;i<n;i++)
            count[s[i]-'a']++;
        
        for(int i=0;i<n;i++){
            count[s[i]-'a']--;

            if(visited[s[i]-'a']) continue;

            while(ans.length()>0 && ans.back()>s[i] && count[ans.back()-'a']>0)
            {
                visited[ans.back()-'a']=0;
                ans.pop_back();
            }
            ans+=s[i];
             visited[s[i]-'a']=1;
        }
        return ans;
    }
};
```


### 19 March | 895. Maximum Frequency Stack

Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

* FreqStack() constructs an empty frequency stack.
* void push(int val) pushes an integer val onto the top of the stack.
* int pop() removes and returns the most frequent element in the stack.

If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

* [Practice](https://leetcode.com/problems/maximum-frequency-stack/)

```cpp
class FreqStack {
public:
    unordered_map<int,int> frequency;
    unordered_map<int,stack<int>> group_stack;
    int max_frequency=0;
    
    FreqStack() {
    }
    
    void push(int val) {
        frequency[val]++;
        max_frequency=max(max_frequency,frequency[val]);
        group_stack[frequency[val]].push(val);
    }
    
    int pop() {
        
        int ans=group_stack[max_frequency].top();
        group_stack[max_frequency].pop();
        frequency[ans]--;
        
        if(!group_stack[max_frequency].size())
            max_frequency--;
        
        return ans;
    }
};

```

### 20 March | 1007. Minimum Domino Rotations For Equal Row

In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.

* [Practice](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/)

```cpp
class Solution {
public:
    int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {
        int n = tops.size(), ans = INT_MAX;
        vector<int> faceA(7), faceB(7), same(7);
        
        for(int i = 0; i < n; ++i)
        {
            ++faceA[tops[i]];
            ++faceB[bottoms[i]];
            if(tops[i] == bottoms[i])
                ++same[tops[i]];
        }
        
        for(int i = 1; i<=6; ++i)
            if(faceA[i] + faceB[i] - same[i] == n)
                ans = min(ans , min(faceA[i],faceB[i]) - same[i]);
        
        return ans == INT_MAX ? -1 : ans;   
    }
};
```

## Week 4

### 21 March | 763. Partition Labels

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

* [Practice](https://leetcode.com/problems/partition-labels/)

```cpp
class Solution {
public:
    int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {
        int n = tops.size(), ans = INT_MAX;
        vector<int> faceA(7), faceB(7), same(7);
        
        for(int i = 0; i < n; ++i)
        {
            ++faceA[tops[i]];
            ++faceB[bottoms[i]];
            if(tops[i] == bottoms[i])
                ++same[tops[i]];
        }
        
        for(int i = 1; i<=6; ++i)
            if(faceA[i] + faceB[i] - same[i] == n)
                ans = min(ans , min(faceA[i],faceB[i]) - same[i]);
        
        return ans == INT_MAX ? -1 : ans;   
    }
};
```

### 22 March | 1663. Smallest String With A Given Numeric Value

The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

* [Practice](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/)

```cpp
class Solution {
public:
    string getSmallestString(int n, int k) {
        string ans(n, 'a');
        int end = n-1;
        k -= n;
        while(end>=0){
            if(k>=25){
                ans[end] = 'z';
                k -= 25;
            }else{
                ans[end] = (k+1+48) + '0';
                break;
            }
            end--;
        }
        
        return ans;
    }
};
```

### 23 March | 991. Broken Calculator

There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:

multiply the number on display by 2, or
subtract 1 from the number on display.
Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.

* [Practice](https://leetcode.com/problems/broken-calculator/)

```cpp
class Solution {
public:
    int brokenCalc(int startValue, int target) {
    int ans = 0;
        while (target > startValue) {
            ans++;
            if (target % 2)
                target++;
            else
                target /= 2;
        }
        return ans + startValue - target;
    }
    
};
```

### 24 March | 881. Boats to Save People

You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

* [Practice](https://leetcode.com/problems/boats-to-save-people/submissions/)

```cpp
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(), people.end());
        int i = 0, j = people.size() - 1;
        int ans = 0;

        while (i <= j) {
            ans++;
            if (people[i] + people[j] <= limit)
                i++;
            j--;
        }

        return ans;
        
    }
};
``` 

### 25 March | 1029. Two City Scheduling

A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

* [Practice](https://leetcode.com/problems/two-city-scheduling/)

```cpp
class Solution {
public:
    static bool comp(const pair<int,pair<int,int>> &p1, const pair<int,pair<int,int>> &p2)
    {
        return p1.first < p2.first;
    }
    
    int twoCitySchedCost(vector<vector<int>>& costs) {
        int n = costs.size();
        int ans = 0;
        vector<pair<int,pair<int,int>>> v;
        
        for(int i=0;i<n;i++)
            v.push_back({costs[i][0] - costs[i][1],make_pair(costs[i][0], costs[i][1])});
        
        sort(v.begin(), v.end(), comp);
        
        for(int i=0;i<n/2;i++)
            ans += v[i].second.first;
        
        for(int i=n/2;i<n;i++)
            ans += v[i].second.second; 
        
        return ans;
    }
};
```

### 26 March | 704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

* [Practice](https://leetcode.com/problems/binary-search/)

```cpp
class Solution {
public:
    int search(vector<int>& arr, int target) {
        int start = 0, end = arr.size()-1;
        while(start <= end){
            int mid = start+(end-start)/2;
            if(arr[mid] == target) return mid;
            if(arr[mid] > target) end = mid - 1;
            else start = mid + 1;
        }
        return -1;
    }
};
```
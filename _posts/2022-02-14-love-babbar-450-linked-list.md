---
title: "Linked List | 450 DSA | Love Babbar"
author:
  name: Priyanshu Tiwari
  link: https://links.ahampriyanshu.com/
categories: [Sheets, Lovebabbar]
tags: [love, babbar, '450 dsa', sheet, string]
---

## Reverse a string

The task is to complete the function reverseList() with head reference as the only argument and should return new head after reversing the list.

* [GFG](https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1/)

```cpp
class Solution
{
    public:
    //Function to reverse a linked list.
    struct Node* reverseList(struct Node *head)
    {
        struct Node* prev = NULL;
        struct Node* curr = head;
        while(curr!=NULL){
            struct Node* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    
};
    
```

## Reverse a Linked List in groups of given size

Given a linked list of size N. The task is to reverse every k nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

* [GFG](https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1)

```cpp
class Solution
{
    public:
    struct node *reverse (struct node *head, int k)
    { 
    if (!head) return NULL;
    
    node *current = head, *next = NULL, *prev = NULL;
    int count(0);
 
    while (current != NULL && count++ < k) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    
    if (next)
        head->next = reverse(next, k);
 
    return prev;
    }
};
```

## Detect Loop in linked list

Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

* [GFG](https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1)

### Brute

```cpp
class Solution
{
    public:
    //Function to check if the linked list has a loop.
    bool detectLoop(Node* head)
    {
        while(head)
        {
            if(head->data == INT_MIN)
                return true;
            head->data = INT_MIN;
            head = head -> next;
        }
        return false;
    }
};
```

### Optimal

```cpp
class Solution
{
    public:
    //Function to check if the linked list has a loop.
    bool detectLoop(Node* head)
    {
        Node *slow = head, *fast = head;
        while(slow && fast && fast->next){
            slow = slow->next;
            fast = fast->next->next;
            if(slow==fast)
                return true;
       }
       return false;
    }
};
```
---
title: "August | 2022 | Leetcoding Challenge"
author: ahampriyanshu
categories: [Contests, Leetcode]
math: true
excerpt: C++ Solutions to July Leetcoding Challenge, August 2022
tags:
  [
    leetcode,
    leetcoding,
    challenge,
    august,
    ds,
    array,
    tree,
    trie,
    string,
    stacks,
    queue,
    linked list,
  ]
---

## 01 July | 62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., $grid[0][0]$). The robot tries to move to the bottom-right corner (i.e., $grid[m - 1][n - 1]$). The robot can only move either down or right at any point in time.

Given the two integers $m$ and $n$, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to $2 * 10^9$.

- [Practice](https://leetcode.com/problems/unique-paths/)

### Combinatorics

```cpp
int uniquePaths(int m, int n) {

    int N = n+m-2;
    int r = min(n,m) - 1;

    double res = 1;

    for(int i=1; i<=r; ++i, N--)
        res = res * (N) / i;


    return (int)res;
    }
```

### 2D Memoization

```cpp
    int solve(int i,int j,int m,int n,vector<vector<int>> &dp)
    {
        if(i>=m||j>=n)
            return 0;

        if(i==m-1&&j==n-1)
            return 1;

        if(dp[i][j]!=-1)
            return dp[i][j];

        return dp[i][j]=solve(i+1,j,m,n,dp)+solve(i,j+1,m,n,dp);
    }

    int uniquePaths(int m, int n) {
      vector<vector<int>> dp(m,vector<int>(n,-1));
        return solve(0,0,m,n,dp);
    }
```

### 1D Memoization

```cpp
    int uniquePaths(int m, int n) {
        vector<int> cur(n, 1);
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                cur[j] += cur[j - 1];
            }
        }
        return cur[n - 1];
    }
```

### Tabulation

```cpp
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m, vector<int>(n, 1));
        for (int i = 1; i < m; i++)
            for (int j = 1; j < n; j++)
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

        return dp[m - 1][n - 1];
    }
```

## 02 July |

- [Practice]()

###

```cpp

```

## 03 July |

- [Practice]()

###

```cpp

```

## 04 July |

- [Practice]()

###

```cpp

```

## 05 July |

- [Practice]()

###

```cpp

```

## 06 July |

- [Practice]()

###

```cpp

```

## 07 July |

- [Practice]()

###

```cpp

```

## 08 July |

- [Practice]()

###

```cpp

```

## 09 July |

- [Practice]()

###

```cpp

```

## 10 July |

- [Practice]()

###

```cpp

```

## 11 July |

- [Practice]()

###

```cpp

```

## 12 July |

- [Practice]()

###

```cpp

```

## 13 July |

- [Practice]()

###

```cpp

```

## 14 July |

- [Practice]()

###

```cpp

```

## 15 July |

- [Practice]()

###

```cpp

```

## 16 July |

- [Practice]()

###

```cpp

```

## 17 July |

- [Practice]()

###

```cpp

```

## 18 July |

- [Practice]()

###

```cpp

```

## 19 July |

- [Practice]()

###

```cpp

```

## 20 July |

- [Practice]()

###

```cpp

```

## 21 July |

- [Practice]()

###

```cpp

```

## 22 July |

- [Practice]()

###

```cpp

```

## 23 July |

- [Practice]()

###

```cpp

```

## 24 July |

- [Practice]()

###

```cpp

```

## 25 July |

- [Practice]()

###

```cpp

```

## 26 July |

- [Practice]()

###

```cpp

```

## 27 July |

- [Practice]()

###

```cpp

```

## 28 July |

- [Practice]()

###

```cpp

```

## 29 July |

- [Practice]()

###

```cpp

```

## 30 July |

- [Practice]()

###

```cpp

```

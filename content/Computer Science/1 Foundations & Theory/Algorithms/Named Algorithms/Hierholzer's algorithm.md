---
created: 2025/5/06 09:19:23
modified: 2025/5/07 14:54:57
aliases:
  - 하이얼홀처
---
- [[Eulerian Path|오일러 경로]] 찾는 알고리즘
- 시작 정점에서 dfs로 들어가며, 해당 간선 제거하고, 더이상 갈 곳 없으면(post-order) path 추가
```pseudo
function euler(u):
    while adj[u] is not empty:
        v = adj[u].pop()
        remove edge u-v from adj[v]
        euler(v)
    path.append(u)

reverse(euler)
```
```cpp
// C++ program to print Eulerian circuit in given
// directed graph using Hierholzer algorithm
#include <bits/stdc++.h>
using namespace std;

// Function to print Eulerian circuit
vector<int> printCircuit(vector<vector<int>> &adj) {
    int n = adj.size();

    if (n == 0)
        return {};

    // Maintain a stack to keep vertices
    // We can start from any vertex, here we start with 0
    vector<int> currPath;
    currPath.push_back(0);

    // list to store final circuit
    vector<int> circuit;

    while (currPath.size() > 0) {
        int currNode = currPath[currPath.size() - 1];

        // If there's remaining edge in adjacency list
        // of the current vertex
        if (adj[currNode].size() > 0) {
            
            // Find and remove the next vertex that is
            // adjacent to the current vertex
            int nextNode = adj[currNode].back();
            adj[currNode].pop_back();

            // Push the new vertex to the stack
            currPath.push_back(nextNode);
        }

        // back-track to find remaining circuit
        else {
            // Remove the current vertex and
            // put it in the circuit
            circuit.push_back(currPath.back());
            currPath.pop_back();
        }
    }

    // reverse the result vector 
    reverse(circuit.begin(), circuit.end());
    
    return circuit;
}

int main() {
    vector<vector<int>> adj = {{2, 3}, {0}, {1}, {4}, {0}};
    vector<int> ans = printCircuit(adj);
    
    for (auto v: ans) cout << v << " ";
    cout << endl;
    return 0;
}
```
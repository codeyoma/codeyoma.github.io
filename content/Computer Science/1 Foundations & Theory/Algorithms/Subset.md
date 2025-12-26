---
description:
aliases:
created: 2025-05-18
modified: 2025-12-22
---

- 부분집합 $2^{n}$
	- ![[Bitmask]]
- 부분 집합속 순열
	- [[DFS]]
- recursive
	- ```cpp
		#include <iostream>
		#include <vector>
		using namespace std;
		
		void subset(vector<int>& arr, vector<int>& current, int index) {
		    if (index == arr.size()) {
		        for (int num : current) cout << num << " ";
		        cout << "\n";
		        return;
		    }
		
		    // 1. 현재 요소를 포함하는 경우
		    current.push_back(arr[index]);
		    subset(arr, current, index + 1);
		    current.pop_back();
		    
		    // 2. 현재 요소를 포함하지 않는 경우
		    subset(arr, current, index + 1);
		}
		
		int main() {
		    vector<int> arr = {1, 2, 3};
		    vector<int> current;
		    subset(arr, current, 0);
		    return 0;
		}
		```
		
- inductively
	- 1 ~ n
		- ```cpp
			#include <bits/stdc++.h>
			using namespace std;
			
			vector<vector<int>> powerset(int n) {
			    // base case: f(0) = { {} }
			    if (n == 0) {
			        return { {} };
			    }
			
			    // f(n-1)
			    vector<vector<int>> prev = powerset(n - 1);
			
			    vector<vector<int>> result = prev;  // f(n-1)
			
			    // { A ∪ {n} | A ∈ f(n-1) }
			    for (const auto& A : prev) {
			        vector<int> with_n = A;
			        with_n.push_back(n);
			        result.push_back(with_n);
			    }
			
			    return result;
			}
			```
	- 개별 요소로
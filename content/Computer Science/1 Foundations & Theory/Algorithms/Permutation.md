---
description:
aliases:
created: 2025-05-18
modified: 2025-12-27
---

- 순열 $\frac{n!}{(n-r)!}$
	- for -> 이전 index와 != 경우만
	- 원소의 순서가 중요
		- {1, 2}와 {2, 1}은 다르다
		- 체크배열 순회 (for문은 항상 0부터)
		- 타겟 순열 사이즈
		- 재귀 함수 `depth`
			- 재귀 호출시 `depth + 1`
- next_permutation with **sort**
	- ```cpp
		    vector<char> set = {'A', 'B', 'C', 'D'};
		    
		    do {
		        for (char c : set) {
		                cout << c << " ";
		        }
		        cout << endl;
		    } while (next_permutation(set.begin(), set.end()));
		 ```
- recursive
	- logic
		- 소스 배열
		- 체크 배열
		- 현재 배열
		- 타겟 순열 크기
		- 종료 조건
			- 현재 배열 타겟 길이 체크
	- ```cpp
		#include <iostream>
		#include <vector>
		
		using namespace std;
		
		void permute(vector<int>& arr, vector<bool>& used, vector<int>& current, int depth) {
		
		    if (depth == arr.size()) {
		        for (int num : current) cout << num << " ";
		        cout << "\n";
		        return;
		    }
		
		    for (int i = 0; i < arr.size(); i++) {
		        if (!used[i]) {
		            used[i] = true;
		            current.push_back(arr[i]);
		            permute(arr, used, current, depth + 1);
		            current.pop_back();
		            used[i] = false;
		        }
		    }
		}
		
		int main() {
		    vector<int> arr = {1, 2, 3};
		    vector<bool> used(arr.size(), false);
		    vector<int> current;
		
		    permute(arr, used, current, 0);
		
		    return 0;
		}
		```
- inductively
	- 1 ~ n
		- ```cpp
			#include <bits/stdc++.h>
			using namespace std;
			
			vector<vector<int>> permutation(int n) {
			    // base case: f(1) = { {1} }
			    if (n == 1) {
			        return { {1} };
			    }
			
			    // f(n-1)
			    vector<vector<int>> prev = permutation(n - 1);
			
			    vector<vector<int>> result;
			
			    // insert n into every possible position
			    for (const auto& A : prev) {
			        for (int i = 0; i <= (int)A.size(); i++) {
			            vector<int> cur;
			
			            // A[:i]
			            cur.insert(cur.end(), A.begin(), A.begin() + i);
			
			            // + [n]
			            cur.push_back(n);
			
			            // + A[i:]
			            cur.insert(cur.end(), A.begin() + i, A.end());
			
			            result.push_back(cur);
			        }
			    }
			
			    return result;
			}
			```
	- 개별 요소로
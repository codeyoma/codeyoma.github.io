---
description:
aliases:
created: 2025-05-18
modified: 2025-12-22
tags:
  - review
---

- 조합 $\frac{n!}{r!(n-r)!}$ 
	- for -> 다음 index와
	- 원소의 순서보다, 존재가 중요
		- {1, 2}와 {2, 1}은 같다
		- 타겟 조합 사이즈
		- 재귀 함수 `depth`
			-  (for문은 항상 `depth`부터)
			- 재귀 호출시 `depth + 1`
- prev_permutation
	- ```cpp
		    int n = 4; // 전체 개수
		    int r = 2; // 조합 개수
		    
		    vector<bool> v(n);
		    fill(v.begin(), v.begin() + r, true);  // 처음 r개를 true로 설정
		
		    cout << endl; 
		    
		    do {
		        for (int i = 0; i < n; ++i) {
		            if (v[i]) {
		                cout << i << " ";
		            }
		        }
		        cout << endl;
		    } while (prev_permutation(v.begin(), v.end()));
		```
- recursive
	- logic
		- 소스 배열
		- 현재 배열
		- 타겟 조합 크기
		- 깊이
		- 종료 조건
			- 타겟 조합 크기에 도달
			- 깊이가 source_arr의 길이보다 큰 경우 (마지막)
	- ```cpp
		#include <iostream>
		#include <vector>
		using namespace std;
		
		void combine(vector<int>& arr, vector<int>& current, int depth, int k) {
			if (current.size() == k) {
				for (int num : current) cout << num << " ";
				cout << "\n";
				return;
			}
		
			for (int i = depth; i < arr.size(); i++) {
				current.push_back(arr[i]);
				combine(arr, current, i + 1, k);
				current.pop_back();
			}
		}
		
		int main() {
			vector<int> arr = {1, 2, 3, 4};
			int k = 2;
			vector<int> current;
		
			combine(arr, current, 0, k);
			return 0;
		}
		```
- inductively
	- 1 ~ n 
		- ```cpp
			#include <bits/stdc++.h>
			using namespace std;
			
			vector<vector<int>> combination(int n, int k) {
			    // base case: f(n,0) = { {} }
			    if (k == 0) {
			        return { {} };
			    }
			
			    // base case: f(k,k) = { {1,2,...,k} }
			    if (n == k) {
			        vector<int> v;
			        for (int i = 1; i <= k; i++) v.push_back(i);
			        return { v };
			    }
			
			    // f(n-1, k): n not chosen
			    vector<vector<int>> without_n = combination(n - 1, k);
			
			    // f(n-1, k-1): n chosen
			    vector<vector<int>> with_n;
			    for (const auto& A : combination(n - 1, k - 1)) {
			        vector<int> cur = A;
			        cur.push_back(n);
			        with_n.push_back(cur);
			    }
			
			    // union
			    vector<vector<int>> result = without_n;
			    result.insert(result.end(), with_n.begin(), with_n.end());
			
			    return result;
			}
			```
	- 개별 요소로
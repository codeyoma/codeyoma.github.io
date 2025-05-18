---
created: 2025/3/19 16:38:39
modified: 2025/4/04 11:42:10
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
```cpp
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

- 조합 속 순열
```cpp
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {
    // Write C++ code here
    int n = 4; // 전체 개수
    int r = 4; // 조합 개수
 
    // 조합속 순열    
    vector<char> set = {'A', 'B', 'C', 'D'};
    vector<bool> vv(set.size());
    fill(vv.begin(), vv.begin() + r, true);
    
    do {
        vector<char> temp;
        for (int i = 0; i < set.size(); i++){
            if(vv[i])
            {
                temp.push_back(set[i]);
            }
        }
        
        do {
            for (char t: temp){
                cout << t << ' ' ;
            }
            cout << endl;
        }while (next_permutation(temp.begin(), temp.end()));
        
    } while (prev_permutation(vv.begin(), vv.end())); 
    return 0;
}
```
- recursive
	- 소스 배열
	- 현재 배열
	- 타겟 조합 크기
	- 깊이
	- 종료 조건
		- 타겟 조합 크기에 도달
		- 깊이가 source_arr의 길이보다 큰 경우 (마지막)
```cpp
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
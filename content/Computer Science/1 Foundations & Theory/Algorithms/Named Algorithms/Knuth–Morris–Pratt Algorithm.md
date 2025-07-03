---
description:
created: 2025-05-18
modified: 2025-07-03
aliases:
  - kmp
  - kmp algorithm
---

- 접두사, 접미사로 문자열 일치 판별
	- $O(N+M)$
- [[Two Pointers]] 기법
	- `j`
		- 접두사 인덱스
		- i 위치의 값과 일치하면
			- +1하고, 그 값을 테이블에 저장
		- 불일치시
			- 마지막 일치 순간으로 j 이동
	- `i`
		- 접미사 인덱스
		- 한칸씩 이동하면서 일치 판별
-	```cpp
	vector<int> make_table(const string& pattern){
		vector<int> table(pattern.size(), 0);
		int j = 0;
		
		for (int i = 1; i < pattern.size(); ++i) {
		
			while (j > 0 && pattern[i] != pattern[j])
				j = table[j - 1];
				
			if (pattern[i] == pattern[j])
				table[i] = ++j;
		}
		
		return table; 
	}
	
	void KMP(const string& s, const string& needle){
		vector<int> table = make_table(needle);
		int s_size = s.size();
		int needle_size = needle.size();
		int j = 0;
	
		for(int i = 0; i < s_size; ++i){
			while (j > 0 && s[i] != needle[j])
				j = table[j - 1];
	
			if (s[i] == needle[j]){
				if (j == needle_size - 1){
					j = table[j];
					// i - needle_size + 1 에서 매칭
					// or i - j
				}
				else
					++j;
			}
		}
	}
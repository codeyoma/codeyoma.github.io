---
description:
created: 2025-05-18
modified: 2025-12-27
aliases:
  - 라빈 카프
---

- 폴리노미얼 해시 함수
	- $\text{hash}(s) = (s_0 \cdot b^{m-1} + s_1 \cdot b^{m-2} + \dots + s_{m-1} \cdot b^0) \mod p$
- 슬라이드 윈도우로 해시 갱신
	- 이전 맨앞 해시 빼고
	- 새로운 문자 해시 추가
- 해시 값이 타겟 해시와 같고, 글자도 같으면 일치
- ex)
	- 슬라이드 윈도우 `한칸` 옮기고
	- 이전 맨 앞 글자 해시값 `-`
	- 새로들어온 맨 뒤 글자 해시값 `+` 
	- 누적 곱 캐시 배열 `pm[31]`
		-  $1 * 31^n$을 미리구한 숫자 배열 + (mod)
		- 곱연산 한번만, 가감 연산 캐시 용
	- 타겟 해시 누적 곱 캐시 배열 `pm_t[arr.size()]`
		- $S_i = \sum_{j=1}^{i} a_j * 31^{arr.size - j} \quad \text{for} \quad i = 1, 2, \dots, n$
		- 첫 글자 부터, 끝 글자까지 누적 해시 값
	- 타겟 해시값 
	- ```cpp
		int mod = 1e8 + 7;
		int hash = 0;
		
		for(int i = 0; i < arr.size(); i++){
			hash *= 31;
			hash += arr[i] - 'a' + 1;
			hash %= mod;	
		}
		```
- 문자열 패턴 검색
- 문자열 최장 부분 문자
	- 2번 이상 등장하는 최장 길이 부분문자열 찾기
		- binary search로 최장 길이 구할 수 있다
		- 문자열의 중간 길이 `m`으로 검색 후 있으면 `l = m + 1`, 없으면 `r = m - 1`
		- 길이가 5인 중복 문자는, 길이가 3인 중복 문자도 포함하기에 `binary search` 가능
	
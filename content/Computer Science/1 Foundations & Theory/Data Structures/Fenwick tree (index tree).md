---
description:
aliases:
created: 2025-07-02
modified: 2025-07-02
---

- 마지막 비트 크기로 현재 인덱스의 '저장 개수' 계산
	- `i & -i`
- ```cpp
	int tree[sum_size];
	
	int sum(int i){
		int res = 0;
		while (i > 0){
			res += tree[i];
			i -= (i & -i);
		}
		return res;
	}
	
	void update(int i, int dif){
		// update값이 dif
		// 기존 값과의 dif를 점진적 비트 크기로 이동하면서 업데이트
		while (i <= sum_size){
			tree[i] += dif;
			i += (i & -i);
		}
	}
	
	int getSection(int start, int end){
		return sum(end) - sum(start - 1);
	}
- [[Prefix Sum Array|psum]]과의 차이는?
	- psum은 일차원 배열
	- fenwick tree는 배열이지만 가상적 트리 구조
	- 빈번한 업데이트에 따른 구간 합
		- 펜윅트리, 세그먼트 트리가 유리
	- 업데이트 없고, 구간합만 필요
		- psum만 사용해도 충분
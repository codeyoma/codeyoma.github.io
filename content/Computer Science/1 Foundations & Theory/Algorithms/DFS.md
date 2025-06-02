---
description:
aliases:
created: 2025-05-18
modified: 2025-06-02
tags: []
---

- recursive
	- for -> if unused -> used check -> recursive -> unchecked
- stack
- 짧은 거리는 [[BFS]]가 유효하다면, DFS는 경로 전체가 유효한지 확인
	- 일종의 `Brute Froce`
- 가지치기 필요
- 세팅에 필요한 저장공간은 적다
	- 하지만 깊이가 너무 깊으면 스택오버플로우
- pre-order / in-order / post-order 에 따라 용법 다르다

# pre-order DFS
- 방문 자체가 목적일 때
	- 백트래킹 (경로 탐색, 조합, 순열)
	- 
		```cpp
		void dfs(Node* node) {
			if (!node) return;
			visit(node);
			dfs(node->left);
			dfs(node->right);
		}
		``` 
- 간선 만 주어진 경우의 부모 찾기
	- ![[Tree#^129bd4]]
	- 
		```python
		def dfs(u):
			visit[u] = true
			
			for v in adj[u]:
				if not visit[v]:
					parent[v] = u
					dfs(v)
		```
# in-order DFS
- BST나 중위 수식 등, 정렬 성질 사용
	- BST 순회 (오름차순 정렬된 값 추출)
	- 
		```cpp
		void dfs(Node* node) {
			if (!node) return;
			dfs(node->left);
			visit(node);
			dfs(node->right);
		}
		```

# post-order DFS
- 결과를 누적하거나 처리할 때
	- 디렉터리 처리
		- 트리 삭제(bottom-up)
		- 용량 계산 (하위 폴더 다 처리 후, 부모 처리)
	- 트리 DP
	- [[Hierholzer's algorithm]] ([[Eulerian Path|오일러 경로]])
	- 
		```cpp
		void dfs(Node* node) {
			if (!node) return;
			dfs(node->left);
			dfs(node->right);
			visit(node);
		}
		```

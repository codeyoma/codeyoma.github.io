---
created: 2025/5/07 14:36:09
modified: 2025/5/07 14:36:16
aliases:
  - scc
  - 강한 연결 요소
---
- 방향 그래프에서, 모든 정점 쌍 (u, v)에 대해  u → v와 v → u가 모두 존재하는 정점들의 최대 집합
	- 1 → 2 → 3 → 1
	- 4 → 5 → 6 → 4
	- 3 → 4
	-  (1,2,3) → 서로 돌아올 수 있음 → SCC1
	- (4,5,6) → 서로 돌아올 수 있음 → SCC2
	- 3 → 4는 있지만 4 → 3은 없으므로 SCC는 분리
- Kosaraju Algorithm
	- 2-dfs
- Tarjan’s algorithm
	- dfs with low_link
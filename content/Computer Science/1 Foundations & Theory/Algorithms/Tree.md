---
description:
aliases:
created: 2025-05-01
modified: 2025-06-02
---

- 일종의 그래프
	- 사이클이 없는 ^13f174
- v - 1 = e (정점 수- 1 = 간선 수)
- util
	- 부모 배열
	- 자식 배열
- 지금 노드가 leaf node 인지(혹은 부모 노드) 판별법
	- 트리에서 [[dfs]] 할 때, 지금 노드 기준으로 방문안한 노드가 있다는 것은 지금 노드가 부모라는 뜻 ^129bd4
	- ```python
		def dfs(u):
			visit[u] = True
		
			is_leaf = True
			for v in adj[u]:
				if visit[v] == False:
					dfs(v)
					# 방문 안한 노드가 있다는 것은 부모라는 뜻
					is_leaf = False

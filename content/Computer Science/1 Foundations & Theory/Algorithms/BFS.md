---
created: 2025/3/19 17:16:44
modified: 2025/4/03 16:47:44
tags:
  - review
---

- for, while
- queue
- 최단 거리(간선 지나가는 갯수, 깊이적 거리)
	- 거리 배열 d[n]이 있을때, d[start] = 0, d[else] = -1 로 초기화
		- bfs 수행
		- d[current] = d[parent] + 1; 
	- 가중치 거리는 [[Dijkstra's Algorithm]]
- 많은 저장공간
- bfs 수행 횟수 - 연결 요소 개수 (섬 개수)
	- ![[image-BFS.png]]
	- -> 3개

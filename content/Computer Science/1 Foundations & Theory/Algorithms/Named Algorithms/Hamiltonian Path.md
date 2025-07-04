---
description: 
aliases:
  - 해밀톤 경로
created: 2025-07-03
modified: 2025-07-03
---

- 해밀톤 경로
	- [[Eulerian Path|오일러 경로]]처럼 간선이 아닌, 모든 정점을 한 번만 지나는 경로
- 해밀톤 순환 (Hamiltonian Cycle or Circuit)
	- 시작점과 끝점이 같은 해밀턴 경로
	- 해밀톤 순환을 찾는 알고리즘은 존재하지 않는다
		- 전수조사(Exhaustive search) 해야함
		- $O(x^n)$
			- $x$ - 간선의 수
			- $n$ - 정점의 수
	- [[Traveling Salesman Problem]]
		- 비용이 최소인 해밀톤 순환을 찾는 문제
- [Icosian calculus](https://en.wikipedia.org/wiki/Icosian_calculus)
	- ![[image-Hamiltonian Path.png|400]]
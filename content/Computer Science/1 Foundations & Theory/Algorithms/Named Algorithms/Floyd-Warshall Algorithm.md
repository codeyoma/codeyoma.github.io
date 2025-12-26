---
description:
created: 2025-05-18
modified: 2025-12-27
references: 
aliases:
  - 플로이드 워셜
  - 플로이드 와샬
---

<!--
[[내 노트 정리 방법#^bb9ac3|my workflow]]
- main
	- 출처
	- 저자
	- 인용(contents)
- footer
	- 내 의견
	- 내 의문
	- 요약
	- 추가 조사해야할 점
	- todo list
	- 관련노트 
-->

- shortest path between all pairs of vertices, negative edges allowed
	- nope - negative cycles
$$
d_{ij}^{k} = \left\{ \begin{alignat} {}
&W_{ij} &&\text{if} \enspace k = 0 \quad \\ 
&min(d_{ij}^{k - 1},\enspace d_{ik}^{k - 1} \,+\, d_{kj}^{k - 1}) 
&&\text{if} \enspace k \ge 1 \quad
\end{alignat}
\right\}
$$

- $V^{3}$
- dist matrix
	- 2 차원 거리 배열
	- $D(k)$
- predecessor matrix
	- 2 차원 방문점 배열
	- $\prod_{ij}^{(k)}$
- ```cpp
	void floydWarshall(vector<vector<int>> &dist) {
	    int V = dist.size();
	    
	    // Add all vertices one by one to
	    // the set of intermediate vertices.
	    for (int k = 0; k < V; k++) {
	    
	        // Pick all vertices as source one by one
	        for (int i = 0; i < V; i++) {
	
	            // Pick all vertices as destination
	            // for the above picked source
	            for (int j = 0; j < V; j++) {
	
	                // shortest path from
	                // i to j 
	                if(dist[i][k] != 1e8 && dist[k][j]!= 1e8)
		                dist[i][j] = min(
							dist[i][j],
							dist[i][k] + dist[k][j]
						);
	            }
	        }
	    }
		for (int i = 0; i < V; ++i) {
		    if (dist[i][i] < 0) {
		        // i 정점에서 시작하는 음수 사이클 존재
		    }
		}
	}
	```
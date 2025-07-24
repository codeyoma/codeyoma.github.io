---
created: 2025/5/01 15:45:42
modified: 2025/5/04 16:49:13
aliases:
  - 벨만-포드
---
- shortest path from one node to all nodes, negative edges allowed
	- okay - negative edge weights
	- nope - negative cycles
- 그래프 최단거리 알고리즘
- 음수에서도 가능
- 단, 순환 음수 사이클이 존재 한다면 불가능
	- 목표 지점까지 사이클이 있다면
		- 그냥 사이클이 아닌, 합이 음이 되는 사이클
		- 양의 사이클은 괜찮다
		- 다른 그래프에 있는 사이클은 영향 X
	- 마지막 라운드($v - 1$)에서도 업데이트가 일어난다면, 음수 사이클이 존재
- [[Dijkstra's Algorithm]]가 노드를 추가시 최단거리를 측정한다면, 벨만-포드는 간선을 기준으로 한다
- 정점($v$)마다 모든 간선($e$)을 업데이트 한다
	- 다익스트라의 시간복잡도보다 크다 ($v * e$)
	- 순차적으로 거리 테이블에서 거리 업데이트
	- 각 라운드에 업데이트 없다면 멈춤 (마지막 라운드까지 안가도 된다)
- ```cpp
	#include <iostream>
	#include <vector>
	using namespace std;
	
	vector<int> bellmanFord(int V, vector<vector<int>>& edges, int src) {
	    
	    // Initially distance from source to all 
	    // other vertices is not known(Infinite).
		vector<int> dist(V, 1e8);
		dist[src] = 0;
	  
		// Relaxation of all the edges V times, not (V - 1) as we
	    // need one additional relaxation to detect negative cycle
		for (int i = 0; i < V; i++) {
		    
			for (vector<int> edge : edges) {
				int u = edge[0];
				int v = edge[1];
				int wt = edge[2];
				if (dist[u] != 1e8 && dist[u] + wt < dist[v]) {
				    
	                // If this is the Vth relaxation, then there is
	                // a negative cycle
	                if(i == V - 1)
	                    return {-1};
	               
	                // Update shortest distance to node v
	                dist[v] = dist[u] + wt;
	            }
			}
		}
	
	    return dist;
	}
	
	int main() {
	    
	    // Number of vertices in the graph
	    int V = 5;
	
	    // Edge list representation: {source, destination, weight}
	    vector<vector<int>> edges = {
	        {1, 3, 2}, 
	        {4, 3, -1},
	        {2, 4, 1}, 
	        {1, 2, 1},
	        {0, 1, 5} 
	    };
	
	    // Define the source vertex
	    int src = 0;
	
	    // Run Bellman-Ford algorithm to get shortest paths from src
	    vector<int> ans = bellmanFord(V, edges, src);
	
	    // Output the shortest distances from src to all vertices
	    for (int dist : ans) 
	        cout << dist << " ";
	
	    return 0; 
	}

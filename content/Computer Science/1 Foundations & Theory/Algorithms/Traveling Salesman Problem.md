---
description: 
aliases:
  - tsp
created: 2025-05-18
modified: 2025-10-21
---

- TSP is a touchstone for many general heuristics devised for combinatorial optimization such as [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm "Genetic algorithm"), [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing "Simulated annealing"), [tabu search](https://en.wikipedia.org/wiki/Tabu_search "Tabu search"), [ant colony optimization](https://en.wikipedia.org/wiki/Ant_colony_optimization "Ant colony optimization"), [river formation dynamics](https://en.wikipedia.org/w/index.php?title=River_formation_dynamics&action=edit&redlink=1 "River formation dynamics (page does not exist)") (see [swarm intelligence](https://en.wikipedia.org/wiki/Swarm_intelligence "Swarm intelligence")), and the [cross entropy method](https://en.wikipedia.org/wiki/Cross_entropy_method "Cross entropy method").
- DP (recursive)
- DP + Bit mask
	- Held-Karp 알고리즘
	- `dp[current][visited]`
		- 현재 도시가 current이고, visited는 지금까지 방문한 도시의 집합
		- visited는 비트마스크 (0 ~ 2ⁿ - 1)로 표현
		- ```peusudo
			function TSP(u, mask):
				# 의미: 현재 도시가 u, 이미 방문한 집합이 mask일 때
				#      남은 도시들을 모두 방문하고 start로 귀환하는 "최소 추가 비용"

			    if mask == FULL:
			        # 모든 도시를 방문했다면 start로 귀환해야 함
			        if cost[u][start] < INF:
			            return cost[u][start]
			        else:
			            return INF
			
			    if dp[u][mask] != UNKNOWN:
			        return dp[u][mask]
			
			    best = INF
			    best_next = NONE
			
			    for v in 0 .. N-1:
			        if (mask has bit v) continue      # 이미 방문된 도시는 스킵
			        if cost[u][v] == INF   continue   # 간선 없음
			
			        cand = cost[u][v] + TSP(v, mask ∪ {v})
			        if cand < best:
			            best = cand
			            best_next = v
			
			    dp[u][mask] = best
			    parent[u][mask] = best_next   # 경로 복원을 원할 경우
			    return best
			```
	- 전이 공식
		- `mask`: 방문한 도시 집합
		- `last`: 마지막 방문 도시
		- `dp[mask][last]` = mask를 돌고 last에서 끝날 때 최소 비용
		- 출발 지점이 `0`인 이유
			- 사이클의 회전 불변성 덕분에 출발점을 하나로 고정
			- 다음 사이클의 비용은 같다
			- `0 → 1 → 2 → 3 → 0`
			- `1 → 2 → 3 → 0 → 1`
		- ```cpp
			#include <bits/stdc++.h>
			using namespace std;
				
			static constexpr int INF = 1e9;
			
			int main() {
			    ios::sync_with_stdio(false);
			    cin.tie(nullptr);
			
			    int n; 
			    cin >> n;
			
			    vector<vector<int>> cost(n, vector<int>(n, 0));
			    
			    // 비용 입력
			    for (int i = 0; i < n; ++i)
			        for (int j = 0; j < n; ++j)
			            cin >> cost[i][j];
			    
				// 자기 자신 위치 제외, 비용이 0이면 INF로 치환 (반복문안에서 조건문으로 비교는 속도 저하, 실수 유발 가능)    
			    for (int i = 0; i < n; ++i) {
			        for (int j = 0; j < n; ++j) {
			            if (i == j) continue;
			            if (cost[i][j] == 0) cost[i][j] = INF;
			        }
			    }
			    
			    // start 0으로 고정 및 start 포함 안하는 mask 패싱하기
			    // 헤밀턴 경로는 순환이기에 0으로 고정하고 문제를 접근
			    const int start = 0;      
			    const int FULL  = 1 << n; // 전체 집합(마스크) 개수
			
			    vector<vector<int>> dp(FULL, vector<int>(n, INF));
			    //dp[현재까지 방문한 집합][마지막 지점이 u일때]의 전체 비용
			    //dp[fullmask][u] + cost[v][start] -> 전체를 순회한 비용
			    dp[1 << start][start] = 0;
			
			    for (int mask = 0; mask < FULL; ++mask) {
				    // 시작지점 없는 마스크는 패스
			        if ((mask & (1 << start)) == 0) continue;
			        
			        for (int u = 0; u < n; ++u) {
				        // 마스크중 특정 비트 선택(해당 지점을 마지막으로 하기위해)
			            if ((mask & (1 << u)) == 0) continue;
			            
			            int cur = dp[mask][u];
			            if (cur >= INF) continue;
				        
				        // 다음 마스크 찾기
			            for (int v = 0; v < n; ++v) {
				            
				            // 이미 있는 비트 패스
			                if (mask & (1 << v)) continue;
			                // 비용이 없으면 도달 불가능 패스
			                if (cost[u][v] >= INF) continue;
			                
			                // [새로운 마스크][마지막 지점]의 경우 비용 갱신
			                int next_mask = mask | (1 << v);
			                dp[next_mask][v] = min(dp[next_mask][v], cur + cost[u][v]);
			            }
			        }
			    }
			
			    int answer = INF;
			    int full_mask = FULL - 1;
			    for (int u = 0; u < n; ++u) {
			        if (dp[full_mask][u] >= INF) continue;
			        if (cost[u][start] >= INF) continue;
			        answer = min(answer, dp[full_mask][u] + cost[u][start]);
			    }
			
			    cout << answer;
			    
			    return 0;
			}
			```

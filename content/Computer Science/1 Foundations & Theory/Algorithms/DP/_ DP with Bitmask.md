---
description:
created: 2025-05-18
modified: 2025-05-18
aliases:
  - DP with Bitmask
---
- *어떤 것을 고를 때* 마다 *이전에 뭘 골랐나*가 중요하면, 이전에 고른 집합을 mask로 표현
	- 외판원 순회[[Traveling Salesman Problem]]라면 “어느 도시들을 이미 방문했나”
- 마스크만으로 결정할 수 없는 추가 매개변수 여부에 따라 차원 추가해야한다
	- TSP → 지금 마지막에 머물러 있는 도시 `last`
- 전이(transition) 공식
	- ```cpp
		for each bit i not in mask:
		   if (조건(mask, last, extra, i)) {
		     newMask = mask | (1<<i);
		     newLast = i;           // 필요하면
		     newExtra = update(...);// 필요하면
		     dp[newMask][newLast][newExtra] = max/min(
		         dp[newMask][newLast][newExtra],
		         dp[mask][last][extra] + delta
		     );
		   }
		```
- Bitmask DP for Assignment
	- ```cpp
		for(int mask = 0; mask < FULL; ++mask){
			// 지금까지 배정된 사람 수 = popcount(mask)
			int k = __builtin_popcount(mask);
			// 다음 사람 k 에게 할당할 일 j 탐색
			for(int j = 0; j < N; ++j){
				if( (mask & (1 << j)) == 0 ){ 
					int next = mask | (1 << j);
					dp[next] = min(dp[next], dp[mask] + cost[k][j]);
				}
			}
		}
		```

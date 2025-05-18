---
created: 2025/5/07 14:29:20
modified: 2025/5/07 14:32:10
---
- DP + Bit mask
- `dp[current][visited]`
	- 현재 도시가 current이고, visited는 지금까지 방문한 도시의 집합
	- visited는 비트마스크 (0 ~ 2ⁿ - 1)로 표현
```peusudo
function tsp(current, visited):
	// 모든 조합이라는 것은 다 돌았다는 뜻
    if visited == all_visited_mask((1 << N) - 1):
	    // 마지막에서 처음으로 가는 비용이 있다는 것은 돌아 갈 수 있다는 말
        if cost[current][start] > 0:
            return cost[current][start]  // 돌아가는 비용
        else:
			// 돌아가지 못함으로
            return INF  // 못 돌아감

	// 이미 구한 값이 있으면 얼리 리턴 (not initial value ex: -1) 
    if dp[current][visited] is already computed:
        return dp[current][visited]

    dp[current][visited] = INF

	// 모든 도시에 대해서
    for next in 0 to N-1:
	    // 조합에 없는 도시만 비트마스크로 추출, 거리가 있다면 dp 없데이트
        if city 'next' is not visited and cost[current][next] > 0:
            dp[current][visited] = min(
                dp[current][visited],
                tsp(next, visited | (1 << next)) + cost[current][next]
            )

    return dp[current][visited]
```

- 전이 공식
	- `mask`: 방문한 도시 집합
	- `last`: 마지막 방문 도시
	- `dp[mask][last]` = mask를 돌고 last에서 끝날 때 최소 비용
```cpp
dp[1<<0][0] = 0;
for(mask = 0 ; mask < 1<<N; mask++)
	for(last = 0; last < N; last++){
    if(!(mask & 1 << last)) continue;
	    for(next = 0; next < N; next++){
	      if(mask & 1 << next) continue;
	      newMask = mask | (1<<next);
	      dp[newMask][next] = min(
	        dp[newMask][next],
	        dp[mask][last] + dist[last][next]
      );
    }
}
```
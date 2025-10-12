---
description:
aliases:
created: 2025-10-12
modified: 2025-10-12
---

- $n$개의 물건, 각각 물건은 무게와 가격을 가짐
- $c$ 용량의 배낭에 물건을 넣었을 때, 가능한 물건 가격의 최댓값
# 재귀
- 종료 조건
	- 물건이 없거나
	- 남은 무게가 `0`인 경우
		- 왜 `0` 이하가 아닌가?
		- 점화식에서 `i`번째 물건이 들어갈 수 있는지 로직을 점검하기에
- 점화식
	- 현재 물건이 용량이 부족해서 못 들어가면
		- 다음 물건 시도
		- `dp[i][w] = knapsack(i + 1, Current_W, wt_v, val_v, dp)`
	- 들어갈 용량이 된다면
		- 다음 값중 최대
			- 물건 포함
				- `dp[i][w] = knapsack(i + 1, Current_W - wt_v[i], wt_v, val_v, dp)`
			- 물건 미포함
				- `dp[i][w] = knapsack(i + 1, Current_W, wt_v, val_v, dp)`
	- ```cpp
		#include <bits/stdc++.h>
		using namespace std;
		
		int knapsack(int i, int W, const vector<int>& wt, const vector<int>& val, vector<vector<int>>& dp) {
		    if (i == wt.size() || W == 0) return 0;
		    int& ret = dp[i][W];
		    if (ret != -1) return ret;
		
		    if (wt[i] > W)
		        ret = knapsack(i + 1, W, wt, val, dp);  // 현재 물건을 넣을 수 없음 - 안 넣는 경우
		    else
		        ret = max(knapsack(i + 1, W, wt, val, dp),                   // 안 넣는 경우
		                  val[i] + knapsack(i + 1, W - wt[i], wt, val, dp)); // 넣는 경우
		
		    return ret;
		}
		
		int main() {
		    ios::sync_with_stdio(false);
		    cin.tie(nullptr);
		
		    int n, W;
		    cin >> n >> W;
		    vector<int> wt(n), val(n);
		    for (int i = 0; i < n; i++) cin >> wt[i] >> val[i];
		
		    vector<vector<int>> dp(n, vector<int>(W + 1, -1));
		    cout << knapsack(0, W, wt, val, dp) << "\n";
		}

# 상향식
- 2 차원 DP
	- 행 - 물건을 나타내는 인덱스
	- 열 - `0`부터 `w` 까지 시퀀스한 무게
	- $(i, \;j)$는 $i$번 까지의 물건을 용량 $j$의 배낭에 집어 넣은 최대 가격
- 물건 무게가 배낭의 용량보다 크면 위쪽 셀을 복사
	- `maxValue[i - 1][j]` 
- $i$번째 물건을 선택하지 않았을 때 최대가격
	- `maxValue[i - 1][j]` 
	- `i - 1` 인 이유
		- 이전 행의 물건 가격 계승
- $i$번째 물건을 선택했을 때 최대가격
	- `value[i] + maxValue[i - 1][j - weight[i]]` 
		- `j` - 남은 용량
- ```cpp
	if (weight[i] <= j)                        // i번째 물건이, 남은 용량(j)에 들어 갈 수 있을 때
		dp[i][j] = max(
			dp[i - 1][j],                       // i번째 물건을 선택하지 않음
			dp[i - 1][j - weight[i]] + value[i] // i번째 물건을 선택함
		);
	else
		dp[i][j] = dp[i - 1][j];
- ![[image-DP-15.png]]
- [[다이내믹 프로그래밍 완전 정복]] p.182
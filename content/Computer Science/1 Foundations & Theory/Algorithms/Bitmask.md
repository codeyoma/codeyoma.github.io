- 부분집합으로 많이 사용
	- 비트마스크 `1 << i` (i -> $2^{n}$ 까지)
	- 각 마스크(한 조합)별 순회 
	- ```cpp
		int total = 1 << n; // 부분집합 개수: 2^n
		for (int mask = 0; mask < total; mask++) {
			for (int i = 0; i < n; i++) {
				if (mask & (1 << i)) {
				}
			}
		}
- 부분집합 순회 테크닉
	- `mask`를 제외한 남은 집합 계산용으로 효율적
	- ```cpp
		int mask = 7;
		int FULL = 1 << 8;
		int rest = ~mask & (FULL - 1);
		for (int subset = rest; subset > 0; subset = (subset - 1) & rest){
		    cout << static_cast<bitset<8>>(subset) << endl;
		}

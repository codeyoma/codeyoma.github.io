---
created: 2025/3/19 17:18:37
modified: 2025/5/01 17:06:40
---
- 같은 집합으로 분류되는지 확인용
- Union
	- 그룹 합치기
- Find
	- 그룹 찾기
- union by rank, size...
- ```cpp
	// 🔹 Find 함수 (path compression)
	int find(int x) {
	    if (parent[x] == x) return x;
	    return parent[x] = find(parent[x]); // 부모 갱신
	    /*
	    if (parent[x] != x)
		    parent[x] = find(parent[x]);
		return parent[x];
	    */
	}
	
	// 🔹 Union 함수 (두 집합 합치기)
	bool unionSet(int a, int b) {
	    int rootA = find(a);
	    int rootB = find(b);
	
	    // 이미 같은 그룹이면 사이클 발생!
	    if (rootA == rootB) return false;
	    
		// union by rank
		if (rank[rootA] > rank[rootB]){
			rank[rootB] = rootA;
		} else {
			rank[rootA] = rootB;
			if (rank[rootA] == rank[rootB]){
				rank[rootB] += 1;
			}
		}
	
		// union
	    parent[rootB] = rootA;
	
		// true니 해당 간선 MST에 추가
	    return true;
	}

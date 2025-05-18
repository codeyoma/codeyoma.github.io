---
created: 2025/2/05 16:03:13
modified: 2025/5/04 16:50:04
tags: 
references: 
aliases:
  - 다익스트라
---
- shortest path from one node to all nodes
- greedy algorithm
- 단일 출발 최단 경로
	- **하나의 정점**에서 **다른 모든 정점** 간의 각각 짧은 거리를 구하는 알고리즘
- 음수 길이의 간선이 존재할 경우 작동 안됨
- 첫 정점을 기준으로 연결되는 정점들을 추가해 가며, 최단 거리 갱신 기법
- 우선순위 큐 활용 방식 (Min heap으로 최소값 꺼내면서 업데이트)
	- logic
		- 간선 자료, 거리 배열, min queue
		- 시작 노드 큐에 삽입, 거리[시작노드] = 0
		- `queue`가 빌 때까지 (`{노드 번호, 노드 거리 값}`)
			- `queue.pop()` -> x 노드
			- x와 연결된 노드들 순회
			- 거리 비교
				- 후보 노드 거리 > x의 거리 + 후보 노드 가중치 라면
					- 거리[후보 노드] 거리 업데이트
					- `queue`에 (후보 노드, 거리[후보 노드]) push
				- 아니라면 패스
```python
import sys
from queue import PriorityQueue

input = sys.stdin.readline

# V 정점
# E 간선
# K 시작 정점 번호
V, E = list(map(int, input().split()))
K = int(input()) - 1

adj = [[] for _ in range(V)]

for _ in range(E):
	# u에서 v로 가는 가중치 w
	u, v, w = list(map(int, input() split()))
	
	adj[u - 1].append((v - 1, w))
	
# 다익스트라 알고리즘
dist = [1e9 * V]
pq = PriorityQueue()

dist[K] = 0
# tuple(distance value, node index)
pq.put((0, K))

while pq.qsize() != 0:
	d, u = pq.get()

	# 갱신 효율을 위한 추가에서 이전 값 무시용
	# 이전 값이니 무시
	if d != dist[u]:
		continue

	for v, w in adj[u]:
		if dist[v] > dist[u] + w:
			dist[v] = dist[u] + w
			# 큐 갱신 어렵기 때문에 새로 추가
			pq.put((dist[v], v))
```

```cpp
struct Node {
  int node;
  int value;

  Node(int i, int j) : node(i), value(j) {}

  bool operator<(const Node &n) const { return value < n.value; }
};

struct Adj {
  vector<Node> list;
};

void solution() {
  size_t n, m, s;

  cin >> n >> m >> s;
  s--;

  vector<Adj> graph(n);
  vector<Adj> r_graph(n);

  for (size_t i = 0; i < m; i++) {
    int u, v, x;

    cin >> u >> v >> x;

    graph[u - 1].list.push_back(Node(v - 1, x));
    r_graph[v - 1].list.push_back(Node(u - 1, x));
  }

  for (size_t i = 0; i < graph.size(); i++) {
    for (const auto &jt : graph[i].list) {
      log(i, " - ", jt.node, ", ", jt.value);
    }
  }

  priority_queue<Node, vector<Node>> pq;
  vector<int> dist(n, C_MAX);
  vector<int> r_dist(n, C_MAX);

  dist[s] = 0;
  r_dist[s] = 0;

  {
    pq.push(Node(s, 0));

    while (!pq.empty()) {
      Node current = pq.top();
      pq.pop();

	// 이전 값 넘기기 
	// pq에서 값 업데이트가 안되니
	// pq에 값을 그냥 넣는거로 업데이트 대신
	// 고로 값이 다르다는 것은 이전 값
      if (current.value != dist[current.node])
        continue;

      for (const auto &it : graph[current.node].list) {
        if (dist[it.node] > dist[current.node] + it.value) {
          dist[it.node] = dist[current.node] + it.value;
          pq.push(Node(it.node, dist[it.node]));
        }
      }
    }
  }

  for (const auto &it : dist) {
    log(it, "- ");
  }

  {
    pq.push(Node(s, 0));

    while (!pq.empty()) {
      Node current = pq.top();
      pq.pop();

      if (current.value != r_dist[current.node])
        continue;

      for (const auto &it : r_graph[current.node].list) {
        if (r_dist[it.node] > r_dist[current.node] + it.value) {
          r_dist[it.node] = r_dist[current.node] + it.value;
          pq.push(Node(it.node, r_dist[it.node]));
        }
      }
    }
  }

  int ans = C_MIN;
  for (size_t i = 0; i < n; i++) {
    ans = max(ans, dist[i] + r_dist[i]);
  }

  cout << ans;
}
```
- 역방향 그래프
	- 일반 방향 그래프는 **특정 정점에서 모든 정점으로 가는 비용 계산**
	- 역방향 그래프는 **모든 정점에서 특정 정점으로 오는 비용 계산**
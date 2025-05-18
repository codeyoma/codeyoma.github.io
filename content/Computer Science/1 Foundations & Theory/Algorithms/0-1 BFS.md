---
created: 2025/5/07 14:26:48
modified: 2025/5/07 14:28:34
---
- bfs임으로 먼저 방문한 것이 최단 거리
```cpp
deque<int> dq;
dist[start] = 0;
dq.push_front(start);

while (!dq.empty()) {
    int u = dq.front(); dq.pop_front();
    for (auto [v, w] : adj[u]) {
        if (dist[v] > dist[u] + w) {
            dist[v] = dist[u] + w;
            if (w == 0) dq.push_front(v);
            else dq.push_back(v);
        }
    }
}
```
- 거리 비교가 필요 없을 경우, 그냥 넘기기(이미 그 거리가 최적이므로)
- `(dist[x][y] != -1) continue;`
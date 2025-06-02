- 방향 그래프에서 노드를 1차원 배열로 나열하는데 사용 
	- **나열시 간선 방향이 모두 왼쪽-> 오른쪽**
- 정렬된 결과가 유일하지 않음
- ex) 수강 과목에서 선수과목 존재 -> 커리큘럼 어떻게
	- 요리레시피
	- **순서가 필요한 경우**(increase)
- 1 -  전체 노드의 진입 차수 구하기
	- 진입 차수 배열
- 2 - 진입이 0인 노드에서 시작, 선택
	- 선택 후 진입 차수 배열에서 제거
	- 순서 배열 저장 (아웃풋 용)
- 3 - 직전 선택 노드의 인접 노드 진입 차수 1빼기
	- 인접 노드가 없다면 종료 (진출이 없거나, 마지막 노드)
- 4 - 2로 이동
	- 진입 차수 배열이 비었다면(다 순회 했다면) 종료
- 
	```cpp
	void solution(){
	    size_t n, m;
	
	    cin >> n >> m;
	
	    vector<vector<int> >    graph(n, vector<int>(0));
	    vector<int>             in(n, 0);
	    vector<int>             answer;
	
	    for (size_t i = 0; i < m; i++){
	        size_t a, b;
	
	        cin >> a >> b;
	
	        graph[a - 1].push_back(b - 1);
	        in[b - 1] += 1; 
	    }
	
	    priority_queue<int, vector<int>, greater<int> > pq;
	
	    for (size_t i = 0; i < n; i++){
	        if (in[i] == 0){
	            pq.push(i);
	        }
	    }
	
	    {
	
	        while (!pq.empty()){
	            int node = pq.top();
	            pq.pop();
	            answer.push_back(node);
	
	            for(const auto& it: graph[node]){
	                in[it] -= 1;
	                if (in[it] == 0)
	                    pq.push(it);
	            }
	        }
	    }
	
	    for (const auto& it: answer){
	        cout << it + 1 << " ";
	    }
	}
	```

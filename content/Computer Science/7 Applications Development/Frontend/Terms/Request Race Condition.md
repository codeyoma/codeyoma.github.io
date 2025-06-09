---
created: 2025/4/11 12:28:51
modified: 2025/4/13 16:45:28
---

- 컴포넌트에서 요청을 보내고, 재랜더링 된 컴포넌트가 다시 요청을 보냈을 때, 응답 순서의 오류 가능성
- 해결 방법
	- 요청마다 고유 ID 비교 (클로저 속성활용, ref)
	- AbortController 활용
	- ```js
		useEffect(() => {
		  const controller = new AbortController();
		
		  fetch(`/api/search?q=${query}`, { signal: controller.signal })
		    .then(res => res.json())
		    .then(result => {
			    if (!controller.signal.aborted) {
					setData(data);
				} 
		    })
		    .catch(err => {
		      if (err.name === 'AbortError') {
		        console.log('요청 취소됨');
		      } else {
		        console.error(err);
		      }
		    });
		
		  return () => controller.abort(); // 이전 요청 취소
		}, [query]);
	- swr, react-query 라이브러리 활용
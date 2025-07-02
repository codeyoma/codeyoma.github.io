---
description:
aliases:
created: 2025-05-18
modified: 2025-07-01
---

- 리액트는 언마운트된 컴포넌트에 상태 업데이트(setState)를 하지 말라 경고
	- 의미 없고, 메모리 누수나 경고를 유발하기 때문
- 비동기 코드나 외부 콜백 안에서는 컴포넌트가 아직 마운트된 상태인지 판단할 방법 없다
 - [[useRef]]를 이용해서
	 - 렌더링과 무관하게 값을 저장할 수 있는 “참조 가능한 저장 공간”을 제공하는 훅
	 - `useRef`는 리렌더 발생 안함
	 - `useState`는 리렌더 발생
	 - ```js
		function useMountedRef() {
		  const mountedRef = useRef(false);
		
		  useEffect(() => {
		    mountedRef.current = true;
		    return () => {
		      mountedRef.current = false;
		    };
		  }, []);
		
		  return mountedRef;
		}
- fetch가 끝나고 클로저 함수도 실행되어 끝났다. 그럼 이제 이 클로저와 ref는 unreachable이 되고, GC가 메모리에서 수거하나요?
	- Yes, 클로저와 참조된 ref도 더 이상 참조되지 않으면 JS 가비지 컬렉터(GC)가 수거
---
description:
aliases:
created: 2025-06-19
modified: 2025-06-23
---

- 클래스 컴포넌트
	- componentDidMount
	- componentDidUpdate
	- componentWillUpdate
- 함수 컴포넌트
	- 렌더링에 기반한 부수효과 한 곳에서 처리
	- 컴포넌트를 외부 시스템과 연결
	- useEffect
		- 렌더링 후의 동작
	- useLayoutEffect
		- 렌더링 전의 동작
		- 렌더링을 위한
		- 레이아웃 정보 제공
			- 뷰포트 내에서 요소의 위치 결정
		- 컴포넌트가 두 번 렌더링되고, 화면을 다시 그리기 전에 브라우저 차단. 성능에 영향을 미치므로 필요한 경우에만 사용
	- useInsertionEffect
	- 의존성 배열
		- 반응형 의존성 로직
			- 배열에 값이 있으면
				- 의존성의 변경에 따라 설정 콜백 재실행
			- 빈 의존성 배열
				- 의존성이 없으므로 최초에만 설정 콜백 적용
			- 의존성 배열 전달 안하면
				- 매 렌더링마다 설정 콜백 호출
		- [[rendering trigger]]
	- cleanup 콜백은 이전 상태를 기준으로 정리되고, 설정 콜백은 새로운 상태를 이용해 등록 - [[Closures]] 특징
	- [[useEffect 개발모드에서 두번 실행되는 이유]]
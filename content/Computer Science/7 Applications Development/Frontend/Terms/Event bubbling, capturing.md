---
description: 
aliases:
  - 이벤트 버블링
  - 이벤트 캡처링
created: 2025-04-14
modified: 2025-07-01
---

- 이벤트가 부모 요소로 전달되는 현상
- 이벤트 전파 3 단계 (이벤트 전파는 자동으로 실행됨)
	- Capturing
		- 이벤트가 발생한 하위 요소로 내려가는 과정
		- `element.addEventListener('click', handler, true);`
	- Target
		- 해당 이벤트 리스너 실행, 캡처링 중단
	- Bubbling
		- 상위 요소로 이벤트가 전파되는 과정
		- `element.addEventListener('click', handler, false 또는 생략);`
		- 브라우저의 기본 이벤트 처리방법
			- 최상위 요소까지 전파됨(body, html까지)
- 장점
	- 상위 컴포넌트에서 하위 이벤트 감지 - 이벤트 위임
		- 부모 하나에만 리스너 달고, 자식의 이벤트 처리 가능
		- 자식마다 이벤트 안달아도 된다
- 이벤트 전파 막기
	- `e.stopPropagation()`
	- 해당 이벤트가 전파되는 것을 막음
		- 버블링, 캡처링 둘다 가능
- 기본 동작 방지
	- `e.preventDefault()`
	- 해당 이벤트에 브라우저가 수행하는 기본 동작을 막음
		- `form -> submit`은 브라우저가 refresh됨
- portal에서 이벤트 버블링은 DOM트리가 아닌 리액트 트리를 따라간다
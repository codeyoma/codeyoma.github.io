---
description:
aliases:
created: 2025-04-14
modified: 2025-06-23
---

- 이벤트가 부모 요소로 전달되는 현상
- 이벤트 전파 3 단계 (이벤트 전파는 자동으로 실행됨)
	- Capturing
		- `element.addEventListener('click', handler, true);`
	- Target
		- 해당 이벤트 리스너 실행, 캡처링 중단
	- Bubbling
		- `element.addEventListener('click', handler, false 또는 생략);`
- 장점
	- 상위 컴포넌트에서 하위 이벤트 감지 - 이벤트 위임
		- 부모 하나에만 리스너 달고, 자식의 이벤트 처리 가능
		- 자식마다 이벤트 안달아도 된다
- 버블링 막기
	- 해당 이벤트가 부모로 전파되는 것을 막음
	- `e.stopPropagation()`
- portal에서 이벤트 버블링른 DOM트리가 아닌 리액트 트리를 따라간다
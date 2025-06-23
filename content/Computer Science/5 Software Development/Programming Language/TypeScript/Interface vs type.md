---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---

- interface
	- 구조 선언에 최적
	- 클래스 친화적
	- 선언 병합
	- 활용
		- 객체, 클래스 구조 명세
			- ```ts
				interface Animal { name: string }
				interface Dog extends Animal { breed: string }
		- api 정의
- type
	- 타입 조작에 최적
	- 유니온 / 제네릭 / 고급 타입 친화적
	- 단일 선언
	- 활용
		- 유니온
			- ```ts
				type Shape = { kind: 'circle'; r: number } | { kind: 'square'; size: number }
		- 함수 반환, 유틸리티 타입
			- ```ts
				type Keys = 'a' | 'b'
				type Obj = {
				  [K in Keys]: number
				}
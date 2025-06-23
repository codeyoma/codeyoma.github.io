---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---

- class 방법이 아닌 prototype 기반 상속 매커니즘
- class
	- 추상, 구체
	- 동일 류에 대해서만 상속가능
		- interface -> class -> instance
	- 설계 명확
- prototype
	- 실행 컨텍스트에 따라 의미가 달라짐
	- 의미 유사성기반 상속
		- 다른 프로토타입을 상속 가능 (의미만 통하면)
		- 프로토 타입 체이닝
	- 런타임에 동적 프로토타입 체인 변경 가능
		- 동적 상속
	- 구조보다 행동 중심
- `console.dir()`
- js에서 모든 객체는 `Object`를 상속한다
- 프로토타입 체인
	- js 엔진이 체인을 자동으로 관리
	- 상위 체인으로 검색하며 속성 확인
- ```js
	const fruits = ['apple', 'banana'];
	console.dir(fruits)
	
	// 프로토타입 체인
	fruits.forEach === fruits.__proto__.forEach // true
- 프로토타입 메서드와 정적 메서드
	- 특정 메소드는 프로토타입에 없고(프로토타입 메소드), 기본 제공되는 전역 객체에 정적 메소드로 포함되는 경우도 있음
		- `Object.keys()`
		- ...
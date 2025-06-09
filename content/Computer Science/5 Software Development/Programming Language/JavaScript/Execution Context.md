---
description: 
aliases:
  - 실행 컨텍스트
created: 2025-06-09
modified: 2025-06-09
---

- Execution Context
	- 코드가 실행되는 환경을 말함
	- 어떤 변수, 함수에 접근 가능한지를 결정
-  구성 요소
	- `Variable Environment`
		- `var`, 함수 선언 등
		- lexical environment과 겹쳐보이지만, 초기화용
	- `This Binding`
		- `this`가 참조하는 값
	- `Scope Chain`
		- `Lexical Environment`
			- Activation Object
				- 특정 스코프의 변수와 함수 선언을 저장하는 객체
				- 구성 요소
					- `Environment record`
						- 내부 지역 변수, 참조
					- `Outer Lexical Environment Reference`
						- 전역 환경, 부모 스코프의 lexical environment 를 참조
						- [[Closures]]의 원리 
- 종류
	- Global Context
		- 전체 코드 실행 시 생성
		- browser - `window` 
		- node - `global`
	- Function Context
		- 함수 호출마다 생성
	- Eval Context
		- `eval()` 실행 시 생성
- 실행 과정
	- 컨텍스트 생성
		   - 변수/함수 선언을 메모리에 올림 (호이스팅)
	- 컨텍스트 실행
		   - 코드 실행
		   - 함수 호출 시 새로운 컨텍스트가 스택에 push됨
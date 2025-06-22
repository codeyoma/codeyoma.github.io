---
description:
aliases:
created: 2025-06-09
modified: 2025-06-22
---
- 자바스크립트의 실행 컨텍스트에 의한 특징
	- 호이스팅은 “선언”만 끌어올려지는 듯한 *현상*, 실제로 끌어올려진 “초기화”가 아니다
	- 실행 컨텍스트의 creation phase에서 선언 처리 (undefined로 initialize)
- var는 undefined가 되지만 let/const는 접근 자체가 불가능. ![[Variable Lifecycle#^77b659]]
	- ![[Scope#^27f6eb]]
	- ![[Scope#^365b67]]
		- 코드 블록 내에서만 적용
- 함수 선언은 완전히 호이스팅됨, 함수 표현식은 그렇지 않음
- let, const, arrow function도 호이스팅이 되지만 방지하는 방법임
	- let, const
		- TDZ
	- arrow function
		- 변수처럼 취급됨으로 undefined

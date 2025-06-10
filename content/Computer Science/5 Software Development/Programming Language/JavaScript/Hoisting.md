---
description:
aliases:
created: 2025-06-09
modified: 2025-06-10
---

- 호이스팅은 “선언”만 끌어올려짐, “초기화”는 아니다
- var는 undefined가 되지만 let/const는 접근 자체가 불가능
	- ![[Scope#^27f6eb]]
	- ![[Scope#^365b67]]
		- 코드 블록 내에서만 적용
		- Lexical Variable Scoping (구문적인 변수 영역 규칙)
- 함수 선언은 완전히 호이스팅됨, 함수 표현식은 그렇지 않음

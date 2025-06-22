---
description:
aliases:
created: 2025-06-22
modified: 2025-06-22
---

- 선언 단계
	- 스코프에 등록
- 일시적 사각지대 (TDZ - Temporal Dead Zone) ^77b659
	- let, const 호이스팅시, 초기화 전에 접근하면 referenceError 발생
- 초기화 단계
	- 기본값 할당
- 할당 단계
	- 실제 값 할당
	- [[데이터 메모리 할당]]
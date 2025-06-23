---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---

- state, prop 변화 감지
- 리액트는 [[불변성]]을 가정하고, 해당 참조가 변경되었는지를 감지하고 렌더링 트리거함
	- 리액트는 `Object.is`를 통해 이전 값과 비교하여 변경 사항 파악
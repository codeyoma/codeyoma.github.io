---
description:
aliases:
created: 2025-06-09
modified: 2025-06-09
---

	
- Deep copy
	- 객체의 모든 레벨(depth)에 대해 복사
	- `JSON.parse()`
		- 성능상 문제
		- 순환 참조나, 특정 구조 복사 불가능
	- 재귀함수
	- `immer.js`, `lodash` library
		- `json.parse()`의 문제 해결
		-  ```js
			import { produce } form 'immer';
			
			let a = {
				more: {
					gender: "male"
				}
			}
			
			let b = produce(a, draft => {
				draft.more.gender = "female";
			})
			
			console.log(a === b)      // false
			console.log(a.more.gender)// male
			console.log(b.more.gender)// female

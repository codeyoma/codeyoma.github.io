---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---

- cpp에서의 코루틴
- ```js
	function* myGenerator() {
	  yield 1;
	  yield 2;
	  yield 3;
	}
	
	const gen = myGenerator();
	
	console.log(gen.next()); // { value: 1, done: false }
	console.log(gen.next()); // { value: 2, done: false }
	console.log(gen.next()); // { value: 3, done: false }
	console.log(gen.next()); // { value: undefined, done: true }
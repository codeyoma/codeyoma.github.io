---
description:
aliases:
created: 2025-06-09
modified: 2025-06-09
---

-  arguments
    - 함수에 전달된 모든 인자(arguments)를 담고 있다
    - 함수의 파라미터 개수와 상관없이 접근할 수 있다
    - 유사 배열 객체
        - map(), forEach() 같은 메서드는 없음
    - 화살표 함수에서는 없다
    - 
		```js
		function func1(a, b, c) {
		  console.log(arguments[0]); // 1
		  console.log(arguments[1]); // 2
		  console.log(arguments[2]); // 3
		}
		
		func1(1, 2, 3);
		```
- ...args
    - 함수 호출 시 넘겨진 모든 인자를 배열로 모아줌
    - 나머지 매개변수(rest parameter)
    - 실제 배열 객체
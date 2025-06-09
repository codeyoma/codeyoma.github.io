---
description:
aliases:
created: 2025-06-09
modified: 2025-06-09
---

- 클로저가 변수를 캡처하는 방식 때문에 생기는 예상치 못한 동작
	- `var`로 선언된 `i`는 함수 스코프 변수이고, setTimeout 콜백은 루프가 끝난 후에 실행되므로, 모든 클로저가 같은 i를 참조하게 됨
	- ```js
		for (var i=0; i<10; ++i) {
		  setTimeout(function() {
		    console.log(i); // 10, 10, 10, 10, 10, 10 ...
		  }, 1000);
		}
- solutions
	- ```js
		// using IIFE (immediately invoked function) 
		// with delay
		for (var i=0; i<10; ++i) {
			(function(j) {
				setTimeout(function() {
					console.log(j);
				}, 1000);
			})(i);
		}
		
		// without delay
		for (var i=0; i<10; ++i) {
			setTimeout((function(i) {
				console.log(i);
			})(i), 1000)
		}
		
		
		// wrap in a function 
		for (var i = 0; i < 10; i++) {
			function timer(j) {
				setTimeout(function() {
					console.log(j);
					}, j);
				};
			timer(i); 
		}
		
		
		// ES6, use let instead of var
		for (let i=0; i<10; ++i) {
			setTimeout(function() {
				console.log(i);
			}, 1000);
		}
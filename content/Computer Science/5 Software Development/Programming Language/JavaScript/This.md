---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---
- 실행 컨텍스트에 따라 달라지는 this
	- 암시적 바인딩
		- 전역 공간에서 this는 전역 객체를 참조
		- 함수가 함수로서 호출될 경우, this는 전역 객체를 참조
		- 함수가 메서드로 호출될 경우, this는 메서드를 호출한 객체를 참조
		- 생성자 함수 내에서 this는 생성될 인스턴스를 참조
	- 명시적 바인딩
		- call, apply, bind 메서드를 사용하여 함수나 메서드를 호출할 때 this를 명시적으로 바인딩
		- call
			- 함수로 전달할 인자가 고정
			- `func.call(this, arg1, arg2);`
		- apply
			- 함수로 전달할 인자가 가변
			- `func.apply(this, [arg1, arg2]);`
		- bind
			- this값이 설정된 새로운 함수를 반환
			- `const bindFunc = func.bind(this)`
	- 정적 바인딩
		- 화살표 함수는 상위 스코프의 this를 바인딩
			- 함수가 정의된 시점(실행 시점이 아닌)의 this 바인딩
- `this === window(global) // true`
- ```js
	const a = {name: "a"};
	const b = {name: "b"};
	
	function print(){
	    console.log(this.name);
	}
	
	a.print = print;
	b.print = print;
	a.print(); // a
	b.print(); // b
	print();   // fcClassroom 
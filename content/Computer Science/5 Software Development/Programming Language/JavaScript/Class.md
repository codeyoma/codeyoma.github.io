---
description:
aliases:
created: 2025-06-09
modified: 2025-06-09
---

- 선언 방법
	- prototype
	- `new` syntax (construct function)
	- ES6 `class` syntax
- Prototypical Inheritance - 프로토타입을 사용한 상속
	- `Class, contructor.. ` 구문은 syntatic sugar (구문적 편의)
	- 내부적으로 프로토타입 구문으로 처리
```js
function Vacation(destination, length) {
  this.destination = destination
  this.length = length
}

Vacation.prototype.print = function() {
  console.log(this.destination + " will take " + this.length + " days")
}

var maui = new Vacation("Maui", 7)

maui.print()

```
- 오늘날 [[React|리액트]]는 클래스를 멀리하고, 함수를 사용해 컴포넌트 구성
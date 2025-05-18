---
created: 2025/4/08 20:25:19
modified: 2025/4/08 21:35:57
---

# 구조 분해
- `const {x, y} = test`
- `import { ReactNode as RN } from 'react';`
```js
const regularPerson = {
	firstname: "",
	lastname: "",
	spouse: {
		firstname: "",
		lastname: ""
	}
};

// 구조분해
const lordify = ({spouse: { firstname } }) => {
	console.log(`${firstname}`);
}

lordify(regularPerson);
```

# 스프레드 연산자
```js
const lakes = ['a', 'b', 'c', 'd']
// const temp1 = lakes.reverse() 원본 lakes 변형
// const temp2 = [...lakes].reverse() object에선 여전히 shallow, 값인 배열에선 deep인 듯 
const [first, ...rest] = lakes;

// first = 'a'
// rest = ['b', 'c', 'd']
```
# 호이스팅
- 호이스팅은 “선언”만 끌어올려짐, “초기화”는 아니다
- var는 undefined가 되지만 let/const는 접근 자체가 불가능
	- var
		- 코드 블록 넘어서 적용
	- let 
		- 코드 블록 내에서만 적용
		- Lexical Variable Scoping (구문적인 변수 영역 규칙)
- 함수 선언은 완전히 호이스팅됨, 함수 표현식은 그렇지 않음

# 컴파일링
- 전통적인 컴파일링은 기계코드(바이너리)로 변환
- JS에서는 더 많은 브라우저가 이해할 수 있는 다른 버전의 자바스크립트 구문으로 변환
- 컴파일링 도구
	- babel
	- 빌드 도구에 의해 자동화
		- webpack
		- parcel

# 인자 배열
- arguments
	- 함수에 전달된 모든 인자(arguments)를 담고 있다
	- 함수의 파라미터 개수와 상관없이 접근할 수 있다
	- 유사 배열 객체
		- map(), forEach() 같은 메서드는 없음
	- 화살표 함수에서는 없다
- ...args
	- 함수 호출 시 넘겨진 모든 인자를 배열로 모아줌
	- 나머지 매개변수(rest parameter)
	- 실제 배열 객체

# async/await
- try/catch로 감싸기

# 프라미스 만들기
```js 
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
	const request = new XMLHttpRequest()
	request.open('GET', api)
	request.onload = () =>
		(request.status === 200)
		? resolves(JSON.parse(request.response).results)
	: rejects(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  request.send()
})
/*
getFakeMembers(5).
then(
	members => console.log(members),
	err => console.error(
		new Error("cannot load members from randomuser.me"));
*/	
getFakeMembers(5)
.then(members => console.log(members))
.catch(err => console.error(
		new Error("cannot load members from randomuser.me"));
)
```

# CommonJS
- 모든 버전의 노드에서 지원하는 일반적인 모듈 패턴
```js
const print() => log();
const log() => console.log();

module.exports = {pritn, log};

//---

const {log, print} = require('./source-location')
```

# Class
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
- 오늘날 리액트는 클래스를 멀리하고, 함수를 사용해 컴포넌트 구성
# ETC

- [compat-table.github.io/compat-table/](https://compat-table.github.io/compat-table)
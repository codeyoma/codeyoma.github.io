---
description:
created: 2025-05-18
modified: 2025-06-22
aliases:
  - 클로저
---
# ref
- ![JavaScript Visualized - Closures - YouTube](https://www.youtube.com/watch?v=6Ixyltr8_R0&list=WL&index=32&t=554s)

# summary
closures
???
- 외부 변수 영역의 값을 참조한 상태
- 고로 gc에 의해 사라지지 않음
- 캡슐화에 사용

# Closures
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
	- is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
	- gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
	- 함수가 선언될 때의 렉시컬 스코프 안의 참조를 기억
		- outer lexical environment
	- 함수가 실행될 때, 렉시컬 스코프 안의 변수들에 접근할 수 있다
		- 값이 아닌 접근할 수 있는 연결(참조)를 유지
	- 함수 내부에 있는 함수가 외부 변수에 접근할 수 있는 건 클로저
	- ```js
		function outer() {
		  let count = 0;
		
		  function inner() { // closures 
			count++;
			console.log(count);
		  }
		
		  return inner;
		}
		
		const fn = outer(); // outer는 실행되고 종료됨
		fn(); // 1
		fn(); // 2
- 열린 변수를 닫힌 변수로
	- lambda calculus
		- free variables
			- 내부에서 정의되지 않고, 외부에서 참조되는 변수
			- 외부에서 정의된 변수
		- closed lambda expression
			- free variables가 없는 람다 표현식
		- open lambda expression
			- free variables가 하나 이상 있는 람다 표현식
			- 람다 표현식 내에서 참조되는 외부 정의 변수가 있으면
		- Bound Variables (akaDependent, Restricted Variables)
			- 클로저에 의해 묶여진 자유 변수
			- 클로저가 활성 상태인 동안에는 가비지 컬렉터의 대상에서 제외
				- 해당 변수가 참조되고 있으니까
- precautions
	- 메모리 누수 가능성
	- 코드의 복잡성
		- 이해의 어려움
		- 디버깅 어려움
- use cases
	- key points
		- encapsulation
		- data hiding
		- state persistence
	- examples
		- currying
			- 여러 인자를 받는 함수를 단일 인자를 받는 함수들의 연쇄(chain)로 변환
				- 함수의 부분 실행, 지연 실행 가능하게
			- 함수의 재사용성, 모듈성 향상
			- deferred execution
				- 지연 실행
				- 모든 함수의 인자가 등록되어야 실행
				- ```js
					function add(a) {
						return function (b) {
							return function (c) {
								return a + b + c;
							}
						}
					}
					console. log (add (1) (2)); // not yet
					console. log (add (1) (2) (3)); // 6
				- 리덕스 미들웨어의 구조
					- `const middleware = store => next => action => {}`
		- 부분 적용 함수
			- ```js
				function createLogger (type) {
					return function (message) {
						console.log (`[${type}] ${message}`); // 파라미터도 외부 변수이니 묶인 변수됨
					}
				}
				const errorLogger = createLogger ( 'ERROR');
				const infoLogger = createLogger ( 'INFO');
				const warningLogger = createLogger ('WARNING');
				errorLogger("something");
				infoLogger("something");
				warningLogger("something");
		- react
			- 함수형 컴포넌트는 자체적으로 상태 저장안되는데 어떻게?
				- (*현재는 클로저 아님*)
				- 함수 컴포넌트는 상태가 변경될 때마다 새로운 인스턴스를 생성하기 때문에 초기화된 상태만을 가질 수 있었다
				- `hook`을 통해 상태 보존
			- `useState` 간단히 구현해보기
				- ```js
					function createUseState() {
						let state;
						
						function setState(newState) {
							state = newState;
							render();
						}
						
						function useState(initialState) {
							state = state === undefined ? initialState : state;
							return [state, setStatel;
						}
						
						return useState;
					}
			- `useEffect`의 [[Closure Trap]]
				- useEffect hook은 사이드 이펙트 처리용
				- 의존성 배열의 값 변화에 따라 콜백함수 실행
					- 필요할때 사이드 이펙트 실행
				- 콜백 함수
					- (컴포넌트의 렌더링 시점의) 상태와, 프롭을 기억
						- 클로져 특성 (초기 상태 캡처)
						- 그러므로 새로운 상태일때는 업데이트 해야함
				- 의존성 배열
					- [[Closure Trap | 클로저 트랩]]을 피하기 위해
					- useEffect의 콜백 함수가 의존해야하는 변수들
					- 의존 변수들 상태가 변할 때마다, 콜백 함수가 다시 실행(생성)
					- 콜백 함수는 최신 상태 기억하게 된다
					
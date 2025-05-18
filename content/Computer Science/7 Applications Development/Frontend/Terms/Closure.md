---
created: 2025/4/11 12:44:25
modified: 2025/4/11 12:48:40
aliases:
  - 클로저
---

- 함수가 선언될 때의 렉시컬 스코프 안의를 참조를 기억
- 함수가 실행될 때, 렉시컬 스코프 안의 변수들에 접근할 수 있다
	- 값이 아닌 접근할 수 있는 연결(참조)를 유지
- 함수 내부에 있는 함수가 외부 변수에 접근할 수 있는 건 클로저
- 상태 저장, 정보 은닉, 비동기 처리와 타이머 등에서 유용
```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer(); // outer는 실행되고 종료됨
fn(); // 1
fn(); // 2
```


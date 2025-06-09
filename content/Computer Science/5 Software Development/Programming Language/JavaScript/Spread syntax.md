```js
const lakes = ['a', 'b', 'c', 'd']
// const temp1 = lakes.reverse() 원본 lakes 변형
// const temp2 = [...lakes].reverse()
const [first, ...rest] = lakes;

// first = 'a'
// rest = ['b', 'c', 'd']
```
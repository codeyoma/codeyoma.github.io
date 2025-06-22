- 컴포넌트 안의 여러 스테이트 변경을 한번에 처리
- 방지하는 방법(일괄처리하지 않고 스테이트 하나에 의존적)
	- `flushSync`
	- 성능에는 부정적임
	
```ts
const handleAddTodo = (todoName) => {
	flushSync(() => {
		setTodos (L... todos, f id: uuid , task: todoName }])
	})
	todoListRef.current.scrollTop = todoListRef.current.scrollHeight
}
```
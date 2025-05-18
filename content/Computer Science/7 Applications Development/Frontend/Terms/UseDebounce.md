---
created: 2025/4/13 16:48:18
modified: 2025/4/14 13:37:11
---

- 리액트에 concurrent mode 생기기 전에, 사용되던 입력 지연
- 일정 시간 동안 변화가 없을 때만 값을 반영하는 커스텀 훅
- 검색창 자동완성 같은 UI에서 너무 많은 요청 방지
- 현재는 공식훅 사용
	- concurrent mode
		- `useDeferredValue`
		- `useTransition`
		- `startTransition`
		- `suspense`
```js
import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(timer); // 값 바뀌면 이전 타이머 취소
  }, [value, delay]);

  return debounced;
}

function SearchBox() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) return;

    fetch(`/api/search?q=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```
---
created: 2025/4/11 15:01:14
modified: 2025/4/13 16:08:04
---

- `Suspense` 컴포넌트는 지연 적재가 발생할 때, `fallback` 렌더링
	- pending
		- throw -> fallback ui
	- resolved
		- rerender -> child component render
	- rejected
		- throw error -> fallback 무시, ErorrBoundary로 전달
- 프라미스 던지기로 suspense 실행
- [[Closures|클로저]]로 내부 변수 캡슐화, 참조

```js
import React, {Suspense} from "react";

function createResource(fetcher) {
  let status = 'pending';
  let result: any;

  const suspender = fetcher.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

const userResource = createResource( fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
);

function User() {
  const user = userResource.read(); // 동기처럼 읽기
  return <div>Username: {user.name}</div>;
}

function App() {
  return (
  <ErrornBoundary fallback={} >
    <Suspense fallback={}>
      <User />
    </Suspense>
</ErrorBoundary>
  );
}
```

# Retry version
```js
import React, { useState, Suspense } from "react";

// 1. createResource
function createResource<T>(fetcher: Promise<T>) {
  let status = "pending";
  let result: T;
  let error: any;

  const suspender = fetcher.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      error = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw error;
      return result;
    },
  };
}

// 2. ErrorBoundary
class ErrorBoundary extends React.Component<
  { fallback?: React.ReactNode; onReset?: () => void },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    this.props.onReset?.(); // 부모에 알림 → 리소스 갱신 트리거
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          ❌ 에러 발생
          <button onClick={this.handleRetry}>🔁 다시 시도</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// 3. User (Suspense에서 fetch read)
function User({ resource }: { resource: ReturnType<typeof createResource> }) {
  const user = resource.read();
  return <div>👤 Username: {user.name}</div>;
}

// 4. App (리소스를 상태로 관리 → 재생성 가능)
export default function App() {
  const createUserResource = () =>
    createResource(
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        if (!res.ok) throw new Error("유저 정보 가져오기 실패");
        return res.json();
      })
    );

  const [resource, setResource] = useState(createUserResource);

  return (
    <ErrorBoundary onReset={() => setResource(createUserResource())}>
      <Suspense fallback={<div>⏳ 로딩 중...</div>}>
        <User resource={resource} />
      </Suspense>
    </ErrorBoundary>
  );
}
```
---
created: 2025/4/11 15:07:05
modified: 2025/4/13 16:03:26
aliases:
  - 오류경계
  - 오류 경계
---
- ```js
	import React, { Component } from "react";
	
	export default class ErrorBoundary extends Component {
		state = { error : null };
	
		// 클래스 컴포넌트의 생명주기에 따라 호출되는 구체적 메서드
		static getDerivedStateFromError(error) {
			return { error };
		}
		
		resetError = () => {
			this.setState({ error: null });
		};
		
		render() {
			const { error } = this.state;
			const { children, fallback } = this.props;
			if (error) return <fallback error={error} /> || <></>;
			return children;
		}
	}
- 오류 경계 컴포넌트를 만드는 유일한 방법은 아직 클래스 컴포넌트 사용
- 클래스 컴포넌트
- 오류 발생하면 `state.error` 설정
- 오류가 있으면 `fallback 컴포넌트` 렌더링
	- 이 컴포넌트의 프로퍼티로 오류 전달
- 다른 컴포넌트에 합성해서, 트리에서 발생하는 오류를 포획하고  `fallback 컴포넌트` 렌더링
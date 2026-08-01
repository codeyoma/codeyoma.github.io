---
description:
aliases:
created: 2025-06-19
modified: 2026-05-22
---


- ![JavaScript Visualized - Execution Contexts - YouTube](https://www.youtube.com/watch?v=zdGfo6I1yrA&list=WL&index=40)
- callstack -> micro task queue -> task queue 순으로 우선순위
	- 상위 우선 순위가 비어야 실행된다
- micro task queue
	- promise
	- async
	- QueuemicroTask
	- MutationObserver
- task queue (Web APIs)
	- fetch
	- timers
	- console
	- geolocation
	- web storage
	- file
	- performance
	- html dom
	- url
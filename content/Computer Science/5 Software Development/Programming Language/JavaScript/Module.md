---
description:
aliases:
created: 2025-06-09
modified: 2025-06-09
---

- 모든 버전의 노드에서 지원하는 일반적인 모듈 패턴
	- ```js
		const print() => log();
		const log() => console.log();
		
		module.exports = {pritn, log};
		
		//---
		
		const {log, print} = require('./source-location')
	- 동적 임포트
	- 트리 쉐이킹에 어려움
- `import`
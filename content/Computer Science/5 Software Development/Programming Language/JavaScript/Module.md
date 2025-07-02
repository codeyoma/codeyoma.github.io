---
description:
aliases:
created: 2025-06-09
modified: 2025-07-01
---

- CJS
	- 모듈 시스템이 필요해짐에 따라 표준이 없었기에 서버 사이드에서 최초 적용
	- 모든 버전의 Node.Js에서 지원하는 일반적인 모듈 패턴
		- `require`
		- `module.exports`
		- ```js
			const print() => log();
			const log() => console.log();
			
			module.exports = {pritn, log};
			
			//---
			
			const {log, print} = require('./source-location')
	- 트리 쉐이킹에 어려움
	- npm 패키지 시스템 발전 영향
- ESM
	- 정적 구조
		- 최적화 가능
	- 키워드
		- `import`
		- `export`
			- named export
		- `export default`
			- default export
	- 장점
		- 트리 쉐이킹
		- 동적 임포트
		- 표준화
		- 모듈 스코핑
- 모든 버전의 노드에서 지원하는 일반적인 모듈 패턴
	- 
		```js
		const print() => log();
		const log() => console.log();
		
		module.exports = {pritn, log};
		
		//---
		
		const {log, print} = require('./source-location')
		```
- `import`
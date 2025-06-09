---
created: 2025/4/15 07:02:50
modified: 2025/4/15 07:06:26
references:
  - https://www.youtube.com/watch?v=JU6sl_yyZqs
---

- default는 그대로
- default가 아닌 것은, import한 후, module에서 찾아서 지정
- ```js
	import {lazy} from "react"
	
	export function lazyload(path, namedExport) {
		return lazy(()=>{
			const promise = import(path)
	
			if (namedExport === null) {
				return promise
			} else {
				return promise.then(module => ({ default: module[namedExport]}))
			}
		})
	}
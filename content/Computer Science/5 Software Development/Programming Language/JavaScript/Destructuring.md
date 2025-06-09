- `const {x, y} = test`
- `import { ReactNode as RN } from 'react';`
- 
	```js
	const regularPerson = {
		firstname: "",
		lastname: "",
		spouse: {
			firstname: "",
			lastname: ""
		}
	};
	
	// 구조분해
	const lordify = ({spouse: { firstname } }) => {
		console.log(`${firstname}`);
	}
	
	lordify(regularPerson);
	```

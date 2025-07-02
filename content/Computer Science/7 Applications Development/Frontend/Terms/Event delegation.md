---
description: 
aliases:
  - 이벤트 위임
created: 2025-06-23
modified: 2025-06-23
---
- 이벤트 리스너를 각각의 자식들에게 반복적으로 설정하는 것이 아닌, 한 곳(부모)에서 처리
	- [[Event bubbling, capturing|이벤트 버블링]]을 활용하여
- ```js
	const liEls = document.querySelectorAll('li')
	liEls.forEach(liEl => {
		LiEl.addEventListener ('click', () => { // 모든 li에 등록
			console.log(liEl.textContent)
		})
	})
	
	const ulEl = document.querySelector('ul')
	ulEl.addEventListener('click', event => { 
		const liel = event.target.closest('li') // ul에만 등록, 버블링된 이벤트를 통해 ul의 자식인 li 캡처
		if (liEl) {
			console.log(liEl.textContent)
		}
	)
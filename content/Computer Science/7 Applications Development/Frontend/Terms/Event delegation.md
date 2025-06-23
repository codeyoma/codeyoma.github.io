---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---

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
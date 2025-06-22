---
description:
aliases:
created: 2025-06-09
modified: 2025-06-19
---

- 프라미스 만들기
	- ```js 
		const getFakeMembers = count => new Promise((resolves, rejects) => {
		    const api = `https://api.randomuser.me/?nat=US&results=${count}`
			const request = new XMLHttpRequest()
			request.open('GET', api)
			request.onload = () =>
				(request.status === 200)
				? resolves(JSON.parse(request.response).results)
			: rejects(Error(request.statusText))
		  request.onerror = (err) => rejects(err)
		  request.send()
		})
		/*
		getFakeMembers(5).
		then(
			members => console.log(members),
			err => console.error(
				new Error("cannot load members from randomuser.me"));
		*/	
		getFakeMembers(5)
		.then(members => console.log(members))
		.catch(err => console.error(
				new Error("cannot load members from randomuser.me"));
		)
- promise 객체 생성
- 리졸브, 리젝트 기다림
- then 메소드 콜백 함수 상위 프로미스 객체의 풀필먼트 함수로 등록
- 리졸브 시 해당 풀필먼트 함수 마이크로태스크큐에 등록
- 프로미스 객체의 풀필먼트 함수 해제
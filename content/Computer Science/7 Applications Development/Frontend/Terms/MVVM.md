---
description:
aliases:
created: 2025-06-22
modified: 2025-06-22
---

- MVC
	- 비즈니스 로직
	- ui 로직
	- m, v를 강하게 결합하는 controller
		- 직접 dom 조작
			- 복잡성 증대
	- 서버의 mvc패턴은 템플릿이더라
		- 컨트롤러를 템플릿화
			- 데이터 바인딩
		- 컨트롤러의 패턴
			- 모델이 변경되면 ui 새로 업데이트
			- ui에서 이벤트 발생하면 모델 업데이트
		- 화면 변화를 템플릿을 통해 위임하자. 직접 업데이트 대신, 왜냐면 패턴이 있으니까 
- 스크립트를 직접 작성하지 말고,  템플릿(ViewModel)로 선언적으로 작성하자
	- MVVM
- ex
	- 로직
		- 버튼을
		- 클릭하면
		- 좋아요를 증가해서
		- 출력
	- MVC
		- ```js
			document.getElementById("likeButton").addEventListener("click", function() {
				let likes = document.getElementById("likeCount").innerText;
				likes = parseInt(likes) + 1;
				document.getElementById ("likeCount").innerText = likes;
			}) ;
	- MVVM
		- ```js
			<button 클릭하면="좋아요 증가해서()">
				{likes 출력}
			</button>

---
description:
created: 2025-06-09
modified: 2025-06-09
aliases:
tags:
  - "#field/default"
  - "#format/default"
  - "#stage/facts"
reference:
---

<!--
[[내 노트 정리 방법#^bb9ac3|my workflow]]
- main
	- 출처
	- 저자
	- 인용(contents)
- footer
	- 내 의견
	- 내 의문
	- 요약
	- 추가 조사해야할 점
	- todo list
	- 관련노트 
-->

- SCSS (Sassy CSS) is a preprocessor scripting language that extends [[CSS]] with features like variables, nesting, and mixins.
- It makes stylesheets more maintainable and efficient to write.
- A useful feature of SCSS compared to plain CSS is its ability to manage nested classes
	- ```scss
		.navbar {
			background: black;
			.menu {
				list-style: none;
				
				li {
					display: inline-block;
				}
			}
		}

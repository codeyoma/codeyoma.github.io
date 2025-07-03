---
description: 
aliases:
  - 유클리드 호제법
created: 2025-07-02
modified: 2025-07-02
---

- 유클리드 호제법
	- $gcd(a,b) = gcd(b, a \, mod \, b)$
	- $lcm(a, b) = a * b / gcd(a, b)$
	- ```cpp
		int gcd(int a, int b){
			if (b == 0) return a;
			return gcd(b, a % b);
		}
		
		int lcm(int a, int b){
			// 오버 플로우 방지로 미리 나누고, 곱하기
			return a / gcd(a, b) * b;
		}
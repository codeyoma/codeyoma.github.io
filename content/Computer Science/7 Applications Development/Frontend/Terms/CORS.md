---
description:
aliases:
created: 2025-06-23
modified: 2025-06-23
---

- Cross Origin Resource sharing
- 한 도메인에서 로드된 클라이언트 웹 애플리케이션이, 다른 도메인에 위치한 리소스와 통신하는 방법을 명시
- 해당 서버가 현재 도메인(프론트 엔드)에 대한 CORS를 설정안하면 브라우저에서 보안정책상 차단
- cors 요청 전에 특정 조건시, [[Preflight]] 요청을 먼저 보낸다 
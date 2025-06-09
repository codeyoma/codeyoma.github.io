---
created: 2025/4/11 15:14:21
modified: 2025/4/11 15:21:24
---

- `React.lazy(() => import("./Some"))`
	- 코드 스플리팅
	- 지연 로딩
	- 렌더링 시점
- `import()`
	- 즉시 prefetch
	- 호출시
- ```js
	const Settings = React.lazy(() => import('./Settings')); // lazy
	
	function NavLink() {
	  const prefetch = () => import('./Settings'); // 즉시 preload
	
	  return <a onMouseEnter={prefetch} href="/settings">Settings</a>;
	}
-  Webpack prefetch/webpack magic comments
	- 자동 prefetch
	- 브라우저가 idle할 때 자동으로 로딩
	- ```js
		const Settings = React.lazy(() => import(/* webpackPrefetch: true */ './Settings'));
- IntersectionObserver로 prefetch (스크롤 근처일 때)
	- Lazy preload
	- 사용자 시야 근처
	- ```js
		function LazyTrigger() {
		  const ref = useRef();
		
		  useEffect(() => {
		    const observer = new IntersectionObserver(([entry]) => {
		      if (entry.isIntersecting) {
		        import('./Settings'); // 모듈 preload
		        observer.disconnect();
		      }
		    });
		    if (ref.current) observer.observe(ref.current);
		  }, []);
		
		  return <div ref={ref} style={{ height: 1 }} />;
		}
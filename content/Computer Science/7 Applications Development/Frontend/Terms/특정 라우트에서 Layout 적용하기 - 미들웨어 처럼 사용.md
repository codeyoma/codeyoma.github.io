---
created: 2025/4/13 15:47:53
modified: 2025/4/15 06:53:19
---

- ```js
	// App.tsx or router.tsx
	import { createBrowserRouter, RouterProvider } from "react-router-dom";
	import Layout from "./Layout";
	import AuthLayout from "./AuthLayout";
	import Home from "./pages/Home";
	import Login from "./pages/Login";
	import Dashboard from "./pages/Dashboard";
	import Profile from "./pages/Profile";
	
	const router = createBrowserRouter([
	  {
	    path: "/",
	    element: <Layout />, // 전체 공통 레이아웃
	    children: [
	      { index: true, element: <Home /> },
	      { path: "login", element: <Login /> },
	      {
	        element: <AuthLayout />, // 아래 라우트들에 인증 체크 적용됨
	        children: [
	          { path: "dashboard", element: <Dashboard /> },
	          { path: "profile", element: <Profile /> },
	        ],
	      },
	    ],
	  },
	]);
	
	export default function App() {
	  return <RouterProvider router={router} />;
	}
- ```js
	// AuthLayout.tsx
	import { Outlet, useLocation, Navigate } from "react-router-dom";
	import { useAuth } from "./auth-context";
	
	export default function AuthLayout() {
	  const { isLoggedIn } = useAuth();
	  const location = useLocation();
	
	  if (!isLoggedIn) {
	    return <Navigate to="/login" state={{ from: location }} />;
	  }
	
	  return <Outlet />;
	}
- outlet을 suspense로 감싸는 구조
	- ```js
		import { Outlet } from "react-router-dom";
		
		export default function Layout() {
		  return (
		    <div>
		      <nav>
		        <Link href="/">Home</a>
				<Link href="/about">About</a>
		        <Link href="/profile">Profile</a>
		      </nav>
		
		      <main>
		        <Outlet />
		      </main>
		    </div>
		  );
		}
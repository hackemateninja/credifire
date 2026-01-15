import AuthLayout from '@/layouts/auth-layout'
import DashboardLayout from '@/layouts/dashboard-layout'
import '@/styles/globals.css'
import Login from '@/views/auth/login.tsx'
import Home from '@/views/dashboard/home'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
		<Routes>
			<Route path='auth' element={<AuthLayout/>}>
				<Route index  path='login' element={<Login/>} />
			</Route>
			<Route path='dashboard' element={<DashboardLayout/>}>
				<Route index  path='' element={<Home/>} />
			</Route>
		</Routes>
  </BrowserRouter>,
)

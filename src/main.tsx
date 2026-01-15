import AuthLayout from '@/layouts/auth-layout'
import '@/styles/globals.css'
import Login from '@/views/auth/login.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
		<Routes>
			<Route path='auth' element={<AuthLayout/>}>
				<Route index  path='login' element={<Login/>} />
				
			</Route>
		</Routes>
  </BrowserRouter>,
)

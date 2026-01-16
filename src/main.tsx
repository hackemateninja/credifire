import AuthLayout from '@/layouts/auth-layout'
import DashboardLayout from '@/layouts/dashboard-layout'
import '@/styles/globals.css'
import Login from '@/views/auth/login.tsx'
import DashboardIndex from '@/views/dashboard'
import ClientsIndex from '@/views/dashboard/clients'
import ClientsCreate from '@/views/dashboard/clients/create'
import ClientsShow from '@/views/dashboard/clients/show'
import ClientsUpdate from '@/views/dashboard/clients/update'
import CollectorsIndex from '@/views/dashboard/collectors'
import CollectorsCreate from '@/views/dashboard/collectors/create'
import CollectorsShow from '@/views/dashboard/collectors/show'
import CollectorsUpdate from '@/views/dashboard/collectors/update'
import CustomersIndex from '@/views/dashboard/customers'
import CustomersCreate from '@/views/dashboard/customers/create'
import CustomersShow from '@/views/dashboard/customers/show'
import CustomersUpdate from '@/views/dashboard/customers/update'
import LoansIndex from '@/views/dashboard/loans'
import LoansCreate from '@/views/dashboard/loans/create'
import LoansShow from '@/views/dashboard/loans/show'
import LoansUpdate from '@/views/dashboard/loans/update'
import PaymentsIndex from '@/views/dashboard/payments'
import PaymentsCreate from '@/views/dashboard/payments/create'
import PaymentsShow from '@/views/dashboard/payments/show'
import PaymentsUpdate from '@/views/dashboard/payments/update'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
		<Routes>
			<Route path='auth' element={<AuthLayout/>}>
				<Route index  path='login' element={<Login/>} />
			</Route>
			<Route path='dashboard' element={<DashboardLayout/>}>
				<Route index  path='' element={<DashboardIndex/>} />
				<Route path='clients'>
					<Route index path='' element={<ClientsIndex/>} />
					<Route path='create' element={<ClientsCreate/>} />
					<Route path='show/:id' element={<ClientsShow/>} />
					<Route path='update/:id' element={<ClientsUpdate/>} />
				</Route>
				<Route path='collectors'>
					<Route index path='' element={<CollectorsIndex/>} />
					<Route path='create' element={<CollectorsCreate/>} />
					<Route path='show/:id' element={<CollectorsShow/>} />
					<Route path='update/:id' element={<CollectorsUpdate/>} />
				</Route>
				<Route path='customers'>
					<Route index path='' element={<CustomersIndex/>} />
					<Route path='create' element={<CustomersCreate/>} />
					<Route path='show/:id' element={<CustomersShow/>} />
					<Route path='update/:id' element={<CustomersUpdate/>} />
				</Route>
				<Route path='loans'>
					<Route index path='' element={<LoansIndex/>} />
					<Route path='create' element={<LoansCreate/>} />
					<Route path='show/:id' element={<LoansShow/>} />
					<Route path='update/:id' element={<LoansUpdate/>} />
				</Route>
				<Route path='payments'>
					<Route index path='' element={<PaymentsIndex />} />
					<Route path='create' element={<PaymentsCreate/>} />
					<Route path='show/:id' element={<PaymentsShow/>} />
					<Route path='update/:id' element={<PaymentsUpdate/>} />
				</Route>
			</Route>
		</Routes>
  </BrowserRouter>,
)

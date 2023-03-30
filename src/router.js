import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../src/components/Authentication/LoginForm'
import RegisterForm from './components/Authentication/RegisterForm'
import ExpensesPage from './pages/ExpensesPage'
import UserProfilePage from './pages/UserProfilePage'

export const router = createBrowserRouter([
  { path: '/', element: <LoginForm /> },
  { path: '/register', element: <RegisterForm /> },
  { path: '/expenses', element: <ExpensesPage /> },
  { path: '/user-profile', element: <UserProfilePage /> }
])

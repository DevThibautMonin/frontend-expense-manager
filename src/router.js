import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../src/components/Authentication/LoginForm'
import ExpensesPage from './pages/ExpensesPage'

export const router = createBrowserRouter([
  { path: '/', element: <LoginForm /> },
  { path: '/expenses', element: <ExpensesPage /> }
])

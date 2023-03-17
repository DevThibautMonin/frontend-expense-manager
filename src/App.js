import { router } from './router';
import { RouterProvider } from 'react-router';
import './App.css';

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

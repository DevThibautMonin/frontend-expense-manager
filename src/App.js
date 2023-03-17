import { router } from './router';
import { RouterProvider } from 'react-router';
import './App.css';

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import SignIn from './page/signIn';
import Signup from './page/signUp';
import './App.css'
import Products from './page/Products';

const router = createBrowserRouter([
  {
    path:"/Signup",
    element: <Signup />
  },
  {
    path:"/SignIn",
    element: <SignIn />
  },
  {
    path:"/Products",
    element: <Products />
  },
  {
    path:"/",
    element: <Home />
  }
])
function App() {

  return (
    <RouterProvider router={router}>
      

    </RouterProvider>
  )
}

export default App

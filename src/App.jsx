import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import MainLayouts from './layouts/MainLayouts'
import Cart from './pages/Home/Cart/Cart'
import { Toaster } from 'react-hot-toast'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { 
          path: '/Cart',
          element: <Cart /> 
        },
      ],
    },
  ])

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
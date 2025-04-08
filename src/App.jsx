import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import MainContext from './context/MainContext'
import Cart from './components/Cart'
import Login from './pages/Login'
import Register from './pages/Register'


export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/shop/:slug?',
            element: <Shop />
          },
          {
            path: '/productdetails/:id',
            element: <ProductDetails />
          },
          {
            path:'/cart',
            element:<Cart/>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/register',
            element:<Register/>
          }
        ]
      }
    ]
  )
  return (
    <MainContext>
      <RouterProvider router={routes} />
    </MainContext>
    
  )
}

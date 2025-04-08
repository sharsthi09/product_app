import React, { useContext, useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../context/MainContext'

export default function Header() {
  const { cart, setCart, user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const logoutUser = () => {
    setUser('');

  }

  useEffect(
    () => {
      if (!user && location.pathname != '/register') {
        navigate('/login');
      }
    }, [user, location.pathname]
  )

  // useEffect(
  //   () => {
  //     if (user != !user ){

  //     }
  //   },[]
  // )

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BrandName</h1>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to={'/'}>
                <span href="#" className="hover:text-gray-400">Home</span>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <span href="#" className="hover:text-gray-400">About</span>
              </Link>
            </li>
            <li>
              <Link to={'/shop'}>
                <span href="#" className="hover:text-gray-400">Shop</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <Link to={'/cart'}>
            <button className="relative mr-1">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cart.length}</span>
            </button></Link>
          <button onClick={() => setCart([])} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Clear Cart</button>
          {
            !user
              ?
              <Link to={'/login'}>
                <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Login</button>
              </Link>
              :
              <button onClick={logoutUser} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Logout</button>
          }


        </div>
      </div>
    </header>
  )
}

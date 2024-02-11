import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import LoginRegister from './pages/LoginRegister'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import PageNotFound from './pages/404'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/' exact />
      <Route element={<Products/>} path='/products'  />
      <Route element={<ProductDetails/>} path='/product-details/:id/:name'  />
      <Route element={<LoginRegister/>} path='/login-register'  />
      <Route element={<Category/>} path='/category'  />
      <Route element={<Cart/>}  path='/cart'  />
      <Route element={<Contact/>} path='/contact'  />
      <Route element={<PageNotFound/>} path='*'  />
    
    </Routes>
    <Footer/>
    </>
  )
}

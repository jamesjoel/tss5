import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/feature/Home'
import About from '../components/user/feature/About'
import Login from '../components/user/feature/Login'
import Contact from '../components/user/feature/Contact'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import Dashboard from '../components/admin/feature/Dashboard'
import Product from '../components/admin/feature/Product'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='login' element={<Login />} />
                  <Route path='contact' element={<Contact />} />
            </Route>  
            <Route path='admin' element={<AdminModule />}>
                <Route path="" element={<Dashboard />} />
                <Route path="product" element={<Product />} />
            </Route>


        </Routes>
    </>
  )
}

export default AllRoutes
import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../Components/user/Feature/Home'
import Login from '../Components/user/Feature/Login'
import Contact from '../Components/user/Feature/Contact'
import UserModule from '../modules/UserModule'
import AdminModule from  '../modules/AdminModule'
import Dashboard from '../Components/admin/feature/Dashboard'
import Product from '../Components/admin/feature/Product'
import Signup from '../Components/user/Feature/Signup'
import About from '../Components/user/Feature/About'
import AdminLogin from '../Components/admin/feature/Login'

const AllRoutes = () => {
  return (
    <>
    <Routes>
       <Route path=''element={<UserModule />}>
       <Route  path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='contact' element={<Contact />} /> 
      <Route path='signup' element={<Signup />} /> 
      <Route path='About' element={<About />} />
       </Route>
       <Route path='admin' element={<AdminModule />}>
          <Route path='' element={<AdminLogin />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='product' element={<Product />} />
       </Route>
    </Routes>
    </>
 )
}

export default AllRoutes
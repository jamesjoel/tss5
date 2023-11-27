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
import Teacher from '../components/admin/feature/Teacher'
import Signup from '../components/user/feature/Signup'
import Logout from '../components/user/feature/Logout'
import MyAccount from '../components/user/feature/MyAccount'
import MyProfile from '../components/user/feature/MyProfile'
import AdminLogin from '../components/admin/feature/Login';
import AdminLogout from '../components/admin/feature/Logout'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='login' element={<Login />} />
                  
                  <Route path='signup' element={<Signup />} />
                  <Route path='my-account' element={<MyAccount />} />
                  <Route path='my-account/profile' element={<MyProfile />} />
                  <Route path='logout' element={<Logout />} />
            </Route>  
            <Route path='admin' element={<AdminModule />}>
                <Route path="" element={<AdminLogin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product" element={<Product />} />
                <Route path="teacher" element={<Teacher />} />
                <Route path="logout" element={<AdminLogout />} />
            </Route>


        </Routes>
    </>
  )
}

export default AllRoutes
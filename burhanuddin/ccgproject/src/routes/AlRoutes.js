import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/UserComponents/featured/Home'
import AboutUs from '../components/UserComponents/shared/AboutUs'
import Blogs from '../components/UserComponents/featured/Blogs'
import UserModules from '../modules/UserModules'
import AdminModules from '../modules/AdminModules'
import Dashboard from '../components/AdminComponents/featured/Dashboard'
import Stock from '../components/AdminComponents/featured/Stock'
import SignUp from '../components/UserComponents/featured/SignUp'
import LogIn from '../components/UserComponents/featured/LogIn'
import MyAccount from '../components/UserComponents/featured/MyAccount'
import LogOut from '../components/UserComponents/featured/LogOut'
import AdminLogIn from '../components/AdminComponents/featured/AdminLogIn'
import AdminLogOut from '../components/AdminComponents/featured/LogOut'
import AddCategory from '../components/AdminComponents/featured/AddCategory'
import Category from '../components/AdminComponents/featured/Category'
import AddSubCategory from '../components/AdminComponents/featured/AddSubCategory'
import SubCategory from '../components/AdminComponents/featured/SubCategory'
import Products from '../components/AdminComponents/featured/Products'


const AlRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<UserModules/>} >
        <Route path="" element={<Home/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="blog" element={<Blogs/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<LogIn/>} />
        <Route path="account" element={<MyAccount/>} />
        <Route path="logout" element={<LogOut/>} />
      </Route>

      <Route path='admin' element={<AdminModules/>} >
        <Route path='' element={<AdminLogIn/>} />
        <Route path='stock' element={<Stock/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='logout' element={<AdminLogOut/>} />
        <Route path='category-add' element={<AddCategory/>} />
        <Route path='subcategory-add' element={<AddSubCategory/>} />
        <Route path='product-add' element={<Products/>} />
        <Route path='category-list' element={<Category/>} />
        <Route path='subcategory-list' element={<SubCategory/>} />
      </Route>


    </Routes>
  )
}

export default AlRoutes
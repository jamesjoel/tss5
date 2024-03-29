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
import Category from '../components/admin/feature/Category'
import UserCategory from '../components/user/feature/Category'
import CategoryList from '../components/admin/feature/CategoryList'
import SubCategory from '../components/admin/feature/SubCategory'
import SubCategoryList from '../components/admin/feature/SubCategoryList'
import ProductList from '../components/admin/feature/ProductList'
import Users from '../components/admin/feature/Users'
import ProductDetail from '../components/user/feature/ProductDetail'
import Student from '../components/admin/feature/Student'
import MyCart from '../components/user/feature/MyCart'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='login' element={<Login />} />
                  <Route path='product-detail/:id' element={<ProductDetail />} />
                  <Route path='category/:catename' element={<UserCategory />} />
                  
                  <Route path='signup' element={<Signup />} />
                  <Route path='mycart' element={<MyCart />} />
                  <Route path='my-account' element={<MyAccount />} />
                  <Route path='my-account/profile' element={<MyProfile />} />
                  <Route path='logout' element={<Logout />} />
            </Route>  
            <Route path='admin' element={<AdminModule />}>
                <Route path="" element={<AdminLogin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="product" element={<Product />} />
                <Route path="student" element={<Student />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="product-list" element={<ProductList />} />

                <Route path="category" element={<Category />} />
                <Route path="category/:id" element={<Category />} />
                
                
                
                <Route path="category-list" element={<CategoryList />} />
                <Route path="subcategory" element={<SubCategory />} />
                <Route path="subcategory/:id" element={<SubCategory />} />
                <Route path="subcategory-list" element={<SubCategoryList />} />
                <Route path="teacher" element={<Teacher />} />
                <Route path="logout" element={<AdminLogout />} />
            </Route>


        </Routes>
    </>
  )
}

export default AllRoutes
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


const AlRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<UserModules/>} >
        <Route path="" element={<Home/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="blog" element={<Blogs/>} />
        <Route path="signup" element={<SignUp/>} />
      </Route>

      <Route path='admin' element={<AdminModules/>} >
        <Route path='' element={<Dashboard/>} />
        <Route path='stock' element={<Stock/>} />
      </Route>


    </Routes>
  )
}

export default AlRoutes
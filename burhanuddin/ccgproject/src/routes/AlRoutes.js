import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/UserComponents/featured/Home'
import AboutUs from '../components/UserComponents/shared/AboutUs'
import Blogs from '../components/UserComponents/featured/Blogs'
import UserModules from '../modules/UserModules'
import AdminModules from '../modules/AdminModules'
import Dashboard from '../components/AdminComponents/featured/Dashboard'


const AlRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<UserModules/>} >
        <Route path="" element={<Home/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="blog" element={<Blogs/>} />
      </Route>

      <Route path='admin' element={<AdminModules/>} >
        <Route path='' element={<Dashboard/>} />
      </Route>


    </Routes>
  )
}

export default AlRoutes
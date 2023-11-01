import React from 'react';
import {Routes, Route} from 'react-router-dom';
import '../components/admin/assets/Sidebar.css'
import Home from '../components/user/feature/Home';
import About from '../components/user/feature/About';
import UserModule from '../modules/UserModule';
import Login from '../components/user/feature/Login'

const UserRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule/>}>
              <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    </>
  )
}

export default UserRoutes
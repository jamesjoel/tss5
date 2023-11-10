import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Feature/Home'
import Login from '../Feature/Login'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route  path='' element={<Home />} />
        <Route path='login' element={<Login />} />
    </Routes>
    </>
 )
}

export default AllRoutes
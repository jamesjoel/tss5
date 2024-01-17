import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/feature/Home'
import Login from '../components/feature/Login'
import Profile from '../components/feature/Profile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} /> 
        <Route path='login' element={<Login />} /> 
        <Route path='profile' element={<Profile />} /> 
    </Routes>
  )
}

export default AllRoutes
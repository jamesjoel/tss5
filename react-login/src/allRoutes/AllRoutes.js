import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/feature/Home'
import Login from '../components/feature/Login'
import Profile from '../components/feature/Profile'
import Pagination from '../components/feature/Pagination'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} /> 
        <Route path='login' element={<Login />} /> 
        <Route path='profile' element={<Profile />} /> 
        <Route path='pagination/1/0' element={<Pagination />} /> 
        <Route path='pagination/:a/:b' element={<Pagination />} /> 
    </Routes>
  )
}

export default AllRoutes
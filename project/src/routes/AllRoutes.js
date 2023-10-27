import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}

export default AllRoutes
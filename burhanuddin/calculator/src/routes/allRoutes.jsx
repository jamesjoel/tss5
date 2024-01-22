import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Calculate from '../components/featured/Calculate'

const allRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Calculate/>}/>
   </Routes>
   
   </>
  )
}

export default allRoutes
import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Calculate from '../components/featured/Calculate'
import CalcLightDark from '../components/featured/CalcLightDark'

const allRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<CalcLightDark/>}/>
    <Route path='/manga' element={<Calculate/>}/>
   </Routes>
   
   </>
  )
}

export default allRoutes
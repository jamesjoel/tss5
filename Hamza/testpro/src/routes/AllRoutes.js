import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../componets/featured/Home'
import Student from '../componets/featured/Student'

const AllRoutes = () => {
  return (
    <>
    
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='student' element={<Student/>}/>

    </Routes>
    
    </>
  )
}

export default AllRoutes
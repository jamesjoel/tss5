import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../componets/featured/Home'
import Student from '../componets/featured/Student'
import AddDetails from '../componets/featured/AddDetails'

const AllRoutes = () => {
  return (
    <>
    
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='student' element={<Student/>}/>
      <Route path='student/add' element={<AddDetails/>}/>

    </Routes>
    
    </>
  )
}

export default AllRoutes
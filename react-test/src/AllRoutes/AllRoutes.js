import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import Teacher from '../components/feature/Teacher'
import AddEditTeacher from '../components/feature/AddEditTeacher'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='teacher' element={<Teacher />} />
            <Route path='teacher/add' element={<AddEditTeacher />} />
            <Route path='teacher/edit/:id' element={<AddEditTeacher />} />
        </Routes>
    </>
  )
}

export default AllRoutes
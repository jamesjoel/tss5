import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../components/featured/Home'
import Teacher from '../components/featured/Teacher'
import AddTeacher from '../components/featured/AddTeacher'
import Hello from '../components/featured/hello'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path = '' element={<Home/>}/>
            <Route path= 'teacher' element={<Teacher/>}/>
            <Route path = 'addteacher' element = { <AddTeacher/>}/>


        </Routes>
    </>
  )
}

export default AllRoutes
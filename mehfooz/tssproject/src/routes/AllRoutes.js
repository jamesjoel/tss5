import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/feature/Home'
import About from '../components/user/feature/About'
import Login from '../components/user/shared/Login'
import Contact from '../components/user/feature/Contact'
import Signup from '../components/user/shared/Signup'
import UserModule from '../Modules/UserModule'
import AdminModule from '../Modules/AdminModule'
import Deshbord from '../components/admin/feature/Deshbord'
import Product from '../components/admin/feature/product'
import Teacher from '../components/admin/feature/Teacher'


const AllRoutes = () => {
  return (
    <>

          {/* routes.use("/api/city",require("../conrollers/citycontroller")); */}
    

          <Routes> 
              <Route path='' element={<UserModule/>}>
              <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />

             
                <Route path='Login' element={<Login />} />
                <Route path='Signup' element={<Signup />} />
              </Route>


              <Route path='admin' element={<AdminModule/>}/>
              <Route path='' element={<Deshbord/>}/>
              <Route path='/admin/product' element={<Product/>}/>
              <Route path='/admin/teacher' element={<Teacher/>}/>

              
          </Routes>
    </>
  )
}

export default AllRoutes
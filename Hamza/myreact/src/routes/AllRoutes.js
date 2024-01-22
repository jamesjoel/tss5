import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from '../components/user/feature/Home'
import About from '../components/user/feature/About'
import Contact from '../components/user/feature/Contact'
import UserModules from '../modules/UserModules'
import LogIn from '../components/user/feature/LogIn'
import SignUp from '../components/user/feature/SignUp'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="" element={<UserModules/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='Signup' element={<SignUp/>}/>
            <Route path='login' element={<LogIn/>}/>
        </Route>
      

    </Routes>
    
    </>
  )
}

export default AllRoutes
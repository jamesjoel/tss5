import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from '../components/user/feature/Home'
import About from '../components/user/feature/About'
import Contact from '../components/user/feature/Contact'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        
            <Route path='' element={<Home/>}/>
            <Route path='' element={<About/>}/>
            <Route path='' element={<Contact/>}/>

        

    </Routes>
    
    </>
  )
}

export default AllRoutes
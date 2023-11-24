import React from 'react'
import Header from '../Components/admin/shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/admin/shared/Footer'

const AdminModule = () => {
  return (
   <>
    <Header />
   <div className='container'  style={{minHeight : "650px"}}>
    <Outlet />
   </div>
    <Footer />
   </>
  )
}

export default AdminModule
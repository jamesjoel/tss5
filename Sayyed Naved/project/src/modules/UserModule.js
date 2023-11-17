import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/user/Shared/Header'
import Footer from '../Components/user/Shared/Footer'
const UserModule = () => {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
    
    )
}

export default UserModule
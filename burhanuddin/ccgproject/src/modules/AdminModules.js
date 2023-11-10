import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/AdminComponents/shared/header'
import Footer from '../components/AdminComponents/shared/footer'

const AdminModules = () => {
  return (  
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminModules
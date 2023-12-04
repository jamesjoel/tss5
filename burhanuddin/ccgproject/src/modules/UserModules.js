import React from 'react'
import Header from '../components/UserComponents/shared/header'
import Footer from '../components/UserComponents/shared/Footer'
import {Outlet} from 'react-router-dom'

const UserModules = () => {
  return (
    <>
    <Header/> 
   
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserModules
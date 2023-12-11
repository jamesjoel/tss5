import React from 'react'
import{Outlet}from'react-router-dom'
import header from '../components/admin/shared/Header'
import footer from '../components/admin/shared/Footer'
import Deshbord from '../components/admin/feature/Deshbord'
import Product from '../components/user/shared/Product'

const AdminModule = () => {
  return (
  <>
  <Deshbord/>
  <Product/>
  <div className="container"style={{minHeight:"650ox"}}>
  <header/>
  <Outlet style={{minHeight:"650ox"}}/>
  <footer/>
    
  </div>
  
  </>

  )
}

export default AdminModule
import React, { useEffect } from 'react'
import {Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/user/shared/Header';
import Footer from '../components/user/shared/Footer';

const UserLoginModule = () => {
  let navigate = useNavigate();
  useEffect(()=>{
      if(! localStorage.getItem("Token"))
      {
          navigate("/userlogin");
      }
  },[])
  return (
    <>     
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default UserLoginModule
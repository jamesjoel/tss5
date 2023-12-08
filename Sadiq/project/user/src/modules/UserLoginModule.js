import React, { useEffect } from 'react'
import {Outlet, useNavigate } from 'react-router-dom';

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
      
        <Outlet />
      
    </>
  )
}

export default UserLoginModule
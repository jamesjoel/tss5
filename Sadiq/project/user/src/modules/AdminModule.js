import React, { useEffect } from 'react'
import {Outlet, useNavigate } from 'react-router-dom';

const AdminModule = () => {

    let navigate = useNavigate();
  useEffect(()=>{
      if(! localStorage.getItem("Naruto"))
      {
          navigate("/adminlogin");
      }
  },[])

  return (
    <>
        <Outlet />
    </>
  )
}

export default AdminModule
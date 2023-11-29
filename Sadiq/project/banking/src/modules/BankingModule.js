import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const BankingModule = () => {

  let navigate = useNavigate();
  useEffect(()=>{
      if(! localStorage.getItem("Naruto"))
      {
          navigate("/login");
      }
  },[])

  return (
    <>
      <Outlet />
    </>
  )
}

export default BankingModule
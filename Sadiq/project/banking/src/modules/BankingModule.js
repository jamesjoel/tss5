import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const BankingModule = () => {

  let navigate = useNavigate();
  useEffect(()=>{
      if(! localStorage.getItem("Bank_Token"))
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
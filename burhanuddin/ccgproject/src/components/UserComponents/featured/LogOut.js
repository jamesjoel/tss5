import React from 'react';
import { Navigate} from 'react-router-dom';
const LogOut = () => {
    localStorage.removeItem("gomugomunoo");
 
  return (
    <>
    <Navigate to='/'/>
    </>
  )
}

export default LogOut
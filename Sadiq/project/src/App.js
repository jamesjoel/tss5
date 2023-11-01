import React from 'react'
import UserRoutes from './config/UserRoutes';
import AdminRoutes from './config/AdminRoutes';

const App = () => {
  return (
    <>
        <UserRoutes />    
        <AdminRoutes />  
    </>
  )
}

export default App;
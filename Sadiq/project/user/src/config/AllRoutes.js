import React from 'react'
import {Routes, Route, useRoutes, Navigate} from 'react-router-dom';
import UserModule from '../modules/UserModule';
import UserLogin from '../components/user/feature/UserLogin';
import UserLoginModule from '../modules/UserLoginModule';
import UserSignup from '../components/user/feature/UserSignup';
import Root from './Root/Root'
import AuthRoutes from './Auth/AuthRoutes'

const AllRoutes = () => {

  let isTokenPresent = () =>{
    let token = localStorage.getItem('Token');
    if(token){
      return true
    }else{
      return false
    }
  }

  let userRoutes = useRoutes([
    {
      path : '/',
      element : isTokenPresent() ? (
        <Navigate to="/user/my-account" replace />
      ) : (<UserModule />),
      children : Root
    },
    {
      path : '/usersignup',
      element : isTokenPresent() ? (
        <Navigate to='/user/my-account' replace />
      ) : (<UserSignup />)
    },
    {
      path : '/userlogin',
      element : isTokenPresent() ? (
        <Navigate to='/user/my-account' replace />
      ) : (<UserLogin />)
    },
    {
      path : '/user',
      element : <UserLoginModule />,
      children : AuthRoutes
    }
  ])

  return ( userRoutes)
}

export default AllRoutes
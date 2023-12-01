import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../components/feature/Login'
import Sigunp from '../components/feature/Sigunp'
import BankingModule from '../modules/BankingModule';
import AuthRoutes from './Auth/AuthRoutes';


const AllRoutes = () => {

  let isTokenPresent = () =>{
    if(localStorage.getItem('Naruto')){
      return true
    }else{
      return false
    }
  }

  let bankRoutes = useRoutes([
    {
      path : '/',
      element : isTokenPresent() ? (
        <Navigate to="/auth/home" replace />
      ): <Login />
    },
    {
      path : '/login',
      element : isTokenPresent() ? (
        <Navigate to="/auth/home" replace />
      ): <Login />
    },
    {
      path : '/signup',
      element : isTokenPresent() ? (
        <Navigate to="/auth/home" replace />
      ): <Sigunp />
    },
    {
      path : '/',
      element : <BankingModule />,
      children : AuthRoutes
    },
  ])

  return (bankRoutes)
}

export default AllRoutes
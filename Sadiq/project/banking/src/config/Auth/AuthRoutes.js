import React from 'react'
import Home from '../../components/feature/Home'
import Logout from '../../components/shared/Logout'

const AuthRoutes = [
  {
    path : 'home',
    element : <Home />
  },
  {
    path : 'logout',
    element : <Logout />
  },
]


export default AuthRoutes
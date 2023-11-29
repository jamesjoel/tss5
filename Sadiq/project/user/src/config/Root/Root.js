import React from 'react'
import Home from '../../components/user/feature/Home'
import UserLogin from '../../components/user/feature/UserLogin'
import UserSignup from '../../components/user/feature/UserSignup'
import Shop from '../../components/user/feature/Shop'
import About from '../../components/user/feature/About'

const Root = [
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/userlogin',
    element : <UserLogin />
  },
  {
    path : '/usersignup',
    element : <UserSignup />
  },
  {
    path : '/shop',
    element : <Shop />
  },
  {
    path : '/about',
    element : <About />
  }
]

export default Root
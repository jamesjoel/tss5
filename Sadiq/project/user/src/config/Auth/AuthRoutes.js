import React from 'react'
import MyAccount from '../../components/user/feature/MyAccount'
import UserSetting from '../../components/user/feature/UserSetting'
import UpdatePassword from '../../components/user/feature/UpdatePassword'
import UpdateProfile from '../../components/user/feature/UpdateProfile'
import UpdateData from '../../components/user/feature/UpdateData'
import UserCart from '../../components/user/feature/UserCart'
import Logout from '../../components/user/shared/Logout'
import Home from '../../components/user/feature/Home'
import Shop from '../../components/user/feature/Shop'
import About from '../../components/user/feature/About'
import SocialSite from '../../components/user/feature/social/SocilaSite'
import SocialProfile from '../../components/user/feature/social/SocialProfile'
import FriendList from '../../components/user/feature/social/FriendList'
import FriendReq from '../../components/user/feature/social/FriendReq'

const AuthRoutes = [
  {
    path : 'my-account',
    element : <MyAccount />
  },
  {
    path : 'setting',
    element : <UserSetting />
  },
  {
    path : 'update/password',
    element : <UpdatePassword />
  },
  {
    path : 'update/profile',
    element : <UpdateProfile />
  },
  {
    path : 'update/data',
    element : <UpdateData />
  },
  {
    path : 'cart',
    element : <UserCart />
  },
  {
    path : 'logout',
    element : <Logout />
  },
  {
    path : '',
    element : <Home />
  },
  {
    path : 'shop',
    element : <Shop />
  },
  {
    path : 'about',
    element : <About />
  },
  {
    path : 'social',
    element : <SocialSite />
  },
  {
    path : 'profile',
    element : <SocialProfile />
  },
  {
    path : 'friend-req',
    element : <FriendReq />
  },
  {
    path : 'friend-list',
    element : <FriendList />
  }
]

export default AuthRoutes
import '../components/admin/assets/Sidebar.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import AdminModule from '../modules/AdminModule';
import DashBoard from '../components/admin/feature/DashBoard';
import Users from '../components/admin/feature/Users';
import Messages from '../components/admin/feature/Messages';
import Analytics from '../components/admin/feature/Analytics';
import Order from '../components/admin/feature/Order';
import Home from '../components/user/feature/Home';
import About from '../components/user/feature/About';
import UserModule from '../modules/UserModule';
import AdminLogin from '../components/user/feature/Login'
import Shop from '../components/user/feature/Shop';
import SettingProfile from '../components/admin/feature/SettingProfile';
import Updation from '../components/admin/feature/Updation';
import UpdatePassword from '../components/admin/feature/UpdatePassword';
import Logout from '../components/admin/shared/Logout';
import UserLogin from '../components/user/feature/UserLogin';
import MyAccount from '../components/user/feature/MyAccount'
import UserLoginModule from '../modules/UserLoginModule';
import UserSignup from '../components/user/feature/UserSignup';
import UpdateData from '../components/user/feature/UpdateData';
import UserLogout from '../components/user/shared/Logout'
import UserSetting from '../components/user/feature/UserSetting';
import UpdateUserPassword from '../components/user/feature/UpdatePassword';
import UpdateProfile from '../components/user/feature/UpdateProfile';
import UserCart from '../components/user/feature/UserCart';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule/>}>
                <Route path='' element={<Home />} />
              <Route path='user' element={<UserLoginModule />}>
                <Route path='my-account' element={<MyAccount />} />
                <Route path='setting' element={<UserSetting />} />
                <Route path='update/password' element={<UpdateUserPassword />} />
                <Route path='update/data' element={<UpdateData />} />
                <Route path='update/profile' element={<UpdateProfile />} />
                <Route path='cart' element={<UserCart />} />
                <Route path='logout' element={<UserLogout />} />
              </Route>
                <Route path='userlogin' element={<UserLogin />} />
                <Route path='usersignup' element={<UserSignup />} />
                <Route path='about' element={<About />} />
                <Route path='login' element={<AdminLogin />} />
                <Route path='shop' element={<Shop />} />
            </Route>
            <Route path='admin' element={<AdminModule /> }>
                <Route path=':id' element={<DashBoard />} />
                <Route path='users/:id' element={<Users />} />
                <Route path='messages/:id' element={<Messages />} />
                <Route path='analytics/:id' element={<Analytics />} />
                <Route path='update/:id' element={<Updation />} />
                <Route path='update/password/:id' element={<UpdatePassword />} />
                <Route path='order/:id' element={<Order />} />
                <Route path='logout' element={<Logout />} />
                <Route path='settings' element={<SettingProfile />}>
                  <Route path='profile/:id' element={<SettingProfile />} />
                </Route>
                <Route path='*' element={<>Not Found</>} />
            </Route>
            <Route path='bankac' element={<BankingModule />}>
              <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    </>
  )
}

export default AllRoutes
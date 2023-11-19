import React from 'react'
import '../components/admin/assets/Sidebar.css'
import {Routes, Route} from 'react-router-dom';
import AdminModule from '../modules/AdminModule';
import DashBoard from '../components/admin/feature/DashBoard';
import Users from '../components/admin/feature/Users';
import Messages from '../components/admin/feature/Messages';
import Analytics from '../components/admin/feature/Analytics';
import FileManager from '../components/admin/feature/FileManager';
import Order from '../components/admin/feature/Order';
import Home from '../components/user/feature/Home';
import About from '../components/user/feature/About';
import UserModule from '../modules/UserModule';
import Login from '../components/user/feature/Login'
import Shop from '../components/user/feature/Shop';
import SettingProfile from '../components/admin/feature/SettingProfile';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule/>}>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='login' element={<Login />} />
                <Route path='shop' element={<Shop />} />
            </Route>
            <Route path='admin' element={<AdminModule /> }>
                <Route path=':id' element={<DashBoard />} />
                <Route path='users/:id' element={<Users />} />
                <Route path='messages/:id' element={<Messages />} />
                <Route path='analytics/:id' element={<Analytics />} />
                <Route path='file-manager/:id' element={<FileManager />} />
                <Route path='order/:id' element={<Order />} />
                <Route path='settings' element={<SettingProfile />}>
                  <Route path='profile/:id' element={<SettingProfile />} />
                </Route>
                <Route path='*' element={<>Not Found</>} />
            </Route>
        </Routes>
    </>
  )
}

export default AllRoutes
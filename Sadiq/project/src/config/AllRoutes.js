import React from 'react';
import '../components/admin/assets/Sidebar.css'
import {Routes, Route} from 'react-router-dom';
import Home from '../components/user/feature/Home';
import About from '../components/user/feature/About';
import UserModule from '../modules/UserModule';
import AdminModule from '../modules/AdminModule';
import DashBoard from '../components/admin/feature/DashBoard';
import Users from '../components/admin/feature/Users';
import Messages from '../components/admin/feature/Messages';
import Analytics from '../components/admin/feature/Analytics';
import FileManager from '../components/admin/feature/FileManager';
import Order from '../components/admin/feature/Order';
import Setting from '../components/admin/feature/Setting';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<UserModule/>}>
              <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
            </Route>
            <Route path='admin' element={<AdminModule /> }>
              <Route path='' element={<DashBoard />} />
              <Route path='users' element={<Users />} />
              <Route path='messages' element={<Messages />} />
              <Route path='analytics' element={<Analytics />} />
              <Route path='file-manager' element={<FileManager />} />
              <Route path='order' element={<Order />} />
              <Route path='setting' element={<Setting />} />
              <Route path='*' element={<>Not Found</>} />
            </Route>
        </Routes>
    </>
  )
}

export default AllRoutes
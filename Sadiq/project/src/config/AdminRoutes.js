import React from 'react'
import {Routes, Route} from 'react-router-dom';
import SideBar from '../components/admin/shared/SideBar';
import AdminModule from '../modules/AdminModule';
import DashBoard from '../components/admin/feature/DashBoard';
import Users from '../components/admin/feature/Users';
import Messages from '../components/admin/feature/Messages';
import Analytics from '../components/admin/feature/Analytics';
import FileManager from '../components/admin/feature/FileManager';
import Order from '../components/admin/feature/Order';
import Setting from '../components/admin/feature/Setting';


const AdminRoutes = () => {
  return (
    <>
    <SideBar>
        <Routes>
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
    </SideBar>
    </>
  )
}

export default AdminRoutes
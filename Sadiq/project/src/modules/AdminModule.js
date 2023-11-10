import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/admin/shared/SideBar';

const AdminModule = () => {
  return (
    <>
      <SideBar>
      <Outlet />
      </SideBar>
    </>
  )
}

export default AdminModule
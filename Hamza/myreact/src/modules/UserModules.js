import React from "react";
import { Outlet } from 'react router dom'
import Header from "../components/user/shared/header";
import Footer from "../components/user/shared/footer";
const UserModules = () => {
    return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>

   
             
    </>
    )

}
export default UserModules 
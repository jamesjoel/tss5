import React from "react"
import { Outlet } from 'react-router-dom'
import Header from "../components/user/shared/Header" 
import Footer from "../components/user/shared/Footer"

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
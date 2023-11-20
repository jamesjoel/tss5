import React from "react";
import Topbar from "../components/User/Shared/Topbar";
import Navbar from "../components/User/Shared/Navbar";
import Footer from "../components/User/Shared/Footer";
import Allroutes from "../Routes/Allroutes";
import { Outlet } from "react-router-dom";


const Usermodule = () => {
    return (
        <>

            <Topbar />
            <Navbar />
            <Allroutes />
            <Footer />
            <Outlet />
        </>
    )
}

export default Usermodule;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/User/Featured/Home";
import About from "../Components/User/Featured/About";
import Usermodule from "../Module/Usermodule";
import Adminmodule from "../Module/Adminmodule";
import Products from "../Components/Admin/Featured//Products";
import Signup from "../Components/User/Featured/Signup";
import Login from "../Components/User/Featured/Login";
import Dashboard from "../Components/Admin/Featured/Dashboard";
import Logout from "../Components/User/Featured/Logout"
import My_account from "../Components/User/Featured/My_account"

const Allroutes = () => {
    return (
        <>

            <Routes>
                <Route path='' element={<Usermodule />}>
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='logout' element={<Logout />} />
                    <Route path='My_account' element={<My_account />} />
                </ Route>

                <Route path='admin' element={<Adminmodule />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='Products' element={<Products />} />

                </Route>
            </Routes >

        </>
    )
}

export default Allroutes;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/User/Feature/Home";
import About from "../components/User/Feature/About";
import Login from "../components/User/Feature/Login";
import Usermodule from "../modules/Usermodule";


const Allroutes = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Usermodule />} >
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>
        </>
    )
}

export default Allroutes;
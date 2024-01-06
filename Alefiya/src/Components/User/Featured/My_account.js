import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const My_account = () => {

    let Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("access_token")) {
            Navigate("/login");
        }
    })

    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}

export default My_account;


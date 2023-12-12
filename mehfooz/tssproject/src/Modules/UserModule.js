import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/user/shared/Header'
import Footer from '../components/user/shared/Footer'

const UserModule = () => {
    return (
        <>
            <div style={{ marginTop:"150px" }}>
            <h1>user module</h1>
            <Header/>
            <Outlet/>
            <Footer/>

            </div>
        </>
    )
}

export default UserModule
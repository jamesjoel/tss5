import React from 'react'
import {Outlet} from 'react-router-dom'
<<<<<<< HEAD
import Header from '../components/user/shared/Header'
import Footer from '../components/user/shared/Footer'
=======
>>>>>>> ceb5ebb (lot of changes)

const UserModule = () => {
    return (
        <>
            <div style={{ marginTop:"150px" }}>
            <h1>user module</h1>
<<<<<<< HEAD
            <Header/>
            <Outlet/>
            <Footer/>

=======
            <Outlet/>
>>>>>>> ceb5ebb (lot of changes)
            </div>
        </>
    )
}

export default UserModule
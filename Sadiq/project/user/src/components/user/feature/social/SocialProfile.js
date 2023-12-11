import React from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import { NavLink } from 'react-router-dom'

const SocialProfile = () => {
  return (
    <>
        <Header />
            <div className='container my-3' style={{minHeight : "700px"}}>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <NavLink to="/user/my-account" className="btn btn-lg" style={{color : "GrayText", fontWeight : "bold"}}>Profile</NavLink>
                            </div>
                            <div className='col-md-3'>
                                <NavLink to="/user/my-account" className="btn btn-lg" style={{color : "GrayText", fontWeight : "bold"}}>Followers</NavLink>
                            </div>
                            <div className='col-md-3'>
                                <NavLink to="/user/friend-list" className="btn btn-lg" style={{color : "GrayText", fontWeight : "bold"}}>Following</NavLink>
                            </div>
                            <div className='col-md-3'>
                                <NavLink to="/user/friend-req" className="btn btn-lg" style={{color : "GrayText", fontWeight : "bold"}}>Requests</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default SocialProfile
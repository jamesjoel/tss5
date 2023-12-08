import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const UserSetting = () => {
  return (
    <>
    <Header />
        <div className='container' style={{minHeight : "700px"}} >
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <table className='table table-dark table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th><NavLink to="/user/update/password" className="btn text-light" >Change Password </NavLink></th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th><NavLink to="/user/update/profile" className="btn text-light" ><i class='fa fa-lg fa-id-card' style={{fontSize:'24px'}}></i> Update Profile </NavLink></th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th><NavLink to="/user/cart" className="btn text-light" ><i class="fa fa-lg fa-shopping-cart"></i> Cart</NavLink></th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th><a href="http://localhost:3001/home" className="btn text-light" ><i class="fa fa-lg fa-bank" style={{fontSize:"24px"}}></i> Bank Account</a></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default UserSetting
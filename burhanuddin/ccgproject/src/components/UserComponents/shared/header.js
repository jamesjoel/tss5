import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  let [IsLogIn, setIsLogIn] = useState(false);
  useEffect(()=>{
    // setIsLogIn(localStorage.getItem("token") ? true : false);
    if(localStorage.getItem("gomugomunoo")){
      setIsLogIn(true);
    }
  })
  return (
    
    <header id="header" className="site-header text-black">
    <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src="/assets/images/main-logo.png" className="logo" />
        </a>
        <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" >
          <svg className="navbar-icon" style={{width:"50", height:"50"}} >
            
          </svg>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar" >
          <div className="offcanvas-header px-4 pb-0">
            <a className="navbar-brand" href="index.html">
              <img src="/assets/images/main-logo.png" className="logo" />
            </a>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"  data-bs-target="#bdNavbar"></button>
          </div>
          <div className="offcanvas-body">
            <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
            <li className="nav-item">
                <NavLink className="nav-link me-4" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-4" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item dropdown me-4">
                <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownPages" data-bs-toggle="dropdown"
                >Shop</NavLink>
                <ul className="dropdown-menu list-unstyled">
                  <li>
                    <a href="shop-sidebar.html" className="dropdown-item item-anchor">Shop Sidebar <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="shop-four-column.html" className="dropdown-item item-anchor">Shop Grid <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-4" to="/blog">Our Blogs</NavLink>
              </li>


                { (IsLogIn==true) ?<li className="nav-item">
                <NavLink className="nav-link me-4" to="/account">My Account</NavLink>
              </li> : <li className="nav-item">
                <NavLink className="nav-link me-4" to="/signup">LogIn/SignUp</NavLink>
              </li>
              }
              {
                IsLogIn? <li className="nav-item">
                <NavLink className="nav-link me-4" to="/logout">Log Out</NavLink>
              </li> : ''
              }



              
              <li className="nav-item">
                <div className="user-items ps-5">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li className="search-item pe-3" data-bs-toggle="collapse" data-bs-target="#search-box" >
                      <svg className="search" style={{width:"18", height:"18"}}>
                        
                      </svg>
                    </li>
                    <li className="pe-3">
                      <a href="#">
                        <svg className="user" style={{width:"18", height:"18"}}>
                                                   </svg>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <svg className="cart" style={{width:"18", height:"18"}}>
                                                   </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>    
  </header>
  )
}

export default Header
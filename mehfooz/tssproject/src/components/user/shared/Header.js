import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>

                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper">

                                <div className="logo">
                                    <NavLink to="index.html"><img src="assets/img/logo/logo.png" alt="" /></NavLink>
                                </div>

                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>

                                            <NavLink  to="/">Home</NavLink>
                                            </li>
                                            <li>

                                            <NavLink  to="/about">About</NavLink>
                                            </li>
                                             {/* <li>

                                            <NavLink  to="/login">login</NavLink>
                                            </li> */}
                                            
                                            {/* <NavLink className="nav-link" to="/about">about</NavLink> */}
                                            <li><NavLink to="shop.html">shop</NavLink></li>
                                            <li className="hot"><NavLink to="#">Latest</NavLink>
                                                <ul className="submenu">
                                                    <li><NavLink to="/"> home</NavLink></li>
                                                    <li><NavLink to="product_details.html"> Product Details</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="blog.html">Blog</NavLink>
                                                <ul className="submenu">
                                                    <li><NavLink to="blog.html">Blog</NavLink></li>
                                                    <li><NavLink to="blog-details.html">Blog Details</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="#">Pages</NavLink>
                                                <ul className="submenu">
                                                    {/* <li><NavLink to="/login">Login</NavLink></li> */}
                                                    <li><NavLink to="cart.html">Cart</NavLink></li>
                                                    <li><NavLink to="elements.html">Element</NavLink></li>
                                                    <li><NavLink to="confirmation.html">Confirmation</NavLink></li>
                                                    <li><NavLink to="checkout.html">Product Checkout</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <div className="nav-search search-switch">
                                                <span className="flaticon-search"></span>
                                            </div>
                                        </li>
                                        <li> <NavLink to="/login"><span className="flaticon-user">login</span></NavLink></li>
                                        <li> <NavLink to="/signup"><span className="flaticon-user">signup</span></NavLink></li>
                                        <li><NavLink to="cart.html"><span className="flaticon-shopping-cart"></span></NavLink> </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

  )
}

export default Header
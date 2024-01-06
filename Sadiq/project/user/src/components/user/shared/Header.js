import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header__top__left">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header__top__right">
                            <div className="header__top__links">
                                <a href="#">Sign in</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div className="header__top__hover">
                                <span>Usd <i className="arrow_carrot-down"></i></span>
                                <ul>
                                    <li>USD</li>
                                    <li>EUR</li>
                                    <li>USD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <div className="header__logo">
                        <a href="./index.html"><img src="/assets/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <nav className="header__menu mobile-menu">
                        {
                            localStorage.getItem('Token') ? <ul>
                            <li><NavLink to="/user">Home</NavLink></li>
                            <li><NavLink to="/user/shop">Shop</NavLink></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><NavLink to="/user/about">About Us</NavLink></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/user/social">Socialise</NavLink>
                                <ul className="dropdown">
                                    <li><NavLink to="/user/social">Search</NavLink></li>
                                    <li><NavLink to="/user/profile">Profile</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/user/my-account">My Account</NavLink>
                                <ul className="dropdown">
                                    <li><NavLink to="/user/my-account">Profile</NavLink></li>
                                    <li><NavLink to="/user/setting">Setting</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/user/logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</NavLink></li>
                        </ul> 
                        : 
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><a href="#">Pages</a>
                            <ul className="dropdown">
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/adminlogin">Admin Login</NavLink></li>
                                <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                <li><a href="./checkout.html">Check Out</a></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><NavLink to="/userlogin">Login</NavLink></li>
                        <li><a href="./contact.html">Contacts</a></li>
                    </ul>
                        }
                    </nav>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="header__nav__option">
                        <a href="#" id='close' className="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                        <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                        <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                        <div className="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    </header>
    </>
  )
}

export default Header
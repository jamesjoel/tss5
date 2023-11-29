import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
        {/* <div id="preloader">
        <div id="status">
            <div className="spinner"></div>
        </div>
    </div> */}

    <div className="navbar-area">
        <div className="acavo-responsive-nav">
            <div className="container">
                <div className="acavo-responsive-menu">
                    <div className="logo">
                        <a href='index-2.html'>
                            <img src="/assets/images/logo.png" alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="acavo-nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className='navbar-brand' href='index-2.html'>
                        <img src="/assets/images/logo.png" alt="logo" />
                    </a>
                    <div className="collapse navbar-collapse mean-menu">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink to="/home" className="nav-link">Home</NavLink></li>

                            <li className="nav-item"><a href="#" className="nav-link">About Us </a></li>

                            <li className="nav-item"><a href="#" className="nav-link">Portfolio <i
                                        className='las la-angle-down'></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className='nav-link' href='portfolio.html'>Portfolio</a></li>
                                    <li className="nav-item"><a className='nav-link' href='portfolio-detail.html'>Portfolio
                                            Details</a></li>
                                </ul>
                            </li>

                            <li className="nav-item"><a href="#" className="nav-link">Pages <i
                                        className='las la-angle-down'></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className='nav-link' href='faq.html'>FAQ</a></li>
                                    <li className="nav-item"><a className='nav-link' href='team.html'>Team</a></li>
                                    <li className="nav-item"><a className='nav-link' href='contact.html'>Contact</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Auth Page <i
                                                className='las la-angle-right'></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className='nav-link' href='login.html'>Login</a></li>
                                            <li className="nav-item"><a className='nav-link' href='signup.html'>Sing Up</a></li>
                                            <li className="nav-item"><a className='nav-link' href='recover.html'>Recover</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className='nav-link' href='pricing.html'>Pricing</a></li>
                                    <li className="nav-item"><a className='nav-link' href='404.html'>404</a></li>
                                    <li className="nav-item"><a className='nav-link' href='coming-soon.html'>Coming Soon</a>
                                    </li>
                                    <li className="nav-item"><a className='nav-link' href='loan-calculation.html'>Loan
                                            Calculation</a></li>
                                    <li className="nav-item"><a className='nav-link' href='loans.html'>Loan Form</a></li>
                                    <li className="nav-item"><a className='nav-link' href='open-account.html'>Open Account</a>
                                    </li>
                                    <li className="nav-item"><a className='nav-link' href='privacy-policy.html'>Privacy
                                            Policy</a></li>
                                    <li className="nav-item"><a className='nav-link' href='testimonials.html'>Testimonials</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item"><a href='http://localhost:3000/' className="nav-link">Exit <i
                                        className='las la-angle-down'></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className='nav-link' href='http://localhost:3000/'>Exit</a></li>
                                    <li className="nav-item"><NavLink to="/logout" className="nav-link">Logout </NavLink></li>
                                </ul>
                            </li>

                            
                        </ul>
                        <div className="others-option d-flex align-items-center">
                            <div className="option-item">
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Search for anything" />
                                    <button type="submit"><i className="uil uil-search-alt"></i></button>
                                </form>
                            </div>
                            <div className="option-item">
                                <a className='btn theme-btn-1' href='contact.html'>Get
                                    Started <i className="las la-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
        <div className="others-option-for-responsive">
            
            <div className="container">
                <div className="dot-menu">
                    <div className="inner">
                        <div className="circle circle-one"></div>
                        <div className="circle circle-two"></div>
                        <div className="circle circle-three"></div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="option-inner">
                        <div className="others-option">
                            <div className="option-item">
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Search for anything" />
                                    <button type="submit"><i className="flaticon-loupe"></i></button>
                                </form>
                            </div>

                            <div className="option-item">
                                <a className='btn theme-btn-1' href='contact.html'><i className="las la-angle-right"></i>Get
                                    Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
    </>
  )
}

export default Header
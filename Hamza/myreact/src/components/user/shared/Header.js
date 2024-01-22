import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-area header-sticky">
    <div className="container"/>
        <div className="row"/>
            <div className="col-12"/>
                <nav className="main-nav">
                    
                    <a href="index.html" className="logo">
                        <img src="/assets/images/logo.png"/>
                    </a>
                    
            
                    <ul className="nav">
                    <li className="nav-item"/> mera login page
                                    <NavLink className="nav-link text-dark" to="/">Home</NavLink>
                                    <NavLink className="nav-link text-dark" to="/About">About</NavLink>
                                    <NavLink className="nav-link text-dark" to="/Contact">Contact</NavLink>
                                    <NavLink className="nav-link text-blue" to="/SignUp">SignUp</NavLink>
                                    <NavLink className="nav-link text-blue" to="/Contact">LogIn</NavLink>
                        <li className="submenu">
                            <a href="#">Pages</a>
                            <ul>

                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#">Features</a>
                            <ul>
                                <li><a href="#">Features Page 1</a></li>
                                <li><a href="#">Features Page 2</a></li>
                                <li><a href="#">Features Page 3</a></li>
                                <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                            </ul>
                        </li>
                        <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                    </ul>        
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
              
                </nav>

    <div className="site-wrap"/>
    
    
    <div className="site-navbar bg-white py-2"/>



</header>
  
  )
}

export default Header
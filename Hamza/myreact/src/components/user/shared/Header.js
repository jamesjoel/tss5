import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    
                    <a href="index.html" className="logo">
                        <img src="/assets/images/logo.png"/>
                    </a>
                    
            
                    <ul className="nav">
                    <li className="nav-item"/>
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                    <NavLink className="nav-link" to="/About">About</NavLink>
                                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        <li className="submenu">
                            <a href="#">Pages</a>
                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="products.html">Products</a></li>
                                <li><a href="single-product.html">Single Product</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
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
            </div>
        </div>
    </div>
</header>

  )
}

export default Header
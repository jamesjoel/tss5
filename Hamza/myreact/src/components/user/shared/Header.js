import React from 'react'

const Header = () => {
  return (
    <header>
  <div className="site-wrap"/>
    

    <div className="site-navbar bg-white py-2">

      <div className="search-wrap">
        <div className="container">
          <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
          <form action="#" method="post">
            <input type="text" className="form-control" placeholder="Search keyword and hit enter..."/>
          </form>  
        </div>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="index.html" className="js-logo-clone">ShopMax</a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="has-children active">
                  <a href="index.html">Home</a>
                  <ul className="dropdown">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                    <li className="has-children">
                      <a href="#">Sub Menu</a>
                      <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li><a href="shop.html">Shop</a></li>
                <li><a href="#">Catalogue</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
            <a href="#" className="icons-btn d-inline-block"><span className="icon-heart-o"></span></a>
            <a href="cart.html" className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              <span className="number">2</span>
            </a>
            <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Header
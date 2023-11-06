import React from 'react'

const Header = () => {
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
                <a className="nav-link me-4" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="/about">About Us</a>
              </li>
              <li className="nav-item dropdown me-4">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownPages" data-bs-toggle="dropdown"
                >Shop</a>
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
                <a className="nav-link me-4" href="/blog">Our Blogs</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownPages" data-bs-toggle="dropdown"
                >Pages</a>
                <ul className="dropdown-menu list-unstyled" >
                  <li>
                    <a href="about-us.html" className="dropdown-item item-anchor">About <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="cart.html" className="dropdown-item item-anchor">Cart <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="checkout.html" className="dropdown-item item-anchor">Checkout <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="contact.html" className="dropdown-item item-anchor">Contact <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="error-page.html" className="dropdown-item item-anchor">Error Page <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="faqs.html" className="dropdown-item item-anchor">FAQs <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="my-account.html" className="dropdown-item item-anchor">My Account <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="order-tracking.html" className="dropdown-item item-anchor">Order Tracking <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="wishlist.html" className="dropdown-item item-anchor">Wishlist <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="single-post.html" className="dropdown-item item-anchor">Single Post <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                  <li>
                    <a href="single-product.html" className="dropdown-item item-anchor">Single Product <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                  </li>
                </ul>
              </li>
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
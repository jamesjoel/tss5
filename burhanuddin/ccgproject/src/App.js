import React from 'react'

const App = () => {
  return (

   <>
   

    

    <div className="search-box position-relative overflow-hidden w-100">
      <div className="search-wrap">
        <div className="close-button position-absolute">
          <svg className="close" style={{width:"22", height:"22"}} >
                      </svg>
        </div>
        
      </div>
    </div> 

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
                <li className="nav-item dropdown">
                  <a className="nav-link me-4 active dropdown-toggle" href="#billboard" id="dropdownPages" data-bs-toggle="dropdown"
                  >Home</a><ul className="dropdown-menu list-unstyled" >
                    <li>
                      <a href="index.html" className="dropdown-item item-anchor">Homepage 1</a>
                    </li>
                    <li>
                      <a href="home2.html" className="dropdown-item item-anchor">Homepage V2 <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#about-us">About Us</a>
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
                <li className="nav-item dropdown me-4">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdownPages" data-bs-toggle="dropdown"
                  >Blog</a>
                  <ul className="dropdown-menu list-unstyled">
                    <li>
                      <a href="blog-classNameic.html" className="dropdown-item item-anchor">Blog classNameic <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                    </li>
                    <li>
                      <a href="blog-grid-four-column.html" className="dropdown-item item-anchor">Blog 4 Column <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                    </li>
                    <li>
                      <a href="blog-with-sidebar.html" className="dropdown-item item-anchor">Blog With Sidebar <span className="badge bg-secondary text-dark ms-2">PRO</span></a>
                    </li>
                  </ul>
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

    <section id="billboard" className="overflow-hidden">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner-item" style={{backgroundImage: "url(images/banner-image1.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "right", height: "682px"}}>
                    <div className="banner-content padding-large">
                      <h1 className="display-1 text-uppercase text-dark pb-2">wooden table set</h1>
                      <p>Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.</p>                      
                      <a href="shop.html" className="btn btn-medium btn-arrow position-relative mt-5">
                        <span className="text-uppercase">Shop Now</span>            
                        <svg className="arrow-right position-absolute" style={{width:"18", height:"20"}}>
                          
                        </svg>
                      </a>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner-item" style={{backgroundImage: "url(images/banner-image1.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "right", height: "682px"}}>
                    <div className="banner-content padding-large">
                      <h1 className="display-1 text-uppercase text-dark pb-2">Comfortable Sofa Set</h1>
                      <p>Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.
                      </p>                                         
                      <a href="shop.html" className="btn btn-medium btn-arrow position-relative mt-5">
                        <span className="text-uppercase">Shop Now</span>            
                        <svg className="arrow-right position-absolute" width="18" height="20">

                        </svg>
                      </a>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute"></div>
    </section>

    <section id="company-services" className="padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="shipping-fast">
                   
                </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Quick delivery</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="shopping-cart">
                   
                </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Pick up in store</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="gift">
                             </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Special Packaging</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="return">
                               </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Return & refund policy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-lg-6">
            <div className="image-holder mb-4 jarallax">
                <img src="images/single-image1.jpg" alt="single" className="img-fluid jarallax-img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail p-5">
              <div className="display-header">
                <h2 className="display-2 text-uppercase text-dark pb-2">About Us</h2>
                <p className="pb-3">Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.</p>
                <p>Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium amet hac. Justo tristique sagittis sodales viverra venenatis integer fringilla. </p>
                <a href="about-us.html" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                  <span className="text-uppercase">About us</span>            
                  <svg className="arrow-right position-absolute" width="18" height="20">
                   
                  </svg>
                </a>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="featured-products" className="product-store position-relative padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="display-header pb-3 d-flex justify-content-between flex-wrap col-md-12">
            <h2 className="display-2 text-dark text-uppercase">Our Featured Products</h2> 
            <a href="shop.html" className="btn btn-medium btn-arrow btn-normal position-relative">
              <span className="text-uppercase">Shop All</span>            
              <svg className="arrow-right position-absolute" width="18" height="20">
               
              </svg>
            </a>
          </div>
        </div>
        <div className="row">
          <div id="featured-swiper" className="product-swiper col-md-12">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item1.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html" className="text-primary">Black Sofa Set</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" ><span>$200</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item2.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html" className="text-primary">Circle Dining Table</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item3.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html" className="text-primary">Minimal Sofa</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item4.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html" className="text-primary">Pattern Tea Table</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item5.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html" className="text-primary">Black Sofa Set</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item6.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html" className="text-primary">Minimal Sofa</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination text-center mt-5"></div>
          </div>
        </div>
      </div>      
    </section>

    <section id="testimonials" className="position-relative">
      <div className="container">
        <div className="row">
          <div className="review-content position-relative">
            <div className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center justify-content-center">
              <svg className="icon-arrow" style={{width:"25", height:"25"}}>
                
              </svg>
            </div>
            <div className="swiper testimonial-swiper">
              <div className="quotation text-center">
                <svg className="quote">
                              </svg>
              </div>
              <div className="swiper-wrapper">
                <div className="swiper-slide text-center d-flex justify-content-center">
                  <div className="review-item col-md-10">
                    <i className="icon icon-review"></i>
                    <blockquote className="fs-4">“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                    <div className="author-detail">
                      <div className="name text-primary text-uppercase pt-2">Hana Kimusaki</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center d-flex justify-content-center">
                  <div className="review-item col-md-10">
                    <i className="icon icon-review"></i>
                    <blockquote className="fs-4">“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                    <div className="author-detail">
                      <div className="name text-primary text-uppercase pt-2">Jennie Rose</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center justify-content-center">
              <svg className="icon-arrow" style={{width:"25", height:"25"}}>
                
              </svg>
            </div>
          </div>
        </div>
      </div>      
      <div className="swiper-pagination text-center position-absolute"></div>
    </section>

    <section id="collections" className="position-relative padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="swiper collection-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide overflow-hidden">
                <div className="product-card">
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="shop.html">Living Rooms</a>
                    </h3>
                  </div>
                  <div className="image-overlay position-relative">
                    <div className="product-image">
                      <img src="images/product-item5.jpg" alt="product-item" className="product-image img-fluid" />
                      <div className="text-box box-slide position-absolute">
                        <div className="text-content p-5 bg-light">
                          <h3>About Room</h3>
                          <p>Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.</p>
                          <ul>
                            <li>Various Types of Bedroom</li>
                            <li>Different Size of Bed</li>
                            <li>Comfortable and Clean Room</li>
                          </ul>
                          <a href="#" className="btn btn-normal mt-3">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
              <div className="swiper-slide overflow-hidden">
                <div className="product-card">
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="shop.html">Bed Rooms</a>
                    </h3>
                  </div>
                  <div className="image-overlay position-relative">
                    <div className="product-image">
                      <img src="images/product-item6.jpg" alt="product-item" className="product-image img-fluid" />

                      <div className="text-box box-slide position-absolute">
                        <div className="text-content p-5 bg-light">
                          <h3>About Room</h3>
                          <p>Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.</p>
                          <ul>
                            <li>Various Types of Bedroom</li>
                            <li>Different Size of Bed</li>
                            <li>Comfortable and Clean Room</li>
                          </ul>
                          <a href="#" className="btn btn-normal mt-3">Learn More</a>
                        </div>
                      </div>
                    </div>
                
                  </div>                  
                </div>
              </div>



              <div className="swiper-slide overflow-hidden">
                <div className="product-card">
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="shop.html">Kitchens</a>
                    </h3>
                  </div>
                  <div className="image-overlay position-relative">
                    <div className="product-image">
                      <img src="images/product-item7.jpg" alt="product-item" className="product-image img-fluid" />

                      <div className="text-box box-slide position-absolute">
                        <div className="text-content p-5 bg-light">
                          <h3>About Kitchen</h3>
                          <p>Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.</p>
                          <ul>
                            <li>Various Types of Bedroom</li>
                            <li>Different Size of Bed</li>
                            <li>Comfortable and Clean Room</li>
                          </ul>
                          <a href="#" className="btn btn-normal mt-3">Learn More</a>
                        </div>
                      </div>
                    </div>
                  
                  </div>                  
                </div>
              </div>


              <div className="swiper-slide overflow-hidden">
                <div className="product-card">
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="shop.html">Guest Rooms</a>
                    </h3>
                  </div>
                  <div className="image-overlay position-relative">
                    <div className="product-image">
                      <img src="images/product-item8.jpg" alt="product-item" className="product-image img-fluid" />

                      <div className="text-box box-slide position-absolute">
                        <div className="text-content p-5 bg-light">
                          <h3>About Kitchen</h3>
                          <p>Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.</p>
                          <ul>
                            <li>Various Types of Bedroom</li>
                            <li>Different Size of Bed</li>
                            <li>Comfortable and Clean Room</li>
                          </ul>
                          <a href="#" className="btn btn-normal mt-3">Learn More</a>
                        </div>
                      </div>
                    </div>
                  
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>






    <section className="subscribe">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe-content padding-large">
              <div className="subscribe-header">
                <h2 className="display-4">Get offers & discounts by subscribing us</h2>
              </div>
              <form id="form">
                <input type="text" name="email"  className="w-100 bg-light border-0 ps-5 fst-italic" />
                <button className="btn btn-full btn-black text-uppercase">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="trending-products" className="product-store padding-large">
      <div className="container-fluid">
        <div className="row overflow-hidden">
          <div className="display-header pb-3 d-flex justify-content-between col-md-12">
            <h2 className="display-2 text-dark text-uppercase">Trending products</h2>
            <a href="shop.html" className="btn btn-medium btn-arrow btn-normal position-relative">
              <span className="text-uppercase">Shop all</span> 
              <svg className="arrow-right position-absolute" style={{width:"18", height:"20"}}>
                
              </svg>
            </a>
          </div>
          <div id="trending-swiper" className="product-swiper col-md-12">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item1.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html">Black Sofa Set</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#"><span>$200</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item2.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html">Circle Dining Table</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item3.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html">Minimal Sofa</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item4.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html">Pattern Tea Table</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="images/product-item5.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html">Black Sofa Set</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card image-zoom-effect link-effect d-flex flex-wrap">
                    <div className="image-holder">
                      <img src="/assets/images/product-item6.jpg" alt="product-item" className="product-image img-fluid" />
                    </div>
                    <div className="cart-concern">
                      <h3 className="card-title text-uppercase pt-3 text-primary">
                        <a href="single-product.html">Minimal Sofa</a>
                      </h3>
                      <div className="cart-info">
                        <a className="pseudo-text-effect" href="#" >
                          <span>$200</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination text-center mt-5"></div>
            </div>
          </div>
        </div>
      </div>      
    </section>

    <section id="latest-blog">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="display-header d-flex flex-wrap justify-content-between pb-3">
              <h2 className="display-2 text-dark text-uppercase">Read Our Articles</h2>
              <a href="blog.html" className="btn btn-medium btn-arrow btn-normal position-relative">
                <span className="text-uppercase">See all articles</span>            
                <svg className="arrow-right position-absolute" style={{width:"18", height:"20"}}>
                 
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-3 post-grid">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card-item">
              <div className="card border-0 bg-transparent">
                <div className="card-image">
                  <img src="images/post-item1.jpg" alt="" className="post-image img-fluid" />
                </div>
              </div>
              <div className="card-body p-0 mt-4">
                <h3 className="card-title text-uppercase">
                  <a href="single-post.html">Best looking interior things for bedrooms</a>
                </h3>
                <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.</p>
                <a href="single-post.html" className="btn btn-normal text-uppercase p-0"><em>Read More</em></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card-item">
              <div className="card border-0">
                <div className="card-image">
                  <img src="images/post-item2.jpg" alt="" className="post-image img-fluid" />
                </div>
              </div>
              <div className="card-body p-0 mt-4">
                <h3 className="card-title text-uppercase">
                  <a href="single-post.html">Trending modern furniture design in 2022</a>
                </h3>
                <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.</p>
                <a href="single-post.html" className="btn btn-normal text-uppercase p-0"><em>Read More</em></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="card-item">
              <div className="card border-0">
                <div className="card-image">
                  <img src="images/post-item3.jpg" alt="" className="post-image img-fluid" />
                </div>
              </div>
              <div className="card-body p-0 mt-4">
                <h3 className="card-title text-uppercase">
                  <a href="single-post.html">Why is simple firniture design looks fabulous</a>
                </h3>
                <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.</p>
                <a href="single-post.html" className="btn btn-normal text-uppercase p-0"><em>Read More</em></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="brand-collection" className="padding-small border-top border-bottom overflow-hidden margin-large mb-0">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <a href="#"><img src="images/brand-logo-1.svg" alt="brand"/></a>
            <a href="#"><img src="images/brand-logo-2.svg" alt="brand"/></a>
            <a href="#"><img src="images/brand-logo-3.svg" alt="brand"/></a>
            <a href="#"><img src="images/brand-logo-4.svg" alt="brand"/></a>
            <a href="#"><img src="images/brand-logo-5.svg" alt="brand"/></a>
        </div>
      </div>
    </section>



    <footer id="footer" className="overflow-hidden padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-3 col-sm-6 pb-3 pe-4">
              <div className="footer-menu">
                <img src="/assets/images/main-logo.png" alt="logo" className="pb-3" />
                <p>Mi facilisis facilisis orci vitae. Cum nisi morbi integer tincidunt ornare ac praesent in. Dolor tempus arcu sit quis nunc arcu facilisis quis eget nisi morbi integer.</p>
              </div>
              <div className="copyright">
                <p>© Copyright 2023. Design by <a href="https://templatesjungle.com/">TemplatesJungle</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 pb-3">
              <div className="footer-menu text-uppercase">
                <h5 className="widget-title pb-2">Quick Links</h5>
                <ul className="menu-list list-unstyled text-uppercase">
                  <li className="menu-item pb-2">
                    <a href="#billboard">Home</a>
                  </li>
                  <li className="menu-item pb-2">
                    <a href="#about-us">About</a>
                  </li>
                  <li className="menu-item pb-2">
                    <a href="#company-services">Services</a>
                  </li>
                  <li className="menu-item pb-2">
                    <a href="#latest-blog">Blogs</a>
                  </li>
                  <li className="menu-item pb-2">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 pb-3">
              <div className="footer-menu text-uppercase">
                <h5 className="widget-title pb-2">Social</h5>
                <div className="social-links">
                  <ul className="list-unstyled">
                    <li className="pb-2">
                      <a href="#">Facebook</a>
                    </li>
                    <li className="pb-2">
                      <a href="#">Twitter</a>
                    </li>
                    <li className="pb-2">
                      <a href="#">Pinterest</a>
                    </li>
                    <li className="pb-2">
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-menu contact-item">
                <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                <p><a href="">+ 12(0) 34 56 78 910</a></p>
                <p><a href="mailto:">hello@templatesjungle.com</a></p>
                <p>tea berry, marinette, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}
export default App

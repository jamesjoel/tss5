import React from 'react'

const App = ()=>{
return(
<>
<header class="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
         
            <nav className="classy-navbar" id="essenceNav">
              
                <a className="nav-brand" href="index.html"><img src="/assets/img/core-img/logo.png" alt=""/></a>

                <div className="classy-navbar-toggler">
                    <span className="navbarToggler"></span>
                </div>
            
                <div className="classy-menu">
                   
                    <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                    </div>
                    
                    <div className="classynav">
                        <ul>
                            <li><a href="#">Shop</a>
                                <div className="megamenu">
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Women's Collection</li>
                                        <li><a href="shop.html">Dresses</a></li>
                                        <li><a href="shop.html">Blouses &amp; Shirts</a></li>
                                        <li><a href="shop.html">T-shirts</a></li>
                                        <li><a href="shop.html">Rompers</a></li>
                                        <li><a href="shop.html">Bras &amp; Panties</a></li>
                                    </ul>
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Men's Collection</li>
                                        <li><a href="shop.html">T-Shirts</a></li>
                                        <li><a href="shop.html">Polo</a></li>
                                        <li><a href="shop.html">Shirts</a></li>
                                        <li><a href="shop.html">Jackets</a></li>
                                        <li><a href="shop.html">Trench</a></li>
                                    </ul>
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Kid's Collection</li>
                                        <li><a href="shop.html">Dresses</a></li>
                                        <li><a href="shop.html">Shirts</a></li>
                                        <li><a href="shop.html">T-shirts</a></li>
                                        <li><a href="shop.html">Jackets</a></li>
                                        <li><a href="shop.html">Trench</a></li>
                                    </ul>
                                    <div className="single-mega cn-col-4">
                                        <img src="/assets/img/bg-img/bg-6.jpg" alt=""/>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="single-product-details.html">Product Details</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single-blog.html">Single Blog</a></li>
                                    <li><a href="regular-page.html">Regular Page</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header-meta d-flex clearfix justify-content-end">
                <div className="search-area">
                    <form action="#" method="post">
                        <input type="search" name="search" id="headerSearch" placeholder="Type for search"/>
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>


                <div className="favourite-area">
                    <a href="#"><img src="/assets//assets/img/core-img/heart.svg" alt=""/></a>
                </div>
                
                <div className="user-login-info">
                    <a href="#"><img src="/assets//assets/img/core-img/user.svg" alt=""/></a>
                </div>
              
                <div className="cart-area">
                    <a href="#" id="essenceCartBtn"><img src="/assets//assets/img/core-img/bag.svg" alt=""/> <span>3</span></a>
                </div>
            </div>

        </div>
    </header>    
    <div className="cart-bg-overlay"></div>

    <div className="right-side-cart-area">
        <div className="cart-button">
            <a href="#" id="rightSideCart"><img src="/assets/img/core-img/bag.svg" alt=""/> <span>3</span></a>
        </div>

        <div className="cart-content d-flex">

            <div className="cart-list">
            
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src="/assets/img/product-img/product-1.jpg" className="cart-thumb" alt=""/>
                        
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>

                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src="/assets/img/product-img/product-2.jpg" className="cart-thumb" alt=""/>

                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src="/assets/img/product-img/product-3.jpg" className="cart-thumb" alt=""/>
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="cart-amount-summary">

                <h2>Summary</h2>
                <ul class="summary-table">
                    <li><span>subtotal:</span> <span>$274.00</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>discount:</span> <span>-15%</span></li>
                    <li><span>total:</span> <span>$232.00</span></li>
                </ul>
                <div class="checkout-btn mt-100">
                    <a href="checkout.html" class="btn essence-btn">check out</a>
                </div>
            </div>
        </div>
    </div>
    
    <section class="welcome_area bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-1.jpg)"}}>
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="hero-content">
                        <h6>asoss</h6>
                        <h2>New Collection</h2>
                        <a href="#" class="btn essence-btn">view collection</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="top_catagory_area section-padding-80 clearfix">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-2.jpg)"}}>
                        <div class="catagory-content">
                            <a href="#">Clothing</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-3.jpg)"}}>
                        <div class="catagory-content">
                            <a href="#">Shoes</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-4.jpg)"}}>
                        <div class="catagory-content">
                            <a href="#">Accessories</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cta-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-5.jpg)"}}>
                        <div class="h-100 d-flex align-items-center justify-content-end">
                            <div class="cta--text">
                                <h6>-60%</h6>
                                <h2>Global Sale</h2>
                                <a href="#" class="btn essence-btn">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section class="new_arrivals_area section-padding-80 clearfix">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center">
                        <h2>Popular Products</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <div class="container"/>
            <div class="row"/>
                <div class="col-12">
                    <div class="popular-products-slides owl-carousel">

                        <div class="single-product-wrapper">
                
                            <div class="product-img">
                                <img src="/assets/img/product-img/product-1.jpg" alt=""/>
                                
                                <img class="hover-img" src="img/product-img/product-2.jpg" alt=""/>
                            
                                <div class="product-favourite">
                                    <a href="#" class="favme fa fa-heart"></a>
                                </div>
                            </div>
                        
                            <div class="product-description">
                                <span>topshop</span>
                                <a href="single-product-details.html">
                                    <h6>Knot Front Mini Dress</h6>
                                </a>
                                <p class="product-price">$80.00</p>

                            
                                <div class="hover-content">
                                
                                    <div class="add-to-cart-btn">
                                        <a href="#" class="btn essence-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                
                        <div class="single-product-wrapper">
            
                            <div class="product-img">
                                <img src="/assets/img/product-img/product-2.jpg" alt=""/>
                              
                                <img class="hover-img" src="img/product-img/product-3.jpg" alt=""/>
                              
                                <div class="product-favourite">
                                    <a href="#" class="favme fa fa-heart"></a>
                                </div>
                            </div>
                          
                            <div class="product-description">
                                <span>topshop</span>
                                <a href="single-product-details.html">
                                    <h6>Poplin Displaced Wrap Dress</h6>
                                </a>
                                <p class="product-price">$80.00</p>

                              
                                <div class="hover-content">
                                    
                                    <div class="add-to-cart-btn">
                                        <a href="#" class="btn essence-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-product-wrapper">
                        
                            <div class="product-img">
                                <img src="/assets/img/product-img/product-3.jpg" alt=""/>
                              
                                <img class="hover-img" src="img/product-img/product-4.jpg" alt=""/>
                                <div class="product-badge offer-badge">
                                    <span>-30%</span>
                                </div>
                                <div class="product-favourite">
                                    <a href="#" class="favme fa fa-heart"></a>
                                </div>
                            </div>
                            <div class="product-description">
                                <span>mango</span>
                                <a href="single-product-details.html">
                                    <h6>PETITE Crepe Wrap Mini Dress</h6>
                                </a>
                                <p class="product-price"><span class="old-price">$75.00</span> $55.00</p>

                                <div class="hover-content">
                                    <div class="add-to-cart-btn">
                                        <a href="#" class="btn essence-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-product-wrapper">
                          
                            <div class="product-img">
                                <img src="/assets/img/product-img/product-4.jpg" alt=""/>
                          
                                <img class="hover-img" src="img/product-img/product-5.jpg" alt=""/>
                                <div class="product-badge new-badge">
                                    <span>New</span>
                                </div>
                                <div class="product-favourite">
                                    <a href="#" class="favme fa fa-heart"></a>
                                </div>
                            </div>
                            <div class="product-description">
                                <span>mango</span>
                                <a href="single-product-details.html">
                                    <h6>PETITE Belted Jumper Dress</h6>
                                </a>
                                <p class="product-price">$80.00</p>

                                <div class="hover-content">
    
                                    <div class="add-to-cart-btn">
                                        <a href="#" class="btn essence-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div/>
        <div/>
       
    


    

    <div class="brands-area d-flex align-items-center justify-content-between">
        <div class="single-brands-logo">
            <img src="/assets/img/core-img/brand1.png" alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src="/assets/img/core-img/brand2.png" alt=""/>
        </div>
      
        <div class="single-brands-logo">
            <img src="/assets/img/core-img/brand3.png" alt=""/>
        </div>
        
        <div class="single-brands-logo">
            <img src="/assets/img/core-img/brand4.png" alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src="/assets/img/core-img/brand5.png" alt=""/>
        </div>
  
        <div class="single-brands-logo">
            <img src="/assets/img/core-img/brand6.png" alt=""/>
        </div>
    </div>
    
<footer class="footer_area clearfix"/>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="single_widget_area d-flex mb-30">
                        <div class="footer-logo mr-50">
                            <a href="#"><img src="/assets/img/core-img/logo2.png" alt=""/></a>
                        </div>
                        <div class="footer_menu">
                            <ul>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="single_widget_area mb-30">
                        <ul class="footer_widget_menu">
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Shipping and Delivery</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row align-items-end">
          
                <div className="col-12 col-md-6">
                    <div className="single_widget_area">
                        <div className="footer_heading mb-30">
                            <h6>Subscribe</h6>
                        </div>
                        <div className="subscribtion_form">
                            <form action="#" method="post">
                                <input type="email" name="mail" className="mail" placeholder="Your email here"/>
                                <button type="submit" className="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
              
                <div className="col-12 col-md-6">
                    <div className="single_widget_area">
                        <div className="footer_social_area">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

<footer />
</>
)
}
export default App;
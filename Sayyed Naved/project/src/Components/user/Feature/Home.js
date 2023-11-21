import React from 'react'

const Home = () => {
  return (
   <>
   <div className="cart-bg-overlay"></div>

<div className="right-side-cart-area">
    <div className="cart-button">
        <a to="#" id="rightSideCart"><img src="/assets/img/core-img/bag.svg" alt=""/> <span>3</span></a>
    </div>

    <div className="cart-content d-flex">

        <div className="cart-list">
        
            <div className="single-cart-item">
                <a to="#" className="product-image">
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
                <a to="#" className="product-image">
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
                <a to="#" className="product-image">
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
        <div className="cart-amount-summary">

            <h2>Summary</h2>
            <ul className="summary-table">
                <li><span>subtotal:</span> <span>$274.00</span></li>
                <li><span>delivery:</span> <span>Free</span></li>
                <li><span>discount:</span> <span>-15%</span></li>
                <li><span>total:</span> <span>$232.00</span></li>
            </ul>
            <div className="checkout-btn mt-100">
                <a to="checkout.html" className="btn essence-btn">check out</a>
            </div>
        </div>
    </div>
</div>

<section className="welcome_area bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-1.jpg)"}}>
    <div className="container h-100">
        <div className="row h-100 align-items-center">
            <div className="col-12">
                <div className="hero-content">
                    <h6>asoss</h6>
                    <h2>New Collection</h2>
                    <a to="#" className="btn essence-btn">view collection</a>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="top_catagory_area section-padding-80 clearfix">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-2.jpg)"}}>
                    <div className="catagory-content">
                        <a to="#">Clothing</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-3.jpg)"}}>
                    <div className="catagory-content">
                        <a to="#">Shoes</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-4.jpg)"}}>
                    <div className="catagory-content">
                        <a to="#">Accessories</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="cta-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="cta-content bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-5.jpg)"}}>
                    <div className="h-100 d-flex align-items-center justify-content-end">
                        <div className="cta--text">
                            <h6>-60%</h6>
                            <h2>Global Sale</h2>
                            <a to="#" className="btn essence-btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section className="new_arrivals_area section-padding-80 clearfix">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading text-center">
                    <h2>Popular Products</h2>
                </div>
            </div>
        </div>
    </div>
</section>

    <div className="container"/>
        <div className="row"/>
            <div className="col-12">
                <div className="popular-products-slides owl-carousel">

                    <div className="single-product-wrapper">
            
                        <div className="product-img">
                            <img src="/assets/img/product-img/product-1.jpg" alt=""/>
                            
                            <img className="hover-img" src="img/product-img/product-2.jpg" alt=""/>
                        
                            <div className="product-favourite">
                                <a to="#" className="favme fa fa-heart"></a>
                            </div>
                        </div>
                    
                        <div className="product-description">
                            <span>topshop</span>
                            <a to="single-product-details.html">
                                <h6>Knot Front Mini Dress</h6>
                            </a>
                            <p className="product-price">$80.00</p>

                        
                            <div className="hover-content">
                            
                                <div className="add-to-cart-btn">
                                    <a to="#" className="btn essence-btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div className="single-product-wrapper">
        
                        <div className="product-img">
                            <img src="/assets/img/product-img/product-2.jpg" alt=""/>
                          
                            <img className="hover-img" src="img/product-img/product-3.jpg" alt=""/>
                          
                            <div className="product-favourite">
                                <a to="#" className="favme fa fa-heart"></a>
                            </div>
                        </div>
                      
                        <div className="product-description">
                            <span>topshop</span>
                            <a to="single-product-details.html">
                                <h6>Poplin Displaced Wrap Dress</h6>
                            </a>
                            <p className="product-price">$80.00</p>

                          
                            <div className="hover-content">
                                
                                <div className="add-to-cart-btn">
                                    <a to="#" className="btn essence-btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-wrapper">
                    
                        <div className="product-img">
                            <img src="/assets/img/product-img/product-3.jpg" alt=""/>
                          
                            <img className="hover-img" src="img/product-img/product-4.jpg" alt=""/>
                            <div className="product-badge offer-badge">
                                <span>-30%</span>
                            </div>
                            <div className="product-favourite">
                                <a to="#" className="favme fa fa-heart"></a>
                            </div>
                        </div>
                        <div className="product-description">
                            <span>mango</span>
                            <a to="single-product-details.html">
                                <h6>PETITE Crepe Wrap Mini Dress</h6>
                            </a>
                            <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>

                            <div className="hover-content">
                                <div className="add-to-cart-btn">
                                    <a to="#" className="btn essence-btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-wrapper">
                      
                        <div className="product-img">
                            <img src="/assets/img/product-img/product-4.jpg" alt=""/>
                      
                            <img className="hover-img" src="img/product-img/product-5.jpg" alt=""/>
                            <div className="product-badge new-badge">
                                <span>New</span>
                            </div>
                            <div className="product-favourite">
                                <a to="#" className="favme fa fa-heart"></a>
                            </div>
                        </div>
                        <div className="product-description">
                            <span>mango</span>
                            <a to="single-product-details.html">
                                <h6>PETITE Belted Jumper Dress</h6>
                            </a>
                            <p className="product-price">$80.00</p>

                            <div className="hover-content">

                                <div className="add-to-cart-btn">
                                    <a to="#" className="btn essence-btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div/>
    <div/>
   





<div className="brands-area d-flex align-items-center justify-content-between">
    <div className="single-brands-logo">
        <img src="/assets/img/core-img/brand1.png" alt=""/>
    </div>
    <div className="single-brands-logo">
        <img src="/assets/img/core-img/brand2.png" alt=""/>
    </div>
  
    <div className="single-brands-logo">
        <img src="/assets/img/core-img/brand3.png" alt=""/>
    </div>
    
    <div className="single-brands-logo">
        <img src="/assets/img/core-img/brand4.png" alt=""/>
    </div>
    <div className="single-brands-logo">
        <img src="/assets/img/core-img/brand5.png" alt=""/>
    </div>

    <div className="single-brands-logo">
        <img src="/assets/img/core-img/brand6.png" alt=""/>
    </div>
</div>

   </>
  )
}

export default Home
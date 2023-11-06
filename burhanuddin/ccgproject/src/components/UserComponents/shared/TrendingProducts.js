import React from 'react'

const TrendingProducts = () => {
  return (
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
                      <img src="/assets/images/product-item1.jpg" alt="product-item" className="product-image img-fluid" />
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
                      <img src="/assets/images/product-item2.jpg" alt="product-item" className="product-image img-fluid" />
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
                      <img src="/assets/images/product-item3.jpg" alt="product-item" className="product-image img-fluid" />
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
                      <img src="/assets/images/product-item4.jpg" alt="product-item" className="product-image img-fluid" />
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
                      <img src="/assets/images/product-item5.jpg" alt="product-item" className="product-image img-fluid" />
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
  )
}

export default TrendingProducts
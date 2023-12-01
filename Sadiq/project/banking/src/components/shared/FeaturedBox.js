import React from 'react'

const FeaturedBox = () => {
  return (
    <>
        <div className="featured-boxes-area">
        <div className="container">
            <div className="featured-boxes-inner">
                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon color-fb7756">
                                <i className="ri-thumb-up-line"></i>
                            </div>
                            <h3>Professional Services</h3>
                            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                            <a href="features-1.html" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon color-facd60">
                                <i className="ri-wallet-line"></i>
                            </div>
                            <h3>Low costing</h3>
                            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                            <a href="features-1.html" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon color-1ac0c6">
                                <i className="ri-customer-service-2-line"></i>
                            </div>
                            <h3>Live Support</h3>
                            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                            <a href="features-1.html" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon">
                                <i className="ri-shield-keyhole-line"></i>
                            </div>
                            <h3>Safe and Secure</h3>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                            <a href="features-1.html" className="read-more-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FeaturedBox
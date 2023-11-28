import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const Home = () => {
  return (
    <>
    <Header />

    <div className="hero-1 oh pos-rel" style={{backgroundImage: "url('images/hero/banner-bg.png')"}}>
        
        <div className="container">
            
            <div className="row align-items-center">
            
                <div className="col-lg-5">
                    <div className="hero-1-content wow fadeInLeft animated">
                        <h5 className="cate  wow fadeInUp animated" data-wow-delay="0.2s">#Bank Loan</h5>
                        <h1 className="title  wow fadeInUp animated" data-wow-delay="0.4s">Personal Bank Loan
                            From $12,500</h1>
                        <p className=" wow fadeInUp animated" data-wow-delay="0.6s">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="hero-1-button-group">
                            <a href="#" className="btn theme-btn-1  wow fadeInUp animated" data-wow-delay="0.8s"> Get
                                Started
                                <i className="uil uil-angle-right-b ml-2 mb-2"></i></a>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-7 d-lg-block">
                    <div className="hero-1-thumb-15 wow fadeInUp animated" data-wow-delay="0.4s">
                        <img className="img-fluid wow fadeInRight animated" src="/assets/images/hero/hero-1.png" alt="hero-1" />
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    <div className="about-area pt-100 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="mb-20">
                        <img src="images/bg/about.png" className="/assets/img-fluid  wow fadeInLeft animated" data-wow-delay="0.2s"
                            alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content warp">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8 col-md-12 mb-50">
                                <div className="section-title">
                                    <h2 className="title">About Us</h2>
                                    <div className="title-bdr">
                                        <div className="left-bdr"></div>
                                        <div className="right-bdr"></div>
                                    </div>
                                    <p>We operate our banking services in many countries around the world.</p>
                                </div>
                            </div>
                        </div>
                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt labore dolore magna aliqua.</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="about-btn justify-content-center text-center">
                            <a href="#" className="btn theme-btn-1">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="services-area">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12 mb-50">
                    <div className="section-title">
                        <h2 className="title">Best Services</h2>
                        <div className="title-bdr">
                            <div className="left-bdr"></div>
                            <div className="right-bdr"></div>
                        </div>
                        <p>Presenting Banking Plan & Services That are Right For You</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-services-item">
                        <div className="image">
                            <a href="#">
                                <img src="/assets/images/services/001.jpg" alt="image" />
                            </a>
                        </div>
                        <div className="content">
                            <h3>
                                <a href="#">Personal Loan</a>
                            </h3>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-services-item">
                        <div className="image">
                            <a href="#">
                                <img src="/assets/images/services/002.jpg" alt="image" />
                            </a>
                        </div>
                        <div className="content">
                            <h3>
                                <a href="#">Business Loan</a>
                            </h3>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-services-item">
                        <div className="image">
                            <a href="#">
                                <img src="/assets/images/services/003.jpg" alt="image"/>
                            </a>
                        </div>
                        <div className="content">
                            <h3>
                                <a href="#">Education Loan</a>
                            </h3>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-services-item">
                        <div className="image">
                            <a href="#">
                                <img src="/assets/images/services/004.jpg" alt="image" />
                            </a>
                        </div>
                        <div className="content">
                            <h3>
                                <a href="#">Mobile Banking</a>
                            </h3>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-services-item">
                        <div className="image">
                            <a href="#">
                                <img src="/assets/images/services/005.jpg" alt="image" />
                            </a>
                        </div>
                        <div className="content">
                            <h3>
                                <a href="#">Credit Card</a>
                            </h3>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-services-item">
                        <div className="image">
                            <a href="#">
                                <img src="/assets/images/services/006.jpg" alt="image" />
                            </a>
                        </div>
                        <div className="content">
                            <h3>
                                <a href="#">Online Deposit</a>
                            </h3>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="testimonial-area pt-100 pb-100">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12 mb-50">
                    <div className="section-title">
                        <h2 className="title">Testimonial</h2>
                        <div className="title-bdr">
                            <div className="left-bdr"></div>
                            <div className="right-bdr"></div>
                        </div>
                        <p>You can see our clients feedback what you say?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="testimonial-item-wrap-1 testimonial-carousel-1">
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/03.jpg" alt="small-avatar" />
                                <h3 className="author__title">Jack Hardson</h3>
                                <span className="author__meta">United States</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/02.jpg" alt="small-avatar" />
                                <h3 className="author__title">Mike Wood</h3>
                                <span className="author__meta">United Kingdom</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/05.jpg" alt="small-avatar" />
                                <h3 className="author__title">Mike Hardson</h3>
                                <span className="author__meta">Italy</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star-half-o"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/04.jpg" alt="small-avatar" />
                                <h3 className="author__title">Bernice Pease</h3>
                                <span className="author__meta">Germany</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/06.jpg" alt="small-avatar" />
                                <h3 className="author__title">Daniel Ward</h3>
                                <span className="author__meta">India</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/01.jpg" alt="small-avatar" />
                                <h3 className="author__title">Kamran Ahmed</h3>
                                <span className="author__meta">Bangladesh</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/02.jpg" alt="small-avatar" />
                                <h3 className="author__title">Jessica Brown</h3>
                                <span className="author__meta">Netherlands</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/03.jpg" alt="small-avatar" />
                                <h3 className="author__title">Mike Hardson</h3>
                                <span className="author__meta">Pakistan</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/05.jpg" alt="small-avatar" />
                                <h3 className="author__title">Bernice Pease</h3>
                                <span className="author__meta">Australia</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-author">
                                <img src="/assets/images/testimonial/04.jpg" alt="small-avatar" />
                                <h3 className="author__title">Daniel Ward</h3>
                                <span className="author__meta">Costa rica</span>
                                <span className="author__rating">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                </span>
                            </div>
                            <div className="testimonial-desc">
                                <p className="testimonial__desc">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="why-choose-us-area pb-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="why-choose-us-img">
                        <img src="/assets/images/bg/choose-us.png" alt="Image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="why-choose-us-content mb-removed">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8 col-md-12 mb-50">
                                <div className="section-title">
                                    <h2 className="title">Why choose us</h2>
                                    <div className="title-bdr">
                                        <div className="left-bdr"></div>
                                        <div className="right-bdr"></div>
                                    </div>
                                    <p>Client likes seeing our work skills</p>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                        <ul>
                            <li>
                                <i className="ri-check-line"></i>
                                <h3>Transparent</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <i className="ri-check-line"></i>
                                <h3>Proactive</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <i className="ri-check-line"></i>
                                <h3>Affordable</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <i className="ri-check-line"></i>
                                <h3>Flexible</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="download-area">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-6 col-md-6">
                    <div className="download-1-content mt-50">
                        <h2 className=" wow fadeInUp animated">Download Our App</h2>
                        <ul>
                            <li className="wow fadeInUp animated" data-wow-delay="0.2s"><i className="la la-check"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            <li className="wow fadeInUp animated" data-wow-delay="0.4s"><i className="la la-check"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            <li className="wow fadeInUp animated" data-wow-delay="0.6s"><i className="la la-check"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        </ul>
                        <div className="mt-4 wow fadeInUp animated" data-wow-delay="0.6s">
                            <a href="#" className="btn theme-btn-1">
                                <img src="/assets/images/svg/android.svg" alt="" />
                            </a>
                            <a href="#" className="btn theme-btn-1">
                                <img src="/assets/images/svg/apple.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="download-1-img">
                        <img className=" img-fluid" src="/assets/images/bg/download.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="blog-area pt-120 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog-wrapper mb-30">
                        <div className="blog-img">
                            <a href='blog-single.html'><img src="/assets/images/blog/blog1.jpg" alt=""/></a>
                        </div>
                        <div className="blog-text">
                            <h4><a href='blog-single.html'>Lorem ipsum dolor sit amet.
                                </a>
                            </h4>
                            <a href='blog-single.html'>Read More <i className="ri-arrow-right-line"></i></a>
                            <div className="blog-meta">
                                <span> <i className="las la-calendar"></i> 05 Feb 2022</span>
                                <span> <i className="lar la-heart"></i>Comments (03)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog-wrapper mb-30">
                        <div className="blog-img">
                            <a href='blog-single.html'><img src="/assets/images/blog/blog2.jpg" alt="" /></a>
                        </div>
                        <div className="blog-text">
                            <h4><a href='blog-single.html'>Lorem ipsum dolor sit amet.</a>
                            </h4>
                            <a href='blog-single.html'>Read More <i className="ri-arrow-right-line"></i></a>
                            <div className="blog-meta">
                                <span> <i className="las la-calendar"></i> 05 Feb 2022</span>
                                <span> <i className="lar la-heart"></i>Comments (03)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog-wrapper mb-30">
                        <div className="blog-img">
                            <a href='blog-single.html'><img src="/assets/images/blog/blog3.jpg" alt="" /></a>
                        </div>
                        <div className="blog-text">
                            <h4><a href='blog-single.html'>Lorem ipsum dolor sit amet.</a>
                            </h4>
                            <a href='blog-single.html'>Read More <i className="ri-arrow-right-line"></i></a>
                            <div className="blog-meta">
                                <span> <i className="las la-calendar"></i> 05 Feb 2022</span>
                                <span> <i className="lar la-heart"></i>Comments (03)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="client-logo-area pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img"> <img src="/assets/images/client-logo/logo-envato.png" alt=""
                                className="img-fluid" /></div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img"> <img src="/assets/images/client-logo/logo-converkit.png" alt=""
                                className="img-fluid" /></div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img"> <img src="/assets/images/client-logo/logo-buzzumo.png" alt=""
                                className="img-fluid" /></div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img"> <img src="/assets/images/client-logo/logo-buffer.png" alt=""
                                className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img"> <img src="/assets/images/client-logo/logo-frame.png" alt=""
                                className="img-fluid" /></div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img"> <img src="/assets/images/client-logo/logo-clearbit.png" alt=""
                                className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="cta-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="get-start-box">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h5 className="section__meta text-white">#get in touch</h5>
                                <h2 className="section__title">Ready to get started ?</h2>
                                <p className="section__sub">Speak to a Bnker specialist at (800-123-1234)</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="button-shared text-end">
                                <a className='btn cta-btn' href='contact.html'>
                                    Request Call Back <span className="la la-caret-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />

    </>
  )
}

export default Home
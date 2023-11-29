import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer-style bg-gray-100 pt-200">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="footer-logo">
                        <a href='index-2.html'><img src="/assets/images/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9  col-md-8 mb-30">
                    <div className="footer-top-wrapper">
                        <ul className="footer-top-link text-end">
                            <li><a href="#">Layouts </a></li>
                            <li><a href="#"> Pages</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Blog </a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-middle-area mt-30 pb-30 pt-60">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-wrapper mb-30">
                            <h3 className="footer-title">About Us</h3>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed diam nonu mmy nibh
                                    euis </p>
                            </div>
                            <div className="footer-icon">
                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                <a href="#"><i className="uil uil-twitter"></i></a>
                                <a href="#"><i className="uil uil-instagram-alt"></i></a>
                                <a href="#"><i className="uil uil-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-wrapper mb-30">
                            <h3 className="footer-title">Services</h3>
                            <div className="footer-link">
                                <ul>
                                    <li><a href="about.html">Conditions</a></li>
                                    <li><a href="our-history.html">Terms of Use</a></li>
                                    <li><a href="about.html">Our Services</a></li>
                                    <li><a href='team.html'>New Guests List</a></li>
                                    <li><a href="about.html">The Team List</a></li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-wrapper mb-30">
                            <h3 className="footer-title">Useful Links</h3>
                            <div className="footer-link">
                                <ul>
                                    <li><a href="services-01.html">Conditions</a></li>
                                    <li><a href='contact.html'>Terms of Use</a></li>
                                    <li><a href='contact.html'>Our Services</a></li>
                                    <li><a href='blog.html'>New Guests List</a></li>
                                    <li><a href="about.html">The Team List</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-wrapper mb-30">
                            <h3 className="footer-title">Subscribe</h3>
                            <div className="subscribes-form">
                                <form action="#">
                                    <input placeholder="Enter email " type="email" />
                                    <button className="btn theme-btn-1 width-100 mt-10"><i
                                            className="lab la-telegram-plane me-2"></i>subscribe</button>
                                </form>
                            </div>
                            <div className="footer-info">
                                <p>Get the latest updates via email. Any time you may unsubscribe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area pt-25 pb-25">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="copyright">
                            <p>© Copyrights 2021 <a href='index-2.html'>Bnker.</a> All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="footer-bottom-link text-end">
                            <ul>
                                <li><a href="#">Privacy </a></li>
                                <li><a href="#"> Terms</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Help </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div className="go-top-area">
        <div className="go-top-wrap">
            <div className="go-top-btn-wrap">
                <div className="go-top go-top-btn">
                    <i className="las la-angle-double-up"></i>
                    <i className="las la-angle-double-up"></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
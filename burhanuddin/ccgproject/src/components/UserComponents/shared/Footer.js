import React from 'react'

const Footer = () => {
  return (
   
    <>
    <section id="brand-collection" className="padding-small border-top border-bottom overflow-hidden margin-large mb-0">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <a href="#"><img src="/assets/images/brand-logo-1.svg" alt="brand"/></a>
            <a href="#"><img src="/assets/images/brand-logo-2.svg" alt="brand"/></a>
            <a href="#"><img src="/assets/images/brand-logo-3.svg" alt="brand"/></a>
            <a href="#"><img src="/assets/images/brand-logo-4.svg" alt="brand"/></a>
            <a href="#"><img src="/assets/images/brand-logo-5.svg" alt="brand"/></a>
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

export default Footer
import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import FeaturedBox from '../shared/FeaturedBox'
import AboutArea from '../shared/AboutArea'
import Services from '../shared/Services'
import Testominal from '../shared/Testominal'
import Blog from '../shared/Blog'
import DownloadArea from '../shared/DownloadArea'
import ChooseUs from '../shared/ChooseUs'
import CTA from '../shared/CTA'
import LogoArea from '../shared/LogoArea'

const Home = () => {
  return (
    <>
    <Header />

    <div className="hero-1 oh pos-rel" style={{backgroundImage: "url('images/hero/banner-bg.png')"}}>
        
        <div className="container">
            
            <div className="row align-items-center">
            
                <div className="col-lg-5">
                    <div className="hero-1-content wow fadeInLeft animated">
                        {/* <button onClick={()=>{localStorage.clear()}}>Logout</button> */}
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

    <FeaturedBox />

    <AboutArea />

    <Services />

    <Testominal />

    <ChooseUs />

    <DownloadArea />

    <Blog />

    <LogoArea />

    <CTA />

    <Footer />

    </>
  )
}

export default Home
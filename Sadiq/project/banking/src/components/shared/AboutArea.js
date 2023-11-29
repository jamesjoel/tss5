import React from 'react'

const AboutArea = () => {
  return (
    <>
        <div className="about-area pt-100 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="mb-20">
                        <img src="/assets/images/bg/about.png" className="/assets/img-fluid  wow fadeInLeft animated" data-wow-delay="0.2s"
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
    </>
  )
}

export default AboutArea
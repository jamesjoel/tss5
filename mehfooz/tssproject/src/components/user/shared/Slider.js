import React from 'react'

const slider = () => {
  return (
  <>   
   <div className="slider-area ">
  <div className="slider-active">
    <div className="single-slider slider-height d-flex align-items-center slide-bg">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <div className="hero__caption">
              <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style</h1>
              <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>

              <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                <a href="industries.html" className="btn hero-btn">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
            <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
              <img src="assets/img/hero/watch.png" alt="" className=" heartbeat" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="single-slider slider-height d-flex align-items-center slide-bg">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <div className="hero__caption">
              <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style</h1>
              <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>

              <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                <a href="industries.html" className="btn hero-btn">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
            <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
              <img src="assets/img/hero/watch.png" alt="" className=" heartbeat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default slider
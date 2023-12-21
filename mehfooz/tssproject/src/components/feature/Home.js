import React from 'react'
import Slider from '../shared/Slider'
import Newarrive from '../shared/Newarrive'


import PoularItems from '../shared/PoularItems'
import Box from '../shared/Box'
import Product from '../shared/Product'


const Home = () => {
  let name="rohit" 
  let city="indore"
  return (
    <>
    <Slider />
    <Newarrive />
    <PoularItems />
    <Box demo={name} text={city} />
    <div className="contaner">
      <div className="row">
        <Product/>
      </div>
    </div>

  
    
 
  <div className="video-area">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="video-wrap">
            <div className="play-btn "><a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04"><i className="fas fa-play"></i></a></div>
          </div>
        </div>
      </div>

      <div className="thumb-content-box">
        <div className="thumb-content">
          <h3>Next Video</h3>
          <a href="#"> <i className="flaticon-arrow"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div className="watch-area section-padding30">
    <div className="container">
      <div className="row align-items-center justify-content-between padding-130">
        <div className="col-lg-5 col-md-6">
          <div className="watch-details mb-40">
            <h2>Watch of Choice</h2>
            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <a href="shop.html" className="btn">Show Watches</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10">
          <div className="choice-watch-img mb-40">
            <img src="assets/img/gallery/choce_watch1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-10">
          <div className="choice-watch-img mb-40">
            <img src="assets/img/gallery/choce_watch2.png" alt="" />
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="watch-details mb-40">
            <h2>Watch of Choice</h2>
            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <a href="shop.html" className="btn">Show Watches</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="shop-method-area">
    <div className="container">
      <div className="method-wrapper">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-method mb-40">
              <i className="ti-package"></i>
              <h6>Free Shipping Method</h6>
              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-method mb-40">
              <i className="ti-unlock"></i>
              <h6>Secure Payment System</h6>
              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-method mb-40">
              <i className="ti-reload"></i>
              <h6>Secure Payment System</h6>
              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Home
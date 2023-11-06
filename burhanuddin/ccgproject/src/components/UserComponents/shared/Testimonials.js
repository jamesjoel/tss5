import React from 'react'

const Testimonials = () => {    
  return (
    <section id="testimonials" className="position-relative">
    <div className="container">
      <div className="row">
        <div className="review-content position-relative">
          <div className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center justify-content-center">
            <svg className="icon-arrow" style={{width:"25", height:"25"}}>
              
            </svg>
          </div>
          <div className="swiper testimonial-swiper">
            <div className="quotation text-center">
              <svg className="quote">
                            </svg>
            </div>
            <div className="swiper-wrapper">
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review"></i>
                  <blockquote className="fs-4">“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                  <div className="author-detail">
                    <div className="name text-primary text-uppercase pt-2">Hana Kimusaki</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review"></i>
                  <blockquote className="fs-4">“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                  <div className="author-detail">
                    <div className="name text-primary text-uppercase pt-2">Jennie Rose</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center justify-content-center">
            <svg className="icon-arrow" style={{width:"25", height:"25"}}>
              
            </svg>
          </div>
        </div>
      </div>
    </div>      
    <div className="swiper-pagination text-center position-absolute"></div>
  </section> 
  )
}

export default Testimonials 
import React from 'react'

const billboard = () => {
  return (
    <section id="billboard" className="overflow-hidden">
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-item" style={{backgroundImage: "url(/assets/images/banner-image1.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "right", height: "682px"}}>
                  <div className="banner-content padding-large">
                    <h1 className="display-1 text-uppercase text-dark pb-2">wooden table set</h1>
                    <p>Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.</p>                      
                    <a href="shop.html" className="btn btn-medium btn-arrow position-relative mt-5">
                      <span className="text-uppercase">Shop Now</span>            
                      <svg className="arrow-right position-absolute" style={{width:"18", height:"20"}}>
                        
                      </svg>
                    </a>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-item" style={{backgroundImage: "url(assets/images/banner-image1.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "right", height: "682px"}}>
                  <div className="banner-content padding-large">
                    <h1 className="display-1 text-uppercase text-dark pb-2">Comfortable Sofa Set</h1>
                    <p>Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.
                    </p>                                         
                    <a href="shop.html" className="btn btn-medium btn-arrow position-relative mt-5">
                      <span className="text-uppercase">Shop Now</span>            
                      <svg className="arrow-right position-absolute" width="18" height="20">

                      </svg>
                    </a>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination position-absolute"></div>
  </section>
  )
}

export default billboard
import React from 'react'

const AboutUs = () => {
  return (
    <section id="about-us">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-between g-5">
        <div className="col-lg-6">
          <div className="image-holder mb-4 jarallax">
              <img src="/assets/images/single-image1.jpg" alt="single" className="img-fluid jarallax-img" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail p-5">
            <div className="display-header">
              <h2 className="display-2 text-uppercase text-dark pb-2">About Us</h2>
              <p className="pb-3">Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.</p>
              <p>Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium amet hac. Justo tristique sagittis sodales viverra venenatis integer fringilla. </p>
              <a href="about-us.html" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                <span className="text-uppercase">About us</span>            
                <svg className="arrow-right position-absolute" width="18" height="20">
                 
                </svg>
              </a>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs
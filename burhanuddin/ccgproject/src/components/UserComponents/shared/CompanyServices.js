import React from 'react'

const CompanyServices = () => {
  return (
    
    <section id="company-services" className="padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="shipping-fast">
                   
                </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Quick delivery</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="shopping-cart">
                   
                </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Pick up in store</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="gift">
                             </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Special Packaging</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex align-items-center">
              <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                <svg className="return">
                               </svg>
              </div>
              <div className="icon-box-content ps-3">
                <h3 className="card-title text-uppercase text-dark">Return & refund policy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyServices
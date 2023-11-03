import React from 'react'

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe-content padding-large">
              <div className="subscribe-header">
                <h2 className="display-4">Get offers & discounts by subscribing us</h2>
              </div>
              <form id="form">
                <input type="text" name="email"  className="w-100 bg-light border-0 ps-5 fst-italic" />
                <button className="btn btn-full btn-black text-uppercase">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Subscribe
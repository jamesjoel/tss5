import React from 'react'

const Subscribe = () => {
  return (
    <section className="subscribe_area section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="subscribe_area_text text-center">
                        <h5>Join Our Newsletter</h5>
                        <h2>Subscribe to get Updated
                            with new offers</h2>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="enter email address"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <a href="#" className="input-group-text btn_2" id="basic-addon2">subscribe now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe
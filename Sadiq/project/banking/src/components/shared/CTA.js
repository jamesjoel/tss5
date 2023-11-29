import React from 'react'

const CTA = () => {
  return (
    <>
        <div className="cta-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="get-start-box">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h5 className="section__meta text-white">#get in touch</h5>
                                <h2 className="section__title">Ready to get started ?</h2>
                                <p className="section__sub">Speak to a Bnker specialist at (800-123-1234)</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="button-shared text-end">
                                <a className='btn cta-btn' href='contact.html'>
                                    Request Call Back <span className="la la-caret-right"></span>
                                </a>
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

export default CTA
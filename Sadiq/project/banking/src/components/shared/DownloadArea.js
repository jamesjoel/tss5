import React from 'react'

const DownloadArea = () => {
  return (
    <>
        <div className="download-area">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-6 col-md-6">
                    <div className="download-1-content mt-50">
                        <h2 className=" wow fadeInUp animated">Download Our App</h2>
                        <ul>
                            <li className="wow fadeInUp animated" data-wow-delay="0.2s"><i className="la la-check"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            <li className="wow fadeInUp animated" data-wow-delay="0.4s"><i className="la la-check"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            <li className="wow fadeInUp animated" data-wow-delay="0.6s"><i className="la la-check"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        </ul>
                        <div className="mt-4 wow fadeInUp animated" data-wow-delay="0.6s">
                            <a href="#" className="btn theme-btn-1">
                                <img src="/assets/images/svg/android.svg" alt="" />
                            </a>
                            <a href="#" className="btn theme-btn-1">
                                <img src="/assets/images/svg/apple.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="download-1-img">
                        <img className=" img-fluid" src="/assets/images/bg/download.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DownloadArea
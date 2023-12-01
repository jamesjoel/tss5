import React from 'react'

const Blog = () => {
  return (
    <>
        <div className="blog-area pt-120 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog-wrapper mb-30">
                        <div className="blog-img">
                            <a href='blog-single.html'><img src="/assets/images/blog/blog1.jpg" alt=""/></a>
                        </div>
                        <div className="blog-text">
                            <h4><a href='blog-single.html'>Lorem ipsum dolor sit amet.
                                </a>
                            </h4>
                            <a href='blog-single.html'>Read More <i className="ri-arrow-right-line"></i></a>
                            <div className="blog-meta">
                                <span> <i className="las la-calendar"></i> 05 Feb 2022</span>
                                <span> <i className="lar la-heart"></i>Comments (03)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog-wrapper mb-30">
                        <div className="blog-img">
                            <a href='blog-single.html'><img src="/assets/images/blog/blog2.jpg" alt="" /></a>
                        </div>
                        <div className="blog-text">
                            <h4><a href='blog-single.html'>Lorem ipsum dolor sit amet.</a>
                            </h4>
                            <a href='blog-single.html'>Read More <i className="ri-arrow-right-line"></i></a>
                            <div className="blog-meta">
                                <span> <i className="las la-calendar"></i> 05 Feb 2022</span>
                                <span> <i className="lar la-heart"></i>Comments (03)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog-wrapper mb-30">
                        <div className="blog-img">
                            <a href='blog-single.html'><img src="/assets/images/blog/blog3.jpg" alt="" /></a>
                        </div>
                        <div className="blog-text">
                            <h4><a href='blog-single.html'>Lorem ipsum dolor sit amet.</a>
                            </h4>
                            <a href='blog-single.html'>Read More <i className="ri-arrow-right-line"></i></a>
                            <div className="blog-meta">
                                <span> <i className="las la-calendar"></i> 05 Feb 2022</span>
                                <span> <i className="lar la-heart"></i>Comments (03)</span>
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

export default Blog
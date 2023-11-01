import React from 'react'

const NewTrend = () => {
  return (
    <>
        <section className="latest spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Fashion New Trends</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage : "url('/assets/img/blog/blog-1.jpg')"}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt="" /> 16 February 2020</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage : "url('/assets/img/blog/blog-2.jpg')"}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt="" /> 21 February 2020</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage : "url('/assets/img/blog/blog-3.jpg')"}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt="" /> 28 February 2020</span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewTrend
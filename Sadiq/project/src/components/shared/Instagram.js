import React from 'react'

const Instagram = () => {
  return (
    <>
        <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <div className="instagram__pic__item set-bg" style={{backgroundImage : "url('/assets/img/product/instagram-1.jpg')"}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage : "url('/assets/img/product/instagram-2.jpg')"}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage : "url('/assets/img/product/instagram-3.jpg')"}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage : "url('/assets/img/product/instagram-4.jpg')"}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage : "url('/assets/img/product/instagram-5.jpg')"}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage : "url('/assets/img/product/instagram-6.jpg')"}}></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <h2>Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Instagram
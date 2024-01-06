import React from 'react'

const newarrive = () => {
  return (
  <><section className="new-product-area section-padding30">
  <div className="container">

    <div className="row">
      <div className="col-xl-12">
        <div className="section-tittle mb-70">
          <h2>New Arrivals</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="single-new-pro mb-30 text-center">
          <div className="product-img">
            <img src="assets/img/gallery/new_product1.png" alt="" />
          </div>
          <div className="product-caption">
            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
            <span>$ 45,743</span>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="single-new-pro mb-30 text-center">
          <div className="product-img">
            <img src="assets/img/gallery/new_product2.png" alt="" />
          </div>
          <div className="product-caption">
            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
            <span>$ 45,743</span>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="single-new-pro mb-30 text-center">
          <div className="product-img">
            <img src="assets/img/gallery/new_product3.png" alt="" />
          </div>
          <div className="product-caption">
            <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
            <span>$ 45,743</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="gallery-area">
  <div className="container-fluid p-0 fix">
    <div className="row">
      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
        <div className="single-gallery mb-30">
          <div className="gallery-img big-img" ></div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="single-gallery mb-30">
          <div className="gallery-img big-img" ></div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-12">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
            <div className="single-gallery mb-30">
              <div className="gallery-img small-img" ></div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
            <div className="single-gallery mb-30">
              <div className="gallery-img small-img" style={{ backgroundImage: "url(assets/img/gallery/gallery4.png)" }}></div>
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

export default newarrive
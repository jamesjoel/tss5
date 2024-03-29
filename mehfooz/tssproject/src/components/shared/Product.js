import React from 'react'

const Product = () => {
    
  return ( <>
  <h1>product.js items</h1>

  <section className="new-product-area section-padding30">
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
            <h3><a to="product_details.html">Thermo Ball Etip Gloves</a></h3>
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
            <h3><a to="product_details.html">Thermo Ball Etip Gloves</a></h3>
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
            <h3><a to="product_details.html">Thermo Ball Etip Gloves</a></h3>
            <span>$ 45,743</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</>)
}

export default Product
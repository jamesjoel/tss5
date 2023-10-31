import React from 'react'

const ProductBox = (props) => {
  return (
    <>
         <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={"/assets/img/product/"+props.info.image} alt="" />
                                        <div className="single_product_text">
                                            <h4>{props.info.title}</h4>
                                            <h3>${props.info.price}</h3>
                                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                                        </div>
                                    </div>
                                </div>
    </>
  )
}

export default ProductBox
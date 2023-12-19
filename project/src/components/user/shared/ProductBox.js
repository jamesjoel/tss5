import React, {useEffect} from 'react'
import { API_PATH } from '../../../util/API'
import {NavLink} from 'react-router-dom'

const ProductBox = (props) => {
  
  return (
    <>
      <div className="col-lg-3 col-sm-6">
            <NavLink to={`/product-detail/${props.info._id}`}>
            <div className="single_product_item">
                <img src={`${API_PATH}product-images/${props.info.image}`} style={{height : "300px"}} />
                <div className="single_product_text">
                    <h4>{props.info.title}</h4>
                    <h3>${props.info.price}</h3>
                    <p>{props.info.category}</p>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                </div>
            </div>
            </NavLink>
        </div>
    </>
  )
}

export default ProductBox
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { API_URL, API_PATH } from '../../../util/API';
import axios from 'axios'

const ProductDetail = () => {
    let [product, setProduct] = useState({});
    let param = useParams();
    let id = param.id;
    console.log(id);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(()=>{
        axios.get(`${API_URL}/product/${id}`).then(response=>{
            // console.log(response.data);
            setProduct(response.data.result);
        })
    },[])

  return (
    <div className='container' style={{minHeight : "600px", marginTop : "150px"}}>
        <div className='row'>
            <div className='col-md-12'>
                <h4 className='text-center'>Product Detail</h4>
                <div className="product_image_area section_padding">
                    <div className="container">
                    <div className="row s_product_inner justify-content-between">
                        <div className="col-lg-7 col-xl-7">
                        <div className="product_slider_img">
                            <div id="vertical">
                            <div data-thumb={`${API_PATH}product-images/${product.image}`}>
                                <img src={`${API_PATH}product-images/${product.image}`} style={{width : "100%", height : "400px"}} />
                            </div>
                            
                            
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                        <div className="s_product_text">
                            
                            {
                                product.price ? <><h3>{product.title}</h3>
                                <h2>&#8377; {(product.price - (product.price * product.discount / 100)).toFixed(2)} ({product.discount}%)</h2>
                                <h4><del>&#8377; {product.price.toFixed(2)}</del></h4></> : ''
                            }
                            <ul className="list">
                            <li>
                                
                                <span>Category</span> : {product.category} <br />
                                <span>Sub-Category</span> : {product.subcategory}
                            </li>
                            <li>
                                <a href="#"> <span>Availibility</span> : In Stock</a>
                            </li>
                            </ul>
                            <p>
                                {product.detail}
                            </p>
                            <div className="card_area d-flex justify-content-between align-items-center">
                            <div className="product_count">
                                <span className="inumber-decrement"> <i className="ti-minus"></i></span>
                                
                                <span className="number-increment"> <i className="ti-plus"></i></span>
                            </div>
                            <a href="#" className="btn_3">add to cart</a>
                            <a href="#" className="like_us"> <i className="ti-heart"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
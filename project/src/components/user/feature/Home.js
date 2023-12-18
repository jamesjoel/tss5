import React, {useState, useEffect} from 'react'
import Slider from '../shared/Slider'
import SaleCounter from '../shared/SaleCounter'
import Box from '../shared/Box'
import ProductBox from '../shared/ProductBox'
import axios from 'axios'
import {API_URL} from '../../../util/API';
const Home = () => {
    let [allProduct, setAllProduct] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/product`).then(response=>{
            setAllProduct(response.data.result);
        })
    });
   
  return (
    <>
    <Slider />
   
    <section className="product_list section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section_tittle text-center">
                        <h2>awesome <span>shop</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product_list_slider">
                        <div className="single_product_list_slider">
                            <div className="row align-items-center justify-content-between">
                               
                               {
                                    allProduct.map((x, index)=>{
                                        return <ProductBox key={index} info={x} />
                                    })
                               }
                                                             
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <SaleCounter />
    </>
  )
}

export default Home
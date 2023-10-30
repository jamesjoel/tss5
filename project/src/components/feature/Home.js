import React from 'react'
import Slider from '../shared/Slider'
import SaleCounter from '../shared/SaleCounter'
import Box from '../shared/Box'
import ProductBox from '../shared/ProductBox'
const Home = () => {
    let allProduct = [
        {
            title : "I-Phone",
            image : "product_1.png",
            price : 35000.00
        },
        {
            title : "Samsung TV",
            image : "product_2.png",
            price : 55000.00
        },
        {
            title : "T-Shirt",
            image : "product_3.png",
            price : 1200.00
        },
        {
            title : "New Sofa",
            image : "product_4.png",
            price : 22500.00
        },
        {
            title : "LG Fridge",
            image : "product_5.png",
            price : 18000.00
        },
        {
            title : "Samsung AC",
            image : "product_6.png",
            price : 41000.00
        },
        {
            title : "Jens",
            image : "product_7.png",
            price : 3200.00
        },
        {
            title : "Z1",
            image : "product_8.png",
            price : 58000.00
        },
        {
            title : "Z1",
            image : "product_8.png",
            price : 58000.00
        }
        
    ]
   
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
/* eslint-disable */
import React from 'react'
import BigSlider from '../shared/BigSlider'
import SaleCouter from '../shared/SaleCountDown'
import NewTrend from '../shared/NewTrend'
import ProductCard from '../shared/props/ProductCard'
import Header from '../shared/Header'
import Footer from '../shared/Footer'


const Home = () => {

    let productData = [
        {
            name : "Piqué Biker Shoes",
            price : 650.00,
            img : "product-1.jpg"
        },
        {
            name : "Piqué Biker Jacket",
            price : 450.00,
            img : "product-2.jpg"
        },
        {
            name : "Sports Shoes",
            price : 399.50,
            img : "product-3.jpg"
        },
        {
            name : "Hoodie",
            price : 250.00,
            img : "product-4.jpg"
        },
        {
            name : "T-Shirt",
            price : 650.00,
            img : "product-5.jpg"
        },
        {
            name : "Shall",
            price : 340.00,
            img : "product-6.jpg"
        },
        {
            name : "BagPack",
            price : 290.00,
            img : "product-7.jpg"
        },
        {
            name : "Half-Sleaves T-Shirt",
            price : 980.00,
            img : "product-8.jpg"
        },
    ]

  return (
    <>
    <Header />
    <BigSlider />
        <section className="banner spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-4">
                    <div className="banner__item">
                        <div className="banner__item__pic">
                            <img src="/assets/img/banner/banner-1.jpg" alt="" />
                        </div>
                        <div className="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="banner__item banner__item--middle">
                        <div className="banner__item__pic">
                            <img src="/assets/img/banner/banner-2.jpg" alt="" />
                        </div>
                        <div className="banner__item__text">
                            <h2>Accessories</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner__item banner__item--last">
                        <div className="banner__item__pic">
                            <img src="/assets/img/banner/banner-3.jpg" alt="" />
                        </div>
                        <div className="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*">Best Sellers</li>
                        <li data-filter=".new-arrivals">New Arrivals</li>
                        <li data-filter=".hot-sales">Hot Sales</li>
                    </ul>
                </div>
            </div>
            <div className='row'>   
            {
                productData.map((value, index)=>{
                    return <ProductCard key={index} data={value} />
                })
            }
            </div>
        </div>
    </section>
    <SaleCouter />
    <NewTrend />
    <Footer />
    </>
  )
}

export default Home
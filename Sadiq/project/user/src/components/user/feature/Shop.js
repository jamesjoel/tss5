import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductBox from '../shared/props/ProductBox';
import Breadcrumb from '../shared/props/Breadcrumb';
import { API_URL } from '../../../util/API';
import Header from '../shared/Header';
import Footer from '../shared/Footer';


const Shop = () => {

    let [product, setProduct] = useState([]);
  let [productCategory , setProductCategory] = useState([]);

  let productData = async() =>{
    let response = await axios.get(`${API_URL}/category`)
    setProductCategory(response.data)
  }

  useEffect(()=>{
    productData()
  }, [])

  let getCategory = async(event) =>{
    let city = event
    let Response = await axios.get(`${API_URL}/category/${city}`)
    setProduct(Response.data)
    
  }

  return (
    <>
    <Header />
        <Breadcrumb data={'Shop'} />
        <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..." />
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="shop__sidebar__accordion">
                            <div className="accordion" id="accordionExample">
                            <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                                <ul className="nice-scroll" tabindex="1" style={{overflowY : "hidden", outline: "none"}}>
                                                    {
                                                        productCategory.map((value)=>{
                                                            return(
                                                                <li><button className='btn my-1' onClick={()=>getCategory(value.category)} style={{color : "#b7b7b7"}}>{value.category}</button></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                <ul>
                                                    <li><a href="#">Louis Vuitton</a></li>
                                                    <li><a href="#">Chanel</a></li>
                                                    <li><a href="#">Hermes</a></li>
                                                    <li><a href="#">Gucci</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                    </div>
                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                                <ul>
                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                    <li><a href="#">$200.00 - $250.00</a></li>
                                                    <li><a href="#">250.00+</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFour" className="collapsed" aria-expanded="false">Size</a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label for="xs">xs
                                                    <input type="radio" id="xs" />
                                                </label>
                                                <label for="sm" className="">s
                                                    <input type="radio" id="sm" />
                                                </label>
                                                <label for="md">m
                                                    <input type="radio" id="md" />
                                                </label>
                                                <label for="xl">xl
                                                    <input type="radio" id="xl" />
                                                </label>
                                                <label for="2xl" className="">2xl
                                                    <input type="radio" id="2xl" />
                                                </label>
                                                <label for="xxl">xxl
                                                    <input type="radio" id="xxl" />
                                                </label>
                                                <label for="3xl">3xl
                                                    <input type="radio" id="3xl" />
                                                </label>
                                                <label for="4xl">4xl
                                                    <input type="radio" id="4xl" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                    </div>
                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__color">
                                                <label className="c-1" for="sp-1">
                                                    <input type="radio" id="sp-1" />
                                                </label>
                                                <label className="c-2" for="sp-2">
                                                    <input type="radio" id="sp-2" />
                                                </label>
                                                <label className="c-3" for="sp-3">
                                                    <input type="radio" id="sp-3" />
                                                </label>
                                                <label className="c-4" for="sp-4">
                                                    <input type="radio" id="sp-4" />
                                                </label>
                                                <label className="c-5" for="sp-5">
                                                    <input type="radio" id="sp-5" />
                                                </label>
                                                <label className="c-6" for="sp-6">
                                                    <input type="radio" id="sp-6" />
                                                </label>
                                                <label className="c-7" for="sp-7">
                                                    <input type="radio" id="sp-7" />
                                                </label>
                                                <label className="c-8" for="sp-8">
                                                    <input type="radio" id="sp-8" />
                                                </label>
                                                <label className="c-9" for="sp-9">
                                                    <input type="radio" id="sp-9" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                    </div>
                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                                <a href="#">Product</a>
                                                <a href="#">Bags</a>
                                                <a href="#">Shoes</a>
                                                <a href="#">Fashio</a>
                                                <a href="#">Clothing</a>
                                                <a href="#">Hats</a>
                                                <a href="#">Accessories</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="shop__product__option">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="shop__product__option__right">
                                    <p>Sort by Price: </p>
                                    <select style={{display: "none"}}>
                                        <option value="">Low To High</option>
                                        <option value="">$0 - $55</option>
                                        <option value="">$55 - $100</option>
                                    </select><div className="nice-select" tabindex="0"><span className="current"> Low To High</span><ul className="list"><li data-value="" className="option selected focus">Low To High</li><li data-value="" className="option">$0 - $55</li><li data-value="" className="option">$55 - $100</li></ul></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
            {
                product.map((value, index)=>{
                return(
                    <ProductBox key={index} data={value} />
                )
            })
            }
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <Footer />
    </>
  )
}

export default Shop
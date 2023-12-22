import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API';


const Category = () => {

    let [category, setCategory] = useState([]);

    useEffect(()=>{
        getCategory();   
        
    },[])



    let getCategory = async()=>{
        let response = await axios.get(`${API_URL}/category/count`);
        setCategory(response.data.result);
    }



  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <section className="cat_product_area section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="left_sidebar_area">
                        <aside className="left_widgets p_filter_widgets">
                            <div className="l_w_title">
                                <h3>Browse Categories</h3>
                            </div>
                            <div className="widgets_inner">
                                <ul className="list">
                                    {
                                        category.map(value=>{
                                            return(
                                                <li key={value._id}>
                                                    <a href="#">{value.name}</a>
                                                    <span>({value.count})</span>
                                                </li>
                                            )
                                        })
                                    }

                                    
                                    
                                </ul>
                            </div>
                        </aside>

                        {/* <aside className="left_widgets p_filter_widgets">
                            <div className="l_w_title">
                                <h3>Product filters</h3>
                            </div>
                            <div className="widgets_inner">
                                <ul className="list">
                                    <li>
                                        <a href="#">Apple</a>
                                    </li>
                                    <li>
                                        <a href="#">Asus</a>
                                    </li>
                                    <li className="active">
                                        <a href="#">Gionee</a>
                                    </li>
                                    <li>
                                        <a href="#">Micromax</a>
                                    </li>
                                    <li>
                                        <a href="#">Samsung</a>
                                    </li>
                                </ul>
                                <ul className="list">
                                    <li>
                                        <a href="#">Apple</a>
                                    </li>
                                    <li>
                                        <a href="#">Asus</a>
                                    </li>
                                    <li className="active">
                                        <a href="#">Gionee</a>
                                    </li>
                                    <li>
                                        <a href="#">Micromax</a>
                                    </li>
                                    <li>
                                        <a href="#">Samsung</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <aside className="left_widgets p_filter_widgets">
                            <div className="l_w_title">
                                <h3>Color Filter</h3>
                            </div>
                            <div className="widgets_inner">
                                <ul className="list">
                                    <li>
                                        <a href="#">Black</a>
                                    </li>
                                    <li>
                                        <a href="#">Black Leather</a>
                                    </li>
                                    <li className="active">
                                        <a href="#">Black with red</a>
                                    </li>
                                    <li>
                                        <a href="#">Gold</a>
                                    </li>
                                    <li>
                                        <a href="#">Spacegrey</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <aside className="left_widgets p_filter_widgets price_rangs_aside">
                            <div className="l_w_title">
                                <h3>Price Filter</h3>
                            </div>
                            <div className="widgets_inner">
                                <div className="range_item">
                                    
                                    <input type="text" className="js-range-slider" value="" />
                                    <div className="d-flex">
                                        <div className="price_text">
                                            <p>Price :</p>
                                        </div>
                                        <div className="price_value d-flex justify-content-center">
                                            <input type="text" className="js-input-from" id="amount" readonly />
                                            <span>to</span>
                                            <input type="text" className="js-input-to" id="amount" readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside> */}
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <div className="product_top_bar d-flex justify-content-between align-items-center">
                                <div className="single_product_menu">
                                    <p><span>10000 </span> Prodict Found</p>
                                </div>
                                <div className="single_product_menu d-flex">
                                    <h5>short by : </h5>
                                    <select>
                                        <option data-display="Select">name</option>
                                        <option value="1">price</option>
                                        <option value="2">product</option>
                                    </select>
                                </div>
                                <div className="single_product_menu d-flex">
                                    <h5>show :</h5>
                                    <div className="top_pageniation">
                                        <ul>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single_product_menu d-flex">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="search"
                                            aria-describedby="inputGroupPrepend" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend"><i
                                                    className="ti-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="row align-items-center latest_product_inner">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_product_item">
                                <img src="img/product/product_1.png" alt="" />
                                <div className="single_product_text">
                                    <h4>Quartz Belt Watch</h4>
                                    <h3>$150.00</h3>
                                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        </div>
    </div>
  )
}

export default Category
import React from 'react'

const ProductBox = (props) => {
  return (
    <>
        <div className="col-md-3">
                <div className=" product__filter">
                    <div className="mix new-arrivals">
                        <div className="product__item">
                            <div className="product__item__pic" style={{backgroundImage : `url("${props.data.image}")`}}>
                                <span className="label">New</span>
                                <ul className="product__hover">
                                    <li><a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a></li>
                                    <li><a href="#"><img src="/assets/img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                    <li><a href="#"><img src="/assets/img/icon/search.png" alt="" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6>{ props.data.title }</h6>
                                <a href="#" className="add-cart">+ Add To Cart</a>
                                <div className="rating">
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <h5>$ { props.data.price }</h5>
                                <div className="product__color__select">
                                    <label for="pc-1">
                                        <input type="radio" id="pc-1" />
                                    </label>
                                    <label className="active black" for="pc-2">
                                        <input type="radio" id="pc-2" />
                                    </label>
                                    <label className="grey" for="pc-3">
                                        <input type="radio" id="pc-3" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default ProductBox
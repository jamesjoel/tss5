import React from 'react'
import { useSelector } from 'react-redux'
import { API_PATH } from '../../../util/API'

const MyCart = () => {

    let cart = useSelector(state=>state.CartSlice);

  return (
    <div className='row'>
        <div className='col-md-10 offset-md-1'>
        <section className="cart_area padding_top">
    <div className="container">
      <div className="cart_inner">
        <div className="table-responsive">
          <table className="table table">
            <thead>
              <tr>
                
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Discount</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((value, index)=>{
                    return(
                        <tr>
                            <td>
                            <div className="media">
                                <div className="d-flex">
                                <img src={`${API_PATH}product-images/${value.image}`} style={{width : "100px", height : "100px"}} />
                                </div>
                                <div className="media-body">
                                <p>{value.title}</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <h5>&#8377; {value.price}</h5>
                            </td>
                            <td>
                                1
                            {/* <div className="product_count">
                                <span className="input-number-decrement"> <i className="ti-angle-down"></i></span>
                                <input className="input-number" type="text" value="1" min="0" max="10" />
                                <span className="input-number-increment"> <i className="ti-angle-up"></i></span>
                            </div> */}
                            </td>
                            <td>{value.discount}%</td>
                            <td>
                            <h5>&#8377; { value.price - (value.price * value.discount / 100)}</h5>
                            </td>
                        </tr>
                    )
                })
              }
              
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td>
                  <h5>$2160.00</h5>
                </td>
              </tr>
              <tr className="shipping_area">
                <td></td>
                <td></td>
                <td>
                  <h5>Shipping</h5>
                </td>
                <td>
                  <div className="shipping_box">
                    <ul className="list">
                      <li>
                        <a href="#">Flat Rate: $5.00</a>
                      </li>
                      <li>
                        <a href="#">Free Shipping</a>
                      </li>
                      <li>
                        <a href="#">Flat Rate: $10.00</a>
                      </li>
                      <li className="active">
                        <a href="#">Local Delivery: $2.00</a>
                      </li>
                    </ul>
                    <h6>
                      Calculate Shipping
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </h6>
                    
                    
                    <input type="text" placeholder="Postcode/Zipcode" />
                    <a className="btn_1" href="#">Update Details</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="checkout_btn_inner float-right">
            <a className="btn_1" href="#">Continue Shopping</a>
            <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    </div>
  )
}

export default MyCart
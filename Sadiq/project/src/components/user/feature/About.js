import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductBox from '../shared/props/ProductBox';

const About = () => {

  let [product, setProduct] = useState([]);
  let [productCategory , setProductCategory] = useState([]);

  let productData = async() =>{
    let response = await axios.get("http://localhost:8080/api/category")
    setProductCategory(response.data)
  }

  useEffect(()=>{
    productData()
  }, [])

  let getCategory = async(event) =>{
    let x = event.target.value
    let Response = await axios.get("http://localhost:8080/api/product/"+x)
    setProduct(Response.data)
    
  }

  return (
    <>
        <div className='container my-5' style={{ minHeight : "700px" }}>
          <div className='row'>
            <div className='col-md-8 offset-md-2 my-4 text-center'>
              <label>Select Category</label>
              <select className='form-control' onChange={(event)=>getCategory(event)}>
                <option>select</option>
                {
                  productCategory.map((value)=>{
                    return(<option>{value}</option>)
                  })
                }
              </select>
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
    </>
  )
}

export default About
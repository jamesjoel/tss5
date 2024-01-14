import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Products = () => {

    let navigate = useNavigate()
    let productForm = useFormik({
        initialValues:{
            Category_name: "",
            SubCategory_name : "",
            Product_name : "",
            productPrice : "",
            productQuantity : "",
            productDescription : ""
        },
        onSubmit : (formdata)=>{
            axios.post('http://localhost:8080/api/product', formdata).then(response=>{
            navigate('/admin/product-list')
            })
        }
    })
    let [cate , setCate] = useState([]);
    let [subCate , setSubCate] = useState([]);
    let getSubCate = (event)=>{
        let x = event.target.value; 
        axios.get('http://localhost:8080/api/subcategory/subcatelist/'+x).then(response=>{
            setSubCate(response.data);
        })
    }
    
    useEffect(()=>{
        axios.get('http://localhost:8080/api/category').then(response=>{
            setCate(response.data);
        })
    })


  return (
    <div className="container">
        <div className="row">
            <form onSubmit={productForm.handleSubmit}>
            <h3>Add Product</h3>
            <div className="col-md-6 offset-md-3">

                <div className="my-3">
                <label>Category</label>
                <select className='form-control my-3' onChange={(event)=>{productForm.handleChange(event); getSubCate(event) }} name='Category_name'>
                    <option>---select---</option>
                    {
                        cate.map((value)=>{
                            return(
                                <option>{value.Category_name}</option>
                            )
                        })
                    }
                </select>
                </div>

                <div className="my-3">
                <label>Sub Category</label>
                <select name="SubCategory_name" onChange={productForm.handleChange} className="form-control my-3">
                    <option>---select---</option>
                    {
                        subCate.map((value)=>{
                            return(
                                <option>{value.SubCategory_name}</option>
                            )
                        })
                    }
                </select>
                </div>    

                <div className="my-3">
                    <label>Product Title</label>
                    <input type='text' className='form-control' name='Product_name' onChange={productForm.handleChange}/>
                </div>

                <div className="my-3">
                    <lable>Product Price</lable>
                    <input name='productPrice' type='number' className='form-control' onChange={productForm.handleChange}/>
                </div>
                <div className="my-3">
                    <lable>Product Quantity</lable>
                    <input name=' productQuantity' type='text' className='form-control' onChange={productForm.handleChange}/>
                </div>
                <div className="my-3">
                    <lable>Product Description</lable>
                    <textarea name='productDescription' className='form-control' onChange={productForm.handleChange}></textarea>
                </div>

                <button className='btn btn-primary' type='submit'>Add</button>    

            </div>
            </form>
        </div>
    </div>






            


  )
}

export default Products
import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {API_URL} from '../../../util/API'
import ProdcutSchema from '../../../schemas/ProductSchema'

const Product = () => {

  let [cate, setCate] = useState([]);
  let [subcate, setSubCate] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/category`).then(response=>{
      // console.log(response.data);
      setCate(response.data.result);
    })
  },[])

  let proForm = useFormik({
    validationSchema : ProdcutSchema,
    initialValues : {
      title : "",
      price : "",
      category : "",
      subcategory : "",
      quantity : "",
      detail : "",
      discount : ""

    },
    onSubmit : (formdata)=>{
      axios.post(`${API_URL}/product`, formdata, {
        headers : { Authorization : localStorage.getItem("lorem")}
      }).then(response=>{
        console.log(response);
      })
    }
  })

  let getSubCate = (event)=>{
    // console.log(event.target.value);
    let x = event.target.value;
    axios.get(`${API_URL}/sub-category/subcate/${x}`).then(response=>{
      setSubCate(response.data.result)
    })
  }

  return (
    <div className="container my-4">
      <form onSubmit={proForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Add New Product</h3>
          <div className='my-2'>
            <label>Product Title</label>
            <input type='text' name='title' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.title && proForm.touched.title ? <small className="text-danger">{proForm.errors.title}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Price</label>
            <input type='text' name='price' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.price && proForm.touched.price ? <small className="text-danger">{proForm.errors.price}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Category</label>
            <select className='form-control' name='category' onChange={(e)=>{getSubCate(e); proForm.handleChange(e)}}>
              <option>Select</option>
              {
                cate.map(value=><option key={value._id}>{value.name}</option>)
              }
            </select>
            {
              proForm.errors.category && proForm.touched.category ? <small className="text-danger">{proForm.errors.category}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Sub-Category</label>
            <select className='form-control' name='subcategory' onChange={proForm.handleChange}>
              <option>Select</option>
              {
                subcate.map(value=><option key={value._id}>{value.name}</option>)
              }
            </select>
            {
              proForm.errors.subcategory && proForm.touched.subcategory ? <small className="text-danger">{proForm.errors.subcategory}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Quantity</label>
            <input type='text' name='quantity' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.quantity && proForm.touched.quantity ? <small className="text-danger">{proForm.errors.quantity}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Detail</label>
            <textarea className='form-control' name='detail' onChange={proForm.handleChange}></textarea>
            {
              proForm.errors.detail && proForm.touched.detail ? <small className="text-danger">{proForm.errors.detail}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Discount</label>
            <input type='text' className='form-control' name='discount' onChange={proForm.handleChange}/>
            {
              proForm.errors.discount && proForm.touched.discount ? <small className="text-danger">{proForm.errors.discount}</small> : ''
            }
          </div>
          <br />
          <button type='submit' className='btn btn-success'>Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Product
import React, {useState, useEffect, useRef} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {API_URL} from '../../../util/API'
import ProdcutSchema from '../../../schemas/ProductSchema'

const Product = () => {

  // localStore.setItem("name", []);

  let param = useParams();
  let file = useRef();
  let navigate = useNavigate();

  let [cate, setCate] = useState([]);
  let [subcate, setSubCate] = useState([]);

  let [pro, setPro] = useState({
    title : "",
    price : "",
    category : "",
    subcategory : "",
    quantity : "",
    detail : "",
    discount : "",
    image : ""

  })

  useEffect(()=>{
    axios.get(`${API_URL}/category`).then(response=>{
      // console.log(response.data);
      setCate(response.data.result);
    })


  },[])


  useEffect(()=>{
    if(param.id){
      axios.get(`${API_URL}/product/${param.id}`).then(response=>{
        // console.log(response.data.result);
        getSubCate(response.data.result.category);
        setPro(response.data.result);
      })
    }
  },[])

  let proForm = useFormik({
    enableReinitialize : true,
    validationSchema : ProdcutSchema,
    initialValues : pro,
    onSubmit : (formdata)=>{
      
      let filedata = file.current.files[0];

      // create a virtual form by FormData() fun
      let vform = new FormData();
      vform.append("image", filedata);
      vform.append("alldata", JSON.stringify(formdata));
      // vform.append("title", formdata.title);
      // vform.append("price", formdata.price);
      // vform.append("category", formdata.category);
      // vform.append("subcategory", formdata.subcategory);
      // vform.append("quantity", formdata.quantity);
      // vform.append("discount", formdata.discount);
      // vform.append("detail", formdata.detail);
      
      axios.post(`${API_URL}/product`, vform, {
        headers : { Authorization : localStorage.getItem("lorem")}
      }).then(response=>{
        // console.log(response);
        navigate("/admin/product-list");
      })
    }
  })

  let getSubCate = (name)=>{
    // console.log(event.target.value);
    
    axios.get(`${API_URL}/sub-category/subcate/${name}`).then(response=>{
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
            <input type='text' value={proForm.values.title} name='title' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.title && proForm.touched.title ? <small className="text-danger">{proForm.errors.title}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Price</label>
            <input type='text' value={proForm.values.price} name='price' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.price && proForm.touched.price ? <small className="text-danger">{proForm.errors.price}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Image</label>
            <input type='file' ref={file} name='image' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.image && proForm.touched.image ? <small className="text-danger">{proForm.errors.image}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Category</label>
            <select disabled={param.id ? true : false} value={proForm.values.category} className='form-control' name='category' onChange={(e)=>{getSubCate(e.target.value); proForm.handleChange(e)}}>
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
            <select disabled={param.id ? true : false} value={proForm.values.subcategory} className='form-control' name='subcategory' onChange={proForm.handleChange}>
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
            <input type='text' value={proForm.values.quantity} name='quantity' onChange={proForm.handleChange} className='form-control' />
            {
              proForm.errors.quantity && proForm.touched.quantity ? <small className="text-danger">{proForm.errors.quantity}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Detail</label>
            <textarea value={proForm.values.detail} className='form-control' name='detail' onChange={proForm.handleChange}></textarea>
            {
              proForm.errors.detail && proForm.touched.detail ? <small className="text-danger">{proForm.errors.detail}</small> : ''
            }
          </div>
          <div className='my-2'>
            <label>Product Discount</label>
            <input value={proForm.values.discount} type='text' className='form-control' name='discount' onChange={proForm.handleChange}/>
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
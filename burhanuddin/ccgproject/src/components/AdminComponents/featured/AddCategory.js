import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CategorySchema from '../../../schemas/CategorySchema'

const AddCategory = () => {
    let navigate = useNavigate();
    let CategoryForm = useFormik(
        {
            validationSchema: CategorySchema,
            initialValues : {
              
              Category_name: ""  
            },
            onSubmit: (formdata)=>{
              axios.post("http://localhost:8080/api/category", formdata).then(response=>{
                navigate('/admin/category-list')
              })}
        }
        
    )
  return (
    <div className="container my-3" style={{minHeight:"600px"}}>
        <form onSubmit={CategoryForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3> Add New Category</h3>
                <div className="my-3">
                    <label>Category Name</label>
                    <br/>
                    <input type='text' onChange={CategoryForm.handleChange} name='Category_name' className={'form-control '+(CategoryForm.errors.Category_name && CategoryForm.touched.Category_name ? 'is-invalid': '')}/>
                    
                    {CategoryForm.errors.Category_name ? <small style={{color:"red"}}>{CategoryForm.errors.Category_name}</small> : ''}
                </div>
                <br/>
                <button className='btn btn-bordered btn-primary'>Add</button>
            </div>
        </div>
        </form>
    </div>
  )}

export default AddCategory
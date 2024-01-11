import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


const AddSubCategory = () => {
    let [cate, setCate] = useState([]);
    let navigate = useNavigate();
    let SubCategoryForm = useFormik({
        initialValues:{
            Category_name : '',
            SubCategory_name : ''
        },
        onSubmit: (formdata)=>{
           axios.post('http://localhost:8080/api/subcategory', formdata).then(response=>{
            // console.log(formdata)
            navigate('/admin/subcategory-list')
           })
        }
    })

    useEffect(()=>{
        axios.get('http://localhost:8080/api/category').then(response=>{ setCate(response.data) })
    }, [])

  return (
    <div className="container" style={{minHeight: "600px"}}>
        <div className="row">
            <form onSubmit={SubCategoryForm.handleSubmit}>
            <div className="col-md-6 offset-md-3">
                <div className="my-3">
                    <label>Category</label>
                    <select className='form-control' name='Category_name' onChange={SubCategoryForm.handleChange}>
                        <option>-----select-----</option>
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
                    <input type='text' onChange={SubCategoryForm.handleChange} name='SubCategory_name' className='form-control'/>
                </div>
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddSubCategory
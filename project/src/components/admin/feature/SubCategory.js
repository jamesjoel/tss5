import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import SubCategorySchema from '../../../schemas/SubCategorySchema';
import axios from 'axios';
import {API_URL} from '../../../util/API';
import {useNavigate} from 'react-router-dom'

const SubCategory = () => {

    let navigate = useNavigate();

    let [cate, setCate] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/category`).then(response=>{
            setCate(response.data.result);
        })
    },[])

    let subCateForm = useFormik({
        initialValues : {
            category : "",
            name : ""
        },
        validationSchema : SubCategorySchema,
        onSubmit:(formdata)=>{
            axios.post(`${API_URL}/sub-category`, formdata).then(response=>{
                navigate("/admin/subcategory-list");
            })
        }
    })

  return (
    <div className='container my-5'>
        <form onSubmit={subCateForm.handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h3>Add New Sub-Category</h3>
                <div className='my-3'>
                    <label>Category</label>
                    <select onChange={subCateForm.handleChange} name='category' className={'form-control '+(subCateForm.errors.category && subCateForm.touched.category ? 'is-invalid' : '')}>
                        <option>Select</option>
                        {
                            cate.map(value=><option>{value.name}</option>)
                        }
                    </select>
                </div>
                <div className='my-3'>
                    <label>Sub-Category Name</label>
                    <input onChange={subCateForm.handleChange} name='name' type='text' className={'form-control '+(subCateForm.errors.name && subCateForm.touched.name ? 'is-invalid' : '')} />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default SubCategory
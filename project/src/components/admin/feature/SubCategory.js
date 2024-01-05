import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import SubCategorySchema from '../../../schemas/SubCategorySchema';
import axios from 'axios';
import {API_URL} from '../../../util/API';
import {useNavigate, useParams} from 'react-router-dom'

const SubCategory = () => {

    let param = useParams();
    let navigate = useNavigate();

    let [subcate, setSubCate] = useState({
        category : "",
        name : ""
    })

    let [cate, setCate] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/category`).then(response=>{
            setCate(response.data.result);
        })
    },[])

    useEffect(()=>{
        if(param.id){
            axios.get(`${API_URL}/sub-category/${param.id}`).then(response=>{
                // console.log(response.data.result);
                setSubCate(response.data.result)
            })
        }
    },[])

    let subCateForm = useFormik({
        enableReinitialize : true,
        initialValues : subcate,
        validationSchema : SubCategorySchema,
        onSubmit:(formdata)=>{
            if(param.id){
                axios.put(`${API_URL}/sub-category/${param.id}`, formdata).then(response=>{
                    navigate("/admin/subcategory-list");
                })
            }
            else{
                axios.post(`${API_URL}/sub-category`, formdata).then(response=>{
                    navigate("/admin/subcategory-list");
                })
            }
        }
    })

  return (
    <div className='container my-5'>
        <form onSubmit={subCateForm.handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h3>{param.id ? 'Update' : 'Add New'} Sub-Category</h3>
                <div className='my-3'>
                    <label>Category</label>
                    <select disabled={ param.id ? true : false } value={subCateForm.values.category} onChange={subCateForm.handleChange} name='category' className={'form-control '+(subCateForm.errors.category && subCateForm.touched.category ? 'is-invalid' : '')}>
                        <option>Select</option>
                        {
                            cate.map(value=><option>{value.name}</option>)
                        }
                    </select>
                </div>
                <div className='my-3'>
                    <label>Sub-Category Name</label>
                    <input value={subCateForm.values.name} onChange={subCateForm.handleChange} name='name' type='text' className={'form-control '+(subCateForm.errors.name && subCateForm.touched.name ? 'is-invalid' : '')} />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>{param.id ? 'Update' : 'Add' }</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default SubCategory
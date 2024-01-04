import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { API_URL } from '../../../util/API'
import {useNavigate, useParams} from 'react-router-dom'
import CateSchema from '../../../schemas/CategorySchema'
let Category = ()=>{

    let [revalue, setReValue] = useState({ name : "" })
    let param = useParams();

    useEffect(()=>{

        if(param.id){
            axios.get(`${API_URL}/category/${param.id}`).then(response=>{
                setReValue(response.data.result);
            })
        }

    },[])
    


    let navigate = useNavigate();
    let cateForm = useFormik({
        enableReinitialize : true,
        validationSchema : CateSchema,
        initialValues : revalue,
        onSubmit : (formdata)=>{
            if(param.id)
            {
                axios.put(`${API_URL}/category/${param.id}`, formdata, {
                    headers : { Authorization : localStorage.getItem("lorem")}
                }).then(response=>{
                    // console.log(response.data);
                    navigate("/admin/category-list");
                })
            }
            else{
                axios.post(`${API_URL}/category`, formdata, {
                    headers : { Authorization : localStorage.getItem("lorem")}
                }).then(response=>{
                    // console.log(response.data);
                    navigate("/admin/category-list");
                })
            }
        }
    })

    return(
        <div className="container my-5">
            <form onSubmit={cateForm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3>{param.id ? 'Update' : 'Add'} Category</h3>
                    <div className="my-3">
                        <label>Category Name</label>
                        <input name='name' value={cateForm.values.name} onChange={cateForm.handleChange} type="text" className={'form-control ' + (cateForm.errors.name && cateForm.touched.name ? 'is-invalid' : '')} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">{param.id ? 'Update' : 'Add' }</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Category;
import { useFormik } from 'formik'
import axios from 'axios';
import { API_URL } from '../../../util/API'
import {useNavigate} from 'react-router-dom'
let Category = ()=>{

    let navigate = useNavigate();
    let cateForm = useFormik({
        initialValues : {
            name : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}/category`, formdata).then(response=>{
                // console.log(response.data);
                navigate("/admin/category-list");
            })
        }
    })

    return(
        <div className="container my-5">
            <form onSubmit={cateForm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3>Add New Category</h3>
                    <div className="my-3">
                        <label>Category Name</label>
                        <input name='name' onChange={cateForm.handleChange} type="text" className="form-control" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Category;
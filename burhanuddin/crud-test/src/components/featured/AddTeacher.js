import React from 'react'
import {useFormik} from 'formik'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const AddTeacher = () => {
    let navigate = useNavigate();

    let TeacherForm = useFormik(
        {
            initialValues: {
                name: "",
                education: "",
                salary: "",
                address: ""
            },
                
                
            onSubmit : (formdata)=>{
                console.log(formdata)
                axios.post('http://localhost:8080/student', formdata).then(response=> navigate('/teacher'))
            }
        }
    )
  return (
    <div className="container my-3" style={{minHeight:"600px"}}>
    <form onSubmit={TeacherForm.handleSubmit}>
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h3> Add New Teacher</h3>
            <div className="my-3">
                <label>Teacher Name</label>
                <br/>
                <input type='text' onChange={TeacherForm.handleChange} name='name' className='form-control'/>
            </div>
            <div className="my-3">
                <label>Teacher Salary</label>
                <br/>
                <input type='text' onChange={TeacherForm.handleChange} name='salary' className='form-control'/>
            </div>
            <div className="my-3">
                <label>Teacher Education</label>
                <br/>
                <input type='text' onChange={TeacherForm.handleChange} name='education' className='form-control'/>
            </div>
            <div className="my-3">
                <label>Teacher Address</label>
                <br/>
                <input type='text' onChange={TeacherForm.handleChange} name='address' className='form-control'/>
            </div>
                
               
            <br/>
            <button className='btn btn-bordered btn-primary'>Add</button>
        </div>
    </div>
    </form>
</div>
  )
}

export default AddTeacher
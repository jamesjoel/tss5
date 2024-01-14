import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

let FormValidation = yup.object({
    name : yup.string().required("Enter Your Name"),
    age : yup.number().required("Enter Your Age"),
    salary : yup.number().required("Enter Your Salary"),
    gender : yup.string().required("Select Your Gender")
})

const AddEditTeacher = () => {

    let [data, setData] = useState({
        name : "",
        gender : "",
        age : "",
        salary : ""
    })
    let param = useParams()
    let navigate = useNavigate()

    let Form = useFormik({
        enableReinitialize : true,
        validationSchema : FormValidation,
        initialValues : data,
        onSubmit : (formData) =>{
            if(param.id){

            }else{
                axios.post('http://localhost:8080/teacher').then(response=>{
                    navigate("/teacher")
                })
            }
        }
    })

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2 my-5'>
                    <form onSubmit={Form.handleSubmit}>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>Add Teacher</h3>
                        </div>
                        <div className='card-body'>
                            <div className='my-3'>
                                <label>Name</label>
                                <input type='text' name='name' placeholder='Enter Your Name' onChange={Form.handleChange} className={'form-control ' + (Form.errors.name && Form.touched.name ? 'is-invalid' : null)} />
                                {
                                    Form.errors.name && Form.touched.name ? <small className='text-danger'>{Form.errors.name}</small> : null
                                }
                            </div>
                            <div className='my-3'>
                                <label>Age</label>
                                <input type='text' name='age' placeholder='Enter Your Age' onChange={Form.handleChange} className={'form-control ' + (Form.errors.age && Form.touched.age ? 'is-invalid' : null)} />
                                {
                                    Form.errors.age && Form.touched.age ? <small className='text-danger'>{Form.errors.age}</small> : null
                                }
                            </div>
                            <div className='my-3'>
                                <label>Salary</label>
                                <input type='text' name='salary' placeholder='Enter Your Salary' onChange={Form.handleChange} className={'form-control ' + (Form.errors.salary && Form.touched.salary ? 'is-invalid' : null)} />
                                {
                                    Form.errors.salary && Form.touched.salary ? <small className='text-danger'>{Form.errors.salary}</small> : null
                                }
                            </div>
                            <div className='my-3'>
                                <label>Gender</label>
                                <br />
                                Male : <input type='radio' name='gender' onChange={Form.handleChange} value='male' placeholder='Enter Your Name' />     
                                Female : <input type='radio' name='gender' onChange={Form.handleChange} value='female' placeholder='Enter Your Name'  />
                                <br />
                                {
                                    Form.errors.gender && Form.touched.gender ? <small className='text-danger'>{Form.errors.gender}</small> : null
                                }
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button className='btn form-control btn-primary' type='submit'>ADD</button>
                        </div> 
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddEditTeacher
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'
import StudentSchema from '../../Schemas/StudentSchemas'
import axios from 'axios'
 

const AddDetails = () => {
  let Navigate= useNavigate();
  let[stu,setStu]=useState({
    name: "",
    age: "",
    collegeyear :"",
    education:""
  })
  let addform=useFormik({
    validationSchema: StudentSchema,
    initialValues : stu,
    onSubmit: (FormData)=>{
      axios.post("http://localhost:9090/student", FormData).then(response=>{
        
        Navigate('/Student')
      })
       
    }
  })
  return (
    <div className="row">
      <form onSubmit={addform.handleSubmit}>
      <div className="col-md-6 offset-md-3"/>
        <h2>Add New Student Details</h2>
        <div className="my-3">
          <label> Name </label>
          <input type='text' name="name" onChange={addform.handleChange} className={'form-control '+(addform.errors.name && addform.touched.name ? 'is-inalid': '')}/>
          </div>

          <div className="my-4">
          <label> Age </label>
          <input type='text'  name="age" onChange={addform.handleChange} className={'form-control '+(addform.errors.age && addform.touched.age ? 'is-inalid': '')}/>

          <div className="my-4">
          <label> Collegeyear </label>
          <select  name="collegeyear" onChange={addform.handleChange} className={'form-control '+(addform.errors.collegeyear && addform.touched.collegeyear ? 'is-inalid': '')}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          </select>
          </div>

          <div className="my-4">
          <label> Education </label>
          <select name="education" onChange={addform.handleChange} className={'form-control '+(addform.errors.education && addform.touched.education ? 'is-inalid': '')}>
          <option value="">Select</option>
          <option value="BBA">BBAt</option>
          <option value="BCA">BCA</option>
          <option value="BSC">BSC</option>
          <option value="BCOM">BCOM</option>
        
          </select>
          </div>

          <br/>
             <button type='submit' className='btn btn-success'>Add</button>
        </div>
        </form>  
    
        </div>
    
  
  )
}

export default AddDetails
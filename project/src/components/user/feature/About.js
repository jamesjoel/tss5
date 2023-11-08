import React, {useState} from 'react'
import Subscribe from '../shared/Subscribe'
import Box from '../shared/Box'
import { useFormik } from 'formik'
import axios from 'axios'
const About = () => {
 
  let form = useFormik({
    initialValues : {
      fullname : "",
      salary : ""
    },
    onSubmit : (formdata)=>{
      axios.post("http://localhost:8080/api/teacher", formdata).then(response=>{
        console.log(response.data);
      })
    }
  });
  
 

  return (
    <>
    <div className="container" style={{minHeight : "700px", marginTop : "150px"}}>
 
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={form.handleSubmit}>
                  <div className='my-3'>
                    <label>Full Name</label>
                    <input name='fullname' onChange={form.handleChange} type='text' className='form-control' />
                  </div>
                  <div className='my-3'>
                    <label>Salary</label>
                    <input name='salary' onChange={form.handleChange} type='text' className='form-control' />
                  </div>
                  <br />
                  <button type='submit' className='btn btn-primary'>Add</button>
                </form>
            </div>
        </div>
    </div>
    <Subscribe />
    </>
  )
}

export default About
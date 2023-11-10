import React, {useState} from 'react'
import Subscribe from '../shared/Subscribe'
import Box from '../shared/Box'
import { useFormik } from 'formik'
import axios from 'axios'
import * as YUP from 'yup';

let abc = YUP.object({
  fullname : YUP.string().required("Insert Your Full Name"),
  salary : YUP.string().required("Insert Your Salary")
});


const About = () => {
 
  let form = useFormik({
    validationSchema : abc,
    initialValues : {
      fullname : "",
      salary : ""
    },
    onSubmit : (formdata)=>{
      console.log(formdata)
      // axios.post("http://localhost:8080/api/teacher", formdata).then(response=>{
      //   console.log(response.data);
      // })
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
                    {
                      form.errors.fullname ? <small className='text-danger'>{form.errors.fullname}</small> : ''
                    }
                  </div>
                  <div className='my-3'>
                    <label>Salary</label>
                    <input name='salary' onChange={form.handleChange} type='text' className='form-control' />
                    {
                      form.errors.salary ? <small className='text-danger'>{form.errors.salary}</small> : ''
                    }
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
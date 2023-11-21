 import React,{useState} from 'react'
import { useFormik } from 'formik'

import * as YUP from 'yup'

let mySchema = YUP.object({
    a : YUP.string().required("*"),
    b : YUP.string().required("*")
})

const About = () => {
  
  let myform = useFormik({
 validationSchema : mySchema,
    initialValues : {
    a : "",
    b : "",
 },
 onSubmit : (data)=>{
    console.log(data);
 }
  });
    return (
    <div className='container ' style={{marginTop : "150px",minHeight :"700px"}} >
        <div className='row'>
            <form onSubmit={myform.handleSubmit}>
            <div className='col-md-12'>
            <label>Full Name {myform.errors.a && myform.touched.a ? <span className='text-danger'>{myform.errors.a}</span> : '' } </label>
            <input type='text'className={myform.errors.a && myform.touched.a ? 'border border-danger' : ''} name="a" onChange={myform.handleChange}/>
            <br/>            
            <br/>
            <label>Email {myform.errors.b && myform.touched.b ? <span className='text-danger'>{myform.errors.b}</span> : ''} </label>
            <br/>
            <input type='text'className={myform.errors.b && myform.touched.b ? 'border border-danger' : ''}  name="b" onChange={myform.handleChange}/>
            <br/>
            <br/>
            <button type='Submit'>OK</button>
    
            </div>
            </form>
        </div>
    </div>
  )
}

export default About
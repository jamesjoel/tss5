import React from 'react'
import { useFormik } from 'formik'

import * as YUP from 'yup';

let mySchema = YUP.object({
  a : YUP.string().required("*"),
  b : YUP.string().required("*")
})


const About = () => {

  let myForm = useFormik({
    validationSchema : mySchema,
    initialValues : {
      a : "",
      b : ""
    },
    onSubmit : (data)=>{
      console.log(data);
    }
  });

  return (
    <div className="container" style={{marginTop : "150px", minHeight : "700px"}}>
      <div className="row">
        <form onSubmit={myForm.handleSubmit}>
        <div className="col-md-12">
          <label>Full Name { myForm.errors.a && myForm.touched.a ? <span className='text-danger'>{myForm.errors.a}</span> : '' }</label>
          <br />
          <input type='text' className={myForm.errors.a && myForm.touched.a ? 'border border-danger' : ''} name="a" onChange={myForm.handleChange}/>
          <br />
          <br />
          <label>Email {myForm.errors.b && myForm.touched.b ? <span className='text-danger'>{myForm.errors.b}</span> : ''}</label>
          <br />
          <input type='text' className={myForm.errors.b && myForm.touched.b ? 'border border-danger' : ''} name="b" onChange={myForm.handleChange}/>
          <br />
          <br />
          <button type='submit'>OK</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default About
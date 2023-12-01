import { useFormik } from 'formik'
import React, { useState } from 'react'
import LogInSchema from '../../../schemas/LogInSchema'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import {navigate} from 'react'



const LogIn = () => {
  let [ErrMssg, setErrMsg] = useState("");
  let navigate = useNavigate()
  // let [IsLogIn, setIsLogIn] = useState(false);


  const LogInForm = useFormik({
    validationSchema : LogInSchema,
    initialValues : {
      username : "",
      password : ""  
    },
    onSubmit: (formdata)=>{
      // console.log(formdata);
      axios.post("http://localhost:8080/api/login", formdata).then(response=>{
      if(response.data.success==false && response.data.type==1)
      {
        setErrMsg("Invalid Email and Password");
      }  
      if (response.data.success==false && response.data.type==2)
      {
        setErrMsg("Invalid Password");
      }
      if (response.data.success==true)
      {
        localStorage.setItem("access-token", response.data.token);
        // setIsLogIn(true);
        navigate("/");
      }

    } 
    )}})



    
  return (
    <>
    
     
    <div className='container' style={{backgroundImage : 'url(/assets/images/featured-item3.jpg)', minHeight: "450px"}}>
      <form onSubmit={LogInForm.handleSubmit}>
        <div className='row'>
          <div className='col-md-6 offset-md-3' >
            <div className='card my-5'>
              <div className='card-header'>
                <h2>Log In</h2>
              </div>
              <div className='card-body'>
                <div className='my-3'>
                  <label>Username</label>
                  <input type='text' name='username' onChange={LogInForm.handleChange}  className={'form-control '+ (LogInForm.errors.username && LogInForm.touched.username ? 'is-invalid':"")}/>
                  {
                    LogInForm.errors.username ? <small className='text-danger'>{LogInForm.errors.username}</small> : ""
                  }
                </div>
                <div className='my-3'>
                  <label> Password </label>
                  <input type='text' name='password' onChange={LogInForm.handleChange} className={'form-control '+ (LogInForm.errors.password && LogInForm.touched.password ? 'is-invalid':"")}/>
                  {
                    LogInForm.errors.password ? <small className='text-danger'>{LogInForm.errors.password}</small> : ""
                  }
                </div>
              </div>
              <div className='card-footer'>
                <div className='my-3'>
                  <button type='submit' className='btn btn-bordered' style={{color: '#D6C7AE'}}>Log In </button>
                </div>
                {
                  ErrMssg ? <small className='text-danger'>{ErrMssg}</small> : ""
                }
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default LogIn
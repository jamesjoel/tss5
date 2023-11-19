import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Modal from '../shared/props/SignupModal'
import LoginCheck from '../../../schemas/LoginSchema';
import { API_URL } from '../../../util/API';
import {useFormik} from 'formik'
import axios from "axios";

const Login = () => {

  let navigate = useNavigate();

  // password seen un-seen section starts
  let [value, setValue] = useState('password')
  let [count, setCount] = useState(1)

  let password = (x)=>{
    setCount(count + x)
    let preCount = 1;
    preCount += count;
    console.log(preCount)
      if(preCount % 2 == 0){
        setValue('text')
      }else{
        setValue('password')
      }
  }
  // password seen un-seen section ends

   // data post for Login section starts

  let [alert, setAlert] = useState(0)
  let loginForm = useFormik({
    validationSchema : LoginCheck,
    initialValues :{
        email : "",
        password : ""
    },
    onSubmit : async(formData)=>{
      await axios.post(`${API_URL}/authentication/login`, formData).then(response =>{
            // console.log(response.data.status)
            // console.log(response.data.errType)
            if(response.data.status === 200){
              navigate('/admin')
            }else if(response.data.status == 403){
              if(response.data.errType === 1){
                setAlert(1);
              }else if(response.data.errType === 2){
                setAlert(2);
              }
            }
        })
    }
})
// data post for Login section ends

  return (
    <>
      <div className='container my-5' style={{minHeight:"700px"}}>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            {
              alert === 2 ? <div class="alert alert-danger">
              <strong>Invalid Email!</strong> Enter a Valid Gmail ID <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
            </div> : ''
            }
            {
              alert === 1 ? <div class="alert alert-danger">
              <strong>Wrong Password!</strong> Your Password is Incorrect <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
            </div> : ''
            }
            <form onSubmit={loginForm.handleSubmit}>
            <div className='card'>
              <div className='card-header text-center bg-primary'>
                <h2 className='text-light'>Login Form</h2>
              </div>
              <div className='card-body'>
                  <div className='my-3'>
                  <label>Gmail ID</label>
                  <input type='email' name='email' onChange={loginForm.handleChange} placeholder='Enter Your G-mail' className={'form-control '+(loginForm.errors.email && loginForm.touched.email ? 'is-invalid' : '')} />
                  {
                    loginForm.errors.email && loginForm.touched.email ? <small className='text-danger'>{loginForm.errors.email} !</small> : ''
                  }
                  </div>
                  <div className='my-3'>
                  <label>Password</label>
                  <input type={value} name='password' style={{display:"inline", float:"right"}} onChange={loginForm.handleChange} placeholder='Enter Your Password' className={'form-control '+(loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />
                  <button type='button' className=' btn text-primary'  onClick={()=>password(1)} style={{ display:"inline", float:"right"}}>see password</button>
                  </div>
                  {
                    loginForm.errors.password && loginForm.touched.password ? <small className='text-danger' >{loginForm.errors.password} !</small> : ''
                  }
              </div>
              <div className='card-footer bg-primary'>
                <button type='submit' className=' btn btn-primary' style={{display:"inline", float:"left"}}>LOGIN</button>
                <button className="btn openModalBtn text-light" 
                  style={{display:"inline", float:"right"}}
                  data-toggle="modal" data-target="#Open"
                  type='button'
                  >
                  create account
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
      <Modal />
    </>
  )
}

export default Login
import React from 'react'
import {useFormik} from 'formik'
const Login = () => {
  let loginfrm = useFormik({
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : (FormData)=>{
      console.log(FormData)
    }
  })

    //onSubmit : (FormData)=>{
      //  console.log(FormData);
    
  return (
    <div className='container my-5'>
      <form onSubmit={loginfrm.handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                  <div className='card-header'>
                    <h3>Administrator Login</h3>
                  </div>
                <div className='card-body'>
                  <div className='my-3'>
                    
                  <label>Username</label>
                    <input type='text' name='username'
                     onChange={loginfrm.handleChange}>
                    </input>
                  </div>
                </div>
                <div className='my-3'>
                  <label>Password</label>
                  <input type='password' name='password' onChange={loginfrm.handleChange}></input>
                </div>
                </div>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary' type='submit'>Login</button>
            </div>
        </div>
        </form>
    </div>
  )}


export default Login
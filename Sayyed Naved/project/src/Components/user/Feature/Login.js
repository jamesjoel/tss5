import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className='container my-5' style={{minHeight : "700px"}}>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
        <div className='card'>
              <div className='card-header text-center bg-primary'>
                <h2 className='text-light'>Login Form</h2>
              </div>
              <div className='card-body'>
                  <div className='my-3'>
                  <label>Gmail ID</label>
                  <input type='email' className='form-control' placeholder='Enter Your G-mail' />
                  </div>
                  <div className='my-3'>
                  <label>Password</label>
                  <input type ="Password"   style={{display:"inline", float:"right"}} className='form-control' placeholder='Enter Your Password' />
                  </div>
              </div>
              <div className='card-footer bg-primary'>
                <NavLink to='/admin' className=' btn btn-primary' style={{display:"inline", float:"left"}}>LOGIN</NavLink> 
                <NavLink to='/signup' className='btn text-light' style= {{display:"inline", float:"right"}}>Create account</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
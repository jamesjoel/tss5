import React from 'react'
import Box from '../shared/Box'

const Login = () => {
    
  return (
    <>
        <div className="container" style={{minHeight : "750px", marginTop : "150px"}}>
    
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>User Login</h4>
                        </div>
                        <div className="card-body">
                            <div className='my-2'>
                                <label>Username</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='my-2'>
                                <label>Password</label>
                                <input type='password' className='form-control' />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
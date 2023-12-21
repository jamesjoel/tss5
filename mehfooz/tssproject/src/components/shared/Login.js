import React from 'react'
import Box from './Box'

const Login = () => {
  let obj={name:"jaya",city:"pune"}
  return (
    <>
    <Box demo={obj.name}text={obj.city}/>
    <Box/>
    <div className="container" style={{minHeight:"750px",marginTop:"150px"}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2>login page</h2>
              <div className="my-3"></div>
            </div>
            <div className="card-body">
              <label>username</label>
              <input type="text" className='form-control'/>
              <div className="my-5"></div>
              <label>password</label>
              <input type="password" className='form-control'/>
              <div className="my-5"></div>
              <div className="footer">
                <botton type='submit' className='btn btn-primary form-control'>login</botton>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
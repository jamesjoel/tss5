import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AdminLogIn = () => {
  let [ErrMssg, setErrMsg] = useState("");
  let navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('pistoluu'))
    navigate('/admin/dashboard')
  },[])
  let AdminLogin = useFormik({
    initialValues:{
        username : "",
        password: ""

    },
    onSubmit : (formdata)=>{
        console.log(formdata);
        axios.post("http://localhost:8080/api/adminlogin", formdata).then(response=>{
         console.log(response.data)
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
          localStorage.setItem("pistoluu", response.data.token);
          // setIsLogIn(true);
          navigate("/admin/dashboard");
        }
        })
    }
  })
    return (
    <>
   <div className="container" style={{minHeight: '365px'}}>
    <form onSubmit={AdminLogin.handleSubmit}> 
        <div className="row">
            <div className="col-md-6 offset-md-3 my-5">
              <div className="card my-5">
                <div className="card-header">
                    <h2> Admin Portal Login </h2>
                </div>
                <div className="card-body">
                    <input type='text' name='username'  onChange={AdminLogin.handleChange} className='form-control' />
                    <input type='text' name="password" onChange={AdminLogin.handleChange} className='form-control' />
                </div>
                <div className="card-footer">
                  <button type='submit' className='tn btn-bordered offset-md-5 '>Submit</button>
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
    )}

export default AdminLogIn
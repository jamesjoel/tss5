import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import LoginSchema from '../../../schemas/LoginSchema'
import axios from 'axios'
import { API_URL } from '../../../util/API'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("access-token"))
        {
            navigate("/my-account");
        }
    }, [])


    let [errMsg, setErrMsg] = useState("");
    let [spinner, setSpinner] = useState(false);

    let loginForm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formdata)=>{
            setSpinner(true);
            axios.post(`${API_URL}/auth`, formdata).then(response=>{
                
                setSpinner(false);
                
                if(response.data.success==false && response.data.type==1)
                {
                    setErrMsg("Invalid Email Id and Password !");
                }
                if(response.data.success==false && response.data.type==2)
                {
                    setErrMsg("Invalid Password !");
                }
                if(response.data.success == true)
                {
                    localStorage.setItem("access-token", response.data.token);
                    navigate("/my-account");
                }
            })
        }
    })

  return (
    <>
    
        <div className="container" style={{minHeight : "750px", marginTop : "150px"}}>
            <form onSubmit={loginForm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>User Login</h4>
                        </div>
                        <div className="card-body">
                            <div className='my-2'>
                                <label>Username/Email</label>
                                <input name='email' onChange={loginForm.handleChange} type='text' className='form-control' />
                                {
                                    loginForm.errors.email && loginForm.touched.email ? <small className='text-danger'>{ loginForm.errors.email }</small> : ''
                                }
                            </div>
                            <div className='my-2'>
                                <label>Password</label>
                                <input name='password' onChange={loginForm.handleChange} type='password' className='form-control' />
                                {
                                    loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{ loginForm.errors.password }</small> : ''
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'>Login { spinner ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
                            <br />
                            {
                                errMsg ? <p className='text-danger text-center'>{errMsg}</p> : ''
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

export default Login
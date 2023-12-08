import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import AdminLoginSchema from '../../../schemas/AdminLoginSchema'
import axios from 'axios';
import { API_URL } from '../../../util/API'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("lorem")){
            navigate("/admin/dashboard");
        }
    },[])

    let [errMsg, setErrMsg] = useState("");
    

    let loginFrm = useFormik({
        validationSchema : AdminLoginSchema,
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}/adminauth`, formdata).then(response=>{
                if(response.data.success == true)
                {
                    localStorage.setItem("lorem", response.data.token);
                    navigate("/admin/dashboard");

                }
                if(response.data.success == false && response.data.type == 1)
                {
                    setErrMsg("This Username and Password is Invalid");
                }
                if(response.data.success == false && response.data.type == 2)
                {
                    setErrMsg("This Password is Invalid");
                }
            })
        }
    })
  return (
    <div className='container my-5'>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Administrator Login</h3>
                    </div>
                    <div className="card-body">
                        <div className="my-3">
                            <label>Username</label>
                            <input type='text' name='username' onChange={loginFrm.handleChange} className={'form-control '+ (loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : '')} />
                        </div>
                        <div className="my-3">
                            <label>Password</label>
                            <input type='password' name='password' onChange={loginFrm.handleChange} className={'form-control '+ (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className='btn btn-primary' type='submit'>Login</button>
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
  )
}

export default Login
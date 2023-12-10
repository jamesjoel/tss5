import React, {useState} from 'react';
import axios from 'axios';
import loginSchema from '../../../schemas/loginSchema';
import { useFormik } from 'formik';
import { API_URL } from '../../../Util/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    let [alertMsg, setAlertMsg] = useState("")
    let [showAlert, setShowAlert] = useState(false)

    let loginPage = useFormik({
        validationSchema: loginSchema,
        initialValues: {
            name: "",
            password: ""
        },
        onSubmit: (formdata) => {
            // console.log(formdata)
                axios.post(`${API_URL}/auth`, formdata).then(response => {
                    let ID = response.data.Token
                if(response.data.status === 200){
                localStorage.setItem('Token', ID)
                navigate(`/about`)
                }else if(response.data.status === 403){
                if(response.data.errType === 2){
                    setShowAlert(true);
                    setAlertMsg("Enter a Valid Gmail ID")
                    setTimeout(()=>{
                    setShowAlert(false)
                    }, 3000);
                }else if(response.data.errType === 1){
                    setShowAlert(true);
                    setAlertMsg("Your Password is Incorrect")
                    setTimeout(()=>{
                    setShowAlert(false)
                    }, 3000);
                }
                }
            })
        }
    })


    return (
        <>
            <div className="container" style={{ minHeight: "750px", marginTop: "150px" }}>
                <form onSubmit={loginPage.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        {
                            showAlert === true ? <div class="alert alert-danger">
                                { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                            </div> : ''
                        }
                            <div className="card">
                                <div className="card-header">
                                    <h4>User Login</h4>
                                </div>
                                <div className="card-body">
                                    <div className='my-2'>
                                        <label>Username</label>
                                        <input type='email' name="name" onChange={loginPage.handleChange} className='form-control' />
                                        {
                                            loginPage.errors.name && loginPage.touched.name ? <small className='text-danger'>{loginPage.errors.name} </small> : ''
                                        }
                                    </div>
                                    <div className='my-2'>
                                        <label>Password</label>
                                        <input type='password' name="password" onChange={loginPage.handleChange} className='form-control' />
                                        {
                                            loginPage.errors.password && loginPage.touched.password ? <small className='text-danger'>{loginPage.errors.password}</small> : ''
                                        }
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
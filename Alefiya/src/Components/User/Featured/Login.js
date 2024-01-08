import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loginSchema from '../../../schemas/loginSchema';
import { useFormik } from 'formik';
import { API_URL } from '../../../Util/api';
import { useNavigate } from 'react-router-dom';



const Login = () => {


    let Navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let [spinner, setSpinner] = useState(false);

    let loginPage = useFormik({
        validationSchema: loginSchema,
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (formdata) => {


            setSpinner(true);

            await axios.post(`${API_URL}/login`, formdata).then(response => {

                setSpinner(false);

                if (response.data.success == false && response.data.type == 1) {
                    setErrMsg("email id or password invalid!!");
                }
                if (response.data.success == false && response.data.type == 2) {
                    setErrMsg("password invalid!!");
                }
                if (response.data.succes == true) {
                    localStorage.setItem("access_token", response.data.token);
                    Navigate("/My_account");
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
                            <div className="card">
                                <div className="card-header">
                                    <h4>User Login</h4>
                                </div>
                                <div className="card-body">
                                    <div className='my-2'>
                                        <label>email</label>
                                        <input type='text' name="email" onChange={loginPage.handleChange} className='form-control' />
                                        {
                                            loginPage.errors.email && loginPage.touched.email ? <small className='text-danger'>{loginPage.errors.email} </small> : ''
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
                                    <button type='submit' className='btn btn-primary'>Login{
                                        spinner ? <span className='spinner-border spinner-border-sm'>{ }</span> : ""
                                    }</button>
                                    <br />
                                    {
                                        errMsg ? <small className='text-danger text-center'>{errMsg}</small> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Login;
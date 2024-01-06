import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import loginSchema from "../../../schemas/AdminLoginSchema";
import { API_URL } from "../../../Util/api";
import { useNavigate } from "react-router-dom";


const Login = () => {

    let Navigate = useNavigate();
    let [spinner, setSpinner] = useState(false);
    let [errMsg, setErrMsg] = useState();

    let loginform = useFormik({
        validationSchema: loginSchema,

        initialValues: {
            username: "",
            password: ""

        },

        onSubmit: async (formdata) => {
            setSpinner(true);

            await axios.post(`${API_URL}/adminauth`, formdata).then(response => {
                setSpinner(false);
                console.log(response.data);

                if (response.data.success === false && response.data.type === 1) {
                    setErrMsg("username or password invalid!!");
                }
                if (response.data.success === false && response.data.type === 2) {
                    setErrMsg("username invalid!!");
                }
                if (response.data.success === true && response.data.token) {
                    Navigate("/dashboard");
                }
            })

        }

    })



    return (
        <>
            <div className="container" style={{ minHeight: "750px", marginTop: "150px" }}>
                <form onSubmit={loginform.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4>admin Login</h4>
                                </div>
                                <div className="card-body">
                                    <div className='my-2'>
                                        <label>Username</label>
                                        <input type='text' name="username" onChange={loginform.handleChange} className='form-control' />
                                        {
                                            loginform.errors.username && loginform.touched.username ? <small className='text-danger'>{loginform.errors.username} </small> : ''
                                        }
                                    </div>
                                    <div className='my-2'>
                                        <label>Password</label>
                                        <input type='password' name="password" onChange={loginform.handleChange} className='form-control' />
                                        {
                                            loginform.errors.password && loginform.touched.password ? <small className='text-danger'>{loginform.errors.password}</small> : ''
                                        }
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type='submit' className='btn btn-primary'>Login
                                        {
                                            spinner ? <span className='spinner-border spinner-border-sm'></span> : ""
                                        }
                                    </button>
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
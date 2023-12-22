import React, {useState} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as YUP from 'yup'
import { useNavigate } from 'react-router-dom'

let loginSchema = YUP.object({
    email : YUP.string().email("Invalid Email Id").required("Insert Email Id"),
    password : YUP.string().required("Insert Password")
})

const Login = () => {

    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let [spinner, setSpinner] = useState(false);

    let loginForm = useFormik({
        validationSchema : loginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formdata)=>{
            setSpinner(true);

            axios.post("https://api.escuelajs.co/api/v1/auth/login", formdata)
            .then(response=>{
                // console.log(response.data);
                localStorage.setItem("access-token", response.data.access_token);
                navigate("/profile");

            })
            .catch((err)=>{
                setSpinner(false);
                setErrMsg("This Email and Password is Invalid");
            })
        }
    })

  return (
    <div className="container my-5">
        <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="my-3">
                    <label>Username/Email</label>
                    <input name='email' onChange={loginForm.handleChange} type='text' className={'form-control '+ (loginForm.errors.email && loginForm.touched.email ? 'is-invalid' : '')} />
                </div>
                <div className="my-3">
                    <label>Password</label>
                    <input name='password' onChange={loginForm.handleChange} type='password' className={'form-control '+(loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />
                </div>
                <br />
                <button className='btn btn-success' type='submit'>Login { spinner ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
                <br />
                {
                    errMsg ? <div className='alert alert-danger mt-4'>{errMsg}</div> : ''
                }
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login
/*

{ 'hello ' + a}
{ 'hello ' + (a && b ? c : '')}


*/
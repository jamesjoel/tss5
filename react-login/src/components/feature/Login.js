import React, {useState} from 'react'
import {useFormik} from 'formik'
import LoginSchema from '../../schema/LoginSchema'
import { Auth } from '../../services/UserAuthService'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let [spin, setSpin] = useState(false);

    let loginFrm = useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        validationSchema : LoginSchema,
        onSubmit : async(formdata)=>{
            setSpin(true);
            try{
                let response = await Auth(formdata);
                localStorage.setItem("access-token", response.data.access_token);
                
                navigate("/profile");
            }catch(err){
                setSpin(false);
                setErrMsg("This Email Id and Password is not correct")
            }
        }
    })

  return (
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <form onSubmit={loginFrm.handleSubmit}>
                <div className='card'>
                    <div className='card-header'>
                        <h4>User Login</h4>
                    </div>
                    <div className='card-body'>
                        <div className='my-3'>
                            <input name="email" onChange={loginFrm.handleChange} type='text' className={'form-control ' + (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '')} placeholder='Email' />
                            {
                                loginFrm.errors.email && loginFrm.touched.email ? <small className='text-danger'>{loginFrm.errors.email}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <input name="password" onChange={loginFrm.handleChange} type='password' className={'form-control ' + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                            {
                                loginFrm.errors.password && loginFrm.touched.password ? <small className='text-danger'>{loginFrm.errors.password}</small> : ''
                            }
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary' type='submit'>Login {spin==true ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
                        {
                            errMsg ? <p className='text-danger text-center pt-2'>{errMsg}</p> : ' ' 
                        }
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
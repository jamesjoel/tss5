import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import LoginSchema from '../../schemas/LoginSchema';
import { useFormik } from 'formik';
import { API_URL } from '../../utils/API';
import axios from 'axios';

const Login = () => {
	
	let navigate = useNavigate();
	let [showAlert, setShowAlert] = useState(false);
	let [alertMsg, setAlertMsg] = useState("");

	let loginForm = useFormik({
		validationSchema : LoginSchema,
		initialValues : {
			email : "",
			password : ""
		},
		onSubmit : async(formData) =>{
			let response = await axios.post(`${API_URL}/banking/login`, formData)
			if(response.data.status === 200){
				let token = response.data.token;
				localStorage.setItem('Naruto', token);
				navigate(`/home`)
			}else if(response.data.status === 403){
				if(response.data.errType === 1){
					setShowAlert(true)
					setAlertMsg("Invalid Email ID")
					setTimeout(()=>{
						setShowAlert(false)
					}, 3000)
				}else{
					setShowAlert(true)
					setAlertMsg("Incorrect Password")
					setTimeout(()=>{
						setShowAlert(false)
					}, 3000)
				}
			}
		}
	})

  return (
    <>
      
      <div className="login-page d-flex align-items-center vh-100">
		<div className="overlay"></div>
		<div className="login-form">
			<div className="container">
				<form onSubmit={loginForm.handleSubmit}>
					<div className="login-social-icon">
						<h2>Login</h2>
						<ul className="social-buttons">
							<li className="social-buttons-hover">
								<a href="http://google.com/">
									<i className="ri-google-fill"></i>
								</a>
							</li>
							<li className="">
								<a href="http://localhost:3000/">
								Exit
								</a>
							</li>
							<li className="">
								<a href="https://www.facebook.com/">
									<i className="uil uil-facebook-f"></i>
								</a>
							</li>
						</ul>
					</div>
					
					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-user"></i></span>
						<input type="email" className="form-control" id="inputUsername" name='email' onChange={loginForm.handleChange} tabindex="1" placeholder="Username/Email" required />
					</div>
					
					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-lock"></i></span>
						<input type="password" className="form-control" name='password' onChange={loginForm.handleChange} id="inputPassword" tabindex="2" placeholder="Password" required />
					</div>
	
					<div className="input-group">
						<div className="form-check">
							<input type="checkbox" className="form-check-input" id="rememberMe" />
							<label className="form-check-label form-check-box" for="rememberMe">Keep me logged in</label>
						</div>
					</div>

					<div className="row justify-content-center mb-md-3">
						<div className="col-sm-6 mb-md-3 mb-sm-0">
							<button type="submit" className="btn theme-btn-1">Log In</button>
						</div>
						
						<div className="col-sm-6 text-sm-end">
							<a className href='recover.html'>Forgot Password?</a>
						</div>
					</div>

					<div className="login-footer">Don't have an account? <NavLink to='/signup'>Signup</NavLink>
					</div>
				</form>
			</div>
		</div>
	</div>
      
    </>
  )
}

export default Login
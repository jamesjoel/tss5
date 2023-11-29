import React, { useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios';
import {API_URL} from '../../utils/API'
import SignupSchema from '../../schemas/SignupSchema';
import { NavLink, useNavigate } from 'react-router-dom';

const Sigunp = () => {

	let navigate = useNavigate();
	let [showAlert, setShowAlert] = useState(false);
	let [alertMsg, setAlertMsg] = useState("");

	let signupForm = useFormik({
		validationSchema : SignupSchema,
		initialValues : {
			username : "",
			email : "",
			password : ""
		},
		onSubmit : async(formData) =>{
			let response = await axios.post(`${API_URL}/banking/signup`, formData)
			// console.log(response.data)
			if(response.data.status === 200){
				navigate(`/home`)
			}else if(response.data.status === 403){
				if(response.data.errType === 1){
					setShowAlert(true)
					setAlertMsg("Invalid Email ID")
					setTimeout(()=>{
						setShowAlert(false)
					}, 3000)
				}else if(response.data.errType === 2){
					setShowAlert(true)
					setAlertMsg("Incorrect Password")
					setTimeout(()=>{
						setShowAlert(false)
					}, 3000)
				}else{
					setShowAlert(true)
					setAlertMsg("Account Already Exist!!")
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
		<div className="overlay">
			</div>		
		<div className="login-form">
			<div className="container">
				<form onSubmit={signupForm.handleSubmit}> 
					<div className="login-social-icon">
						<h2>Signup</h2>
					{
                        showAlert === true ? <div class="alert alert-danger">
                        { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                        </div> : null
                    }
						<ul className="social-buttons">
							<li className="social-buttons-hover">
								<a href="http://google.com/">
									<i className="ri-google-fill"></i>
								</a>
							</li>
							<li className="social-buttons-hover">
								<a href="https://twitter.com/">
									<i className="uil uil-twitter"></i>
								</a>
							</li>
							<li className="social-buttons-hover">
								<a href="https://www.facebook.com/">
									<i className="uil uil-facebook-f"></i>
								</a>
							</li>
						</ul>
					</div>
					
					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-user"></i></span>
						<input type="text" className={'form-control '+ (signupForm.errors.username && signupForm.touched.username ? 'is-invalid' : null)} name='username' onChange={signupForm.handleChange} id="inputUsername" tabindex="1" placeholder="Username" required />
						{
							signupForm.errors.username && signupForm.touched.username ? <small className='text-danger'>{signupForm.errors.username} !</small> : null
						}
					</div>
					
					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-envelope"></i></span>
						<input type="email" className={'form-control '+ (signupForm.errors.email && signupForm.touched.email ? 'is-invalid' : null)} name='email' onChange={signupForm.handleChange} id="inputEmail" tabindex="2" placeholder="Email" required />
						{
							signupForm.errors.email && signupForm.touched.email ? <small className='text-danger'>{signupForm.errors.email} !</small> : null
						}
					</div>

					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-lock"></i></span>
						<input type="password" className={'form-control '+ (signupForm.errors.password && signupForm.touched.password ? 'is-invalid' : null)} name='password' onChange={signupForm.handleChange} id="inputPassword" tabindex="3" placeholder="Password" required />
						{
							signupForm.errors.password && signupForm.touched.password ? <small className='text-danger'>{signupForm.errors.password} !</small> : null
						}
					</div>
	
					<div className="input-group">
						<div className="form-check">
							<input type="checkbox" className="form-check-input" id="rememberMe" />
							<label className="form-check-label form-check-box" for="rememberMe">I agree to the <a className="" href="#">Terms & Conditions</a></label>
						</div>
					</div>

					<div className="row justify-content-center mb-md-3">
						<div className="col-sm-6 mb-md-3 mb-sm-0">
							<button type="submit" className="btn theme-btn-1">Sign Up</button>
						</div>
					</div>

					<div className="login-footer">Already have an account? <NavLink to='/login'>Login</NavLink></div>
				</form>
			</div>
		</div>
	</div>
    </>
  )
}

export default Sigunp
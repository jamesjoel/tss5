import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios';
import {API_URL} from '../../utils/API'
import SignupSchema from '../../schemas/SignupSchema';

const Sigunp = () => {

	let pageLoad = async() =>{

	}

	let signupForm = useFormik({
		// validationSchema : SignupSchema,
		initialValues : {
			username : "",
			email : "",
			password : ""
		},
		onSubmit : async(formData) =>{
			let response = await axios.post(`${API_URL}/banking/signup`, formData)

		}
	})

  return (
    <>
    <div className="login-page d-flex align-items-center vh-100">
		<div className="overlay"></div>		
		<div className="login-form">
			<div className="container">
				<form>
					<div className="login-social-icon">
						<h2>Signup</h2>
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
						<input type="text" className="form-control" id="inputUsername" tabindex="1" placeholder="Username" required />
					</div>
					
					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-envelope"></i></span>
						<input type="email" className="form-control" id="inputEmail" tabindex="2" placeholder="Email" required />
					</div>

					<div className="input-group">
						<span className="login-form-icon"><i className="uil uil-lock"></i></span>
						<input type="password" className="form-control" id="inputPassword" tabindex="3" placeholder="Password" required />
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

					<div className="login-footer">Already have an account? <a href='login.html'>Login</a></div>
				</form>
			</div>
		</div>
	</div>
    </>
  )
}

export default Sigunp
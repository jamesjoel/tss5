import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const Login = () => {
  return (
    <>
      
      <div className="login-page d-flex align-items-center vh-100">
		<div className="overlay"></div>
		<div className="login-form">
			<div className="container">
				<form>
					<div className="login-social-icon">
						<h2>Login</h2>
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
						<span className="login-form-icon"><i className="uil uil-lock"></i></span>
						<input type="password" className="form-control" id="inputPassword" tabindex="2" placeholder="Password" required />
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

					<div className="login-footer">Don't have an account? <a href='signup.html'>Signup</a>
					</div>
				</form>
			</div>
		</div>
	</div>
      
    </>
  )
}

export default Login
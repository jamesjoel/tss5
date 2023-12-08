import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../shared/props/SignupModal'
import LoginCheck from '../../../schemas/LoginSchema';
import { API_URL } from '../../../util/API';
import {useFormik} from 'formik'
import axios from "axios";
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Login = () => {

  let navigate = useNavigate();

  // password seen un-seen section starts
  let [value, setValue] = useState('password')
  let [count, setCount] = useState(1)

  let password = (x)=>{
    setCount(count + x)
    let preCount = 1;
    preCount += count;
    // console.log(preCount)
      if(preCount % 2 === 0){
        setValue('text')
      }else{
        setValue('password')
      }
  }
  // password seen un-seen section ends

   // data post for Login section starts

  let [alertMsg, setAlertMsg] = useState("")
  let [showAlert, setShowAlert] = useState(false)
  let loginForm = useFormik({
    validationSchema : LoginCheck,
    initialValues :{
        email : "",
        password : ""
    },
    onSubmit : async(formData)=>{
      await axios.post(`${API_URL}/authentication/login`, formData).then(response =>{
          let ID = response.data.Token
            if(response.data.status === 200){
              localStorage.setItem('Token', ID)
              navigate(`/admin/${ID}`)
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
// data post for Login section ends


  return (
    <>
    <Header />
      <div className='container my-5' style={{minHeight:"700px"}}>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            {
              showAlert === true ? <div class="alert alert-danger">
                { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
            </div> : ''
            }
            <form onSubmit={loginForm.handleSubmit}>
            <div className='card'>
              <div className='card-header text-center bg-dark'>
                <h2 className='text-light'>Login Form</h2>
              </div>
              <div className='card-body'>
                  <div className='my-3'>
                  <label>Gmail ID</label>
                  <input type='email' name='email' onChange={loginForm.handleChange} placeholder='Enter Your G-mail' className={'form-control '+(loginForm.errors.email && loginForm.touched.email ? 'is-invalid' : '')} />
                  {
                    loginForm.errors.email && loginForm.touched.email ? <small className='text-danger'>{loginForm.errors.email} !</small> : ''
                  }
                  </div>
                  <div className='my-3'>
                  <label>Password</label>
                  <input type={value} name='password'  onChange={loginForm.handleChange} placeholder='Enter Your Password' className={'form-control '+(loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />
                  <button type='button' className=' btn text-primary'  onClick={()=>password(1)} style={{ display:"inline", float:"right"}}>see password</button>
                  </div>
                  {
                    loginForm.errors.password && loginForm.touched.password ? <small className='text-danger' >{loginForm.errors.password} !</small> : ''
                  }
              </div>
              <div className='card-footer bg-dark'>
                <button type='submit' className=' btn btn-primary' style={{display:"inline", float:"left"}}>LOGIN</button>
                <button className="btn text-light" 
                  style={{display:"inline", float:"right"}}
                  data-toggle="modal" data-target="#Open"
                  type='button'
                  >
                  create account
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div> 
      <Modal />
    <Footer />
    </>
  )
}

export default Login
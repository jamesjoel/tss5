import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import ChangePassword from '../../../schemas/UpdatePasswordSchema'
import OpenEye from '../../user/assets/eyeButton/OpenEye'
import CloseEye from '../../user/assets/eyeButton/CloseEye'
import PassForgotModal from '../shared/props/PassForgotModal';
import {API_URL} from '../../../util/API';
import Footer from '../shared/Footer'
import Header from '../shared/Header'

const UpdatePassword = () => {

    let navigate = useNavigate();
    let [ showAlert, setShowAlert ] = useState(false)
    let [ alertMsg, setAlertMsg ] = useState("")
    let [ eyeBtn, setEyeBtn ] = useState(false)

    let updatePass = useFormik({
        validationSchema : ChangePassword,
        initialValues : {
            currentpassword : "",
            changepassword : "",
            rechangepassword : ""
        },
        onSubmit : async(formData)=>{
            console.log(formData)
            let ID = localStorage.getItem('Token')
            let response = await axios.post(`${API_URL}/user/authentication/update/password`, formData, {headers : {Authorization : ID}})
            if(response.data.status == 200){
                navigate(`/user/my-account`)
            }else{
                if(response.data.errType == 1){ 
                    setShowAlert(true);
                    setAlertMsg("Your Current Password is Wrong");
                    setTimeout(()=>{
                        setShowAlert(false)
                    }, 2000);
                }
            }
        }
    })

return (
    <>
    <Header />
    <div className='container' style={{minHeight : "700px"}}>
        <div className='row'>
            <div className='col-md-6 offset-md-3 my-5'>
            {
                showAlert === true ? <div class="alert alert-danger">
                <strong>Invalid Password!</strong> { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                </div> : null
            }
            <form onSubmit={updatePass.handleSubmit}>
            <div className='card'>
                <div className='card-body'>
                    <div className='my-3'>                  
                        <input type="text" name="currentpassword" onChange={updatePass.handleChange}  placeholder="Enter Current Password"  className={ 'form-control '+(updatePass.errors.currentpassword && updatePass.touched.currentpassword ? 'is-invalid' : '') } />
                        {
                            updatePass.errors.currentpassword && updatePass.touched.currentpassword ? <small className='text-danger'>{updatePass.errors.currentpassword} !</small> : null
                        }
                    </div>
                    <div className='my-3'>
                        <div className="input-group">
                            <input type={eyeBtn === true ? "text" : "password"} name="changepassword" onChange={updatePass.handleChange}  placeholder="Create New Password" aria-describedby="basic" className={ 'form-control '+(updatePass.errors.changepassword && updatePass.touched.changepassword ? 'is-invalid' : '') } />
                                <span className="bg-light input-group-text" id="basic">
                                {
                                    eyeBtn === true ? <span onClick={()=>{setEyeBtn(false)}}><OpenEye /></span> : <span onClick={()=>{setEyeBtn(true)}}><CloseEye /></span> 
                                }
                                </span>
                        </div>
                        {
                            updatePass.errors.changepassword && updatePass.touched.changepassword ? <small className='text-danger'>{updatePass.errors.changepassword} !</small> : null
                        }
                    </div>
                    <div className='my-3'>
                        <input type={eyeBtn === true ? "text" : "password"} name="rechangepassword" onChange={updatePass.handleChange}  placeholder="Re-Enter New Password" className={ 'form-control '+(updatePass.errors.rechangepassword && updatePass.touched.rechangepassword ? 'is-invalid' : '') } />
                        {
                            updatePass.errors.rechangepassword && updatePass.touched.rechangepassword ? <small className='text-danger'>{updatePass.errors.rechangepassword} !</small> : null
                        }
                    </div>
                </div>
                <div className='card-footer'>
                    <button style={{ display : "inline", textAlign : "center", float : "left" }} type='submit' className='btn btn-sm btn-primary'>Change Password</button>
                    <button className="btn text-primary btn-sm" 
                    style={{display:"inline", float:"right"}}
                    data-toggle="modal" data-target="#PasswordForgot"
                    type='button'
                    >
                    <small>Forgot Password?</small>
                    </button>
                </div>
            </div>
            </form>
            </div>
        </div>
    </div>
    <PassForgotModal />
    <Footer />
    </>
  )
}

export default UpdatePassword
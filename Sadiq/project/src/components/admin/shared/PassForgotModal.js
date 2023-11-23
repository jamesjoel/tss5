import React, { useState } from "react";
import OpenEye from "../../user/assets/eyeButton/OpenEye";
import CloseEye from "../../user/assets/eyeButton/CloseEye";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ForgotPassword from "../../../schemas/ForgotPasswordSchema";
import axios from "axios";
import { API_URL } from "../../../util/API";


let PassForgotModal = () =>{

    let navigate = useNavigate();
    let [ showAlert, setShowAlert ] = useState(false)
    let [ alertMsg, setAlertMsg ] = useState("")
    let [otp, setOtp] =useState()
    let [ eyeBtn, setEyeBtn ] = useState(false)

    let forgotPass = useFormik({
        validationSchema : ForgotPassword,
        initialValues : {
            contact : "",
            otp : ""
        },
        onSubmit : async(formData) =>{
            let ID = localStorage.getItem('Token')
            let response = await axios.post(`${API_URL}/authentication/forgot/password/${ID}`, formData)
            if(response.data.status === 200){
                setShowAlert(true)
                setOtp(response.data.otp)
                setTimeout(()=>{
                    setShowAlert(false)
                }, 10000);
            }else if(response.data.status === 403){
                if(response.data.errType === 1){
                    setShowAlert(true);
                    setAlertMsg("Your Number Must Contain 10 Digits")
                    setTimeout(()=>{
                        setShowAlert(false)
                    }, 3000);
                }else{
                    setShowAlert(true);
                    setAlertMsg("Your Number is Invalid")
                    setTimeout(()=>{
                        setShowAlert(false)
                    }, 3000);
                }
            }
        }
    })



return (
    <>
    <div className="modal fade" data-backdrop="static" aria-labelledby="staticBackdropLabel" id="PasswordForgot" tabIndex="-1" >
        <div className="modal-dialog">
            <form onSubmit={forgotPass.handleSubmit}>
            <div className="modal-content">
            {
                showAlert === true || otp ? <div class="alert alert-danger">
                    { otp ? otp : alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                </div> : null
            }
                <div className="modal-header">
                    <h3 className="modal-title">Forgot Password</h3>
                    <button
                        id="clsModalBtn"
                        type="button"
                        data-dismiss="modal"
                        className="btn"
                        style={{display : "inline", float : "right"}}
                    >
                        X
                    </button>
                </div>
                <div className="modal-body">
                    <div className="my-3">
                        <div className="input-group">
                        <input type="text" name="contact" onChange={forgotPass.handleChange} aria-describedby="basic" placeholder="Enter Your Contact Number" className={ 'form-control '+( forgotPass.errors.contact && forgotPass.touched.contact ? 'is-invalid' : null ) } />
                        
                        </div>
                        {
                            forgotPass.errors.contact && forgotPass.touched.contact ? <small className="text-danger">{forgotPass.errors.contact} !</small> : null
                        }
                    </div>
                    <div className="my-3">
                        <input type="text" name="otp" onChange={forgotPass.handleChange} placeholder="Enter Your OTP Here" className={'form-control '+(forgotPass.errors.otp && forgotPass.touched.otp ? 'is-invalid' : null)} />
                        {
                            forgotPass.errors.otp && forgotPass.touched.otp ? <small className="text-danger">{forgotPass.errors.otp} !</small> : null
                        }
                    </div>
                    {/* <div className='my-3'>
                        <div className="input-group">
                            <input type={eyeBtn === true ? "text" : "password"} name="changepassword" onChange={forgotPass.handleChange}  placeholder="Create Password" aria-describedby="basic" className={ 'form-control '+(forgotPass.errors.changepassword && forgotPass.touched.changepassword ? 'is-invalid' : '') } />
                            <span className="bg-light input-group-text" id="basic">
                        {
                            eyeBtn === true ? <span onClick={()=>{setEyeBtn(false)}}><OpenEye /></span> : <span onClick={()=>{setEyeBtn(true)}}><CloseEye /></span> 
                        }
                            </span>
                        </div>
                    {
                        forgotPass.errors.changepassword && forgotPass.touched.changepassword ? <small className='text-danger'>{forgotPass.errors.changepassword} !</small> : null
                    }
                    </div>
                    <div className='my-3'>
                        <input type={eyeBtn === true ? "text" : "password"} name="rechangepassword" onChange={forgotPass.handleChange}  placeholder="Create Password" className={ 'form-control '+(forgotPass.errors.rechangepassword && forgotPass.touched.rechangepassword ? 'is-invalid' : '') } />
                    {
                        forgotPass.errors.rechangepassword && forgotPass.touched.rechangepassword ? <small className='text-danger'>{forgotPass.errors.rechangepassword} !</small> : null
                    }
                    </div> */}
                </div>
                <div className="card-footer text-center">
                <button  type='submit' className='btn btn-sm btn-primary'>Change Password</button> 
                </div>
            </div>
            </form>
        </div>
    </div>
    </>
  );
}

export default PassForgotModal;
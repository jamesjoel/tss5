import React, { useState } from "react";
import OpenEye from "../../assets/eyeButton/OpenEye";
import CloseEye from "../../assets/eyeButton/CloseEye";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { NumberVerification, OTPVerification, ChangePassword } from "../../../../schemas/ForgotPasswordSchema";
import axios from "axios";
import { API_URL } from "../../../../util/API";


let PassForgotModal = () =>{

    let navigate = useNavigate();
    let [ showAlert, setShowAlert ] = useState(false)
    let [ alertMsg, setAlertMsg ] = useState("")
    let [otp, setOtp] = useState({ value : "", state : false })
    // { value : "", state : false }
    let [ nextStep, setNextStep ] = useState(false)
    let [ eyeBtn, setEyeBtn ] = useState(false)

    let NumVerification = useFormik({
        validationSchema : NumberVerification,
        initialValues : {
            contact : ""
        },
        onSubmit : async(formData) =>{
            let ID = localStorage.getItem('Token')
            let response = await axios.post(`${API_URL}/user/authentication/number/verification`, formData, {headers : {Authorization : ID}})
            if(response.data.status === 200){
                setShowAlert(true)
                setOtp({ ...otp, value : response.data.otp, state : true })
                // setOtp({ ...otp, state : false });
                setTimeout(()=>{
                    setShowAlert(false)
                    setOtp({ ...otp, value : response.data.otp, state : false })

                }, 6000);
            }else if(response.data.status === 403){
                if(response.data.errType === 1){
                    setShowAlert(true);
                    setAlertMsg("Your Number Must Contain 10 Digits")
                    setTimeout(()=>{
                        setAlertMsg("")
                        setShowAlert(false)
                    }, 3000);
                }else{
                    setShowAlert(true);
                    setAlertMsg("Your Number is Invalid")
                    setTimeout(()=>{
                        setAlertMsg("")
                        setShowAlert(false)
                    }, 3000);
                }
            }
        }
    })

    let OtpVerification = useFormik({
        validationSchema : OTPVerification,
        initialValues : {
            otp : ""
        },
        onSubmit : async(formData)=>{
            let ID = localStorage.getItem('Token')
            let response = await axios.post(`${API_URL}/user/authentication/otp/verification`, formData, {headers : {Authorization : ID}})
            if(response.data.status === 200 ){
                setNextStep(true);
            }else if(response.data.status === 403){
                if(response.data.errType === 1){
                    setShowAlert(true)
                    setAlertMsg("Your OTP is Invalid");
                    setTimeout(()=>{
                        setAlertMsg("")
                        setShowAlert(false)
                    },3000)
                }
            }
        }
    })

    let PasswordVerification = useFormik({
        validationSchema : ChangePassword,
        initialValues : {
            changepassword : "",
            rechangepassword : ""
        },
        onSubmit : async(formData)=>{
            // console.log(formData)
            let ID = localStorage.getItem('Token')
            let response = await axios.post(`${API_URL}/user/authentication/forgot/password`, formData, {headers : {Authorization : ID}})
            if(response.data.status === 200){
                setTimeout(()=>{
                    let clsBtn = document.getElementById('clsModalBtn')
                    clsBtn.click();
                    navigate(`/user/my-account`)
                },500)
            }else if(response.data.status === 403){
                if(response.data.errType === 1){
                    setShowAlert(true);
                    setAlertMsg("Error 404! ID NOT FOUND");
                    setTimeout(()=>{
                        setShowAlert(false)
                    }, 3000);
                }else{
                    setShowAlert(true)
                    setAlertMsg("Your New Password and Old Password is Same");
                    setTimeout(()=>{
                        setAlertMsg("")
                        setShowAlert(false)
                    },3000)
                }
            }
        }
    })

return (
    <>
    <div className="modal fade" data-backdrop="static" aria-labelledby="staticBackdropLabel" id="PasswordForgot" tabIndex="-1" >
        <div className="modal-dialog">
            <div className="modal-content">
            { 
                showAlert === true ? <div class="alert alert-danger">
                    { otp.state === true ? otp.value : alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
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
                <form onSubmit={NumVerification.handleSubmit}>
                    <div className="my-3">
                        <div className="input-group">
                        <input type="text" name="contact" onChange={NumVerification.handleChange} aria-describedby="basic" placeholder="Enter Your Contact Number" className={ 'form-control '+( NumVerification.errors.contact && NumVerification.touched.contact ? 'is-invalid' : null ) } />
                            <button type="submit" className="btn btn-warning input-group-text btn-sm" id="basic">Get OTP</button>
                        
                        </div>
                        {
                            NumVerification.errors.contact && NumVerification.touched.contact ? <small className="text-danger">{NumVerification.errors.contact} !</small> : null
                        }
                    </div>
                </form>
                <form onSubmit={OtpVerification.handleSubmit}>
                    {
                        otp.value.length != 0 ? <div className="my-3">
                        <div className="input-group">
                            <input type="text" name="otp" onChange={OtpVerification.handleChange} placeholder="Enter Your OTP Here" className={'form-control '+(OtpVerification.errors.otp && OtpVerification.touched.otp ? 'is-invalid' : null)} />
                            <button type="submit" className="btn btn-warning input-group-text btn-sm" id="basic">Verify</button>
                        </div>
                        {
                            OtpVerification.errors.otp && OtpVerification.touched.otp ? <small className="text-danger">{OtpVerification.errors.otp} !</small> : null
                        }
                        </div>
                        : null
                    }
                </form>
                <form onSubmit={PasswordVerification.handleSubmit}>
                    {
                        nextStep ? <>
                        <div className='my-3'>
                        <div className="input-group">
                            <input type={eyeBtn === true ? "text" : "password"} name="changepassword" onChange={PasswordVerification.handleChange}  placeholder="Create New Password" aria-describedby="basic" className={ 'form-control '+(PasswordVerification.errors.changepassword && PasswordVerification.touched.changepassword ? 'is-invalid' : '') } />
                            <span className="bg-light input-group-text" id="basic">
                        {
                            eyeBtn === true ? <span onClick={()=>{setEyeBtn(false)}}><OpenEye /></span> : <span onClick={()=>{setEyeBtn(true)}}><CloseEye /></span> 
                        }
                            </span>
                        </div>
                    {
                        PasswordVerification.errors.changepassword && PasswordVerification.touched.changepassword ? <small className='text-danger'>{PasswordVerification.errors.changepassword} !</small> : null
                    }
                    </div>
                    <div className='my-3'>
                        <input type={eyeBtn === true ? "text" : "password"} name="rechangepassword" onChange={PasswordVerification.handleChange}  placeholder="Re-Enter New Password" className={ 'form-control '+(PasswordVerification.errors.rechangepassword && PasswordVerification.touched.rechangepassword ? 'is-invalid' : '') } />
                    {
                        PasswordVerification.errors.rechangepassword && PasswordVerification.touched.rechangepassword ? <small className='text-danger'>{PasswordVerification.errors.rechangepassword} !</small> : null
                    }
                    </div>
                    <div className="text-center">
                    <button  type='submit' className='btn btn-sm btn-primary'>Change Password</button>    
                    </div> 
                        </> : null
                    }
                </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default PassForgotModal;
import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import {useFormik} from 'formik'
import { useState, useEffect } from "react";
import axios from "axios";
import OpenEye from '../../assets/eyeButton/OpenEye'
import CloseEye from '../../assets/eyeButton/CloseEye'
import {API_URL} from '../../../../util/API';
import Validation from "../../../../schemas/SignupSchema";


let Modal = () =>{

    //take data from API for INDIA cities and states
    let navigate = useNavigate();
    let [indiaCity, setIndiaCity] = useState([]);
    let [indiaState, setIndiaState] = useState([]);

    let State = async()=>{
        let response = await axios.get(`${API_URL}/indiacity/state`)
        setIndiaState(response.data)  
    }

    useEffect(()=>{
        State()
    }, [])

    let City = async(event) =>{
        let state = event.target.value;
        let response = await axios.get(`${API_URL}/indiacity/${state}`)
        setIndiaCity(response.data)
    }
    // -----------------<<END>>-------------------------

    // password seen un-seen section starts
    let [count, setCount] = useState(false)
    // password seen un-seen section ends


    // data post for signup section starts

    let [checkEmail, setCheckEmail] = useState(0)
    let signupForm = useFormik({
        validationSchema : Validation,
        initialValues :{
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            dob : "",
            state : "",
            city : ""
        },
        onSubmit : async(formData)=>{
            await axios.post(`${API_URL}/authentication/signup`, formData).then(response =>{
                // console.log(response.data)
                if(response.data.success === false){
                    setCheckEmail(1)
                }else{
                    setTimeout(()=>{
                        let clsBtn = document.getElementById('clsModalBtn')
                        let resetBtn = document.getElementById('resetBtn')
                        resetBtn.click();
                        clsBtn.click();
                    }, 1000);
                }
            })
        }
    })
    // data post for signup section ends


return (
    <>
    <div className="modal fade" id="Open" tabIndex="-1" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <form onSubmit={signupForm.handleSubmit}>
                    <div className="card">
                            <div className="card-header ">
                            <div className="row  p-0">
                                <div className="col-md-10">
                                    <p style={{display : "inline"}} >
                                    <span style={{ fontSize : "30px", fontFamily : "SFProDisplay-Bold, Helvetica, Arial, sans-serif;" ,fontWeight : "bolder"}}>Create an Account</span>
                                <br />
                                    <span style={{fontSize :"16px", fontFamily : "inherit"}}>It's quick and easy  </span> 
                                    <button type="reset" id="resetBtn" className="btn btn-sm"><i class="fa fa-refresh" aria-hidden="true"></i></button>
                                    </p>
                                </div>
                                <div className="col-md-2">
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
                            </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="">
                                            <input type="text" name="firstname" onChange={signupForm.handleChange} placeholder="Enter Your First Name" className={'form-control '+(signupForm.errors.firstname && signupForm.touched.firstname ? 'is-invalid' : '')} />
                                            {
                                                signupForm.errors.firstname && signupForm.touched.firstname ? <small className="text-danger">{signupForm.errors.firstname} !</small> : ''
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="">
                                            <input type="text" name="lastname" onChange={signupForm.handleChange} className="form-control" placeholder="Enter Your Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <input type="email" name="email" onChange={signupForm.handleChange}  placeholder="email address" className={'form-control '+(signupForm.errors.email && signupForm.touched.email ?'is-invalid' : '')} />
                                    {
                                        signupForm.errors.email && signupForm.touched.email ? <small className="text-danger">{signupForm.errors.email} !</small> : ''
                                    }
                                    {
                                        checkEmail === 1 ? <small className="text-danger">Email Already Exist !</small> : ''
                                    }
                                </div>
                                <div className="my-2">
                                    <div className="input-group">
                                    <input type={count === true ? "text" : "password"} name="password" onChange={signupForm.handleChange}  placeholder="Create Password" aria-describedby="basic" className={'form-control '+(signupForm.errors.password && signupForm.touched.password ? 'is-invalid' : '')} />
                                    <span className="bg-light input-group-text" id="basic">
                                        {
                                            count === true ? <span onClick={()=>{setCount(false)}}><OpenEye /></span> : <span onClick={()=>{setCount(true)}}><CloseEye /></span> 
                                        }
                                    </span>
                                    </div>
                                    {
                                        signupForm.errors.password && signupForm.touched.password ? <small className="text-danger">{signupForm.errors.password} !</small> : ''
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="">
                                            <label>Date of Birth <i class="fa fa-question-circle"></i></label>
                                            <input type="date" name="dob" onChange={signupForm.handleChange} placeholder="Enter Your First Name" className={'form-control '+(signupForm.errors.dob && signupForm.touched.dob ? 'is-invalid' : '')} />
                                            {
                                                signupForm.errors.dob && signupForm.touched.dob ? <small className="text-danger">{signupForm.errors.dob} !</small> : ''
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="">
                                    <label>Select Your State</label>
                                    <select name="state" onChange={(event)=>{signupForm.handleChange(event); City(event)}} className={'form-control '+(signupForm.errors.state && signupForm.touched.state ? 'is-invalid' : '')} >
                                        <option>Select</option>
                                        {
                                            indiaState.map((value)=>{
                                                return(
                                                    <option>{value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {
                                        signupForm.errors.state && signupForm.touched.state ? <small className="text-danger">{signupForm.errors.state} !</small> : ''
                                    }
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <label>Select Your City</label>
                                    <select name="city" onChange={signupForm.handleChange} className={'form-control '+(signupForm.errors.city && signupForm.touched.city ? 'is-invalid' : '')}>
                                        <option>Select</option>
                                        {
                                            indiaCity.map((value)=>{
                                                return(
                                                    <option>{value.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {
                                        signupForm.errors.city && signupForm.touched.city ? <small className="text-danger">{signupForm.errors.city} !</small> : ''
                                    }
                                </div>
                                <div className=" my-0 text-center">
                                    <p style={{fontSize :"14px", fontFamily : "inherit"}}> By clicking Sign Up, you agree to our
                                    <NavLink to="/" className=" text-primary"> Terms </NavLink>, 
                                    <NavLink to="/" className=" text-primary">Privacy Policy </NavLink> and 
                                    <NavLink to="/" className=" text-primary"> Cookies Policy</NavLink>.
                                    You may receive SMS notifications from us and can opt out at any time.</p>
                                <button type="submit" 
                                    className="btn"
                                    style={{backgroundColor : "#00a400"}}
                                >
                                    <h6 className="text-light" style={{fontWeight : "bolder"}}>SignUp</h6>
                                </button>
                                </div>
                            </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Modal;
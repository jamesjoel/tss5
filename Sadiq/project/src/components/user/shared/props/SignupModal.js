import React from "react";
import "../../assets/Modal.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import OpenEye from '../eyeButton/OpenEye'
import CloseEye from '../eyeButton/CloseEye'

function Modal({ setOpenModal }) {

    //take data from API for INDIA cities and states
    let [indiaCity, setIndiaCity] = useState([]);
    let [indiaState, setIndiaState] = useState([]);

    let State = async()=>{
        let response = await axios.get("http://localhost:8080/api/indiacity/state")
        setIndiaState(response.data)  
    }

    useEffect(()=>{
        State()
    }, [])

    let City = async(event) =>{
        let state = event.target.value;
        let response = await axios.get("http://localhost:8080/api/indiacity/"+state)
        setIndiaCity(response.data)
    }
    // -----------------<<END>>-------------------------

    // password seen un-seen section starts
    let [count, setCount] = useState(false)
  // password seen un-seen section ends

return (
    <>
        <div className="modalBackground">
        <div className="modalContainer container">
        <div className="card">
                <div className="card-header ">
                <div className="row  p-0">
                    <div className="col-md-10">
                        <p style={{display : "inline"}} >
                        <span style={{ fontSize : "30px", fontFamily : "SFProDisplay-Bold, Helvetica, Arial, sans-serif;" ,fontWeight : "bolder"}}>Create an Account</span>
                    <br />
                        <span style={{fontSize :"16px", fontFamily : "inherit"}}>It's quick and easy</span>
                        </p>
                    </div>
                    <div className="col-md-2">
                        <button
                        onClick={()=>setOpenModal(false)}
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
                                <input type="text" className="form-control"  placeholder="Enter Your First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <input type="text" className="form-control" placeholder="Enter Your Second Name" />
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <input type="email" className="form-control"  placeholder="email address" />
                    </div>
                    <div className="my-2">
                        <div className="input-group">
                        <input type={count == true ? "text" : "password"} className="form-control"  placeholder="Create Password" aria-describedby="basic" />
                        <span className="bg-light input-group-text" id="basic">
                            {
                                count == true ? <span onClick={()=>{setCount(false)}}><OpenEye /></span> : <span onClick={()=>{setCount(true)}}><CloseEye /></span> 
                            }
                        </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <label>Date of Birth <i class="fa fa-question-circle"></i></label>
                                <input type="date" className="form-control"  placeholder="Enter Your First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                        <label>Select Your State</label>
                        <select onChange={(event)=>City(event)} className="form-control" >
                            <option>Select</option>
                            {
                                indiaState.map((value)=>{
                                    return(
                                        <option>{value}</option>
                                    )
                                })
                            }
                        </select>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <label>Select Your State</label>
                        <select className="form-control">
                            <option>Select</option>
                            {
                                indiaCity.map((value)=>{
                                    return(
                                        <option>{value.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className=" my-0 text-center">
                        <p style={{fontSize :"14px", fontFamily : "inherit"}}> By clicking Sign Up, you agree to our
                        <NavLink to="/" className=" text-primary"> Terms </NavLink>, 
                        <NavLink to="/" className=" text-primary">Privacy Policy </NavLink> and 
                        <NavLink to="/" className=" text-primary"> Cookies Policy</NavLink>.
                        You may receive SMS notifications from us and can opt out at any time.</p>
                    <NavLink to="/admin" onClick={()=>setOpenModal(false)}
                        className="btn for"
                        style={{backgroundColor : "#00a400"}}
                    >
                        <h6 className="text-light" style={{fontWeight : "bolder"}}>SignUp</h6>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Modal;
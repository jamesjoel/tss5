import React, { useEffect, useState } from 'react'
import axios from 'axios';



const SignUp = () => {
     let [city, setCity] = useState([]);
     let [state, setState] = useState([]);


       useEffect(()=>{
        axios.get("http://localhost:8080/api/city/state").then(response=>{setState(response.data)})
    })

    let getCity = (event)=>{
        let x = event.target.value;
        axios.get("http://localhost:8080/api/city/"+x).then(response=>{
            setCity(response.data)
        })
    }
    return (
        <>
   <div className='container'>
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <div className='card'>
                    <div className='card-header'>
                    <h4> User Registration  </h4>
                    </div>
                    <div className='card-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-2' style={{backgroundColor: "#D6C7AE", textAlign: "center"}}>
                             <label>Personal Details</label>
                             </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <label>Full Name</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='my-3'>
                        <label>Mobile Number</label>
                        <input type='number' className='form-control'/>
                    </div>
                    <div className='my-3'>
                        <label>Username</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='my-3'>
                        <label>Password</label>
                        <input type='password' className='form-control'/>
                    </div>
                    <div className='my-3'>
                        <label>Re-Write Password</label>
                        <input type='password' className='form-control'/>
                    </div>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-md-8 offset-md-2' style={{backgroundColor: "#D6C7AE", textAlign: "center"}}>
                             <label>Address Details</label>
                             </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <label>State</label>
                        <select className='form-control' onChange={(event)=>{getCity(event)}}>
                            <option>--Select--</option>
                            {
                                state.map((value, index)=>{
                                    return(
                                        <option key={index}>{value}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='my-3'>
                        <label>City</label> <br/>
                        <select className='form-control'>
                            <option> --Select-- </option>
                            {
                                city.map((value)=>{
                                    return(
                                        <option>{value.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    </div>
                    <div className='card-footer'>
                        <label>Already a user?</label> <a href=''> <button className='btn btn-primary'>LogIn</button> </a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp
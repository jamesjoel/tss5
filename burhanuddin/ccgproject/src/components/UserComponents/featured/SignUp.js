import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useFormik} from 'formik'
// import {navigate} from 'react'
import SignUpSchema from '../../../schemas/UserSchema'
// import ErrorModal from '../shared/props/ErrorModal';



const SignUp = () => {
    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);
    let navigate = useNavigate();
     
     let SignUpForm = useFormik({
        validationSchema: SignUpSchema,
        initialValues: {
            name: "",
            gender: "",
            number:"",
            email:"",   
            password:"",
            repassword: "",
            address:"",
            state:"",
            city:""

        } ,
        onSubmit: (formdata)=>{
            // SignUpForm.errors ? console.log(SignUpForm.errors) : ""
           axios.post("http://localhost:8080/api/user", formdata).then(response=>{console.log(response.data)})
            navigate("/login")
        } 
     })
     
    


       useEffect(()=>{
        axios.get("http://localhost:8080/api/city/state").then(response=>{setState(response.data)})
    })

    let getCity = (event)=>{
        let x = event.target.value;
        axios.get("http://localhost:8080/api/city/"+x).then(response=>{setCity(response.data)})
    }



    
    return (
        <>
        <div className='container'>
        <form onSubmit={SignUpForm.handleSubmit}>
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
                            <input type='text' name='name' onChange={SignUpForm.handleChange} className='form-control'/>
                           {
                            SignUpForm.errors.name ? <small className='text-danger'>{SignUpForm.errors.name}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label> Gender </label><br/>
                            Male <input type='radio' name='gender' onChange={SignUpForm.handleChange} value='male'/>
                            Female <input type='radio' name='gender' onChange={SignUpForm.handleChange} value='female'/>
                            {
                            SignUpForm.errors.gender ? <small className='text-danger'>{SignUpForm.errors.gender}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label>Mobile Number</label>
                            <input type='text' name='number' className='form-control' onChange={SignUpForm.handleChange}/>
                            {
                            SignUpForm.errors.number ? <small className='text-danger'>{SignUpForm.errors.number}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label>Username/Email</label>
                            <input type='text' name='email' className='form-control'  onChange={SignUpForm.handleChange}/>
                            {
                            SignUpForm.errors.email ? <small className='text-danger'>{SignUpForm.errors.email}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input type='password' name='password' className='form-control' onChange={SignUpForm.handleChange}/>
                            {
                            SignUpForm.errors.password ? <small className='text-danger'>{SignUpForm.errors.password}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label>Re-Write Password</label>
                            <input type='password' name='repassword' onChange={SignUpForm.handleChange} className='form-control'/>
                            {
                            SignUpForm.errors.repassword ? <small className='text-danger'>{SignUpForm.errors.repassword}</small> : ""
                           }
                        </div>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-md-8 offset-md-2' style={{backgroundColor: "#D6C7AE", textAlign: "center"}}>
                                <label>Address Details</label>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <label>Address line 1</label>
                            <textarea name='address' onChange={SignUpForm.handleChange} className='form-control' ></textarea>
                            {
                            SignUpForm.errors.address ? <small className='text-danger'>{SignUpForm.errors.address}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label>State</label>
                            <select className='form-control' name='state' onChange={(event)=>{ SignUpForm.handleChange(event); getCity(event) }} >
                                <option>--Select--</option>
                                {
                                    state.map((value, index)=>{
                                        return(
                                            <option key={index}>{value}</option>
                                        )
                                    })
                                }
                            </select>
                            {
                            SignUpForm.errors.state ? <small className='text-danger'>{SignUpForm.errors.state}</small> : ""
                           }
                        </div>
                        <div className='my-3'>
                            <label>City</label> <br/>
                            <select className='form-control'onChange={SignUpForm.handleChange} name='city'>
                                <option> --Select-- </option>
                                {
                                    city.map((value)=>{
                                        return(
                                            <option>{value.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {
                            SignUpForm.errors.city ? <small className='text-danger' >{SignUpForm.errors.city}</small> : ""
                           }
                        </div>
                        </div>
                        <div className='card-footer'>

                        <button type='submit' className='btn btn-primary my-3 offset-md-5' data-bs-toggle="modal" data-bs-target="#modal"style={{color: "white"
                        }} >Sign Up</button> 

                         
                             <br/> 

                
                        
                            <label>Already a user?</label> <NavLink to='/login'> <button className='btn btn-bordered'>LogIn</button> </NavLink>
                        </div>
                    </div>
                    
                </div>
            </div>
            </form> 
               
        </div>
       
       
       
    </>
  )
}

export default SignUp
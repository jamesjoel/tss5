import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { API_URL } from '../../../util/API'
import { useNavigate } from 'react-router-dom'
import SingupSchema from '../../../schemas/SignupSchema'

const Signup = () => {

    let navigate = useNavigate();
    let [city, setCity] = useState([]); 
    let [state, setState] = useState([]);

    let signupForm = useFormik({
        validationSchema : SingupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repassword : "",
            gender : "",
            address : "",
            state : "",
            city : "",
            contact : ""
        },
        onSubmit : (data)=>{
            console.log(data);
            axios.post(`${API_URL}/user/signup`, data).then(response=>{
                navigate("/login");
            })
        }
    });


    useEffect(()=>{
        // axios.get("http://localhost:8080/api/city").then(responose=>{
        //     //console.log(responose.data);
        //     setCity(responose.data);
        // })
        axios.get(`${API_URL}/city/state`).then(response=>{
            setState(response.data);
        })
    }, [])

    let getCity = (event)=>{
        
        let x = event.target.value;
        // console.log(x);
        axios.get(`${API_URL}/city/${x}`).then(response=>{
            setCity(response.data);
        })
    }

  return (
    <>
        <div className='container' style={{marginTop : "150px", minHeight : "650px"}}>
            <form onSubmit={signupForm.handleSubmit}>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>User Registration</h4>
                        </div>
                        <div className="card-body">
                            <div className='my-3'>
                                <label>Full Name</label>
                                <input name='name' onChange={signupForm.handleChange} type='text' className={'form-control ' + (signupForm.errors.name && signupForm.touched.name ? 'is-invalid' : '')} />
                                {
                                    signupForm.errors.name && signupForm.touched.name ? <small className='text-danger'>{ signupForm.errors.name }</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>Email/Username</label>
                                <input name='email' onChange={signupForm.handleChange} type='text' className={'form-control ' + (signupForm.errors.email && signupForm.touched.email ? 'is-invalid' : '')} />
                                {
                                    signupForm.errors.email && signupForm.touched.email ? <small className='text-danger'>{signupForm.errors.email}</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>Password</label>
                                <input name='password' onChange={signupForm.handleChange} type='password' className={'form-control ' + (signupForm.errors.password && signupForm.touched.password ? 'is-invalid' : '')} />
                                {
                                    signupForm.errors.password && signupForm.touched.password ? <small className='text-danger'>{signupForm.errors.password}</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>Re-Password</label>
                                <input name='repassword' onChange={signupForm.handleChange} type='password' className={'form-control ' + (signupForm.errors.repassword && signupForm.touched.repassword ? 'is-invalid' : '')} />
                                {
                                    signupForm.errors.repassword && signupForm.touched.repassword ? <small className='text-danger'>{signupForm.errors.repassword}</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>Address</label>
                                <textarea name='address' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.address && signupForm.touched.address ? 'is-invalid' : '')} ></textarea>
                                {
                                    signupForm.errors.address && signupForm.touched.address ? <small className='text-danger'>{signupForm.errors.address}</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>State</label>
                                <select name='state' onChange={(event)=>{signupForm.handleChange(event); getCity(event)}} className={'form-control ' + (signupForm.errors.state && signupForm.touched.state ? 'is-invalid' : '')}>
                                    <option>Select</option>
                                    {
                                        state.map((value, index)=><option key={index}>{value}</option>)
                                    }
                                </select>
                                {
                                    signupForm.errors.state && signupForm.touched.state ? <small className='text-danger'>{signupForm.errors.state}</small> : ''
                                }
                            </div>

                            <div className='my-3'>
                                <label>City</label>
                                <select name='city' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.city && signupForm.touched.city ? 'is-invalid' : '')} >
                                    <option>Select</option>
                                    {
                                        city.map(value=><option key={value._id}>{value.name}</option>)
                                    }
                                </select>
                                {
                                    signupForm.errors.city && signupForm.touched.city ? <small className='text-danger'>{signupForm.errors.city}</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>Gender</label>
                                <br />
                                Male <input name='gender' onChange={signupForm.handleChange} value="male" type='radio' />
                                Female <input name="gender" onChange={signupForm.handleChange} value="female" type='radio' />
                                <br />
                                {
                                    signupForm.errors.gender && signupForm.touched.gender ? <small className='text-danger'>{signupForm.errors.gender}</small> : ''
                                }
                            </div>
                            <div className='my-3'>
                                <label>Contact</label>
                                <input name='contact' onChange={signupForm.handleChange} type='text' className={'form-control ' + (signupForm.errors.contact && signupForm.touched.contact ? 'is-invalid' : '')} />
                                {
                                    signupForm.errors.contact && signupForm.touched.contact ? <small className='text-danger'>{signupForm.errors.contact}</small> : ''
                                }
                            </div>
                            
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'>Singup</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Signup
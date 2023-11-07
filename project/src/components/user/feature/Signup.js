import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

const Signup = () => {

    let [city, setCity] = useState([]); 
    let [state, setState] = useState([]);

    let signupForm = useFormik({
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
            axios.post("http://localhost:8080/api/user/signup", data).then(response=>{
                console.log(response.data);
            })
        }
    });


    useEffect(()=>{
        // axios.get("http://localhost:8080/api/city").then(responose=>{
        //     //console.log(responose.data);
        //     setCity(responose.data);
        // })
        axios.get("http://localhost:8080/api/city/state").then(response=>{
            setState(response.data);
        })
    }, [])

    let getCity = (event)=>{
        
        let x = event.target.value;
        // console.log(x);
        axios.get("http://localhost:8080/api/city/"+x).then(response=>{
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
                                <input name='name' onChange={signupForm.handleChange} type='text' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Email/Username</label>
                                <input name='email' onChange={signupForm.handleChange} type='text' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Password</label>
                                <input name='password' onChange={signupForm.handleChange} type='password' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Re-Password</label>
                                <input name='repassword' onChange={signupForm.handleChange} type='password' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Address</label>
                                <textarea name='address' onChange={signupForm.handleChange} className='form-control' ></textarea>
                            </div>
                            <div className='my-3'>
                                <label>State</label>
                                <select name='state' onChange={(event)=>{signupForm.handleChange(event); getCity(event)}} className='form-control'>
                                    <option>Select</option>
                                    {
                                        state.map((value, index)=><option key={index}>{value}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-3'>
                                <label>City</label>
                                <select name='city' onChange={signupForm.handleChange} className='form-control' >
                                    <option>Select</option>
                                    {
                                        city.map(value=><option key={value._id}>{value.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className='my-3'>
                                <label>Gender</label>
                                <br />
                                Male <input name='gender' onChange={signupForm.handleChange} value="male" type='radio' />
                                Female <input name="gender" onChange={signupForm.handleChange} value="female" type='radio' />
                            </div>
                            <div className='my-3'>
                                <label>Contact</label>
                                <input name='contact' onChange={signupForm.handleChange} type='text' className='form-control' />
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
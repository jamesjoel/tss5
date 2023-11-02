import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Signup = () => {

    let [city, setCity] = useState([]); 

    useEffect(()=>{
        axios.get("http://localhost:8080/api/city").then(responose=>{
            //console.log(responose.data);
            setCity(responose.data);
        })
    }, [])

  return (
    <>
        <div className='container' style={{marginTop : "150px", minHeight : "650px"}}>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>User Registration</h4>
                        </div>
                        <div className="card-body">
                            <div className='my-3'>
                                <label>Full Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Email/Username</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Password</label>
                                <input type='password' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Re-Password</label>
                                <input type='password' className='form-control' />
                            </div>
                            <div className='my-3'>
                                <label>Address</label>
                                <textarea className='form-control' ></textarea>
                            </div>
                            <div className='my-3'>
                                <label>City</label>
                                <select className='form-control' >
                                    <option>Select</option>
                                    {
                                        city.map(value=><option key={value._id}>{value.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className='my-3'>
                                <label>Gender</label>
                                <br />
                                Male <input type='radio' />
                                Female <input type='radio' />
                            </div>
                            <div className='my-3'>
                                <label>Contact</label>
                                <input type='text' className='form-control' />
                            </div>
                            
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-primary'>Singup</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Signup
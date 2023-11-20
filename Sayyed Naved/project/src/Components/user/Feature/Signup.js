import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'

const Signup = () => {
let [State,setState] = useState([])  
let [City,setCity] = useState([])  
let IndiaState = async()=>{
  let response = await axios.get("http://localhost:8080/api/state")
  console.log(response.data)
  setState(response.data)
  // console.log(City)
}
useEffect (()=>{
  IndiaState()

},[])
return (
<>
<div className='container my-5' style={{minHeight : "700px"}}>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
        <div className='card'>
              <div className='card-header text-center bg-primary'>
                <h2 className='text-light'>Signup Form</h2>
              </div>
              <div className='card-body'>
                  <div className='my-3'>
                  <label>First Name</label>
                  <input type='text' className='form-control' placeholder='Enter Your First Name' />
                  </div>
                  <div className='my-3'>
                  <label>Last Name</label>
                  <input type ="text"    className='form-control' placeholder='Enter Your Last Name' />
                  </div>
                  <div className='my-3'>
                  <label>Contact</label>
                  <input type ="text"  className='form-control' placeholder='Enter Your Number' />
                  </div>
                  <div className='my-3'>
                  <label>State</label>
                  <select className='form-control'>
                    <option>Select</option>
                    {
                      State.map((value)=>{
                      return(<option>{value}</option>)
                      })
                    }
                  </select>
                  </div>
                  <div className='my-3'>
                  <label>City</label>
                  <select className='form-control'>
                    <option>Select</option>
                  {
                    City.map((value)=>{
                      return(<option>{value}</option>)
                    })
                  }
                  </select>
                  </div>
              </div>
              <div className='card-footer bg-primary'>
                <button className=' form-control btn btn-primary'>SIGNUP</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
</>
    )
}

export default Signup
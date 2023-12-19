import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Signup = () => {

  let [City,setCity] = useState([]);
  let [state,setState] = useState([]);
  useEffect(()=>{
   //   axios.get("https://localhost:8080/api/state").then(Response=>{
       // console.log(Response);
     //   setCity(Response.data);    
     axios.get("https://localhost:8080/api/city/state").then(response=>{
      setState(response.data);
     })
  }, [])

  let getcity= (event)=>{
    let city = event.target.value;
    axios.get("https://localhost:8080/api/city/"+city).then(response=>{
      console.log(response.data);
    })
  }

  return (
     <>
    <div className='container' style={{marginTop : "150px", minHeight : "650px"}}>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='card-header'>
            <h4>User Registration</h4>
          </div>
          <div className='card-body'>
            <div className='my-3'>
              <label>Full Name</label>
              <input type='text' className='form-control' />  
            </div>
            <div className='my-3'>
              <label>Email/UserName</label>
              <input type='text' className='form-control' />  
            </div>
            <div className='my-3'>
              <label>Contact</label>
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
              <textarea  className='form-control' ></textarea>  
            </div>
            <div className='my-3'>
              <label>State</label>
              <select className='form-control' onChange={(event)=>getCity(event)}>
                  <option>Select</option>
                  {
                    state.map((value,index)=><option key={index}>{value}</option>)
                  }
                </select>         
            </div>
            <div className='my-3'>
              <label>City</label>
              <select className='form-control' >
                <option>select</option>
                {
                    City.map(value=><option>{value.name}</option>)
                }
              </select>
            <div className='my-3'>
              <label>Gender</label>
             <br /> 
             Male <input type='radio' />
             Female <input type='radio' /> 
            </div>
            </div>
            <div className='card-footer'>
              <button className='btn-btn-primary'>Signups</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Signup
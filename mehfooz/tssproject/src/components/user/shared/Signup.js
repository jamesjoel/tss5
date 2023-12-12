import React from 'react'
import{useState,useEffect} from 'react'
import axios from 'axios'

const Signup = () => {
let[city,setCity]=useState([]);
let[state,setstate]=useState([]);

// useEffect(()=>{
  // axios.get("http://localhost:8080/api/City").then(response=>{
  
  //   setcity(response.data);
  // })},[]);
useEffect(()=>{
  axios.get("http://localhost:8080/api/city/state").then(response=>{
      // console.log(response.data)
    setstate(response.data);
  })},[])


  let getCity = (event)=>{
    let x = event.target.value;
    // console.log(x)
    axios.get("http://localhost:8080/api/city/getcity/"+x).then(response=>{
      console.log(response.data)

      setCity(response.data);
    })
   
  }

  return (
    <>
    <div className="container" style={{minHeight:"750px",marginTop:"150px"}}>
     <div className="row">
       <div className="col-md-6 offset-md-3">
         <div className="card">
           <div className="card-header">
             <h2>USER REGISTATION</h2>
             <div className="my-3"></div>
           </div>                                                           
           <div className="card-body">
             <label>FULLNAME</label>
             <input type="text" className='form-control'/>
             <div className="my-2"></div>
             <label>EMAIL</label>
             <input type="text" className='form-control'/>
             <div className="my-2"></div>
             <label>PASSWORD</label>
             <input type="PASSWORD" className='form-control'/>
             <div className="my-2"></div>
             <label>RE-PASSWORD</label>
             <input type="text" className='form-control'/>
             <div className="my-2"></div>
             <label>ADRESS</label>
             <input type="TEXT AREA" className='form-control'/>
             <br/>

             <div className="my-2"></div>
             <label>state</label>
             <select className='form-control' onChange={(event)=>getCity(event)} >
              <option>Select</option>
              {
                state.map((value,index)=><option key={index}>{value}</option>)
              }
             
             
            </select>
             <div className="my-2"></div>
             <br/>
             <label>CITY</label>
             <select>
              <option className='form-control'>Select</option>
              {
                city.map(value=><option key={value._id}>{value.city}</option>)
              }
             
            </select>
            <br/>
           

                <label> Select Gender </label>
                <br/>
                  
                <label>male</label>
                <input type="radio"  name="male" value="male"/> 
                <label>fe-male</label>
                <input type="radio"  name="fe-male" value="fe-male"/>      
        
             <div className="my-2"></div>
             <label>CONTACT</label>
             <input type="TEXT AREA" className='form-control'/>
             <div className="my-2"></div>
             <div className="footer">
               <button type='submit' className='btn btn-primary form-control'>Signup</button>
             </div>
           </div>
         </div>   
       </div>
     </div>
   </div>
    </>
  )
}

export default Signup
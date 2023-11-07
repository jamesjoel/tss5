import React, {useState} from 'react'
import Subscribe from '../shared/Subscribe'
import Box from '../shared/Box'
const About = () => {
 
  let [user, setUser] = useState({ name : "", age : "", contact : "", gender : ""})

 

  return (
    <>
    <div className="container" style={{minHeight : "700px", marginTop : "150px"}}>
 
        <div className="row">
            <div className="col-md-12">
                <h2>About Page</h2>
                <label>Name</label>
                <input onChange={(event)=>setUser({ ...user, name : event.target.value})} type='text' />
                <br />
                <br />
                <label>Age</label>
                <input onChange={(event)=>setUser({ ...user, age : event.target.value})}  type='text' />
                <br />
                <br />
                <label>Contact</label>
                <input onChange={(event)=>setUser({ ...user, contact : event.target.value })}  type='text' />
                <br />
                <br />
                Gender : Male <input value="male" onChange={(event)=>setUser({...user, gender : event.target.value})} type='radio' name='gender' />
                    Female <input value="female" onChange={(event)=>setUser({...user, gender : event.target.value})}  type='radio' name='gender' />
                <br />
                <br />
                <button onClick={()=>console.log(user)}>OK</button>
            </div>
        </div>
    </div>
    <Subscribe />
    </>
  )
}

export default About
import { useState } from 'react'

let Contact = ()=>{
    
        let [data, setData] = useState(1);
    
        let demo = ()=>{
            setData(data+1);
        }
    
    return(
        <>
            <h1>Contact</h1>
            <button onClick={demo} className="btn btn-primary">OK</button>
            <h2>{data}</h2>
            
        </>
    )


}

export default Contact;
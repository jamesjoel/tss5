import { useState } from 'react'
const Comp3 = () => {

    // let name= "Amar";

    let [path, setPath] = useState("/assets/img/1.gif")
    
    

    
    let demo = (a)=>{
        setPath(a);
    }


  return (
    <>
       <img src={path} style={{ height : "400px", width : "400px"}} />
       <br />


       <img onMouseOver={()=>demo("/assets/img/1.gif")} src='/assets/img/1.gif' style={{ height : "100px", width : "100px"}} />


       <img onMouseOver={()=>demo("/assets/img/2.jpg")} src='/assets/img/2.jpg' style={{ height : "100px", width : "100px"}} />


       <img onMouseOver={()=>demo("/assets/img/3.jpg")} src='/assets/img/3.jpg' style={{ height : "100px", width : "100px"}} />


       <img onMouseOver={()=>demo("/assets/img/4.jfif")} src='/assets/img/4.jfif' style={{ height : "100px", width : "100px"}} />

    </>
  )
}

export default Comp3
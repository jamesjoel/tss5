import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'




const Teacher = () => {
    let[product,setproduct]=useState ([]);
    
    axios.get("https://fakestoreapi.com/products").then(response=>{
        setproduct(response.data);
    })




    /*let[teacher,setteacher] = useState([]);
    useEffect(()=>{
        axios.get("http://Localhost:8080/api/teacher").then((response)=>{
            console.log(response.data)
            setteacher(response.data);})
    },[])*/

   
  return (
  <>
  { product.map((value,index)=>{
    return(
    <div className="row">
        <div className="col-md-3">
            <div className="card">
                <img className='card-img-top src={value.image} style={{height:200px}}'/>
                <div className="card-body">
                    <p>{value.title}</p>
                    <p>{value.price}</p>
                </div>
                <div className="card-footer">
                    <button className='btn btn-sm btn-dark'>buy</button>
                </div>
            </div>
        </div>
    </div>

   )} )};
   {/* <div className="row">
    <div className="col-md-3">
        <div className="card">
    {product.map((value,index)=>{
            return(
                
                
                
                  
                
            )
        })}
        </div>
    </div>
   
   </div> */}
   
 
  </>
  
  )
}

export default Teacher
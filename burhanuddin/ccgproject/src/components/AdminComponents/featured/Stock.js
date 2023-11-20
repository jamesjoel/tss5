import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Stock = () => {
  let [stock, setStock] = useState([])

  useEffect(()=>{
    // axios.get("https://localhost8080/api/product").then((response)=>{setStock(response.data)})
    axios.get("https://fakestoreapi.com/products").then((response)=>{setStock(response.data)})
  }, [])

 

  
  return (
    <>
   

    <div style={{minHeight: 600}}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
          <div className='row'>
          {stock.map((value, index)=>{
            return(
              <div className='col-md-4'>
              <div className='card' style={{height : "500px"}}>
                <img className='card-img-top' style={{height:"300px"}} src={value.image}/>
                <div className='card-body' style={{height: "100px"}}>
                  <h5>{value.title}</h5>
                </div>
                <div className='card-footer' style={{height: "100px"}}>
                  <div className='container'>
                    <div className='row'> 
                    <div className='col-md-6'>
                  <p className='card-text'> {value.price} </p>
                  </div> 
                  <button className='btn btn-info'>View Details </button>
                  </div>
                  </div>
              </div>
              </div>
              </div>
            )
          })}
          </div>
          </div>
        </div>
      </div>
      

    </div>
    </>


  )
}

export default Stock
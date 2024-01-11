import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Category = () => {
  let [allCate, setAllCate] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/api/category').then(response=>{
      console.log(response.data)
      setAllCate(response.data);
    })
  },[])


  return (
    <div className="conatiner my-3" style={{minHeight: "600px"}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <table className='table table-dark table-bordered table-stripped table-hover'>
            <thead>
              <tr>
              <th>S.No</th>
              <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                allCate.map((value , index)=>{
                  return(
                    <tr key={value._id}>
                      <td>{index+1}</td>
                      <td>{value.Category_name}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Category
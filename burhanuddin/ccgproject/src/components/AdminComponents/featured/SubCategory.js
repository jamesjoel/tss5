import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const SubCategory = () => {
    
    
    let [subCate, setSubCate] = useState([]);
    let [AllCate, setAllCate] = useState([]);
    let navigate = useNavigate();



    useEffect(()=>{
        axios.get('http://localhost:8080/api/category').then(response=>{
        setAllCate(response.data);
        
        })    
    },[])
        
     
        
    

    let addSubCate = ()=>{navigate('/admin/subcategory-add')}
    let getCategory = async (event)=>{
        let x = event.target.value;
        axios.get('http://localhost:8080/api/subcategory/subcatelist/'+x).then(response=>{
            setSubCate(response.data)
        })
    }
   
  
    return (
      <div className="conatiner my-3" style={{minHeight: "600px"}}>
        <div className="row">
            
          <div className="col-md-6 offset-md-3 my-3">
            <button className='btn btn-primary offset-md-5' onClick={addSubCate} >Add</button>

            <select className='form-control my-3' name='Category_name' onChange={(event)=>getCategory(event)}>
                <option>----Select----</option>
                {
                    AllCate.map((value)=>{
                        return(
                            <option>{value.Category_name}</option>
                        )
                    })
                }
            </select>

            <table className='table table-dark table-bordered my-3 table-stripped table-hover'>
              <thead>
                <tr>
                <th>S.No</th>
                <th>Sub Category Name</th>
                <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  subCate.map((value , index)=>{
                    return(
                      <tr key={value._id}>
                        <td>{index+1}</td>
                        <td>{value.SubCategory_name}</td>
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
  

export default SubCategory
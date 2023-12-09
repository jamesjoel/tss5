import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API'

const SubCategoryList = () => {
  let [subcate, setSubCate] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/sub-category`).then(response=>{
      setSubCate(response.data.result);
    })
  },[])
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h3>List of All Sub-Category</h3>
                <table className="table table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                            <th>Sub-Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subcate.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.category}</td>
                                        <td>{value.name}</td>
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

export default SubCategoryList
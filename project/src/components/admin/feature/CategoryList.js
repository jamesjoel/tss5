import React, {useEffect, useState} from 'react'
import axios  from 'axios'
import { API_URL } from '../../../util/API'

const CategoryList = () => {

    let [allCate, setAllCate] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/category`).then(response=>{
            setAllCate(response.data.result)
        })
    },[])

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h3>List of All Category</h3>
                <table className="table table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCate.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
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

export default CategoryList
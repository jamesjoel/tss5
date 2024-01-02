import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API'

const SubCategoryList = () => {
  let [allsubcate, setAllSubCate] = useState([]);
  let [subcate, setSubCate] = useState({});
  let btn = useRef()
  

  useEffect(()=>{
    axios.get(`${API_URL}/sub-category`).then(response=>{
        setAllSubCate(response.data.result);
    })
  },[])

  let askDelete = (obj)=>{
    setSubCate(obj);
  }

  let confDelete = async()=>{
    await axios.delete(`${API_URL}/sub-category/${subcate._id}`);
    setAllSubCate(()=>{
        return allsubcate.filter(value=> value._id != subcate._id)
    })
    btn.current.click();
  }

  return (
    <>
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allsubcate.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.category}</td>
                                        <td>{value.name}</td>
                                        <td><button onClick={()=>askDelete(value)} data-toggle="modal" data-target="#delModal" className='btn btn-sm btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    <div className="modal fade" id="delModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Delete Sub-Category</h4>
                </div>
                <div className="modal-body">
                    <p>Are you sure want to delete <strong style={{fontWeight : "bold"}}>{ subcate ? subcate.name : '' }</strong></p>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-sm btn-danger' onClick={()=>confDelete()}>Delete</button>
                    <button ref={btn} data-dismiss="modal" className='btn btn-sm btn-dark'>Close</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SubCategoryList
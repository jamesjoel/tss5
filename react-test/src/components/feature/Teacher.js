import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {NavLink, useNavigate} from 'react-router-dom'


const Teacher = () => {

    let navigate = useNavigate();
    let btn = useRef();
    let [allStu, setAllStu] = useState([]);
    let [stu, setStu] = useState({})

    let askDelete = (obj)=>{
        setStu(obj)
    }
    let askEdit =(obj)=>{
        navigate("/teacher/edit/"+obj.id);
    }
    let confDelete = ()=>{
        axios.delete("http://localhost:8080/teacher/"+stu.id).then(()=>{
            setAllStu(()=>{
                return allStu.filter(value=> value.id != stu.id);
            })
            btn.current.click();
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:8080/teacher").then(response=>{
            setAllStu(response.data);
        })
    },[])
  return (
    <div className="row">
        <div className="col-md-10 offset-md-1 my-4">
            <NavLink to="/teacher/add" className="btn btn-info">Add</NavLink>
            <table className="table table-dark my-4">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Education</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        allStu.map((value, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.salary}</td>
                                    <td>{value.education}</td>
                                    <td><button onClick={()=>askDelete(value)} data-bs-target="#delModal" data-bs-toggle="modal" className='btn btn-danger btn-sm'>Delete</button></td>
                                    <td><button onClick={()=>askEdit(value)} className='btn btn-info btn-sm'>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        <div className="modal fade" id="delModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Delete Teacher</h3>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure want to delete <b>{ stu ?  stu.name : '' }</b></p>
                    </div>
                    <div className="modal-footer">
                        <button className='btn btn-info' ref={btn} data-bs-dismiss="modal">Close</button>
                        <button className='btn btn-danger' onClick={confDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Teacher
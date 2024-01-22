import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Teacher = () => {
    let [teacher, setTeacher] = useState({}) 
    let askDel = (obj)=>{
        setTeacher(obj)
    }
    let [allTeacher, setAllTeacher]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/student').then(response=>setAllTeacher(response.data))
    },[])

    let btn = useRef();
    let del = async ()=>{
        await axios.delete('http://localhost:8080/student/'+teacher.id);
        setAllTeacher(()=>{
            return allTeacher.filter(value=> value.id != teacher.id)
        });
        btn.current.click()
    }
  return (
    <div className="container" style={{minHeight: "500px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <NavLink className='btn btn-info my-3 offset-md-5' to='/addteacher'>Add</NavLink> 
                <table className='col-md-2 my-3 table table-dark table-bordered table-stripped table-hover'>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Address</th>
                            <th>Education</th>
                            <th>Delete</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                            {
                                allTeacher.map((value, index)=>{
                                    return(
                                        <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.salary}</td>
                                        <td>{value.address}</td>
                                        <td>{value.education}</td>
                                        <td><NavLink className="btn btn-danger" onClick={()=>askDel(value)} data-bs-target="#delModal" data-bs-toggle="modal" >Delete</NavLink></td>
                                        </tr>
                                        
                                       
                                    )
                                })
                            }
                    </tbody>

                </table>

            </div>
        </div>
        <div className="modal" id="delModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header"><h2>Delete Teacher</h2></div>
                    <div className="modal-body">Are you sure you want to delete all the data of <b>{ teacher ? teacher.name : "" }</b>?</div>
                    <div className="modal-footer">
                        <button className="btn btn-primary form-control" ref={btn} data-bs-dismiss="modal">Cancel</button> 
                        <button className="btn btn-danger form-control" onClick={del()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Teacher
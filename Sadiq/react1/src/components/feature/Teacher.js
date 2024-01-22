import React,{ useEffect, useState, useRef } from 'react'
import axios from 'axios'

const Teacher = () => {

    let [allTeacher, setAllTeacher] = useState([])
    let [teacher, setTeacher] = useState({})
    let btn = useRef()

    useEffect(()=>{
        axios.get(`http://localhost:8080/teacher`).then(response=>{
            setAllTeacher(response.data)
        })
    }, [])

    let Dlt = (obj) =>{
        setTeacher(obj)
    }

    let confDlt = () =>{
        axios.delete(`http://localhost:8080/teacher/${teacher.id}`).then(response=>{
        setAllTeacher(()=>{
                return allTeacher.filter(value => value.id != teacher.id)
            })
            btn.current.click();
        })

    }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2 my-3'>
                    <table className='table table-info table-hover table-striped'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Age</th>
                                {/* <th>Gender</th> */}
                                <th>Salary</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTeacher.map((value, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.age}</td>
                                            {/* <td>{value.gander}</td> */}
                                            <td>{value.salary}</td>
                                            <td><button className='btn btn-sm btn-danger' onClick={()=>Dlt(value)} data-bs-target="#dltModal" data-bs-toggle="modal">delete</button></td>
                                            <td><button className='btn btn-sm btn-success'>edit</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className='modal fade' tabIndex="-1" id='dltModal' aria-hidden="true">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <h4>Are You Sure You Want To Delete <strong>{teacher ? (teacher.name) : ''}</strong> Data ?</h4>
                    </div>
                    <div className='modal-footer'>
                        <button ref={btn} className='btn  btn-success' data-bs-dismiss="modal">Close</button>
                        <button className='btn  btn-danger' onClick={confDlt
                        }>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Teacher
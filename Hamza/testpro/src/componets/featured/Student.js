import React ,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Student = () => {
  let btn=useRef();
let[allStu , setAllStu]=useState([]);
useEffect(()=>{
  axios.get("http://localhost:9090/student").then(response=>{
     setAllStu(response.data);
  })
})



  return (
    <>
    <div className="row">
      
      <div className='col-md-10 offset-md-1'>
        <NavLink to="/student/add" className="btn btn-info">Add</NavLink>
     <table className='table table-dark my-4 '>
      
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>Collegeyear</th>
          <th>Education</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
           allStu.map((value ,index)=>{
            return(

            <tr key={index}>
              <td>{index+1}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.collegeyear}</td>
              <td>{value.education}</td>
              <td ><button data-bs-target="#delmodal" data-bs-toggle="modal" className='btn btn-danger'>Delete</button></td>

            </tr>
            )

           })
        }
      </tbody>
     </table>


      </div>
      </div>
      <div className="modal" id="delmodal">
        <div className="modal dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Delete Student
              </h3>
            </div>
            <div className="modal-body">
              <p>Are you sure want to delete</p>
            </div>
            <div className="modal-footter">
              <button className='btn-btn-info' ref={btn} data-bs-dismiss="modal">Close</button>
              <button className='btn-btn-danger'>Delete</button>
            </div>
          </div>
        </div>
    </div>
    </>
  
  )


  }

export default Student
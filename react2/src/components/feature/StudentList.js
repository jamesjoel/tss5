import React, {useState, useEffect} from 'react'
import axios from 'axios'
const StudentList = () => {
    let [stu, setStu] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/student").then(response=>{
            setStu(response.data);
        })
    },[])

  return (
    <div className='container my-4'>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            stu.map((value, index)=>{
                                return(
                                    <tr key={value.id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
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

export default StudentList
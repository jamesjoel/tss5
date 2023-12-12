import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API';

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/user`,{
            headers : {Authorization : localStorage.getItem("lorem")}
        }).then(response=>{
            // console.log(response.data);
            setUsers(response.data.result);
        })
    },[])

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h4>List of All Users</h4>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.contact}</td>
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

export default Users
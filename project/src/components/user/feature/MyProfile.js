import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { API_URL } from '../../../util/API'

const MyProfile = () => {

    let [user, setUser] = useState({});

    useEffect(()=>{
        let token = localStorage.getItem("access-token");
        axios.get(`${API_URL}/profile`, {  headers : { Authorization : token }}).then(response=>{
            
            setUser(response.data.info);
        })
    },[])

  return (
    <>
        <div className='container' style={{minHeight : "700px", marginTop  : "150px"}}>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Your Profile</h4>

                        </div>
                        <div className='card-body'>
                            <table className='table table-dark'>
                                <tbody>

                                <tr>
                                    <td>Full Name</td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{user.city}</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>{user.state}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{user.gender}</td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>{user.contact}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyProfile
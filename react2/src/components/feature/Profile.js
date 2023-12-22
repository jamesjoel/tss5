import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Profile = () => {
    let navigate = useNavigate();
    let [user, setUser] = useState({});

    useEffect(()=>{
        if(! localStorage.getItem("access-token"))
        {
            navigate("/login");
        }
    },[])


    useEffect(()=>{
        axios.get("https://api.escuelajs.co/api/v1/auth/profile",{
            headers : {Authorization : "Bearer "+localStorage.getItem("access-token")}
        })
        .then(response=>{
            // console.log(response.data);
            setUser(response.data);
        })
    },[])


  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <table className="table table-dark">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{user.role}</td>
                        </tr>
                        <tr>
                            <td>Avatar Image</td>
                            <td><img src={user.avatar} style={{height : "100px"}} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Profile
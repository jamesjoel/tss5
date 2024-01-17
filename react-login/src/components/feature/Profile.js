import React, {useState, useEffect} from 'react'
import { getUserProfileData } from '../../services/ProfileService'
import { useNavigate } from 'react-router-dom'
const Profile = () => {

  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token"))
    {
      navigate("/login");
    }
    else{
      getData();
    }
  },[])

  let [user, setUser] = useState({});
  let getData = async()=>{
    let response = await getUserProfileData();
    setUser(response)
  }
  

  return (
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
        <h4>User Prfile</h4>
        { user.name }
      </div>
    </div>
  )
}

export default Profile
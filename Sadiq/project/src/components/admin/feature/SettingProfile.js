import {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API'
import {useNavigate} from 'react-router-dom'

const SettingProfile = () => {

  let navigate = useNavigate();

  let [userData, setUserData] = useState()
let IDPost = async() =>{
  let ID = localStorage.getItem('Token')
  let response = await axios.get(`${API_URL}/authentication/accounts/${ID}`)
  // console.log(response.data)
  setUserData(response.data)
}
  useEffect(()=>{
    IDPost()
  }, [])

  let pageData = [
    {
      name : "First Name",
      data : userData?.firstname
    },
    {
      name : "Last Name",
      data : userData?.lastname
    },
    {
      name : "Contact",
      data : userData?.contact
    },
    {
      name : "email ID",
      data : userData?.email
    },
    {
      name : "Date of Birth",
      data : userData?.dob
    },
    {
      name : "State",
      data : userData?.state
    },
    {
      name : "City",
      data : userData?.city
    },
    {
      name : "Address",
      data : userData?.address
    }
  ]

  let updateData = () =>{
  let ID = localStorage.getItem('Token')
    navigate(`/admin/update/${ID}`)
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
            <div className='card'>
              <div className='card-header'>
                <h4 className='text-center'>PROFILE</h4>
              </div>
              <div className='card-body'>
                <table className='table table-hover table-striped'>
                  <tr>
                  {
                    pageData.map((value)=>{
                      return(
                        <thead>
                          <th>{value.name}</th>
                          <td>{value.data}{value.data === "" ? <button onClick={updateData} className='btn btn-outline-primary btn-sm' style={{display : "inline", float : "right"}}>Update</button> : null}</td>
                        </thead>
                      )
                    })
                  }
                  </tr>
                </table> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingProfile
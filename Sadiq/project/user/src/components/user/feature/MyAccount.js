import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../util/API'
import { useNavigate } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const MyAccount = () => {

  let navigate = useNavigate();
  let [ userData, setUserData ] = useState({});
  let [ showAlert, setShowAlert ] = useState(false);
  let [ alertMsg, setAlertMsg ] = useState("");
  useEffect(()=>{
    let ID = localStorage.getItem('Token')
    axios.get(`${API_URL}/user/authentication/accounts`, {  headers : { Authorization : ID }}).then(Response =>{
      if(Response.data.status === 200){
        setUserData(Response.data.account)
      }else if(Response.data.status === 403){
        setShowAlert(true);
        setAlertMsg("Error 403! account not found")
        setTimeout(()=>{
          setShowAlert(false)
        }, 3000);
      }else{
        setShowAlert(true);
        setAlertMsg("Error 404! account not found")
        setTimeout(()=>{
          setShowAlert(false)
        }, 3000);
      }
    })
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
      navigate(`/user/update/data`)
    }

  return (
    <>
    <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2' style={{ minHeight : "700px" }}>
              {
                showAlert === true ? <div class="alert alert-danger">
                { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
            </div> : null
              }
              <div className='card'>
                <div className='card-header text-center'>
                  <h3>Welcome {userData?.firstname}</h3>
                </div>
                <div className='card-body text-center'>
                  <table className='table table-info table-hover table-striped'>
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
        <Footer />
    </>
  )
}

export default MyAccount